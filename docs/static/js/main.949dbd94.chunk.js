(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t(0),r=t.n(c),s=t(3),a=t.n(s),i=t(5),u=t(4),f=t.n(u),d=(t(11),function(e){var n=Object(c.useState)([]),t=Object(i.a)(n,2),r=t[0],s=t[1];return Object(c.useEffect)((function(){!function(e,n){var t=new FormData;t.append("username",e),t.append("password",n),fetch("http://dev.naveler.com:8007/api/login/",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}("demo_front","front_front12345"),fetch("http://dev.naveler.com:8007/api/get_countries/",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){return console.log(e),e.message})).then((function(e){console.log(e),s(e)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsx)(f.a,{countries:r})})});a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))},4:function(e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.949dbd94.chunk.js.map