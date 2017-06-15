function checkPalindrom(str){
	var strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
    	return str;
    } else {
     	return cutString(str);
    }
}

function cutString(str){
	if (str.length > 1) {
		var newStr1 = checkPalindrom(str.split('').slice(0,length-1).join(''));
		var newStr2 = checkPalindrom(str.split('').slice(1).join(''));
		if (+newStr1 > +newStr2) {
			return newStr1;
		} else {
			return newStr2;
		}
	} else {
		return 0;
	}
}
	
function task4(number){
	if (number != undefined && typeof number === 'number') {
		if (number > 10){
			var str = ''+ number;
			var result = +checkPalindrom(str);
			return result;		
		} else {
			return  0;
		}
	}
	return {status: 'failed', reason: 'Enter a number'};
}