import React from 'react';
import classNames from 'classnames';
import styles from './GlossaryPage.module.css';

import SearchResults from './results/SearchResults';
import { Header } from '@glossario-ufcg/components/common';

import PropTypes from 'prop-types';

const GlossaryPage = props => {
  const getTerm = () => props.match.params.term;

  const isSearchEmpty = () => {
    return getTerm() === undefined;
  };

  return (
    <div className={classNames(styles.glossaryContainer, {
      [styles.hasNotSearch]: isSearchEmpty(),
      [styles.hasSearch]: !isSearchEmpty()
    })}>
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
