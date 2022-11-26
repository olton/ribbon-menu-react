import {Children, cloneElement} from "react";
import Dropdown from "../helpers/dropdown.jsx";
import {RibbonIconButton} from "./icon-button.jsx";
import {RibbonButton} from "./button.jsx";
import classNames from "classnames";

export const RibbonSplitButton = ({children: ch, caption, icon, image, ...rest}) => {
    const children = Children.toArray(ch)
    const classes = classNames("ribbon-split-button")
    return (
        <div className={classes}>
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