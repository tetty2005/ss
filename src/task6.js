function task6(n, m){

	if (typeof n === 'number' && typeof m === 'number') {
		
		var numbers = [];

		next:
		for (var i = 1; numbers.length < n; i++) {

			for (var j = 2; j < i; j++) {
	      		if (i % j == 0) continue next;
	    	}

	    	if (i*i > m) {
	    		numbers.push(i);
	    	}
	  	}

		return numbers.join(',');

	} else {

		return {status: 'failed', reason: 'Enter two numbers'};
	}

}
