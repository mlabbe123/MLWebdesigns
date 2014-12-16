var Workspace = Backbone.Router.extend({
    
    routes: {
        'albums/:album': 'openAlbum'
    },

    openAlbum: function(album) {
        // Kill albumLibrary view
        console.log(app.AlbumLibraryView);
        alert('in the album '+album)
        //app.AlbumLibraryView.close();

        // Create photoLibrary view
        //var photoLibraryView = new app.

        // this.navigate('albums/' + album, {trigger: true});
    }
});

app.AlbumRouter = new Workspace();
Backbone.history.start();