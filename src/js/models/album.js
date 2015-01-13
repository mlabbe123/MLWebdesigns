'use strict'

var app = app || {};

app.Album = Backbone.Model.extend({
    defaults: {
        title: 'Album sans nom',
        previewImg: 'https://placekitten.com/g/300/300',
        creationDate: 'Today'
    },

    parse: function(response) {
        response.id = response._id;
        return response;
    }
});