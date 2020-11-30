# dev-challenge-umbler
Esta aplicação, desenvolvida em Node.js, tem por objetivo fornecer um conversor de números decimais em números romanos, e vice-versa (conversão realizada sobre números no intervalo de 1 à 3000).



## Estrutura
> ./src/services/numeralToRoman.js -> Contém a lógica responsável pela conversão de números decimais em romanos.

> ./src/services/romanToNumeral.js -> Contém a lógica responsável pela conversão de números romanos em decimais.

> ./src/controllers/ConversionController.js -> Classe responsável pela apresentação de views e de resultados de conversões.

> ./src/routes.js -> Possui as rotas da aplicação.

> ./src/views/numeralToRoman.handlebars -> View contendo um formulário que recebe números decimais a serem convertidos em romanos.

> ./src/views/romanToNumeral.handlebars -> View contendo um formulário que recebe números romanos a serem convertidos em decimais.

> ./src/app.js -> Encarregado da criação do servidor HTTP, da interação com o usuário via terminal, e da apresentação de resultados.

> ./__ tests __/conversion.test.js -> Utilizado para testes de conversões, e desenvolvido a partir do Jest.



## Execução da Aplicação
1. Terminal:

  - Via npm

    - ```npm install``` 
    - ```npm run dev```

  - Via yarn
    
    - ```yarn install```
    - ```yarn dev```


2. HTTP:

  - O servidor é executado em "http://127.0.0.1:3000".

  - Rotas:

    - http://127.0.0.1:3000/ -> Para conversão de números decimais em romanos.
  
    - http://127.0.0.1:3000/roman-numeral -> Para conversão de números romanos em decimais.



## Execução de Testes
Terminal:

  - Via npm

    - ```npm test```

  - Via yarn

    - ```yarn test```



## Referências
Node.js Documentation (https://nodejs.org/en/docs/).

Node.js #1 - O que é Node e como instalar o Node.js no Windows (https://www.youtube.com/watch?v=jqrKQEJ6DpY&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu).

Express (https://expressjs.com/pt-br/).

Subindo servidor com Express (https://medium.com/@febatista107/subindo-servidor-com-express-a1868795e366).

Creating a package.json file (https://docs.npmjs.com/creating-a-package-json-file).

Criação de arquivo .gitignore (https://www.toptal.com/developers/gitignore).

Testes no NodeJS aplicando TDD com Jest | Diego Fernandes (https://www.youtube.com/watch?v=2G_mWfG0DZE).

Using ES6 import and export statements for Jest testing in Node.js (https://medium.com/@saplos123456/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c).


Obs.: Este desafio foi produzido a partir das orientações do Kata (http://codingdojo.org/kata/RomanNumerals/).
