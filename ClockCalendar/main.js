setInterval(CurrentDateTime, 1000);

function CurrentDateTime () {
    document.getElementsByClassName('clock-calendar')[0].innerHTML = new Date();
}

function switchFormats () {
  // left mouse button should:
  // for Clocks - switch formats between 'short' and 'full'
  // for Calendar - switch formats between 'eu-date' and 'ua-date'
}

function () {
    // right mouse button should switch Clock to Calendar and back
}
