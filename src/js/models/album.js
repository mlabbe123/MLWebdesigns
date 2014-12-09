'use strict'

var app = app || {};

app.Album = Backbone.Model.extend({
    defaults: {
        albumPreviewImg: 'https://placekitten.com/g/300/300',
        title: 'Album sans nom'
    },

    parse: function(response) {
        response.id = response._id;
        return response;
    }
});