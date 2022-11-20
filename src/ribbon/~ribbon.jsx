import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const RibbonTabNav = ({navLabel, className, onChangeActiveTab}) => {
    const classes = classNames(
        className,
    )

    return (
        <li className={classes} onClick={ () => { onChangeActiveTab(navLabel) } }>
            <a href={`#${navLabel}`}>{navLabel}</a>
        </li>
    )
}

RibbonTabNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,
}

RibbonTabNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {},
}

export const RibbonTab = ({children, label, activeTab, ...attrs}) => {
    const classes = classNames(
        'section',
        { active: activeTab === label },
    );

    return (
        <div className={classes} {...attrs}>
            {children}
        </div>
    );
}

RibbonTab.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    activeTab: PropTypes.string,
};

RibbonTab.defaultProps = {
    children: null,
    activeTab: '',
};

export class RibbonMenu extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        vertical: PropTypes.bool,
    };

    static defaultProps = {
        children: null,
        className: '',
        vertical: false,
    };

    state = {
        activeTab: null,
    }

    componentDidMount() {
        const { children = [] } = this.props;

        const activeTab = this.getChildrenLabels(children)[0];

        this.setActiveTab(activeTab);
    }

    getChildrenLabels = children => children.map(({ props }) => props.label)

    setActiveTab = activeTab => {
        const { activeTab: currentTab } = this.state;

        if (currentTab !== activeTab) {
            this.setState({
                activeTab,
            });
        }
    }

    renderTabs = () => {
        const { children = [] } = this.props;
        const { activeTab } = this.state;

        return this.getChildrenLabels(children).map(navLabel => (
            <RibbonTabNav
                key={navLabel}
                navLabel={navLabel}
                className={classNames({ active: activeTab === navLabel })}
                onChangeActiveTab={this.setActiveTab}
            />
        ));
    }

    render() {
        const { activeTab } = this.state;
        const {
            children, className, vertical, ...attrs
        } = this.props;

        const classes = classNames(
            'ribbon-menu',
            className,
            { vertical },
        );

        return (
            <div className={classes} {...attrs}>
                <ul className="tabs-holder">
                    {this.renderTabs()}
                </ul>
                <div className="content-holder">
                    {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
                </div>
            </div>
        );
    }
}