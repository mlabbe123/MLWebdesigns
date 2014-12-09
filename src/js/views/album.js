'use strict';

var app = app || {};

app.AlbumView = Backbone.View.extend({
    tagName: 'div',
    className: 'albumWrapper',
    template: _.template($('#albumTemplate').html()),

    events: {
        'click .deleteAlbum': 'deleteAlbum',
        'click .enterAlbum': 'enterAlbum'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    enterAlbum: function(event) {
        event.preventDefault();
        console.log('hey!')
    },

    deleteAlbum: function() {
        this.model.destroy();

        this.remove();
    }
});