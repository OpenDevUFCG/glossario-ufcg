import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import acronyms from '../../lib/data';
import ResultCard from "../ResultCard/ResultCard";

const Results = ({ results }) => {
    return results.lenght !== 0 ? results.map(ResultCard) : "";
};

class Glossary extends Component {
    constructor(props) {
        super(props);
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getAcronymResults = () => {
        const acronym = this.props.match.params.acronym;
        return acronyms[acronym] || [];
    };

    render() {
        return (
            <div className={"outter-container"}>
                <div className={"glossary__container"}>
                    <img className={"glossary__logo"} src={glossarioLogo} width="400px"/>
                    <Search className={"glossary__search"}
                            items={Object.keys(acronyms).sort()}
                            handleSelect={this.handleAcronymChange}/>
                </div>
                <div className={"results__container"}>
                    <Results results={this.getAcronymResults()}/>
                </div>
            </div>
        );
    }
}

export default Glossary;