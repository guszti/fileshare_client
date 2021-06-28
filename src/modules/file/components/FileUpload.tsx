import { ChangeEvent, FC, useState } from "react";
import { apiService } from "../../../common/services/apiService";
import { File } from "../types";
import ErrorSpan from "../../../common/components/ErrorSpan";

type Props = {
    fetchFiles(): void;
};

const FileUpload: FC<Props> = ({ fetchFiles }) => {
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");

    const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
        setError("");

        try {
            const { data } = await apiService.upload<File>(
                "/files/upload",
                e.target.files?.item(0)!
            );

            setFileName(data.name);
        } catch (e) {
            setError(e.response.data.message);
            setFileName("");
        }
    };

    const onSave = async () => {
        setError("");

        try {
            await apiService.post<File>("/files/save", { name: fileName });
            await fetchFiles();
        } catch (e) {
            setError(e.response?.data?.message || "Unknown error.");
        }

        setFileName("");
    };

    return (
        <div>
            <input
                className="form-control form-control-lg"
                type="file"
                onChange={onFileSelect}
            />
            {error && <ErrorSpan error={error} />}
            <div className="d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-success btn-lg mt-2"
                    onClick={onSave}
                    disabled={!fileName}
                >
                    Save File
                </button>
            </div>
        </div>
    );
};

export default FileUpload;
