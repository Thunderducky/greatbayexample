var datalayer = require("./datalayer.js")
var userinput = require("./userinput");

datalayer.init(function(){
    userinput.postItem(function(item){
        const dataItem = {
            item_name: item.item_name,
            item_category: item.item_category,
            current_bid: item.item_starting_bid
        }
        datalayer.createItem(dataItem, function(){
            // RETURN TO MAIN MENU
            console.log("DONE");
        });
    });
});