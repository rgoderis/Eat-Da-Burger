var mysql = require("mysql");

// mysql connection
// connect to heroku JAWSDB if available
if (process.env.JAWSDB_URL){
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    // otherwise connect to localhost mysql db
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        passwoerd: "rootroot",
        database: "burgers_db"
    });
}

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