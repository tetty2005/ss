class View {
    constructor () {
        this.clockCalendar = new ClockCalendar();

        this.mode = 'time';
        this.timeFormat = 'short';
        this.dateFormat = 'ua';

        this.div = document.querySelector('.clock-calendar');

        this.div.addEventListener('click', () => this.switchFormat());
        this.div.addEventListener('mouseover', () => this.div.classList.add('blue'));
        this.div.addEventListener('mouseout', () => this.div.classList.remove('blue'));
        this.div.addEventListener('contextmenu', (e) => {
                                   e.preventDefault(); this.switchMode();
                                 });

        setInterval(() => this.render(), 1000);
    }

    render () {
        this.div.innerHTML = this.mode === 'time'? 
                            this.clockCalendar.getTime(this.timeFormat):
                            this.clockCalendar.getDate(this.dateFormat);
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
