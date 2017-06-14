function task2(envelope1, envelope2){
	if (envelope1 == undefined || envelope2 == undefined) {
		return {status: 'failed', reason: 'Enter two envelopes as objects'};
	} else if (envelope1.a == undefined || envelope1.b == undefined) {
		return {status: 'failed', reason: 'Enter two sides of first envelope as properties a and b'};
	} else if (envelope2.c == undefined || envelope2.d == undefined) {
		return {status: 'failed', reason: 'Enter two sides of second envelope as properties c and d'};
	} else {
	   	return (envelope1.a < envelope2.c && envelope1.b < envelope2.c ||
			envelope1.a < envelope2.d && envelope1.b < envelope2.d) ? 1 :
			(envelope2.c < envelope1.a && envelope2.d < envelope1.b  || 
			envelope2.d < envelope1.a && envelope2.c < envelope1.b) ? 2 : 0;
	}
}
    
