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

const acronyms = { };

merge(acronyms, cursos);
merge(acronyms, disciplinas);
merge(acronyms, girias);
merge(acronyms, locais);
merge(acronyms, outros);

export default acronyms;
