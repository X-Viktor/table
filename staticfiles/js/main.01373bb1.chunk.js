(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{44:function(e,t){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c.n(n),s=c(18),r=c.n(s),i=c(7),a=c(48),d=(c(9),c(19)),b=c.n(d),l=c(49),h=c(47),O=c(1);var u=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],j=t[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),a=r[0],d=r[1];Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/rows/?offset="+4*c}).then((function(e){d(e.data)}))}),[c]);var u=Object(n.useMemo)((function(){for(var e=Math.ceil(a.count/4),t=[],n=function(e){t.push(Object(O.jsx)(l.a.Item,{active:e===c,onClick:function(){return j(e)},children:e+1},e))},s=0;s<e;s++)n(s);return t}),[c,a.length]);return Object(O.jsxs)("div",{className:"Table",children:[Object(O.jsx)("h1",{children:"Table"}),Object(O.jsxs)(h.a,{striped:!0,bordered:!0,variant:"dark",className:"mt-3",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(O.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(O.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]})}),Object(O.jsx)("tbody",{children:0!==a.length?a.results.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.date}),Object(O.jsx)("td",{children:e.title}),Object(O.jsx)("td",{children:e.count}),Object(O.jsx)("td",{children:e.distance})]},e.id)})):Object(O.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})})]}),Object(O.jsx)(l.a,{className:"mt-3",children:u})]})},o=(c(44),c(45),function(){return Object(O.jsxs)("div",{className:"lds-ripple",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})});var x=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0];return t[1],Object(O.jsx)(a.a,{children:c?Object(O.jsx)(o,{}):Object(O.jsx)(u,{})})};r.a.render(Object(O.jsx)(j.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.01373bb1.chunk.js.map