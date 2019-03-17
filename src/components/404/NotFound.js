import React from 'react';
import ResultCard from '../ResultCard/ResultCard';

const notFoundCard = termo => ({
    acronym: "404",
    meaning: `O termo \`${termo}\`, que você buscou, não foi encontrado :(. Se você acha que o termo deveria ser adicionado, contribua com [nosso repositório](https://github.com/OpenDevUFCG/glossario-ufcg/) adicionando-o.`,
    type: "Página não encontrada",
    entry: "404 - Página não encontrada",
    examples: [
        "Procurei um termo no Glossário do OpenDev, mas caí na página de 404 Not Found",
        "Recebi um 404 da API do Laguinho, mas acho que não fiz nada errado."
    ]
});

const NotFound = ({ termo }) => (
    <ResultCard result={notFoundCard(termo)} />
);

export default NotFound;
