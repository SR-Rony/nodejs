// about handler

// module scaffolding
const aboutHandle = {};

aboutHandle.about = (requestProperties, callback) => {
    
    callback(200, {
        message: 'This is about page',
    });
    
}

module.exports = aboutHandle;