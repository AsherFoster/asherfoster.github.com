(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8wRS":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){var e=i("qcjE");return{page:e.default||e}}])},qcjE:function(e,t,i){"use strict";i.r(t);var n=i("p0XB"),a=i.n(n);var s=i("XXOK"),r=i.n(s);function o(e,t){return function(e){if(a()(e))return e}(e)||function(e,t){var i=[],n=!0,a=!1,s=void 0;try{for(var o,c=r()(e);!(n=(o=c.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(l){a=!0,s=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=i("0iUn"),l=i("sLSF"),h=i("MI3g"),u=i("a7VT"),m=i("AT/M"),p=i("Tit0"),d=i("vYYK"),f=i("q1tI"),g=i.n(f),b=i("atfL"),v=i("YpTl"),k=i("YFqc"),w=i.n(k),y=g.a.createElement,I={a:{fontStyle:"normal",color:"inherit"},badge:{background:"#EDEDED",borderRadius:4,display:"inline-block",margin:2,padding:4}},T=function(e){var t=function(){return y("div",{style:I.badge},e.children)};return e.routerLink?y(w.a,{href:e.routerLink},y("a",{className:"subtle",style:I.a},y(t,null))):e.onClick||e.href?y("a",{className:"subtle",style:I.a,href:e.href||"#",onClick:e.onClick},y(t,null)):t()},j=i("FuoV"),S=i.n(j),N=g.a.createElement,C=[{name:"Canal",description:"I got sick of writing features for a bot, and built this to simplify it.",img:"/static/canal.png",techs:["Node.js","Kubernetes","Vue","PostgreSQL"],links:[["Homepage","//canal.nz"]]},{name:"This Site",description:"It's this site. I use it to demo that I can, in fact, make a website.",img:"/static/portfolio-site.png",techs:["Typescript","React","Next.js"],links:[["Github","//github.com/asherfoster/asherfoster.github.io"]]},{name:"Developster",description:"I was part of a team on a journey to kickstart young entrepreneurs",img:"/static/developster-blur.png",techs:["Angular","Azure"],links:[["Blog","//medium.com/Developster-Archive"]]},{name:"Experiments",description:"Testing out web technologies and publishing the results.",img:"/static/unicorns.png",techs:["Javascript","Travis","Luck"],links:[["Web","//asherfoster.com/experiments"],["Github","//github.com/asherfoster/experiments"]]},{name:"WTFSIW",description:"An ICT assessment gone crazy. Need a quick movie? Try it out.",img:"/static/wtfsiw.png",techs:["Node.js","Docker","Typescript","SQLite"],links:[["Web","//whatthefuckshouldiwatch.asherfoster.com"],["Github","//github.com/asherfoster/wtfsiw"]]},{name:"Admin Center",description:"A control panel to interface with my APIs in a pretty way.",img:"/static/frontend-blur.png",techs:["Typescript","Vue"],links:[["Github","//github.com/asherfoster/apis"]]},{name:"Discord Bots",description:"I've made a handful of discord bots, including my latest generation which dynamically runs scripts.",img:"/static/shortener-code.png",techs:["Typescript","Discord.js","Node.js"],links:[["Github","//github.com/pointlessdev/discordscriptbot"]]},{name:"APIs",description:"Back end systems for authentication and other things.",img:"/static/shortener-code.png",techs:["Node.js","Typescript","Azure","Docker"],links:[["Github","//github.com/asherfoster/apis"]]},{name:"HTTPS Proxy",description:"Somewhere blocked HTTPS on their network, so I built a proxy to get around it.",img:"/static/shortener-code.png",techs:["Node.js"],links:[["Github","//github.com/asherfoster/HTTPSProxy"]]},{name:"Lineage Checker",description:"I wanted to learn React, so I built a little app to check if a LineageOS build is available for a device.",img:"/static/lineage-checker.png",techs:["Javascript","React","React Native"],links:[["Mobile Version","//github.com/asherfoster/lineagecheckerapp"],["Web App","//github.com/asherfoster/lineagecheckerweb"]]},{name:"JS Canvas Stuff",description:"Building low level physics and game engines is a fun thing to do when I'm bored.",img:"/static/canvas.png",techs:["Javascript"],links:[["Minesweeper","//asherfoster.com/experiments/8"],["Physics!","//asherfoster.com/experiments/7"]]},{name:"Server Status",description:"I had a bunch of sites and a couple of screens. Why not make a status monitor!",img:"/static/frontend.png",techs:["Javascript","Angular.js","WebSockets"],links:[["Github","//github.com/asherfoster/serverstatus"]]}],O=[].concat.apply(["All"],C.map(function(e){return e.techs}));O=O.filter(function(e,t){return O.indexOf(e)===t}).sort();var A=function(e){function t(e){var i;return Object(c.a)(this,t),i=Object(h.a)(this,Object(u.a)(t).call(this,e)),Object(d.a)(Object(m.a)(i),"state",void 0),Object(d.a)(Object(m.a)(i),"filterChange",function(e){i.setFilter("All"===e.target.value?"":e.target.value)}),Object(d.a)(Object(m.a)(i),"hashChange",function(){var e=window.location.hash.substr(1);i.setState({filter:e,items:""===e?C:C.filter(function(t){return t.techs.includes(e)})})}),i.state={filter:"",items:C},i}return Object(p.a)(t,e),Object(l.a)(t,[{key:"setFilter",value:function(e){window.location.hash=e}},{key:"componentDidMount",value:function(){window.location.hash.length>1&&this.setFilter(window.location.hash.substr(1)),window.addEventListener("hashchange",this.hashChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.hashChange)}},{key:"render",value:function(){return N(b.a,{title:"My Portfolio",subtitle:"Look, I make things!"},N(v.a,null,N("h2",null,"Some of the work I've done"),N("p",null,"Over the years I've gained quite the collection of random projects. Most of them I don't do much with any more, but they've all been critical in me gaining the skills I have. Have a scroll, see what I can do, then most importantly: hire me."),N("div",{className:S.a.selection},N("label",{htmlFor:"tech-sort"},"Filter by Tech:")," ",N("select",{id:"tech-sort",value:this.state.filter,onChange:this.filterChange},O.map(function(e){return N("option",{key:e,value:e},e)}))),N("div",{className:S.a.portfolioGrid},0===this.state.items.length?N("p",null,"No projects match that filter ",N("a",{href:"#"},"Reset")):null,this.state.items.map(function(e){return N("section",{key:e.name,className:S.a.portfolioItem,style:{backgroundImage:"url(".concat(e.img,")")}},N("div",{className:S.a.itemText},N("h3",{className:"font-display"},e.name),N("p",null,e.description),N("div",{className:S.a.links},e.links.map(function(e,t){var i=o(e,2),n=i[0],a=i[1];return N(g.a.Fragment,{key:t},0!==t?" - ":"",N("a",{href:a},n))})),N("div",null,e.techs.map(function(e){return N(T,{key:e,href:"#"+e},e)}))),N("div",{className:S.a.itemShunt}))}))))}}]),t}(g.a.Component);t.default=A}},[["8wRS",1,0,2]]]);