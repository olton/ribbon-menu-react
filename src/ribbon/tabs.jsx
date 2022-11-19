import React, {Children, Component} from "react";

export const RibbonTab = ({staticTab, target, cls, className, clsAnchor, onClick, children}) => {
    return (
        <li className={`${staticTab ? 'static':''} ${cls} ${className}`}>
            <a className={clsAnchor} href={`${target}`} onClick={onClick}>
                {children}
            </a>
        </li>
    )
}

RibbonTab.defaultProps = {
    staticTab: "",
    caption: "Tab",
    target: "",
    cls: "",
    className: "",
    clsAnchor: "",
    onClick: f => f
}

export const RibbonTabs = ({cls, className, clsTabsList, children}) => {
    return (
        <ul className={`tabs-holder ${clsTabsList} ${cls} ${className}`}>
            {children}
        </ul>
    )
}

RibbonTabs.defaultProps = {
    active: 0,
    cls: "",
    className: "",
    clsTabsList: "",
    clsTab: "",
    onTabClick: f => f
};