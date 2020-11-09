import convertNumeralToRoman from '../src/services/numeralToRoman.js';
import convertRomanToNumeral from '../src/services/romanToNumeral.js';
import assert from 'assert';


try {
	let conversion;


	conversion = convertNumeralToRoman(68);
    assert.equal('LXVIII', conversion, 'Should return \'LXVIII\' when it receives 68 as parameter');

    conversion = convertNumeralToRoman(0);
    assert.equal('0', conversion, 'Should return 0 when it receives 0 as parameter');

    conversion = convertNumeralToRoman(-1);
    assert.equal('0', conversion, 'Should return 0 when it receives -1 as parameter (number < 0');

    conversion = convertNumeralToRoman(3001);
    assert.equal('0', conversion, 'Should return 0 when it receives 3001 as parameter (number > 3000)');


    conversion = convertRomanToNumeral('MXX');
    assert.equal(1020, conversion, 'Should return 1020 when it receives \'MXX\' as parameter');

    conversion = convertRomanToNumeral('');
    assert.equal('0', conversion, 'Should return 0 when it receives an empty string as parameter');

    conversion = convertRomanToNumeral(1356);
    assert.equal('0', conversion, 'Should return 0 when it receives 1356 as parameter (not a string)');


    console.log("No error occured");
} catch(e) {
    console.log('Error: ', e);
}