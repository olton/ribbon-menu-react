import React from "react";

export const Icon = ({name, cls, className}) => {
    return (
        <span className="icon">
            <span className={`${name} ${cls} ${className}`}></span>
        </span>
    )
}

Icon.defaultProps = {
    name: "",
    cls: "",
    className: ""
}