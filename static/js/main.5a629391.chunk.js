(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{18:function(t,e,o){},19:function(t,e,o){},26:function(t,e,o){"use strict";o.r(e);var c=o(2),n=o.n(c),i=o(13),r=o.n(i),s=(o(18),o(8)),a=o(10),l=o(3),u=(o(19),o(0)),d=function(t){var e=t.addTodo,o=Object(c.useState)(""),n=Object(l.a)(o,2),i=n[0],r=n[1],s=Object(c.useState)("Not set"),a=Object(l.a)(s,2),d=a[0],j=a[1];return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsx)("a",{className:"header-title",href:"index.html",children:Object(u.jsx)("h1",{children:"React Project Manager"})}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i?(e({text:i,priority:d}),r(""),j("Not set")):alert("Please add text")},children:[Object(u.jsx)("input",{className:"add-todo-text",type:"text",value:i,placeholder:"Add todo",onChange:function(t){r(t.target.value)}}),Object(u.jsxs)("select",{type:"submit",className:"header-priority-selector",value:d,onChange:function(t){j(t.target.value)},children:[Object(u.jsx)("option",{value:"Not set",children:"Select Priority"}),Object(u.jsx)("option",{value:"Not set",children:"Not Set"}),Object(u.jsx)("option",{value:"Low",children:"Low"}),Object(u.jsx)("option",{value:"Medium",children:"Medium"}),Object(u.jsx)("option",{value:"High",children:"High"})]}),Object(u.jsx)("input",{className:"form-submit-btn",type:"submit",value:"+"})]})]})})},j=function(t,e){var o=function(o){t.current&&!t.current.contains(o.target)&&e()};Object(c.useEffect)((function(){return document.addEventListener("click",o),function(){document.removeEventListener("click",o)}}))},b=o(5),m=o(6),O=function(t){var e=t.todo,o=t.toggleComplete,n=t.togglePriority,i=t.removeTodo,r=Object(c.useState)(!1),s=Object(l.a)(r,2),a=s[0],d=s[1],O=Object(c.useState)("Not set"),p=Object(l.a)(O,2),h=p[0],v=p[1],x=Object(c.useRef)();return j(x,(function(){a&&d(!a)})),Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)("button",{className:"completed-btn-container",onClick:function(){return o(e.id)},children:Object(u.jsx)("div",{className:e.isComplete?"check-box-active":"check-box",children:Object(u.jsx)(b.a,{icon:m.a,size:"xs"})})}),Object(u.jsx)("div",{className:"title-btn-container",children:Object(u.jsx)("div",{className:"todo-text",children:e.text})}),Object(u.jsx)("div",{className:"priority-btn-container",children:Object(u.jsxs)("button",{className:"priority-btn",onClick:function(){return d(!a)},style:"High"===e.priority?{backgroundColor:"#A61C3C"}:"Medium"===e.priority?{backgroundColor:"#F4AC45"}:"Low"===e.priority?{backgroundColor:"#92BFB1"}:{backgroundColor:"gray"},ref:x,children:[e.priority,Object(u.jsx)("nav",{className:"menu ".concat(a?"active":"inactive"),children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),n(e.id,h)},children:Object(u.jsxs)("div",{className:"priority-selector",children:[Object(u.jsx)("button",{className:"priority-btn-option",onClick:function(t){v(t.target.value)},value:"Not set",style:{backgroundColor:"gray"},children:"Not Set"}),Object(u.jsx)("button",{className:"priority-btn-option",onClick:function(t){v(t.target.value)},value:"Low",style:{backgroundColor:"#92BFB1"},children:"Low"}),Object(u.jsx)("button",{className:"priority-btn-option",onClick:function(t){v(t.target.value)},value:"Medium",style:{backgroundColor:"#F4AC45"},children:"Medium"}),Object(u.jsx)("button",{className:"priority-btn-option",onClick:function(t){v(t.target.value)},value:"High",style:{backgroundColor:"#A61C3C"},children:"High"})]})})})]})}),Object(u.jsx)("button",{className:"remove-btn-container",children:Object(u.jsx)("div",{className:"remove-btn",onClick:function(){return i(e.id)},children:Object(u.jsx)(b.a,{icon:m.c,size:"xs"})})})]})},p=function(t){var e=t.todoArray,o=t.toggleComplete,c=t.togglePriority,n=t.removeTodo;return console.log(e),Object(u.jsx)("div",{className:"todos-list",children:e.map((function(t){return Object(u.jsx)(O,{todo:t,toggleComplete:o,togglePriority:c,removeTodo:n},t.id)}))})};var h=function(){var t=Object(c.useState)([{id:1,text:"Project #1",isComplete:!1,priority:"Low",num:2},{id:2,text:"Project #2",isComplete:!0,priority:"High",num:1},{id:3,text:"Project #3",isComplete:!1,priority:"Medium",num:3}]),e=Object(l.a)(t,2),o=e[0],n=e[1],i=Object(c.useState)(o.length+1),r=Object(l.a)(i,2),O=r[0],h=r[1],v=Object(c.useState)(!1),x=Object(l.a)(v,2),f=x[0],g=x[1],C=Object(c.useRef)();j(C,(function(){f&&g(!f)}));var y=function(){var t=Object(a.a)(o).sort((function(t,e){var o={"Not set":0,Low:1,Medium:2,High:3};return o[t.priority]-o[e.priority]}));n(t)},N=function(){var t=Object(a.a)(o).sort((function(t,e){return t.isComplete-e.isComplete}));n(t)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{addTodo:function(t){h(O+1);var e={id:O,text:t.text,isComplete:!1,priority:t.priority};n([].concat(Object(a.a)(o),[e]))}}),Object(u.jsx)("div",{className:"sort-container",children:Object(u.jsxs)("button",{className:"sort-btn",onClick:function(){return g(!f)},ref:C,children:["Sort ",Object(u.jsx)(b.a,{icon:m.b,className:"arrow-icon"}),Object(u.jsxs)("div",{className:" ".concat(f?"sort-list-active":"sort-list"),children:[Object(u.jsx)("button",{className:"sort-list-btn",onClick:y,children:"Priority"}),Object(u.jsx)("button",{className:"sort-list-btn",onClick:N,children:"Completed"})]})]})}),Object(u.jsx)(p,{todoArray:o,sortByPriority:y,sortByComplete:N,toggleComplete:function(t){n(o.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{isComplete:!e.isComplete}):e})))},togglePriority:function(t,e){n(o.map((function(o){return o.id===t?Object(s.a)(Object(s.a)({},o),{},{priority:e}):o})))},removeTodo:function(t){n(o.filter((function(e){return e.id!==t})))}})]})},v=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,27)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;o(t),c(t),n(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.5a629391.chunk.js.map