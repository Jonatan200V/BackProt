const express = require('express');
const cors = require('cors');
const router = require('./routes/mail.routes');
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);
function Main() {
  app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

Main();
