class ClockCalendar {
    getTime (timeFormat) {
        let time = new Date(),
            hh = this.formatTimeNumber(time.getHours()),
            mm = this.formatTimeNumber(time.getMinutes()),
            ss = this.formatTimeNumber(time.getSeconds());

        return timeFormat === 'short'? `${hh}:${mm}`: `${hh}:${mm}:${ss}`;
    }

    getDate (dateFormat) {
        let time = new Date(),
            dd = this.formatTimeNumber(time.getDate()),
            mm = this.formatTimeNumber(time.getMonth() + 1),
            yyyy = time.getFullYear();

        return dateFormat === 'ua'? `${dd}.${mm}.${yyyy}`: `${mm}/${dd}/${yyyy.toString().slice(-2)}`;
    }

    formatTimeNumber(number) {
        return number >= 10? number: '0' + number;
    }
}
