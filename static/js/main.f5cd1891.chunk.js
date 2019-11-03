(this["webpackJsonprick-and-morty-app"]=this["webpackJsonprick-and-morty-app"]||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);a(71);var r=a(0),n=a.n(r),c=a(30),s=a.n(c),o=a(10),l=a(14),i=a(31);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={error:!1,perPage:20,pages:0,byId:{}};function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={error:!1,byId:{}},b=Object(l.b)({episodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EPISODES_SUCCESS":var a=e.byId;return t.payload.results.forEach((function(e){a[e.id]=e})),e.pages=t.payload.info.pages,e.byId=a,e.error=!1,p({},e);case"FETCH_EPISODES_FAILURE":return e.error=t.error,p({},e);default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHARACTERS_SUCCESS":var a=e.byId;return t.payload.forEach((function(e){a[e.id]=e})),{byId:a,error:!1};case"FETCH_CHARACTERS_FAILURE":return e.error=t.error,m({},e);default:return e}}}),h=Object(l.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),O=(a(130),function(e){var t=e.title,a=e.subtitle;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__body"},n.a.createElement("h1",{className:"header__title"},t),n.a.createElement("span",{className:"header__credits"},a)))});O.defaultProps={title:"",subtitle:""};var v=O,y=a(22),_=(a(131),function(e){var t=e.children,a=e.open,c=e.onChange,s=e.title,o=e.className,l=Object(r.useState)(a),i=Object(y.a)(l,2),u=i[0],p=i[1];Object(r.useEffect)((function(){p(a)}),[a]);return n.a.createElement("div",{className:"collapse ".concat(u&&"collapse--open")},n.a.createElement("div",{className:"collapse__head",onClick:function(){p(!u),c(!u)}},s,n.a.createElement("button",{className:"collapse__button"},u?"-":"+")),n.a.createElement("div",{className:"collapse__body ".concat(o)},t))});_.defaultProps={open:!1,onChange:function(){},title:"",className:""};var g=_,j=a(4),C=a.n(j),S=(a(132),function(e){var t=e.id,a=e.characters,r=a.byId[t]||{},c=r.name,s=r.image;return n.a.createElement("div",{className:"character ".concat(a.error&&"character--error")},n.a.createElement("img",{src:s,alt:c,className:"character__image"}),n.a.createElement("div",{className:"character__name"},c||"[ID: ".concat(t,"]")))});S.defaultProps={id:0};var N=Object(o.b)((function(e){return{characters:e.characters}}))(S),k={list:C.a.arrayOf(C.a.oneOfType([C.a.string,C.a.number]))},w=n.a.memo((function(e){return e.list.map((function(e){return n.a.createElement(N,{key:e,id:e})}))}));w.propTypes=k,w.defaultProps={list:[]};var P=w,I=function(e){var t=e.split("/");return t[t.length-1]},R=a(15),D=a.n(R),T=a(32),x={baseURL:"https://rickandmortyapi.com/api",get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a="?";for(var r in t)a+="".concat(r,"=").concat(t[r],"&");return fetch("".concat(x.baseURL).concat(e).concat(a))}},A=x,F=function(e){return{type:"FETCH_CHARACTERS_FAILURE",error:e}},H=function(){var e=Object(T.a)(D.a.mark((function e(t){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,A.get("/character/".concat(t.join(",")));case 5:if(200===(a=e.sent).status){e.next=8;break}throw new Error("Request failed with response status of ".concat(a.status));case 8:return e.next=10,a.json();case 10:r=e.sent,h.dispatch({type:"FETCH_CHARACTERS_SUCCESS",payload:r}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),h.dispatch(F(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),U=(a(134),function(e){var t=e.episode,a=e.open,c=e.onOpenChange,s=e.characters,o=t.id,l=t.name,i=t.air_date,u=Object(r.useMemo)((function(){return t.characters.map((function(e){return I(e)}))}),[t.characters]),p=Object(r.useCallback)((function(e){if(c(e),e){!function(){var e=Object.keys(s.byId),t=u.filter((function(t){return-1===e.indexOf(t)}));H(t)}()}}),[s,u,c]);return n.a.createElement(g,{title:"Episode ".concat(o),open:a,onChange:p,className:"episode"},n.a.createElement("ul",{className:"episode__properties"},n.a.createElement("li",null,n.a.createElement("strong",null,"ID")," ",n.a.createElement("span",null,o)),n.a.createElement("li",null,n.a.createElement("strong",null,"Name")," ",n.a.createElement("span",null,l)),n.a.createElement("li",null,n.a.createElement("strong",null,"Air date")," ",n.a.createElement("span",null,i)),n.a.createElement("li",null,n.a.createElement("strong",null,"Episode")," ",n.a.createElement("span",null,t.episode)),n.a.createElement("li",null,n.a.createElement("strong",null,"Characters"))),n.a.createElement("div",{className:"episode__characters"},n.a.createElement(P,{list:u})))});U.defaultProps={episode:{id:null,name:"",air_date:"",characters:[]},open:!1,onOpenChange:function(){}};var L=Object(o.b)((function(e){return{characters:e.characters}}))(U),M=function(e){var t=e.message;return n.a.createElement("div",{className:"error"},n.a.createElement("div",{className:"error__title"},"Error!"),n.a.createElement("div",{className:"error__message"},t))},X=function(e){return{type:"FETCH_EPISODES_FAILURE",error:e}},q=function(){var e=Object(T.a)(D.a.mark((function e(t){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/episode",{page:t});case 3:if(200===(a=e.sent).status){e.next=6;break}throw new Error("Request failed with response status of ".concat(a.status));case 6:return e.next=8,a.json();case 8:r=e.sent,h.dispatch({type:"FETCH_EPISODES_SUCCESS",payload:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),h.dispatch(X(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),J=(a(135),Object(o.b)((function(e){return{episodes:e.episodes,characters:e.characters}}))((function(e){var t=e.episodes,a=e.characters,c=Object(r.useState)(!1),s=Object(y.a)(c,2),o=s[0],l=s[1],i=Object(r.useState)(1),u=Object(y.a)(i,2),p=u[0],d=u[1],f=Object(r.useMemo)((function(){return Object.values(t.byId).slice((p-1)*t.perPage,p*t.perPage)}),[t,p]);Object(r.useEffect)((function(){Object.keys(t.byId).length>(p-1)*t.perPage||q(p)}),[p]);var m=Object(r.useCallback)((function(){var e=!o;if(l(e),e){var t=Object.keys(a.byId),r=f.map((function(e){return e.characters})).flat().map((function(e){return I(e)})).filter((function(e){return-1===t.indexOf(e)}));H(r)}}),[o,a,f]);return n.a.createElement("div",{className:"episodes-list"},n.a.createElement("h2",{className:"episodes-list__title"},"All Episodes:",n.a.createElement("span",{className:"link",onClick:m},o?"collapse all":"show all")),n.a.createElement("div",{className:"episodes-list__episodes"},t.error&&n.a.createElement(M,{message:t.error}),f.map((function(e){return n.a.createElement(L,{key:e.id,episode:e,open:o,onOpenChange:function(){}})}))),n.a.createElement("div",{className:"episodes-list__pagination"},n.a.createElement("span",{className:"link ".concat(1===p&&"link--disabled"),onClick:function(){d(p-1),l(!1)}},"prev page")," |",n.a.createElement("span",{className:"link ".concat(p===t.pages&&"link--disabled"),onClick:function(){d(p+1),l(!1)}},"next page")))}))),V=(a(136),function(){return n.a.createElement("div",null,n.a.createElement(v,{title:"Rick and Morty app",subtitle:"Created by Artur M\u0119dryga\u0142"}),n.a.createElement("div",{className:"container"},n.a.createElement(J,null)))});s.a.render(n.a.createElement(o.a,{store:h},n.a.createElement(V,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a(137)}},[[70,1,2]]]);
//# sourceMappingURL=main.f5cd1891.chunk.js.map