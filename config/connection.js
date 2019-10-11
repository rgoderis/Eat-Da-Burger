var mysql = require("mysql");

// mysql connection
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
});

// method to make connection
con.createConnection(function(err){
    if(err) {
        // log error
        console.error("error connecting: " + err.stack);
        return
    }
    //  log connection id
    console.log("Connected as id " + con.threadId);
});

// export connection for ORM
module.exports = con