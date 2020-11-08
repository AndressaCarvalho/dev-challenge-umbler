import express from 'express';
const hostname = '127.0.0.1';
const port     = 3000;
const app      = express();
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import readline from 'readline';
import convertNumeralToRoman from './controllers/numeralToRoman.js';
import convertRomanToNumeral from './controllers/romanToNumeral.js';
import routes from './routes.js';



// HTTP
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

// Server running at http://127.0.0.1:3000/
app.listen(port, hostname);



// Terminal
let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Informe um número decimal ou romano a ser convertido: \n', function(answer) {
    let finalValue  = 0;
    let message     = '';

    if (Number(answer) <= 0 || Number(answer) > 3000) {
        message                     = 'O valor informado é inválido!' + '\n';
    } else {
        if (!isNaN(Number(answer))) {
            finalValue              = convertNumeralToRoman(answer);
            message                 = '\nResultado: ' + finalValue + '\n';
        } else {
            finalValue              = convertRomanToNumeral(answer);
            message                 = '\nResultado: ' + finalValue + '\n';
        }
    }

    console.log(message);
    reader.close();
});