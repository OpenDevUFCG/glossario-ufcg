// Script original em python por Júlio Barreto,
// traduzido para javascript por Paulo Leitão.

const fs = require('fs');

const dataFiles = ['cursos', 'disciplinas', 'girias', 'locais', 'outros'];

function sortFile(file) {
  let orderedFile = {};
  Object.keys(file)
    .sort()
    .forEach(key => {
      orderedFile[key] = file[key];
    });

  return orderedFile;
}

function updateFile(name) {
  const path = `src/lib/${name}.json`;
  const rawDataFile = fs.readFileSync(path);
  const dataFile = JSON.parse(rawDataFile);
  const orderedDataFile = sortFile(dataFile);
  const dataString = JSON.stringify(orderedDataFile, null, 4) + '\n';
  fs.writeFileSync(path, dataString);
}

console.log('\033[1;93m Reordenando arquivos de dados... \033[0m');

dataFiles.forEach(df => updateFile(df));

console.log('\033[1;93m Pronto! :) \033[0m');
