const express                 = require("express");
const hostname                = '127.0.0.1';
const port                    = 3000;
const app                     = express();
const handlebars              = require("express-handlebars");
const bodyParser              = require("body-parser");
const readline                = require("readline");
const convertNumeralToRoman   = require("./modules/numeraltoroman");
const convertRomanToNumeral   = require("./modules/romantonumeral");



// HTTP
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.render('numeraltoroman');
});

app.post('/numeraltoroman', function(req, res) {
    var finalValue = convertNumeralToRoman(req.body.numeral);

    res.send("Resultado: " + finalValue);
    console.log("Resultado: " + finalValue);
});

app.get('/roman-numeral', function(req, res) {
    res.render('romantonumeral');
});

app.post('/romantonumeral', function(req, res) {
    var finalValue = convertRomanToNumeral(req.body.roman);

    res.send("Resultado: " + finalValue);
    console.log("Resultado: " + finalValue);
});

// Server running at http://127.0.0.1:3000/
app.listen(port, hostname);



// Terminal
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Informe um número decimal ou romano a ser convertido: \n", function(answer) {
    var finalValue  = 0;
    var message     = "";

    if (Number(answer) <= 0 || Number(answer) > 3000) {
        message                     = "O valor informado é inválido!" + '\n';
    } else {
        if (!isNaN(Number(answer))) {
            finalValue              = convertNumeralToRoman(answer);
            message                 = "\nResultado: " + finalValue + '\n';
        } else {
            finalValue              = convertRomanToNumeral(answer);
            message                 = "\nResultado: " + finalValue + '\n';
        }
    }

    console.log(message);
    reader.close();
});