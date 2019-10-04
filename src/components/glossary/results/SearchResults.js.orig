<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
>>>>>>> Adicionado .prettierrc e consertada formatação dos arquivos
import './SearchResults.css';

import terms from '../../../lib/data';
import { TermCard } from '../../common/index';
import NotFound from './404/NotFound';

const Results = ({ results }) =>
  results.map(result => (
<<<<<<< HEAD
   <TermCard term={result} key={`${result.entry}${result.meaning}`} />
  ));

const SearchResults = props => {
  const getTermResults = () => terms[getTerm()] || [];

  const getTerm = () => props.term;

  const isResultEmpty = () => getTermResults().length === 0;

  return (
    <div className={'search-results__results-container'}>
      {!isResultEmpty() ? (
        <Results results={getTermResults()} />
      ) : (
        <NotFound termo={getTerm()} />
      )}
    </div>
  );
};
=======
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
>>>>>>> Adicionado .prettierrc e consertada formatação dos arquivos

export default SearchResults;
