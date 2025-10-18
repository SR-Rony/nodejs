// basick api project
// devendencies
const http = require('http');
const handler = require('./helpers/handleReqRes');

// app ojbect - module scaffolding
const app = {};

// configurations
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleRequestResponse)
    server.listen(app.config.port, ()=>{
        console.log(`server is listening on port at http://localhost:${app.config.port}`);
    })
}

// handle request response
app.handleRequestResponse = handler.handleReqRes

// start the server
app.createServer();

  