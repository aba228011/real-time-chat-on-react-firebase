(this["webpackJsonp04-real-time-chat"]=this["webpackJsonp04-real-time-chat"]||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return B}));var a=n(0),c=n.n(a),i=n(12),r=n.n(i),s=(n(76),n(25)),o=(n(77),n(42)),j=n(114),d=n(117),l=n(118),u=n(124),h=n(123),b="/login",x="/chat",p=n(30),O=n(4),f=function(){var e=c.a.useContext(B).auth,t=Object(p.a)(e),n=Object(s.a)(t,1)[0];return Object(O.jsx)(j.a,{color:"default",position:"static",children:Object(O.jsx)(d.a,{variant:"dense",children:(null===n||void 0===n?void 0:n.photoURL)?Object(O.jsxs)(l.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{src:n.photoURL}),Object(O.jsx)("div",{children:n.displayName})]}),Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{onClick:function(){return e.signOut()},variant:"outlined",children:"Out"})})]}):Object(O.jsx)(l.a,{container:!0,justifyContent:"flex-end",children:Object(O.jsx)(o.b,{to:b,children:Object(O.jsx)(h.a,{variant:"outlined",children:"Login"})})})})})},m=n(14),v=n(40),g=n.n(v),y=n(50),w=n(119),C=n(122),I=n(27),L=function(){var e=c.a.useContext(B).auth,t=function(){var t=Object(y.a)(g.a.mark((function t(){var n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new I.a.auth.GoogleAuthProvider;case 2:return n=t.sent,t.next=5,e.signInWithPopup(n);case 5:a=t.sent,a.user;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsx)(w.a,{children:Object(O.jsx)(l.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justifyContent:"center",children:Object(O.jsx)(l.a,{container:!0,style:{width:400,background:"wheat"},alignItems:"center",direction:"column",children:Object(O.jsx)(C.a,{p:8,children:Object(O.jsx)(h.a,{onClick:t,variant:"outlined",children:"Login with Google"})})})})})},k=n(120),N=n(62),A=function(){return Object(O.jsx)(w.a,{children:Object(O.jsx)(l.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justifyContent:"center",children:Object(O.jsx)(l.a,{container:!0,alignItems:"center",direction:"column",children:Object(O.jsxs)("div",{className:"lds-roller",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})})})},F=[{path:b,Component:L}],R=[{path:x,Component:function(){var e=c.a.useContext(B),t=e.auth,n=e.firestore,a=Object(p.a)(t),i=Object(s.a)(a,1)[0],r=c.a.useState(""),o=Object(s.a)(r,2),j=o[0],d=o[1],b=Object(N.a)(n.collection("messages").orderBy("createdAt")),x=Object(s.a)(b,2),f=x[0],m=x[1],v=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.collection("messages").add({uid:i.uid,displayName:i.displayName,photoURL:i.photoURL,text:j,createdAt:I.a.firestore.FieldValue.serverTimestamp()}),d("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m?Object(O.jsx)(A,{}):Object(O.jsx)(w.a,{children:Object(O.jsxs)(l.a,{container:!0,style:{height:window.innerHeight-50,marginTop:15},justifyContent:"center",children:[Object(O.jsx)("div",{style:{width:"80%",height:"70vh",border:"1px solid gray",overflowY:"auto"},children:f.map((function(e){return Object(O.jsxs)("div",{style:{margin:20,border:i.uid===e.uid?"1px solid black":"1px solid yellow",marginLeft:i.uid===e.uid?"auto":"10px",padding:10,width:"fit-content"},children:[Object(O.jsxs)(l.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(u.a,{src:e.photoURL}),Object(O.jsx)("div",{style:{marginLeft:5,color:"green"},children:Object(O.jsx)("b",{children:e.displayName})})]}),Object(O.jsx)("div",{style:{marginTop:10},children:e.text})]},e.createdAt)}))}),Object(O.jsxs)(l.a,{container:!0,style:{width:"80%"},justifyContent:"space-between",children:[Object(O.jsx)(k.a,{variant:"outlined",style:{width:"80%"},placeholder:"Your message after press Enter",size:"medium",onChange:function(e){return d(e.target.value)},value:j,onKeyDown:function(e){13===e.keyCode&&(n.collection("messages").add({uid:i.uid,displayName:i.displayName,photoURL:i.photoURL,text:j,createdAt:I.a.firestore.FieldValue.serverTimestamp()}),d(""))}}),Object(O.jsx)(h.a,{variant:"outlined",style:{width:"15%",height:"40px"},color:"default",onClick:v,children:"Send"})]})]})})}}],U=function(){var e=c.a.useContext(B).auth,t=Object(p.a)(e);return Object(s.a)(t,1)[0]?Object(O.jsxs)(m.d,{children:[R.map((function(e){return Object(O.jsx)(m.b,{path:e.path,component:e.Component,exact:!0},e.path)})),Object(O.jsx)(m.a,{to:x})]}):Object(O.jsxs)(m.d,{children:[F.map((function(e){return Object(O.jsx)(m.b,{path:e.path,component:e.Component,exact:!0},e.path)})),Object(O.jsx)(m.a,{to:b})]})};var S=function(){var e=c.a.useContext(B).auth,t=Object(p.a)(e),n=Object(s.a)(t,2);return n[0],n[1]?Object(O.jsx)(A,{}):Object(O.jsx)("div",{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(U,{})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(88),n(85);I.a.initializeApp({apiKey:"AIzaSyANMkeV196q-XNfV8zxs382wh09qGfG1pc",authDomain:"real-time-chat-on-react.firebaseapp.com",projectId:"real-time-chat-on-react",storageBucket:"real-time-chat-on-react.appspot.com",messagingSenderId:"711584355310",appId:"1:711584355310:web:41baf230682c12bdf434ff",measurementId:"G-C6WN7CBFDY"});var B=Object(a.createContext)(null),G=I.a.auth(),P=I.a.firestore();r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(B.Provider,{value:{firebase:I.a,auth:G,firestore:P},children:Object(O.jsx)(S,{})})}),document.getElementById("root")),T()}},[[87,1,2]]]);
//# sourceMappingURL=main.59606b96.chunk.js.map