function task1(boardX, boardY, symbol) {
    if (typeof boardX !== 'number' || typeof boardY !== 'number' || 
        typeof symbol !== 'string'){

        return  {status: 'failed', reason: 'Enter two numbers and a symbol as a string'};
        
    } else {
        let line1 = '',
            line2 = '',
            enter = '\n',
            space = ' ',
            board = '';

        for (let i = 0; i < boardX; i++) {
            line1 += symbol + space;
        }

        for (let i = 0; i < boardX-1; i++) {
            line2 += space + symbol;
        }           

        for (let i = 1; i < boardY/2; i++) {
            board +=  line1 + enter + line2 + enter;
        }

        if (boardY % 2 != 0) {
            board +=  line1 + enter;
        }

        return board;
    }
}
