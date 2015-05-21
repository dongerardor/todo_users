/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// USER Model
	// ----------

	app.User = Backbone.Model.extend({
		defaults: {
			firstName: '',
			lastName: ''
		}
	});
})();