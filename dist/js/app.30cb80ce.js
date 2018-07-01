(function(e){function t(t){for(var i,o,a=t[0],c=t[1],u=t[2],m=0,d=[];m<a.length;m++)o=a[m],r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={1:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;s.push([4,0]),n()})({4:function(e,t,n){e.exports=n("zUnb")},"70mA":function(e,t){},Kvlu:function(e,t,n){"use strict";var i=n("PtCU"),r=n.n(i);r.a},PtCU:function(e,t,n){},TMge:function(e,t,n){},ZyQL:function(e,t,n){"use strict";var i=n("TMge"),r=n.n(i);r.a},fp4G:function(e,t,n){"use strict";var i=n("jsmv"),r=n.n(i);r.a},jsmv:function(e,t,n){},nNx0:function(e,t,n){"use strict";var i=n("uWEC"),r=n.n(i);r.a},uWEC:function(e,t,n){},zUnb:function(e,t,n){"use strict";n.r(t);n("VRzm");var i,r=n("Kw5r"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("StandUp")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/overview"}},[e._v("Overview")])],1),n("router-view")],1)},o=[],a=(n("nNx0"),n("KHd+")),c={},u=Object(a["a"])(c,s,o,!1,null,null,null),l=u.exports,m=n("jE9Z"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"overview-panel"},[n("div",{staticClass:"talking-general-settings-container"},[n("div",{staticClass:"time-limit"},[n("label",[e._v("Time per Person")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.timeLimit,expression:"timeLimit"}],staticClass:"time-per-person",attrs:{placeholder:"0h 1m 30s"},domProps:{value:e.timeLimit},on:{input:function(t){t.target.composing||(e.timeLimit=t.target.value)}}})]),n("div",{staticClass:"duration-container"},[n("label",[e._v("Duration")]),n("span",{staticClass:"duration",attrs:{title:"Click to pause main Stopwatch"},on:{click:function(t){e.pauseMainStopwatch()}}},[n("span",{staticClass:"duration-timer"},[e._v(e._s(e.durationInHHmmss?e.durationInHHmmss:"0h 0m 0s"))]),""===e.talkingPerson.name&&!1===e.mainStopwatch.isRunning()&&e.mainStopwatch.getTime()>0?n("span",{staticClass:"paused"},[e._v("Paused")]):e._e()])])]),n("HeadPool",{attrs:{person:e.talkingPerson,timeLimitInSeconds:e.timeLimitInSeconds}})],1),n("div",{staticClass:"pools"},e._l(e.personArray,function(t){return n("Pool",{key:t.name,attrs:{person:t,timeLimitInSeconds:e.timeLimitInSeconds,talkingPerson:e.talkingPerson,setTalkingPerson:e.setTalkingPerson,removePerson:e.removePerson}})})),n("div",{staticClass:"add-person-container"},[n("img",{attrs:{src:e.newPersonImage}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPersonName,expression:"newPersonName"}],attrs:{title:"Add Person"},domProps:{value:e.newPersonName},on:{input:function(t){t.target.composing||(e.newPersonName=t.target.value)}}}),n("button",{on:{click:function(){e.addPerson()}}},[e._v("+")])]),n("div",{on:{click:function(t){e.clickFirebase()}}},[e._v("test firebase")])])},f=[],p=(n("f3/d"),n("xmWZ")),v=n("3Aqn"),g=n("qpph"),h=n("0yhX"),y=n("EdlT"),b=n("mrSG"),k=n("YKMj"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"talking-person-information-container",style:{background:e.person&&e.person.favoriteColor}},[""!==e.person.name?n("img",{staticClass:"image",attrs:{src:e.person.image}}):e._e(),n("div",{staticClass:"info"},[""!==e.person.name?n("div",{staticClass:"name"},[e._v("\n            "+e._s(e.person.name)+"\n        ")]):e._e(),""!==e.person.name?n("div",{staticClass:"current-person-time"},[n("span",{staticClass:"time"},[n("span",[e._v(e._s(e.currentTimeInHHmmss))]),n("span",{staticClass:"overtime"},[e._v(e._s(e.overtimeTimeInHHmmss))])])]):e._e()])])},w=[],O=(n("xfY5"),n("a1Th"),n("KKXr"),function(){function e(){Object(p["a"])(this,e)}return Object(g["a"])(e,null,[{key:"from_HHmmss_to_Seconds",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===e)return 0;if(!1===t){var n=e.split(":");return 60*+n[0]*60+60*+n[1]+ +n[2]}var i=0,r=0,s=0;e.trim();var o=e.split("h");2===o.length&&(i=Number(o[0]),e=o[1].trim());var a=e.split("m");2===a.length&&(r=Number(a[0]),e=a[1].trim());var c=e.split("s");return e&&(s=Number(c[0])),s+60*r+3600*i}},{key:"from_Seconds_to_HHmmss",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===e)return"";var n="0",i=":",r=Math.floor(e/3600),s=Math.floor((e-3600*r)/60),o=e-3600*r-60*s;o=Math.round(100*o)/100;var a="";return!1===t?(a=(r<10?n+r:r).toString(),a+=i+(s<10?n+s:s),a+=i+(o<10?n+o:o)):(a=0===r?"":r.toString()+"h ",a+=0===s?"":s.toString()+"m ",a+=0===o?"":o.toString()+"s"),a.toString()}},{key:"getOvertimeInSeconds",value:function(e,t){return e>t?e-t:0}},{key:"getOvertimeInHHmmss",value:function(t,n,i){var r=e.getOvertimeInSeconds(t,n);return 0===r?"":" + "+e.from_Seconds_to_HHmmss(r,i)}},{key:"getCurrentTimeInHHmmss",value:function(t,n,i){var r=t<=n?t:n;return 0===r?"":e.from_Seconds_to_HHmmss(r,i)}}]),e}()),S=n("70mA"),P=n.n(S),T=function(e){function t(){return Object(p["a"])(this,t),Object(h["a"])(this,Object(y["a"])(t).apply(this,arguments))}return Object(g["a"])(t,[{key:"currentTimeInHHmmss",get:function(){return O.getCurrentTimeInHHmmss(Number(this.person.currentTimeInSeconds),this.timeLimitInSeconds,!0)}},{key:"overtimeTimeInHHmmss",get:function(){return O.getOvertimeInHHmmss(Number(this.person.currentTimeInSeconds),this.timeLimitInSeconds,!0)}}]),Object(v["a"])(t,e),t}(k["c"]);b["a"]([Object(k["b"])(),b["b"]("design:type","function"===typeof(i="undefined"!==typeof P.a&&P.a)&&i||Object)],T.prototype,"person",void 0),b["a"]([Object(k["b"])(),b["b"]("design:type",Number)],T.prototype,"timeLimitInSeconds",void 0),T=b["a"]([k["a"]],T);var _,j=T,C=j,H=(n("ZyQL"),Object(a["a"])(C,I,w,!1,null,"de9912e4",null)),N=H.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pool",class:{active:e.person.talking},on:{click:function(t){e.toggle()}}},[n("img",{staticClass:"image",attrs:{src:e.person.image}}),n("div",{staticClass:"progress-container"},[n("span",{staticClass:"name"},[e._v(e._s(e.person.name))]),n("span",{staticClass:"time"},[n("span",[e._v(e._s(e.currentTimeInHHmmss))]),n("span",{staticClass:"overtime"},[e._v(e._s(e.overtimeTimeInHHmmss))])]),n("span",{staticClass:"progress-bar",style:{width:e.currentTimeInPercentage,background:e.person.favoriteColor}})]),n("div",{staticClass:"remove",on:{click:function(t){e.removePool(e.person,t)}}},[e._v("×")])])},L=[],E=n("yT7P"),A=function(){function e(){Object(p["a"])(this,e),this.id=null,this.startTime=0,this.currentTimeInSeconds=0}return Object(g["a"])(e,[{key:"start",value:function(e){var t=this;if(!0===this.isRunning())throw new Error("Stopwatch already running");this.startTime=Date.now()-1e3*this.currentTimeInSeconds,this.id=setInterval(function(){e(t.getTime())},1e3)}},{key:"stop",value:function(){clearInterval(this.id),this.id=null}},{key:"reset",value:function(){this.stop(),this.startTime=0,this.currentTimeInSeconds=0}},{key:"getStartTime",value:function(){return this.startTime}},{key:"getTime",value:function(){return this.startTime>0&&(this.currentTimeInSeconds=parseFloat(Number((Date.now()-this.startTime)/1e3).toFixed(1))),this.currentTimeInSeconds}},{key:"isRunning",value:function(){return null!==this.id}}]),e}(),M=(n("rGqo"),n("INYr"),function(){function e(){Object(p["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getRandomColor",value:function(){for(var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n="0123456789ABCDEF",i="#",r=0;r<6;r++)i+=n[Math.floor(16*Math.random())];return t?e.addTransparencyToColor(i):i}},{key:"invertColor",value:function(t){if(0===t.indexOf("#")&&(t=t.slice(1)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),6!==t.length)throw new Error("Invalid HEX color.");var n=(255-parseInt(t.slice(0,2),16)).toString(16),i=(255-parseInt(t.slice(2,4),16)).toString(16),r=(255-parseInt(t.slice(4,6),16)).toString(16);return"#"+e.padZero(n)+e.padZero(i)+e.padZero(r)}},{key:"padZero",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=new Array(t).join("0");return(n+e).slice(-t)}},{key:"addTransparencyToColor",value:function(e){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),"rgba("+[t>>16&255,t>>8&255,255&t].join(",")+",.4)";throw new Error("Bad Hex")}}]),e}()),F=n("oyJW"),$=n("L2JU");r["default"].use($["a"]);var R,B,D,U,K="changepersons",Z="changetalkingperson",z="changeduration",W="changetimelimit",q={name:"",image:"",talking:!1,currentTimeInSeconds:"",favoriteColor:""},G=[],J=new $["a"].Store({state:{talkingPerson:q,persons:G,duration:0,timeLimit:"0h 1m 30s"},mutations:(_={},Object(F["a"])(_,K,function(e,t){e.persons=t}),Object(F["a"])(_,Z,function(e,t){e.talkingPerson=t}),Object(F["a"])(_,z,function(e,t){e.duration=t}),Object(F["a"])(_,W,function(e,t){e.timeLimit=t}),_),actions:{}}),Y=function(){function e(){Object(p["a"])(this,e)}return Object(g["a"])(e,[{key:"findIndex",value:function(e){return J.state.persons.indexOf(e)}},{key:"contains",value:function(e){return this.findIndex(e)>-1}},{key:"save",value:function(e){J.commit(K,e)}},{key:"change",value:function(e,t){var n=this.findIndex(e);if(n>-1){var i=J.state.persons.splice(0);i[n]=t,this.save(i)}}},{key:"getSize",value:function(){return J.state.persons.length}},{key:"addNew",value:function(e){var t=this.createCloneOfPersons();t.push(e),J.commit(K,t)}},{key:"add",value:function(e,t){var n=!1,i="0",r=M.getRandomColor(),s={name:e,image:t,talking:n,currentTimeInSeconds:i,favoriteColor:r};if(null!==this.findByName(e))throw new Error("Already exising");var o=this.createCloneOfPersons();o.push(s),J.commit(K,o)}},{key:"createCloneOfPersons",value:function(){return J.state.persons.slice(0)}},{key:"findByName",value:function(e){var t=null;return J.state.persons.forEach(function(n){n.name===e&&(t=n)}),t}},{key:"remove",value:function(e){var t=this.findIndex(e),n=this.createCloneOfPersons();n.splice(Number(t),1),J.commit(K,n)}},{key:"removeByName",value:function(e){var t=this.findByName(e);if(null===t)throw new Error("Person does not exist");this.remove(t)}}],[{key:"createPerson",value:function(){var e={name:"",image:"",talking:!1,currentTimeInSeconds:"",favoriteColor:""};return e}}]),e}(),V=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(h["a"])(this,Object(y["a"])(t).apply(this,arguments)),e.stopwatch=new A,e.personService=new Y,e}return Object(g["a"])(t,[{key:"toggle",value:function(){!1===this.person.talking?(this.setTalkingPerson(this.person),this.startTalking()):(this.setTalkingPerson(Y.createPerson()),this.stopTalking())}},{key:"removePool",value:function(e,t){this.setTalkingPerson(Y.createPerson()),this.stopTalking(),this.removePerson(e),t.stopPropagation()}},{key:"updateCurrentTimeInSeconds",value:function(e){""!==this.talkingPerson.name&&this.talkingPerson.name===this.person.name?this.personService.change(this.person,Object(E["a"])({},this.person,{currentTimeInSeconds:Number(e).toFixed(0)})):this.stopTalking()}},{key:"startTalking",value:function(){var e=this;!1===this.stopwatch.isRunning()&&(this.personService.change(this.person,Object(E["a"])({},this.person,{talking:!0})),this.stopwatch.start(function(t){e.updateCurrentTimeInSeconds(t)}))}},{key:"stopTalking",value:function(){!0===this.stopwatch.isRunning()&&(this.personService.change(this.person,Object(E["a"])({},this.person,{talking:!1})),this.stopwatch.stop())}},{key:"currentTimeInHHmmss",get:function(){return O.getCurrentTimeInHHmmss(Number(this.person.currentTimeInSeconds),this.timeLimitInSeconds,!0)}},{key:"overtimeTimeInHHmmss",get:function(){return O.getOvertimeInHHmmss(Number(this.person.currentTimeInSeconds),this.timeLimitInSeconds,!0)}},{key:"currentTimeInPercentage",get:function(){var e=0;return this.stopwatch.getTime()>0?(e=this.stopwatch.getTime(),e/=this.timeLimitInSeconds,e*=100,e.toFixed(0)+"%"):"0%"}}]),Object(v["a"])(t,e),t}(k["c"]);b["a"]([Object(k["b"])(),b["b"]("design:type","function"===typeof(R="undefined"!==typeof P.a&&P.a)&&R||Object)],V.prototype,"person",void 0),b["a"]([Object(k["b"])(),b["b"]("design:type",Number)],V.prototype,"timeLimitInSeconds",void 0),b["a"]([Object(k["b"])(),b["b"]("design:type","function"===typeof(B="undefined"!==typeof P.a&&P.a)&&B||Object)],V.prototype,"talkingPerson",void 0),b["a"]([Object(k["b"])(),b["b"]("design:type","function"===typeof(D="undefined"!==typeof Function&&Function)&&D||Object)],V.prototype,"setTalkingPerson",void 0),b["a"]([Object(k["b"])(),b["b"]("design:type","function"===typeof(U="undefined"!==typeof Function&&Function)&&U||Object)],V.prototype,"removePerson",void 0),V=b["a"]([k["a"]],V);var X=V,Q=X,ee=(n("fp4G"),Object(a["a"])(Q,x,L,!1,null,"f81e65a8",null)),te=ee.exports,ne=function(){function e(){Object(p["a"])(this,e)}return Object(g["a"])(e,[{key:"getImage",value:function(t){return t<e.images.length?e.images[t]:""}},{key:"getNextImage",value:function(){return e.lastImageIndex++,this.getImage(e.lastImageIndex)}}],[{key:"createImageLinks",value:function(e){for(var t=[],n=0;n<e;n++)t.push("img/avatars/"+n+".png");return t}}]),e}();ne.images=ne.createImageLinks(11),ne.lastImageIndex=0;var ie=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(h["a"])(this,Object(y["a"])(t).apply(this,arguments)),e.personService=new Y,e.imageService=new ne,e.newPersonName=null,e.newPersonImage="",e.mainStopwatch=new A,e.avatarUrl="img/avatars/1.png",e.imageIndex=0,e}return Object(g["a"])(t,[{key:"created",value:function(){this.newPersonImage=this.imageService.getNextImage()}},{key:"setTalkingPerson",value:function(e){this.$store.commit(Z,e),this.startTalkingTimerWhenPerson(e)}},{key:"setDuration",value:function(e){this.$store.commit(z,e)}},{key:"startTalkingTimerWhenPerson",value:function(e){var t=this;""!==this.talkingPerson.name&&!1===this.mainStopwatch.isRunning()&&this.mainStopwatch.start(function(e){t.setDuration(e)})}},{key:"removePerson",value:function(e){this.personService.remove(e),this.setTalkingPerson(Y.createPerson())}},{key:"clickFirebase",value:function(){}},{key:"addPerson",value:function(){null!==this.newPersonName&&(null===this.personService.findByName(this.newPersonName)?this.personService.add(this.newPersonName,this.newPersonImage):alert("".concat(this.newPersonName," already exists! Choose different name.")),this.newPersonName=null,this.newPersonImage=this.imageService.getNextImage())}},{key:"pauseMainStopwatch",value:function(){!0===this.mainStopwatch.isRunning()&&(this.mainStopwatch.stop(),this.setTalkingPerson(Y.createPerson()))}},{key:"timeLimit",get:function(){return this.$store.state.timeLimit}},{key:"timeLimitInSeconds",get:function(){return O.from_HHmmss_to_Seconds(this.$store.state.timeLimit,!0)}},{key:"personArray",get:function(){return this.$store.state.persons}},{key:"talkingPerson",get:function(){return this.$store.state.talkingPerson}},{key:"duration",get:function(){return this.$store.state.duration}},{key:"durationInHHmmss",get:function(){return O.from_Seconds_to_HHmmss(this.duration,!0)}}]),Object(v["a"])(t,e),t}(k["c"]);ie=b["a"]([Object(k["a"])({components:{HeadPool:N,Pool:te}})],ie);var re=ie,se=re,oe=(n("Kvlu"),Object(a["a"])(se,d,f,!1,null,"0aaa8cf6",null)),ae=oe.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overview"},[n("h1",[e._v("This is an overview page")])])}],le={},me=Object(a["a"])(le,ce,ue,!1,null,null,null),de=me.exports;r["default"].use(m["a"]);var fe=new m["a"]({routes:[{path:"/",name:"standup",component:ae},{path:"/overview",name:"overview",component:de}]}),pe=n("lIOY");Object(pe["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ve=n("iqUP"),ge=n.n(ve),he=function(){function e(){Object(p["a"])(this,e)}return Object(g["a"])(e,null,[{key:"init",value:function(){var t=this;ge.a.initializeApp(e.config),ge.a.auth().signInAnonymously().catch(function(e){e.code;var t=e.message;alert(t)}),ge.a.auth().onAuthStateChanged(function(e){if(e){e.isAnonymous;t.userId=e.uid}else t.userId=null}),this.db=ge.a.firestore();var n=ge.a.firestore(),i={timestampsInSnapshots:!0};n.settings(i),this.db.collection(e.COLLECTION_NAME).onSnapshot(function(t){e.getValue(t.docs[0].id)})}},{key:"sendInformation",value:function(t){e.db.collection(e.COLLECTION_NAME).add({payload:t,added_at:new Date}).then(function(e){console.log("Document written with ID: ",e.id)}).catch(function(e){console.error("Error adding document: ",e)})}},{key:"getValue",value:function(t){this.db.collection(e.COLLECTION_NAME).orderBy("added_at","desc").limit(1).get().then(function(e){e.forEach(function(e){console.log(e.id,"=>",e.data())})})}}]),e}();he.COLLECTION_NAME="stand-up",he.userId=null,he.config={apiKey:"AIzaSyCJelLxh1b2f-EV8lsu-uwvqdYMcoIW5uE",authDomain:"stand-up-manager.firebaseapp.com",databaseURL:"https://stand-up-manager.firebaseio.com",projectId:"stand-up-manager",storageBucket:"stand-up-manager.appspot.com",messagingSenderId:"82403032916"},r["default"].config.productionTip=!1;new r["default"]({router:fe,store:J,render:function(e){return e(l)}}).$mount("#app");var ye=new Y,be=new ne;ye.add("Igor",be.getImage(0)),ye.add("Fede",be.getImage(1)),ye.add("Matheus",be.getImage(2)),ye.add("Fritz",be.getImage(3)),ye.add("Gabriel",be.getImage(4)),he.init()}});
//# sourceMappingURL=app.30cb80ce.js.map