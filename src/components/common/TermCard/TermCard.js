import React from 'react';
import Markdown from '../Markdown/Markdown';

import './TermCard.css';

import PropTypes from 'prop-types';

const Examples = ({ entry, examples }) =>
  examples.map((ex, index) => (
    <li className={'term-card__list-phrase'} key={`${entry}${index}`}>
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
    <ul className={'term-card__list-phrase'}>
      <Examples entry={entry} examples={examples} />
    </ul>
  );
};

const TermCard = ({ term }) => (
  <div className={'term-card__container'}>
    <h1 className={'term-card__title-1'}>{term.entry}</h1>
    <span className={'term-card__subtitle'}>{term.type}</span>

    <div className="term-card__content">
      <h2 className={'term-card__title-2'}>Descrição</h2>
      <Markdown src={term.meaning} />
    </div>

    <div className="term-card__content">
      <h2 className={'term-card__title-2'}>Aplicações em frase</h2>
      <ExamplesIfExists entry={term.entry} examples={term.examples} />
    </div>
  </div>
);

TermCard.propTypes = {
  term: PropTypes.shape({
    entry: PropTypes.string,
    meaning: PropTypes.meaning,
    type: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string),
    acronym: PropTypes.string,
  }),
};

export default TermCard;
