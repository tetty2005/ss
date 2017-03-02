var wasteTypes = ['daily', 'house', 'social', 'sport', 'style'];
var wastes = {};
var maxes = {};

function myFunction(wasteType) {
	var waste = document.getElementById('input_' + wasteType).value;
	wastes[wasteType] = wastes[wasteType] || [];
	wastes[wasteType].push(waste*1);
	calculate(wastes, wasteType);
	save();
}

function save() {
	localStorage.setItem("maxes", JSON.stringify(maxes));
	localStorage.setItem("wastes", JSON.stringify(wastes));
}

window.onload = function() {
	maxes = JSON.parse(localStorage.getItem("maxes")) || {};
	wastes = JSON.parse(localStorage.getItem("wastes")) || {};

	wasteTypes.forEach(function (wasteType){
		setMax(wasteType, maxes[wasteType] || 0);
		calculate(wastes, wasteType);
	});
}

function calculate(wastes, wasteType){
    var sum = 0;
    for (i = 0; i < wastes[wasteType].length; i++) {
    	sum += wastes[wasteType][i];
    }
    document.getElementById('progress_' + wasteType).value = sum;
    document.getElementById('span_' + wasteType).innerHTML = sum;
    
    var balance = maxes[wasteType] - sum;
    document.getElementById('balance_' + wasteType).innerHTML = balance;
	
	document.getElementById('balance_' + wasteType).style.color = balance < 0 ? 'red' : 'gray';

	var max = maxes[wasteType];
	if (sum > max) {
		document.getElementById('progress_' + wasteType).className = 'styled5';
	}
	else if (sum > 0.75*max && sum <= max) {
		document.getElementById('progress_' + wasteType).className = 'styled4';
	}
	else if (sum > 0.5*max && sum <= 0.75*max) {
		document.getElementById('progress_' + wasteType).className = 'styled3';
	}
	else if (sum > 0.25*max && sum <= 0.5*max) {
		document.getElementById('progress_' + wasteType).className = 'styled2';
	}
	else {
		document.getElementById('progress_' + wasteType).className = 'styled1';		
	}
}

function plus1(wasteType){
	var waste = 1;
	wastes[wasteType].push(waste*1);
	calculate(wastes, wasteType);
	save(wastes);
}

function plus10(wasteType){
	var waste = 10;
	wastes[wasteType].push(waste*1);
	calculate(wastes, wasteType);
	save(wastes);
}

function changeMax(wasteType){
	var nameType = document.querySelector("#title_" + wasteType).textContent;
	var max = prompt("Бюджет по тратам " + "'" + nameType + "'" + " составляет:");
	max = parseInt(max);
	if (isNaN(max)) {
		return;
	}
	setMax(wasteType, max);
	save();
	calculate(wastes, wasteType);
}

function setMax(wasteType, max){
	maxes[wasteType] = max; 
	document.getElementById('progress_' + wasteType).max = max;
	document.getElementById('max_' + wasteType).innerHTML = max;
}
