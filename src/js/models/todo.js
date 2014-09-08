var app = app || {};

// TODO model

app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },

    // Toggle the completed state of this todo item.
    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});