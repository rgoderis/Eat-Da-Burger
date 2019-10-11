var orm = require("../config/orm.js");

var burger = {
    selectAll: fucntion(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
}

module.exports = burger;