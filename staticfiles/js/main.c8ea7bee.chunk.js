(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(17),j=c.n(s),i=c(8),a=c(18),l=c.n(a),d=c(45),h=c(44),b=c(1);var o=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/rows/"}).then((function(e){r(e.data.result)}))}),[]);var s=Object(n.useState)(0),j=Object(i.a)(s,2),a=j[0],o=j[1],u=Object(n.useMemo)((function(){Math.ceil(c.count/4);for(var e=[],t=function(t){e.push(Object(b.jsx)(d.a,{active:t===a,onClick:function(){return o(t)},children:t+1},t))},n=0;n<4;n++)t(n);var r=4*a;return{pageItems:e,pageStart:r,pageEnd:r+4}}),[a,c.length]),O=u.pageItems;return u.pageStart,u.pageEnd,console.log(O),console.log(c),console.log(a),Object(b.jsxs)(h.a,{children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Table"}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(b.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(b.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]}),c.length?c.result.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.count}),Object(b.jsx)("td",{children:e.distance})]},e.id)})):Object(b.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})]})]}),Object(b.jsx)(d.a,{children:O})]})};j.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c8ea7bee.chunk.js.map