'use strict';

var app = app || {};

app.PhotoLibrary = Backbone.Collection.extend({
    model: app.Photo,
    url: '/api/photos/' + localStorage.getItem('albumId')
});