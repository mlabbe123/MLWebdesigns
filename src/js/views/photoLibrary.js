'use strict';

var app = app || {};

app.PhotoLibraryView = Backbone.View.extend({ 
    el: '#photos-container',

    events: {
        
    },

    initialize: function() {
        this.collection = new app.PhotoLibrary();
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.renderAlbum);
        this.listenTo(this.collection, 'reset', this.render);
    },

    // render the photo library
    render: function() {
        this.collection.each(function(item) {
            this.renderPhoto(item);
        }, this);
    },

    // render an album by creating an AlbumView and appending the element to the AlbumLibrary's element
    renderPhoto: function(item) {
        var photoView = new app.PhotoView({
            model: item
        });
        this.$el.append(photoView.render().el);
    },

    addPhoto: function(event) {
        event.preventDefault();

        // Todo: get photo data from form
        // var albumTitle = $('#albumTitle').val();

        this.collection.create(new app.Album({
            title: albumTitle
        }));
    }
});