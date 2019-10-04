import React from 'react';
import './SearchResults.css';

import terms from '../../../lib/data';
import { TermCard } from '../../common/index';
import NotFound from './404/NotFound';

const Results = ({ results }) =>
  results.map(result => (
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

export default SearchResults;
