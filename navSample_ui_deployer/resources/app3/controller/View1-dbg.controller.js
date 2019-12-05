sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("app3Descriptor.app3.controller.View1", {
		onInit: function () {
		    
		},
		
		onPressSendMessageToChangeTitleToCFLP: function (oEvent) {
			var sTitleToSet = this.byId("textNewTitleForApp").getValue();
			this.getOwnerComponent().getService("ShellUIService").then(function (e) {
				e.setTitle(sTitleToSet);
			}, function (e) {
				jQuery.sap.log.error("Cannot get ShellUIService", e, "my.app.Component");
			});
		},
		/**
		 *@memberOf app1.app1.controller.View1
		 */
		onPressButtonSetDirtyFlag: function (oEvent) {
			sap.ushell.Container.setDirtyFlag(oEvent.getSource().getPressed());
		},
		/**
		 *@memberOf app1.app1.controller.View1
		 */
		onPressChangeHierarchy: function (oEvent) {
			var oNewHierarchy = [{
				title: this.byId("inputSecondAppTitle").getValue(),
				intent: "#app2-customAction"
			}, {
				title: this.byId("inputFirstAppTitle").getValue(),
				intent: "#app1-display"
			}];

			this.getOwnerComponent().getService("ShellUIService").then( // promise is returned
				function (oService) {
					oService.setHierarchy(oNewHierarchy);
				},
				function (oError) {
					jQuery.sap.log.error("Cannot get ShellUIService", oError, "my.app.Component");
				}
			);
		}
	});
});