import cursos from './cursos.json';
import disciplinas from './disciplinas.json';
import girias from './girias.json';
import locais from './locais.json';
import outros from './outros.json';

const merge = (original, newObject) => {
  Object.keys(newObject).map(key => {
    if (original[key] === undefined) {
      original[key] = newObject[key];
    } else {
      original[key] = original[key].concat(newObject[key]);
    }
  });
};

const terms = {};

merge(terms, cursos);
merge(terms, disciplinas);
merge(terms, girias);
merge(terms, locais);
merge(terms, outros);

const lowerCaseTerms = {};
Object.keys(terms).map((key) => {
  lowerCaseTerms[key.toLowerCase()] = terms[key];
});

export default terms;
export {
  lowerCaseTerms,
};
