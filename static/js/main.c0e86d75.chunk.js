(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(5),c=n.n(o),r=n(3),a=n(6),s=n(1),i=n.n(s),u=n(2),d=(n(12),n(0)),l=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.color,o=t.name;return Object(d.jsx)("li",{"data-cy":"good",style:{color:n},children:o},e)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(u.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,f();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,f().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),children:"Load red goods"}),Object(d.jsx)(l,{goods:n})]})};c.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c0e86d75.chunk.js.map