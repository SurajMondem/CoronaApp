(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,a,t){e.exports=t(47)},37:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),c=t.n(i),o=(t(37),t(11)),s=t(12),l=t(16),d=t(13),m=t(15),u=t(78),h=t(72),v=t(48),E=t(80),g=t(79),p=(t(38),t(17)),f=t.n(p),b=t(21),N=(t(40),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,content:null},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var a,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports",e.next=3,fetch("https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,this.setState({content:t.summaryStats,loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,"Loading..."):this.state.loading?r.a.createElement("div",null,"didn't get the Data"):(console.log(this.state.content.global),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"box-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"title"},"GLOBAL")),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Confirmed"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"confirmed"},this.state.content.global.confirmed))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Recovered"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"recovered"},this.state.content.global.recovered))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Deaths"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"deaths"},this.state.content.global.deaths)))),r.a.createElement("div",{className:"box-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"title"},"CHINA")),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Confirmed"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"confirmed"},this.state.content.china.confirmed))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Recovered"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"recovered"},this.state.content.china.recovered))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Deaths"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"deaths"},this.state.content.china.deaths)))),r.a.createElement("div",{className:"box-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"title"},"NON-CHINA")),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Confirmed"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"confirmed"},this.state.content.nonChina.confirmed))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Recovered"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"recovered"},this.state.content.nonChina.recovered))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Deaths"),r.a.createElement("div",{className:"data-box"},r.a.createElement("div",{className:"data",id:"deaths"},this.state.content.nonChina.deaths))))))}}]),a}(n.Component)),y=t(20),C=t(73),w=t(77),D=t(76),x=t(71),_=t(74),j=t(75);t(41);function k(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}k("Frozen yoghurt",159,6,24,4),k("Ice cream sandwich",237,9,37,4.3),k("Eclair",262,16,24,6),k("Cupcake",305,3.7,67,4.3),k("Gingerbread",356,16,49,3.9);var O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={loading:!0,content:[]},t.onSort=t.onSort.bind(Object(y.a)(t)),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"onSort",value:function(e,a){var t=this.state.content;console.log(a+":SortKey"),t.sort((function(e,t){return e[a].toString().localeCompare(t[a]).toString()})),this.setState({data:t})}},{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var a,t,n,r,i,c,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports",e.next=3,fetch("https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports");case 3:return a=e.sent,e.next=6,a.json();case 6:for(t=e.sent,n=[],r=[],i=0;i<t.rawData.length;i++)if(-1===n.indexOf(t.rawData[i]["Country/Region"]))n.push(t.rawData[i]["Country/Region"]),c=t.rawData[i]["Last Update"].split("T")[0],o=t.rawData[i]["Last Update"].split("T")[1],t.rawData[i]["Last Update Date"]=c,t.rawData[i]["Last Update Time"]=o,r.push(t.rawData[i]);else for(console.log(r[0]),s=0;s<=r.length-1;s++)console.log('uniqueData[j]["Country/Region"]',r[s]["Country/Region"]),console.log('data.rawData[i]["Country/Region"]',t.rawData[i]["Country/Region"]),r[s]["Country/Region"]===t.rawData[i]["Country/Region"]&&(console.log("matched"),r[s].Confirmed=parseInt(r[s].Confirmed)+parseInt(t.rawData[i].Confirmed),r[s].Recovered=parseInt(r[s].Recovered)+parseInt(t.rawData[i].Recovered),r[s].Deaths=parseInt(r[s].Deaths)+parseInt(t.rawData[i].Deaths));console.log(r),this.setState({content:r,loading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement("div",null,"Loading..."):this.state.loading?r.a.createElement("div",null,"didn't get the Data"):(console.log(this.state.content[1]["Country/Region"]),r.a.createElement("div",{className:"datatable-table"},r.a.createElement(x.a,{className:"datatable",component:h.a},r.a.createElement(C.a,{"aria-label":"simple table",style:{minWidth:"650"}},r.a.createElement(_.a,null,r.a.createElement(j.a,null,r.a.createElement(D.a,null,"Country"),r.a.createElement(D.a,{align:"right",onClick:function(a){return e.onSort(a,"Confirmed")}},"Confirmed"),r.a.createElement(D.a,{align:"right",onClick:function(a){return e.onSort(a,"Deaths")}},"Deaths"),r.a.createElement(D.a,{align:"right",onClick:function(a){return e.onSort(a,"Recovered")}},"Recovered"),r.a.createElement(D.a,{align:"right"},"Last Updated Date"),r.a.createElement(D.a,{align:"right"},"Last Updated Time"))),r.a.createElement(w.a,null,this.state.content.map((function(e){return r.a.createElement(j.a,{key:e["Country/Region"]},r.a.createElement(D.a,{component:"th",scope:"row"},e["Country/Region"]),r.a.createElement(D.a,{align:"right"},e.Confirmed),r.a.createElement(D.a,{id:"deaths",align:"right"},e.Deaths),r.a.createElement(D.a,{id:"recovered",align:"right"},e.Recovered),r.a.createElement(D.a,{align:"right"},e["Last Update Date"]),r.a.createElement(D.a,{align:"right"},e["Last Update Time"]))})))))))}}]),a}(n.Component),R=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main",style:{width:"100%",height:"100%",backgroundColor:"white"}},r.a.createElement(u.a,{container:!0,justify:"center",style:{display:"flex",position:"relative"}},r.a.createElement(u.a,{item:!0,xs:12,container:!0,spacing:0,justify:"center"},r.a.createElement(u.a,{item:!0,xs:12,style:{backgroundColor:"#212529"}},r.a.createElement(h.a,{style:{padding:"15px",width:"100%",textAlign:"center",backgroundColor:"#212529",color:"white",margin:"0",boxShadow:"3px 3px 9px rgba(0,0,0,0.3)"}},r.a.createElement(v.a,{variant:"h5"}," Corona Virus (Covid-19) Outbreak of World "))),r.a.createElement("div",{style:{width:"100%",alignContent:"center",padding:"20px"}},r.a.createElement(E.a,{severity:"error"},r.a.createElement(g.a,null,"Slow?"),"There may be intermittent outage due to the high number of users. We are giving our best to keep up with this high demand. Sorry for Inconvenience.")),r.a.createElement(u.a,{container:!0,item:!0,xs:10,justify:"center",style:{margin:"20px",textAlign:"center",backgroundColor:"white"}},r.a.createElement(N,null)))),r.a.createElement("div",{className:"datatable-title"},r.a.createElement("h2",{className:"datatable-header"},"Confirmed Cases and Deaths by Country, Territory")),r.a.createElement("div",{className:"datatable-container"},r.a.createElement(O,null)),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-content"},r.a.createElement("div",{className:"footer-title"},"DISCLAIMER"),r.a.createElement("div",{className:"footer-data"},"@Website is a privately owned website that is not owned or operated by any state or federal government agency. We have compiled these data using public information available in National/Local Media and Information released by State/Federal Agencies (CDC, DHS). Provided Information may not be accurate. Please refer to CDC for any official information. contact us at admin@Website for any other inquiries."))))}}]),a}(n.Component);t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c456d2e2.chunk.js.map