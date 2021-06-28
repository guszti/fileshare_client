import { FC } from "react";
//
import "./ErrorSpan.scss";

type Props = {
    error: string;
};

const ErrorSpan: FC<Props> = ({ error }) => (
    <span className="ErrorSpan">{error}</span>
);

export default ErrorSpan;
