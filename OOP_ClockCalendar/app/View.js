class View {
    constructor () {
        this.div = document.querySelector('.clock-calendar');
        this.clockCalendar = new clockCalendar();
        this.mode = 'short';
        this.currentTime = this.clockCalendar.getTimeShort();

        this.div.addEventListener('click', () => this.switchFormat());
        this.div.addEventListener('contextmenu', (e) => {
            e.preventDefault(); this.switchMode();});
        this.div.addEventListener('mouseover', () => this.div.classList.add('blue'));
        this.div.addEventListener('mouseout', () => this.div.classList.remove('blue'));

    }

    render () {
        this.div.innerHTML = this.clockCalendar.getTimeShort();
        this.clockCalendar.start(() => this.refresh());
    }

    switchFormat () {
        if (this.mode === 'short') {
            this.mode = 'full';
            this.div.innerHTML = this.clockCalendar.getTimeFull();
        } else if (this.mode === 'full') {
            this.mode = 'short';
            this.div.innerHTML = this.clockCalendar.getTimeShort();
        } else if (this.mode === 'ua') {
            this.mode = 'eu';
            this.div.innerHTML = this.clockCalendar.getDateEU();
        } else if (this.mode === 'eu') {
            this.mode = 'ua';
            this.div.innerHTML = this.clockCalendar.getDateUA();
        }
    }

    switchMode () {
        if (this.mode === 'short' || this.mode === 'full') {
            this.mode = 'ua';
            this.div.innerHTML = this.clockCalendar.getDateUA();
        } else if (this.mode === 'ua' || this.mode === 'eu') {
            this.mode = 'short';
            this.div.innerHTML = this.clockCalendar.getTimeShort();
        }
    }

    refresh () {
        let shortTime = this.mode === 'short' 
            && this.currentTime !== this.clockCalendar.getTimeShort(),
            fullTime = this.mode === 'full' 
            && this.currentTime !== this.clockCalendar.getTimeFull(),
            uaDate = this.mode === 'ua' 
            && this.currentTime !== this.clockCalendar.getDateUA(),
            euDate = this.mode === 'eu' 
            && this.currentTime !== this.clockCalendar.getDateEU();
        
        if (shortTime) {
            this.div.innerHTML = this.clockCalendar.getTimeShort();
            this.currentTime = this.clockCalendar.getTimeShort();
        } else if (fullTime) {
            this.div.innerHTML = this.clockCalendar.getTimeFull();
            this.currentTime = this.clockCalendar.getTimeFull();
        } else if (uaDate) {
            this.div.innerHTML = this.clockCalendar.getDateUA();
            this.currentTime = this.clockCalendar.getDateUA();
        } else if (euDate) {
            this.div.innerHTML = this.clockCalendar.getDateEU();
            this.currentTime = this.clockCalendar.getDateEU();
        }
    }
}
