import React from "react";

export const Caption = ({caption, cls, className}) => {
    return (
        <span className={`caption ${cls} ${className}`}>
            <span>{caption}</span>
        </span>
    )
}

Caption.defaultProps = {
    caption: "",
    cls: "",
    className: ""
}