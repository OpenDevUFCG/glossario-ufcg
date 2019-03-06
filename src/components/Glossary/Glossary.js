import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import acronyms from '../../lib/data';

class Glossary extends Component {
    constructor(props) {
        super(props);
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getCurrentObjLength = () => this.getAcronymResults().length;

    getAcronymResults = () => {
        const acronym = this.props.match.params.acronym;
        return acronyms[acronym] || []
    };

    render() {
        const selectionBarLength = this.getCurrentObjLength();
        return (
            <div className={"glossary__container"}>
                <img className={"glossary__logo"} src={glossarioLogo} width="400px"/>
                <Search className={"glossary__search"}
                        items={Object.keys(acronyms).sort()}
                        handleSelect={this.handleAcronymChange}/>
                <span className={"glossary__day-phrase"}>Você sabe o que é <a
                    className="emphasis pointer-hover light-accent">tamburete</a>?</span>
            </div>
        );
    }
}

export default Glossary;