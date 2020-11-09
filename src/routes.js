import express from 'express';
import ConversionController from './controllers/ConversionController.js';

const routes = express.Router();


routes.get('/', ConversionController.numeralToRomanView);
routes.post('/numeralToRoman', ConversionController.numeralToRoman);

routes.get('/roman-numeral', ConversionController.romanToNumeralView);
routes.post('/romanToNumeral', ConversionController.romanToNumeral);


export default routes;