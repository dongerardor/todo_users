/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

var wholeThing;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	wholeThing = new app.AppView();
	app.selectUserView = new app.SelectUserView();
});
