'use strict'

var app = app || {};

app.Photo = Backbone.Model.extend({
    defaults: {
        // TODO: Add default params
    },

    parse: function(response) {
        response.id = response._id;
        return response;
    }
});