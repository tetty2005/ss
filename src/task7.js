function task7 (context) {
    if (typeof context !== 'object') {
        return  {status: 'failed', reason: 'Enter an object with properties min and max or length with a number'};
    } else {
        let fiboMax = [0, 1];  // создаем массив для чисел Фибоначчи, откуда будем выбирать
        let fiboPart = [];     // массив искомых чисел

        // 1. Если даны минимальное и максимальное значения:
        if (typeof context.min === 'number' && typeof context.max === 'number' && 
            context.length === undefined) {

            while (fiboMax[fiboMax.length - 1] <= context.max) { // пока ряд не достинет максимального количества чисел,
                fiboMax.push(fiboMax[fiboMax.length - 1] + fiboMax[fiboMax.length - 2]); // наполняем его числами Фибоначчи,

                if (fiboMax[fiboMax.length - 1] >= context.min){  // и начиная с заданного минимального значения,
                    fiboPart.push(fiboMax[fiboMax.length - 1]);   // пополняем массив искомых чисел
                }
            }

        // 2. Если дана длина чисел:
        } else if (typeof context.length === 'number' && 
                   context.min === undefined && context.max === undefined) {

                    let numberFibo = '0';      // создаем переменную с числом Фибоначчи для дальнейшего расчета длины числа

                    for (let i = 2; numberFibo.length <= context.length; i++) { // Пока массив не превысит заданной длины
                        fiboMax.push(fiboMax[i - 1] + fiboMax[i - 2]);          // наполняем его числами Фибоначчи,
                        numberFibo = String(fiboMax[i]);                        // преобразуя каждое число в строку
                                                                                // для сравнения его длины с заданной.
                        if (numberFibo.length === context.length){              // Если длина соответствует,
                            fiboPart.push(fiboMax[i]);                          // формируем искомый массив.
                        }
                    }

        } else {
            return {status: 'failed', reason: 'Enter an object with properties min and max or length with a number'};
        }

        return fiboPart;
    }
}
