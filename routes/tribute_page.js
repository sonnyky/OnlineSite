var express  = require('express');
var tribute_page = express.Router();


tribute_page.get('/', function(req, res) {
  res.render('tribute_page', { 
      title: 'Tribute Page' 
    });
});

module.exports = tribute_page;