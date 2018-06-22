import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
const { check, validationResult } = require('express-validator/check');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
var db;
var url = 'mongodb://francois:Hallo-Alexa@ds215208.mlab.com:15208/alexa-mongodb';

app.use(bodyParser.json());


const staticFiles = express.static(
  path.join(__dirname, '../../alexa-react/build'),
);

app.use(staticFiles);

// function handleError(res, reason, message, code){
//   console.log("ERROR: " + reason);
//   res.status(code || 500 ).json({"error" : message});
// }

// router.get('/cities', (req, res) => {
//   const cities = [
//     {name: 'New York City', population: 8175133},
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'Chicago', population: 2695598},
//   ];
//   res.json(cities);
// });
app.use(router);

app.use('/*', staticFiles);
app.set('port', process.env.PORT || 3001);

MongoClient.connect(url,
  (err, database) => {
    if (err) return console.log(err);
    db = database.db('alexa-mongodb');
    app.listen(app.get('port'), () => {
      console.log(`Listening on ${app.get('port')}`);
    });
  },
);

router.post('/test', (req, res) => {
  db.collection('test').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});


// POST commands nemen de volgende objecten mee:
//  Device, Date(?), Command, 
// DEFAULT = 
// {
//   "event": [event-name],
//   "data": [event-data],
//   "published_at": [timestamp],
//   "coreid": [device-id]
// }

// logger: date (published_at), device, function, value

// router.post('/logging', [check('data').isISO8601()], (req, res) => {
router.post('/logging', (req, res) => {

  db.collection('test').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.send('success!');
  })
  
})

router.get('/test', (req, res) => {
  db.collection('test').find().toArray((err, result) => {
    if (err){
      handleError(res, err.message, "failed to get results");
    } else {
      res.status(200).json(result);
    }
  })
});
