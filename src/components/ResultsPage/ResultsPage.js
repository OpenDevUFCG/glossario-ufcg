import React, {Component} from "react";
import "./ResultsPage.css"

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

    getAcronym = () => {
        return this.props.acronym;
    }

    getAcronymResults = () => {
        return acronyms[this.getAcronym()] || [];
    };


    isResultEmpty = () => {
        return this.getAcronymResults().length === 0;
    }

    render() {
        return (
            <div className={"results-page__results-container"}>
                {!this.isResultEmpty() ?
                    <Results results={this.getAcronymResults()} /> :
                    <NotFound termo={this.getAcronym()} />
                }
            </div>
        );
    }
}

export default ResultsPage;
