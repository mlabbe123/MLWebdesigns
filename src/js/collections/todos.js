var app = app || {};

// Todo collection

var TodoList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: app.Todo,

    localStorage: new Backbone.LocalStorage('todos-backbone'),

    // FIlter down the list of all todo items that are finished
    completed: function() {
        return this.filter(function(todo) {
            return todo.get('completed');
        });
    },

    // Filter down the list of all todo items that are still not finished.
    remaining: function() {
        // Apply allowsus to define the context of this within our function scope.
        return this.without.apply(this, this.completed());
    },

    // Generates the next order number for new items.
    nextOrder: function() {
        if (!this.length) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function(todo) {
        return todo.get('order');
    }
});

// Create our global collection of **TODOS**.
app.Todos = new TodoList();