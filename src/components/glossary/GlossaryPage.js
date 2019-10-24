import React from 'react';
import './GlossaryPage.css';

import SearchResults from './results/SearchResults';
import Header from '../common/Header/Header';

import PropTypes from 'prop-types';

const GlossaryPage = props => {
  const getTerm = () => props.match.params.term;

  const isSearchEmpty = () => {
    return getTerm() === undefined;
  };

  const glossaryContainerClass = isSearchEmpty()
    ? 'glossary__container--has-not-search'
    : 'glossary__container--has-search';
  return (
    <div className={`glossary__container ${glossaryContainerClass}`}>
      <Header {...props} isSearchEmpty={isSearchEmpty} />
      {!isSearchEmpty() && <SearchResults term={getTerm()} />}
    </div>
  );
};

GlossaryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      term: PropTypes.string,
    }),
  }),
}

export default GlossaryPage;
