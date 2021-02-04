(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(98),c(23)),l=c.n(i),u=c(38),d=c(11),j=c(240),f=c(241),h=c(242),b=c(231),p=c(235),v=c(13),O=c(236);c(100);var x=function(e){var t=e.title,c=e.cases,a=e.isRed,s=e.active,r=e.total,o=Object(v.a)(e,["title","cases","isRed","active","total"]);return Object(n.jsx)(b.a,{className:"infoBox \n\t\t\t".concat(s&&"infoBox--selected","\n\t\t\t").concat(a&&"infoBox--red"),onClick:o.onClick,children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(O.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!a&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})},m=c(238),y=c(239),g=c(244),C=(c(104),c(86)),N=c(243),_=c(237),w=c(14),k=c.n(w),S={cases:{multiplier:800,option:{color:"#cc1034",fillColor:"#cc1034"}},recovered:{multiplier:1200,option:{color:"#7dd71d",fillColor:"#7dd71d"}},deaths:{multiplier:2e3,option:{color:"#ff6c47",fillColor:"#ff6c47"}}},T=function(e){return Object(C.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},B=function(e){return e?"+".concat(k()(e).format("0.0a")):"+0"},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:S[t].option,radius:Math.sqrt(e[t])*S[t].multiplier,children:Object(n.jsx)(_.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",k()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",k()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",k()(e.deaths).format("0,0")]})]})})})}))};function R(e){var t=e.center,c=e.zoom;return Object(m.a)().setView(t,c),null}var D=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return console.log(c),Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(y.a,{scrollWheelZoom:!1,children:[Object(n.jsx)(R,{center:a,zoom:s}),Object(n.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),I(t,c)]})})};c(105);var z=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:k()(c).format("0,0")})})]})}))})},F=(c(106),c(85)),L={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return k()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return k()(e).format("0a")}}}]}};var M=function(e){var t=e.casesType,c=void 0===t?"cases":t,s=Object(v.a)(e,["casesType"]),r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],j=o[1],f=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){j(f(e,c))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(n.jsx)("div",{className:s.className,children:(null===i||void 0===i?void 0:i.length)>0&&Object(n.jsx)(F.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]},options:L})})};c(203);var W=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(d.a)(r,2),i=o[0],v=o[1],O=Object(a.useState)({}),m=Object(d.a)(O,2),y=m[0],g=m[1],C=Object(a.useState)([]),N=Object(d.a)(C,2),_=N[0],w=N[1],k=Object(a.useState)([-10.00746,40.4796]),S=Object(d.a)(k,2),I=S[0],R=S[1],F=Object(a.useState)(3),L=Object(d.a)(F,2),W=L[0],E=L[1],A=Object(a.useState)([]),J=Object(d.a)(A,2),P=J[0],Y=J[1],q=Object(a.useState)("cases"),V=Object(d.a)(q,2),Z=V[0],G=V[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=T(e);w(c),s(t),Y(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){"worldwide"===c?(R([-10.00746,40.4796]),E(3)):(R([e.countryInfo.lat,e.countryInfo.long]),E(4)),v(c),g(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Covid-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",value:i,onChange:H,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"WorldWide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{isRed:!0,active:"cases"===Z,onClick:function(e){return G("cases")},title:"Coronavirus Cases",cases:B(y.todayCases),total:B(y.cases)}),Object(n.jsx)(x,{active:"recovered"===Z,onClick:function(e){return G("recovered")},title:"Recovered",cases:B(y.todayRecovered),total:B(y.recovered)}),Object(n.jsx)(x,{isRed:!0,active:"deaths"===Z,onClick:function(e){return G("deaths")},title:"Deaths",cases:B(y.todayDeaths),total:B(y.deaths)})]}),Object(n.jsx)(D,{countries:P,casesType:Z,center:I,zoom:W})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)("h3",{children:"Live Cases by country"}),Object(n.jsx)(z,{countries:_}),Object(n.jsxs)("h3",{className:"app__graphTitle",children:["WorldWide new ",Z]}),Object(n.jsx)(M,{className:"app__graph",casesType:Z})]})})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,246)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),E()},98:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.e825e7ae.chunk.js.map