# O que eu vou encontrar nos JSONs dos termos?

Em todos os arquivos JSONs contendo os temos do glossário teremos um objeto contendo as chaves que serão usadas para buscar aqueles termos, por exemplo:

```json
{
    "LP1": [
        ...
    ],
    "P1": [
        ...    
    ]
}
```

ou para gírias:

```json
{
    "BOLA": [
        ...    
    ],
    "LEITE": [
        ...
    ]
}
```

As chaves de busca são por padrão maiúsculas e estão ordenadas em ordem alfabética.

### Array de resultados

Para cada chave no JSON teremos um array de resultados, ou seja, caso seja buscado no glossário `P1`, serão exibidos no glossário o array de resultados referentes a chave `"P1"`.

Dentro dos arrays de resultados temos mais objetos, detalhando cada resultado. "P1" por exemplo é uma sigla que pode significar duas disciplinas diferentes para os alunos do curso de Ciência da Computação na UFCG, para representar isso temos um array com dois objetos de resultados assim:

```json
{
    "P1": [
        {
            "acronym": "P1",
            "entry": "Programação 1",
            "meaning": "Disciplina obrigatória do primeiro período de Ciência da Computação na qual é estudado o conteúdo de algoritmos e lógica de programação.",
            "type": "Disciplina",
            "examples": ["Paguei P1 com 10", "Tirei minha dúvida de P1 no shell do python"]
        }, {
            "acronym": "P1",
            "entry": "Projeto 1",
            "meaning": "Breve descrição de projeto 1 aqui...",
            "type": "Disciplina",
            "examples": ["Uma aplicação de frase com P1 aqui...", "Outra aplicação de frase com P1 aqui..."]
        }
    ]
}
```

O array de resultados pode ter quantos resultados forem necessários para o mesmo termo de busca, se P1 fosse a sigla de 100 disciplinas, esse array teria 100 objetos descrevendo cada uma das 100 disciplinas.

### Objeto de resultado

Como foi visto anteriormente, o array de resultados tem objetos que seguem um padrão. Todos os resultados **devem** conter 4 atributos pelo menos, sendo eles:

- `entry`: Basicamente o título do termo que será exibido na tela de resultados do glossário (Para siglas é a sigla por extenso, por ex: para LCC1, o entry seria Laboratório de Ciêcia da Computação 1)
- `meaning`: Breve texto com o significado e/ou descrição do termo.
- `examples`: Array de strings contendo aplicações daquele termo em frases.
- `type`: O tipo do termo (disciplina, curso, gíria, local ou termo para outros).

O atributo `acronym` é um atributo que representa a sigla do termo e é um atributo **opcional** pois nem todos os termos são siglas como por exemplo `bola` que é uma gíria e não possui sigla, ou seja, não necessita do atributo `acronym`.
