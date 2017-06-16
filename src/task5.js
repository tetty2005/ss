function task5(context){
	if (context === undefined || context.min === undefined || context.max === undefined) {
		
		return {status: 'failed', reason: 'Enter an object with properties min and max'};

	} else if (typeof context.min !== 'string' || typeof context.max !== 'string') {

		return {status: 'failed', reason: 'Properties min and max should be a string'};

	} else if (context.min.length < 6 || context.max.length < 6) {

		return {status: 'failed', reason: 'Properties min and max should be with 6 numbers'};

	} else {

		var result = {};
		result.sum1 = method1(context.min, context.max);
		result.sum2 = method2(context.min, context.max);
		result.winner = (result.sum1 > result.sum2) ? 'method1' : (result.sum2 > result.sum1) ? 'method2' : 'Both methods bring the same number of lucky tickets.';

		return result;
	}
}

function method1(min, max){
	var sum1 = 0;
	for (var i = +min; i <= +max; i++) {
		var str = ''+i;
		var a = str.split('');

		while (a.length < 6) {
			a.unshift(0);
		}

		for (var j = 0; j < 6; j++) {
			a[j] = +a[j];
		}

		var s1 = a[0] + a[1] + a[2];
		var s2 = a[3] + a[4] + a[5];

		if (s1 === s2) {
			sum1++;
		}
	}
	return sum1;
}

function method2(min, max){
	var sum2 = 0;

	for (var i = +min; i <= +max; i++) {
		var str = ''+i;
		var a = str.split('');
		var sEven = 0;
		var sOdd = 0;

		for (var j = 0; j < a.length; j++){
			a[j] = +a[j];
		}

		for (var l = 0; l < a.length; l++) {
			if (a[l] % 2 === 0) {
				sEven += a[l];
			} else {
				sOdd += a[l];
			}
		}

		if (sEven === sOdd) {
			sum2++;
		}
	}
	return sum2;
}