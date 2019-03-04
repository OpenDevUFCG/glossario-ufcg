# Contributing

Contribuições sempre serão bem vindas, sejam pequenas ou grandes. Conhece alguma sigla que não está presente no Glossário? Basta adiciona-la num dos arquivos `.json` dentro da pasta [src/lib/](/src/lib/) dependendo de como o que você quer adicionar melhor se encaixa, e então é só fazer uma PR (Pull Request). Não sabe como? Vamos explicar abaixo.

* **PS**: Para contribuir é necessário que, na sua máquina, seja possível executar comandos em `Python`. Essa restrição é necessária pois existe [um script](/src/scripts/order_data.py) que mantém os nossos dados ordenados alfabeticamente e é executado a cada `commit`. Caso Python esteja instalado em sua máquina e ainda assim não é possível fazer commit nas suas alterações, entre em contato conosco no [nosso gitter](https://gitter.im/OpenDevUFCG/glossario-ufcg) :)

## Issues

As issues são um espaço aberto para requisitar criação, mudança ou conserto. Também é livre para ser um espaço de discussão sobre as siglas, termos e gírias de ciência da computação da UFCG. É importante ter em mente que o tema da issue e das discussões sempre deve estar relacionado ao curso.

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

*Obs: Caso precise realizar um [rebase ou merge](https://gist.github.com/ravibhure/a7e0918ff4937c9ea1c456698dcd58aa)

## Indicações
- Seja claro nos seus commits.
- Sempre que for mudar algo, verifica se é necessário mudar alguma documentação. É importante que tudo esteja atualizado.
- Caso esteja tendo dificuldades de trabalhar com o git, contate alguém da equipe e peça ajuda. 