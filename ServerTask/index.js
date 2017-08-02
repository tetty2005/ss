let server = require("./server");
let router = require("./router");
let requestHandlers = require("./requestHandlers");

let handle = {};
handle["/"] = requestHandlers.start;
handle["/date"] = requestHandlers.date;
handle["/time"] = requestHandlers.time;

server.start(router.route, handle);