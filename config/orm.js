var con = require("../config/connection.js");

var orm = {
    // orm function to select all from burgers
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table;
        con.query(queryString, function(err, result){
            if(err) throw err;
            cb(result)
        });
    },
    // orm function to insert val to burgers
    insertOne: function(table, col, val, cb){
        var queryString = "INSERT INTO " + table;
        queryString += " (" + col.toString() + ") ";
        queryString += "VALUES (?)";
        con.query(queryString, val, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    // orm function to update val in burgers
    updateOne: function(){

    }
}

module.exports = orm