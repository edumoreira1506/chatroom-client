(this["webpackJsonpchatroom-client"]=this["webpackJsonpchatroom-client"]||[]).push([[0],{45:function(e,t,n){e.exports=n(86)},77:function(e,t){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(40),r=n.n(c),m=n(14),u=n(7),s=n(15),i=n(41),l=n.n(i),f=function(){return Boolean(g())},g=function(){return window.localStorage.getItem("username")},p=function(e,t){var n=l.a.connect("https://chatroom-server-edumoreira1506.herokuapp.com/");n.on("connect",(function(){t.onConnected(n),n.on("message",(function(e){t.onMessage(e)}))}))},h=function(e){return g()===e},E=function(e){var t=e.component,n=Object(s.a)(e,["component"]),a=f(),c=g();return o.a.createElement(u.b,Object.assign({},n,{render:function(e){return a?o.a.createElement(t,Object.assign({},e,{username:c})):o.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},_=function(e){var t=e.component,n=Object(s.a)(e,["component"]),a=f();return o.a.createElement(u.b,Object.assign({},n,{render:function(e){return a?o.a.createElement(u.a,{to:{pathname:"/chat",state:{from:e.location}}}):o.a.createElement(t,e)}}))},b=n(10),d=(n(84),function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1];return o.a.createElement("section",{className:"Login"},o.a.createElement("div",{className:"Login__title"},o.a.createElement("h2",{className:"Login__title-text"},"MultroomChat - Login")),o.a.createElement("div",{className:"Login__form-area"},o.a.createElement("form",{className:"Login__form",onSubmit:function(e){e.preventDefault(),p(0,{onConnected:function(){window.localStorage.setItem("username",n),window.location.href="chat"}})}},o.a.createElement("input",{className:"Login__input",type:"text",placeholder:"Nome aleat\xf3rio ai caraio",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),o.a.createElement("input",{className:"Login__input",type:"submit",value:"Submit",required:!0}))))}),v=n(24),C=n(44),N=n.n(C),j=function(e){return Boolean(e)},O=(n(85),function(e){var t=e.username;return N()("Chat__message",{"Chat__message--black":h(t),"Chat__message--grey":!h(t)})}),S=function(e){var t=e.username,n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],m=c[1],u=Object(a.useState)([{username:"Pedro",message:"alo"}]),s=Object(b.a)(u,2),i=s[0],l=s[1],f=Object(a.useState)(null),g=Object(b.a)(f,2),h=g[0],E=g[1];Object(a.useEffect)((function(){p(0,{onConnected:function(e){E(e)},onMessage:_})}),[t]);var _=function(e){console.log(i),console.log(e);var t=Object(v.a)(i);l([].concat(Object(v.a)(t),[e]))},d=function(e){!function(e,t){j(e)?t.onValidated():t.onError("Tamanho da mensagem inv\xe1lida!")}(e,{onError:function(e){return alert(e)},onValidated:function(){var n=function(e,t){return{username:e,message:t}}(t,e);h.emit("message",n),_(n)}})};return o.a.createElement("section",{className:"Chat"},o.a.createElement("ul",{className:"Chat__content"},i.map((function(e,t){return o.a.createElement("li",{className:O(e),key:t},o.a.createElement("div",{className:"Chat__username"},e.username),o.a.createElement("div",{className:"Chat__message-text"},e.message))}))),o.a.createElement("div",{className:"Chat__submit-area"},o.a.createElement("form",{className:"Chat__form",onSubmit:function(e){e.preventDefault(),d(r)}},o.a.createElement("input",{type:"text",className:"Chat__input",value:r,onChange:function(e){return m(e.target.value)}}),o.a.createElement("input",{type:"submit",className:"Chat__submit-button"}))))},w=function(){return o.a.createElement(m.a,null,o.a.createElement(u.d,null,o.a.createElement(_,{path:"/",exact:!0,component:d}),o.a.createElement(_,{path:"/login",exact:!0,component:d}),o.a.createElement(E,{path:"/chat",exact:!0,component:S})))};r.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.257ce824.chunk.js.map