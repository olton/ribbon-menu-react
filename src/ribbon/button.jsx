import {Icon} from "../helpers/icon";
import {Image} from "../helpers/image";
import {Caption} from "../helpers/caption";

export const RibbonButton = ({className, cls, icon, image, caption}) => {
    return (
        <button className={`ribbon-button ${cls} ${className}`}>
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
    caption: "Button"
}