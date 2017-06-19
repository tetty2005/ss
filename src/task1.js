function task1 (boardX, boardY, symbol) {
    if (typeof boardX !== 'number' || typeof boardY !== 'number' || 
        typeof symbol !== 'string'){

        return  {status: 'failed', reason: 'Enter two numbers and a symbol as a string'};
        
    } else {
        let line1 = '',
            line2 = '',
            enter = '\n',
            space = ' ',
            board = '';

        for (let i = 0; i < boardX; i++) {          // рисуем первую строку
            line1 += symbol + space;
        }

        for (let i = 0; i < boardX-1; i++) {        // рисуем вторую строку
            line2 += space + symbol;
        }           

        for (let i = 1; i < boardY/2; i++) {        // рисуем доску,
            board +=  line1 + enter + line2 + enter;// чередуя первую и вторую строки
        }

        if (boardY % 2 != 0) {          // если высота доски равна нечетному количеству строк,
            board +=  line1 + enter;    // то добавляем еще одну строку
        }

        return board;
    }
}
