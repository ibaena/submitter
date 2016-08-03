"use strict";

let express = require('express');
let app = express();
let mailer = require('express-mailer');
let exphbs = require('express-handlebars');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');

//Email Setup
mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: '',              //User Creds
    pass: ''               //User Creds
  }
});


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
 app.post('/', function (req, res, next) {
   console.log(req.body);

   let email = req.body.email;
   let name = req.body.name;
   let phone = req.body.phone;

   app.mailer.send('email', {
     to: email, // REQUIRED. This can be a comma delimited string just like a normal email to field.
     subject: 'New Lead!', // REQUIRED.
     name: name,
     phone: phone,
     email: email
   }, function (err) {
     if (err) {
       // handle error
       console.log(err);
       console.log('There was an error sending the email');
       return;
     }
     res.redirect('/')
   });
 });
