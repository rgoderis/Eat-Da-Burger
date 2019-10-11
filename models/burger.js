// allow access to orms created in orm.js
var orm = require("../config/orm.js");

// set orms in burger
var burger = {
    // orm to select all from burgers table
    selectAll: function(cb){
        orm.insertOne("burgers", function(res){
            cb(res)
        });
    }, 
    // orm to insert new row to burgers table
    insertOne: function(col, val, cb){
        orm.insertOne("burgers", col, val, function(res){
            cb(res)
        });
    },
    // orm to update val in burgers table
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res)
        });
    }
}

module.exports = burger;