sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/generic/app/navigation/service/NavigationHandler",
	"sap/ui/generic/app/navigation/service/NavType"
], function (Controller, NavigationHandler, NavType) {
	"use strict";
	return Controller.extend("app1.app1.controller.View1", {
		onInit: function () {
			var that = this;
			this.oPrevAppState = null;
			that.oNavigationHandler = new NavigationHandler(that);
			that.oNavigationHandler.parseNavigation().done(that.onNavigationDone.bind(that));
		},
		onNavigationDone: function (oAppData, oURLParameters, sNavType) {
			switch (sNavType) {
			case NavType.initial:
				break;
			case NavType.iAppState:
				this.byId("buttonSegmented").setSelectedKey(oAppData.customData.segmentedButtonSelectedKey);
				this.byId("buttonToggle1").setPressed(oAppData.customData.toggleButtonPressed);
				break;
			}
		},
		onPressNavigateToApp3: async function (oEvent) {
		    var that = this;
			var sSemanticObject = "app3";
			var sActionName = "display";
		
			that.readPreviousAppState().then(function () {
			    var oInnerAppData = {
					customData: {
						toggleButtonPressed: that.byId("buttonToggle1").getPressed(),
						segmentedButtonSelectedKey: that.byId("buttonSegmented").getSelectedKey()
					}
				}; 
				oInnerAppData = that.appendPreviousDataToStateData(oInnerAppData);
				
				$.ajax({
                    url: sap.ui.require.toUrl("BackendService") + "/appstate",
                    dataType: "json",
                    type: "get",
                    contentType: "application/json",
                    data: {},
                    headers: {
                        "x-csrf-token": "Fetch"
                    },
                    success: function (data, textStatus, jQxhr) {
                        console.log("success");
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
    					console.log(jqXhr);
    				},
                    complete: function (xhr, status) {
                        console.log("completed");
                    }
                });
				
				// callback function in case of errors
				var fnOnError = function (oError) {
					var oi18n = that.getView().getModel("i18n").getResourceBundle();
					oError.setUIText({
						oi18n: oi18n,
						sTextKey: "OUTBOUND_NAV_ERROR"
					});
					oError.showMessageBox();
				}; 
				that.oNavigationHandler.navigate(sSemanticObject, sActionName, {}, oInnerAppData, fnOnError);
			});
		},
		readPreviousAppState: function () {
			var that = this;
			var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
			var sHash = oHashChanger.getHash();
			var appStateKey = /(?:sap-iapp-state=)([^&=]+)/.exec(sHash)[1];

			return this.oNavigationHandler.oCrossAppNavService.getAppStateData(appStateKey).done(function (oAppData) {
				that.oPrevAppState = oAppData;
			});
		},
		appendPreviousDataToStateData: function (oInnerAppData) {
			var that = this;
			if (that.oPrevAppState) {
				for (var s in that.oPrevAppState.customData) {
					oInnerAppData.customData[s] = that.oPrevAppState.customData[s];
				}
			}
			return oInnerAppData;
		}
	});
});