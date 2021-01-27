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

 var app = express();
 var connect = require('connect');

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
  res.render('index', {
    title: 'My Profile Page'
  });
});

app.get('/profile', function(req, res){
    res.render('profile', { 
      title: 'Profile' 
    });
});

app.get('/work', function(req, res){
  res.render('work', { 
    title: 'Work' 
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

app.listen(process.env.PORT || 3000);
