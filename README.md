# eWally - Teste Técnico

## Requisitos

- [NPM 6.0.0+](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

## Setup

- Clone o repositório git
- Navegue até a pasta do mesmo via linha de comando
- Execute o comando `npm install`

## Execução local

- Na linha de comando, navegue até a pasta do projeto
- Execute o comando `npm start`

## Testes

- Na linha de comando, navegue até a pasta do projeto
- Execute o comando `npm test`

## Notas

### Escolha da lib de testes

É muito comum os projetos ReactJS utilizaram a Enzyme, do AirBnB. Um dos maiores problemas com essa biblioteca é que, pelo jeito que a mesma é estruturada, o suporte para features novas de React acaba sempre tendo um atraso.

Como exemplo, as features de memoização e hooks do React 16.6, que podem ajudar na refatoração e performance mas que não tinham como ser testadas corretamente.

A React Testing Library oferece alguns outros benefícios, como usar a árvore de render real, o que facilita a compreensão de testes quebrados e a montagem de novos testes.

### Sugestões ao teste

- Tornar o link da API da Ewally clicável no pdf do exercício
- Ter um teste base (não precisa ser "Golden Standard"), para garantir que o desafio é passível de compleção (vide erro na documentação de API)
- O escopo está bem abrangente, visto que existem várias considerações de UX que não necessariamente estão documentadas. Por exemplo: Existe tempo de expiração do token? Se sim, qual o comportamento esperado? Se não há um comportamento esperado, pode-se analisar o que a pessoa optou por fazer. Algo que pode ajudar a reduzir o escopo é descrever mais as interações desejadas ou delimitar o que será analisado.

### Pontos interessantes de observar com candidatos

- Qual a estrutura do projeto? Por que?
- Usou classes ou hooks? Por que?
- Como lidou com os formatos de data? Usou lib? Se sim, qual e por que?
- Quais melhorias faria, com mais tempo para o projeto?
- O que sentiu falta no briefing do projeto?
- Que pontos achou mais difícil? Por que?
