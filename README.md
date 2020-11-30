# UnFlix App

## Sobre

### Arquitetura

### Requisitos Funcionais e não funcionais

Os requisitos funcinais do UnFlix estão escritos no formato de histórias de usuário. De maneira a facilitar a comunicação entre a Área de negócios e a Área de Tecnologia. A história de usuário é uma linguagem simples, porém com grandes benefícios.

Para Stackholders que não são de TI o grande benefício é a possibilidade de ilustrar algo abstrado e conseguir descrever o comportamento esperado do App.

Para Stackholdes de TI o grande benefício é a compreensão do que tem valor para entregar. Isso é uma grande contribuição e uma forma de evitar atividades que possuiem complexidade tecnógica mas baixo valor de negócio.

Os requisitos funcionais não são descritos em histórias de usuários, uma vez que para descreve-los bem como compreende-los é necessário um conhecimento prévio em TI. Nesse projeto os requisitos funcionais são inferidos a partir das histórias de usuários. Sempre visando obter a melhor experiência do usuário.

### Histórias de Usuários

> **Nº 01**
> COMO um usuário fã de cinema
> DADO Um grande catálogo de filmes
> QUANDO eu rolar a feed para ver mais filmes eu gostaria de ver-los de uma maneira mais organizada
> ENTAO gostaria de poder ver os filmes organizados por categorias

**Requisito não funcional**:

- Implementar _lazzy load_ na lista de filmes;
- Implementar um _hook_ com a responsabilidade de buscar e processar os dadas para tela exibir ao usuário;
- Implementar estrutura de cache local.

> **Nº 02**
> COMO um usuário fã de cinema
> DADO Um grande catálogo de filmes organizados por categorias
> QUANDO eu selecionar um filme, eu gostaria de mais informações sobre o filme selecionados
> ENTAO então verei em uma tela mais informações sobre o filme

> **Nº 03**
> COMO um usuário fã de cinema
> DADO Um catálogo de filmes
> QUANDO eu estiver rolando a tela de catalogo, gostaria de poder pesquisar por nome do filme
> ENTAO gostaria de ter um local especifico para fazer minhas pesquisas

**Requisito não funcional**:

- Implementar motor de busca local (cache) e on line (consulta api-rest)

> **Nº 04**
> COMO um usuário fã de cinema
> DADO Um catálogo de filmes
> QUANDO eu estiver rolando o feed, eu gostaria de ver também quais são as tendências do momento
> PARA isso, eu gostaria de ter um local especifico para ver as tendencias

## Preparando Ambiente

### Atarato tecnológico

### Dependências

## Feedback

## Lincença

This project is licensed under the MIT License - see the LICENSE.md file for details
