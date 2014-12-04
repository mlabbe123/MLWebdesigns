'use strict';

var app = app || {};

app.AlbumView = Backbone.View.extend({
    tagName: 'div',
    className: 'albumWrapper',
    template: _.template($('#albumTemplate').html()),

    events: {
        'click .deleteAlbum': 'deleteAlbum'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    deleteAlbum: function() {
        this.model.destroy();

        this.remove();
    }
});