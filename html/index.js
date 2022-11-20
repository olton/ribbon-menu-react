import { Component } from "react";
import { createRoot } from 'react-dom/client';
import {RibbonButton, RibbonMenu, RibbonDivider, RibbonGroup, RibbonTab} from "../src";

import "./css/index.css"

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
                                    <RibbonDivider/>
                                    <RibbonButton caption="Mail" image="images/email.svg"/>
                                    <RibbonButton caption="Share" image="images/share.svg"/>
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