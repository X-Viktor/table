(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(17),j=c.n(r),a=c(8),i=c(18),l=c.n(i),d=c(45),o=c(44),b=c(1);var h=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/rows/"}).then((function(e){s(e.data)}))}),[]);var r=Object(n.useState)(0),j=Object(a.a)(r,2),i=j[0],h=j[1],u=Object(n.useMemo)((function(){Math.ceil(c.count/4);for(var e=[],t=function(t){e.push(Object(b.jsx)(d.a,{active:t===i,onClick:function(){return h(t)},children:t+1},t))},n=0;n<4;n++)t(n);var s=4*i;return{pageItems:e,pageStart:s,pageEnd:s+4}}),[i,c.count]),O=u.pageItems;return u.pageStart,u.pageEnd,console.log(O),console.log(c),console.log(i),Object(b.jsxs)(o.a,{children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Table"}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(b.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(b.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]}),c.results.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.count}),Object(b.jsx)("td",{children:e.distance})]},e.id)}))]})]}),Object(b.jsx)(d.a,{children:O})]})};j.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.82281d02.chunk.js.map