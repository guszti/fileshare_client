import { FC, useEffect, useState } from "react";
import FileUpload from "./FileUpload";
import { apiService } from "../../../common/services/apiService";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../redux/actions";
import { File } from "../types";
import { getFiles } from "../redux/selectors";
import { map } from "lodash";
import FileCard from "./FileCard";
import ErrorSpan from "../../../common/components/ErrorSpan";
import { getUserId } from "../../auth/redux/selectors";

const FilesPage: FC = () => {
    const dispatch = useDispatch();

    const files = useSelector(getFiles);

    const [error, setError] = useState("");

    const userId = useSelector(getUserId);

    const fetchFiles = async () => {
        try {
            const { data } = await apiService.get<File[]>("/files");

            dispatch(setFiles(data));
        } catch (e) {
            setError(e.message);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div>
            {userId && (
                <>
                    <FileUpload fetchFiles={fetchFiles} />
                    <hr />
                </>
            )}
            {error && <ErrorSpan error={error} />}
            {files.length ? (
                map(files, (file) => <FileCard key={file.id} file={file} />)
            ) : (
                <h3>Nothing to show here yet...</h3>
            )}
        </div>
    );
};

export default FilesPage;
