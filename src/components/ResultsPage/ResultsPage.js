import React, {Component} from "react";
import "./ResultsPage.css"
import Search from "../search/Search";
import { Link } from "react-router-dom";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import acronyms from '../../lib/data';
import ResultCard from "../ResultCard/ResultCard";
import NotFound from "../404/NotFound";

const Results = ({ results }) => results.map(result => (
        <ResultCard result={result} key={result.entry + result.meaning}/>
    )
);

class ResultsPage extends Component {
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
                            items={Object.keys(acronyms).sort()}
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

export default ResultsPage;
