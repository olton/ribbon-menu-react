import React from "react";
import { createRoot } from 'react-dom/client';
import {
    RibbonButton,
    RibbonMenu,
    RibbonDivider,
    RibbonGroup,
    RibbonTab,
    RibbonIconButton,
    RibbonToolButton,
    RibbonDropdown,
    RibbonDropdownCheckItem,
    RibbonDropdownDivider,
    RibbonDropdownItem,
    RibbonDropdownMenu,
    RibbonSplitButton,
    RibbonButtonGroup,
    RibbonSubGroup
} from "../src/index.js";
import "../src/css/ribbon.css"
import "./css/index.css"

class App extends React.Component{
    render(){
        return(
            <section className={`container-fluid`}>
                <div className={`container text-center`}>
                    <h1>Ribbon Menu for React</h1>
                    <h3 className={`m-0`}>Copyright 2022 by <a href="https://korzh.com">Korzh.com</a></h3>
                    <h5 className={`m-0`}>Component sponsored by <a href={`https://octostar.co/`}>Octostar.co</a> </h5>
                </div>

                <div className={`container window no-overflow`} style={{height: "600px"}}>
                    <div className={`window-caption`}>
                        <span className={`caption-title`}>Ribbon Menu For React Demo</span>
                        <div className={`caption-buttons`}>
                            <span className={`caption-button btn-min`}></span>
                            <span className={`caption-button btn-max`}></span>
                            <span className={`caption-button btn-clo`}></span>
                        </div>
                    </div>

                    <RibbonMenu>
                            <RibbonTab mode="static" label="Home"></RibbonTab>
                            <RibbonTab label="File">
                                <RibbonGroup title="Push Buttons">
                                    <RibbonButton caption="Mail" icon="mif-envelop"/>
                                    <RibbonButton caption="Share" icon="mif-share"/>

                                    <RibbonDropdown>
                                        <RibbonButton className="dropdown-toggle" caption="Apps" icon="mif-apps"/>
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownCheckItem checked caption="Modification"/>
                                            <RibbonDropdownCheckItem checked caption="Type"/>
                                            <RibbonDropdownCheckItem checked caption="Size"/>
                                            <RibbonDropdownItem caption="Creating" onClick={()=>console.log("ku")}/>
                                            <RibbonDropdownItem caption="Authors"/>
                                            <RibbonDropdownCheckItem checked caption="Tags"/>
                                            <RibbonDropdownItem caption="Names"/>
                                            <RibbonDropdownDivider/>
                                            <RibbonDropdown>
                                                <RibbonDropdownItem caption="Columns..."/>
                                                <RibbonDropdownMenu>
                                                    <RibbonDropdownItem caption="SubItem1"/>
                                                    <RibbonDropdownItem caption="SubItem2"/>
                                                    <RibbonDropdownCheckItem checked caption="SubItem3"/>
                                                </RibbonDropdownMenu>
                                            </RibbonDropdown>
                                        </RibbonDropdownMenu>
                                    </RibbonDropdown>
                                </RibbonGroup>
                                <RibbonGroup title="Icon and Tools Buttons">
                                    <RibbonSubGroup style={{width: '60px'}}>
                                        <RibbonIconButton caption="Mail" icon="mif-envelop"/>
                                        <RibbonIconButton caption="Share" icon="mif-share"/>
                                        <RibbonDropdown>
                                            <RibbonIconButton caption="Apps" icon="mif-apps"/>
                                            <RibbonDropdownMenu>
                                                <RibbonDropdownCheckItem checked caption="Modification"/>
                                                <RibbonDropdownCheckItem checked caption="Type"/>
                                                <RibbonDropdownCheckItem checked caption="Size"/>
                                                <RibbonDropdownItem caption="Creating"/>
                                                <RibbonDropdownItem caption="Authors"/>
                                                <RibbonDropdownCheckItem checked caption="Tags"/>
                                                <RibbonDropdownItem caption="Names"/>
                                                <RibbonDropdownDivider/>
                                                <RibbonDropdownItem caption="Columns..."/>
                                            </RibbonDropdownMenu>
                                        </RibbonDropdown>
                                    </RibbonSubGroup>

                                    <RibbonDivider/>

                                    <RibbonSubGroup style={{display: "flex", flexFlow: "row wrap", width: "74px"}}>
                                        <RibbonToolButton caption="Mail" icon="mif-envelop"/>
                                        <RibbonToolButton caption="Share" icon="mif-share"/>
                                        <RibbonToolButton caption="Settings" icon="mif-cogs"/>
                                        <RibbonToolButton caption="Bell" icon="mif-bell"/>
                                        <RibbonToolButton caption="Alarm" icon="mif-alarm"/>
                                        <RibbonDropdown>
                                            <RibbonToolButton caption="Apps" icon="mif-apps"/>
                                            <RibbonDropdownMenu>
                                                <RibbonDropdownCheckItem checked caption="Modification"/>
                                                <RibbonDropdownCheckItem checked caption="Type"/>
                                                <RibbonDropdownCheckItem checked caption="Size"/>
                                                <RibbonDropdownItem caption="Creating"/>
                                                <RibbonDropdownItem caption="Authors"/>
                                                <RibbonDropdownCheckItem checked caption="Tags"/>
                                                <RibbonDropdownItem caption="Names"/>
                                                <RibbonDropdownDivider/>
                                                <RibbonDropdownItem caption="Columns..."/>
                                            </RibbonDropdownMenu>
                                        </RibbonDropdown>
                                    </RibbonSubGroup>
                                </RibbonGroup>

                                <RibbonGroup title="Split">
                                    <RibbonSplitButton icon="mif-cog" caption="Options">
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownCheckItem checked caption="Modification"/>
                                            <RibbonDropdownCheckItem checked caption="Type"/>
                                            <RibbonDropdownCheckItem checked caption="Size"/>
                                            <RibbonDropdownItem caption="Creating"/>
                                            <RibbonDropdownItem caption="Authors"/>
                                            <RibbonDropdownCheckItem checked caption="Tags"/>
                                            <RibbonDropdownItem caption="Names"/>
                                            <RibbonDropdownDivider/>
                                            <RibbonDropdownItem caption="Columns..."/>
                                        </RibbonDropdownMenu>
                                    </RibbonSplitButton>
                                </RibbonGroup>

                                <RibbonGroup title="Grouped Buttons" className="no-overflow">
                                    <RibbonButtonGroup radio  style={{width: "200px"}}>
                                        <RibbonIconButton caption="List" icon="mif-list"/>
                                        <RibbonIconButton caption="Gear" icon="mif-cog"/>
                                        <RibbonIconButton caption="Barcode" icon="mif-barcode"/>
                                        <RibbonIconButton caption="Bell" icon="mif-bell"/>
                                        <RibbonIconButton caption="Cast" icon="mif-cast"/>
                                        <RibbonIconButton caption="Calculator" icon="mif-calculator2"/>
                                    </RibbonButtonGroup>

                                    <RibbonButtonGroup style={{width: "100px"}}>
                                        <RibbonIconButton caption="Italic" icon="mif-italic"/>
                                        <RibbonIconButton caption="Bold" icon="mif-bold"/>
                                        <RibbonIconButton caption="Underline" icon="mif-underline"/>
                                    </RibbonButtonGroup>

                                    <RibbonButtonGroup style={{width: "74px", display: "flex", flexFlow: "row", justifyContent: "center"}}>
                                        <RibbonToolButton caption="Italic" icon="mif-italic"/>
                                        <RibbonToolButton caption="Bold" icon="mif-bold"/>
                                        <RibbonToolButton caption="Underline" icon="mif-underline"/>
                                    </RibbonButtonGroup>
                                </RibbonGroup>
                            </RibbonTab>
                            <RibbonTab label="Edit">
                                Edit
                            </RibbonTab>
                            <RibbonTab label="View">
                                View
                            </RibbonTab>
                    </RibbonMenu>

                </div>
            </section>
        );
    }
}

const root = createRoot(document.getElementById('app'))
root.render(<App />, );