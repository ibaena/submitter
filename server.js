"use strict";

let express = require('express');
let app = express();
let exphbs = require('express-handlebars');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');

//Templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve Static Content
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static('public'));
app.use('/bower_components', express.static(__dirname +'/bower_components'));
app.use(express.static(__dirname + 'bower_components'));

//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false}));

//Setup Server And Set Port
var PORT = Number(process.env.PORT || 8000);
app.listen(PORT, function() {
  console.log("Listening on PORT %s", PORT);
});

//Routes
 app.get('/', function(req, res){
   res.render('form', {
        title : 'Form Submission!',
        layout : 'main'
     });
 });
