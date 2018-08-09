// external npms
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// database and app (internal)
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;
const connectMe = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/bank_db'; 
const routes = require('./routes');
console.log(process.env.MONGOLAB_URI)

// use morgan, bodyParser, cors, routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(routes);

// - - - - - - - - - - - - - - - - - - 
// error handling
app.use((next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// render error to the page for easier troubleshooting
app.use((error, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

// connect to the database bank_db on the server
mongoose.connect(connectMe, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

// !important I WAS using  | app.use(express.static("client/build"))  and it cause a blank page |
// - - - - - - - - - - - - - - - - - - 
if (process.env.NODE_ENV === "production") {
  app.use('/static', express.static(path.join(__dirname, 'client/build')));
}

// start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
 

