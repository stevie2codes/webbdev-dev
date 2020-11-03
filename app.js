const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname,'ui/html/index.html'));
=======
  res.sendFile(path.join(__dirname, 'Front-End/html/index.html'));
>>>>>>> 63f2d6b2db759b541ca88f6f71328a453c225fc1
});
app.get('/demo', (req, res) => {
  res.set('X-WebbDev', '4life');
  res.status(418);
  res.send('I prefer coffee');
});

<<<<<<< HEAD
app.use('/',router)
=======
app.use('/', router);
>>>>>>> 63f2d6b2db759b541ca88f6f71328a453c225fc1
app.listen(port, () => console.log(`App listening on port ${port}!`));
