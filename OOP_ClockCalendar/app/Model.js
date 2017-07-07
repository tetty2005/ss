class clockCalendar {
    getDate (mode) {
        let time = new Date(),
            dd = this.formatTimeNumber(time.getDate()),
            mm = this.formatTimeNumber(time.getMonth() + 1),
            yyyy = time.getFullYear();

        return mode === 'ua'? `${dd}.${mm}.${yyyy}`: `${mm}/${dd}/${yyyy.toString().slice(-2)}`;
    }

    getTime (mode) {
        let time = new Date(),
            hh = this.formatTimeNumber(time.getHours()),
            mm = this.formatTimeNumber(time.getMinutes()),
            ss = this.formatTimeNumber(time.getSeconds());

        return mode === 'short'? `${hh}:${mm}`: `${hh}:${mm}:${ss}`;
    }
