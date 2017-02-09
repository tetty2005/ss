var wastes = {};

function myFunction(wasteType) {
  var waste = document.getElementById('input_' + wasteType).value;
  wastes[wasteType] = wastes[wasteType] || [];
  wastes[wasteType].push(waste*1);
  calculate(wastes, wasteType);
  console.log(wastes);
  save(wastes);
}

function save(wastes) {
  localStorage.setItem("wastes", JSON.stringify(wastes));
}

window.onload = function() {
  wastes = JSON.parse(localStorage.getItem("wastes")) || {};
  for (wasteType in wastes) {
    calculate(wastes, wasteType);
  }
}

function calculate(wastes, wasteType){
    var sum = 0;
    for (i = 0; i < wastes[wasteType].length; i++) {
      sum += wastes[wasteType][i];
    }
    document.getElementById('span_' + wasteType).innerHTML = sum;
    
    var max = document.getElementById('progress_' + wasteType).max;
    var balance = max - sum;
    if (balance > max) {
      document.getElementById('balance_' + wasteType).style.color = 'red';
      document.getElementById('balance_' + wasteType).innerHTML = balance;
    }
    else {
      document.getElementById('balance_' + wasteType).innerHTML = balance;
    }
    document.getElementById('progress_' + wasteType).value = sum;
  }
