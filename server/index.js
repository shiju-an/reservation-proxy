const express = require('express')
const app = express()
const port = 3002;
const path = require('path');

app.use(express.static(__dirname + '/../dist'));

app.get ('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`))