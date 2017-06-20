function task4 (number) {   
    if (typeof number !== 'number') {
        return {status: 'failed', reason: 'Enter a number'};

    } else {
    let palindrom = 0;

        if (number > 10) {                             // Если число не одноцифровое,
            let str = String(number);                  // преобразуем его в строку для проверки на наличие палидрма,
            palindrom = Number(checkPalindrom(str));   // а результат проверки преобразуем обратно в число.
        }

        return palindrom;

        function checkPalindrom (str) {
            let strReverse = str.split('').reverse().join('');

            if (strReverse === str) {        // Если строка является палиндромом, 
                return str;                  // возвращаем ее,
            } else {
                return cutString(str);       // в противном случае обрезаем ее.
            }
        }

        function cutString (str) {
                let newStr1 = checkPalindrom(str.split('').slice(0,length-1).join(''));  // Обрезаем по 1 символу справа
                let newStr2 = checkPalindrom(str.split('').slice(1).join(''));           // и по 1 символу слева до обнаружения палиндрома.

                if (Number(newStr1) >= Number(newStr2) && Number(newStr1) > 10) {        // Из двух полученных строк выбираем бОльшую
                    palindrom = newStr1;                                                 // и присваиваем палиндрому ее значение.

                } else if (Number(newStr2) > Number(newStr1) && Number(newStr2) > 10) {
                    palindrom = newStr2;
                }

            return palindrom;
        }
    }
}
