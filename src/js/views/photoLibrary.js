'use strict';

var app = app || {};

app.PhotoLibraryView = Backbone.View.extend({ 
    el: '#photoLibraryContainer',

    events: {
        'click #addPhoto': 'addPhoto'
    },

    initialize: function() {
        var urlParts = window.location.href.split('/'),
            albumId = urlParts[urlParts.length - 1];

        localStorage.setItem('albumId', albumId);
        
        this.collection = new app.PhotoLibrary();
        
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.renderPhoto);
        this.listenTo(this.collection, 'reset', this.render);
    },

    // render the photo library
    render: function() {
        console.log('rendering '+this.collection.length+' photos')
        this.collection.each(function(item) {
            this.renderPhoto(item);
        }, this);
    },

    // render an album by creating an AlbumView and appending the element to the AlbumLibrary's element
    renderPhoto: function(item) {
        var photoView = new app.PhotoView({
            model: item
        });
        this.$el.find('.photos-container').append(photoView.render().el);
    },

    addPhoto: function(event) {
        // Get photo url from input.
        var photoUrl = $('#photoUrl').val(),
            urlParts = window.location.href.split('/'),
            albumId = urlParts[urlParts.length - 1];

        this.collection.create(new app.Photo({
            url: photoUrl,
            albumId: albumId
        }));
    }
});