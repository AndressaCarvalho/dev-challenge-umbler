import convertNumeralToRoman from '../src/services/numeralToRoman.js';
import convertRomanToNumeral from '../src/services/romanToNumeral.js';
let conversion;


describe('Conversion from numeral to roman', () => {
    it('Should return \'LXVIII\' when it receives 68 as parameter', () => {
        conversion = convertNumeralToRoman(68);

        expect(conversion).toBe('LXVIII');
    });

    it('Should return 0 when it receives 0 as parameter', () => {
        conversion = convertNumeralToRoman(0);

        expect(conversion).toBe(0);
    });

    it('Should return 0 when it receives -1 as parameter (number < 0)', () => {
        conversion = convertNumeralToRoman(-1);

        expect(conversion).toBe(0);
    });

    it('Should return 0 when it receives 3001 as parameter (number > 3000)', () => {
        conversion = convertNumeralToRoman(3001);

        expect(conversion).toBe(0);
    });
});

describe('Conversion from roman to numeral', () => {
    it('Should return 1020 when it receives \'MXX\' as parameter', () => {
        conversion = convertRomanToNumeral('MXX');

        expect(conversion).toBe(1020);
    });

    it('Should return 0 when it receives an empty string as parameter', () => {
        conversion = convertRomanToNumeral('');

        expect(conversion).toBe(0);
    });

    it('Should return 0 when it receives 1356 as parameter (not a string)', () => {
        conversion = convertRomanToNumeral(1356);

        expect(conversion).toBe(0);
    });    
});