	function task1(boardX, boardY, symbol){
		if (boardX !== undefined && boardY !== undefined && symbol !== undefined &&
			typeof boardX === 'number' && typeof boardY === 'number' && typeof symbol === 'string'){
			var enter = '\n',
			line1 = '',
			line2 = '',
			board = '';

			for (var n = 0; n < boardX; n++) {
				line1 += symbol + ' ';
			}

			for (var n = 0; n < boardX-1; n++) {
				line2 += ' ' + symbol;
			}			

			for (var i = 1; i < boardY/2; i++) {
				board +=  line1 + enter + line2 + enter;
			}

			if (boardY % 2 != 0) {
				board +=  line1 + enter;
			}
			return board;
		} else {
			return  {status: 'failed', reason: 'Enter two numbers and a symbol as a string'};
		}
	}