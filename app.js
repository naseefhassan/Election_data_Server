const express = require('express');
const app = express();
const port = 4444;
const bodyParser =require('body-parser');
require('dotenv').config();
require('./confiq/confiq.js');
const cors =require('cors');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


const CommonRouter = require('./Router/CommonRouter');


app.use('/api/user', CommonRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

