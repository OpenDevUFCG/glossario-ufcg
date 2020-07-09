import React from 'react';
import Markdown from '../Markdown/Markdown';

import styles from './TermCard.module.css';
import LocationIfExists from '../LocationIfExists/LocationIfExists';
import SocialMedia from '../SocialMedia/SocialMedia';

import PropTypes from 'prop-types';

const Examples = ({ entry, examples }) =>
  examples.map((ex, index) => (
    <li className={styles.cardListPhrase} key={`${entry}${index}`}>
      {ex}
    </li>
  ));

const ExamplesIfExists = ({ entry, examples }) => {
  if (examples.length === 0)
    return (
      <p>
        Esse termo ainda não possui aplicações em frase cadastradas. Caso saiba
        alguma,{' '}
        <a href="https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md">
          faça uma contribuição!
        </a>
      </p>
    );
  return (
    <ul className={styles.cardListPhrase}>
      <Examples entry={entry} examples={examples} />
    </ul>
  );
};

ExamplesIfExists.propTypes = {
  entry: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.string),
}

const TermCard = ({ term }) => (
  <div className={styles.cardContainer}>
    <h1 className={styles.cardTitleH1}>{term.entry}</h1>
    <span className={styles.cardSubtitle}>{term.type}</span>

    <div className={styles.cardContentMap}>
      <h2 className={styles.cardTitleH2}>Descrição</h2>
      <Markdown src={term.meaning} />
    </div>

    <div className={styles.cardContentMap}>
      <h2 className={styles.cardTitleH2}>Aplicações em frase</h2>
      <ExamplesIfExists entry={term.entry} examples={term.examples} />
    </div>

    <LocationIfExists entry={term.entry} location={term.location} />
    <SocialMedia socialNetworks={term.social} />
  </div>
);

TermCard.propTypes = {
  term: PropTypes.shape({
    entry: PropTypes.string,
    meaning: PropTypes.meaning,
    type: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string),
    acronym: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
    social: PropTypes.object,
  }),
};

export default TermCard;
