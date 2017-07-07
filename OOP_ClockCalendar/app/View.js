class View {
    constructor () {
        this.div = document.querySelector('.clock-calendar');
        this.clockCalendar = new clockCalendar();
        this.mode = 'short';
        this.currentTime = this.clockCalendar.getTime('short');

        this.div.addEventListener('click', () => this.switchFormat());
        this.div.addEventListener('contextmenu', (e) => {
            e.preventDefault(); this.switchMode();});
        this.div.addEventListener('mouseover', () => this.div.classList.add('blue'));
        this.div.addEventListener('mouseout', () => this.div.classList.remove('blue'));

    }

    render () {
        this.div.innerHTML = this.clockCalendar.getTime('short');
        this.clockCalendar.start(() => this.refresh());
    }

    switchFormat () {
        if (this.mode === 'short') {
            this.mode = 'full';
            this.div.innerHTML = this.clockCalendar.getTime('full');
        } else if (this.mode === 'full') {
            this.mode = 'short';
            this.div.innerHTML = this.clockCalendar.getTime('short');
        } else if (this.mode === 'ua') {
            this.mode = 'eu';
            this.div.innerHTML = this.clockCalendar.getDate('eu');
        } else if (this.mode === 'eu') {
            this.mode = 'ua';
            this.div.innerHTML = this.clockCalendar.getDate('ua');
        }
    }

    switchMode () {
        if (this.mode === 'short' || this.mode === 'full') {
            this.mode = 'ua';
            this.div.innerHTML = this.clockCalendar.getDate('ua');
        } else if (this.mode === 'ua' || this.mode === 'eu') {
            this.mode = 'short';
            this.div.innerHTML = this.clockCalendar.getTime('short');
        }
    }

    refresh () {
        let shortTime = this.mode === 'short' 
            && this.currentTime !== this.clockCalendar.getTime('short'),
            fullTime = this.mode === 'full' 
            && this.currentTime !== this.clockCalendar.getTime('full'),
            uaDate = this.mode === 'ua' 
            && this.currentTime !== this.clockCalendar.getDate('ua'),
            euDate = this.mode === 'eu' 
            && this.currentTime !== this.clockCalendar.getDate('eu');
        
        if (shortTime) {
            this.div.innerHTML = this.clockCalendar.getTime('short');
            this.currentTime = this.clockCalendar.getTime('short');
        } else if (fullTime) {
            this.div.innerHTML = this.clockCalendar.getTime('full');
            this.currentTime = this.clockCalendar.getTime('full');
        } else if (uaDate) {
            this.div.innerHTML = this.clockCalendar.getDate('ua');
            this.currentTime = this.clockCalendar.getDate('ua');
        } else if (euDate) {
            this.div.innerHTML = this.clockCalendar.getDate('eu');
            this.currentTime = this.clockCalendar.getDate('eu');
        }
    }
}
