(this["webpackJsonpfresh-todo-react"]=this["webpackJsonpfresh-todo-react"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(4),r=n.n(o),s=(n(11),n(2)),u=(n(12),function(e){var t=e.name,n=e.temp,a=e.weather;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"weather_icon",children:Object(c.jsxs)("h3",{children:["Temperature: ",n.temp,"\xb0C"," ",a.icon&&Object(c.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(a.icon,"@2x.png"),alt:""})]})}),Object(c.jsxs)("h3",{children:["Feels like: ",n.feels_like,"\xb0C"]}),Object(c.jsxs)("h3",{children:["Humidity: ",n.humidity,"%"]}),Object(c.jsxs)("h3",{children:["Weather: ",a.main]}),Object(c.jsxs)("h3",{children:["City or Area: ",t]})]})}),h=n(5),j=n.n(h);function l(){var e=(new Date).toLocaleTimeString("en-au",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),t=Object(a.useState)(""),n=Object(s.a)(t,2),i=n[0],o=n[1],r=Object(a.useState)({}),h=Object(s.a)(r,2),l=h[0],b=h[1],d=Object(a.useState)([]),f=Object(s.a)(d,2),m=f[0],p=f[1],O=Object(a.useState)(!1),g=Object(s.a)(O,2),x=g[0],w=g[1],v=Object(a.useState)({}),S=Object(s.a)(v,2),k=S[0],y=S[1],P=Object(a.useState)(""),C=Object(s.a)(P,2),F=C[0],N=C[1],D=Object(a.useState)(!1),E=Object(s.a)(D,2),A=E[0],L=E[1];function T(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat("23be752978a272654f425d3dd7ebf7e6")).then((function(e){if(e.ok)return e.json();w(!1)})).then((function(e){e&&(b(e.main),y(e.weather[0]),N(e.name))})).catch((function(e){return console.log(e)}))}function _(){if(!("geolocation"in navigator))return"Failed to read location...";navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;p([t,n])}))}return window.onload=function(){j.a.init({selector:".background",maxParticles:350,color:["#DA0463","#404B69","#61045f"],connectParticles:!0,minDistance:150,responsive:[{breakpoint:768,options:{maxParticles:200,color:"#48F2E3",connectParticles:!1}},{breakpoint:425,options:{maxParticles:100,connectParticles:!0}},{breakpoint:320,options:{maxParticles:0}}]}),T("London")},Object(a.useEffect)((function(){if(m){var e=m[0],t=m[1];e&&t&&fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&appid=").concat("23be752978a272654f425d3dd7ebf7e6")).then((function(e){return e.json()})).then((function(e){b(e.main),y(e.weather[0]),N(e.name)})).catch((function(e){throw e}))}}),[m]),Object(a.useEffect)((function(){Object.keys(l).length&&F&&w(!0)}),[l,k,F]),Object(a.useEffect)((function(){A&&T(A)}),[A]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"weather__info",children:[Object(c.jsx)("h4",{children:e}),Object(c.jsx)("button",{onClick:function(){return p(_)},children:"Get Weather In Your Area"}),Object(c.jsx)("br",{}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),L(i),o("")},className:"form",children:[Object(c.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Search by city..."}),Object(c.jsx)("button",{type:"submit",children:"Search"})]}),x?Object(c.jsx)(u,{name:F,temp:l,weather:k}):Object(c.jsx)("h3",{children:"Sorry, couldn't fetch the weather info"})]}),Object(c.jsx)("canvas",{className:"background"})]})}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.2c5a8fde.chunk.js.map