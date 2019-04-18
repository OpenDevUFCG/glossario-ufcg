import React, {Component} from "react";
import "./TermPage.css"
import Search from "../commons/search/Search";
import { Link } from "react-router-dom";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import terms from '../../lib/data';
import TermCard from "../commons/TermCard/TermCard";
import NotFound from "./404/NotFound";

const Results = ({ results }) => results.map(result => (
        <TermCard term={result} key={result.entry + result.meaning}/>
    )
);

class TermPage extends Component {
    constructor(props) {
        super(props);
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getAcronymResults = () => {
        const acronym = this.props.match.params.acronym;
        return terms[acronym] || [];
    };

    isResultEmpty = () => {
        return this.getAcronymResults().length === 0;
    }

    render() {
        return (
            <div className={'outter-container'}>
                <div className={"results-page__container"}>
                    <Link to={""} className={"results-page__logo"}>
                        <img src={glossarioLogo} />
                    </Link>
                    <Search className={"results-page__search"}
                            items={Object.keys(terms).sort()}
                            handleSelect={this.handleAcronymChange}/>
                </div>
                <div className={"results-page__results-container"}>
                    {!this.isResultEmpty() ?
                        <Results results={this.getAcronymResults()} /> :
                        <NotFound termo={this.props.match.params.acronym} />
                    }
                </div>
            </div>
        );
    }
}

export default TermPage;
