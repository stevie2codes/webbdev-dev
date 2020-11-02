const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the WebbDev!');
});
app.get('/demo', (req, res) => {
  res.set('X-WebbDev', '4life');
  res.status(418);
  res.send('I prefer coffee');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
