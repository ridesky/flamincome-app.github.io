(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-71d811ca":"8de88b07"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},4824:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{height:"64vh"}},[n("div",{staticStyle:{"scrollbar-width":"thin"},attrs:{id:"terminal"}},[e._v("loading ...")])])])}],a=(n("d3b7"),n("785f"));n.e("chunk-71d811ca").then(n.bind(null,"5eae"));var s={name:"App",components:{voting:a["a"]},mounted:function(){window.vue=this},data:function(){return{}},methods:{what:function(){console.log("??")}},computed:{votingHtml:function(){return this.$refs.voting.$el}}},c=s,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,i,!1,null,null,null),d=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(d)}}).$mount("#app")},"785f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"voting"}},[n("h3",[e._v(e._s(e.title[e.status]))]),n("div",{staticClass:"vote-wrapper"},e._l(e.votes,(function(t){return n("div",{key:t.id,staticClass:"vote-item"},[n("p",{staticClass:"metadata"},[n("span",[e._v("#"+e._s(t.id)+":")]),n("span",[e._v(e._s(t.metadata))])]),t.isOpen?n("div",[0==t.state?n("div",[n("span",{staticClass:"yes green",on:{click:function(n){return e.toVote({id:t.id,supports:!0})}}},[e._v("YES")]),n("span",{staticClass:"no red",on:{click:function(n){return e.toVote({id:t.id,supports:!1})}}},[e._v("NO")])]):e._e()]):e._e(),t.isOpen?e._e():n("div",[t.success?n("p",{staticClass:"green"},[e._v("Passed")]):e._e(),t.success?e._e():n("p",{staticClass:"red"},[e._v("Rejected")])]),1==t.state?n("p",{staticClass:"green"},[e._v("You voted YES")]):e._e(),2==t.state?n("p",{staticClass:"red"},[e._v("You voted No")]):e._e()])})),0)])},o=[],i=(n("c975"),n("d81d"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),a=n("0af0"),s=n("5e6a"),c=n("2ef0"),u=n.n(c),l={mounted:function(){this.init()},data:function(){return{pctbase:new web3.utils.BN("1000000000000000000"),title:{0:"Loading votes...","-1":"Load failed",2:"Votes:"},status:"0",votes:[]}},methods:{init:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(a["a"])("0ops.aragonid.eth","thegraph",{network:flamincome.__net_id__});case 3:return n=t.sent,t.next=6,Object(s["a"])(n.app("voting"));case 6:return r=t.sent,t.next=9,r.votes();case 9:o=t.sent,o=o.map((function(t){return t.id=t.id.substr(t.id.indexOf("voteId:0x")+"voteId:0x".length),t.id=new web3.utils.BN(t.id,16).toString(),e.getVoterState(t),t})),e.votes=u.a.sortBy(o,(function(e){return parseInt(e.id)})),e.status="1",t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.error(t.t0),e.status="-1";case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},getVoterState:function(e){var t=this,n=flamincome.__get_voting__();n.methods.getVoterState(new web3.utils.BN(e.id),flamincome.__account__).call().then((function(n){t.$set(e,"state",n)})).catch((function(e){console.error(e)})),n.methods.voteTime().call().then((function(t){var n=parseInt(t),r=parseInt(e.startDate),o=parseInt((new Date).getTime()/1e3);e.isOpen=r+n>o&&!e.executed})).catch((function(e){console.error(e)}));var r=new web3.utils.BN(e.yea),o=new web3.utils.BN(e.nay),i=r.add(o);if(i.isZero())e.success=!1;else{var a=new web3.utils.BN(e.votingPower),s=new web3.utils.BN(e.supportRequiredPct),c=new web3.utils.BN(e.minAcceptQuorum),u=r.mul(this.pctbase).div(i),l=r.mul(this.pctbase).div(a);e.success=l.gt(s)||u.gt(s)&&l.gt(c)}},toVote:function(e){var t=e.id,n=e.supports,r=e.executes,o=void 0===r||r;flamincome.__display__("Ready to vote..."),flamincome.__before__((function(){flamincome.__check_connection__();try{console.log(new web3.utils.BN(t).toNumber()),console.log(n),console.log(o);var e=flamincome.__get_voting__();flamincome.__transaction__(e.methods.vote(new web3.utils.BN(t).toNumber(),n,o).send({from:flamincome.__account__}))}catch(r){flamincome.__display__(r.message),flamincome.__done__()}}))}}},d=l,f=(n("ba90"),n("2877")),p=Object(f["a"])(d,r,o,!1,null,"4dca1b31",null);t["a"]=p.exports},"85ec":function(e,t,n){},ba90:function(e,t,n){"use strict";var r=n("4824"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a32038fe.js.map