'use strict'

class ClockCalendar extends HTMLElement {
    constructor () {
        super();
    }

    start () {
        this.element = this.createShadowRoot();
        this.dateWidget = new DateWidget();

        this.mode = 'time';
        this.timeFormat = 'short';
        this.dateFormat = 'ua';

        this.addEventListener('click', () => this.switchFormat());
        this.addEventListener('mouseover', () => this.classList.add('blue'));
        this.addEventListener('mouseout', () => this.classList.remove('blue'));
        this.addEventListener('contextmenu', (e) => {
                                   e.preventDefault(); this.switchMode();
                                 });

        setInterval(() => this.render(), 1000);
    }

    render () {
        this.element.innerHTML = this.mode === 'time'? 
                            this.dateWidget.getTime(this.timeFormat):
                            this.dateWidget.getDate(this.dateFormat);
    }

    switchFormat () {
        if (this.mode === 'time') {
            this.timeFormat = this.timeFormat === 'short'? 'full': 'short';
        } else {
            this.dateFormat = this.dateFormat === 'ua'? 'eu': 'ua';
        }
        this.render();
    }

    switchMode (e) {
        this.mode = this.mode === 'time'? 'date': 'time';
        this.render();
    }
}