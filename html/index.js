import {Component} from "react";
import { createRoot } from 'react-dom/client';
import {RibbonButton, RibbonMenu, RibbonTab, RibbonTabs} from "../src";

import "./css/index.css"
import {RibbonSection, RibbonSectionDivider, RibbonSections} from "../src/ribbon/section";
import {RibbonGroup} from "../src/ribbon/group";

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
                        <RibbonTabs>
                            <RibbonTab className={`static`}>Home</RibbonTab>
                            <RibbonTab target="file">File</RibbonTab>
                            <RibbonTab target="edit">Edit</RibbonTab>
                            <RibbonTab target="view">View</RibbonTab>
                        </RibbonTabs>

                        <RibbonSections>
                            <RibbonSection id={`file`} className="active">
                                <RibbonGroup title="group1">
                                    <RibbonButton caption="Mail" image="/images/email.svg"/>
                                    <RibbonButton caption="Share" image="/images/share.svg"/>
                                    <RibbonSectionDivider/>
                                    <RibbonButton caption="Mail" image="/images/email.svg"/>
                                    <RibbonButton caption="Share" image="/images/share.svg"/>
                                </RibbonGroup>

                            </RibbonSection>
                            <RibbonSection id={`edit`}>Edit</RibbonSection>
                            <RibbonSection id={`view`}>View</RibbonSection>
                        </RibbonSections>
                    </RibbonMenu>
                </div>
            </section>
        );
    }
}

const root = createRoot(document.getElementById('app'))
root.render(<App />, );