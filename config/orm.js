var con = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    // orm function to select all from burgers
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table;
        con.query(queryString, function(err, result){
            if(err) throw err;
            // callback the result
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
            // callback the result
            cb(result);
        });
    },
    // orm function to update val in burgers
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;
        queryString += " SET " + objToSql(objColVals);
        queryString += " WHERE " + condition;
        con.query(queryString, function(err, result){
            if(err) throw err;
            // callback the result
            cb(result);
        });
    }
}

// export orm for burger.js model to use
module.exports = orm;