const express = require('express');
const api = require('./routes/api');
const { urls } = require('./data/devData');

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/', express.static('public/'));

app.use('/api', api);

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});