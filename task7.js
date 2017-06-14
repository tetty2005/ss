function task7(context){
	if (context !== undefined && typeof context === 'object') {
		var arrayFibo = [];
		var f = [0, 1];
		if (typeof context.min === 'number' && typeof context.max === 'number') {
			while (f[f.length - 1] <= context.max) {
				f.push(f[f.length - 1] + f[f.length - 2]);
				if (f[f.length - 1] > context.max) break;
				if (f[f.length - 1] >= context.min){
					arrayFibo.push(f[f.length - 1]);
				}
			}

		} else if (typeof context.length === 'number') {
			var lengthNumber = '';
			for (var i = 2; lengthNumber.length <= context.length; i++) {
				f.push(f[i - 1] + f[i - 2]);
				lengthNumber = '' + f[i];
				if (lengthNumber.length === context.length){
					arrayFibo.push(f[i]);
				}
			}

		} else {
			return {status: 'failed', reason: 'Enter an object with properties min and max or length with a number'};
		}

		return arrayFibo;

	} else {
		return  {status: 'failed', reason: 'Enter an object with properties min and max or length with a number'};
	}
}
