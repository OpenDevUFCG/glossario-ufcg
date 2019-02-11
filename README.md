# Glossário UFCG [![Build Status](https://travis-ci.com/OpenDevUFCG/glossario-ufcg.svg?branch=master)](https://travis-ci.com/OpenDevUFCG/glossario-ufcg) [![Join the chat at https://gitter.im/OpenDevUFCG/glossario-ufcg](https://badges.gitter.im/OpenDevUFCG/glossario-ufcg.svg)](https://gitter.im/OpenDevUFCG/glossario-ufcg?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Glossário contendo significados de siglas e gírias usadas por alunos da UFCG - Campus Campina Grande.

## Setup

O site é feito em React e os dados são consumidos por meio de estruturas de dados simples de java script ~~por enquanto~~.

### Instalar depêndencias
```sh
yarn install
```

### Rodar
```sh
yarn start
```

E acessar http://localhost:8000/

### Lint
```sh
yarn lint
```

## Como Contribuir

### Adicionar termos ao glossário
Os termos estão listados no arquivo [data.js](/src/lib/data.js), para adicionar um termo novo é apenas abrir uma _PR_, caso não tenha experiência com **git**, pode abrir uma Issue e pedir pra alguém adicionar.
