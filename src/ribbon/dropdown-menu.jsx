import {Children, cloneElement} from "react"
import Dropdown from "../helpers/dropdown";
import classNames from "classnames";
import PropTypes from "prop-types";

export const RibbonDropdownDivider = () => {
    return (
        <li className="divider"></li>
    )
}

export const RibbonDropdownItem = ({target, caption, checked, checkedOne, ...rest}) => {
    const classes = classNames(
        {checked, "checked-one": checkedOne}
    )
    return (
        <li className={classes} {...rest}>
            <a href={target}>{caption}</a>
        </li>
    )
}

RibbonDropdownItem.propTypes = {
    target: PropTypes.string,
    caption: PropTypes.string,
    checked: PropTypes.bool,
    checkedOne: PropTypes.bool,
}

RibbonDropdownItem.defaultProps = {
    target: "#",
    caption: "",
    checked: false,
    checkedOne: false,
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
    //
    // console.log(children)
    // console.log(menu)

    return (
        <Dropdown>
            {toggle && cloneElement(toggle, {
                className: [`dropdown-toggle`, toggle.props.className].join(" ")
            }, toggle.props.children)}

            {/*<button className={`dropdown-toggle`}>Drop</button>*/}

            <RibbonDropdownMenu>
                {menu.props.children}
            </RibbonDropdownMenu>
        </Dropdown>
    )
}

