const config = require('configuration');
const router = require('router');
const database = require('database');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = config.get('PORT');

/* 미들웨어 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, async () => {
  console.log(`server start ${PORT}`);

  try {
    await database.connect();
    console.log('database connection');
  } catch(error) {
    console.error(error);
  }
});