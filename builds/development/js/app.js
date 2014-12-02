'use strict';

var app = app || {};

$(function() {
 
    var albums = [
        { albumPreviewImg: 'https://placekitten.com/g/300/300', albumTitle: 'Album sans nom 1'},
        { albumPreviewImg: 'https://placekitten.com/g/300/300', albumTitle: 'Album sans nom 2'},
        { albumPreviewImg: 'https://placekitten.com/g/300/300', albumTitle: 'Album sans nom 3'}
    ];

    new app.AlbumLibraryView(albums);
});