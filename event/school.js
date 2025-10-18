const Events = require("events");

class School extends Events {
    startClass () {
        console.log('class has start');

        this .emit('bellRing',"class has ended");  
    }
}



module.exports = School;