import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db;
var url = 'mongodb://francois:Hallo-Alexa@ds215208.mlab.com:15208/alexa-mongodb';

app.use(bodyParser.json());

const router = express.Router();

const staticFiles = express.static(
  path.join(__dirname, '../../alexa-react/build'),
);

app.use(staticFiles);

function handleError(res, reason, message, code){
  console.log("ERROR: " + reason);
  res.status(code || 500 ).json({"error" : message});
}

router.get('/cities', (req, res) => {
  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles', population: 3792621},
    {name: 'Chicago', population: 2695598},
  ];
  res.json(cities);
});
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

router.get('/test', (req, res) => {
  db.collection('test').find().toArray((err, result) => {
    if (err){
      handleError(res, err.message, "failed to get results");
    } else {
      res.status(200).json(result);
    }
  })
})
