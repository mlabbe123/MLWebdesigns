var Workspace = Backbone.Router.extend({
    
    routes: {
        'album/:id': 'openAlbum'
    },

    openAlbum: function(id) {
        // Kill albumLibrary model

        var photoWrapperTemplate = _.template($('#photoLibraryTemplate').html());

        // Create photoLibrary view.
        $("#mainWrapper").html(photoWrapperTemplate({albumId: id}));

        var photoLibraryView = new app.PhotoLibraryView();

        // this.navigate('albums/' + album, {trigger: true});
    }
});

app.AlbumRouter = new Workspace();
Backbone.history.start();