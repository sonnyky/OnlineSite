/**
 * Module dependencies.
 */

 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , http = require('http')
 , path = require('path')
 , connect = require('connect')
 , bodyParser = require('body-parser')
 , logger = require('morgan')
 , methodOverride = require('method-override')
 , errorHandler = require('errorhandler')
 , favicon = require('serve-favicon');
// , EmployeeProvider = require('./employeeprovider').EmployeeProvider;

 var app = express();
 var connect = require('connect');
var mongo = require('mongodb');
var database = null;
var MONGODB_URI =  "mongodb://sonny_yap:mongolabpa55@ds039421.mongolab.com:39421/userdb";
var db;

//app.configure(function(){
//  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.use('scripts', express.static(path.join(__dirname, '/scripts')));
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(favicon(path.join(__dirname,'public','images','icon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser());
  app.use(methodOverride());
  //app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
//});

//app.configure('development', function(){
  app.use(errorHandler());
//});

//var employeeProvider= new EmployeeProvider();
// Initialize database connection and app (after connection)

mongo.MongoClient.connect(MONGODB_URI, function(err, database) {
    if(err) throw err;

    db = database;

    app.listen(process.env.PORT || 3000);
    console.log('Listening on port');
  });

//Routes

//index

app.get('/', function(req, res){
    res.render('index', {
      title: 'Employees',
    });
});

app.get('/profile', function(req, res){
    res.render('profile', { 
      title: 'Profile' 
    });
});


/*
//new employee
app.get('/employee/new', function(req, res) {
  res.render('employee_new', {
    title: 'New Employee'
  });
});

//save new employee
app.post('/employee/new', function(req, res){
  employeeProvider.save({
    title: req.param('title'),
    name: req.param('name')
  }, function( error, docs) {
    res.redirect('/')
  });
});

//update an employee
app.get('/employee/:id/edit', function(req, res) {
	employeeProvider.findById(req.param('_id'), function(error, employee) {
		res.render('employee_edit',
		{ 
			title: employee.title,
			employee: employee
		});
	});
});

//save updated employee
app.post('/employee/:id/edit', function(req, res) {
	employeeProvider.update(req.param('_id'),{
		title: req.param('title'),
		name: req.param('name')
	}, function(error, docs) {
		res.redirect('/')
	});
});

//delete an employee
app.post('/employee/:id/delete', function(req, res) {
	employeeProvider.delete(req.param('_id'), function(error, docs) {
		res.redirect('/')
	});
});
*/
//app.listen(process.env.PORT || 3000);
