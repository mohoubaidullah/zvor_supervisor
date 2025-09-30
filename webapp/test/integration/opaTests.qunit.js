/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vor/zvor_supervisor/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});