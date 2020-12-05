import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import readline from 'readline';
import routes from './routes.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import controllerDomain from './controllers/DomainController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hostname = '127.0.0.1';
const port = 3000;
const app = express();


// HTTP
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

// Server running at http://127.0.0.1:3000/
app.listen(port, hostname)


// Terminal
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question('Informe um domínio: \n', (answer) => {
    const resultValidate = answer.match(/^(?:https?:\/\/)?(w{3}\.)?[\w_-]+((\.\w{2,}){1,2})(\/([\w\._-]+\/?)*(\?[\w_-]+=[^\?\/&]*(\&[\w_-]+=[^\?\/&]*)*)?)?$/)
    if (resultValidate) {
        controllerDomain.domainConsole(answer.toLowerCase())
    } else {
        console.log('\nDomínio inválido!')
    }
    reader.close()
});