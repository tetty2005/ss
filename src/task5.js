function task5 (context) {
    if (context === undefined || context.min === undefined || context.max === undefined) {       
        return {status: 'failed', reason: 'Enter an object with properties min and max'};

    } else if (typeof context.min !== 'string' || typeof context.max !== 'string') {
        return {status: 'failed', reason: 'Properties min and max should be a string'};

    } else if (context.min.length < 6 || context.max.length < 6) {
        return {status: 'failed', reason: 'Properties min and max should be with 6 numbers'};

    } else {
        let result = {};
        result.luckyTickets1 = method1(context.min, context.max);
        result.luckyTickets2 = method2(context.min, context.max);
        result.winner = (result.luckyTickets1 > result.luckyTickets2) ? 
        'method1' : (result.luckyTickets2 > result.luckyTickets1) ?
        'method2' : 'Both methods bring the same amount of lucky tickets';

        return result;
    }
}

// Первый метод считает количество билетов, где сумма первых трёх цифр равна сумме последних трёх
function method1 (min, max) {                           
    let luckyTickets = 0;

    for (let i = Number(min); i <= Number(max); i++) {  // каждый допустимый номер билета
        let ticketNumber = String(i).split('');         // преобразуем в массив,

        for (let j = 0; j < ticketNumber.length; j++) { // а каждый элемент массива - в число
            ticketNumber[j] = Number(ticketNumber[j]);  // для последующего расчета сумм
        }

        while (ticketNumber.length < 6) {               // делаем массив длиной в 6 символов,
            ticketNumber.unshift(0);                    // добавляя в его начало нули, если он меньше
        }

        let sum1 = ticketNumber[0] + ticketNumber[1] + ticketNumber[2];
        let sum2 = ticketNumber[3] + ticketNumber[4] + ticketNumber[5];

        if (sum1 === sum2) {
            luckyTickets++;
        }
    }

    return luckyTickets;
}

// Второй метод считает количество билетов, где сумма чётных цифр билета равна сумме нечётных
function method2 (min, max) {
    let luckyTickets = 0;

    for (let i = Number(min); i <= Number(max); i++) {
        let ticketNumber = String(i).split('');
        let sumEven = 0;        // для каждого билета обнуляем сумму четных
        let sumOdd = 0;         // и сумму нечетных цифр 

        for (let j = 0; j < ticketNumber.length; j++) {
            ticketNumber[j] = Number(ticketNumber[j]);
        }

        for (let k = 0; k < ticketNumber.length; k++) { // перебирая массив цифр билета,
            if (ticketNumber[k] % 2 === 0) {
                sumEven += ticketNumber[k];             // суммируем четные
            } else {
                sumOdd += ticketNumber[k];              // и нечетные цифры
            }
        }

        if (sumEven === sumOdd) {
            luckyTickets++;
        }
    }

    return luckyTickets;
}
