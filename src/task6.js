function task6 (rowLength, minSquare) {
    if (typeof rowLength !== 'number' || typeof minSquare !== 'number') {
        return {status: 'failed', reason: 'Enter two numbers'};
    } else {    
        let numbers = [];                                   // создаем искомый ряд чисел

        next:
        for (let i = 1; numbers.length < rowLength; i++) {  // пока ряд не станет нужной длины
            for (let j = 2; j < i; j++) {                   // перебираем все числа,
                if (i % j == 0) continue next;              // пропуская ненатуральные
            }

            if (i*i > minSquare) {          // если квадрат числа больше минимального квадрата,
                numbers.push(i);            // добавляем число в массив
            }
        }

        return numbers.join(',');           // выводим ряд через запятую в виде строки
    }
}
