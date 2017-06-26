'use strict'

function task7 (context) {
        let result;
    let error = preValidate(context);

    if (!error) {
        result = getArrayFibo(context);
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}

function getArrayFibo (context) {

    let fiboMax = [0, 1];
    let fiboPart = [];

    // 1. Если даны минимальное и максимальное значения:
    if (typeof context.min === 'number' && typeof context.max === 'number' && 
        context.length === undefined) {

        while (fiboMax[fiboMax.length - 1] <= context.max) {
            fiboMax.push(fiboMax[fiboMax.length - 1] + fiboMax[fiboMax.length - 2]);

            if (fiboMax[fiboMax.length - 1] >= context.min) {
                fiboPart.push(fiboMax[fiboMax.length - 1]);
            }
        }

    // 2. Если дана длина чисел:
    } else if (typeof context.length === 'number' && 
               context.min === undefined && context.max === undefined) {

                let numberFibo = '0';

                for (let i = 2; numberFibo.length <= context.length; i++) {
                    fiboMax.push(fiboMax[i - 1] + fiboMax[i - 2]); 
                    numberFibo = String(fiboMax[i]);

                    if (numberFibo.length === context.length) {
                        fiboPart.push(fiboMax[i]);
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
