let exec = require("child_process").exec;
let fs = require("fs");
let dateNow = getDate();
let timeNow = getTime();

function date (response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(dateNow);
    response.end();
}

function time (response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(timeNow);
    response.end();
}

function getDate (dateFormat) {
    let time = new Date(),
        dd = formatTimeNumber(time.getDate()),
        mm = formatTimeNumber(time.getMonth() + 1),
        yyyy = time.getFullYear();

    return dateFormat === 'ua'? `${dd}.${mm}.${yyyy}`: `${mm}/${dd}/${yyyy.toString().slice(-2)}`;
}

function getTime (timeFormat) {
    let time = new Date(),
        hh = formatTimeNumber(time.getHours()),
        mm = formatTimeNumber(time.getMinutes()),
        ss = formatTimeNumber(time.getSeconds());

    return timeFormat === 'short'? `${hh}:${mm}`: `${hh}:${mm}:${ss}`;
}

function formatTimeNumber (number) {
    return number >= 10? number: '0' + number;
}

exports.date = date;
exports.time = time;