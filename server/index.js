require('newrelic');
console.log('big new relic');

const express = require('express')
const app = express()
const cors = require('cors');
const httpProxy = require('http-proxy');
const morgan = require('morgan');
const port = 9000;

const proxy = httpProxy.createProxyServer({});

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.static(__dirname + '/../dist'));

app.all('/listing', (req, res) => {
  proxy.web(req, res, {
    target: 'http://ec2-3-133-39-202.us-east-2.compute.amazonaws.com'
  })
});

app.all('/location/:id', (req, res) => {
  proxy.web(req, res, {
    target: 'http://54.177.65.149:3000/'
  })
});

app.all('/api/listings/:listingID/reviews', (req, res) => {
  proxy.web(req, res, {
    target: 'http://ec2-52-8-43-87.us-west-1.compute.amazonaws.com:2500'
  });
});

app.all('/v1/*', (req, res) => {
  proxy.web(req, res, {
    target: 'http://54.151.16.190'
  });
});

// loader.io test
app.get('/loaderio-c04f3fe8727129800365b2dc5e16272bgit.txt/', (req, res) => {
  res.send('loaderio-loaderio-c04f3fe8727129800365b2dc5e16272b');
});

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`))