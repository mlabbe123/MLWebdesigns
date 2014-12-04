// Module dependencies.
var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'), //Utilities for dealing with file paths 
    mongoose = require('mongoose'); //MongoDB integration

//Create server
var app = express();

// Configure server
app.configure(function() {
    //parses request body and populates request.body 
    app.use(express.bodyParser());

    //checks request.body for HTTP method overrides
    app.use(express.methodOverride());

    //perform route lookup based on URL and HTTP method
    app.use(app.router);

    //Where to serve static content
    app.use(express.static(path.join(application_root, 'builds/development')));

    //Show all errors in development
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

//Start server
var port = 4711;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode',
        port, app.settings.env);
});

// Routes
app.get('/api', function(request, response) {
    response.send('Photo Album API is running');
});

//Connect to database
// mongoose.connect('mongodb://localhost/library_database');

//Schemas
// var Album = new mongoose.Schema({
//     albumTitle: String
// });

//Models
// var AlbumModel = mongoose.model('Album', Album);

//Get a list of all books
// app.get('/api/album', function(request, response) {
//     return AlbumModel.find(function(err, albums) {
//         if (!err) {
//             return response.send(albums);
//         } else {
//             return console.log(err);
//         }
//     });
// });