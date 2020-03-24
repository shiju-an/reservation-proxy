const express = require('express')
const app = express()
const port = 3002;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/../dist'));


app.listen(port, () => console.log(`Proxy server listening on port ${port}!`))