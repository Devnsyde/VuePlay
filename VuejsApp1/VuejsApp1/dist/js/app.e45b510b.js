(function(e){function n(n){for(var r,u,a=n[0],c=n[1],s=n[2],d=0,f=[];d<a.length;d++)u=a[d],i[u]&&f.push(i[u][0]),i[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==i[c]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},i={app:0},o=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("c21b"),i=t.n(r);i.a},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("74ca"),i=t("478e"),o=t("2bf2"),u=t("2b0e"),a=t("522d"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"background",attrs:{id:"app"}},[t("div",[t("h1",[e._v("Devices I have")]),t("device-list")],1)])},s=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.loading?t("h4",[e._v("Loading...")]):e._e(),e._l(e.devices,function(n){return t("device-item",{key:n.DeviceId,attrs:{device:n,user:e.user}})})],2)},d=[],f=t("aede"),v=t("9530"),p=t.n(v);function b(){var e=Object(f["a"])(["\n  query users {\n    users {\n        FirstName\n        LastName\n        EmailAddress\n        DeviceId\n    }\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(f["a"])(["\n  query devices {\n    devices {\n        DeviceId\n        Location\n        Name\n    }\n  }\n"]);return h=function(){return e},e}var m=p()(h()),y=p()(b()),_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v(e._s(e.device.Name)+" in "+e._s(e.device.Location)+" owned by "+e._s(e.user.FirstName))])},g=[],w={name:"DeviceItem",props:["device","user"]},O=w,j=t("2877"),x=Object(j["a"])(O,_,g,!1,null,null,null),D=x.exports,P={name:"DeviceList",data:function(){return{devices:[],users:[],loading:0}},components:{DeviceItem:D},apollo:{devices:{query:m},users:{query:y}}},k=P,I=Object(j["a"])(k,l,d,!1,null,null,null),L=I.exports,q={name:"app",components:{DeviceList:L}},N=q,S=(t("034f"),Object(j["a"])(N,c,s,!1,null,null,null)),T=S.exports;u["a"].config.productionTip=!1;var E=new i["a"]({uri:"http://hasura.westus.azurecontainer.io/v1/graphql"}),M=new r["a"]({link:E,cache:new o["a"],connectToDevTools:!0});u["a"].use(a["a"]);var $=new a["a"]({defaultClient:M,defaultOptions:{$loadingKey:"loading"}});new u["a"]({el:"#app",apolloProvider:$,render:function(e){return e(T)}})},c21b:function(e,n,t){}});
//# sourceMappingURL=app.e45b510b.js.map