import React from 'react';
import './GlossaryPage.css';
import { Link } from 'react-router-dom';

import terms from '../../lib/data';
import SearchResults from './results/SearchResults';
import Header from '../common/Header/Header';

const GlossaryPage = props => {
  const handleAcronymChange = selected => {
    props.history.push(`/${selected}`);
  };

  const getRandomEntry = () => {
    const entries = Object.keys(terms);
    const index = Math.floor(Math.random() * entries.length);
    return entries[index];
  };

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

export default GlossaryPage;
