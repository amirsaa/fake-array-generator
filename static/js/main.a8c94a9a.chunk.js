(this["webpackJsonpfake-array-generator"]=this["webpackJsonpfake-array-generator"]||[]).push([[0],{298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(51),c=a.n(l),u=a(2),o=a(24),i=Object(n.createContext)(),m=a(38),s=(a(102),function(){var e=Object(n.useContext)(i),t=e.arrayLength,a=e.setArrayLength,l=e.autoID,c=e.setAutoID,s=e.randomId,d=e.setRandomID,E=e.keyValInputs,b=e.setKeyValInputs,g=function(e){"autoID"===e?(c(!0),d(!1)):(d(!0),c(!1))},h=function(e){var t=Object(o.a)(E);t[e.target.dataset.idx-1][e.target.name]=e.target.value,b(t)},v=Object(n.useState)(!0),y=Object(u.a)(v,2),p=y[0],f=y[1];Object(n.useEffect)((function(){E.length>1?f(!0):f(!1)}),[E]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Fake Array Generator"),r.a.createElement("br",null),r.a.createElement("h2",null,"Setting:"),r.a.createElement("label",null,r.a.createElement("p",null,"Count of items in array:"),r.a.createElement("input",{type:"text",placeholder:"Length of Array",value:t,onChange:function(e){return e.target.value<=200&&a(Number(e.target.value))}})),r.a.createElement("label",null,r.a.createElement(m.a,{name:"autoID",checked:l,onChange:function(e){return g(e.target.name)}}),"Auto ID"),r.a.createElement("label",null,r.a.createElement(m.a,{name:"randomID",checked:s,onChange:function(e){return g(e.target.name)}}),"Random ID"),r.a.createElement("hr",null),r.a.createElement("ul",null,E.map((function(e,t){return r.a.createElement("li",{key:e.id},r.a.createElement("input",{type:"text",placeholder:"Key",name:"key","data-idx":e.id,value:E[t].key,onChange:h}),r.a.createElement("input",{type:"text",name:"value","data-idx":e.id,placeholder:"Value",value:E[t].value,onChange:h}),p&&r.a.createElement("button",{className:"delete-btn",onClick:function(){return function(e){if(E.length>1){var t=Object(o.a)(E);t.splice(e,1),b(t)}}(t)}},"\xd7"))}))),r.a.createElement("button",{className:"add-another",onClick:function(){b([].concat(Object(o.a)(E),[{id:E[E.length-1].id+1,key:"",value:""}]))}},"+ Add another?"))}),d=a(303),E=a(302),b=a(57),g=function(){var e=Object(n.useContext)(i),t=e.arrayLength,a=e.autoID,l=e.keyValInputs,c=function(){for(var e="",n=0;n<t;n++)e+="{ \n    id: ".concat(a?n+1:String(Math.random()).split(".")[1],",\n    ").concat(l.length>0?l.map((function(e){return e.key?"".concat(e.key,": ").concat(e.value>0?e.value+",\n":'"'.concat(e.value,'",\n')):""})).join("    "):"","\n  },\n  ");return"[\n  ".concat(e,"\n]")};return r.a.createElement("div",{className:"code-area"},r.a.createElement(d.a,{language:"javascript",style:E.a},c()),r.a.createElement(b.CopyToClipboard,{text:c()},r.a.createElement("button",null,"\ud83d\udcc4")))},h=function(e){var t=Object(n.useState)(1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),s=m[0],d=m[1],E=Object(n.useState)(!0),b=Object(u.a)(E,2),g=b[0],h=b[1],v=Object(n.useState)(!1),y=Object(u.a)(v,2),p=y[0],f=y[1],j=Object(n.useState)([{id:1,key:"title",value:"Book"}]),k=Object(u.a)(j,2),I=k[0],O=k[1];return r.a.createElement(i.Provider,{value:{arrayLength:l,setArrayLength:c,mainString:s,setMainString:d,autoID:g,setAutoID:h,randomId:p,setRandomID:f,keyValInputs:I,setKeyValInputs:O}},e.children)};a(297),a(298);var v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(h,null,r.a.createElement("div",{className:"section"},r.a.createElement(s,null)),r.a.createElement("div",{className:"section"},r.a.createElement(g,null))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},60:function(e,t,a){e.exports=a(299)}},[[60,1,2]]]);
//# sourceMappingURL=main.a8c94a9a.chunk.js.map