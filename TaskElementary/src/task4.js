'use strict'

function task4 (number) {
    let error = preValidate4(number);

    return (!error)? findPalindrom(number): {status: 'failed', reason: error};
}

function findPalindrom (number) {
    let palindrom = 0;

    if (number > 10) {
        let str = String(number);
        palindrom = Number(checkPalindromOrCut(str));
    }

    return palindrom;

    function checkPalindromOrCut (str) {
        let strReverse = str.split('').reverse().join('');

        if (strReverse === str) {
            return str;
        } else {
            return cutString(str);
        }
    }

    function cutString (str) {
        let newStr1 = checkPalindromOrCut(str.split('').slice(0,length-1).join(''));
        let newStr2 = checkPalindromOrCut(str.split('').slice(1).join(''));

        if (Number(newStr1) >= Number(newStr2) && Number(newStr1) > 10) {
            palindrom = newStr1;
        } else if (Number(newStr2) > Number(newStr1) && Number(newStr2) > 10) {
            palindrom = newStr2;
        }

        return palindrom;
    }
}

function preValidate4 (number) {
    let error = '';

    if (typeof number !== 'number') {
        error = 'Enter a number';
    }

    return error;
}
