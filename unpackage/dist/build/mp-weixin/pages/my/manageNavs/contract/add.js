(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/manageNavs/contract/add"],{"189f":function(e,t,n){},"3bfa":function(e,t,n){"use strict";var i=n("189f"),a=n.n(i);a.a},"49d2":function(e,t,n){"use strict";var i={"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"df065"))}},a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"58a2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("4795")),a=o(n("a806"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a,o,s){try{var c=e[o](s),r=c.value}catch(u){return void n(u)}c.done?t(r):Promise.resolve(r).then(i,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function c(e){s(o,i,a,c,r,"next",e)}function r(e){s(o,i,a,c,r,"throw",e)}c(void 0)}))}}var r={data:function(){return{oriVisitId:0,customerName:"",customerMobile:"",employeeName:"",houseName:"",appendixList:[],imageList:[],memo:"",paimaiId:"",houseSource:"",appUserId:"",hasclickback:!1}},methods:{getRate:function(e){var t=this;t.evaluateScore=e.value},bindTextAreaBlur:function(e){this.memo=e.detail.value},addAnnex:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:["original"],count:1,success:function(n){console.log(n);var i=n.tempFiles[0].size;i>209715200?e.showToast({title:"文件过大",icon:"none"}):t.uploadImg(n)},fail:function(n){e.getSetting({success:function(n){var i=!1;switch(t.sourceTypeIndex){case 0:i=n.authSetting["scope.camera"];break;case 1:i=n.authSetting["scope.album"];break;case 2:i=n.authSetting["scope.album"]&&n.authSetting["scope.camera"];break;default:break}i||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}})},previewImage:function(t){e.previewImage({current:this.imageList[t],urls:this.imageList})},clearAnnex:function(e){var t=this;t.appendixList.splice(e,1),t.imageList.splice(e,1)},uploadImg:function(t){var n,i=this;e.showLoading({title:"上传中..."}),n=t.tempFilePaths[0],e.uploadFile({url:i.$api.filesUpload,name:"file",filePath:n,formData:{groupName:"userimg"},success:function(n){if(200==n.statusCode){var a=JSON.parse(n.data);console.log(a),a.success?(i.addAnnexHtml(a.datas,t),e.showToast({title:"上传成功"})):e.showToast({title:"上传失败"})}},fail:function(t){console.log(t),e.showToast({title:"上传失败",icon:"none"})}})},addAnnexHtml:function(e,t){var n=this;n.imageList=n.imageList.concat(t.tempFilePaths);var i={origiName:e.fileName,title:"",url:e.picUrl};n.appendixList.push(i)},sub:function(){var t=this;setTimeout((function(){if(0!=t.oriVisitId&&0!=t.appendixList.length&&""!=t.content){if(t.appendixList.length>0)for(var n in t.appendixList)if(""==t.appendixList[n].title)return void e.showToast({title:"请输入附件标题",icon:"none"});e.showModal({content:"日志提交后将不可再次修改，确认提交日志？",confirmText:"确认提交",cancelText:"取消",success:function(n){if(n.confirm){e.showLoading({title:"提交中..."});var i={appUserId:t.appUserId,appendixList:t.appendixList,houseSource:t.houseSource,memo:t.memo,paimaiId:t.paimaiId};t.$api.contractAdd(i).then((function(n){if(n.success){e.showToast({title:"提交成功"}),setTimeout((function(){t.$Router.back(1)}),1e3);var i=getCurrentPages(),a=i[i.length-2].route;"pages/my/manageNavs/contract/list"==a&&t.prevPageReload()}else e.showToast({title:n.message,icon:"none"})}))}else n.cancel}})}else e.showToast({title:"请输入必填内容",icon:"none"})}),100)},searchVisit:function(){var e=this;e.$Router.push({path:"/pages/my/manageNavs/searchVisit"})},prevPageReload:function(){var e=getCurrentPages(),t=e[e.length-2];t.onLoad()},checkPermission:function(t){var n=this;return c(i.default.mark((function o(){var s,c;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=t?t-1:n.sourceTypeIndex,!a.default.isIOS){i.next=7;break}return i.next=4,a.default.requestIOS(sourceType[s][0]);case 4:i.t0=i.sent,i.next=10;break;case 7:return i.next=9,a.default.requestAndroid(0===s?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:i.t0=i.sent;case 10:return c=i.t0,null===c||1===c?c=1:e.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&a.default.gotoAppSetting()}}),i.abrupt("return",c);case 13:case"end":return i.stop()}}),o)})))()},back:function(){var t=this;0!=t.oriVisitId||0!=t.appendixList.length||""!=t.memo?e.showModal({content:"退出后将不保留已编辑的内容，确认退出日志编辑？",confirmText:"继续编辑",cancelText:"退出",success:function(e){e.confirm||e.cancel&&t.$Router.back(1)}}):t.$Router.back(1)}}};t.default=r}).call(this,n("543d")["default"])},6558:function(e,t,n){"use strict";(function(e){n("312d");i(n("66fd"));var t=i(n("b28e"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b28e:function(e,t,n){"use strict";n.r(t);var i=n("49d2"),a=n("c375");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("3bfa");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=r.exports},c375:function(e,t,n){"use strict";n.r(t);var i=n("58a2"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a}},[["6558","common/runtime","common/vendor"]]]);