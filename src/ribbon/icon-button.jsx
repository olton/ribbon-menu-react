import {Icon} from "../helpers/icon.jsx";
import {Image} from "../helpers/image.jsx";
import {Caption} from "../helpers/caption.jsx";

export const RibbonIconButton = ({className, cls, icon, image, caption, ...rest}) => {
    return (
        <button className={`ribbon-icon-button ${cls} ${className}`} {...rest}>
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

RibbonIconButton.defaultProps = {
    className: "",
    cls: "",
    icon: "",
    image: "",
    caption: "Button"
}