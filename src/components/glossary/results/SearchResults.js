import React from 'react';
import styles from './SearchResults.module.css';

import { lowerCaseTerms } from '@glossario-ufcg/lib/data';
import { TermCard } from '@glossario-ufcg/components/common';
import NotFound from './404/NotFound';

import PropTypes from 'prop-types';

const Results = ({ results }) =>
  results.map(result => (
    <TermCard term={result} key={`${result.entry}${result.meaning}`} />
  ));

const SearchResults = props => {
  const getTermResults = () => lowerCaseTerms[getTerm()] || [];

  const getTerm = () => props.term.toLowerCase();

  const isResultEmpty = () => getTermResults().length === 0;

  return (
    <div className={styles.resultsContainer}>
      {!isResultEmpty() ? (
        <Results results={getTermResults()} />
      ) : (
        <NotFound termo={getTerm()} />
      )}
    </div>
  );
};

SearchResults.propTypes = {
  term: PropTypes.string,
}

export default SearchResults;
