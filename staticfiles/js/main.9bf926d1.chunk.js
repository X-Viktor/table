(this["webpackJsonptable-ui"]=this["webpackJsonptable-ui"]||[]).push([[0],{52:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(18),j=c.n(s),a=c(9),i=c(80),d=c(78),b=(c(27),c(77)),l=c(75),h=c(76),u=c(41),o=c(79),O=c(39),x=c(2),f=function(e){var t=e.onSearchSend,c=Object(n.useState)(""),r=Object(a.a)(c,2),s=r[0],j=r[1];return Object(x.jsx)("div",{className:"Search",children:Object(x.jsxs)(l.a,{className:"mb-3",children:[Object(x.jsxs)(h.a,{as:l.a.Prepend,variant:"outline-secondary",title:"\u041a\u043e\u043b\u043e\u043d\u043a\u0430",id:"input-group-dropdown-1",children:[Object(x.jsx)(u.a.Item,{href:"#",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(x.jsx)(u.a.Item,{href:"#",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(x.jsx)(u.a.Item,{href:"#",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]}),Object(x.jsxs)(h.a,{as:l.a.Prepend,variant:"outline-secondary",title:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"input-group-dropdown-2",children:[Object(x.jsx)(u.a.Item,{href:"#",children:"\u0411\u043e\u043b\u044c\u0448\u0435"}),Object(x.jsx)(u.a.Item,{href:"#",children:"\u041c\u0435\u043d\u044c\u0448\u0435"}),Object(x.jsx)(u.a.Item,{href:"#",children:"\u0420\u0430\u0432\u043d\u043e"}),Object(x.jsx)(u.a.Item,{href:"#",children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442"})]}),Object(x.jsx)(o.a,{"aria-describedby":"basic-addon2",value:s,onChange:function(e){j(e.target.value)}}),Object(x.jsx)(l.a.Append,{children:Object(x.jsx)(O.a,{variant:"outline-secondary",onClick:function(){t(s)},children:"\u041d\u0430\u0439\u0442\u0438"})})]})})},m=function(e){var t=e.rows,c=e.onSearchSend;return Object(x.jsxs)("div",{className:"Table",children:[Object(x.jsx)("h1",{children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430"}),Object(x.jsx)(f,{onSearchSend:c}),Object(x.jsxs)(b.a,{striped:!0,bordered:!0,variant:"dark",className:"mt-3",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"\u0414\u0430\u0442\u0430"}),Object(x.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(x.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(x.jsx)("th",{children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"})]})}),Object(x.jsx)("tbody",{children:0!==t.results.length?t.results.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.date}),Object(x.jsx)("td",{children:e.title}),Object(x.jsx)("td",{children:e.count}),Object(x.jsx)("td",{children:e.distance})]},e.id)})):Object(x.jsx)("h4",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})})]})]})},p=(c(52),function(){return Object(x.jsxs)("div",{className:"lds-ripple",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})}),v=c(40),S=c.n(v),g=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),r=c[0],s=c[1],j=Object(n.useState)(!1),i=Object(a.a)(j,2),d=i[0],b=i[1];return Object(n.useEffect)((function(){S()({method:"GET",url:e}).then((function(e){s(e.data),b(!0)}))}),[e]),[r,d]},I=function(e){var t=e.items;return Object(x.jsx)(i.a,{className:"mt-3",children:t})};var w=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(0),j=Object(a.a)(s,2),b=j[0],l=j[1],h=Object(n.useState)(0),u=Object(a.a)(h,2),o=u[0],O=u[1],f=Object(n.useMemo)((function(){return"http://127.0.0.1:8000/api/rows/?offset="+c*b}),[c]),v=g(f),S=Object(a.a)(v,2),w=S[0],y=S[1];Object(n.useEffect)((function(){y&&(l(w.results.length),O(Math.ceil(w.count/w.results.length)))}),[y]);var N=Object(n.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(x.jsx)(i.a.Item,{active:t===c,onClick:function(){return r(t)},children:t+1},t))},n=0;n<o;n++)t(n);return e}),[c,o]);return Object(x.jsx)(d.a,{children:y?Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(m,{rows:w,onSearchSend:function(e){console.log(e)}}),Object(x.jsx)(I,{items:N})]}):Object(x.jsx)(p,{})})};j.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9bf926d1.chunk.js.map