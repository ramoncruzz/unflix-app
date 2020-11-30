# UnFlix App

## Sobre

## Arquitetura

### Requisitos Funcionais e não funcionais

Os requisitos funcinais do UnFlix estão escritos no formato de histórias de usuário, de maneira a facilitar a comunicação entre a Área de Negócios e a Área de Tecnologia. A história de usuário é uma linguagem simples, porém com grandes benefícios.

Para _Stackholders_, que não são de TI, o grande benefício é a possibilidade de ilustrar algo abstrato e conseguir descrever o comportamento esperado do App.

Para _Stackholdes_ de TI o grande benefício é a compreensão do que tem valor para entregar, essa é uma grande contribuição e uma forma de evitar atividades que possuem complexidade tecnólogica mas baixo valor de negócio.

Os requisitos funcionais não são descritos no formato de histórias de usuários, uma vez que para descrevê-los, bem como compreendê-los, é necessário um conhecimento prévio em TI. Nesse projeto os requisitos funcionais são inferidos a partir das histórias de usuários, sempre visando obter a melhor experiência do usuário.

### Histórias de Usuários

#### História Nº 01 ####
~~~
COMO um usuário fã de cinema
DADO Um grande catálogo de filmes 
QUANDO rolar a feed para ver mais filmes, gostaria de vê-los  de maneira mais organizada
ENTÃO gostaria de ver os filmes organizados em categorias
~~~

**Requisito não funcional**:

- Implementar _lazzy load_ na lista de filmes;
- Implementar um _hook_ com a responsabilidade de buscar e processar os dados para a tela exibir ao usuário;
- Implementar estrutura de cache local.

#### História Nº 02 ####
~~~
COMO um usuário fã de cinema
DADO um grande catálogo de filmes organizados em categorias
QUANDO eu selecionar um filme, gostaria de mais informações sobre este
ENTÃO verei em uma tela mais informações sobre o filme
~~~

#### História Nº 03 ####
~~~

COMO um usuário fã de cinema
DADO um catálogo de filmes
QUERO pesquisar por nome do filme
PARA Localizar facilmente o filme de minha preferência
~~~

**Requisito não funcional**:

- Implementar motor de busca local (cache) e on-line (consulta api-rest)

#### História Nº 04 ####
~~~
COMO um usuário fã de cinema
DADO um catálogo de filmes
QUANDO eu estiver rolando o feed, eu gostaria de ver também quais são as tendências do momento
ENTÃO gostaria de ter um local específico para ver as tendências
~~~

## Preparando Ambiente

### Atarato tecnológico

### Dependências

## Feedback

## Lincença

This project is licensed under the MIT License - see the LICENSE.md file for details
