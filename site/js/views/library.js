var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    events:  {
        'click #add': 'addBook'
    },

    initialize: function(initialBooks) {
        this.collection = new app.Library(initialBooks);
        this.render();

        this.listenTo(this.collection, 'add', this.renderBook);
    },

    // Render the library by renderirng each book in its collection
    render: function() {
        this.collection.each(function(item) {
            this.renderBook(item);
        }, this);
    },

    renderBook: function(item) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append(bookView.render().el);
    },

    addBook: function(event) {
        event.preventDefault();

        var formData = {};

        $('#addBook div').children('input').each(function(index, element) {
            if($(element).val() !== ''){
                formData[element.id] = $(element).val();
            }
        });

        this.collection.add(new app.Book(formData));
    }
});