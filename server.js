/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const app = express();
const path = require('path');
// const http = require('http');

/* DEPENDENCIES CONFIGURATION
----------------------------------------- */

const http = require('http').Server(app);


// EJS als view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/* SET PORT
----------------------------------------- */
const port = process.env.PORT || 3001;

/* START THE NPM SERVER
----------------------------------------- */
http.listen(port, function() {
  console.log(`Server started on ${port}`);
});


app.get('/', function(req, res) {
   page_name = 'home';
    res.render('index');
});
