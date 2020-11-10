import express from 'express';
import ConversionController from './controllers/ConversionController.js';

const routes = express.Router();


routes.get('/', ConversionController.numeralToRomanView);
routes.get('/numeralToRoman', ConversionController.numeralToRoman);

routes.get('/roman-numeral', ConversionController.romanToNumeralView);
routes.get('/romanToNumeral', ConversionController.romanToNumeral);


export default routes;