function task4 (number) {
    if (typeof number === 'number') {
        if (number > 10){                              // Если число подходит,
            let str = String(number);                  // преобразуем его в строку для проверки на наличие палидрма,
            let result = Number(checkPalindrom(str));  // а результат проверки преобразуем обратно в число.
            
            return result;

        } else {
            return  0;
        }
    }
    return {status: 'failed', reason: 'Enter a number'};
}

function checkPalindrom (str) {
    let strReverse = str.split('').reverse().join('');

    if (strReverse == str) {        // Если строка является палиндромом, 
        return str;                 // возвращаем ее.
    } else {
        return cutString(str);      // Если нет, обрезаем ее
    }
}

function cutString (str) {
    if (str.length > 1) {           // до тех пор, пока она будет больше 1 символа.
        let newStr1 = checkPalindrom(str.split('').slice(0,length-1).join(''));  // Обрезаем по 1 символу справа
        let newStr2 = checkPalindrom(str.split('').slice(1).join(''));           // и по 1 символу слева до обнаружения палиндрома.

        if (Number(newStr1) > Number(newStr2)) {
            return newStr1;
        } else {
            return newStr2;
        }
    } else {
        return 0;
    }
}
