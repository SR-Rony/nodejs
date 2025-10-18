// this is not found handler

// module scaffolding
const notFoundHandle = {};

notFoundHandle.notFound = (requestProperties, callback) => {
    
    callback(404, {
        message: 'Your requested url was not found!',
    });
    
}

module.exports = notFoundHandle;