const express = require("express");
const app = express();

const { config } = require("./config/index");
const moviesApi = require('./routes/movies');

const {
  logErrors,
  errorHandler
} = require('./utils/middleware/ErrorHandlers.js');


// body-parser middleware
app.use(express.json())

moviesApi(app);

// Error middlewares
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
