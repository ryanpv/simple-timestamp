// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 

app.get("/api/timestamp", function (req, res) {
  let date = new Date();
  res.json({ unix: Date.now(), utc: date.toISOString() });
})

app.get("/api/timestamp/:timestamp", function (req, res) {
  const { timestamp } = req.params
  // const date = new Date(timestamp).toUTCString()
  // if(timestamp.match(/\d{5,}/)) {
  //   let tsnum = timestamp
  //   return num.toString()
  // }
  const date = new Date(timestamp)

  if(date.toUTCString() == "Invalid Date"){
    res.json({current: date.toUTCString()})
  } else {
  console.log(date);

  res.json({ unix: date.valueOf(), utc: date.toUTCString() });}
});

// 978325200000

// app.get("/api/timestamp/:unixDate", function (req, res) {
//   const unixDate = req.params.unixDate
//   const date = new Date();
//   const unixTs = date.valueOf(unixDate)
//   res.json({ utc: date.toUTCString() });
// })



// listen for requests :)

const port = process.env.PORT || 5959;

app.listen(port, () => {
    console.log('listening on port...' + port);
});