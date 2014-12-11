var Workspace = Backbone.Router.extend({
    
    routes: {
        'albums/:album': 'openAlbum'
    },

    openAlbum: function(album) {
        // Kill albumLibrary view

        // Create photoLibrary view
    }
});

app.AlbumRouter = new Workspace();
Backbone.history.start({pushState: true});

