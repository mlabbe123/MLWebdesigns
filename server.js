// Module dependencies.
var application_root = __dirname,
    express = require('express'), 
    path = require('path'), 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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
mongoose.connect('mongodb://localhost/album_database');


//======================
// Schemas
//======================

var albumSchema = new Schema({
    title: String,
    previewImg: String,
    creationDate: String
});

var photoSchema = new Schema({
    url: String,
    albumId: [{
        type: Schema.Types.ObjectId,
        ref: 'AlbumModel'
    }]
});


//======================
// Models
//======================

var AlbumModel = mongoose.model('Album', albumSchema);

var PhotoModel = mongoose.model('Photo', photoSchema);


//======================
// Routes
//======================

// ============================== Album ==================================

//Get a list of all albums
app.get('/api/albums', function(request, response) {
    return AlbumModel.find(function(err, albums) {
        if (!err) {
            return response.send(albums);
        } else {
            return console.log(err);
        }
    });
});

//Insert a new album
app.post('/api/albums', function(request, response) {
    var album = new AlbumModel({
        title: request.body.title
    });

    album.save(function(err) {
        if (!err) {
            return console.log('album created');
        } else {
            return console.log(err);
        }
    });

    return response.send(album);
});

//Get a single album by id
app.get('/api/album/:id', function(request, response) {
    return AlbumModel.findById(request.params.id, function(err, album) {
        if (!err) {
            return response.send(album);
        } else {
            return console.log(err);
        }
    });
});

//Update an album
app.put('/api/albums/:id', function(request, response) {
    console.log('Updating album ' + request.body.title);

    return AlbumModel.findById(request.params.id, function(err, album) {
        album.title = request.body.title;

        return album.save(function(err) {
            if (!err) {
                console.log('album updated');
            } else {
                console.log(err);
            }
            return response.send(album);
        });
    });
});

//Delete an album
app.delete('/api/albums/:id', function(request, response) {
    console.log('Deleting album with id: ' + request.params.id);
    return AlbumModel.findById(request.params.id, function(err, album) {
        return album.remove(function(err) {
            if (!err) {
                console.log('Album removed');
                return response.send('');
            } else {
                console.log(err);
            }
        });
    });
});

// ============================== Photo ==================================

//Insert a new photo
app.post('/api/photos', function(request, response) {
    var photo = new PhotoModel({
        url: request.body.url,
        albumId: request.body.albumId
    });

    photo.save(function(err) {
        if (!err) {
            return console.log('photo created');
        } else {
            return console.log(err);
        }
    });

    return response.send(photo);
});

//Get a set of photo by album id.
app.get('/api/photos', function(request, response) {
    console.log('request: '+request)
    return PhotoModel.findById(request.params.id, function(err, photo) {
        if (!err) {
            return response.send(photo);
        } else {
            return console.log(err);
        }
    });
});