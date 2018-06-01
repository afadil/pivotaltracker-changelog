const fs = require('fs');
var http = require('http');
var httpProxy = require('http-proxy');


const port = process.env.PORT || 5000;
const pivotalTrackerApiUrl = "https://www.pivotaltracker.com/services/v5";
const apiKey=process.env.PIVOTAL_KEY;



//
// Create a proxy server to add pivotal api key to every request.
//
var proxy = httpProxy.createProxyServer(
        {
            target: {
                protocol: 'https:',
                host: 'www.pivotaltracker.com',
                port: 443
            },
            changeOrigin: true,
            secure: false,
        }
    );

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('X-TrackerToken', apiKey);
  });


console.log("API proxy listening on port " +port)
proxy.listen(port);