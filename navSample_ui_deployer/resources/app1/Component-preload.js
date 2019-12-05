sap.ui.require.preload({"app1/app1/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","app1/app1/model/models"],function(e,t,i){"use strict";return e.extend("app1.app1.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments),this.getRouter().initialize(),this.setModel(i.createDeviceModel(),"device")}})});',"app1/app1/controller/View1.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/generic/app/navigation/service/NavigationHandler","sap/ui/generic/app/navigation/service/NavType"],function(e,t,a){"use strict";return e.extend("app1.app1.controller.View1",{onInit:function(){this.oPrevAppState=null,this.oNavigationHandler=new t(this),this.oNavigationHandler.parseNavigation().done(this.onNavigationDone.bind(this))},onNavigationDone:function(e,t,n){switch(n){case a.initial:break;case a.iAppState:this.byId("buttonSegmented").setSelectedKey(e.customData.segmentedButtonSelectedKey),this.byId("buttonToggle1").setPressed(e.customData.toggleButtonPressed)}},onPressNavigateToApp3:async function(e){var t=this;t.readPreviousAppState().then(function(){var e={customData:{toggleButtonPressed:t.byId("buttonToggle1").getPressed(),segmentedButtonSelectedKey:t.byId("buttonSegmented").getSelectedKey()}};e=t.appendPreviousDataToStateData(e),$.ajax({url:sap.ui.require.toUrl("BackendService")+"/appstate",dataType:"json",type:"get",contentType:"application/json",data:{},headers:{"x-csrf-token":"Fetch"},success:function(e,t,a){console.log("success")},error:function(e,t,a){console.log(e)},complete:function(e,t){console.log("completed")}});t.oNavigationHandler.navigate("app3","display",{},e,function(e){var a=t.getView().getModel("i18n").getResourceBundle();e.setUIText({oi18n:a,sTextKey:"OUTBOUND_NAV_ERROR"}),e.showMessageBox()})})},readPreviousAppState:function(){var e=this,t=sap.ui.core.routing.HashChanger.getInstance().getHash(),a=/(?:sap-iapp-state=)([^&=]+)/.exec(t)[1];return this.oNavigationHandler.oCrossAppNavService.getAppStateData(a).done(function(t){e.oPrevAppState=t})},appendPreviousDataToStateData:function(e){if(this.oPrevAppState)for(var t in this.oPrevAppState.customData)e.customData[t]=this.oPrevAppState.customData[t];return e}})});',"app1/app1/model/models.js":'sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);return i.setDefaultBindingMode("OneWay"),i}}});',"app1/app1/serviceBinding.js":'function initModel(){var e=new sap.ui.model.odata.ODataModel("/here/goes/your/serviceurl/",!0);sap.ui.getCore().setModel(e)}',"app1/app1/view/View1.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" xmlns="sap.m" controllerName="app1.app1.controller.View1" displayBlock="true"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><VBox width="100%" direction="Column" id="vbox0"><items><Panel xmlns="sap.m" width="auto" expandable="true" expanded="true" id="panelCrossAppNavigation"><headerToolbar><Toolbar id="toolbar1_1569859150762"><Title text="Cross app navigation"/><ToolbarSpacer/><Button icon="sap-icon://settings"/></Toolbar></headerToolbar><content><VBox width="100%" direction="Column" id="vbox0_1569859226017"><items><SegmentedButton xmlns="sap.m" selectedKey="one" id="buttonSegmented"><items><SegmentedButtonItem text="Button One" key="one" id="item0"/><SegmentedButtonItem text="Button Two" key="two" id="item1"/><SegmentedButtonItem text="Button Three" key="three" id="item2"/></items></SegmentedButton><ToggleButton xmlns="sap.m" id="buttonToggle1" text="Press me (cross navigation app state)"/><Button xmlns="sap.m" text="Navigate to app 3" id="buttonNavigateToApp2" press="onPressNavigateToApp3"/></items></VBox></content></Panel><core:ComponentContainer name="app2.app2" /></items></VBox></content></Page></pages></App></Shell></mvc:View>',"app1/app1/i18n/i18n.properties":"title=First application\nappTitle=app1\nappDescription=App Description","app1/app1/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"app1.app1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"crossNavigation":{"inbounds":{"intent1":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"app1","action":"display"}}},"dataSources":{"INTEROP":{"uri":"here/goes/your/serviceurl/","type":"OData","settings":{"localUri":"localService/metadata.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"app1.app1.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}},"components":{"app2.app2":{"minVersion":"1.0.0"}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"app1.app1.i18n.i18n"}},"GlobalContainers":{"type":"sap.ui.model.odata.v2.ODataModel","settings":{"defaultOperationMode":"Server","defaultBindingMode":"OneWay","defaultCountMode":"Request"},"dataSource":"INTEROP","preload":true}},"resources":{"css":[{"uri":"css/style.css"}]},"resourceRoots":{"BackendService":"../../BackendService"},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"app1.app1.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"TargetView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"services":{"ShellUIService":{"factoryName":"sap.ushell.ui5service.ShellUIService"}}}}'},"app1/app1/Component-preload");