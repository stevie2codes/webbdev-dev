const express = require('express');
const app = express();
const PORT = 5000;
// const router = express.Router();
const path = require('path');


//add middleware
app.use(express.static('client'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

