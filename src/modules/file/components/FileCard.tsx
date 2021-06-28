import { FC } from "react";
import { File } from "../types";
//
import "./FileCard.scss";

type Props = {
    file: File;
};

const FileCard: FC<Props> = ({ file }) => {
    return (
        <div className="FileCard card w-75">
            <div className="card-body">
                <h5 className="card-title">{file.name}</h5>
                <small className="card-text">{`Created by ${file.user}, at ${file.createdAt}`}</small>
                <br />
                <div
                    className="buttons btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                >
                    <button type="button" className="btn btn-outline-primary">
                        Download
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                        Copy url
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileCard;
