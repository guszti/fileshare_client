import { FC, useState } from "react";
import { File } from "../types";
//
import "./FileCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../auth/redux/selectors";
import { apiService } from "../../../common/services/apiService";
import ErrorSpan from "../../../common/components/ErrorSpan";
import { deleteFile } from "../redux/actions";
import { CLIENT_URL } from "../../../common/constants";

type Props = {
    file: File;
};

const FileCard: FC<Props> = ({ file }) => {
    const userId = useSelector(getUserId);

    const isOwnedByCurrentUser = userId === file.user._id;

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const onDelete = async () => {
        setError("");

        try {
            await apiService.delete(`/files/${file._id}`);

            dispatch(deleteFile(file._id));
        } catch (e) {
            setError(e.response?.data?.message || "Unknown error.");
        }
    };

    const onCopyClick = async () => {
        const url = `${CLIENT_URL}/download/${file._id}`;

        await navigator.clipboard.writeText(url);
    };

    return (
        <div className="FileCard card w-75">
            <div className="card-body">
                <h5 className="card-title">{file.name}</h5>
                <small className="card-text">{`Created by ${file.user.username}, at ${file.createdAt}`}</small>
                <br />
                <div
                    className="buttons btn-group mt-3"
                    role="group"
                    aria-label="Basic outlined example"
                >
                    <a
                        className="btn btn-outline-primary"
                        href={`${CLIENT_URL}/download/${file._id}`}
                        download={file.name}
                    >
                        Download
                    </a>
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onCopyClick}
                    >
                        Copy url
                    </button>
                    {isOwnedByCurrentUser && (
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    )}
                </div>
                {error && <ErrorSpan error={error} />}
            </div>
        </div>
    );
};

export default FileCard;
