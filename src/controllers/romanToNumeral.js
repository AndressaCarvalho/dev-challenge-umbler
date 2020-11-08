let convertRomanToNumeral = function(roman) {
	let arrayRoman = roman.split('');
 	let dRoman = 0;
 	let digitR = 0;

 	for (let i = 0; i < arrayRoman.length; i++) {
 	    let dr = roman.charAt(i);
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
 	
 	let y = 0;

    for (let i = 0; i < arrayRoman.length; i++) {
    	let dr = roman.charAt(i);
    	let drNext = i < arrayRoman.length - 1 ? roman.charAt(i + 1) : ' ';

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

export default convertRomanToNumeral;