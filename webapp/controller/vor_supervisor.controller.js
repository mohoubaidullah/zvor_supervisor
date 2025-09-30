var string = "";
sap.ui.define([
"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter",
	'sap/m/MessagePopover',
	'sap/m/MessageBox',
	'sap/m/MessagePopoverItem',
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
], function (Controller, Fragment, Filter, MessagePopover, MessageBox, MessagePopoverItem, FilterOperator, MessageToast) {
	"use strict";

	return Controller.extend("vor.zvor_supervisor.controller.vor_supervisor", {
		onInit: function () {
			
			var complete_url = window.location.href;
			var pieces = complete_url.split("ccc");
			if (pieces.length === 2) {
				string = pieces[1];
				this.zrecord = string.substr(1, 10);
			}

			var that = this;
			var oModel = that.getOwnerComponent().getModel();
			var sPath = "/notificationSubmitSet('" + this.zrecord + "')";
			
			oModel.read(sPath, {
				success: function (oData, response) {
						var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var osf = that.getView().byId("mainForm1");
						osf.setModel(oModel3);
				},
				error : function (oData, response) {
					
				}
			});

		},
		
		onSaveFront1 : function () {
			var oFileUploader = this.getView().byId("idfront1");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idfront1").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "FRONT1",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		
		onSaveFront2 : function () {
			var oFileUploader = this.getView().byId("idfront2");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idfront2").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "FRONT2",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		onSaveBack1 : function () {
			var oFileUploader = this.getView().byId("idback1");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idback1").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "BACK1",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		onSaveBack2 : function () {
			var oFileUploader = this.getView().byId("idback2");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idback2").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "BACK2",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		onSaveRight1 : function () {
			var oFileUploader = this.getView().byId("idRight1");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idRight1").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "RIGHT1",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		
		onSaveRight2 : function () {
			var oFileUploader = this.getView().byId("idRight2");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idRight2").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "RIGHT2",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		onSaveLeft1 : function () {
			var oFileUploader = this.getView().byId("idLeft1");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idLeft1").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "LEFT1",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		onSaveLeft2 : function () {
			var oFileUploader = this.getView().byId("idLeft2");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idLeft2").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "LEFT2",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		
		onSaveAdd1 : function () {
			var oFileUploader = this.getView().byId("idAdd1");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idAdd1").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "ADD1",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		},
		onSaveAdd2 : function () {
			var oFileUploader = this.getView().byId("idAdd2");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idAdd2").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						//	var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						//		"");
						var vContent = e.currentTarget.result.replace("data:" + that.filetypeLicense + ";base64,", "");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"zvor_id": that.getView().byId("idVor").getText(),
							"Ztype": "ADD2",
							//"Content": btoa(vContent),
							"Content": vContent,
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}
		}
		
	});
});