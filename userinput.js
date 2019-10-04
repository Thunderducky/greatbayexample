var inquirer = require("inquirer");
// outputs the items information
//  category
//  price
//  name
function postItem(cb){
    debugger;
    inquirer.prompt([{
        type:"input",
        name: "item_name",
        message: "What are you putting up for auction"
    },{
        type:"input",
        name: "item_category",
        message: "What category is it?"
    },{
        type:"input",
        name: "item_starting_bid",
        message: "What's it's starting bid?"
    }]).then(function(response){
        cb(response);
    })
}
function chooseItem(items, cb){}
function bidOnItem(item, cb){}


module.exports = {
    postItem,
    chooseItem,
    bidOnItem
};