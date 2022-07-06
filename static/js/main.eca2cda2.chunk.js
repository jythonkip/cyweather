(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{31:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,p,l,d,u,x,b,j,h=t(0),f=t.n(h),m=t(21),g=t.n(m),v=(t(31),t(10)),O=t(22),w=t(6),y=t(2),k=t(3),z=t(23),_=t.n(z),W=t(1),C=k.a.form(a||(a=Object(y.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 20px;\n  border: black solid 1px;\n  border-radius: 2px;\n\n  & input {\n    padding: 400px;\n    font-size: 40px;\n    border: black solid 3px;\n    outline: none;\n    font-family: Montserrat;\n    font-weight: bold;\n  }\n  & button {\n    background-color: black;\n    font-size: 20px;\n    padding: 0 10px;\n    color: white;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-family: Montserrat;\n    font-weight: bold;\n  }\n"]))),S=k.a.span(r||(r=Object(y.a)(["\n  color: black;\n  margin: 10px auto;\n  font-size: 18px;\n  font-weight: bold;\n"]))),M=k.a.img(i||(i=Object(y.a)(["\n  width: 140px;\n  height: 140px;\n  margin: 40px auto;\n"]))),T=function(e){var n=e.updatelong,t=e.updatelat,a=e.fetchWeather;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(M,{src:"/react-weather-app/icons/perfect-day.svg"}),Object(W.jsx)(S,{children:"Find Weather of location"}),Object(W.jsx)("input",{onChange:function(e){return n(e.target.value)},placeholder:"Enter longitude in degrees"}),Object(W.jsx)("input",{onChange:function(e){return t(e.target.value)},placeholder:"Enter latiude in degrees"}),Object(W.jsx)(C,{onSubmit:a,children:Object(W.jsx)("button",{type:"submit",children:"Search"})})]})},E={Temperature:"/react-weather-app/icons/Temperature.svg",sunrise:"/react-weather-app/icons/Temperature.svg",Humidity:"/react-weather-app/icons/humidity.svg",Wind:"/react-weather-app/icons/wind.svg",pressure:"/react-weather-app/icons/pressure.svg",Cloudcover:"/react-weather-app/icons/Cloudcover.svg"},F=k.a.span(c||(c=Object(y.a)(["\n  margin: 20px 25px 10px;\n  text-transform: capitalize;\n  text-align: start;\n  width: 90%;\n  font-weight: bold;\n  font-size: 14px;\n"]))),H=(k.a.img(o||(o=Object(y.a)(["\n  width: 100px;\n  height: 100px;\n  margin: 5px auto;\n"]))),k.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  margin: 30px auto;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),k.a.div(p||(p=Object(y.a)(["\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n"])))),I=k.a.div(l||(l=Object(y.a)(["\n  display: flex;\n  margin: 5px 10px;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),J=k.a.img(d||(d=Object(y.a)(["\n  width: 36px;\n  height: 36px;\n"]))),A=k.a.span(u||(u=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 15px;\n  & span {\n    font-size: 12px;\n    text-transform: capitalize;\n  }\n"]))),B=function(e){var n=e.name,t=e.value;return Object(W.jsxs)(I,{children:[Object(W.jsx)(J,{src:E[n]}),Object(W.jsxs)(A,{children:[t,Object(W.jsx)("span",{children:n})]})]})},D=function(e){var n=e.weather;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(F,{children:"Weather Info"}),Object(W.jsxs)(H,{children:[Object(W.jsx)(B,{name:"Temperature",value:null===n||void 0===n?void 0:n.hourly.temperature_2m[0]}),Object(W.jsx)(B,{name:"Humidity",value:null===n||void 0===n?void 0:n.hourly.relativehumidity_2m[0]}),Object(W.jsx)(B,{name:"Wind",value:null===n||void 0===n?void 0:n.hourly.windspeed_120m[0]}),Object(W.jsx)(B,{name:"Cloudcover",value:null===n||void 0===n?void 0:n.hourly.cloudcover_mid[0]})]})]})},q=k.a.div(x||(x=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 380px;\n  padding: 20px 10px;\n  margin: auto;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px 0 #555;\n  background: white;\n  font-family: Montserrat;\n"]))),G=k.a.span(b||(b=Object(y.a)(["\n  color: black;\n  margin: 20px auto;\n  font-size: 18px;\n  font-weight: bold;\n"])));k.a.span(j||(j=Object(y.a)(["\n  padding: 2px 3px;\n  background-color: black;\n  border-radius: 50%;\n  color: white;\n  position: absolute;\n"])));var K=function(){var e=Object(h.useState)(),n=Object(w.a)(e,2),t=n[0],a=n[1],r=Object(h.useState)(),i=Object(w.a)(r,2),c=i[0],o=i[1],s=Object(h.useState)(),p=Object(w.a)(s,2),l=p[0],d=p[1],u=function(){var e=Object(O.a)(Object(v.a)().mark((function e(n){var a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,_.a.get("https://api.open-meteo.com/v1/forecast?latitude=".concat(t,"&longitude=").concat(c,"&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m\n\n      "));case 3:a=e.sent,d(a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(W.jsxs)(q,{children:[Object(W.jsx)(G,{children:"CyWeather App"}),c&&t&&l?Object(W.jsx)(D,{weather:l,lat:t,long:c}):Object(W.jsx)(T,{updatelat:a,updatelong:o,fetchWeather:u})]})};g.a.render(Object(W.jsx)(f.a.StrictMode,{children:Object(W.jsx)(K,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.eca2cda2.chunk.js.map