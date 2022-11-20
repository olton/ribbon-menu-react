import {Icon} from "../helpers/icon";
import {Image} from "../helpers/image";

export const RibbonToolButton = ({className, cls, icon, image, caption, ...rest}) => {
    return (
        <button className={`ribbon-tool-button ${cls} ${className}`} title={caption} {...rest}>
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