(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180")}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},m=(n(16),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}),j=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n,autoFocus:!0})}),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={searchField:"",monsters:[{name:"m1",id:"m1"},{name:"m2",id:"m2"}]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchField,c=t.monsters.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(j,{placeholder:"Search monsters...",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(m,{monsters:c})]})}}]),n}(c.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.09a803f3.chunk.js.map