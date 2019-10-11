var express = require("express");

// performs route handleing
var router = express.Router();

// import orms from burger.js
var burger = require("../models/burger.js");

// route handler for root route to display all burgers
router.get("/", function(req, res){
    // display all burgers
    burger.selectAll(function(data){
        // var for handlebar object
        var hbsObj = {
            // setting data in hbs as burgers
            burgers: data
        }
        console.log(hbsObj);
        // render index.html with data from burgers table
        res.render("index", hbsObj)
    });
});

// route handler to add a burger
router.post("/api/burgers", function(req, res){
    // orm to add a burger with data from body
    burger.insertOne(["burger_name"], [req.body.burger], function(err, data){
        if(err) throw err;
        // if successful log new burger added and redirect to root route
        console.log("new burger added");
        res.redirect("/")
    });
});