(this["webpackJsonpcolorful-clock-react-app"]=this["webpackJsonpcolorful-clock-react-app"]||[]).push([[0],[,function(c,t,o){c.exports={red:"Clock_red__FNSfK",orange:"Clock_orange__g08Nw",yellow:"Clock_yellow__2Oykd",green:"Clock_green__3I-nv",dodgerblue:"Clock_dodgerblue__1TTcO",blue:"Clock_blue__MrOT9",purple:"Clock_purple__oc5vi",black:"Clock_black__3-RHQ",white:"Clock_white__2mhcQ",grey:"Clock_grey__3BBTz",wrapper:"Clock_wrapper__12Ygu"}},,,,,,function(c,t,o){c.exports={time:"Time_time__3hVYd",active:"Time_active__2Vr4F"}},function(c,t,o){c.exports={wrapper:"Hello_wrapper__1e7bJ"}},,,,,,,,,function(c,t,o){},function(c,t,o){},function(c,t,o){},function(c,t,o){"use strict";o.r(t);var l=o(0),e=o(2),k=o.n(e),s=o(4),i=o.n(s),r=(o(17),o(18),o(5)),a=o(6),n=o(11),h=o(9),g=o(7),b=o.n(g),j=o(10),d=o(1),u=o.n(d);var C=function(c){var t=(new Date).toLocaleTimeString(),o=(new Date).toDateString(),k=Object(e.useState)(t),s=Object(j.a)(k,2),i=(s[0],s[1]),r=Object(l.jsxs)("div",{className:u.a.wrapper,children:[Object(l.jsx)("h3",{children:"Current time and date:"}),Object(l.jsx)("h1",{children:t}),Object(l.jsx)("h2",{children:o})]});return setInterval((function(){t=(new Date).toLocaleTimeString(),i(t)}),1e3),"red"===c.bgc?Object(l.jsx)("div",{className:u.a.red,children:r}):"orange"===c.bgc?Object(l.jsx)("div",{className:u.a.orange,children:r}):"yellow"===c.bgc?Object(l.jsx)("div",{className:u.a.yellow,children:r}):"green"===c.bgc?Object(l.jsx)("div",{className:u.a.green,children:r}):"dodgerblue"===c.bgc?Object(l.jsx)("div",{className:u.a.dodgerblue,children:r}):"blue"===c.bgc?Object(l.jsx)("div",{className:u.a.blue,children:r}):"purple"===c.bgc?Object(l.jsx)("div",{className:u.a.dodgerblue,children:r}):"black"===c.bgc?Object(l.jsx)("div",{className:u.a.black,children:r}):"white"===c.bgc?Object(l.jsx)("div",{className:u.a.dodgerblue,children:r}):"grey"===c.bgc?Object(l.jsx)("div",{className:u.a.grey,children:r}):void 0},x=o(8),O=o.n(x);var w=function(){return Object(l.jsx)("div",{className:O.a.wrapper,children:"Hello world!"})},p=(o(19),function(c){Object(n.a)(o,c);var t=Object(h.a)(o);function o(c){var l;return Object(r.a)(this,o),(l=t.call(this,c)).toggleSwitchClock1=function(){l.setState({clock1:!l.state.clock1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock2=function(){l.setState({clock1:!1,clock2:!l.state.clock2,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock3=function(){l.setState({clock1:!1,clock2:!1,clock3:!l.state.clock3,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock4=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!l.state.clock4,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock5=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!l.state.clock5,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock6=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!l.state.clock6,clock7:!1,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock7=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!l.state.clock7,clock8:!1,clock9:!1,clock10:!1})},l.toggleSwitchClock8=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!l.state.clock8,clock9:!1,clock10:!1})},l.toggleSwitchClock9=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!l.state.clock9,clock10:!1})},l.toggleSwitchClock10=function(){l.setState({clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!l.state.clock10})},l.state={clock1:!1,clock2:!1,clock3:!1,clock4:!1,clock5:!1,clock6:!1,clock7:!1,clock8:!1,clock9:!1,clock10:!1,color:["red","orange","yellow","green","dodgerblue","blue","purple","black","white","grey"],clock1color:"red",clock2color:"orange",clock3color:"yellow",clock4color:"green",clock5color:"dodgerblue",clock6color:"blue",clock7color:"purple",clock8color:"black",clock9color:"white",clock10color:"grey"},l}return Object(a.a)(o,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:b.a.time,children:[Object(l.jsx)("button",{style:{backgroundColor:this.state.color[0],marginRight:"22px"},onClick:this.toggleSwitchClock1,children:"RED"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[1],marginRight:"22px"},onClick:this.toggleSwitchClock2,children:"ORANGE"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[2],marginRight:"22px"},onClick:this.toggleSwitchClock3,children:"YELLOW"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[3],marginRight:"22px",color:"white"},onClick:this.toggleSwitchClock4,children:"GREEN"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[4],marginRight:"22px",color:"white"},onClick:this.toggleSwitchClock5,children:"LIGHT BLUE"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[5],marginRight:"22px",color:"white"},onClick:this.toggleSwitchClock6,children:"BLUE"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[6],marginRight:"22px",color:"white"},onClick:this.toggleSwitchClock7,children:"PURPLE"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[7],marginRight:"22px",color:"white"},onClick:this.toggleSwitchClock8,children:"BLACK"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[8],marginRight:"22px"},onClick:this.toggleSwitchClock9,children:"WHITE"}),Object(l.jsx)("button",{style:{backgroundColor:this.state.color[9],marginRight:"22px",color:"white"},onClick:this.toggleSwitchClock10,children:"GREY"}),this.state.clock1||this.state.clock2||this.state.clock3||this.state.clock4||this.state.clock5||this.state.clock6||this.state.clock7||this.state.clock8||this.state.clock9||this.state.clock10?"":Object(l.jsx)(w,{}),this.state.clock1?Object(l.jsx)(C,{bgc:this.state.color[0]}):"",this.state.clock2?Object(l.jsx)(C,{bgc:this.state.color[1]}):"",this.state.clock3?Object(l.jsx)(C,{bgc:this.state.color[2]}):"",this.state.clock4?Object(l.jsx)(C,{bgc:this.state.color[3]}):"",this.state.clock5?Object(l.jsx)(C,{bgc:this.state.color[4]}):"",this.state.clock6?Object(l.jsx)(C,{bgc:this.state.color[5]}):"",this.state.clock7?Object(l.jsx)(C,{bgc:this.state.color[6]}):"",this.state.clock8?Object(l.jsx)(C,{bgc:this.state.color[7]}):"",this.state.clock9?Object(l.jsx)(C,{bgc:this.state.color[8]}):"",this.state.clock10?Object(l.jsx)(C,{bgc:this.state.color[9]}):""]})}}]),o}(e.Component));var _=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(p,{})})},S=function(c){c&&c instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(t){var o=t.getCLS,l=t.getFID,e=t.getFCP,k=t.getLCP,s=t.getTTFB;o(c),l(c),e(c),k(c),s(c)}))};i.a.render(Object(l.jsx)(k.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),S()}],[[20,1,2]]]);
//# sourceMappingURL=main.8c22afcd.chunk.js.map