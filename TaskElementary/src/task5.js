'use strict'

function task5 (context) {
    let error = preValidate5(context);

    return (!error)? setLuckyTickets(context): {status: 'failed', reason: error};
}

function setLuckyTickets (context) {
    let result = {},
        luckyTickets1 = 0,
        luckyTickets2 = 0,
        min = Number(context.min),
        max = Number(context.max);

    for (let i = min; i <= max; i++) {
        let ticket = String(i).split('');

        for (let j = 0; j < ticket.length; j++) {
            ticket[j] = Number(ticket[j]);
        }

        luckyTickets1 += method1(ticket);
        luckyTickets2 += method2(ticket);
    }

    if (luckyTickets1 > luckyTickets2) {
        result.winner = 'method1 (counts sums of first and second 3 numbers)';
    } else if (luckyTickets2 > luckyTickets1) {
        result.winner = 'method2 (counts sums of odd and even numbers)';
    } else {
        result.winner = 'Both methods bring the same amount of lucky tickets';
    }

    result.luckyTickets1 = luckyTickets1;
    result.luckyTickets2 = luckyTickets2;

    return result;
}

function method1 (ticket) {
    while (ticket.length < 6) {
        ticket.unshift(0);
    }

    let sum1 = ticket[0] + ticket[1] + ticket[2];
    let sum2 = ticket[3] + ticket[4] + ticket[5];

    return (sum1 === sum2)? 1: 0;
}

function method2 (ticket) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < ticket.length; i++) {
        if (ticket[i] % 2 === 0) {
            sumEven += ticket[i];
        } else {
            sumOdd += ticket[i];
        }
    }

    return (sumEven === sumOdd)? 1: 0;
}

function preValidate5 (context) {
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
