import {Children, cloneElement, useState} from "react"
import Dropdown from "../helpers/dropdown";
import classNames from "classnames";
import PropTypes from "prop-types";

export const RibbonDropdownDivider = () => {
    return (
        <li className="divider"></li>
    )
}

export const RibbonDropdownItem = ({className, target, caption, ...rest}) => {
    const classes = classNames(
        className
    )
    return (
        <li className={classes} {...rest}>
            <a href={target}>{caption}</a>
        </li>
    )
}

export const RibbonDropdownCheckItem = ({className, target, caption, checked, ...rest}) => {
    const [checkState, setCheckState] = useState(checked)
    const classes = classNames(
        className,
        "checked-item",
        {checked: checkState}
    )
    return (
        <li className={classes} {...rest} onClick={(e)=>{
            const classes = e.target.parentNode.className.split(" ")
            setCheckState(!classes.includes("checked"))
        }}>
            <a href={target}>{caption}</a>
        </li>
    )
}

RibbonDropdownCheckItem.propTypes = {
    target: PropTypes.string,
    caption: PropTypes.string,
    checked: PropTypes.bool,
}

RibbonDropdownCheckItem.defaultProps = {
    target: "#",
    caption: "",
    checked: false,
}

export const RibbonDropdownMenu = ({children}) => {
    return (
        <ul className="ribbon-dropdown">
            {children}
        </ul>
    )
}

export const RibbonDropdown = (props) => {
    const children = Children.toArray(props.children)
    const toggle = children[0], menu = children[1]

    return (
        <Dropdown>
            {toggle && cloneElement(toggle, {
                className: [`dropdown-toggle`, toggle.props.className].join(" ")
            }, toggle.props.children)}

            <RibbonDropdownMenu>
                {menu.props.children}
            </RibbonDropdownMenu>
        </Dropdown>
    )
}

