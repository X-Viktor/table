(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),j=c(17),r=c.n(j),i=c(8),l=c(18),h=c.n(l),d=c(45),b=c(44),a=c(1);var o=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],j=Object(n.useState)([]),r=Object(i.a)(j,2),l=r[0],o=r[1];Object(n.useEffect)((function(){h()({method:"GET",url:"http://127.0.0.1:8000/api/rows/?offset="+4*c}).then((function(e){o(e.data)}))}),[c]);var u=Object(n.useMemo)((function(){for(var e=Math.ceil(l.count/4),t=[],n=function(e){t.push(Object(a.jsx)(d.a,{active:e===c,onClick:function(){return s(e)},children:e+1},e))},j=0;j<e;j++)n(j);return t}),[c]);return console.log(l),console.log(c),Object(a.jsxs)(b.a,{children:[Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Table"}),Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(a.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(a.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]}),0!==l.length?l.results.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.date}),Object(a.jsx)("td",{children:e.title}),Object(a.jsx)("td",{children:e.count}),Object(a.jsx)("td",{children:e.distance})]},e.id)})):Object(a.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})]})]}),Object(a.jsx)(d.a,{children:u})]})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.716fd011.chunk.js.map