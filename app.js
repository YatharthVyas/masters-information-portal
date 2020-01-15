const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { userRouter } = require('./routes/index');
const { directives, limiter, options } = require('./config/middlewares');

app.set('json spaces', 2);

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// morgan
app.use(morgan('dev'));

// express-rate-limit
app.use(limiter);

// helmet
app.use(helmet());
app.use(helmet.contentSecurityPolicy({ directives }));
app.use(helmet.noCache());

// cors
app.use(cors(options));

// Routes
app.use('/api/user', userRouter);

// 404 Resource not found
app.use("*", (req, res) => {
  return res.status(404).send({
      error: {
        status: res.statusCode,
        message: "Requested resource not found.",
      }
  });
});

module.exports = app;
