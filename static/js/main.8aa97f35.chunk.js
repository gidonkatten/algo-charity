(this["webpackJsonpalgo-charity"]=this["webpackJsonpalgo-charity"]||[]).push([[0],{243:function(e,t){},245:function(e,t){},255:function(e,t){},257:function(e,t){},284:function(e,t){},286:function(e,t){},287:function(e,t){},292:function(e,t){},294:function(e,t){},300:function(e,t){},302:function(e,t){},321:function(e,t){},333:function(e,t){},336:function(e,t){},349:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(14),c=n.n(a),s=n(29),o=n(10),i=n.n(o),u=n(18),l=n(381),d=n(193),p=n.n(d),j=n(4);function b(e){var t=e.onClick;return Object(j.jsx)("div",{className:"back-button",children:Object(j.jsx)(l.a,{onClick:t,children:Object(j.jsx)(p.a,{})})})}var f,h=n(388),x=n(385),O=n(394),m=n(392),g=n(123),v=n(30),y=n(122),A=["hasDecimal","prefix","inputRef","onChange"],w=["inputRef","onChange"];function C(e){return function(e){var t=e.hasDecimal,n=e.prefix,r=e.inputRef,a=e.onChange,c=Object(g.a)(e,A);return Object(j.jsx)(y.a,Object(v.a)(Object(v.a)({},c),{},{getInputRef:r,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},decimalScale:t?6:void 0,fixedDecimalScale:t,thousandSeparator:!0,allowNegative:!1,prefix:n}))}(Object(v.a)(Object(v.a)({},e),{},{hasDecimal:!0}))}function I(e){var t=e.inputRef,n=e.onChange,r=Object(g.a)(e,w);return Object(j.jsx)(y.a,Object(v.a)(Object(v.a)({},r),{},{getInputRef:t,onValueChange:function(t){n({target:{name:e.name,value:t.value}})},allowNegative:!1}))}!function(e){e.DOLLAR="$",e.ALGO="Algo "}(f||(f={}));var k="https://algo-charity.herokuapp.com";function N(){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/application"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/escrow/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return parseInt((e.getTime()/1e3).toFixed(0))}var E=n(66),D=n(66),R=new D.Algodv2("","https://testnet.algoexplorerapi.io/",443),G=(new D.Indexer("","https://testnet.algoexplorerapi.io/idx2",443),function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a,c,s,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:1e3,!(null==R||null==t||n<0)){e.next=3;break}throw new Error("Bad arguments.");case 3:return e.next=5,R.status().do();case 5:if(void 0!==(r=e.sent)){e.next=8;break}throw new Error("Unable to get node status");case 8:a=r["last-round"]+1,c=a;case 10:if(!(c<a+n)){e.next=26;break}return e.next=13,R.pendingTransactionInformation(t).do();case 13:if(void 0===(s=e.sent)){e.next=21;break}if(!(null!==s["confirmed-round"]&&s["confirmed-round"]>0)){e.next=19;break}return e.abrupt("return",s);case 19:if(!(null!=s["pool-error"]&&s["pool-error"].length>0)){e.next=21;break}throw new Error("Transaction Rejected pool error"+s["pool-error"]);case 21:return e.next=23,R.statusAfterBlock(c).do();case 23:c++,e.next=10;break;case 26:throw new Error("Transaction not confirmed after "+n+" rounds!");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=n(194),M=new(n.n(q).a),W=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.connect();case 3:return t=e.sent,e.abrupt("return",t.map((function(e){return e.address})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();function B(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getTransactionParams().do();case 2:return(t=e.sent).flatFee=!0,t.fee=1e3,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,n,r,a,c,s){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(i.a.mark((function e(t,n,r,a,c,s,o){var u,l,d,p,j,b,f,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return u=e.sent,l=new TextEncoder,d=[l.encode(n),Object(E.encodeUint64)(r),Object(E.encodeUint64)(a),Object(E.encodeUint64)(c)],p=Object(v.a)(Object(v.a)({},u),{},{flatFee:!0,type:"appl",from:t,appApprovalProgram:s,appClearProgram:o,appLocalInts:2,appLocalByteSlices:0,appGlobalInts:4,appGlobalByteSlices:2,appArgs:d}),e.next=8,M.signTransaction(p);case 8:return j=e.sent,e.next=11,R.sendRawTransaction(j.blob).do();case 11:return b=e.sent,console.log("Transaction: "+b.txId),e.next=15,G(b.txId);case 15:return e.next=17,R.pendingTransactionInformation(b.txId).do();case 17:return f=e.sent,h=f["application-index"],console.log("AppId: "+h),e.abrupt("return",h);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t,n){return V.apply(this,arguments)}function V(){return(V=Object(u.a)(i.a.mark((function e(t,n,r){var a,c,s,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return a=e.sent,c=new TextEncoder,s=[c.encode("set_escrow"),c.encode(r)],o=Object(v.a)(Object(v.a)({},a),{},{flatFee:!0,type:"appl",from:t,appIndex:n,appOnComplete:E.OnApplicationComplete.NoOpOC,appArgs:s}),e.next=8,M.signTransaction(o);case 8:return u=e.sent,e.next=11,R.sendRawTransaction(u.blob).do();case 11:return l=e.sent,console.log("Transaction: "+l.txId),e.next=15,G(l.txId);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(null),l=Object(s.a)(o,2),d=l[0],p=l[1],f=Object(r.useState)(null),g=Object(s.a)(f,2),v=g[0],y=g[1],A=Object(r.useState)(0),w=Object(s.a)(A,2),I=w[0],k=w[1],S=Object(r.useState)(0),P=Object(s.a)(S,2),E=P[0],D=P[1],R=e.selectedAddress,G=e.exit,q=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,s,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==a.length&&d&&v&&0!==I&&R){e.next=3;break}return e.abrupt("return");case 3:if(n=L(d),r=L(v),!(n>=r)){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,N();case 9:return s=e.sent,o=s.statefulBytes,u=s.clearBytes,e.next=14,U(R,a,n,r,1e6*I,Uint8Array.from(Object.values(o)),Uint8Array.from(Object.values(u)));case 14:T(l=e.sent).then((function(e){J(R,l,e),c(""),p(null),y(null),k(0),D(l)}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{onClick:G}),E?Object(j.jsxs)("p",{className:"content",children:["Created application with ID ",E,". You can found your campaign by searching for this number."]}):null,Object(j.jsx)("form",{onSubmit:q,children:Object(j.jsxs)(x.a,{container:!0,spacing:3,children:[Object(j.jsx)(x.a,{item:!0,xs:7,children:Object(j.jsx)(O.a,{label:"Name:",value:a,onChange:function(e){return c(e.target.value)},required:!0,fullWidth:!0,inputProps:{maxLength:63},InputLabelProps:{required:!1}})}),Object(j.jsx)(x.a,{item:!0,xs:5,children:Object(j.jsx)(O.a,{label:"Fund Goal (Algo):",value:I,onChange:function(e){return k(Number(e.target.value))},required:!0,InputProps:{inputComponent:C},InputLabelProps:{required:!1},fullWidth:!0})}),Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)(O.a,{label:"Selected Address:",value:R||"",helperText:"This can be changed in the landing page",required:!0,InputLabelProps:{required:!1},fullWidth:!0})}),Object(j.jsx)(x.a,{item:!0,xs:6,children:Object(j.jsx)(m.a,{clearable:!0,label:"Start date:",value:d,onChange:function(e){return p(e)},disablePast:!0,format:"yyyy/MM/dd HH:mm",required:!0,InputLabelProps:{required:!1},fullWidth:!0})}),Object(j.jsx)(x.a,{item:!0,xs:6,children:Object(j.jsx)(m.a,{clearable:!0,label:"Expiry Date:",value:v,onChange:function(e){return y(e)},disablePast:!0,format:"yyyy/MM/dd HH:mm",required:!0,InputLabelProps:{required:!1},fullWidth:!0})}),Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",style:{margin:"8px 0px"},fullWidth:!0,children:"Create"})})]})})]})}function $(e){e.selectedAddress;var t=e.exit;return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{onClick:t}),"Fund Campaign"]})}var _=n(386),z=n(390),K=n(395),Q=n(399),X=function(e){var t=e.addresses,n=e.setAddresses,r=e.selectedAddress,a=e.setSelectedAddress,c=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W().then((function(e){n(e),e.length>0&&a(e[0])}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.target.value)&&a(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(h.a,{variant:"contained",color:"primary",onClick:c,fullWidth:!0,children:"Connect To MyAlgo Wallet"}),Object(j.jsx)(_.a,{component:"fieldset",children:Object(j.jsx)(Q.a,{value:r||"",onChange:s,children:t.map((function(e){return Object(j.jsx)(z.a,{value:e,control:Object(j.jsx)(K.a,{}),label:e},e)}))})})]})},Z=n(391);function ee(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"How It Works"}),Object(j.jsx)("p",{className:"content",children:"Algo Charity is a platform specifically for match funding campaigns. Match funding is a great way to encourage more people to give and for people to give more as all donations received are multiplied! One has the ability to make an even bigger difference!"}),Object(j.jsx)("p",{className:"content",children:"Blockchain technology guarantees that your contributions are matched to give you the peace of mind that your money matters."}),Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsxs)(x.a,{item:!0,xs:5,children:[Object(j.jsx)("h3",{children:"Matcher"}),Object(j.jsx)("p",{className:"content",children:"Become a matcher and commit to matching donations up to a certain amount with a chosen ratio."})]}),Object(j.jsx)(x.a,{item:!0,xs:2,children:Object(j.jsx)(Z.a,{orientation:"vertical",style:{margin:"auto",width:3}})}),Object(j.jsxs)(x.a,{item:!0,xs:5,children:[Object(j.jsx)("h3",{children:"Donor"}),Object(j.jsx)("p",{className:"content",children:"Become a donor and have your donation automatically matched."})]})]})]})}var te,ne=n(389),re=n(195),ae=n.n(re);function ce(){var e=Object(r.useState)(NaN),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)(O.a,{label:"Search...",variant:"outlined",value:n||"",onChange:function(e){return a(parseInt(e.target.value))},InputProps:{inputComponent:I,endAdornment:Object(j.jsx)(ne.a,{position:"end",children:Object(j.jsx)(l.a,{onClick:function(){return console.log("clicked")},edge:"end","aria-label":"search",children:Object(j.jsx)(ae.a,{})})})},required:!0,fullWidth:!0,InputLabelProps:{required:!1}})}function se(e){var t=e.addresses,n=e.setAddresses,r=e.selectedAddress,a=e.setSelectedAddress,c=e.enterCreate;e.enterCampaign;return Object(j.jsxs)("div",{children:[Object(j.jsx)(X,{addresses:t,setAddresses:n,selectedAddress:r,setSelectedAddress:a}),Object(j.jsx)(ee,{}),Object(j.jsx)("h2",{children:"Usage"}),Object(j.jsx)("p",{className:"content",children:"Connect your MyAlgo wallet and then either search for an existing campaign or create your own!"}),Object(j.jsx)("p",{children:Object(j.jsx)(ce,{})}),Object(j.jsx)("p",{children:Object(j.jsx)(h.a,{variant:"contained",color:"primary",onClick:c,fullWidth:!0,children:"Create Fund Campaign"})})]})}!function(e){e[e.LANDING=0]="LANDING",e[e.CREATE=1]="CREATE",e[e.CAMPAIGN=2]="CAMPAIGN"}(te||(te={}));var oe=function(){var e=Object(r.useState)(te.LANDING),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(void 0),d=Object(s.a)(l,2),p=d[0],b=d[1],f=function(){return a(te.LANDING)};return Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{children:"Algo Charity"}),n===te.LANDING?Object(j.jsx)(se,{addresses:i,setAddresses:u,selectedAddress:p,setSelectedAddress:b,enterCreate:function(){return a(te.CREATE)},enterCampaign:function(){return a(te.CAMPAIGN)}}):null,n===te.CREATE?Object(j.jsx)(Y,{selectedAddress:p,exit:f}):null,n===te.CAMPAIGN?Object(j.jsx)($,{selectedAddress:p,exit:f}):null]})},ie=n(20),ue=n(196);n(348),n(349);c.a.render(Object(j.jsx)(ie.a,{utils:ue.a,children:Object(j.jsx)(oe,{})}),document.getElementById("root"))}},[[350,1,2]]]);
//# sourceMappingURL=main.8aa97f35.chunk.js.map