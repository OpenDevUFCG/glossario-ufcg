import React from 'react';
import { TermCard } from '../../../common';

const notFoundCard = termo => ({
  acronym: '404',
  meaning: `O termo \`${termo}\`, que você buscou, não foi encontrado :(. Se você acha que o termo deveria ser adicionado, [sugira a sua adição](https://github.com/OpenDevUFCG/glossario-ufcg/issues/new?template=new_term.md) ou [adicione você mesmo](https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/CONTRIBUTING.md).`,
  type: 'Página não encontrada',
  entry: '404 - Página não encontrada',
  examples: [
    'Procurei um termo no Glossário do OpenDev, mas caí na página de 404 Not Found',
    'Recebi um 404 da API do Laguinho, mas acho que não fiz nada errado.',
  ],
});

const NotFound = ({ termo }) => <TermCard term={notFoundCard(termo)} />;

export default NotFound;
