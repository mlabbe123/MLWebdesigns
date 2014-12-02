'use strict';

var app = app || {};

app.AlbumView = Backbone.View.extend({
    tagName: 'div',
    className: 'albumWrapper',
    template: _.template($('#albumTemplate').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});