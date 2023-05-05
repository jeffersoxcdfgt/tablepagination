const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const app = express();
const http = require('http')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());



app.get('/item/items', (req, res, next)  => { 
  const config = {
    headers:{
      "x-ultracart-simple-key": req.header("x-ultracart-simple-key"),
      "x-ultracart-api-version": req.header("x-ultracart-api-version")
    }
  };

  axios.get(`https://secure.ultracart.com/rest/v2/item/items?_limit=${req.query._limit}&offset=${req.query.offset}`,config)
  .then(resp => {
    res.status(200).json(resp.data);
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

});


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});

app.listen(1338, () => {
  console.log('App listening on port 1338!');
});
