const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = requre('cors');
const router = require('./router');
const { response } = require('express');

const hostname = '127.0.0.1';
const port = 3001;

// configure bodyParser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

// configure cors
app.use(cors());

// configure the router
app.use('/api', router)

// get
app.get('/', (request, reposponse) => {
    response.send(`<h2>welcome to express of employee portal</h2>`);
});

app.listen(port, hostname, () => {
    console.log(`express server is started at http://${hostname} :${port}`)
});
