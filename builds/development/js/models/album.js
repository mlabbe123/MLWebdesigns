'use strict'

var app = app || {};

app.Album = Backbone.Model.extend({
    defaults: {
        albumPreviewImg: 'http://placekitten.com/300/300',
        albumTitle: 'Album sans nom'
    }
});