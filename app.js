/**
 * Module dependencies.
 */
 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , fs = require('fs')
 , busboy = require('connect-busboy')
 , multer = require('multer')
 , http = require('http')
 , path = require('path')
 , connect = require('connect')
 , bodyParser = require('body-parser')
 , logger = require('morgan')
 , methodOverride = require('method-override')
 , errorHandler = require('errorhandler')
 , favicon = require('serve-favicon')
 , cloudinary = require('cloudinary')
 , EmployeeProvider = require('./employeeprovider').EmployeeProvider;

 var app = express();
 var connect = require('connect');
var mongo = require('mongodb');
var database = null;
var MONGODB_URI =  "mongodb://sonny_yap:mongolabpa55@ds039421.mongolab.com:39421/userdb";

var employeeProvider= new EmployeeProvider(app);

cloudinary.config({
  cloud_name: 'dl8gnkdxm', 
  api_key: '282265456376429', 
  api_secret: 'JLiwWswdpeYHZ4aM5z56bXs-meE' 
})

  app.set('views', __dirname + '/views');
  app.use('scripts', express.static(path.join(__dirname, '/scripts')));
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(favicon(path.join(__dirname,'public','images','icon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser());
  app.use(busboy());
  app.use('/tribute_page', require('./routes/tribute_page'));
  app.use('/kimmy_resume', require('./routes/kimmy_resume'));
  app.use(multer({ dest: './uploads/',
   rename: function (fieldname, filename) {
      return filename+Date.now();
    },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path)
    done=true;
  }
  }).single('singleInputFileName'));

  app.use(methodOverride());
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(errorHandler());
  
//Routes

//index

app.get('/', function(req, res){
  this.db.collection('employees').find().toArray(function(err, emps) {
   /*
    res.render('index', {
      title: 'My Profile Page',
      employees:emps,
      cloudinary_obj:cloudinary
    });
    */
    cloudinary.api.resources(function(items){
    res.render('index', {
        title: 'My Profile Page',
        employees:emps,
        cloudinary_obj:cloudinary
      });
    });
    
  });
});

app.get('/profile', function(req, res){
    res.render('profile', { 
      title: 'Profile' 
    });
});

app.get('/howto_graphit', function(req, res){
    res.render('howto_graphit', { 
      title: 'How To Use Graph It' 
    });
});

app.get('/app_privacy_policy', function(req, res){
    res.render('app_privacy_policy', { 
      title: 'Privacy Policy' 
    });
});


//new employee
app.get('/employee/new', function(req, res) {
  res.render('employee_new', {
    title: 'New Employee'
  });
});

//save new employee
app.post('/employee/new', function(req, res){
  console.log(req.files);
  //save the image to Cloudinary
   cloudinary.uploader.upload(
      req.files.userPhoto.path,
      function(result) { 
        console.log(result);

        },
      {
        public_id: req.param('imageId'), 
        crop: 'limit',
        width: 2000,
        height: 2000,
        eager: [
          { width: 200, height: 200, crop: 'thumb', gravity: 'face',
            radius: 20, effect: 'sepia' },
          { width: 100, height: 150, crop: 'fit', format: 'png' }
        ],                                     
        tags: ['special', 'for_homepage']
      }      
    );
  
  
  
 employeeProvider.save({
    title: req.param('title'),
    name: req.param('name'),
    img_id: req.param('imageId')
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
  console.log("Posting delete");
  console.log(req.param('_id'));
	employeeProvider.delete(req.param('_id'), function(error, docs) {
		res.redirect('/')
	});
});


app.listen(process.env.PORT || 3000);
