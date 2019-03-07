import React from 'react';

import './ResultCard.css';

const Examples = ({ key, examples }) => examples.map((ex, index) => (
    <li key={`${key}${index}`}>{ ex }</li>
));

const ResultCard = ({ result }) => (
    <div className={"result-card__container"}>
        <h1>{ result.entry }</h1>
        <span className={"result-card__subtitle"}>{ result.type }</span>

        <div className="result-card__content">
            <h2>Descrição</h2>
            <p>{ result.meaning }</p>
        </div>

        <div className="result-card__content">
            <h2>Aplicações em frase</h2>
            <ul>
                <Examples key={ result.entry } examples={ result.examples } />
            </ul>
        </div>
    </div>
);

export default ResultCard;
