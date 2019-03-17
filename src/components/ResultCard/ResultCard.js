import React from 'react';
import Markdown from '../Markdown/Markdown';

import './ResultCard.css';

const Examples = ({ entry, examples }) => examples.map((ex, index) => (
    <li className={"result-card__list-phrase"} key={`${entry}${index}`}>{ ex }</li>
));

const ExamplesIfExists = ({ entry, examples }) => {
    if (examples.length === 0) return (<p>Esse termo ainda não possui aplicações em frase cadastradas. Caso saiba alguma, <a href="https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md">faça uma contribuição!</a></p>)
    return (
        <ul className={"result-card__list-phrase"}>
            <Examples entry={ entry } examples={ examples } />
        </ul>
    );
}

const ResultCard = ({ result }) => (
    <div className={"result-card__container"}>
        <h1 className={"result-card__title-1"}>{ result.entry }</h1>
        <span className={"result-card__subtitle"}>{ result.type }</span>

        <div className="result-card__content">
            <h2 className={"result-card__title-2"}>Descrição</h2>
            <Markdown src={result.meaning} />
        </div>

        <div className="result-card__content">
            <h2 className={"result-card__title-2"}>Aplicações em frase</h2>
            <ExamplesIfExists entry={ result.entry } examples={ result.examples } />
        </div>
    </div>
);

export default ResultCard;
