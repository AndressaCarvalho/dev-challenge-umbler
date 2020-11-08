var convertRomanToNumeral = function(roman) {
	var arrayRoman = roman.split('');
 	var dRoman = 0;
 	var digitR = 0;

 	for (var i = 0; i < arrayRoman.length; i++) {
 	    var dr = roman.charAt(i);
        switch (dr) {
            case 'I': dRoman += 1;
        break;
            case 'V': dRoman += 5;
        break;
            case 'X': dRoman += 10;
        break;
            case 'L': dRoman += 50;
        break;
            case 'C': dRoman += 100;
        break;
            case 'D': dRoman += 500;
        break;
            case 'M': dRoman += 1000;
        break;
        }
    }
 	
 	var y = 0;

    for (var i = 0; i < arrayRoman.length; i++) {
    	var dr = roman.charAt(i);
    	var drNext = i < arrayRoman.length - 1 ? roman.charAt(i + 1) : ' ';

        if (dr == 'I' && drNext == 'V') {
            digitR += 4;
        } else

        if (dr == 'I' && drNext == 'X') {
            digitR += 9;
        }
        else

        if (dr == 'X' && drNext == 'L') {
            digitR += 50;
        } else 

        if (dr == 'X' && drNext == 'C') {
            digitR += 90;

        } else 

        if (dr == 'C' && drNext == 'D') {
            digitR += 400;
        } else 

        if (dr == 'C' && drNext == 'M') {
           digitR += 900;
        }
    }
    y += dRoman + digitR;
    return y;
}

module.exports = convertRomanToNumeral;