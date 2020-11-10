const convertRomanToNumeral = (roman) => {
	let arrayRoman;
 	let dRoman = 0;
 	let digitR = 0;

    if (roman == '' || !isNaN(roman)) {
        return 0;
    }

    arrayRoman = roman.split('');


    let auxValidDigits = 0;
    let arrayValidDigits = ['M', 'C', 'D', 'X', 'L', 'V', 'I'];
    for (let i = 0; i < arrayRoman.length; i++) {
        for (let y = 0; y < arrayValidDigits.length; y++) {
            if (roman.charAt(i) == arrayValidDigits[y]) {
                auxValidDigits = 1;
            } 
        }

        if (auxValidDigits == 0) {
            return 0;
            break;
        }
    }

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
 	
 	let n = 0;

    for (let i = 0; i < arrayRoman.length; i++) {
    	let dr = roman.charAt(i);
    	let drNext = i < arrayRoman.length - 1 ? roman.charAt(i + 1) : ' ';

        if (dr == 'I' && drNext == 'V') {
            digitR += 4;
        } else if (dr == 'I' && drNext == 'X') {
            digitR += 9;
        }
        else if (dr == 'X' && drNext == 'L') {
            digitR += 50;
        } else if (dr == 'X' && drNext == 'C') {
            digitR += 90;

        } else if (dr == 'C' && drNext == 'D') {
            digitR += 400;
        } else if (dr == 'C' && drNext == 'M') {
           digitR += 900;
        }
    }
    
    n += dRoman + digitR;
    if (n > 3000) {
        return 0;
    }
    return n;
}

export default convertRomanToNumeral;