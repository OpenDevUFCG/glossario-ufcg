import React, {Component} from "react";
import "./Glossary.css"
import Search from "../search/Search";
import { Link } from "react-router-dom";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import acronyms from '../../lib/data';
import ResultsPage from "../ResultsPage/ResultsPage";

const DayPhrase = ({ entry }) => {
    return (
        <span className={"glossary__day-phrase"}>
            Você sabe o que é <Link className="emphasis pointer-hover light-accent lighter-hover" to={`/${entry}`}>{ entry }</Link>?
        </span>)
};

class Glossary extends Component {
    constructor(props) {
        super(props);
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getRandomEntry = () => {
        const entries = Object.keys(acronyms);
        const index = Math.floor(Math.random() * entries.length);
        return entries[index];
    }

    getAcronym() {
        return this.props.match.params.acronym;
    }

    isSearchEmpty = () => {
        return this.getAcronym() === undefined;
    }

    render() {
        const randomEntry = this.getRandomEntry();
        const glossaryContainerClass = this.isSearchEmpty() ? "glossary__container--has-not-search" : "glossary__container--has-search";
        return (
            <div className={`glossary__container ${glossaryContainerClass}`}>
                <div className={"glossary__search-tools"}>
                    <Link to={""} className={"glossary__logo"}>
                        <img src={glossarioLogo} />
                    </Link>
                    <Search className={"glossary__search"}
                            items={Object.keys(acronyms).sort()}
                            handleSelect={this.handleAcronymChange}/>
                    {this.isSearchEmpty() ?
                        <DayPhrase entry={randomEntry}/> :
                        ""
                    }
                </div>
                {!this.isSearchEmpty() ?
                    <ResultsPage acronym={this.getAcronym()}/> :
                    ""
                }
            </div>
        );
    }
}

export default Glossary;