import React, {Component} from "react";
import "./GlossaryPage.css"
import { Search } from "../common/index";
import { Link } from "react-router-dom";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import terms from '../../lib/data';
import TermPage from "./term/TermPage";

const DayPhrase = ({ entry }) => {
    return (
        <span className={"glossary__day-phrase"}>
            Você sabe o que é <Link className="emphasis pointer-hover light-accent lighter-hover" to={`/${entry}`}>{ entry }</Link>?
        </span>)
};

class GlossaryPage extends Component {
    constructor(props) {
        super(props);
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getRandomEntry = () => {
        const entries = Object.keys(terms);
        const index = Math.floor(Math.random() * entries.length);
        return entries[index];
    };

    getTerm = () => this.props.match.params.term;

    isSearchEmpty = () => {
        return this.getTerm() === undefined;
    };

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
                            items={Object.keys(terms).sort()}
                            handleSelect={this.handleAcronymChange}/>
                    {this.isSearchEmpty() ?
                        <DayPhrase entry={randomEntry}/> :
                        ""
                    }
                </div>
                {!this.isSearchEmpty() ?
                    <TermPage term={this.getTerm()}/> :
                    ""
                }
            </div>
        );
    }
}

export default GlossaryPage;