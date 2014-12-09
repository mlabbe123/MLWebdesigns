var Workspace = Backbone.Router.extend({
    
    routes: {
        'albums/:album': 'getAlbum'
    },

    getAlbum: function(album) {
        alert('hey!')
    }
});

app.AlbumRouter = new Workspace();
Backbone.history.start();