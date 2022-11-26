import {Icon} from "../helpers/icon.jsx";
import {Image} from "../helpers/image.jsx";
import classNames from "classnames";

export const RibbonToolButton = ({className, cls, icon, image, caption, ...rest}) => {
    const classes = classNames(
        "ribbon-tool-button",
        cls,
        className
    )
    return (
        <button className={classes} title={caption} {...rest}>
            {icon && (
                <Icon name={icon} />
            )}

            {image && (
                <Image src={image} />
            )}
        </button>
    )
}

RibbonToolButton.defaultProps = {
    className: "",
    cls: "",
    icon: "",
    image: ""
}