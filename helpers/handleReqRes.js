// handle request response


// dependenciesconst url = require('url');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const routes = require('../routes');
const { notFound } = require('../handler/routeHandler/notFound');

// modue caffolding
const handler = {};


handler.handleReqRes = (req, res) => {
    // parse the url
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headers = req.headers;

    // all request data
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headers,
    }
    
    const decoder = new StringDecoder('utf-8');
    let mainData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFound;
    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};
        const payloadString = JSON.stringify(payload);
        // return the final response
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        mainData += decoder.write(buffer)
    })

    req.on('end', () => {
        mainData += decoder.end();
        console.log(mainData);
        res.end('Request processing completed.');
        
    })
    
    
    
    
    // request handling
    res.end('Hello World! This is a basic API project.');
}


module.exports = handler;