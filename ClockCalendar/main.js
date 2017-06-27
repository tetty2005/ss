'use strict'

document.addEventListener('DOMContentLoaded', init);
setInterval(init, 1000);

let mode = 'timeShort';

function init() {
    let div = document.querySelector('.clock-calendar'),
        currentTime = new Date(),
        hh = currentTime.getHours(),
        mm = currentTime.getMinutes(),
        ss = currentTime.getSeconds(),
        day = currentTime.getDate(),
        month = currentTime.getMonth() + 1,
        year = currentTime.getFullYear();
        
    setClockCalendar();

    div.addEventListener('click', switchFormats);
    div.addEventListener('contextmenu', switchClockCalendar, false);
    div.addEventListener('mouseover', () => div.classList.add('blue'));
    div.addEventListener('mouseout', () => div.classList.remove('blue'));

    function setClockCalendar () {
        if (mode === 'dateEU') {
            setCalendarEU();
        } else if (mode === 'dateUA') {
            setCalendarUA();
        } else if (mode === 'timeFull') {
            setTimeFull();
        } else if (mode === 'timeShort') {
            setTimeShort();
        }
    }

    function setTimeShort () {
        console.log(String(hh).length);
        hh = (String(hh).length < 2) ? '0'+ hh : hh;
        mm = (String(mm).length < 2) ? '0'+ mm : mm;
        div.innerHTML = `${hh}:${mm}`;
        mode = 'timeShort';
    }

    function setTimeFull () {
        hh = ((hh).length < 2) ? '0'+ hh : hh;
        mm = ((mm).length < 2) ? '0'+ mm : mm;
        ss = ((ss).length < 2) ? '0'+ ss : ss;
        div.innerHTML = `${hh}:${mm}:${ss}`;
        mode = 'timeFull';
    }

    function setCalendarEU () {
        month = (String(month).length < 2) ? '0'+ month : month;
        day = (String(day).length < 2) ? '0'+ day : day;
        div.innerHTML = `${month}/${day}/${year}`;
        mode = 'dateEU';
    }

    function setCalendarUA () {
        month = (String(month).length < 2) ? '0'+ month : month;
        day = (String(day).length < 2) ? '0'+ day : day;
        div.innerHTML = `${day}.${month}.${year}`;
        mode = 'dateUA';
    }


    function switchClockCalendar (e) {
        if (mode === 'dateEU' || mode === 'dateUA') {
            setTimeShort();
        } else {
            setCalendarEU();
        }
        e.preventDefault();
    }

    function switchFormats () {
        if (mode === 'dateEU') {
            setCalendarUA();
        } else if (mode === 'dateUA') {
            setCalendarEU();
        } else if (mode === 'timeFull') {
            setTimeShort();
        } else if (mode === 'timeShort') {
            setTimeFull();
        }
    }
}
