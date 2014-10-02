//Module dependencies
var application_root = __dirname,
    express = require('express'), //Web framwork
    path = require('path'), //Utilities for dealing with file paths
    mongoose = require('mongoose'); //Mongodb integration

//Create server
var app = express();

//configure server
app.configure(function() {
    //parses request body and populate request.body
    app.use(express.bodyParser());

    //checks request.body fot HTTP method overrides
    app.use(express.methodOverride());

    // perform route lookup based on URL and HTTP method
    app.use(app.router);

    // Where to serve static content
    app.use(express.static(path.join(application_root, 'site')));

    //Show all errors in development
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

//Start server
var port = 4711;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

//Routes
app.get('/api', function(request, response) {
    response.send('Library API is running');
});

//Connect to database
mongoose.connect('mongodb://localhost/library_database');

//Schemas
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

//Models
var BookModel = mongoose.model('Book', Book);

//Get a list of all books
app.get('/api/books', function(request, response) {
    return BookModel.find(function(err, books) {
        if(!err) {
            return response.send(books);
        } else {
            return console.log(err);
        }
    });
});