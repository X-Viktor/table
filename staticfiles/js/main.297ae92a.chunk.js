(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{26:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),j=c(19),r=c.n(j),i=c(6),a=c(48),b=c(47),l=(c(10),c(46)),d=c(1),u=function(e){var t=e.rows;return Object(d.jsxs)("div",{className:"Table",children:[Object(d.jsx)("h1",{children:"Table"}),Object(d.jsxs)(l.a,{striped:!0,bordered:!0,variant:"dark",className:"mt-3",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(d.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(d.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(d.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]})}),Object(d.jsx)("tbody",{children:0!==t.results.length?t.results.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.date}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.count}),Object(d.jsx)("td",{children:e.distance})]},e.id)})):Object(d.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})})]})]})},o=(c(26),function(){return Object(d.jsxs)("div",{className:"lds-ripple",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}),O=c(20),h=c.n(O),x=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],j=c[1],r=Object(n.useState)(!1),a=Object(i.a)(r,2),b=a[0],l=a[1];return Object(n.useEffect)((function(){h()({method:"GET",url:e}).then((function(e){j(e.data),l(!0)}))}),[e]),[s,b]},f=function(e){var t=e.items;return Object(d.jsx)(a.a,{className:"mt-3",children:t})};var m=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],j=Object(n.useState)(0),r=Object(i.a)(j,2),l=r[0],O=r[1],h=Object(n.useState)(0),m=Object(i.a)(h,2),v=m[0],p=m[1],g=Object(n.useMemo)((function(){return"http://127.0.0.1:8000/api/rows/?offset="+c*l}),[c]),S=x(g),w=Object(i.a)(S,2),k=w[0],E=w[1];Object(n.useEffect)((function(){E&&(O(k.results.length),p(Math.ceil(k.count/l)))}),[E]);var M=Object(n.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(d.jsx)(a.a.Item,{active:t===c,onClick:function(){return s(t)},children:t+1},t))},n=0;n<v;n++)t(n);return e}),[c,k]);return console.log(k),console.log(k.length),console.log(M),Object(d.jsxs)(b.a,{children:[E?Object(d.jsx)(u,{rows:k}):Object(d.jsx)(o,{}),Object(d.jsx)(f,{items:M})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.297ae92a.chunk.js.map