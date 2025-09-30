/*global QUnit*/

sap.ui.define([
	"vor/zvor_supervisor/controller/vor_supervisor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("vor_supervisor Controller");

	QUnit.test("I should test the vor_supervisor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});