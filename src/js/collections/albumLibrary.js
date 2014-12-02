'use strict';

var app = app || {};

app.AlbumLibrary = Backbone.Collection.extend({
    model: app.Album
});