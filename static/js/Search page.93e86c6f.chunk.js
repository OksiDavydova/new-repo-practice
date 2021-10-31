(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{101:function(e,t,n){e.exports={searchbar:"Searchbar_searchbar__2GrZ3",search_form:"Searchbar_search_form__3u_m6",search_form_button:"Searchbar_search_form_button__2YPWC",button_label:"Searchbar_button_label__NHuSR",search_form_input:"Searchbar_search_form_input__3BTU9"}},118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(71),a=n(111),c=n(56),o=n(0),s=n(3),i=n(10),u=n(101),l=n.n(u),b=n(112),h=(n(102),n(1));function f(e){var t=e.onSubmit,n=Object(o.useState)(""),r=Object(c.a)(n,2),a=r[0],s=r[1],i=function(){s("")};return Object(h.jsxs)("header",{className:l.a.searchbar,children:[Object(h.jsxs)("form",{className:l.a.search_form,onSubmit:function(e){if(e.preventDefault(),""===a.trim())return i(),b.b.error("Enter a keyword!");t(a),i()},children:[Object(h.jsx)("button",{type:"submit",className:l.a.search_form_button,children:Object(h.jsx)("span",{className:l.a.button_label,children:"Search"})}),Object(h.jsx)("input",{className:l.a.search_form_input,type:"text",value:a,onChange:function(e){var t=e.target.value.toLowerCase();s(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),Object(h.jsx)(b.a,{theme:"dark"})]})}var _=n(54),p=n(64),j=n(66),m=n(14),d=n(68),g=n.n(d),O=n(69),v=n.n(O),x=n(55);function k(){var e=Object(s.f)(),t=Object(s.g)(),n=Object(o.useState)((function(){var e=new URLSearchParams(t.search).get("query");return e||""})),u=Object(c.a)(n,2),l=u[0],b=u[1],d=Object(o.useState)([]),O=Object(c.a)(d,2),k=O[0],y=O[1],w=Object(o.useState)("init"),S=Object(c.a)(w,2),N=S[0],L=S[1],C=Object(o.useState)(1),U=Object(c.a)(C,2),E=U[0],F=U[1],B=Object(o.useState)(!1),M=Object(c.a)(B,2),P=M[0],q=M[1];Object(o.useEffect)((function(){l&&(L("pending"),Object(_.d)(l,E).then((function(e){y(1===E?e:function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))}),L("success"),q(!1),Object(x.a)()})).catch((function(e){console.log(e),L("error")})))}),[l,E]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{onSubmit:function(n){b(n),e.push(Object(a.a)(Object(a.a)({},t),{},{search:"query=".concat(n)}))}}),"pending"===N&&Object(h.jsx)(m.a,{}),"success"===N&&k.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:g.a.list_home_page,children:k.map((function(e){var n=e.id,r=e.poster_path,a=e.original_title;return Object(h.jsx)(i.b,{to:{pathname:"movie/".concat(n),state:{from:t,label:"back to search"}},children:Object(h.jsx)(p.a,{poster_path:r,original_title:a},n)},n)}))}),Object(h.jsx)(j.a,{onClickLoadMore:function(){q(!0),F((function(e){return e+1}))},children:P?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:v.a.loader}),Object(h.jsx)("span",{children:"Fetch data"})]}):Object(h.jsx)("span",{children:"Loading more"})})]}),"success"===N&&0===k.length&&Object(h.jsxs)("p",{children:["Sorry we haven't any information for your query: '",l,"',please enter a keyword"]}),"error"===N&&Object(h.jsx)("h1",{children:"Sorry!!!"})]})}},54:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(61),a=n.n(r),c=n(62),o=n(63),s=n.n(o),i="9c85780e51be24ce66dcc89d24578143";s.a.defaults.baseURL="https://api.themoviedb.org/3";var u="https://api.themoviedb.org/3";function l(){return b.apply(this,arguments)}function b(){return b=Object(c.a)(a.a.mark((function e(){var t,n,r,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:"",e.next=4,s.a.get(t,n).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.results})).catch((function(e){return console.log(e)}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function h(e){return l("/trending/movie/day?api_key=".concat(i,"&language=en-US&page=").concat(e,"&include_adult=false"))}function f(e,t){return l("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"))}function _(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("nothing found!"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("nothing found!"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("nothing found!"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},55:function(e,t,n){"use strict";t.a=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var r=n(65),a=n.n(r),c=n(1);function o(e){var t=e.id,n=e.poster_path,r=e.original_title;return Object(c.jsxs)("li",{className:a.a.item,children:[Object(c.jsx)("img",{className:a.a.item_image,src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:r}),Object(c.jsx)("p",{className:a.a.item_title,children:r})]},t)}},65:function(e,t,n){e.exports={item:"MovieItem_item__3gpk_",item_title:"MovieItem_item_title__2rywk",item_image:"MovieItem_item_image__1-7ky"}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var r=n(67),a=n.n(r),c=n(1);function o(e){var t=e.onClickLoadMore,n=e.children;return Object(c.jsx)("button",{type:"button",onClick:t,className:a.a.button,children:Object(c.jsx)("div",{className:a.a.btn_children,children:n})})}},67:function(e,t,n){e.exports={button:"Button_button__NvhOy",btn_children:"Button_btn_children__1ajbc"}},68:function(e,t,n){e.exports={list_home_page:"list_list_home_page__2K_wj",title:"list_title__3FhLN"}},69:function(e,t,n){e.exports={loader:"LoaderButton_loader__2trC1",spin:"LoaderButton_spin__1_ijz"}}}]);
//# sourceMappingURL=Search page.93e86c6f.chunk.js.map