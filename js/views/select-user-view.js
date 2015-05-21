var app = app || {};

(function ($) {
	'use strict';

	app.SelectUserView = Backbone.View.extend({

		events: { },

		el: '#selectUsers',

		tagName: 'option',

		initialize: function(){
			this.listenTo(app.users, 'change', this.render);
			this.render();
		},

		render: function(){
			
			var self = this;
			
			this.$el.html('<option value="default" disabled selected>Select an user</option>');

			app.users.each(function(model){
				self.$el.append('<option value="' + model.cid + '">' + model.get('firstName') + ' ' + model.get('lastName') + '</option>');
			})
			return this;
		}
	});

})(jQuery);