var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dbpassword",
    database: "greatbae"
})

function init(cb){
    connection.connect(function(err){
        if(err){
            console.log(err)
        }
        if(cb){
            cb();
        }
    });
}

function createItem(item, cb){
    connection.query(
        "INSERT INTO bids SET ?", [item], function(err){
            if(err){
                throw err;
            }
            if(cb){
                cb();
            }
        }
    )
}

module.exports = {
    init,
    createItem
}