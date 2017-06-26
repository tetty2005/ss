'use strict'

function task5 (context) {
    let result, error;
    error = preValid(context);

    if (!error) {
        result = setLuckyTickets(context);
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}

function setLuckyTickets (context) {
    let result = {};
    result.luckyTickets1 = method1(context.min, context.max);
    result.luckyTickets2 = method2(context.min, context.max);

    if (result.luckyTickets1 > result.luckyTickets2) {
        result.winner = 'method1';
    } else if (result.luckyTickets2 > result.luckyTickets1) {
        result.winner = 'method2';
    } else {
        result.winner = 'Both methods bring the same amount of lucky tickets';
    }

    return result;
}

// The first method counts the number of tickets 
// where the sum of the first three digits is the sum of the last three ones
function method1 (min, max) {                           
    let luckyTickets = 0;

    for (let i = Number(min); i <= Number(max); i++) {
        let ticketNumber = String(i).split('');

        for (let j = 0; j < ticketNumber.length; j++) {
            ticketNumber[j] = Number(ticketNumber[j]);
        }

        while (ticketNumber.length < 6) {
            ticketNumber.unshift(0);
        }

        let sum1 = ticketNumber[0] + ticketNumber[1] + ticketNumber[2];
        let sum2 = ticketNumber[3] + ticketNumber[4] + ticketNumber[5];

        if (sum1 === sum2) {
            luckyTickets++;
        }
    }

    return luckyTickets;
}

// The second method counts the number of tickets 
// where the sum of even numbers of the ticket is equal to the sum of odd
function method2 (min, max) {
    let luckyTickets = 0;

    for (let i = Number(min); i <= Number(max); i++) {
        let ticketNumber = String(i).split('');
        let sumEven = 0;
        let sumOdd = 0;

        for (let j = 0; j < ticketNumber.length; j++) {
            ticketNumber[j] = Number(ticketNumber[j]);
        }

        for (let k = 0; k < ticketNumber.length; k++) {
            if (ticketNumber[k] % 2 === 0) {
                sumEven += ticketNumber[k];
            } else {
                sumOdd += ticketNumber[k];
            }
        }

        if (sumEven === sumOdd) {
            luckyTickets++;
        }
    }

    return luckyTickets;
}

function preValid (context) {
    let error = '';

    if (!context || !context.min || !context.max) { 
        error = 'Enter an object with properties min and max';
    } else if (typeof context.min !== 'string' || 
               typeof context.max !== 'string') {
        error = 'Properties min and max should be a string';
    } else if (context.min.length < 6 || context.max.length < 6) {
        error = 'Properties min and max should be with 6 numbers';
    }

    return error;
}
