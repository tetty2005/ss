function task4 (number) {
    if (typeof number === 'number') {
        // если число подходит, преобразуем его в строку для проверки 
        // на наличие палидрма, а результат проверки преобразуем в число
        if (number > 10){
            let str = String(number);
            let result = Number(checkPalindrom(str));
            
            return result;

        } else {
            return  0;
        }
    }
    return {status: 'failed', reason: 'Enter a number'};
}

function checkPalindrom (str) {
    let strReverse = str.split('').reverse().join('');

    if (strReverse == str) {        // если строка является палиндромом, 
        return str;                 // возвращаем ее
    } else {
        return cutString(str);      // если нет, обрезаем
    }
}

function cutString (str) {
    if (str.length > 1) {        // до тех пор, пока она будет больше 1 символа
        let newStr1 = checkPalindrom(str.split('').slice(0,length-1).join(''));
        let newStr2 = checkPalindrom(str.split('').slice(1).join(''));

        if (Number(newStr1) > Number(newStr2)) {
            return newStr1;
        } else {
            return newStr2;
        }
    } else {
        return 0;
    }
}
