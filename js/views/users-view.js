var app = app || {};

(function ($) {
	'use strict';

	app.UsersView = Backbone.View.extend({

		events: { },

		template: _.template($('#users-template').html()),

		initialize: function(){
			var self = this;
			this.arrSubViews = [];

			this.listenTo(app.users, 'add', this.addOne);
			this.listenTo(app.users, 'reset', this.addAll);



			this.$wrapper = $('#usersPopUpWrapper');
			this.$wrapper.addClass('edit');
			this.render();

			$('#usersPopUpWrapper #btnClose').click(function(){
				self.close();
			})
			
			$('#btnCreateUser').click(function(){
				self.createUser();
			})
			
		},

		createUser:function(){

			var txtFirstName = $('#inputCreateUserFirstName').val();
			var txtLastName = $('#inputCreateUserLastName').val();
			if (txtFirstName && txtLastName){
				app.users.create({firstName: txtFirstName, lastName: txtLastName});
			}
		},

		render: function(){
			//console.log(this.$wrapper);
			this.$wrapper.html(this.template());
			this.$list = this.$wrapper.find('#usersList');
			this.addAll();
			return this;
		},
		addOne:function(user){
			var newUser = new app.UserView({ model: user });
			var newUserDisplay = newUser.render().el;
			this.$list.append(newUserDisplay);
			this.arrSubViews.push(newUser);
		},
		addAll:function(){
			this.$list.empty();
			app.users.each(this.addOne, this);
		},

		close: function(){
			this.$wrapper.removeClass('edit');
			_.each(this.arrSubViews, (function(subView){
				subView.remove();
			}));
			this.remove();
		}
	});

})(jQuery);