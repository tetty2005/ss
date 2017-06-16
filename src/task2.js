function task2(envelope1, envelope2){

	if (typeof envelope1 !== 'object' || typeof envelope2 !== 'object') {

		return {status: 'failed', reason: 'Enter two envelopes as objects'};

	} else if (typeof envelope1.a !== 'number' || typeof envelope1.b !== 'number' ) {

		return {status: 'failed', reason: 'Enter two sides of first envelope as properties a and b'};

	} else if (typeof envelope2.c !== 'number' || typeof envelope2.d !== 'number') {

		return {status: 'failed', reason: 'Enter two sides of second envelope as properties c and d'};

	} else {

	   	return (envelope1.a < envelope2.c && envelope1.b < envelope2.c ||
			envelope1.a < envelope2.d && envelope1.b < envelope2.d) ? 1 :
			(envelope2.c < envelope1.a && envelope2.d < envelope1.b  || 
			envelope2.d < envelope1.a && envelope2.c < envelope1.b) ? 2 : 0;
	}
}
