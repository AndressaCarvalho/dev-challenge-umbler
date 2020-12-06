# dev-challenge-umbler
Esta aplicação, desenvolvida em Node.js, tem por objetivo fornecer um meio para consulta de dados de DNS, através de um domínio informado.



## Estrutura
> ./src/views/home.handlebars -> View contendo um formulário que recebe domínios.

> ./src/routes.js -> Possui as rotas da aplicação.

> ./src/database/DomainConnection.js -> Utilizado para estabelecer a conexão com o banco de dados.

> ./src/database/operations/DomainSelect.js -> Encarregado de selecionar dados de DNS armazenados no banco.

> ./src/database/operations/DomainAdd.js -> Encarregado de adicionar dados de DNS no banco.

> ./src/services/DomainService.js -> Contém a lógica responsável pela manipulação de informações de DNS.

> ./src/controllers/DomainController.js -> Classe responsável pela apresentação de views e de resultados de buscas.

> ./src/app.js -> Encarregado da criação do servidor HTTP, da interação com o usuário via terminal, e da apresentação de resultados.

> ./__ tests __/DomainTest.test.js -> Utilizado para testes de consultas, e desenvolvido a partir do Jest.



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
  
  
**Obs.: Em ./src/database/dump/db-challenge.sql existe o dump do banco de dados.**



## Execução de Testes
Terminal:

  - Via npm

    - ```npm test```

  - Via yarn

    - ```yarn test```



## Referências
Node.js driver for MySQL (https://www.npmjs.com/package/mysql).

Library Knex.js (http://knexjs.org/).

DNS Node.js (https://nodejs.org/dist./v0.8.2/docs/api/dns.html).

Node.js whois-json's driver (https://www.npmjs.com/package/whois-json).


Obs.: Este desafio foi produzido a partir das orientações do Desafio Umbler (https://github.com/umbler-team/dev-challenge).
