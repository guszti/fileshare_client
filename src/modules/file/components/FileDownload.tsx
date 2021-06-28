import { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//
import "./FileDownload.scss";
import { CLIENT_URL } from "../../../common/constants";
import { apiService } from "../../../common/services/apiService";
import { File } from "../types";

const FileDownload: FC = () => {
    const { id } = useParams() as { id: string };

    const [file, setFile] = useState<File>();

    const history = useHistory();

    useEffect(() => {
        apiService
            .get<File>(`/files/${id}`)
            .then(({ data }) => {
                setFile(data);
            })
            .catch(() => {
                history.push("/");
            });
    }, []);

    return (
        <div className="FileDownload">
            <a
                type="button"
                className="btn btn-primary btn-lg mt-5"
                href={`${CLIENT_URL}/files/download/${id}`}
                download={file?.name}
            >
                Download File
            </a>
        </div>
    );
};

export default FileDownload;
