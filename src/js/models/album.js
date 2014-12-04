'use strict'

var app = app || {};

app.Album = Backbone.Model.extend({
    defaults: {
        albumPreviewImg: 'https://placekitten.com/g/300/300',
        albumTitle: 'Album sans nom'
    }
});