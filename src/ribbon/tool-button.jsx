import {Icon} from "../helpers/icon";
import {Image} from "../helpers/image";

export const RibbonToolButton = ({className, cls, icon, image, caption}) => {
    return (
        <button className={`ribbon-tool-button ${cls} ${className}`}>
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