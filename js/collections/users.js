/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Users = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.User,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('todos-backbone-byUser3-users'),

		comparator: function(item) {
      		return [item.get("firstName").toLowerCase(), item.get("lastName").toLowerCase()];
    	}
	});

	// Create our global collection of **Todos**.
	app.users = new Users();
})();