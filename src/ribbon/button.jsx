import {Icon} from "../helpers/icon.jsx";
import {Image} from "../helpers/image.jsx";
import {Caption} from "../helpers/caption.jsx";
import classNames from "classnames";

export const RibbonButton = ({className, cls, icon, image, caption, ...rest}) => {
    const classes = classNames("ribbon-button", cls, className)
    return (
        <button className={classes} {...rest}>
            {icon && (
                <Icon name={icon} />
            )}

            {image && (
                <Image src={image} />
            )}

            {caption && (
                <Caption caption={caption}/>
            )}
        </button>
    )
}

RibbonButton.defaultProps = {
    className: "",
    cls: "",
    icon: "",
    image: "",
    caption: ""
}