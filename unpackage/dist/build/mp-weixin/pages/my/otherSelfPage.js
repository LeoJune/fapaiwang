(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/otherSelfPage"],{"08b0":function(t,e,i){"use strict";var a=i("3315"),s=i.n(a);s.a},"23dc":function(t,e,i){"use strict";i.r(e);var a=i("d950"),s=i("a48f");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("08b0");var o,r=i("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=u.exports},3315:function(t,e,i){},"6f4c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{id:"",current:0,swiperHeight:0,scrollTop:0,scrolltag:0,list1Height:0,list2Height:0,userData:null,houseList1:[],houseList2:[],loadStatus1:"more",pageNum1:1,total1:"",loadStatus2:"noMore",pageNum2:1,total2:"",pageSize:10}},onLoad:function(t){var e=this;e.id=t.id,e.getUserInfo(),e.getCollectList(1),e.getBrowsesList(1)},onReady:function(){var t=this;setTimeout((function(){t.$utils.getBoxheight(".itemList1",(function(e){t.list1Height=e[0].height,t.swiperHeight=e[0].height})),t.$utils.getBoxheight(".itemList2",(function(e){t.list2Height=e[0].height})),t.$utils.getBoxheight(".userBox",(function(e){t.scrolltag=e[0].height-20}))}),200)},onReachBottom:function(){var t=this;if(console.log("onReachBottom"),0==t.current){if("noMore"==t.loadStatus1)return;1!=t.pageNum1&&t.getCollectList(t.pageNum1)}},methods:{getUserInfo:function(){var e=this,i={id:e.id};e.$api.userinfoByid(i).then((function(i){if(i.success){var a=i.datas;a.headImgUrl=a.headImgUrl?a.headImgUrl:"../../static/images/defaultUserPic.png",a.nickName=a.nickName?a.nickName:a.mobile,e.userData=a}else t.showToast({title:i.message,icon:"none"})}))},getCollectList:function(e){var i=this,a={pageNo:e,appUserId:i.id};i.loadStatus1="loading",i.$api.collectList(a).then((function(e){if(e.success){var a=e.datas.list;for(var s in a){a[s].currentPriceText=(1e-4*a[s].currentPrice).toFixed(2),1==a[s].paimaiTimes?a[s].paimaiTimesText="一拍":2==a[s].paimaiTimes?a[s].paimaiTimesText="二拍":4==a[s].paimaiTimes?a[s].paimaiTimesText="变卖":5==a[s].paimaiTimes&&(a[s].paimaiTimesText="重新拍卖");var n=(new Date).getTime(),o=new Date(a[s].startTime).getTime(),r=new Date(a[s].endTime).getTime();o>n?(a[s].paimaiStatus=1,a[s].timeText=i.$utils.formatTime(o,"MM月DD日 hh:mm")):n>=o&&n<=r?(a[s].paimaiStatus=2,a[s].timeText=i.$utils.timeCount(r)):(a[s].paimaiStatus=3,a[s].timeText=i.$utils.formatTime(r,"YYYY年MM月DD日")),i.houseList1.push(a[s])}var u=e.datas.totalCount;i.total1=u;var c=Math.ceil(u/i.pageSize);parseInt(c)>parseInt(i.pageNum)?(i.pageNum1++,i.loadStatus1="more"):i.loadStatus1="noMore"}else t.showToast({title:e.message,icon:"none"})}))},getBrowsesList:function(e){var i=this,a={appUserId:i.id};i.$api.browsesList(a).then((function(e){if(e.success){var a=e.datas;for(var s in i.total=e.datas.total,a){a[s].currentPriceText=(1e-4*a[s].currentPrice).toFixed(2),1==a[s].paimaiTimes?a[s].paimaiTimesText="一拍":2==a[s].paimaiTimes?a[s].paimaiTimesText="二拍":4==a[s].paimaiTimes?a[s].paimaiTimesText="变卖":5==a[s].paimaiTimes&&(a[s].paimaiTimesText="重新拍卖");var n=(new Date).getTime(),o=new Date(a[s].startTime).getTime(),r=new Date(a[s].endTime).getTime();o>n?(a[s].paimaiStatus=1,a[s].timeText=i.$utils.formatTime(o,"MM月DD日 hh:mm")):n>=o&&n<=r?(a[s].paimaiStatus=2,a[s].timeText=i.$utils.timeCount(r)):(a[s].paimaiStatus=3,a[s].timeText=i.$utils.formatTime(r,"YYYY年MM月DD日")),i.houseList2.push(a[s])}}else t.showToast({title:e.message,icon:"none"})}))},itemTap:function(t,e){this.$Router.push({path:"/pages/home/goodsDetail",query:{paimaiId:t,houseSource:e}})},onPageScroll:function(t){var e=this;e.scrollTop=t.scrollTop},changeNav:function(t){var e=this;e.current=t},swiperChange:function(t){var e=this;e.current=t.detail.current,0==t.detail.current?e.swiperHeight=e.list1Height:e.swiperHeight=e.list2Height}}};e.default=i}).call(this,i("543d")["default"])},a48f:function(t,e,i){"use strict";i.r(e);var a=i("6f4c"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},b11b:function(t,e,i){"use strict";(function(t){i("312d");a(i("66fd"));var e=a(i("23dc"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},d950:function(t,e,i){"use strict";var a={"uni-load-more":function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"61d8"))}},s=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))}},[["b11b","common/runtime","common/vendor"]]]);