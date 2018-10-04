var sql = require('./sql');
var http = require('http');
var url = require('url');

var user = require('./user');

exports.insertData = insertData;
exports.updateData = updateData;
exports.deleteData = deleteData;
exports.getData = getData;
exports.getAllData = getAllData;
exports.getById = getById;
exports.getByTwoParam = getByTwoParam;

function insertData(body, callback) {
    var sqlQuery = `INSERT INTO TBL_TEST(Id, Name) VALUES (${body.id},'${body.name}')`;
    console.log("Insert sql query =>", sqlQuery);
    sql.executeQuery(sqlQuery, callback);

}

function getData(body, callback) {
    console.log(body.id);
    var sqlQuery = `Select * from TBL_TEST where id=${body.id}`;
    //var sqlQuery = `Select * from TBL_TEST`;
    console.log("GET sql query =>", sqlQuery);
    sql.executeQuery(sqlQuery, callback);
}

function updateData(body, callback) {
    var sqlQuery = `UPDATE TBL_TEST SET Name='${body.name}' WHERE id=${body.id}`;
    console.log("Update sql query =>", sqlQuery);
    sql.executeQuery(sqlQuery);
}

function deleteData(body, callback) {
    var sqlQuery = `DELETE From TBL_TEST where id=${body.id}`;
    console.log("Delete sql query =>", sqlQuery);
    sql.executeQuery(sqlQuery, callback);

}
function getAllData(callback) {
    var sqlQuery = `SP_ALL_DATA`;
    console.log('getAllDataUsingProc =>', sqlQuery);
    return sql.executeQuery(sqlQuery, callback);
}
function getById(body, callback) {
    var sqlQuery = `SP_DATA_BY_ID ${body.id}`;
    console.log('getDataByIdUsingProc =>', sqlQuery);
    sql.executeQuery(sqlQuery, callback);
}
function getByTwoParam(body, callback) {
    var sqlQuery = `SP_DATA_BY_TWO_PARAM ${body.id}, ${body.name} `;
    console.log('getDataByIdUsingTwoParam =>', sqlQuery);
    sql.executeQuery(sqlQuery, callback);
}