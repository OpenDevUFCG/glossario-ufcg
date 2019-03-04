# coding: utf-8
# (C) Júlio Barreto
# Script para ordenar os dados do data.js por nome
# Criado em 16/02/2019
# Atualizado em 03/03/2019

import json, os

cwd = os.getcwd()

def update_file(name):
    with open(name, 'r') as datajs:
        """
        Abre o arquivo atual de dados e extrai o json de acronimos
        """
        datafile = json.load(datajs)

    with open(name, 'w') as newdatajs:
        """
        Exporta o arquivo de dados de modo que as siglas estejam ordenadas
        """
        json_text = json.dumps(datafile, sort_keys=True, indent=4, ensure_ascii=False).encode('utf8')
        newdatajs.write(json_text + '\n')

path_to_data = '/src/lib/%s.json'
data_files = ['cursos', 'disciplinas', 'girias', 'locais', 'outros']

print('\033[1;93m Reordenando arquivos de dados \033[0m')

for df in data_files:
    update_file((cwd + path_to_data) % df)
