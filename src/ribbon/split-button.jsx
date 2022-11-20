import {Children, cloneElement} from "react";
import Dropdown from "../helpers/dropdown";
import {RibbonIconButton} from "./icon-button";
import {RibbonButton} from "./button";

export const RibbonSplitButton = ({children: ch, caption, icon, image, ...rest}) => {
    const children = Children.toArray(ch)
    return (
        <div className="ribbon-split-button">
            <RibbonButton icon={icon} image={image} className="ribbon-main" {...rest}/>

            <Dropdown>
                <RibbonIconButton caption={caption} className="ribbon-split dropdown-toggle"/>

                {cloneElement(children[0], {
                    className: `ribbon-dropdown`
                })}
            </Dropdown>
        </div>
    )
}