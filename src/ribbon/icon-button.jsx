import {Icon} from "../helpers/icon";
import {Image} from "../helpers/image";
import {Caption} from "../helpers/caption";

export const RibbonIconButton = ({className, cls, icon, image, caption}) => {
    return (
        <button className={`ribbon-icon-button ${cls} ${className}`}>
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