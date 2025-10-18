const  School = require("./school")


const school = new School();

school.on('bellRing', (text) => {
    console.log('class has ended', text);
})

school.startClass();



