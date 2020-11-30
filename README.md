# dev-challenge-umbler
Esta aplicação, desenvolvida em Node.js, tem por objetivo fornecer um meio para consulta de dados de DNS, através de um domínio informado.



## Estrutura
> ./src/views/home.handlebars -> View contendo um formulário que recebe domínios.

> ./src/routes.js -> Possui as rotas da aplicação.

> ./src/database/DomainConnection.js -> Encarregado de estabelecer a conexão com o banco de dados.

> ./src/database/operations/View.js -> Utilizado para buscas por informações de domínios.

> ./src/database/operations/Add.js -> Empregado para inserção de dados relacionados a domínios.

> ./src/services/DomainSerive.js -> Contém a lógica responsável pela manipulação de informações Whois.

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



## Execução de Testes
Terminal:

  - Via npm

    - ```npm test```

  - Via yarn

    - ```yarn test```



## Referências



Obs.: Este desafio foi produzido a partir das orientações Desafio Umbler (https://github.com/umbler-team/dev-challenge).
