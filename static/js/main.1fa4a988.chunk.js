(this["webpackJsonpkwitter-starter"]=this["webpackJsonpkwitter-starter"]||[]).push([[0],{85:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(23),c=n.n(s),u=(n(85),n(86),n(17)),i=n(10),o=n(47),l=n(8),j=n.n(l),d=n(19),b=n(52),h=n(12),f=n(75),m=n(76),p={users:{}},x="https://socialapp-api.herokuapp.com/",O=function(e,t){return fetch(x+"auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()}))},g=function(e,t){return fetch(x+"messages/"+t,{method:"DELETE",headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()}))},v=function(e,t){return fetch(x+"likes",{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify({messageId:t})}).then((function(e){return e.json()}))},k=function(e,t,n){var r=[];return void 0!==e&&r.push("limit="+e),void 0!==t&&r.push("offset="+t),void 0!==n&&r.push("username="+n),r=0===r.length?"":"?"+r.join("&"),fetch(x+"messages"+r).then((function(e){return e.json()}))},y=function(e,t,n,r,a){return fetch(x+"users/"+t,{method:"PATCH",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify({password:r,about:a,displayName:n})}).then((function(e){return e.json()}))},w=function(e,t){return fetch(x+"messages",{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify({text:t})}).then((function(e){return e.json()}))},N=function(e,t,n){return fetch(x+"users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,displayName:t,password:n})}).then((function(e){return e.json()}))},C=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=p.users[e];if(n&&t)return n;var r=fetch(x+"users/"+e).then((function(e){return e.json()})).then(function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t.user.username);case 2:return t.user.pictureRaw=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return p.users[e]=r,r},S=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"users/".concat(t,"/picture"));case 2:if(!(n=e.sent).ok){e.next=13;break}return e.t0=T,e.next=7,n.blob();case 7:return e.t1=e.sent,e.next=10,(0,e.t0)(e.t1);case 10:return e.abrupt("return",e.sent);case 13:return e.abrupt("return","/kwitter-infinitymeme/placeholder.png");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){return new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onload=function(){t(r.result)},r.readAsDataURL(e)}))},M=function(e,t){return fetch(x+"users/"+t,{method:"DELETE",headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()}))},E=function(e,t){return fetch(x+"likes/"+t,{method:"DELETE",headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()}))},A=function(e,t,n){return{id:String(Number(new Date))+e,header:t,body:n}},D=Object(f.a)(Object(m.devtools)((function(e){return{user:{token:""},login:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,r);case 2:if(!(a=t.sent).username){t.next=11;break}return t.next=6,C(a.username,!1);case 6:return s=t.sent,e((function(e){return{user:Object(b.a)(Object(b.a)({},a),s.user)}})),t.abrupt("return",!0);case 11:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error signing in",a.message)])}})),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),logout:function(){var t=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=n.user.token,fetch(x+"auth/logout",{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.json()}));case 2:if(200!==(r=t.sent).statusCode){t.next=8;break}return e((function(e){return{user:{token:""}}})),t.abrupt("return",!0);case 8:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error signing out",r.message)])}})),t.abrupt("return",!1);case 10:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),signup:function(){var t=Object(h.a)(j.a.mark((function t(n,r,a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(n,r,a);case 2:if(200!==(s=t.sent).statusCode){t.next=7;break}return t.abrupt("return",!0);case 7:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error creating account",s.message)])}})),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),edit:function(){var t=Object(h.a)(j.a.mark((function t(n,r,a,s,c){var u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,r,a,s,c);case 2:if(200!==(u=t.sent).statusCode){t.next=7;break}return t.abrupt("return",!0);case 7:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error updating account",u.message)])}})),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(e,n,r,a,s){return t.apply(this,arguments)}}(),deleteAccount:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(n,r);case 2:if(200!==(a=t.sent).statusCode){t.next=8;break}return e((function(e){return{user:{token:""}}})),t.abrupt("return",!0);case 8:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error deleting account",a.message)])}})),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),messages:[],lastMessagesUser:void 0,removeMessage:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n,r);case 2:if(200!==(a=t.sent).statusCode){t.next=8;break}return e((function(e){return{messages:e.messages.filter((function(e){return e.id!==r}))}})),t.abrupt("return",!0);case 8:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error deleting message",a.message)])}})),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),addMessage:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,r);case 2:if(200!==(a=t.sent).statusCode){t.next=8;break}return e((function(e){return{messages:[a.message].concat(Object(d.a)(e.messages))}})),t.abrupt("return",!0);case 8:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error posting message",a.message)])}})),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),loadMoreMessages:function(t){return e(function(){var n=Object(h.a)(j.a.mark((function n(r){var a,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.lastMessagesUser!==t,n.next=3,k(10,a?0:r.messages.length,t);case 3:(s=n.sent).messages.length>0?e((function(e){return{messages:[].concat(Object(d.a)(a?[]:e.messages),Object(d.a)(s.messages)),lastMessagesUser:t,hasMore:!0}})):e((function(e){return{hasMore:!1}}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},clearMessages:function(){return e((function(e){return{messages:[]}}))},hasMore:!0,likeMessage:function(){var t=Object(h.a)(j.a.mark((function t(n,r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,r);case 2:if(200!==(a=t.sent).statusCode){t.next=8;break}return e((function(e){var t=e.messages.findIndex((function(e){return e.id===r})),n=Object(b.a)({},e.messages[t]);n.likes=[].concat(Object(d.a)(n.likes),[a.like]);var s=Object(d.a)(e.messages);return s.splice(t,1,n),{messages:s}})),t.abrupt("return",!0);case 8:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error liking message",a.message)])}})),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),unlikeMessage:function(){var t=Object(h.a)(j.a.mark((function t(n,r,a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n,a);case 2:if(200!==(s=t.sent).statusCode){t.next=8;break}return e((function(e){var t=e.messages.findIndex((function(e){return e.id===r})),n=Object(b.a)({},e.messages[t]);n.likes=n.likes.filter((function(e){return e.id!==s.id}));var a=Object(d.a)(e.messages);return a.splice(t,1,n),{messages:a}})),t.abrupt("return",!0);case 8:return e((function(e){return{alerts:[].concat(Object(d.a)(e.alerts),[A(e.alerts.length,"Error liking message",s.message)])}})),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),alerts:[],removeAlert:function(t){return e((function(e){return{alerts:e.alerts.filter((function(e){return e.id!==t}))}}))},clearAlerts:function(){return e((function(e){return{alerts:[]}}))}}}))),P=n(13),R=n(45),L=n(16),F=n(1);var B=function(e){var t=D((function(e){return e.user})),n=D((function(e){return e.logout}));return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(R.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(F.jsx)(R.a.Brand,{className:"mr-auto",as:P.b,to:"/",children:"Kwitter Feed"}),t.token?Object(F.jsxs)(o.a,{className:"invisible-dropdown",children:[Object(F.jsx)(o.a.Toggle,{variant:"none",children:Object(F.jsxs)("div",{className:"userheader",children:[Object(F.jsxs)("div",{children:[Object(F.jsx)(L.a.Title,{children:t.displayName||"Display Name"}),Object(F.jsxs)(L.a.Subtitle,{className:"mb-2 text-muted",children:["@",t.username]})]}),Object(F.jsx)("img",{width:64,height:64,className:"ml-3",src:t.pictureRaw,alt:"Profile Pic"})]})}),Object(F.jsxs)(o.a.Menu,{children:[Object(F.jsx)(o.a.Item,{as:P.b,to:"/user/"+t.username,children:"Profile"}),Object(F.jsx)(o.a.Item,{onClick:function(){n()},children:"Sign Out"})]})]}):Object(F.jsx)(P.b,{to:"/login",children:Object(F.jsx)(i.a,{variant:"outline-primary",children:"Sign In"})})]})})},G=n(14),U=n(80),W=n(78);var z=function(e){var t=Object(r.useState)({}),n=Object(G.a)(t,2),a=n[0],s=n[1];return Object(r.useEffect)((function(){C(e.like.username).then((function(e){return s(e.user)}))}),[e.like.username]),Object(F.jsx)(U.a,{delay:100,overlay:Object(F.jsxs)(W.a,{children:["@",e.like.username]}),children:Object(F.jsx)(P.b,{to:"/user/"+e.like.username,children:Object(F.jsx)("img",{width:32,height:32,src:a.pictureRaw,alt:""})})})},I=n(61);var J=function(e){return Object(F.jsxs)(F.Fragment,{children:[e.spinWhen&&Object(F.jsx)(I.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",Object(F.jsx)("span",{children:e.children})]})};var H=function(e){var t,n=D((function(e){return e.user})),a=D((function(e){return e})),s=a.removeMessage,c=a.likeMessage,u=a.unlikeMessage,o=Object(r.useState)({}),l=Object(G.a)(o,2),d=l[0],b=l[1],f=Object(r.useState)(!1),m=Object(G.a)(f,2),p=m[0],x=m[1],O=Object(r.useState)(!1),g=Object(G.a)(O,2),v=g[0],k=g[1],y=Object(r.useState)(!1),w=Object(G.a)(y,2),N=w[0],S=w[1];function T(){return(T=Object(h.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.next=3,c(n.token,e.message.id);case 3:k(!1);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return(M=Object(h.a)(j.a.mark((function t(r){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),a=e.message.likes.find((function(e){return e.username===n.username})).id,t.next=4,u(n.token,e.message.id,a);case 4:S(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(h.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.next=3,s(n.token,e.message.id);case 3:if(t.sent){t.next=5;break}x(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){C(e.message.username).then((function(e){return b(e.user)}))}),[e.message.username]),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(L.a,{className:"message-item mt-4",style:{opacity:p?.5:1},children:[Object(F.jsxs)(L.a.Body,{children:[Object(F.jsxs)("div",{className:"userheader pb-4",children:[Object(F.jsx)(P.b,{to:"/user/"+d.username,children:Object(F.jsx)("img",{width:64,height:64,className:"mr-3",src:d.pictureRaw,alt:""})}),Object(F.jsxs)("div",{children:[Object(F.jsx)(P.b,{to:"/user/"+d.username,children:Object(F.jsx)(L.a.Title,{children:d.displayName})}),Object(F.jsx)(P.b,{to:"/user/"+d.username,children:Object(F.jsxs)(L.a.Subtitle,{className:"mb-2 text-muted",children:["@",e.message.username]})})]}),Object(F.jsx)("div",{children:e.message.username===n.username&&Object(F.jsx)("span",{children:Object(F.jsx)(i.a,{variant:"outline-danger",onClick:function(e){return E.apply(this,arguments)},disabled:p||v||N,className:"ml-2",children:Object(F.jsx)(J,{spinWhen:p,children:"Delete"})})})})]}),Object(F.jsx)(L.a.Text,{className:"mt-3",children:e.message.text}),Object(F.jsxs)(L.a.Text,{className:"text-muted text-sm datebar",children:["Posted ",(t=new Date(e.message.createdAt),t.toLocaleDateString([],{year:"numeric",month:"short",day:"numeric"})+" at "+t.toLocaleTimeString([],{timeStyle:"short"}))]})]}),Object(F.jsxs)(L.a.Footer,{className:"likebar",children:[Object(F.jsxs)("span",{className:"text-muted mr-2",children:[e.message.likes.length," Like",1===e.message.likes.length?"":"s"]}),Object(F.jsx)("span",{children:e.message.likes.map((function(t,n){return Object(F.jsx)(z,{like:t},"p"+e.message.id+"like"+t.id)}))}),Object(F.jsx)("div",{className:"align-right",children:-1!==e.message.likes.findIndex((function(e){return e.username===n.username}))?Object(F.jsx)(i.a,{variant:"outline-info",onClick:function(e){return M.apply(this,arguments)},disabled:!n.token||p||v||N,children:Object(F.jsx)(J,{spinWhen:N,children:"Unlike"})}):Object(F.jsx)(i.a,{variant:"success",onClick:function(e){return T.apply(this,arguments)},disabled:!n.token||p||v||N,children:Object(F.jsx)(J,{spinWhen:v,children:"Like"})})})]})]})})};var K=function(e){return Object(F.jsx)(L.a,{className:"make-account-suggestion mt-4",children:Object(F.jsxs)(L.a.Body,{children:[Object(F.jsx)("h2",{className:"mb-4 mt-4",children:"Want to share what's going on in your world?"}),Object(F.jsx)(P.b,{to:"/signup",children:Object(F.jsx)(i.a,{variant:"primary",size:"lg",children:"Create Account"})}),Object(F.jsxs)(L.a.Text,{className:"mt-3",children:["Already have one? ",Object(F.jsx)(P.b,{to:"/login",children:"Sign In"})]})]})})},Y=n(9);var q=function(e){var t=D((function(e){return e})),n=t.user,a=t.addMessage,s=Object(r.useState)(!1),c=Object(G.a)(s,2),u=c[0],o=c[1],l=Object(r.useRef)();function d(){return(d=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),t.preventDefault(),e.t0=l.current.value.length>=2,!e.t0){e.next=7;break}return e.next=6,a(n.token,l.current.value);case 6:e.t0=e.sent;case 7:if(!e.t0){e.next=9;break}l.current.value="";case 9:o(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(F.jsx)(L.a,{className:"make-post mt-4",children:Object(F.jsx)(L.a.Body,{children:Object(F.jsxs)(Y.a,{children:[Object(F.jsx)(Y.a.Group,{children:Object(F.jsx)(Y.a.Control,{as:"textarea",size:"lg",rows:5,placeholder:"Say something...",ref:l,disabled:u})}),Object(F.jsx)("div",{className:"align-right",children:Object(F.jsx)(i.a,{variant:"primary",type:"submit",onClick:function(e){return d.apply(this,arguments)},disabled:u,children:Object(F.jsx)(J,{spinWhen:u,children:"Post"})})})]})})})},Q=n(24),V=n(79);var X=function(e){var t=D((function(e){return e})),n=t.user,a=t.messages,s=t.loadMoreMessages,c=t.clearMessages,u=t.hasMore;return Object(r.useEffect)((function(){s(e.username)}),[s,e.username]),Object(F.jsx)(V.a,{dataLength:a.length,next:function(t){s(e.username)},hasMore:u,loader:Object(F.jsx)(Q.a,{fluid:"md",children:Object(F.jsx)(L.a,{className:"mt-4 mb-4 center pt-4 pb-4",children:Object(F.jsx)(I.a,{animation:"border",role:"status",children:Object(F.jsx)("span",{className:"sr-only",children:"Loading..."})})})}),endMessage:Object(F.jsx)(Q.a,{fluid:"md center",children:Object(F.jsx)(i.a,{variant:"outline-secondary",disabled:!0,className:"mt-4 mb-4",children:"You have reached the end"})}),refreshFunction:function(t){c(),s(e.username)},pullDownToRefresh:!0,pullDownToRefreshThreshold:50,pullDownToRefreshContent:Object(F.jsx)(Q.a,{fluid:"md center",children:Object(F.jsx)(i.a,{variant:"outline-secondary",disabled:!0,className:"mt-4 mb-4",children:"\u2193 Pull down to refresh"})}),releaseToRefreshContent:Object(F.jsx)(Q.a,{fluid:"md center",children:Object(F.jsx)(i.a,{variant:"outline-secondary",disabled:!0,className:"mt-4 mb-4",children:"\u2191 Release to refresh"})}),children:Object(F.jsxs)(Q.a,{fluid:"md",children:[e.username?n.token&&e.username===n.username?Object(F.jsx)(q,{}):"":n.token?Object(F.jsx)(q,{}):Object(F.jsx)(K,{}),(e.username?a.filter((function(t){return t.username===e.username})):a).map((function(e){return Object(F.jsx)(H,{message:e},"m"+e.id)}))]})})};var Z=function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsx)(X,{})]})};var $=function(e){var t=Object(r.useState)(!1),n=Object(G.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),o=Object(G.a)(c,2),l=o[0],d=o[1],b=D((function(e){return e})).login,f=Object(r.useRef)(),m=Object(r.useRef)();function p(){return(p=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),t.preventDefault(),e.t0=f.current.value&&m.current.value,!e.t0){e.next=7;break}return e.next=6,b(f.current.value,m.current.value);case 6:e.t0=e.sent;case 7:if(!e.t0){e.next=9;break}d(!0);case 9:s(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l?Object(F.jsx)(u.a,{to:"/"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsxs)(Q.a,{fluid:"md",className:"mt-5",children:[Object(F.jsx)("h1",{children:"Welcome to Kwitter!"}),Object(F.jsxs)(Y.a,{className:"mt-5",children:[Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"Username"}),Object(F.jsx)(Y.a.Control,{type:"text",placeholder:"Username",ref:f,disabled:a})]}),Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"Password"}),Object(F.jsx)(Y.a.Control,{type:"password",placeholder:"Password",ref:m,disabled:a})]}),Object(F.jsx)(i.a,{variant:"primary",type:"submit",onClick:function(e){return p.apply(this,arguments)},disabled:a,children:Object(F.jsx)(J,{spinWhen:a,children:"Sign In"})})]})]})]})};var _=function(e){var t=Object(r.useState)(!1),n=Object(G.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),o=Object(G.a)(c,2),l=o[0],d=o[1],b=D((function(e){return e})),f=b.login,m=b.signup,p=Object(r.useRef)(),x=Object(r.useRef)(),O=Object(r.useRef)();function g(){return(g=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),t.preventDefault(),e.t1=p.current.value&&x.current.value&&O.current.value,!e.t1){e.next=7;break}return e.next=6,m(p.current.value,x.current.value,O.current.value);case 6:e.t1=e.sent;case 7:if(e.t0=e.t1,!e.t0){e.next=12;break}return e.next=11,f(p.current.value,O.current.value);case 11:e.t0=e.sent;case 12:if(!e.t0){e.next=14;break}d(!0);case 14:s(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l?Object(F.jsx)(u.a,{to:"/"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsxs)(Q.a,{fluid:"md",className:"mt-5",children:[Object(F.jsx)("h1",{children:"Signup for Kwitter!"}),Object(F.jsxs)(Y.a,{className:"mt-5",children:[Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"Create Username"}),Object(F.jsx)(Y.a.Control,{type:"text",placeholder:"Username",ref:p,disabled:a}),Object(F.jsx)(Y.a.Text,{className:"text-muted",children:"This will be your unique Kwitter handle."})]}),Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"Display Name"}),Object(F.jsx)(Y.a.Control,{type:"text",placeholder:"Display Name",ref:x,disabled:a})]}),Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"Create Password"}),Object(F.jsx)(Y.a.Control,{type:"password",placeholder:"Password",ref:O,disabled:a})]}),Object(F.jsx)(i.a,{variant:"primary",type:"submit",onClick:function(e){return g.apply(this,arguments)},disabled:a,children:Object(F.jsx)(J,{spinWhen:a,children:"Create Account"})})]})]})]})};var ee=function(e){var t=D((function(e){return e.user})),n=Object(r.useState)({}),a=Object(G.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){C(e.username).then((function(e){return c(e.user)}))}),[e.username]),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(R.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(F.jsx)(R.a.Brand,{className:"",as:P.b,to:"/",children:Object(F.jsx)(i.a,{block:!0,variant:"outline-secondary",children:"\u276e"})}),Object(F.jsx)("img",{width:128,height:128,className:"ml-3 big-portrait",src:s.pictureRaw,alt:"Profile Pic"}),Object(F.jsxs)(L.a.Body,{children:[Object(F.jsx)("div",{children:Object(F.jsxs)("div",{children:[Object(F.jsx)(L.a.Title,{children:s.displayName}),Object(F.jsxs)(L.a.Subtitle,{className:"mb-2 text-muted",children:["@",s.username]})]})}),Object(F.jsx)(L.a.Text,{children:s.about})]}),s&&t.token&&t.username===s.username&&Object(F.jsx)(P.b,{to:"/user/"+s.username+"/edit",children:Object(F.jsx)(i.a,{variant:"primary",children:"Edit Profile"})})]})})};var te=function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ee,{username:e.match.params.username}),Object(F.jsx)(X,{username:e.match.params.username})]})},ne=n(46);var re=function(e){var t=Object(r.useState)(!1),n=Object(G.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),o=Object(G.a)(c,2),l=o[0],d=o[1],b=Object(r.useState)(!1),f=Object(G.a)(b,2),m=f[0],p=f[1],x=Object(r.useState)(!1),O=Object(G.a)(x,2),g=O[0],v=O[1],k=D((function(e){return e})),y=k.user,w=k.edit,N=k.deleteAccount,C=k.login,S=Object(r.useRef)(),T=Object(r.useRef)(),M=Object(r.useRef)(),E=Object(r.useRef)();function A(){return(A=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),t.preventDefault(),e.t0=S.current.value&&T.current.value&&M.current.value,!e.t0){e.next=7;break}return e.next=6,w(y.token,S.current.value,T.current.value,M.current.value,E.current.value);case 6:e.t0=e.sent;case 7:if(!e.t0){e.next=11;break}return e.next=10,C(S.current.value,M.current.value);case 10:p("/user/"+S.current.value);case 11:s(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),t.preventDefault(),e.next=4,N(y.token,y.username);case 4:if(!e.sent){e.next=6;break}p("/");case 6:d(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){y.token?(S.current.value=y.username,T.current.value=y.displayName,E.current.value=y.about):p("/")}),[y]),m?Object(F.jsx)(u.a,{to:m}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsxs)(Q.a,{fluid:"md",className:"mt-5",children:[Object(F.jsxs)("div",{className:"flex-hcenter",children:[Object(F.jsx)("h1",{className:"inline-header",children:"Edit Your Account"}),Object(F.jsx)("div",{className:"align-right",children:Object(F.jsx)("span",{children:Object(F.jsx)(i.a,{variant:"danger",onClick:function(e){return v(!0)},disabled:a||l,children:Object(F.jsx)(J,{spinWhen:l,children:"Delete Account"})})})})]}),Object(F.jsxs)(Y.a,{className:"mt-5",children:[Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"Username"}),Object(F.jsx)(Y.a.Control,{type:"text",placeholder:"Username",ref:S,readOnly:!0}),Object(F.jsx)(Y.a.Text,{className:"text-muted",children:"You can't change your unique Kwitter handle"})]}),Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"New Display Name"}),Object(F.jsx)(Y.a.Control,{type:"text",placeholder:"Display Name",ref:T,disabled:a||l})]}),Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"New Password"}),Object(F.jsx)(Y.a.Control,{type:"password",placeholder:"Password",ref:M,disabled:a||l})]}),Object(F.jsxs)(Y.a.Group,{children:[Object(F.jsx)(Y.a.Label,{children:"New Bio"}),Object(F.jsx)(Y.a.Control,{as:"textarea",rows:5,placeholder:"About me",ref:E,disabled:a||l})]}),Object(F.jsxs)("div",{className:"align-right",children:[Object(F.jsx)(i.a,{variant:"primary",className:"mr-2",type:"submit",onClick:function(e){return A.apply(this,arguments)},disabled:a||l,children:Object(F.jsx)(J,{spinWhen:a,children:"Save"})}),Object(F.jsx)(i.a,{variant:"secondary",type:"cancel",onClick:function(e){return p("/user/"+y.username)},disabled:a||l,children:"Cancel"})]})]})]}),Object(F.jsxs)(ne.a,{show:g,onHide:function(e){return v(!1)},children:[Object(F.jsx)(ne.a.Header,{children:Object(F.jsx)(ne.a.Title,{children:"Delete your account"})}),Object(F.jsx)(ne.a.Body,{children:Object(F.jsxs)("p",{children:["This will delete your account, all your messages, and all your likes.",Object(F.jsx)("br",{}),"This action cannot be undone."]})}),Object(F.jsxs)(ne.a.Footer,{children:[Object(F.jsx)(i.a,{variant:"secondary",onClick:function(e){return v(!1)},children:"Cancel"}),Object(F.jsx)(i.a,{variant:"danger",type:"submit",onClick:function(e){v(!1),function(e){P.apply(this,arguments)}(e)},children:"Permanently Delete My Account"})]})]})]})};function ae(e){var t=D((function(e){return e})),n=t.user,r=t.login,a=t.logout,s=t.alerts,c=t.removeAlert,u=t.messages,i=t.loadMoreMessages;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(P.b,{to:"/",children:"Home"}),Object(F.jsxs)("p",{children:[Object(F.jsx)("button",{onClick:function(e){return r("amogus","sus")},children:"Log in to test account"}),Object(F.jsx)("button",{onClick:function(e){return N("amogus","AMOGUS","sus")},children:"Make test account"}),Object(F.jsx)("button",{onClick:function(e){return r("bad","bad")},children:"Log in to account bad:bad"}),Object(F.jsx)("button",{onClick:function(e){return a()},children:"logout"})]}),Object(F.jsx)("p",{children:"Alerts:"}),Object(F.jsx)("ul",{children:s.map((function(e){return Object(F.jsxs)("li",{children:[Object(F.jsx)("b",{children:e.header})," ",e.body," ",Object(F.jsx)("button",{onClick:function(t){return c(e.id)},children:"x"})]})}))}),Object(F.jsxs)("p",{children:["Messages: ",Object(F.jsx)("button",{onClick:function(e){return i(n.token?n.username:void 0)},children:"Load 10 more for logged in user"})]}),Object(F.jsx)("ul",{children:u.map((function(e){return Object(F.jsxs)("li",{children:[e.username,": ",e.text]})}))})]})}var se=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(ae,{})})};var ce=function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("p",{children:["Page not found for ",e.location.pathname]}),Object(F.jsx)(P.b,{to:"/",children:"Go Home"})]})},ue=n(71);var ie=function(e){var t=D((function(e){return e})),n=t.alerts,a=t.removeAlert,s=t.clearAlerts,c=Object(r.useState)(0),u=Object(G.a)(c,2),i=u[0],o=u[1],l=Object(r.useRef)(null);return Object(r.useEffect)((function(){switch(clearTimeout(l.current),i){case 0:l.current=setTimeout((function(){return o(1)}),1e3);break;case 1:l.current=setTimeout((function(){return o(2)}),1e4);break;case 2:s()}return function(){clearTimeout(l.current)}}),[i,s]),Object(r.useEffect)((function(){n.length>0&&o(0)}),[n]),Object(F.jsx)("div",{className:"alerts-modals",onMouseMove:function(e){return o(0)},style:[{animation:""},{animation:"fade-out 10s linear forwards"},{visibility:"hidden"}][i],children:n.map((function(e){return Object(F.jsxs)(ue.a,{variant:"danger",onClose:function(){return a(e.id)},dismissible:!0,children:[Object(F.jsx)(ue.a.Heading,{children:e.header}),Object(F.jsx)("p",{children:e.body})]},e.id)}))})};var oe=function(){return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsxs)(u.d,{children:[Object(F.jsx)(u.b,{exact:!0,path:"/",component:Z}),Object(F.jsx)(u.b,{exact:!0,path:"/login",component:$}),Object(F.jsx)(u.b,{exact:!0,path:"/signup",component:_}),Object(F.jsx)(u.b,{exact:!0,path:"/user/:username",component:te}),Object(F.jsx)(u.b,{exact:!0,path:"/user/:username/edit",component:re}),Object(F.jsx)(u.b,{exact:!0,path:"/debug",component:se}),Object(F.jsx)(u.b,{component:ce})]}),Object(F.jsx)(ie,{})]})};c.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(P.a,{basename:"kwitter-infinitymeme",children:Object(F.jsx)(oe,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.1fa4a988.chunk.js.map