(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{37:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(26),r=c.n(s),i=c(8),l=c(62),j=c(60),u=(c(15),c(59)),d=c(57),o=c(61),b=c(27),h=c(58),O=c(2),x=function(e){var t=e.onSearchSend,c=Object(n.useState)({field:"title",param:"gte",value:""}),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(O.jsx)("div",{className:"Search",children:Object(O.jsxs)(d.a,{className:"mb-3",children:[Object(O.jsxs)(o.a.Control,{as:"select",defaultValue:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){r({field:e.target.value,param:s.param,value:s.value})},children:[Object(O.jsx)("option",{value:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("option",{value:"count",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(O.jsx)("option",{value:"distance",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]}),Object(O.jsxs)(o.a.Control,{as:"select",defaultValue:"\u0411\u043e\u043b\u044c\u0448\u0435",onChange:function(e){r({field:s.field,param:e.target.value,value:s.value})},children:[Object(O.jsx)("option",{value:"gte",children:"\u0411\u043e\u043b\u044c\u0448\u0435"}),Object(O.jsx)("option",{value:"lte",children:"\u041c\u0435\u043d\u044c\u0448\u0435"}),Object(O.jsx)("option",{value:"iexact",children:"\u0420\u0430\u0432\u043d\u043e"}),Object(O.jsx)("option",{value:"icontains",children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442"})]}),Object(O.jsx)(b.a,{"aria-describedby":"basic-addon2",value:s.value,onChange:function(e){r({field:s.field,param:s.param,value:e.target.value})}}),Object(O.jsx)(d.a.Append,{children:Object(O.jsx)(h.a,{variant:"outline-secondary",onClick:function(){t(s)},children:"\u041d\u0430\u0439\u0442\u0438"})})]})})},f=function(e){var t=e.rows,c=e.onSearchSend;return Object(O.jsxs)("div",{className:"Table",children:[Object(O.jsx)("h1",{children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430"}),Object(O.jsx)(x,{onSearchSend:c}),Object(O.jsxs)(u.a,{striped:!0,bordered:!0,variant:"dark",className:"mt-3",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(O.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(O.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]})}),Object(O.jsx)("tbody",{children:0!==t.results.length?t.results.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.date}),Object(O.jsx)("td",{children:e.title}),Object(O.jsx)("td",{children:e.count}),Object(O.jsx)("td",{children:e.distance})]},e.id)})):Object(O.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})})]})]})},v=(c(37),function(){return Object(O.jsxs)("div",{className:"lds-ripple",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})}),p=c(28),m=c.n(p),g=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),l=Object(i.a)(r,2),j=l[0],u=l[1];return Object(n.useEffect)((function(){m()({method:"GET",url:e}).then((function(e){s(e.data),u(!0)}))}),[e]),[a,j]},S=function(e){var t=e.items;return Object(O.jsx)(l.a,{className:"mt-3",children:t})};var C=function(){var e="http://127.0.0.1:8000/api/rows/",t=Object(n.useState)(0),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(0),u=Object(i.a)(r,2),d=u[0],o=u[1],b=Object(n.useState)(0),h=Object(i.a)(b,2),x=h[0],p=h[1],m=Object(n.useState)(e),C=Object(i.a)(m,2),N=C[0],k=C[1];Object(n.useEffect)((function(){N===e?k(N+"?offset="+a*d):N.includes("offset")?k(N.substring(0,N.length-1)+a*d):k(N+"&offset="+a*d)}),[a]);var w=g(N),E=Object(i.a)(w,2),y=E[0],M=E[1];console.log(N),Object(n.useEffect)((function(){M&&(o(y.results.length),p(Math.ceil(y.count/y.results.length)))}),[M,N]),console.log(N),console.log(x);var I=Object(n.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(O.jsx)(l.a.Item,{active:t===a,onClick:function(){return s(t)},children:t+1},t))},c=0;c<x;c++)t(c);return e}),[a,x]);return Object(O.jsx)(j.a,{children:M?Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(f,{rows:y,onSearchSend:function(t){""===t.value?k(e):k(e+"?"+t.field+"__"+t.param+"="+t.value)}}),Object(O.jsx)(S,{items:I})]}):Object(O.jsx)(v,{})})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.85c4be34.chunk.js.map