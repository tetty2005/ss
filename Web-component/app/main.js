'use strict'

window.onload = () => upload();

function upload () {
    document.registerElement('clock-calendar-widget', ClockCalendar);
    let widget = document.querySelector('clock-calendar-widget');
    
    widget.start();
    widget.render();
}
