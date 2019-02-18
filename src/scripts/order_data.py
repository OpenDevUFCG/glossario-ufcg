# coding: utf-8
# (C) Júlio Barreto
# Script para ordenar os dados do data.js por nome
# Criado em 16/02/2019

import json, sys, demjson

def remove_indentation(str_list):
	"""
	Remove a indentação do objeto JavaScript de modo que ele
	possa ser decodificado normalmente
	"""
	return ''.join([i.strip() for i in str_list])
	

with open('../lib/data.js', 'r') as datajs:
	"""
	Abre o arquivo atual de dados e extrai o json de acronimos
	"""
	line_string = ''.join(datajs.readlines())

	data_start = line_string.index('{')
	data_end = line_string.index('};') + 1
	before = line_string[:data_start]
	after = line_string[data_end:]

	data_string = line_string[data_start : data_end].split('\n')
	formatted_data = remove_indentation(data_string)
	
	data = demjson.decode(remove_indentation(data_string))

with open('../lib/data.js', 'w') as newdatajs:
	"""
	Exporta o arquivo de dados de modo que as siglas estejam ordenadas
	"""
	ordered_data = json.dumps(data, sort_keys=True, indent=4, ensure_ascii=False).encode('utf8')

	newdatajs.write(before)
	newdatajs.write(ordered_data)
	newdatajs.write(after)
	
	
