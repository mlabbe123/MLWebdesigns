'use strict';

var app = app || {};

app.PhotoView = Backbone.View.extend({
    tagName: 'div',
    className: 'photoWrapper',
    template: _.template($('#photoTemplate').html()),

    events: {
        
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});