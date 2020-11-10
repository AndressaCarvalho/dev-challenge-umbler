import convertNumeralToRoman from '../services/numeralToRoman.js';
import convertRomanToNumeral from '../services/romanToNumeral.js';

class ConversionController {
    numeralToRomanView(req, res) {
        res.render('numeralToRoman');
    }

    numeralToRoman(req, res) {
        const finalValue = convertNumeralToRoman(req.query.numeral);

        res.send(`Resultado: ${finalValue}`);
        console.log(`Resultado: ${finalValue}`);
    }

    romanToNumeralView(req, res) {
        res.render('romanToNumeral');
    }

    romanToNumeral(req, res) {
        const finalValue = convertRomanToNumeral(req.query.roman.toUpperCase());

        res.send(`Resultado: ${finalValue}`);
        console.log(`Resultado: ${finalValue}`);
    }
}

export default new ConversionController();