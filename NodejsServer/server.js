var http = require('http');
var url = require('url');

var user = require('./user');
var sql = require('./sql')
// var mysql = require('./database');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' }); // http header

    var sortedUrl = req.url;

    var params = url.parse(sortedUrl, true);

    var api = params.pathname;
    var body = params.query;

    console.log("API NAME => ", params.pathname);
    console.log('DATA => ', params.query);

    function callback(error, result) {
        if (error) {
            res.write(error);
        }
        else {
            res.write(JSON.stringify(result));
        }
        res.end();
    }


    if (api === '/insert') {
        user.insertData(body, callback);

    } else if (api === '/delete') {
        user.deleteData(body, callback);

    } else if (api === '/update') {
        user.updateData(body, callback);

    } else if (api === '/get') {
        user.getData(body, callback);
    } else if (api === '/getAll') {
        res.send(user.getAllData(), callback);
    }
    else if (api === '/getById') {
        user.getById(body, callback);
    }
    else if (api === '/getByTwo') {
        user.getByTwoParam(body, callback);
    }
    else {
        res.write('<h1>Hello World!<h1>'); //write a response
        res.end();
    }
}).listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
});