'use strict';

var app = app || {};

app.AlbumLibraryView = Backbone.View.extend({
    el: '#albumLibraryContainer',

    events: {
        'click #addAlbum': 'addAlbum'
    },

    initialize: function(initialAlbums) {
        this.collection = new app.AlbumLibrary(initialAlbums);
        this.render();

        this.listenTo(this.collection, 'add', this.renderAlbum);
    },

    // render the album library
    render: function() {
        this.collection.each(function(item) {
            this.renderAlbum(item);
        }, this);
    },

    // render an album by creating an AlbumView and appending the element tot the AlbumLibrary's element
    renderAlbum: function(item) {
        var AlbumView = new app.AlbumView({
            model: item
        });
        this.$el.append(AlbumView.render().el);
    },

    addAlbum: function(event) {
        event.preventDefault();

        var userTitle = $('#album_name').val();
        console.log(userTitle)

        this.collection.add(new app.Album(userTitle));
    }
});