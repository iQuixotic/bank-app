// external
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// database and app (internal)
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const connectMe = process.env.MONGODB_URI || 'mongodb://localhost/bank_db'; 
const db = require('./models');
const routes = require('./routes');

// use morgan, bodyParser, cors, routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(routes);

// - - - - - - - - - - - - - - - - - - 
// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// render error to the page for easier troubleshooting
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

// connect to the database bank_db on the server
mongoose.connect(connectMe);
mongoose.Promise = global.Promise;

// - - - - - - - - - - - - - - - - - - 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
 
// const seed = require('./seeds/seeds');
// seed.generate();