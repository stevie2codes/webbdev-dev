const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front-End/html/index.html'));
});
app.get('/demo', (req, res) => {
  res.set('X-WebbDev', '4life');
  res.status(418);
  res.send('I prefer coffee');
});

app.use('/', router);
app.listen(port, () => console.log(`App listening on port ${port}!`));
