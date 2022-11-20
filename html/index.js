import { Component } from "react";
import { createRoot } from 'react-dom/client';
import {RibbonButton, RibbonMenu, RibbonDivider, RibbonGroup, RibbonTab} from "../src";

import "./css/index.css"
import {RibbonIconButton} from "../src/ribbon/icon-button";
import {RibbonToolButton} from "../src/ribbon/tool-button";
import {
    RibbonDropdown,
    RibbonDropdownDivider,
    RibbonDropdownItem,
    RibbonDropdownMenu
} from "../src/ribbon/dropdown-menu";
import {RibbonSplitButton} from "../src/ribbon/split-button";

class App extends Component{
    render(){
        return(
            <section className={`container-fluid`}>
                <div className={`container text-center`}>
                    <h1>Ribbon Menu for React</h1>
                    <h3 className={`m-0`}>Copyright 2022 by <a href="https://korzh.com">Korzh.com</a></h3>
                    <h5 className={`m-0`}>Component sponsored by <a href={`mailto:g.tummarello@octostar.co`}>Giovanni Tummarello</a> </h5>
                </div>

                <div className={`container window`}>
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
                                <RibbonGroup title="group1">
                                    <RibbonButton caption="Mail" image="images/email.svg"/>
                                    <RibbonButton caption="Share" image="images/share.svg"/>

                                    <RibbonDropdown>
                                        <RibbonButton className="dropdown-toggle" caption="Mail" image="images/email.svg"/>
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownItem checked caption="Modification"/>
                                            <RibbonDropdownItem checked caption="Type"/>
                                            <RibbonDropdownItem checked caption="Size"/>
                                            <RibbonDropdownItem caption="Creating"/>
                                            <RibbonDropdownItem caption="Authors"/>
                                            <RibbonDropdownItem checkedOne caption="Tags"/>
                                            <RibbonDropdownItem caption="Names"/>
                                            <RibbonDropdownDivider/>
                                            <RibbonDropdown>
                                                <RibbonDropdownItem caption="Columns..."/>
                                                <RibbonDropdownMenu>
                                                    <RibbonDropdownItem caption="SubItem1"/>
                                                    <RibbonDropdownItem caption="SubItem2"/>
                                                    <RibbonDropdownItem caption="SubItem3"/>
                                                </RibbonDropdownMenu>
                                            </RibbonDropdown>
                                        </RibbonDropdownMenu>
                                    </RibbonDropdown>

                                    <RibbonDivider/>

                                    <RibbonIconButton caption="Mail" image="images/email.svg"/>
                                    <RibbonIconButton caption="Share" image="images/share.svg"/>
                                    <RibbonDropdown>
                                        <RibbonIconButton caption="Mail" image="images/email.svg"/>
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownItem checked caption="Modification"/>
                                            <RibbonDropdownItem checked caption="Type"/>
                                            <RibbonDropdownItem checked caption="Size"/>
                                            <RibbonDropdownItem caption="Creating"/>
                                            <RibbonDropdownItem caption="Authors"/>
                                            <RibbonDropdownItem checked-one caption="Tags"/>
                                            <RibbonDropdownItem caption="Names"/>
                                            <RibbonDropdownDivider/>
                                            <RibbonDropdownItem caption="Columns..."/>
                                        </RibbonDropdownMenu>
                                    </RibbonDropdown>

                                    <RibbonDivider/>

                                    <RibbonSplitButton image="images/email.svg" caption="Options">
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownItem checked caption="Modification"/>
                                            <RibbonDropdownItem checked caption="Type"/>
                                            <RibbonDropdownItem checked caption="Size"/>
                                            <RibbonDropdownItem caption="Creating"/>
                                            <RibbonDropdownItem caption="Authors"/>
                                            <RibbonDropdownItem checked-one caption="Tags"/>
                                            <RibbonDropdownItem caption="Names"/>
                                            <RibbonDropdownDivider/>
                                            <RibbonDropdownItem caption="Columns..."/>
                                        </RibbonDropdownMenu>
                                    </RibbonSplitButton>

                                    <RibbonDivider/>

                                    <RibbonToolButton caption="Mail" image="images/email.svg"/>
                                    <RibbonToolButton caption="Share" image="images/share.svg"/>
                                    <RibbonDropdown>
                                        <RibbonToolButton caption="Mail" image="images/email.svg"/>
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownItem checked caption="Modification"/>
                                            <RibbonDropdownItem checked caption="Type"/>
                                            <RibbonDropdownItem checked caption="Size"/>
                                            <RibbonDropdownItem caption="Creating"/>
                                            <RibbonDropdownItem caption="Authors"/>
                                            <RibbonDropdownItem checked-one caption="Tags"/>
                                            <RibbonDropdownItem caption="Names"/>
                                            <RibbonDropdownDivider/>
                                            <RibbonDropdownItem caption="Columns..."/>
                                        </RibbonDropdownMenu>
                                    </RibbonDropdown>
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