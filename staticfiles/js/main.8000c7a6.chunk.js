(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{26:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(18),j=c.n(r),o=c(6),i=c(48),l=c(47),a=(c(9),c(46)),b=c(1),d=function(e){var t=e.rows;return console.log(t),Object(b.jsxs)("div",{className:"Table",children:[Object(b.jsx)("h1",{children:"Table"}),Object(b.jsxs)(a.a,{striped:!0,bordered:!0,variant:"dark",className:"mt-3",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(b.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(b.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]})}),Object(b.jsx)("tbody",{children:0!==t.results.length?t.results.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.count}),Object(b.jsx)("td",{children:e.distance})]},e.id)})):Object(b.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})})]})]})},u=(c(26),function(){return Object(b.jsxs)("div",{className:"lds-ripple",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),O=c(19),h=c.n(O),x=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],j=Object(n.useState)(!1),i=Object(o.a)(j,2),l=i[0],a=i[1];return Object(n.useEffect)((function(){h()({method:"GET",url:e}).then((function(e){r(e.data),a(!0)}))}),[e]),[{rows:s,isLoading:l},function(){}]};var f=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),j=Object(o.a)(r,2),a=j[0],O=j[1],h=Object(n.useState)(0),f=Object(o.a)(h,2),g=f[0],v=f[1],p=Object(n.useMemo)((function(){return"http://127.0.0.1:8000/api/rows/?offset="+c*a}),[c]);console.log(p);var m=x(p),w=Object(o.a)(m,2),S=w[0],k=S.rows,E=S.isLoading;w[1],console.log(k),console.log(E),Object(n.useEffect)((function(){E&&(O(k.results.length),v(Math.ceil(k.count/a)))})),console.log(a),console.log(g);var M=Object(n.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(b.jsx)(i.a.Item,{active:t===c,onClick:function(){return s(t)},children:t+1},t))},n=0;n<g;n++)t(n);return e}),[c,k.length]);return console.log(M),console.log(g),Object(b.jsx)(l.a,{children:E?Object(b.jsx)(d,{rows:k}):Object(b.jsx)(u,{})})};j.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8000c7a6.chunk.js.map