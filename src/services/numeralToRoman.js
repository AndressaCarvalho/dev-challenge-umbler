const convertNumeralToRoman = (numeral) => {
    let n = numeral;
    let y = '';

    if (n <= 0 || n > 3000) {
        return 0;
    }


    while ((n / 1000) >= 1) {
        y += 'M';
        n -= 1000;
    }
    if ((n / 900) >= 1) {
        y += 'CM';
        n -= 900;
    }
    if ((n / 500) >= 1) {
        y += 'D';
        n -= 500;
    }
    if ((n / 400) >= 1) {
        y += 'CD';
        n -= 400;
    }

    while ((n / 100) >= 1) {
        y += 'C';
        n -= 100;
    }
    if ((n / 90) >= 1) {
        y += 'XC';
        n -= 90;
    }
    if ((n / 50) >= 1) {
        y += 'L';
        n -= 50;
    }
    if ((n / 40) >= 1) {
        y += 'XL';
        n -= 40;
    }

    while ((n / 10) >= 1) {
        y += 'X';
        n -= 10;
    }
    if ((n / 9) >= 1) {
        y += 'IX';
        n -= 9;
    }
    if ((n / 5) >= 1) {
        y += 'V';
        n -= 5;
    }
    if ((n / 4) >= 1) {
        y += 'IV';
        n -= 4;
    }

    while (n >= 1) {
        y += 'I';
        n -= 1;
    }

    return y;
}

export default convertNumeralToRoman;