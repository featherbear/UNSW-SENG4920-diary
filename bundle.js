var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function a(t){return t()}function i(){return Object.create(null)}function r(t){t.forEach(a)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,a){return t[1]?n({},n(e.$$scope.ctx,t[1](a?a(e):{}))):e.$$scope.ctx}const s="undefined"!=typeof window;let d=s?()=>window.performance.now():()=>Date.now(),u=s?t=>requestAnimationFrame(t):t;const f=new Set;let p,m=!1;function h(){f.forEach(t=>{t[0](d())||(f.delete(t),t[1]())}),(m=f.size>0)&&u(h)}function g(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function w(){return k(" ")}function x(){return k("")}function A(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function I(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function j(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let _,C=0,M={};function T(t,e,n,a,i,r,o,l=0){const c=16.666/a;let s="{\n";for(let t=0;t<=1;t+=c){const a=e+(n-e)*r(t);s+=100*t+`%{${o(a,1-a)}}\n`}const d=s+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${l}`;if(!M[u]){if(!p){const t=v("style");document.head.appendChild(t),p=t.sheet}M[u]=!0,p.insertRule(`@keyframes ${u} ${d}`,p.cssRules.length)}const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${u} ${a}ms linear ${i}ms 1 both`,C+=1,u}function P(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--C&&u(()=>{if(C)return;let t=p.cssRules.length;for(;t--;)p.deleteRule(t);M={}})}function D(t){_=t}const E=[],F=[],L=[],R=[],W=Promise.resolve();let O,N=!1;function q(t){L.push(t)}function B(){const t=new Set;do{for(;E.length;){const t=E.shift();D(t),H(t.$$)}for(;F.length;)F.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];t.has(n)||(n(),t.add(n))}L.length=0}while(E.length);for(;R.length;)R.pop()();N=!1}function H(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(q))}function U(t,e,n){t.dispatchEvent(S(`${e?"intro":"outro"}${n}`))}const z=new Set;let X;function G(){X={r:0,c:[],p:X}}function V(){X.r||r(X.c),X=X.p}function Y(t,e){t&&t.i&&(z.delete(t),t.i(e))}function J(t,e,n,a){if(t&&t.o){if(z.has(t))return;z.add(t),X.c.push(()=>{z.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}}const K={duration:0};function Q(n,a,i,l){let c=a(n,i),s=l?0:1,p=null,g=null,y=null;function $(){y&&P(n,y)}function b(t,e){const n=t.b-s;return e*=Math.abs(n),{a:s,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(a){const{delay:i=0,duration:o=300,easing:l=e,tick:v=t,css:k}=c||K,w={start:d()+i,b:a};a||(w.group=X,X.r+=1),p?g=w:(k&&($(),y=T(n,s,a,o,i,l,k)),a&&v(0,1),p=b(w,o),q(()=>U(n,a,"start")),function(t){let e;m||(m=!0,u(h)),new Promise(n=>{f.add(e=[t,n])})}(t=>{if(g&&t>g.start&&(p=b(g,o),g=null,U(n,p.b,"start"),k&&($(),y=T(n,s,p.b,p.duration,0,l,c.css))),p)if(t>=p.end)v(s=p.b,1-s),U(n,p.b,"end"),g||(p.b?$():--p.group.r||r(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;s=p.a+p.d*l(e/p.duration),v(s,1-s)}return!(!p&&!g)}))}return{run(t){o(c)?(O||(O=Promise.resolve()).then(()=>{O=null}),O).then(()=>{c=c(),v(t)}):v(t)},end(){$(),p=g=null}}}function Z(t,e,n){const{fragment:i,on_mount:l,on_destroy:c,after_update:s}=t.$$;i.m(e,n),q(()=>{const e=l.map(a).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(q)}function tt(t,e){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function et(t,e){t.$$.dirty||(E.push(t),N||(N=!0,W.then(B)),t.$$.dirty=i()),t.$$.dirty[e]=!0}function nt(e,n,a,o,l,c){const s=_;D(e);const d=n.props||{},u=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:i(),dirty:null};let f=!1;var p;u.ctx=a?a(e,d,(t,n,a=n)=>(u.ctx&&l(u.ctx[t],u.ctx[t]=a)&&(u.bound[t]&&u.bound[t](a),f&&et(e,t)),n)):d,u.update(),f=!0,r(u.before_update),u.fragment=o(u.ctx),n.target&&(n.hydrate?u.fragment.l((p=n.target,Array.from(p.childNodes))):u.fragment.c(),n.intro&&Y(e.$$.fragment),Z(e,n.target,n.anchor),B()),D(s)}class at{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function it(t){var e,a,i;const r=t.$$slots.default,o=function(t,e,n){if(t){const a=c(t,e,n);return t[0](a)}}(r,t,null);return{c(){e=v("div"),o&&o.c(),I(e,"class","tile gradientBorder svelte-245kjv"),i=A(e,"click",t.click_handler)},l(t){o&&o.l(div_nodes)},m(t,n){y(t,e,n),o&&o.m(e,null),a=!0},p(t,e){o&&o.p&&t.$$scope&&o.p(function(t,e,a,i){return t[1]?n({},n(e.$$scope.changed||{},t[1](i?i(a):{}))):e.$$scope.changed||{}}(r,e,t,null),c(r,e,null))},i(t){a||(Y(o,t),a=!0)},o(t){J(o,t),a=!1},d(t){t&&$(e),o&&o.d(t),i()}}}function rt(t,e,n){let{src:a}=e,{$$slots:i={},$$scope:r}=e;return t.$set=(t=>{"src"in t&&n("src",a=t.src),"$$scope"in t&&n("$$scope",r=t.$$scope)}),{src:a,click_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)},$$slots:i,$$scope:r}}class ot extends at{constructor(t){super(),nt(this,t,rt,it,l,["src"])}}function lt(t,{delay:e=0,duration:n=400}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*a}`}}function ct(e){var n,a;return{c(){n=v("a"),I(a=v("iframe"),"title",e.title),I(a,"src",e.url),I(a,"class","svelte-17t83rb"),I(n,"href",e.url),I(n,"class","site-thumbnail svelte-17t83rb")},m(t,e){y(t,n,e),g(n,a)},p(t,e){t.title&&I(a,"title",e.title),t.url&&(I(a,"src",e.url),I(n,"href",e.url))},i:t,o:t,d(t){t&&$(n)}}}function st(t,e,n){let{url:a,title:i=""}=e;return t.$set=(t=>{"url"in t&&n("url",a=t.url),"title"in t&&n("title",i=t.title)}),{url:a,title:i}}class dt extends at{constructor(t){super(),nt(this,t,st,ct,l,["url","title"])}}function ut(t,e,n){const a=Object.create(t);return a.entry=e[n],a}function ft(t){var e,n,a=t.data.title+"";return{c(){e=v("h1"),n=k(a)},m(t,a){y(t,e,a),g(e,n)},p(t,e){t.data&&a!==(a=e.data.title+"")&&j(n,a)},d(t){t&&$(e)}}}function pt(t){var e,n;function a(t,n){return(null==e||t.data)&&(e=!!Array.isArray(n.data.content)),e?ht:mt}var i=a(null,t),r=i(t);return{c(){r.c(),n=x()},m(t,e){r.m(t,e),y(t,n,e)},p(t,e){i===(i=a(t,e))&&r?r.p(t,e):(r.d(1),(r=i(e))&&(r.c(),r.m(n.parentNode,n)))},d(t){r.d(t),t&&$(n)}}}function mt(t){var e,n=t.data.content+"";return{c(){e=v("p")},m(t,a){y(t,e,a),e.innerHTML=n},p(t,a){t.data&&n!==(n=a.data.content+"")&&(e.innerHTML=n)},d(t){t&&$(e)}}}function ht(t){var e;let n=t.data.content,a=[];for(let e=0;e<n.length;e+=1)a[e]=gt(ut(t,n,e));return{c(){e=v("ul");for(let t=0;t<a.length;t+=1)a[t].c()},m(t,n){y(t,e,n);for(let t=0;t<a.length;t+=1)a[t].m(e,null)},p(t,i){if(t.data){let r;for(n=i.data.content,r=0;r<n.length;r+=1){const o=ut(i,n,r);a[r]?a[r].p(t,o):(a[r]=gt(o),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(t){t&&$(e),b(a,t)}}}function gt(t){var e,n=t.entry+"";return{c(){e=v("li")},m(t,a){y(t,e,a),e.innerHTML=n},p(t,a){t.data&&n!==(n=a.entry+"")&&(e.innerHTML=n)},d(t){t&&$(e)}}}function yt(t){var e;function n(t,e){return e.commitID?bt:$t}var a=n(0,t),i=a(t);return{c(){i.c(),e=x()},m(t,n){i.m(t,n),y(t,e,n)},p(t,r){a===(a=n(0,r))&&i?i.p(t,r):(i.d(1),(i=a(r))&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&$(e)}}}function $t(t){var e,n,a,i,r;return{c(){e=v("p"),n=k("Link: "),a=v("a"),i=k(t.link),I(a,"href",r=t.data.link)},m(t,r){y(t,e,r),g(e,n),g(e,a),g(a,i)},p(t,e){t.link&&j(i,e.link),t.data&&r!==(r=e.data.link)&&I(a,"href",r)},d(t){t&&$(e)}}}function bt(t){var e,n,a,i,r;return{c(){e=v("p"),n=k("Commit: "),a=v("a"),i=k(t.commitID),I(a,"href",r=t.data.link)},m(t,r){y(t,e,r),g(e,n),g(e,a),g(a,i)},p(t,e){t.commitID&&j(i,e.commitID),t.data&&r!==(r=e.data.link)&&I(a,"href",r)},d(t){t&&$(e)}}}function vt(t){var e,n=new dt({props:{url:t.data.frame.url,title:t.data.frame.title}});return{c(){n.$$.fragment.c()},m(t,a){Z(n,t,a),e=!0},p(t,e){var a={};t.data&&(a.url=e.data.frame.url),t.data&&(a.title=e.data.frame.title),n.$set(a)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){tt(n,t)}}}function kt(t){var e,n,a,i,r,o,l,c,s,d,u=t.data.title&&ft(t),f=t.data.content&&pt(t),p=t.data.link&&yt(t),m=t.data.frame&&vt(t);return{c(){e=v("div"),n=v("div"),a=w(),i=v("div"),u&&u.c(),r=w(),f&&f.c(),o=w(),p&&p.c(),l=w(),m&&m.c(),I(n,"class","background svelte-1bsyt44"),I(i,"class","content svelte-1bsyt44"),I(e,"class","lightbox svelte-1bsyt44"),d=A(n,"click",t.close)},m(t,c){y(t,e,c),g(e,n),g(e,a),g(e,i),u&&u.m(i,null),g(i,r),f&&f.m(i,null),g(i,o),p&&p.m(i,null),g(i,l),m&&m.m(i,null),s=!0},p(t,e){e.data.title?u?u.p(t,e):((u=ft(e)).c(),u.m(i,r)):u&&(u.d(1),u=null),e.data.content?f?f.p(t,e):((f=pt(e)).c(),f.m(i,o)):f&&(f.d(1),f=null),e.data.link?p?p.p(t,e):((p=yt(e)).c(),p.m(i,l)):p&&(p.d(1),p=null),e.data.frame?m?(m.p(t,e),Y(m,1)):((m=vt(e)).c(),Y(m,1),m.m(i,null)):m&&(G(),J(m,1,1,()=>{m=null}),V())},i(t){s||(Y(m),q(()=>{c||(c=Q(e,lt,{duration:300},!0)),c.run(1)}),s=!0)},o(t){J(m),c||(c=Q(e,lt,{duration:300},!1)),c.run(0),s=!1},d(t){t&&$(e),u&&u.d(),f&&f.d(),p&&p.d(),m&&m.d(),t&&c&&c.end(),d()}}}function wt(t,e,n){const a=function(){const t=_;return(e,n)=>{const a=t.$$.callbacks[e];if(a){const i=S(e,n);a.slice().forEach(e=>{e.call(t,i)})}}}();let i="",r="",{data:o}=e;return t.$set=(t=>{"data"in t&&n("data",o=t.data)}),t.$$.update=((t={data:1,link:1})=>{if(t.data||t.link){n("link",r=(o.link||"").replace(/^https?:\/\//i,""));let t=/^github.com\/.+?\/blob\/(.+?)\//i.exec(r);t&&n("commitID",i=t[1].slice(0,8))}}),{close:function(){a("destroy")},commitID:i,link:r,data:o}}class xt extends at{constructor(t){super(),nt(this,t,wt,kt,l,["data"])}}function At(t,e,n){const a=Object.create(t);return a.item=e[n],a}function It(t){var e,n,a=t.items.title+"";return{c(){e=v("h2"),n=k(a)},m(t,a){y(t,e,a),g(e,n)},p(t,e){t.items&&a!==(a=e.items.title+"")&&j(n,a)},d(t){t&&$(e)}}}function jt(t){var e,n;let a=t.items.content,i=[];for(let e=0;e<a.length;e+=1)i[e]=Mt(At(t,a,e));const r=t=>J(i[t],1,1,()=>{i[t]=null});return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=x()},m(t,a){for(let e=0;e<i.length;e+=1)i[e].m(t,a);y(t,e,a),n=!0},p(t,n){if(t.items){let o;for(a=n.items.content,o=0;o<a.length;o+=1){const r=At(n,a,o);i[o]?(i[o].p(t,r),Y(i[o],1)):(i[o]=Mt(r),i[o].c(),Y(i[o],1),i[o].m(e.parentNode,e))}for(G(),o=a.length;o<i.length;o+=1)r(o);V()}},i(t){if(!n){for(let t=0;t<a.length;t+=1)Y(i[t]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)J(i[t]);n=!1},d(t){b(i,t),t&&$(e)}}}function St(t){var e,n=t.item.title+"";return{c(){e=k(n)},m(t,n){y(t,e,n)},p(t,a){t.items&&n!==(n=a.item.title+"")&&j(e,n)},d(t){t&&$(e)}}}function _t(t){var e,n,a=t.item.date+"";return{c(){e=v("div"),n=k(a),I(e,"class","subtitle svelte-pra9m2")},m(t,a){y(t,e,a),g(e,n)},p(t,e){t.items&&a!==(a=e.item.date+"")&&j(n,a)},d(t){t&&$(e)}}}function Ct(t){var e,n,a=t.item.title&&St(t),i=t.item.date&&_t(t);return{c(){a&&a.c(),e=w(),i&&i.c(),n=x()},m(t,r){a&&a.m(t,r),y(t,e,r),i&&i.m(t,r),y(t,n,r)},p(t,r){r.item.title?a?a.p(t,r):((a=St(r)).c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r.item.date?i?i.p(t,r):((i=_t(r)).c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(t){a&&a.d(t),t&&$(e),i&&i.d(t),t&&$(n)}}}function Mt(t){var e,n,a;var i=new ot({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}});return i.$on("click",function(){return t.click_handler(t)}),{c(){e=v("div"),i.$$.fragment.c(),n=w(),I(e,"class","spacer svelte-pra9m2")},m(t,r){y(t,e,r),Z(i,e,null),g(e,n),a=!0},p(e,n){t=n;var a={};(e.$$scope||e.items)&&(a.$$scope={changed:e,ctx:t}),i.$set(a)},i(t){a||(Y(i.$$.fragment,t),a=!0)},o(t){J(i.$$.fragment,t),a=!1},d(t){t&&$(e),tt(i)}}}function Tt(t){var e,n,a,i,r=new ot({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),o=t.items.content&&jt(t);return{c(){e=v("div"),r.$$.fragment.c(),n=w(),o&&o.c(),I(e,"class","filmstrip svelte-pra9m2")},m(t,a){y(t,e,a),Z(r,e,null),g(e,n),o&&o.m(e,null),i=!0},p(t,n){var a={};(t.$$scope||t.items)&&(a.$$scope={changed:t,ctx:n}),r.$set(a),n.items.content?o?(o.p(t,n),Y(o,1)):((o=jt(n)).c(),Y(o,1),o.m(e,null)):o&&(G(),J(o,1,1,()=>{o=null}),V())},i(t){i||(Y(r.$$.fragment,t),Y(o),q(()=>{a||(a=Q(e,lt,{delay:1e3,duration:800},!0)),a.run(1)}),i=!0)},o(t){J(r.$$.fragment,t),J(o),a||(a=Q(e,lt,{delay:1e3,duration:800},!1)),a.run(0),i=!1},d(t){t&&$(e),tt(r),o&&o.d(),t&&a&&a.end()}}}function Pt(t,e,n){let{items:a={title:"",content:[]}}=e;return t.$set=(t=>{"items"in t&&n("items",a=t.items)}),{items:a,click_handler:({item:t})=>xt.createLightbox({...t,title:[a.title,t.title,t.date].filter(t=>t).join(" - ")})}}xt.createLightbox=function(t){const e=new xt({target:document.body,props:{data:t},intro:!0});return e.$on("destroy",()=>{e.$destroy()}),e.promise};class Dt extends at{constructor(t){super(),nt(this,t,Pt,Tt,l,["items"])}}var Et=[{title:"Week 3",content:[{title:"Tuesday",date:"29/09/2020",content:["Create GitHub organisation and project repository with CRA w/ Typescript","Experimented with acquiring an access token from the Spotify API"],link:"https://github.com/featherbear/sandbox-spotify-test-api-auth"},{title:"Tuesday (Meeting)",date:"29/09/2020",content:["Confirm project name - <b>Splitify</b>","Discussed epics and features, creating them in Pivotal Tracker","Assigned roles and tasks to the stories"]},{title:"Wednesday",date:"30/09/2020",content:"Created logos and branding resource",link:"https://github.com/Splitify/branding",frame:{url:"https://splitify.github.io/branding/",title:"Splitify Branding"}},{title:"Thursday (Meeting)",date:"1/10/2020",content:["Looked at similar and competing products (Organize Your Music, Remixr, Dubolt)","Select technologies to use in the application - React w/ TypeScript, Server-less backend, Single Page Application","Decided criteria for Beta and Release MVPs"]},{title:"Friday",date:"2/10/2020",content:"Created project pitch presentation",link:"https://github.com/Splitify/initial-project-pitch",frame:{url:"https://splitify.github.io/initial-project-pitch/",title:"Splitify Project Pitch"}}]},{title:"Week 4",content:[{title:"Friday (Meeting)",date:"9/10/2020",content:["- No work was done on the project this week as everyone was busy -","Team brainstormed, discussed and developed mockups of the application's interface and functionality"]}]},{title:"Week 5",content:[{title:"Friday",date:"16/10/2020",content:["Add storage provider to allow storing of application data locally within the browser (for data caching)","Create authentication model for interacting with the Spotify API"]},{title:"Friday (Meeting)",date:"16/10/2020",content:["Team discussed application data structure, as well as what data will be requested from the Spotify API"]}]},{title:"Week 6",content:[{title:"Sunday",date:"18/10/2020",content:["Add Spotify-themed connect button to the login page"]},{title:"Monday",date:"19/10/2020",content:["Create playlist selector component that lets the user select the desired playlist to split"]},{title:"Wednesday",date:"21/10/2020",content:["Implement playlist selector search functionality","UI and UX improvements of the the playlist selector","Implement accumulation function (<i>Accumulumatorinator</i>)"],link:"https://github.com/Splitify/splitify/blob/db136e05744b6463b60f0d9ef53cc1d274efde98/src/helpers/Accumulumatorinator.tsx"},{title:"Thursday",date:"22/10/2020",content:["Rewrite parser functions to return an incomplete data object, that can be completed expanded at a future time","Add Skeleton loader to the Track entries in the playlists"]},{title:"Friday",date:"23/10/2020",content:["Implement caching variant of the Accumulumatorinator","Modify parsers to use the Caching Accumulumatorinator","Optimise Spotify API request to fetch only track IDs","Update Spotify API scopes to view private playlists","Implement the creation of unique stub subplaylists","Rewrite the `expand` method of incomplete data objects to return the same promise, so that all callers can await the promise"]},{title:"Friday (Meeting)",date:"23/10/2020",content:["Outstanding UI and UX design questions were discussed and resolved","Discussed problem about the Spotify API returning a paginated list of results rather than all results at once"]}]},{title:"Week 7",content:[{title:"Thursday",date:"29/10/2020",content:['Implement track re-ordering with <a href="https://react-beautiful-dnd.netlify.app/"><pre>react-beautiful-dnd</pre></a>',"Auto-load playlists when the playlist selector is opened"]},{title:"Friday",date:"30/10/2020",content:["Code cleanup and type hinting optimisations"]},{title:"Friday (Meeting)",date:"30/10/2020",content:["Discussed the need for correctly representing audio feature values (i.e. loudness should be in decibels rather than a percentage"]},{title:"Saturday",date:"31/10/2020",content:["Refactor the audio feature selector component","Refactor track listing from the Master Playlist and Sub-Playlist into a TrackList component"]}]},{title:"Week 8",content:[{title:"Monday",date:"2/11/2020",content:["Change Table format of the track listing into a List format, as it was more suitable"]},{title:"Thursday",date:"5/11/2020",content:["Implement virtual lists - which increased application performance by reducing the number of rendered list items (especially when there were over 100 tracks)","Integrate drag and drop functionality with the virtual lists"]},{title:"Friday",date:"6/11/2020",content:["Implement movement of tracks between sub-playlists","Create track group stubs, and a wrapper for tracks so that custom metadata can be attached for each track"]},{title:"Friday (Meeting)",date:"6/11/2020",content:["Concern raised about the lack of genre information in each track, as Spotify (falsely) claims to include genre data in each track. Rather it only includes this data in the artist data",'Team decided to retrieve genre data from the <a href="https://www.last.fm/api">Last.fm API</a>',"Audience suggested the ability to select multiple playlists at the same time as a source pool"]}]},{title:"Week 9",content:[{title:"Wednesday",date:"11/11/2020",content:["UI tweaks","Performance optimisations of track preview and track filters","Implement copying (by drag) of tracks from the master playlist","Fix genre and feature selection behaviour with custom tracks",'Fix bug which would cause playlist loading to fail if a "local" track was in the playlist',"Adjust playlist height to fit the screen","Implemented playlist action panel to contain playlist functions"]},{title:"Friday",date:"13/11/2020",content:["Implement dynamic playlist height calculation, reflective on window resize","Remove hardcoded adjacent component heights, and implement height calculation that respects adjacent components","Move playlist actions into the actions bar"]}]}];function Ft(t,e,n){const a=Object.create(t);return a.data=e[n],a}function Lt(e){var n,a=new Dt({props:{items:e.data}});return{c(){a.$$.fragment.c()},m(t,e){Z(a,t,e),n=!0},p:t,i(t){n||(Y(a.$$.fragment,t),n=!0)},o(t){J(a.$$.fragment,t),n=!1},d(t){tt(a,t)}}}function Rt(t){var e,n,a,i,r;let o=Et.filter(Wt),l=[];for(let e=0;e<o.length;e+=1)l[e]=Lt(Ft(t,o,e));const c=t=>J(l[t],1,1,()=>{l[t]=null});return{c(){e=v("div"),(n=v("div")).innerHTML='<img alt="logo" src="https://splitify.github.io/branding/textmark/textmark@72.png" class="svelte-2utjd5"> <p class="svelte-2utjd5">Project Diary - Andrew Wong (z5206677)</p>',a=w(),i=v("div");for(let t=0;t<l.length;t+=1)l[t].c();I(n,"class","titleBlock gradientAnim svelte-2utjd5"),I(i,"class","overflowContainer svelte-2utjd5"),I(e,"class","container svelte-2utjd5")},m(t,o){y(t,e,o),g(e,n),g(e,a),g(e,i);for(let t=0;t<l.length;t+=1)l[t].m(i,null);r=!0},p(t,e){if(t.diaryData){let n;for(o=Et.filter(Wt),n=0;n<o.length;n+=1){const a=Ft(e,o,n);l[n]?(l[n].p(t,a),Y(l[n],1)):(l[n]=Lt(a),l[n].c(),Y(l[n],1),l[n].m(i,null))}for(G(),n=o.length;n<l.length;n+=1)c(n);V()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)Y(l[t]);r=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)J(l[t]);r=!1},d(t){t&&$(e),b(l,t)}}}const Wt=t=>t.content&&t.content.length;return new class extends at{constructor(t){super(),nt(this,t,null,Rt,l,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
