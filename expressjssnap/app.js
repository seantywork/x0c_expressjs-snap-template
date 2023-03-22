var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan')
var bodyParser = require('body-parser')
var config = require('./config')

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

var router = express.Router()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('combined', { stream: config.logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'static')));
app.use('/media',express.static(path.join(__dirname, 'media')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRouter(router));
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:'test_error_title'});
});


module.exports = app;
