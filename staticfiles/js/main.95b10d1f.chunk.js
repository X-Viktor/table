(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{26:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(19),j=c.n(r),i=c(6),o=c(48),a=c(47),l=(c(10),c(46)),b=c(1),d=function(e){var t=e.rows;return Object(b.jsxs)("div",{className:"Table",children:[Object(b.jsx)("h1",{children:"Table"}),Object(b.jsxs)(l.a,{striped:!0,bordered:!0,variant:"dark",className:"mt-3",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(b.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(b.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]})}),Object(b.jsx)("tbody",{children:0!==t.length?t.results.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.count}),Object(b.jsx)("td",{children:e.distance})]},e.id)})):Object(b.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})})]})]})},u=(c(26),function(){return Object(b.jsxs)("div",{className:"lds-ripple",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),O=c(20),h=c.n(O),x=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],j=Object(n.useState)(!1),o=Object(i.a)(j,2),a=o[0],l=o[1];return Object(n.useEffect)((function(){h()({method:"GET",url:e}).then((function(e){r(e.data),l(!0)}))}),[e]),[{rows:s,isLoading:a,setRows:r,setIsLoading:l},function(){}]},f=function(e){var t=e.items;return Object(b.jsx)(o.a,{className:"mt-3",children:t})};var m=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),j=Object(i.a)(r,2),l=j[0],O=j[1],h=Object(n.useState)(0),m=Object(i.a)(h,2),v=m[0],g=m[1],p=Object(n.useMemo)((function(){return"http://127.0.0.1:8000/api/rows/?offset="+c*l}),[c]);console.log(p);var w=x(p),S=Object(i.a)(w,2),k=S[0],E=k.rows,I=k.isLoading;k.setRows,k.setIsLoading,S[1],console.log(E),Object(n.useEffect)((function(){I||(O(E.results.length),g(Math.ceil(E.count/l)))})),console.log(l),console.log(v);var L=Object(n.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(b.jsx)(o.a.Item,{active:t===c,onClick:function(){return s(t)},children:t+1},t))},n=0;n<v;n++)t(n);return e}),[c,E.length]);return console.log(L),console.log(v),Object(b.jsxs)(a.a,{children:[I?Object(b.jsx)(d,{rows:E}):Object(b.jsx)(u,{}),Object(b.jsx)(f,{items:L})]})};j.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.95b10d1f.chunk.js.map