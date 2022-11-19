import React from "react";

export const Image = ({src, cls, className}) => {
    return (
        <span className="icon">
            <img src={src} className={`${cls} ${className}`}/>
        </span>
    )
}

Image.defaultProps = {
    src: "",
    cls: "",
    className: ""
}