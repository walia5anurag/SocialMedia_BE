(this.webpackJsonpzoot=this.webpackJsonpzoot||[]).push([[0],{109:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),i=(t(85),t(63)),c=t(10),m=t(62),s=t(33),u=t(34),d=t(44),p=t(43),h=t(147),g=t(146),E=t(141),v=t(143),f=t(139),b=t(142),w=t(145),y=t(140),k=t(42),x=t.n(k),N=t(113),j=t(4),C=function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},O=t(35),W=t.n(O);function S(){return r.a.createElement("div",null," ",r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Made by Anurag Walia"),r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(f.a,{color:"inherit",href:"https://www.linkedin.com/in/anurag-walia-610265157/"},"LinkedIn Profile")," "))}var q=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handler=function(e){n.setState(Object(m.a)({},e.target.value,e.target.name))},n.handleLogin=function(){W.a.post("http://localhost:8080/signin",{email:n.state.email,password:n.state.password}).then((function(e){return console.log(e)}))},n.state={email:"",password:""},n}return Object(u.a)(t,[{key:"render",value:function(){console.log(this.state.email,this.state.password);var e=this.props.classes;return r.a.createElement(y.a,{container:!0,component:"main",className:e.root},r.a.createElement(E.a,null),r.a.createElement(y.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar},r.a.createElement(x.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:this.handler,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:this.handler,autoComplete:"current-password"}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.handleLogin},"Sign In"),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:!0},r.a.createElement(f.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(y.a,{item:!0},r.a.createElement(f.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(w.a,{mt:5},r.a.createElement(S,null))))))}}]),t}(n.Component),I=Object(j.a)(C)(q);function F(){return r.a.createElement("div",null," ",r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Made by Anurag Walia"),r.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(f.a,{color:"inherit",href:"https://www.linkedin.com/in/anurag-walia-610265157/"},"LinkedIn Profile")," "))}var P=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),n=a.call(this,e),W.a.get("http://localhost:8080/").then((function(e){console.log(e)})),n}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(y.a,{container:!0,component:"main",className:e.root},r.a.createElement(E.a,null),r.a.createElement(y.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar},r.a.createElement(x.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Register For Zoot!"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Enter Your Name",name:"name",handler:this.state.name,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,handler:this.state.email}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Register Me"),r.a.createElement(w.a,{mt:5},r.a.createElement(F,null))))))}}]),t}(n.Component),A=Object(j.a)(C)(P);t(109);var L=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/register",component:A}),r.a.createElement(c.a,{path:"/",exact:!0,component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,t){e.exports=t(112)},85:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.9abef1af.chunk.js.map