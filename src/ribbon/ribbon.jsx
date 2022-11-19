import React from "react";

export class RibbonMenu extends React.Component {
    constructor(props) {
        super(props);

        let activeTab = 0

        this.state = {
            tab: activeTab
        }
    }

    render(){
        return (
            <nav className={`ribbon-menu`}>
                {this.props.children}
            </nav>
        )
    }
}