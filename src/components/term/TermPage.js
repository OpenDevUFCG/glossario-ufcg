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

    handleTermChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getTermResults = () => {
        const term = this.props.match.params.term;
        return terms[term] || [];
    };

    isResultEmpty = () => {
        return this.getTermResults().length === 0;
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
                            handleSelect={this.handleTermChange}/>
                </div>
                <div className={"results-page__results-container"}>
                    {!this.isResultEmpty() ?
                        <Results results={this.getTermResults()} /> :
                        <NotFound termo={this.props.match.params.term} />
                    }
                </div>
            </div>
        );
    }
}

export default TermPage;
