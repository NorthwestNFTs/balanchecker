(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){e.exports=n(338)},158:function(e,t){},179:function(e,t){},181:function(e,t){},249:function(e,t){},332:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},337:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(130),s=n.n(u),l=n(42),c=n(43),i=n(20),o=n(131),m=n(64),p=n.n(m),d=n(134),y=n(132),b=n(133),f=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],v=new(n.n(b).a)("https://mainnet.infura.io/v3/6cae396f06e84c3abc9ddbdf0bbf084f"),h=function(e){return new v.eth.Contract(f,e)},E=v,w=function(){var e=Object(y.a)(p.a.mark(function e(t,n){var a,r,u,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(d.a)(new Set(n.split(/\s+/))),a=t?function(e){return h(t).methods.balanceOf(e).call()}:E.eth.getBalance,u=r.map(function(e){return E.utils.isAddress(e)?a(e):"invalid address"}),e.next=5,Promise.all(u);case 5:return s=e.sent,e.abrupt("return",r.reduce(function(e,t,n){return e.result[t]=s[n],e.csvData.push([t,s[n]]),e},{result:{},csvData:[["Address","Balance"]]}));case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),k=(n(332),n(333),n(334),function(e){var t=e.children;return r.a.createElement("div",{className:"card"},t)}),O=(n(335),function(e){var t=e.lineNumber;return r.a.createElement("div",{className:"font-all line ".concat(t)})}),_=(n(336),function(e){var t=e.text;return r.a.createElement("h1",{className:"font-all header"},t)}),g=(n(337),function(e){var t=e.handleClick,n=Object(a.useState)("Ethereum"),u=Object(i.a)(n,2),s=u[0],l=u[1],c=function(e){var n=e.target.name;l(n),t&&t(n)};return r.a.createElement("div",null,r.a.createElement(N,{name:"Ethereum",handleOnClick:c,currName:s}),r.a.createElement(N,{name:"Token",right:!0,handleOnClick:c,currName:s}))}),N=function(e){var t=e.handleOnClick,n=e.name,a=e.currName,u=e.right;return r.a.createElement("button",{onClick:t,name:n,className:"tab ".concat(u?"tab__right":"tab__left"," ").concat(a===n?"tab__active":"tab__not-active")},n)},C={tokenAddress:"",addresses:"",result:{},csvData:[]};var j=function(){var e=Object(a.useState)(C),t=Object(i.a)(e,2),n=t[0],u=t[1],s=n.tokenAddress,m=n.addresses,p=n.result,d=n.csvData,y=Object(a.useState)("Ethereum"),b=Object(i.a)(y,2),f=b[0],v=b[1],h=Object(a.useState)({current:f,use:""}),E=Object(i.a)(h,2),N=E[0],j=E[1],x=N.use,M=N.current,S=function(e){var t=e.target,n=t.name,a=t.value;u(function(e){return Object(c.a)({},e,Object(l.a)({},n,a))})},A="Ethereum"===f;return x?x&&f!==M&&j({current:f,use:""}):setTimeout(function(){return j(Object(c.a)({},N,{use:M}))},100),r.a.createElement("div",{className:"app content"},r.a.createElement(O,{lineNumber:"line-1"}),r.a.createElement(O,{lineNumber:"line-2"}),r.a.createElement(O,{lineNumber:"line-3"}),r.a.createElement(_,{className:"App-header",text:"Balanchecker"}),r.a.createElement(k,null,r.a.createElement(g,{handleClick:function(e){return v(e)}}),r.a.createElement("form",{className:"form",autoComplete:"offthis",onSubmit:function(e){e.preventDefault(),w(s,m).then(function(e){var t=e.result,n=e.csvData;u(function(e){return Object(c.a)({},e,{result:t,csvData:n})})})}},r.a.createElement("input",{type:"hidden",value:"prayer"}),r.a.createElement("label",null,"Token Address"),r.a.createElement("input",{className:x,autoComplete:"ohohff",onChange:S,name:"tokenAddress",disabled:A,value:A?"0x0000000000000000000000000000000000000000":s,placeholder:"Token address"}),r.a.createElement("label",null,"Ethereum Addresses"),r.a.createElement("textarea",{onChange:S,name:"addresses",value:m,placeholder:"Paste your ethereum addresses here"}),r.a.createElement("button",{type:"submit"},"Check balance"),r.a.createElement("label",null,"Result"),r.a.createElement("textarea",{value:JSON.stringify(p),onChange:S,placeholder:"Results",disabled:!0}),d.length?r.a.createElement(o.CSVLink,{filename:"data.csv",data:d},"Download CSV"):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,1,2]]]);
//# sourceMappingURL=main.10130cf3.chunk.js.map