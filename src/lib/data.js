const acronyms = {
    CC: [{
        acronym: 'CC',
        meaning: 'Ciência da Computação',
        type: 'Curso'
    }],
    LCC1: [{
        acronym: 'LCC1',
        meaning: 'Laboratório de Ciência da Computação 1',
        type: 'Sala'
    }],
    LCC2: [{
        acronym: 'LCC2',
        meaning: 'Laboratório de Ciência da Computação 2',
        type: 'Sala'
    }],
    LCC3: [{
        acronym: 'LCC3',
        meaning: 'Laboratório de Ciência da Computação 3',
        type: 'Sala'
    }],
    EDA: [{
        acronym: 'EDA',
        meaning: 'Estrutura de Dados e Algoritmos',
        type: 'Disciplina Obrigatória'
    }],
    LEDA: [{
        acronym: 'LEDA',
        meaning: 'Laboratório de Estrutura de Dados e Algoritmos',
        type: 'Disciplina Obrigatória'
    }],
    P1: [{
        acronym: 'P1',
        meaning: 'Programação 1', //also Projeto 1
        type: 'Disciplina Obrigatória'
    }],
    LP1: [{
        acronym: 'LP1',
        meaning: 'Laboratório de Programação 1',
        type: 'Disciplina Obrigatória'
    }],
    P2: [{
        acronym: 'P2',
        meaning: 'Programação 2', //also Projeto 2
        type: 'Disciplina Obrigatória'
    }],
    LP2: [{
        acronym: 'LP2',
        meaning: 'Laboratório de Programação 2',
        type: 'Disciplina Obrigatória'
    }],
    IC: [{
        acronym: 'IC',
        meaning: 'Introdução à Computação',
        type: 'Disciplina Obrigatória'
    }],
    BD: [{
        acronym: 'BD',
        meaning: 'Banco de Dados I',
        type: 'Disciplina Obrigatória'
    }],
    OAC: [{
        acronym: 'OAC',
        meaning: 'Organização e Arquitetura de Computadores',
        type: 'Disciplina Obrigatória'
    }],
    LOAC: [{
        acronym: 'LOAC',
        meaning: 'Laboratório de Organização e Arquitetura de Computadores',
        type: 'Disciplina Obrigatória'
    }],
    FMCC1: [{
        acronym: 'FMCC1',
        meaning: 'Fundamentos de Matemática para Ciência da Computação I',
        type: 'Disciplina Obrigatória'
    }],
    FMCC2: [{
        acronym: 'FMCC2',
        meaning: 'Fundamentos de Matemática para Ciência da Computação II',
        type: 'Disciplina Obrigatória'
    }],
    PLP: [{
        acronym: 'PLP',
        meaning: 'Paradigmas de Linguagem de Programação',
        type: 'Disciplina Obrigatória'
    }],
    ES: [{
        acronym: 'ES',
        meaning: 'Engenharia de Software',
        type: 'Disciplina Obrigatória'
    }],
    SO: [{
        acronym: 'SO',
        meaning: 'Sistemas Operacionais',
        type: 'Disciplina Obrigatória'
    }],
    TC: [{
        acronym: 'TC',
        meaning: 'Teoria da Computação',
        type: 'Disciplina Obrigatória'
    }],
    IA: [{
        acronym: 'IA',
        meaning: 'Inteligência Artificial',
        type: 'Disciplina Obrigatória'
    }],
    PC: [{
        acronym: 'PC',
        meaning: 'Programação Concorrente',
        type: 'Disciplina Obrigatória'
    }],
    ATAL: [{
        acronym: 'ATAL',
        meaning: 'Análise e Técnicas de Algoritmos',
        type: 'Disciplina Obrigatória'
    }],
    TCC: [{
        acronym: 'TCC',
        meaning: 'Trabalho de Conclusão de Curso',
        type: 'Disciplina Obrigatória'
    }],
    AS: [{
        acronym: 'AS',
        meaning: 'Análise de Sistemas',
        type: 'Disciplina Obrigatória'
    }],
    CDD: [{
        acronym: 'CDD',
        meaning: 'Ciência de Dados Descritiva',
        type: 'Disciplina Optativa'
    }],
    CDP: [{
        acronym: 'CDP',
        meaning: 'Ciência de Dados Preditiva',
        type: 'Disciplina Optativa'
    }],
    ADSD: [{
        acronym: 'ADSD',
        meaning: 'Avaliação de Desempenho de Sistemas Discretos',
        type: 'Disciplina Optativa'
    }],
    BD2: [{
        acronym: 'BD2',
        meaning: 'Banco de Dados II',
        type: 'Disciplina Optativa'
    }],
    IRC: [{
        acronym: 'IRC',
        meaning: 'Interconexão e Redes de Computadores',
        type: 'Disciplina Optativa'
    }],
    AA: [{
        acronym: 'AA',
        meaning: 'Algoritmos Avançados',
        type: 'Disciplina Optativa'
    }],
    ETI: [{
        acronym: 'ETI',
        meaning: 'Economia de Tecnologia da Informação',
        type: 'Disciplina Optativa'
    }],
    DACA: [{
        acronym: 'DACA',
        meaning: 'Desenvolvimento de Aplicações Corporativas Avançadas',
        type: 'Disciplina Optativa'
    }],
    SAD: [{
        acronym: 'SAD',
        meaning: 'Sistemas de Apoio à Decisão',
        type: 'Disciplina Optativa'
    }],
    CG: [{
        acronym: 'CG',
        meaning: 'Computação Gráfica',
        type: 'Disciplina Optativa'
    }],
    GR: [{
        acronym: 'GR',
        meaning: 'Gerência de Redes',
        type: 'Disciplina Optativa'
    }],
    MSN: [{
        acronym: 'MSN',
        meaning: 'Métodos e Softwares Numéricos',
        type: 'Disciplina Optativa'
    }],
    VC: [{
        acronym: 'VC',
        meaning: 'Visão Computacional',
        type: 'Disciplina Optativa'
    }],
    VVS: [{
        acronym: 'VVS',
        meaning: 'Verificação e Validação de Software',
        type: 'Disciplina Optativa'
    }],
    TECC: [{
        acronym: 'TECC',
        meaning: 'Tópicos Especiais em Ciência da Computação',
        type: 'Termo'
    }]
};

export default acronyms
