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

### Pontos de melhora

- A validação no formulário de login é bem básica - só é verificado se houve ou não falha, mas não é filtrado o tipo de erro para informar a pessoa qual a melhor forma de proceder
- O aviso de erro dentro do extrato em si é extremamente básico (e num mundo ideal, num deveria acontecer) e não fornece informações suficientes de como proceder.
- Pro número de módulos e número de formatos de tela, o ideal é que houvesse uma bateria de testes de integração
- Revisar quais bibliotecas poderiam ser excluídas em prol de implementações mais enxutas
- Adicionar animações e transições mais suaves para os elementos que são carregados e expandidos
- Migrar para GraphQL permitiria fazer menos requests ao servidor, agilizando o processo (isso depende de mudanças no backend) e facilitando a obtenção de informações
- Se houver um problema na obtenção do extrato e do saldo, os componentes de loading permanecem. Sua lógica precisaria ser levemente refatorada.
- Uma das maiores vantagens de user styled-components é o reuso, a criação de componentes base. Vários elementos poderiam ser ajustados e refatorados nesse sentido.

### Sugestões ao teste

- Tornar o link da API da Ewally clicável no pdf do exercício
- Ter um teste completo para referência (não precisa ser "Golden Standard"), para garantir que o desafio é passível de completação (vide erro na documentação de API)
- O escopo está bem abrangente, visto que existem várias considerações de UX que não necessariamente estão documentadas. Por exemplo: Existe tempo de expiração do token? Se sim, qual o comportamento esperado? Se não há um comportamento esperado, pode-se analisar o que a pessoa optou por fazer. Algo que pode ajudar a reduzir o escopo é descrever mais as interações desejadas ou delimitar o que será analisado. Claro - se o objetivo é obser as soluções de UX que a pessoa vai propor, o formato atual é bom. Acredito só que poderia ser um pouco mais enxuto.
- O teste, atualmente, pode ser entregue via e-mail ou Git. Eu recomendaria fazer exclusivamente via Git, porque assim é possível olhar para os commits e a evolução do projeto.

### Pontos interessantes de observar com candidatos

- Por que optou por essa estrutura de projeto?
- Usou classes ou hooks? Por que?
- Como lidou com os formatos de data? Usou lib? Se sim, qual e por que?
- Quais melhorias faria, com mais tempo para o projeto?
- O que sentiu falta no briefing do projeto?
- Que pontos achou mais difícil? Por que?
