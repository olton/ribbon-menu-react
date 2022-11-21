import React from "react";

export class RibbonButtonGroup extends React.Component {
    constructor(props){
        super(props);

        const pressedButtons = [];

        if (!Array.isArray(props.active)) {
            pressedButtons.push(props.active);
        } else {
            props.active.forEach( (ind)=>{
                pressedButtons.push(ind);
            })
        }

        this.state = {
            radio: this.props.radio,
            buttons: pressedButtons
        };

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(index){
        const {buttons, radio} = this.state;
        const active = buttons.includes(index);
        const button = React.Children.toArray(this.props.children)[index - 1];

        if (!radio) {
            if (!active) {
                buttons.push(index)
            } else {
                buttons.splice(buttons.indexOf(index), 1)
            }

            this.setState({
                buttons: buttons
            });
        } else {
            this.setState({
                buttons: [index]
            });
        }
        this.props.onButtonClick(button);
    }

    render(){
        const {cls, className, clsActive, clsButton, style} = this.props;
        const {buttons} = this.state;

        return (
            <div className={`ribbon-toggle-group button-group ${cls} ${className}`} style={style}>
                {
                    React.Children.map(this.props.children, (button, index) => {
                        const correctIndex = index + 1;
                        const isActive = buttons.includes(correctIndex);
                        return (
                            React.cloneElement(button, {
                                cls: button.props.cls + ' ' + clsButton + ' ' + (isActive ? clsActive === '' ? ' active ' : clsActive : ''),
                                index: correctIndex,
                                onClick: this.buttonClick.bind(this, correctIndex)
                            })
                        )
                    })
                }
            </div>
        )
    }
}

RibbonButtonGroup.defaultProps = {
    active: 1,
    radio: false,
    cls: "",
    className: "",
    clsActive: "active",
    clsButton: "",
    onButtonClick: f => f
};