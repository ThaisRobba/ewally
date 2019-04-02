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

### Adicionando novos testes

## Notas

### Escolha da lib de testes

É muito comum os projetos ReactJS utilizaram a Enzyme, do AirBnB. Um dos maiores problemas com essa biblioteca é que, pelo jeito que a mesma é estruturada, o suporte para features novas de React acaba sempre tendo um atraso.

Como exemplo, as features de memoização e hooks do React 16.6, que podem ajudar na refatoração e performance mas que não tinham como ser testadas corretamente.

A React Testing Library oferece alguns outros benefícios, como usar a árvore de render real, o que facilita a compreensão de testes quebrados e a montagem de novos testes.

### Por que não usar service workers?

Diretrizes de segurança, reforçar timeout, ???

### Sugestões ao teste

- Tornar o link da API da Ewally clicável no pdf

### Problemas encontrandos durante o teste

- Erro na documentação de API

### Pontos interessantes de observar com candidatos

- Houve problema de Cors? Como resolveu?
- Qual a estrutura do projeto? Por que?
- Usou classes ou hooks? Por que?

#### generated md

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
