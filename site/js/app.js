var app = app || {};

$(function() {
    var books = [
        { title: 'js: the good parts', author: 'douglas crockford', releaseDate: '2008', keywords: 'Javascript programming' },
        { title: 'js: the good parts', author: 'douglas crockford', releaseDate: '2008', keywords: 'Javascript programming' },
        { title: 'js: the good parts', author: 'douglas crockford', releaseDate: '2008', keywords: 'Javascript programming' },
        { title: 'js: the good parts', author: 'douglas crockford', releaseDate: '2008', keywords: 'Javascript programming' },
        { title: 'js: the good parts', author: 'douglas crockford', releaseDate: '2008', keywords: 'Javascript programming' }
    ];

    new app.LibraryView(books);
});