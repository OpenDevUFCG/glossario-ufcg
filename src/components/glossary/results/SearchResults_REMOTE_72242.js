import React, { Component } from 'react';
import './SearchResults.css';

import terms from '../../../lib/data';
import { TermCard } from '../../common/index';
import NotFound from './404/NotFound';

const Results = ({ results }) =>
  results.map(result => (
    <TermCard term={result} key={result.entry + result.meaning} />
  ));

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  getTermResults = () => terms[this.getTerm()] || [];

  getTerm = () => this.props.term;

  isResultEmpty = () => this.getTermResults().length === 0;

  render() {
    return (
      <div className={'search-results__results-container'}>
        {!this.isResultEmpty() ? (
          <Results results={this.getTermResults()} />
        ) : (
          <NotFound termo={this.getTerm()} />
        )}
      </div>
    );
  }
}

export default SearchResults;
