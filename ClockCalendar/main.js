'use strict'

document.addEventListener('DOMContentLoaded', init);

let mode = 'timeShort';

function init () {
	let div = document.querySelector('.clock-calendar');

	div.addEventListener('click', switchFormats);
	div.addEventListener('contextmenu', switchClockCalendar, false);
	div.addEventListener('mouseover', () => div.classList.add('blue'));
	div.addEventListener('mouseout', () => div.classList.remove('blue'));

	setInterval(render, 1000);
	
	function render () {
		div.innerHTML = getClockCalendar();
	}

	function getClockCalendar () {
		let result;
        
		if (mode === 'dateEU') {
	            result = setCalendarEU();
	        } else if (mode === 'dateUA') {
	            result = setCalendarUA();
	        } else if (mode === 'timeFull') {
	            result = setTimeFull();
	        } else if (mode === 'timeShort') {
	            result = setTimeShort();
	        }

	    return result;
	}

    function setTimeShort () {
    	let result;
        
    	result = new Date().toLocaleTimeString('en-US', {
			hour12: false,
			hour: "numeric",
			minute: "numeric"
		});
		mode = 'timeShort';

        return result;
    }

    function setTimeFull () {
        let result;
        
        result = new Date().toLocaleTimeString('en-US', {
			hour12: false,
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		});
		mode = 'timeFull';
        
		return result;
    }

    function setCalendarEU () {
    	let result,
	    	currentTime = new Date(),
	        day = currentTime.getDate(),
	        month = currentTime.getMonth() + 1,
	        year = currentTime.getFullYear();

        result = `${month}/${day}/${year}`;
        mode = 'dateEU';
        
        return result;
    }

    function setCalendarUA () {
    	let result,
	    	currentTime = new Date(),
	        day = currentTime.getDate(),
	        month = currentTime.getMonth() + 1,
	        year = currentTime.getFullYear();

        result = `${day}.${month}.${year}`;
        mode = 'dateUA';
        
        return result;
    }

    function switchClockCalendar (e) {
    	let result;
        
        if (mode === 'dateEU' || mode === 'dateUA') {
            result = setTimeShort();
        } else {
            result = setCalendarEU();
        }
        e.preventDefault();

        return result;
    }

    function switchFormats () {
    	let result;
        
        if (mode === 'dateEU') {
            result = setCalendarUA();
        } else if (mode === 'dateUA') {
            result = setCalendarEU();
        } else if (mode === 'timeFull') {
            result = setTimeShort();
        } else if (mode === 'timeShort') {
            result = setTimeFull();
        }

        return result;
    }
}
