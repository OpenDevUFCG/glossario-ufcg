# Contributing

Contribuições sempre serão bem vindas, sejam pequenas ou grandes. Veja abaixo as várias formas de contribuir conosco.

## Issues

As issues são um espaço aberto para requisitar criação, mudança ou conserto. Também é livre para ser um espaço de discussão sobre as siglas, termos e gírias da UFCG. É importante ter em mente que o tema da issue e das discussões sempre deve estar relacionado à universidade.

## Adicionar/editar termos

Você conhece um termo que ainda não está lá? ou sabe uma aplicação em frase de algum termo que gostaria de compartilhar conosco ou acha que o significado de algum termo está errado? 

Nós encorajamos nossos contribuidores a fazer Pull Requests adicionando e editanto os termos que já existem, mas se por algum motivo você não possa ou não queira adicionar o termo por si mesmo, pode [criar uma nova issue](https://github.com/OpenDevUFCG/glossario-ufcg/issues/new/choose) do tipo "Adicionar novo termo" e preencher os campos solicitados. (Se o motivo for falta de habilidade com git ou forks e etc, fala com a gente no gitter ou pede ajuda na issue que tem um monte de gente aqui louca pra te ajudar :heart:)

Caso queira adicionar/editar o termo você mesmo, ÓTIMO!!! Tudo que precisa saber está na seção seguinte :D

## Adicionando/Editando um termo você mesmo

Todos os dados que usamos se encontram em arquivos JSON dentro de `src/lib`. Poderá ver que lá tem 5 arquivos JSON, cada um deles contendo um objeto JSON com termos dos tipos indicados nos nomes dos arquivos, por exemplo, se você quiser encontrar o significado de LCC1... você vai no `src/lib/locais.json` pois LCC1 é um laboratório da universidade (um local). Caso o termo que você queira adicionar não se encaixe em nenhuma das categorias (local, disciplina, curso e gíria), ele deve estar em `outros.json`. **Recomendamos fortemente que antes de fazer qualquer alteração no JSON  veja [a documentação dos dados](https://github.com/OpenDevUFCG/glossario-ufcg/blob/master/docs/TERMO.md) que explica com mais detalhes o conteúdo dos arquivos e quais os atributos cada termo pode/deve possuir.**

## Como Contribuir

Se você escolheu uma issue para contribuir, não esqueça de avisar lá que você está trabalhando naquilo. Se é algo que ainda não exista uma issue, crie! É importante notificar o que você está fazendo.

### Clonar o repositório

Após isso, você deve dar um fork do projeto. Existe um botão na página do github para isso. Quando ele terminar de realizar o fork, você deve copiar a url do repositório do fork e clonar na sua máquina. 

Feito no terminal, será algo assim:
```sh
git clone https://github.com/<seu_usuario>/glossario-ufcg.git
```

Onde seu usuário ficará no campo **<seu_usuario>**.

Ao terminar de clonar, será criado um repositório *glossario-ufcg* no seu computador. Agora você tem a liberdade de com seu editor favorito fazer as edições que você achar necessário, ao terminar, você deve commitar suas alterações no seu repositório remoto.

Entre no repositório do *glossario-ufcg*

```sh
cd glossario-ufcg/
```

Esse primeiro comando irá adicionar todos seus arquivos do diretório atual para serem commitados.

```sh
git add . 
```

Commita seus arquivos, junto com sua mensagem do commit, é muito importante que você descreva de maneira simples e clara o que você fez. Nada muito longo, seja objetivo.

```sh
git commit -m "<sua_mensagem_de_commit>"
```

Finalmente, você enviará para seu repositório remoto todas as alterações feitas.

```sh
git push origin master
```

### Fazendo uma Pull Request

Indo para página do seu fork, você irá visualizar um aviso solicitando que em amarelo você faça uma Pull Request para o repositório original. Ao clicar apareçerá uma página onde você deve preencher informações sobre sua pull request

- Referencie a issue que você está trabalhando usando #<numero_da_issue>

- Descreva o que você fez

- Esteja aberto a críticas construtivas e elogios :)

[Tutorial mais detalhado](https://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/).

## Indicações
- Seja claro nos seus commits.
- Sempre que for mudar algo, verifica se é necessário mudar alguma documentação. É importante que tudo esteja atualizado.
- Caso esteja tendo dificuldades de trabalhar com o git, contate alguém da equipe (nas issues ou no gitter) e peça ajuda.