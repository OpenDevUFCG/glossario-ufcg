import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import glossarioLogo from '../../../../assets/images/glossario-logo.svg';
import { Search } from '../index';
import { Link } from 'react-router-dom';
import terms from '../../../lib/data';

import './Header.css';

const DayPhrase = ({ entry }) => {
  return (
    <span className={'header__day-phrase'}>
      Você sabe o que é&nbsp;
      <Link
        className="emphasis pointer-hover light-accent lighter-hover"
        to={`/${entry}`}
      >
        {entry}
      </Link>
      ?
    </span>
  );
};

DayPhrase.propTypes = {
  entry: PropTypes.string,
};

const Header = props => {
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

  return (
    <div className={'header__search-tools'}>
      <Link to={''} className={'header__logo'}>
        <img src={glossarioLogo} />
      </Link>
      <Search
        className={'header__search'}
        items={Object.keys(terms).sort()}
        handleSelect={handleAcronymChange}
      />
      {isSearchEmpty() && <DayPhrase entry={getRandomEntry()} />}
    </div>
  );
};

Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Header;
