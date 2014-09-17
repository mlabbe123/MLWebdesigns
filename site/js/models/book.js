var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/kafkashore.jpg',
        title: 'Kafka sur le rivage',
        author: 'Haruki Murakami',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});