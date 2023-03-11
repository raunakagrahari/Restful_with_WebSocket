const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/index');
const restaurentRouter = require('./routes/index');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { errorHandler } = require('./helpers');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const publicPath = path.join(__dirname,'/public');
app.use(express.static(publicPath));

app.use(morgan('[:date[web]] :method :url :status :response-time ms - :res[content-length]'));

app.use(errorHandler);

process.on('uncaughtException', function (err) {
    logger.error(err);
});

// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', function (reason, p) {
    logger.error(reason);
});

app.use("/v1", userRouter );
app.use("/v1", restaurentRouter );

module.exports = app;