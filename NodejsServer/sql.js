var sql = require("mssql");


var http = require('http');
var url = require('url');

var user = require('./user');

exports.executeQuery = executeQuery;
// config for your database
var config = {
    user: 'user1',
    password: 'admin@123',
    server: 'localhost',
    database: 'testDB',
    options: {
        encrypt: false
    }
};

function executeQuery(query, callback) {

    sql.connect(config).then(pool => {
        return pool.request()
            .query(query)
    }).then(result => {
        callback(null, result);
        sql.close();
    }).catch(err => {
        callback(err, null);
        sql.close();
    });
}


function executeQuery1(query) {
    console.log("---executeQuery---- ");

    sql.connect(config, function (err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
        }
        else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, (err, recordset) => {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    console.log("ERROR", err);
                    sql.close();
                }
                else {
                    console.log("result", recordset);
                    sql.close();
                    return recordset;
                }
            });
        }
    });
}