import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";
import Description from "../Description/Description"
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator"

import acronyms from '../../lib/data';

class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentObj: "",
        }
    }

    handleSelect = (selected) => {
        /* TODO: Fix hardcoded first element selection and add tab navigation */
        this.setState({
            currentObj: acronyms[selected][0],
        });
    };

    render() {
        return (
            <div className={"odu-card glossary__container"}>
                <div className={"glossary__left-container"}>
                    <span className={"odu-title main-title"}>Glossário UFCG</span>
                    <Search items={Object.keys(acronyms)} handleSelect={this.handleSelect}/>
                </div>
                <VerticalSeparator/>
                <Description title={this.state.currentObj.meaning}/>
            </div>
        )
    }
}

export default Glossary;