'use strict';

var app = app || {};

app.AlbumLibraryView = Backbone.View.extend({ 
    el: '#albumLibraryContainer',

    events: {
        'click #addAlbum': 'addAlbum'
    },

    initialize: function(initialAlbums) {
        this.collection = new app.AlbumLibrary(initialAlbums);
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.renderAlbum);
        this.listenTo(this.collection, 'reset', this.render);
    },

    // render the album library
    render: function() {
        this.collection.each(function(item) {
            this.renderAlbum(item);
        }, this);
    },

    // render an album by creating an AlbumView and appending the element to the AlbumLibrary's element
    renderAlbum: function(item) {
        var albumView = new app.AlbumView({
            model: item
        });
        this.$el.append(albumView.render().el);
    },

    addAlbum: function(event) {
        event.preventDefault();

        var albumTitle = $('#albumTitle').val();

        this.collection.create(new app.Album({
            title: albumTitle
        }));
    }
});