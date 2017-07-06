'use strict'

function task7 (context) {
    let error = preValidate(context);

    return (!error)? getArrayFibo(context): {status: 'failed', reason: error};
}

function getArrayFibo (context) {
    let fibo = [0, 1];
    let fiboPart = [];

    // 1. Если даны минимальное и максимальное значения:
    if (typeof context.min === 'number' && 
        typeof context.max === 'number' && 
        context.length === undefined) {

        while (fibo[fibo.length - 1] <= context.max) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);

            if (fibo[fibo.length - 1] >= context.min) {
                fiboPart.push(fibo[fibo.length - 1]);
            }
        }

    // 2. Если дана длина чисел:
    } else if (typeof context.length === 'number' && 
               context.min === undefined && 
               context.max === undefined) {

        let numberFibo = '0';

        for (let i = 2; numberFibo.length <= context.length; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]); 
            numberFibo = String(fibo[i]);

            if (numberFibo.length === context.length) {
                fiboPart.push(fibo[i]);
            }
        }
    } 

    return fiboPart;
}

function preValidate (context) {
    let error = '';

    if (typeof context !== 'object') {
        error = 'Enter an object with properties min and max or length with a number';
    } 

    return error;
}
