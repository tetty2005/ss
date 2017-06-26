'use strict'

function task4 (number) {
    let result;
    let error = preValidate(number);

    if (error === '') {
        findPalindrom(number);
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}

function findPalindrom (number) {
    let palindrom = 0;
    if (number > 10) {
        let str = String(number);
        palindrom = Number(checkPalindrom(str));
    }

    return palindrom;

    function checkPalindrom (str) {
        let strReverse = str.split('').reverse().join('');

        if (strReverse === str) {
            return str;
        } else {
            return cutString(str);
        }
    }

    function cutString (str) {
        let newStr1 = checkPalindrom(str.split('').slice(0,length-1).join(''));
        let newStr2 = checkPalindrom(str.split('').slice(1).join(''));

        if (Number(newStr1) >= Number(newStr2) && Number(newStr1) > 10) {
            palindrom = newStr1;
        } else if (Number(newStr2) > Number(newStr1) && Number(newStr2) > 10) {
            palindrom = newStr2;
        }

        return palindrom;
    }
}

function preValidate (number) {
    let error = '';

    if (typeof number !== 'number') {
        error = 'Enter a number';
    }

    return error;
}