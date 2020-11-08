import express from 'express';
const routes = express.Router();
import convertNumeralToRoman from './controllers/numeralToRoman.js';
import convertRomanToNumeral from './controllers/romanToNumeral.js';


routes.get('/', function(req, res) {
    res.render('numeralToRoman');
});

routes.post('/numeralToRoman', function(req, res) {
    let finalValue = convertNumeralToRoman(req.body.numeral);

    res.send('Resultado: ' + finalValue);
    console.log('Resultado: ' + finalValue);
});

routes.get('/roman-numeral', function(req, res) {
    res.render('romanToNumeral');
});

routes.post('/romanToNumeral', function(req, res) {
    let finalValue = convertRomanToNumeral(req.body.roman);

    res.send('Resultado: ' + finalValue);
    console.log('Resultado: ' + finalValue);
});

export default routes;