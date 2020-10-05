(this["webpackJsonpprojectmanager-spa3"]=this["webpackJsonpprojectmanager-spa3"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"canonical":"https://markoangelovski.github.io/projectmanager-stage-v3","pmspa-api":{"api":"https://pmspa-api-stg.herokuapp.com","apiVersion":"v1","apiVersionBeta":"v1.1"},"CNAME":"","JBOTdataLayer":{"SiteLocalContainer":"GTM-NNWHRC6","GoogleAnalyticsLocal":"UA-179505223-1"}}')},75:function(e,t,n){e.exports=n(93)},81:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t),function(e){var t=n(20);e.exports=Object(t.a)({},n(29))}.call(this,n(60)(e))},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),o=n.n(c),l=n(15),s=n(5),i=(n(80),n(81),n(6)),u=n.n(i),m=n(8),d=n(21),f=n(73),p=n(31),E=n(9),h=n(74),v=function(e){var t=e.component,n=Object(h.a)(e,["component"]),a=Object(s.f)((function(e){return e})).isLoggedIn;return r.a.createElement(E.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(E.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},k=n(42),b=n(29).canonical,g=function(e){return r.a.createElement(k.a,null,e.title&&r.a.createElement("title",null,e.title),e.title&&r.a.createElement("meta",{name:"title",content:e.title}),e.title&&r.a.createElement("meta",{property:"og:title",content:e.title}),b&&r.a.createElement("link",{rel:"canonical",href:b}))},y=n(12),w=n(22),j=n(38),x=n(56),O=n(65),S=n(43),T=function(e){var t=Object(s.f)((function(e){return e})),n=t.dayStart,a=t.dayEnd,c=Object(s.e)((function(e){return e})),o=c.setDayStart,l=c.setDayEnd;return r.a.createElement(O.a,{className:""},r.a.createElement(w.a,{inline:!0,className:"d-inline-block",onSubmit:function(){var t=Object(m.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.callFunction(e.query);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(x.a,{size:"sm",className:""},r.a.createElement(j.a,{size:"sm",type:"date",className:"",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement(j.a,{size:"sm",type:"date",className:"",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement(x.a.Append,null,r.a.createElement(S.a,{size:"sm",type:"submit",variant:"outline-secondary",className:"dropdown-toggle"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar mr-1"},r.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),"Submit")))))},N=function(e){var t=e.callFunction,n=e.query,a=e.mainNav,c=e.secondNav;return r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "},r.a.createElement(y.a,{variant:"tabs",defaultActiveKey:window.location.hash.includes(c)?"link-1":"home",className:"w-50"},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{href:a,className:"nav-link",eventKey:"home"},e.children[0])),c&&r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{href:c,className:"nav-link",eventKey:"link-1"},e.children[1]))),n&&r.a.createElement(T,{callFunction:t,query:n}))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Just a Bunch of Tables | jBot"}),r.a.createElement(N,null,"homepage"))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Profile | jBot"}),r.a.createElement(N,null,"Profile"))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Projects | jBot"}),r.a.createElement(N,null,"Projects"))},D=n(66),C=n(70),M=n(14),H=n(27),F=n(18),P=n(19);function A(){var e=Object(F.a)(["\n  cursor: pointer;\n  float: right;\n\n  svg {\n    opacity: 0.5;\n    color: ",";\n  }\n"]);return A=function(){return e},e}var z=P.a.div(A(),(function(e){return e.done?"green":"red"})),Y=function(e){var t=e.done,n=e.taskId,a=e.taskTitle,c=Object(s.e)((function(e){return e})).editTask;return r.a.createElement(z,{done:t,onClick:function(){window.confirm('Mark task "'.concat(a,'" as ').concat(t?"not":""," done?"))&&c({taskId:n,payload:[{propName:"done",propValue:JSON.stringify(!t)}]})}},t?r.a.createElement(H.b,null):r.a.createElement(H.c,null))},W=function(e){var t=e.tasks;return r.a.createElement(C.a,null,t.map((function(e){return r.a.createElement(M.a,{key:e._id},r.a.createElement(M.a.Header,null,e.column,r.a.createElement(Y,{done:e.done,taskId:e._id,taskTitle:e.title})),r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,null,e.title),r.a.createElement(M.a.Subtitle,{className:"mb-2 text-muted"},e.pl),r.a.createElement(M.a.Text,null,e.description),r.a.createElement(M.a.Text,null,"Events: ",e.eventsCount||0," Notes: ",e.notesCount||0),e.kanboard&&r.a.createElement(M.a.Link,{href:e.kanboard,target:"_blank"},"Kanboard")),r.a.createElement(M.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.createdAt)))})))},V=function(){var e=Object(s.f)((function(e){return e})),t=e.taskDocs,n=e.taskDocsSkip,c=e.hasMoreTaskDocs,o=Object(s.e)((function(e){return e})).getTaskDocs,l=new URLSearchParams("skip=".concat(n)),i=window.location.hash.split("=")[1];"true"!==i&&"false"!==i||l.append("done",i),Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!t.length,!e.t0){e.next=4;break}return e.next=4,o(l);case 4:case"end":return e.stop()}}),e)})))()}),[]);var d=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(l);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=t.reduce((function(e,t){return e+t.tasks.length}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Tasks (".concat(f,") | jBot")}),r.a.createElement(N,{callFunction:!0,query:!0,mainNav:"#/tasks",secondNav:"#/tasks/booking"},"All tasks","Booking"),r.a.createElement(D.a,{dataLength:t.length,next:d,hasMore:c,loader:r.a.createElement("h4",null,"Loading...")},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("h5",null,e.project),r.a.createElement(W,{tasks:e.tasks}))}))))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Clock | jBot"}),r.a.createElement(N,null,"Clock"))},J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Calendar | jBot"}),r.a.createElement(N,null,"Calendar"))},G=n(25),K=n(71),R=n.n(K),U=function(e){var t=e.seriesData,n=e.type,c=0,o="";"worked"===n&&(c=Math.round(t/10*100),o="#008FFB"),"booked"!==n&&"pending"!==n||(c=Math.round(t/7.5*100),o="#00f970"),"pending"===n&&(o="#fcc202"),"overtime"===n&&(c=Math.round(t/2*100),o="#f90010");var l=Object(a.useState)([c]),s=Object(a.useState)({chart:{type:"radialBar"},colors:[o],plotOptions:{radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:-30,offsetY:-15,hollow:{margin:1,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#ededed",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},dataLabels:{show:!0,name:{show:!1,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10},value:{show:!0,fontSize:"9px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:5,formatter:function(e){return e+" %"}}}}}});return r.a.createElement("div",{style:{position:"absolute"}},r.a.createElement("div",{id:"chart"},r.a.createElement(R.a,{options:s[0],series:l[0],type:"radialBar",width:"120px",height:"120px"})))},_=function(e){return r.a.createElement(G.a,{xl:3,md:6},r.a.createElement(M.a,{className:"mb-3"},r.a.createElement(M.a.Body,null,r.a.createElement("div",{className:"float-left",dir:"ltr"},r.a.createElement(U,{seriesData:e.totalHours,type:e.type})),r.a.createElement("div",{className:"text-right"},r.a.createElement("h3",{className:"mb-1"},e.totalHours,r.a.createElement("small",{className:"text-muted"},"h")),r.a.createElement("p",{className:"text-muted mb-1"},e.children)))))},X=n(33),Q=n.n(X),Z=n(72);function $(){var e=Object(F.a)(["\n  white-space: nowrap;\n  display: flex;\n  justify-content: space-between;\n\n  svg {\n    opacity: 0.5;\n    cursor: pointer;\n    color: #007bff;\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(F.a)(["\n  > td {\n    border-top: 0;\n  }\n\n  span {\n    cursor: pointer;\n  }\n"]);return ee=function(){return e},e}var te=P.a.tr(ee()),ne=P.a.td($());function ae(){var e=Object(F.a)(["\n  cursor: pointer;\n\n  svg {\n    color: ",";\n  }\n"]);return ae=function(){return e},e}var re=P.a.div(ae(),(function(e){return e.booked?"green":"red"})),ce=function(e){var t=e.booked,n=e.eventId,a=e.eventTitle,c=Object(s.e)((function(e){return e})).editEvent;return r.a.createElement(re,{booked:t,onClick:function(){window.confirm('Mark event "'.concat(a,'" as ').concat(t?"not":""," booked?"))&&c({eventId:n,payload:[{propName:"booked",propValue:!t}]})}},t?r.a.createElement(H.b,null):r.a.createElement(H.c,null))},oe=function(e){var t=e.event,n=e.day,c=Object(a.useState)(!1),o=Object(d.a)(c,2),s=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement("span",{onClick:function(){return i(!s)}},t.title),r.a.createElement(ce,{booked:t.booked,eventId:t.eventId,eventTitle:t.title})),r.a.createElement("td",{style:{textAlign:"center"}},t.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement(ne,null,r.a.createElement(l.b,{to:"/stats/".concat(t.taskId)},t.task),t.kanboard&&r.a.createElement(H.a,{onClick:function(){return window.open("".concat(t.kanboard,"#d=").concat(n,"&t=").concat(t.duration),"","resizable=yes,scrollbars=yes,width=1024,height=768")}}))),s&&t.logs.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"text-muted"},"- ",e.title),r.a.createElement("td",{style:{textAlign:"center"}},e.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement("td",null))})))},le=function(e){var t=e.stat;return r.a.createElement(p.a,null,r.a.createElement(G.a,null,r.a.createElement(M.a,{className:"mb-3"},r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,null,Q()(t.date).format("dddd, MMMM Do YYYY")),r.a.createElement(Z.a,{striped:!0,hover:!0,responsive:!0,size:"sm",className:"mb-0"},r.a.createElement("colgroup",null,r.a.createElement("col",{style:{width:"50%"}}),r.a.createElement("col",{style:{width:"10%"}}),r.a.createElement("col",{style:{width:"40%"}})),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Event"),r.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Duration"),r.a.createElement("th",{scope:"col"},"Task"))),r.a.createElement("tbody",null,t.events.sort((function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()})).map((function(e,n){return r.a.createElement(oe,{key:n,event:e,day:Q()(t.day).format("DD-MM")})}))))))))},se=function(e){return e.dayStats.map((function(e){return r.a.createElement(a.Fragment,{key:e.date},r.a.createElement(p.a,null,r.a.createElement(_,{totalHours:e.totalHoursWorked,type:"worked"},"Hours worked"),r.a.createElement(_,{totalHours:e.totalHoursBooked,type:"booked"},"Hours booked"),r.a.createElement(_,{totalHours:e.totalHoursPendingBooking,type:"pending"},"Pending booking"),r.a.createElement(_,{totalHours:e.totalHoursOvertime,type:"overtime"},"Overtime")),r.a.createElement(le,{stat:e}))}))},ie=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,n=e.dayEnd,c=e.dayStats,o=e.statsFetched,l=Object(s.e)((function(e){return e})).getDayStats,i=new URLSearchParams("start=".concat(t,"&end=").concat(n));return Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!o,!e.t0){e.next=4;break}return e.next=4,l(i);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Day stats (".concat(c.length,") | jBot")}),r.a.createElement(N,{callFunction:l,query:i,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),r.a.createElement(se,{dayStats:c}))},ue=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Total days: ",t.totalDays),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total logs: ",t.totalLogs),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking),r.a.createElement("div",null,"Total hours overtime: ",t.totalHoursOvertime))},me=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,n=e.dayEnd,c=e.dayStatsTotal,o=Object(s.e)((function(e){return e})).getDayStatsTotal,l=new URLSearchParams("start=".concat(t,"&end=").concat(n,"&total=",!0));return Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(l);case 2:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{callFunction:o,query:l,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),c.map((function(e,t){return r.a.createElement(ue,{key:t,stat:e})})))},de=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Task: ",t.task),r.a.createElement("div",null,"Kanboard: ",t.kanboard),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking))},fe=function(e){var t=Object(s.f)((function(e){return e})),n=t.dayStart,c=t.dayEnd,o=t.taskStats,l=Object(s.e)((function(e){return e})),i=l.setTaskStats,d=l.getTaskStats,f=new URLSearchParams("start=".concat(n,"&end=").concat(c,"&id=").concat(e.match.params.projectId));return Object(a.useEffect)((function(){return Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:case"end":return e.stop()}}),e)})))(),function(){return i([])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"".concat(o[0]?o[0].task:"Task stats"," | jBot")}),r.a.createElement(N,{callFunction:d,query:f},"Task stats: ",o[0]&&o[0].task),o.map((function(e){return r.a.createElement(de,{key:e.task,stat:e})})))};function pe(){var e=Object(F.a)(["\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n"]);return pe=function(){return e},e}function Ee(){var e=Object(F.a)(["\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return Ee=function(){return e},e}function he(){var e=Object(F.a)(["\n  top: 0px;\n  bottom: 0px;\n  height: 100vh;\n  min-width: 250px;\n"]);return he=function(){return e},e}var ve=P.a.div(he()),ke=P.a.div(Ee()),be=P.a.div(pe()),ge=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!0),i=Object(d.a)(l,2),f=i[0],p=i[1],E=Object(a.useState)(""),h=Object(d.a)(E,2),v=h[0],k=h[1],b=Object(a.useState)(!0),y=Object(d.a)(b,2),j=y[0],x=y[1],O=Object(a.useState)(!1),T=Object(d.a)(O,2),N=T[0],I=T[1],L=Object(s.f)((function(e){return e})),B=L.isBackendAlive,D=L.isLoggedIn,C=Object(s.e)((function(e){return e})).logIn,M=function(){e.location.state?e.history.push(e.location.state.from.pathname):e.history.push("/")},H=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(!1),!f||!j){e.next=7;break}return e.next=5,C({email:c,password:v});case 5:e.sent?(I(!1),M()):(p(!0),x(!0),I(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){D&&M()}),[]),D?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Login | jBot"}),r.a.createElement(G.a,{md:{span:3,offset:6}},r.a.createElement(ve,null,r.a.createElement(ke,null,r.a.createElement(w.a,{onSubmit:H},r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{required:!0,size:"sm",type:"email",placeholder:"Email",value:c,onChange:function(e){return o(e.target.value)},onBlur:function(e){return c.length<6?p(!1):p(!0)}}),!f&&r.a.createElement(be,null,"Email needs to have at least 6 characters.")),r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{required:!0,size:"sm",type:"password",placeholder:"Password",value:v,onChange:function(e){return k(e.target.value)},onBlur:function(e){return v.length<6?x(!1):x(!0)}}),!j&&r.a.createElement(be,null,"Password needs to have at least 6 characters."),N&&r.a.createElement(be,null,"Invalid credentials. Please try again.")),r.a.createElement(S.a,{disabled:!B||!j||!f,variant:"primary",type:"submit",size:"sm"},"Submit"),!B&&r.a.createElement(be,null,"Service is currently down. Please try again later."))))))},ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Borked! | jBot"}),r.a.createElement(N,null,"borked"),r.a.createElement(l.b,{to:"/"},"Ho Gome"))},we=function(){return r.a.createElement(E.d,null,r.a.createElement(v,{exact:!0,path:"/",component:I}),r.a.createElement(v,{exact:!0,path:"/profile",component:L}),r.a.createElement(v,{exact:!0,path:"/projects",component:B}),r.a.createElement(v,{exact:!0,path:"/tasks",component:V}),r.a.createElement(v,{exact:!0,path:"/clock",component:q}),r.a.createElement(v,{exact:!0,path:"/calendar",component:J}),r.a.createElement(v,{exact:!0,path:"/stats",component:ie}),r.a.createElement(v,{exact:!0,path:"/stats/total",component:me}),r.a.createElement(v,{exact:!0,path:"/stats/:projectId",component:fe}),r.a.createElement(E.b,{exact:!0,path:"/login",component:ge}),r.a.createElement(E.b,{path:"*",component:ye}))},je=n(90).JBOTdataLayer.SiteLocalContainer,xe=function(){return r.a.createElement(k.a,null,r.a.createElement("script",null,'(function (w, d, s, l, i) {\n          w[l] = w[l] || [];\n          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n          var f = d.getElementsByTagName(s)[0],\n            j = d.createElement(s),\n            dl = l != "dataLayer" ? "&l=" + l : "";\n          j.async = true;\n          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n          f.parentNode.insertBefore(j, f);\n        })(window, document, "script", "dataLayer", "'.concat(je,'")')))},Oe=n(34),Se=(n(91),function(){var e=Object(s.f)((function(e){return e})).isLoggedIn,t=Object(s.e)((function(e){return e})).logOut;return e&&r.a.createElement(Oe.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md",className:"sticky-top flex-md-nowrap p-0 shadow"},r.a.createElement(Oe.a.Brand,{className:"col-md-3 col-lg-2 mr-0 px-3"},"jBot"),r.a.createElement(Oe.a.Toggle,{className:"position-absolute","aria-controls":"sidebarMenu",onClick:function(){document.getElementById("sidebarMenu").classList.toggle("show")}}),r.a.createElement("input",{className:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement(y.a,{as:"ul",className:"px-3"},r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(y.a.Link,{onClick:function(){return t()}},"Logout"))))}),Te=(n(92),function(){var e=function(e){var t=document.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active"),document.getElementById("sidebarMenu").classList.remove("show")};return Object(s.f)((function(e){return e})).isLoggedIn&&r.a.createElement(Oe.a,{id:"sidebarMenu",expand:!1,className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},r.a.createElement("div",{className:"sidebar-sticky pt-3"},r.a.createElement(y.a,{as:"ul",navbar:!1,className:"flex-column"},r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Home")),r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/profile"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-users"},r.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),r.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})),"Profile")),r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/projects"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-layers"},r.a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),r.a.createElement("polyline",{points:"2 17 12 22 22 17"}),r.a.createElement("polyline",{points:"2 12 12 17 22 12"})),"Projects")),r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/tasks?done=false"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file"},r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"})),"Tasks")),r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/clock"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Clock")),r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/calendar"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Calendar")),r.a.createElement(y.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/stats"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bar-chart-2"},r.a.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),r.a.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),r.a.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"})),"Stats")))))}),Ne=function(e){return console.log("I'm being rendered! Layout"),r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,null),r.a.createElement(Se,null),r.a.createElement(f.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(Te,null),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-md-4"},r.a.createElement(we,null)))))},Ie=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(s.e)((function(e){return e})).checkAuth;return Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:c(!0);case 3:case"end":return e.stop()}}),e)})))()}),[]),n?r.a.createElement(Ne,null):null},Le=n(20),Be=n(29)["pmspa-api"],De=Be.api,Ce=Be.apiVersion,Me=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(a);case 3:if((r=t.sent).status>=500&&n.setIsBackendAlive(!1),r.error){t.next=10;break}return n.setIsLoggedIn(!0),t.abrupt("return",!0);case 10:return n.setIsLoggedIn(!1),t.abrupt("return",!1);case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(0),console.warn(t.t0),n.setIsLoggedIn(!1),n.setIsBackendAlive(!1),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n){return t.apply(this,arguments)}}()},He=Me((function(e){return new Promise((function(t,n){fetch("".concat(De,"/").concat(Ce,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))})),Fe=Me((function(){var e;return new Promise((function(t,n){fetch("".concat(De,"/").concat(Ce,"/auth"),{method:"POST",credentials:"include"}).then((function(t){return e=t.status,t.json()})).then((function(n){return t(Object(Le.a)({status:e},n))})).catch((function(e){return n(e)}))}))})),Pe=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){fetch("".concat(De,"/").concat(Ce,"/auth/logout"),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}));case 3:if(e.sent.error){e.next=9;break}return t.setIsLoggedIn(!1),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),Ae=n(57),ze=n(29)["pmspa-api"],Ye=ze.api,We=ze.apiVersion,Ve=function(e){return new Promise((function(t,n){fetch("".concat(Ye,"/").concat(We,"/stats/tasks?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},qe=function(e,t){return new Promise((function(n,a){fetch("".concat(Ye,"/").concat(We,"/tasks/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))},Je=function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ve(n);case 3:(a=e.sent).error||(t.setTaskDocs(a.docs),t.setHasMoreTaskDocs(a.stats)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.taskId,r=n.payload,e.prev=1,e.next=4,qe(a,r);case 4:e.sent.error||t.updateTaskDocs({taskId:a,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Ke=n(29)["pmspa-api"],Re=Ke.api,Ue=Ke.apiVersion,_e=function(e,t){return new Promise((function(n,a){fetch("".concat(Re,"/").concat(Ue,"/days/event.update/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))},Xe=function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.eventId,r=n.payload,e.prev=1,e.next=4,_e(a,r);case 4:e.sent.error||t.updateEvent({eventId:a,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Qe=n(29)["pmspa-api"],Ze=Qe.api,$e=Qe.apiVersion,et=function(e){return new Promise((function(t,n){fetch("".concat(Ze,"/").concat($e,"/stats/day?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},tt=function(e,t){return function(){var n=Object(m.a)(u.a.mark((function n(a,r){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(r);case 3:(c=n.sent).error||a[t](c.stats),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()},nt=tt(et,"setDayStats"),at=tt(et,"setDayStatsTotal"),rt=tt((function(e){return new Promise((function(t,n){fetch("".concat(Ze,"/").concat($e,"/stats/task?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}),"setTaskStats"),ct=function(e){return function(t,n){t.statsFetched=!0,t[e]=n}},ot=ct("dayStats"),lt=ct("dayStatsTotal"),st=ct("taskStats"),it=Object(s.c)({isBackendAlive:!0,isLoggedIn:!1,taskDocs:[],taskDocsSkip:0,hasMoreTaskDocs:!1,dayStart:Q()().startOf("week").format("YYYY-MM-DD"),dayEnd:Q()().format("YYYY-MM-DD"),statsFetched:!1,dayStats:[],dayStatsTotal:[],taskStats:[],logIn:Object(s.d)((function(e,t){return He(e,t)})),logOut:Object(s.d)((function(e){return Pe(e)})),checkAuth:Object(s.d)((function(e,t){return Fe(e,t)})),getTaskDocs:Object(s.d)((function(e,t){return Je(e,t)})),editTask:Object(s.d)((function(e,t){return Ge(e,t)})),editEvent:Object(s.d)((function(e,t,n){return Xe(e,t,n)})),getDayStats:Object(s.d)((function(e,t){return nt(e,t)})),getDayStatsTotal:Object(s.d)((function(e,t){return at(e,t)})),getTaskStats:Object(s.d)((function(e,t){return rt(e,t)})),setIsBackendAlive:Object(s.b)((function(e,t){return function(e,t){e.isBackendAlive=t}(e,t)})),setIsLoggedIn:Object(s.b)((function(e,t){return function(e,t){e.isLoggedIn=t}(e,t)})),setTaskDocs:Object(s.b)((function(e,t){return function(e,t){e.taskDocsSkip+=20,e.taskDocs=[].concat(Object(Ae.a)(e.taskDocs),Object(Ae.a)(t))}(e,t)})),setHasMoreTaskDocs:Object(s.b)((function(e,t){return function(e,t){e.hasMoreTaskDocs=!!t.remaining}(e,t)})),updateTaskDocs:Object(s.b)((function(e,t){return function(e,t){var n=t.taskId,a=t.payload.reduce((function(e,t){return e[t.propName]=t.propValue,e}),{});e.taskDocs=e.taskDocs.map((function(e){return e.tasks=e.tasks.map((function(e){return e._id===n?Object(Le.a)(Object(Le.a)({},e),a):e})),e}))}(e,t)})),setDayStart:Object(s.b)((function(e,t){return function(e,t){e.dayStart=t}(e,t)})),setDayEnd:Object(s.b)((function(e,t){return function(e,t){e.dayEnd=t}(e,t)})),updateEvent:Object(s.b)((function(e,t){return function(e,t){var n=t.eventId,a=t.payload.reduce((function(e,t){return e[t.propName]=t.propValue,e}),{});e.dayStats=e.dayStats.map((function(e){return e.events=e.events.map((function(e){return e.eventId===n?Object(Le.a)(Object(Le.a)({},e),a):e})),e}))}(e,t)})),setDayStats:Object(s.b)((function(e,t){return ot(e,t)})),setDayStatsTotal:Object(s.b)((function(e,t){return lt(e,t)})),setTaskStats:Object(s.b)((function(e,t){return st(e,t)}))});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{store:it},r.a.createElement(Ie,null)))),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.09db126f.chunk.js.map