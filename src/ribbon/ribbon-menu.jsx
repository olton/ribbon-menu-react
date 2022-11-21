import React, {Children, cloneElement} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const RibbonTabNav = ({staticTab, label, active, className, children, onChangeActiveTab, onClick, index}) => {
    const classes = classNames(
        className,
        {static: staticTab},
        {active}
    )

    return (
        <li className={classes} onClick={onClick}>
            <a data-label={label.toLowerCase()} data-static={staticTab} data-key={index} href={`#${label.toLowerCase()}`}>{label}</a>
        </li>
    )
}

export const RibbonTab = ({title, active, className, children}) => {
    const classes = classNames(
        `ribbon-section`,
        className,
        {active}
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export const RibbonDivider = () => {
    return (
        <div className="ribbon-divider" />
    )
}

export const RibbonGroup = ({cls, className, children, title}) => {
    return (
        <div className={['group', cls, className].join(" ")}>
            {children}
            {title && (
                <span className="title">{title}</span>
            )}
        </div>
    )
}

export class RibbonMenu extends React.Component {
    constructor(props) {
        super(props);

        const tabs = Children.toArray(props.children)
        let staticTabs = 0

        tabs.forEach((tab, index) => {
            if (tab.props.mode === 'static') {
                staticTabs++
            }
        })

        this.state = {
            activeTab: tabs[staticTabs].props.label.toLowerCase()
        }

        this.onTabClick = this.onTabClick.bind(this)
    }

    renderTabs(){
        const { children = [] } = this.props;
        const { activeTab } = this.state;

        return Children.map(children, (el, index)=>{
            return (
                <RibbonTabNav
                    key={index}
                    index={index}
                    staticTab={el.props.mode === 'static'}
                    label={el.props.label}
                    active={activeTab.toLowerCase() === el.props.label.toLowerCase()}
                    onClick={this.onTabClick}
                />
            )
        })
    }

    renderSections(){
        const { children = [] } = this.props;
        const { activeTab } = this.state;

        return Children.map(children, (el, index)=>{
            return (
                <RibbonTab key={index} label={el.props.label.toLowerCase()} active={activeTab === el.props.label.toLowerCase()}>
                    {el.props.children}
                </RibbonTab>
            )
        })
    }

    onTabClick(e){
        const staticTab = e.target.getAttribute('data-static') === 'true'
        const label = e.target.getAttribute('data-label')

        if (staticTab) {
            return
        }

        this.setState({
            activeTab: label
        })
    }

    render(){
        const {children, className, ...attrs} = this.props
        const {activeTab} = this.state

        const classes = classNames(
            `ribbon-menu`,
            className
        )

        return (
            <nav className={classes} {...attrs}>
                <ul className={`tabs-holder`}>
                    {this.renderTabs()}
                </ul>

                <div className={`content-holder`}>
                    {this.renderSections()}
                </div>
            </nav>
        )
    }
}

export const RibbonSubGroup = ({children, style}) => {
    return (
        <div className="ribbon-sub-group" style={style}>
            {children}
        </div>
    )
}