sap.ui.require.preload({"app3Descriptor/app3/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","app3Descriptor/app3/model/models"],function(e,t,i){"use strict";return e.extend("app3Descriptor.app3.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments),this.getRouter().initialize(),this.setModel(i.createDeviceModel(),"device")}})});',"app3Descriptor/app3/controller/View1.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("app3Descriptor.app3.controller.View1",{onInit:function(){},onPressSendMessageToChangeTitleToCFLP:function(e){var t=this.byId("textNewTitleForApp").getValue();this.getOwnerComponent().getService("ShellUIService").then(function(e){e.setTitle(t)},function(e){jQuery.sap.log.error("Cannot get ShellUIService",e,"my.app.Component")})},onPressButtonSetDirtyFlag:function(e){sap.ushell.Container.setDirtyFlag(e.getSource().getPressed())},onPressChangeHierarchy:function(e){var t=[{title:this.byId("inputSecondAppTitle").getValue(),intent:"#app2-customAction"},{title:this.byId("inputFirstAppTitle").getValue(),intent:"#app1-display"}];this.getOwnerComponent().getService("ShellUIService").then(function(e){e.setHierarchy(t)},function(e){jQuery.sap.log.error("Cannot get ShellUIService",e,"my.app.Component")})}})});',"app3Descriptor/app3/model/models.js":'sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);return i.setDefaultBindingMode("OneWay"),i}}});',"app3Descriptor/app3/view/View1.view.xml":'<mvc:View controllerName="app3Descriptor.app3.controller.View1" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><Panel xmlns="sap.m" width="auto" expandable="true" expanded="true" id="panel0"><headerToolbar><Toolbar id="toolbar1"><Title text="Post message API"/><ToolbarSpacer/><Button icon="sap-icon://settings"/></Toolbar></headerToolbar><content><Panel xmlns="sap.m" width="auto" expandable="true" id="panel1"><headerToolbar><Toolbar id="toolbar2"><Title text="sap.ushell.services.ShellUIService.setTitle"/><ToolbarSpacer/><Button icon="sap-icon://settings"/></Toolbar></headerToolbar><content><Text xmlns="sap.m" text="New title for app window" id="labelNewTitleForAppWindow"/><Input xmlns="sap.m" id="textNewTitleForApp"/><Button xmlns="sap.m" text="Send message to cFLP" id="btnSendMessageToChangeTitleToCFLP" press="onPressSendMessageToChangeTitleToCFLP"/></content></Panel><Panel xmlns="sap.m" width="auto" expandable="true" id="panel2"><headerToolbar><Toolbar id="toolbar3"><Title text="sap.ushell.services.ShellUIService.setDirtyFlag"/><ToolbarSpacer/><Button icon="sap-icon://settings"/><content/></Toolbar></headerToolbar><content><ToggleButton xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" id="buttonSetDirtyFlag" text="Press for setting dirty flag"\n\t\t\t\t\t\t\t\t\t\t\tpress="onPressButtonSetDirtyFlag"/></content></Panel><Panel xmlns="sap.m" width="auto" expandable="true" id="panel3"><headerToolbar><Toolbar id="toolbar4"><Title text="sap.ushell.services.ShellUIService.setHierarchy"/><ToolbarSpacer/><Button icon="sap-icon://settings"/></Toolbar></headerToolbar><content><Text xmlns="sap.m" text="First app title" id="labelFirstAppTitle"/><Input xmlns="sap.m" id="inputFirstAppTitle"/><Text xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" text="Second app title" id="labelSecondAppTitle"/><Input xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" id="inputSecondAppTitle"/><Button xmlns="sap.m" text="Change hierarchy (app2 will be first)" id="buttonChangeHierarchy" press="onPressChangeHierarchy"/></content></Panel></content></Panel></content></Page></pages></App></Shell></mvc:View>',"app3Descriptor/app3/i18n/i18n.properties":"title=Title\nappTitle=app3\nappDescription=App Description","app3Descriptor/app3/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"app3Descriptor.app3","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"html5moduletemplates.basicSAPUI5ApplicationProjectModule","version":"1.40.12"},"crossNavigation":{"inbounds":{"intent1":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"app3","action":"display"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"app3Descriptor.app3.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"app3Descriptor.app3.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"app3Descriptor.app3.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}}}}'},"app3Descriptor/app3/Component-preload");