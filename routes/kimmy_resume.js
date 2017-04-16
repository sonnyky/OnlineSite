var express  = require('express');
var kimmy_resume = express.Router();


kimmy_resume.get('/', function(req, res) {
  res.render('kimmy/kimmy_resume', { 
      title: 'Kimmy Page' 
    });
});

module.exports = kimmy_resume;