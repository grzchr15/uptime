function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function c(t,e,n,r,s,o,i){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=a(e,n,r,i);t.p(s,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}let f,d,h=!1;function p(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function m(t,e){h?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=p(1,s+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[o]+1;const i=o+1;n[i]=t,s=Math.max(i,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function g(t,e,n){h&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function _(){return y(" ")}function E(){return y("")}function S(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function x(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:T(t,r,e[r])}function N(t){return Array.from(t.childNodes)}function P(t,e,n,r,s=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o))return n(o),t.splice(r,1),s||(t.claim_info.last_index=r),o}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o))return n(o),t.splice(r,1),s?t.claim_info.last_index--:t.claim_info.last_index=r,o}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,e,n,r){return P(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?$(e):w(e)))}function L(t,e){return P(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>y(e)),!0)}function R(t){return L(t," ")}function k(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function O(t){const e=k(t,"HTML_TAG_START",0),n=k(t,"HTML_TAG_END",e);if(e===n)return new z;const r=t.splice(e,n+1);return b(r[0]),b(r[r.length-1]),new z(r.slice(1,r.length-1))}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function H(t,e){t.value=null==e?"":e}function C(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function j(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=C();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=S(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=S(n.contentWindow,"resize",e)}),m(t,n),()=>{(r||s&&n.contentWindow)&&s(),b(n)}}function M(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z{constructor(t){this.e=this.n=null,this.l=t}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.l?this.n=this.l:this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(b)}}function D(t){d=t}function G(){if(!d)throw new Error("Function called outside component initialization");return d}function q(t){G().$$.on_mount.push(t)}function B(t){G().$$.after_update.push(t)}function K(t){G().$$.on_destroy.push(t)}const J=[],V=[],W=[],F=[],Y=Promise.resolve();let Q=!1;function X(t){W.push(t)}let Z=!1;const tt=new Set;function et(){if(!Z){Z=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];D(e),nt(e.$$)}for(D(null),J.length=0;V.length;)V.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];tt.has(e)||(tt.add(e),e())}W.length=0}while(J.length);for(;F.length;)F.pop()();Q=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const rt=new Set;let st;function ot(){st={r:0,c:[],p:st}}function it(){st.r||s(st.c),st=st.p}function at(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(rt.has(t))return;rt.add(t),st.c.push((()=>{rt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function lt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ut(t){return"object"==typeof t&&null!==t?t:{}}function ft(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function ht(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||X((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(X)}function pt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(J.push(t),Q||(Q=!0,Y.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,o,i,a,c,l=[-1]){const u=d;D(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&mt(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){h=!0;const t=N(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&at(e.$$.fragment),ht(e,n.target,n.anchor,n.customElement),h=!1,et()}D(u)}class bt{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function wt(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!vt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),vt.push(n,e)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.push(c),1===s.length&&(r=n(o)||t),i(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const $t={};var yt={owner:"grzchr15",repo:"uptime","user-agent":"github-grzchr15",sites:[{name:"Google",url:"https://www.google.com"},{name:"Wikipedia",url:"https://en.wikipedia.org"},{name:"bretterhofer.at",url:"https://bretterhofer.at"},{name:"h4.bretterhofer.at",url:"https://h4.bretterhofer.at/toggle.php"},{name:"h6.bretterhofer.at",url:"https://h6.bretterhofer.at"},{name:"volkstanz.st",url:"https://volkstanz.st"},{name:"volkstanzwannwo.at",url:"https://volkstanzwannwo.at"},{name:"kinderundjugendtanz.at",url:"https://kinderundjugendtanz.at"},{name:"andritz.me",url:"https://andritz.me"}],"status-website":{baseUrl:"/uptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Uptime",introTitle:"**Uptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a status page which uses **real-time** data from our [Github repository](https://github.com/grzchr15/uptime)."},navbar:[{title:"Status",href:"/uptime"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}],path:"https://grzchr15.github.io/uptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function _t(t,e,n){const r=t.slice();return r[1]=e[n],r}function Et(e){let n,r,s,o=yt["status-website"]&&!yt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=w("img"),this.h()},l(t){n=I(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){T(n,"alt",""),n.src!==(r=yt["status-website"].logoUrl)&&T(n,"src",r),T(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}(),i=yt["status-website"]&&!yt["status-website"].hideNavTitle&&function(e){let n,r,s=yt["status-website"].name+"";return{c(){n=w("div"),r=y(s)},l(t){n=I(t,"DIV",{});var e=N(n);r=L(e,s),e.forEach(b)},m(t,e){g(t,n,e),m(n,r)},p:t,d(t){t&&b(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=_(),i&&i.c(),this.h()},l(t){n=I(t,"DIV",{});var e=N(n);r=I(e,"A",{href:!0,class:!0});var a=N(r);o&&o.l(a),s=R(a),i&&i.l(a),a.forEach(b),e.forEach(b),this.h()},h(){T(r,"href",yt["status-website"].logoHref||yt.path),T(r,"class","logo svelte-a08hsz")},m(t,e){g(t,n,e),m(n,r),o&&o.m(r,null),m(r,s),i&&i.m(r,null)},p(t,e){yt["status-website"]&&!yt["status-website"].hideNavLogo&&o.p(t,e),yt["status-website"]&&!yt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&b(n),o&&o.d(),i&&i.d()}}}function St(t){let e,n,r,s,o,i=t[1].title+"";return{c(){e=w("li"),n=w("a"),r=y(i),o=_(),this.h()},l(t){e=I(t,"LI",{});var s=N(e);n=I(s,"A",{"aria-current":!0,href:!0,class:!0});var a=N(n);r=L(a,i),a.forEach(b),o=R(s),s.forEach(b),this.h()},h(){T(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),T(n,"href",t[1].href.replace("$OWNER",yt.owner).replace("$REPO",yt.repo)),T(n,"class","svelte-a08hsz")},m(t,s){g(t,e,s),m(e,n),m(n,r),m(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&T(n,"aria-current",s)},d(t){t&&b(e)}}}function xt(e){let n,r,s,o,i,a=yt["status-website"]&&yt["status-website"].logoUrl&&Et(),c=yt["status-website"]&&yt["status-website"].navbar&&function(t){let e,n=yt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=St(_t(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);g(t,e,n)},p(t,s){if(1&s){let o;for(n=yt["status-website"].navbar,o=0;o<n.length;o+=1){const i=_t(t,n,o);r[o]?r[o].p(i,s):(r[o]=St(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&b(e)}}}(e),l=yt["status-website"]&&yt["status-website"].navbarGitHub&&!yt["status-website"].navbar&&function(e){let n,r,s,o=yt.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=y(o),this.h()},l(t){n=I(t,"LI",{});var e=N(n);r=I(e,"A",{href:!0,class:!0});var i=N(r);s=L(i,o),i.forEach(b),e.forEach(b),this.h()},h(){T(r,"href",`https://github.com/${yt.owner}/${yt.repo}`),T(r,"class","svelte-a08hsz")},m(t,e){g(t,n,e),m(n,r),m(r,s)},p:t,d(t){t&&b(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=_(),o=w("ul"),c&&c.c(),i=_(),l&&l.c(),this.h()},l(t){n=I(t,"NAV",{class:!0});var e=N(n);r=I(e,"DIV",{class:!0});var u=N(r);a&&a.l(u),s=R(u),o=I(u,"UL",{class:!0});var f=N(o);c&&c.l(f),i=R(f),l&&l.l(f),f.forEach(b),u.forEach(b),e.forEach(b),this.h()},h(){T(o,"class","svelte-a08hsz"),T(r,"class","container svelte-a08hsz"),T(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e),m(n,r),a&&a.m(r,null),m(r,s),m(r,o),c&&c.m(o,null),m(o,i),l&&l.m(o,null)},p(t,[e]){yt["status-website"]&&yt["status-website"].logoUrl&&a.p(t,e),yt["status-website"]&&yt["status-website"].navbar&&c.p(t,e),yt["status-website"]&&yt["status-website"].navbarGitHub&&!yt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&b(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Tt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class At extends bt{constructor(t){super(),gt(this,t,Tt,xt,i,{segment:0})}}var Nt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Pt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function It(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Nt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Pt(It(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Lt(Pt(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+It(s[8])+'" alt="'+It(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+It(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Lt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+It(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Rt(t,e,n){const r=t.slice();return r[3]=e[n],r}function kt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ot(t,e,n){const r=t.slice();return r[8]=e[n],r}function Ut(e){let n;return{c(){n=w("link"),this.h()},l(t){n=I(t,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",`${yt.path}/themes/${(yt["status-website"]||{}).theme||"light"}.css`)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ht(e){let n;return{c(){n=w("link"),this.h()},l(t){n=I(t,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",(yt["status-website"]||{}).themeUrl)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ct(e){let n,r;return{c(){n=w("script"),this.h()},l(t){n=I(t,"SCRIPT",{src:!0}),N(n).forEach(b),this.h()},h(){n.src!==(r=e[8].src)&&T(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function jt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=I(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){T(n,"rel",e[3].rel),T(n,"href",e[3].href),T(n,"media",e[3].media)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Mt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=I(t,"META",{name:!0,content:!0}),this.h()},h(){T(n,"name",e[3].name),T(n,"content",e[3].content)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function zt(e){let n,r,s,o,i,l,u,f,d,h,p,$,y,S,x,A,P,L,k=Lt(yt.i18n.footer.replace(/\$REPO/,`https://github.com/${yt.owner}/${yt.repo}`))+"",U=(yt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(yt["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,r=E(),this.h()},l(t){n=O(t),r=E(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),g(t,r,e)},p:t,d(t){t&&b(r),t&&n.d()}}}();let H=((yt["status-website"]||{}).themeUrl?Ht:Ut)(e),C=(yt["status-website"]||{}).scripts&&function(t){let e,n=(yt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Ct(Ot(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);g(t,e,n)},p(t,s){if(0&s){let o;for(n=(yt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ot(t,n,o);r[o]?r[o].p(i,s):(r[o]=Ct(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&b(e)}}}(e),j=(yt["status-website"]||{}).links&&function(t){let e,n=(yt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=jt(kt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);g(t,e,n)},p(t,s){if(0&s){let o;for(n=(yt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=kt(t,n,o);r[o]?r[o].p(i,s):(r[o]=jt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&b(e)}}}(e),D=(yt["status-website"]||{}).metaTags&&function(t){let e,n=(yt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Mt(Rt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=E()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=E()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);g(t,e,n)},p(t,s){if(0&s){let o;for(n=(yt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Rt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Mt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&b(e)}}}(e),G=yt["status-website"].css&&function(e){let n,r,s=`<style>${yt["status-website"].css}</style>`;return{c(){n=new z,r=E(),this.h()},l(t){n=O(t),r=E(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),g(t,r,e)},p:t,d(t){t&&b(r),t&&n.d()}}}(),q=yt["status-website"].js&&function(e){let n,r,s=`<script>${yt["status-website"].js}<\/script>`;return{c(){n=new z,r=E(),this.h()},l(t){n=O(t),r=E(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),g(t,r,e)},p:t,d(t){t&&b(r),t&&n.d()}}}(),B=(yt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(yt["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,r=E(),this.h()},l(t){n=O(t),r=E(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),g(t,r,e)},p:t,d(t){t&&b(r),t&&n.d()}}}();$=new At({props:{segment:e[0]}});const K=e[2].default,J=function(t,e,n,r){if(t){const s=a(t,e,n,r);return t[0](s)}}(K,e,e[1],null);return{c(){U&&U.c(),n=E(),H.c(),r=w("link"),s=w("link"),o=w("link"),C&&C.c(),i=E(),j&&j.c(),l=E(),D&&D.c(),u=E(),G&&G.c(),f=E(),q&&q.c(),d=E(),h=_(),B&&B.c(),p=_(),ft($.$$.fragment),y=_(),S=w("main"),J&&J.c(),x=_(),A=w("footer"),P=w("p"),this.h()},l(t){const e=M('[data-svelte="svelte-ri9y7q"]',document.head);U&&U.l(e),n=E(),H.l(e),r=I(e,"LINK",{rel:!0,href:!0}),s=I(e,"LINK",{rel:!0,type:!0,href:!0}),o=I(e,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(e),i=E(),j&&j.l(e),l=E(),D&&D.l(e),u=E(),G&&G.l(e),f=E(),q&&q.l(e),d=E(),e.forEach(b),h=R(t),B&&B.l(t),p=R(t),dt($.$$.fragment,t),y=R(t),S=I(t,"MAIN",{class:!0});var a=N(S);J&&J.l(a),a.forEach(b),x=R(t),A=I(t,"FOOTER",{class:!0});var c=N(A);P=I(c,"P",{}),N(P).forEach(b),c.forEach(b),this.h()},h(){T(r,"rel","stylesheet"),T(r,"href",`${yt.path}/global.css`),T(s,"rel","icon"),T(s,"type","image/svg"),T(s,"href",(yt["status-website"]||{}).faviconSvg||(yt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),T(o,"rel","icon"),T(o,"type","image/png"),T(o,"href",(yt["status-website"]||{}).favicon||"/logo-192.png"),T(S,"class","container"),T(A,"class","svelte-jbr799")},m(t,e){U&&U.m(document.head,null),m(document.head,n),H.m(document.head,null),m(document.head,r),m(document.head,s),m(document.head,o),C&&C.m(document.head,null),m(document.head,i),j&&j.m(document.head,null),m(document.head,l),D&&D.m(document.head,null),m(document.head,u),G&&G.m(document.head,null),m(document.head,f),q&&q.m(document.head,null),m(document.head,d),g(t,h,e),B&&B.m(t,e),g(t,p,e),ht($,t,e),g(t,y,e),g(t,S,e),J&&J.m(S,null),g(t,x,e),g(t,A,e),m(A,P),P.innerHTML=k,L=!0},p(t,[e]){(yt["status-website"]||{}).customHeadHtml&&U.p(t,e),H.p(t,e),(yt["status-website"]||{}).scripts&&C.p(t,e),(yt["status-website"]||{}).links&&j.p(t,e),(yt["status-website"]||{}).metaTags&&D.p(t,e),yt["status-website"].css&&G.p(t,e),yt["status-website"].js&&q.p(t,e),(yt["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),$.$set(n),J&&J.p&&(!L||2&e)&&c(J,K,t,t[1],L?e:-1,null,null)},i(t){L||(at($.$$.fragment,t),at(J,t),L=!0)},o(t){ct($.$$.fragment,t),ct(J,t),L=!1},d(t){U&&U.d(t),b(n),H.d(t),b(r),b(s),b(o),C&&C.d(t),b(i),j&&j.d(t),b(l),D&&D.d(t),b(u),G&&G.d(t),b(f),q&&q.d(t),b(d),t&&b(h),B&&B.d(t),t&&b(p),pt($,t),t&&b(y),t&&b(S),J&&J.d(t),t&&b(x),t&&b(A)}}}function Dt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Gt extends bt{constructor(t){super(),gt(this,t,Dt,zt,i,{segment:0})}}function qt(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=y(r)},l(t){e=I(t,"PRE",{});var s=N(e);n=L(s,r),s.forEach(b)},m(t,r){g(t,e,r),m(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d(t){t&&b(e)}}}function Bt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&qt(e);return{c(){r=_(),s=w("h1"),o=y(e[0]),i=_(),a=w("p"),c=y(f),l=_(),d&&d.c(),u=E(),this.h()},l(t){M('[data-svelte="svelte-1moakz"]',document.head).forEach(b),r=R(t),s=I(t,"H1",{class:!0});var n=N(s);o=L(n,e[0]),n.forEach(b),i=R(t),a=I(t,"P",{class:!0});var h=N(a);c=L(h,f),h.forEach(b),l=R(t),d&&d.l(t),u=E(),this.h()},h(){T(s,"class","svelte-17w3omn"),T(a,"class","svelte-17w3omn")},m(t,e){g(t,r,e),g(t,s,e),m(s,o),g(t,i,e),g(t,a,e),m(a,c),g(t,l,e),d&&d.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&U(o,t[0]),2&e&&f!==(f=t[1].message+"")&&U(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=qt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&b(r),t&&b(s),t&&b(i),t&&b(a),t&&b(l),d&&d.d(t),t&&b(u)}}}function Kt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Jt extends bt{constructor(t){super(),gt(this,t,Kt,Bt,i,{status:0,error:1})}}function Vt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ft(n.$$.fragment),r=E()},l(t){n&&dt(n.$$.fragment,t),r=E()},m(t,e){n&&ht(n,t,e),g(t,r,e),s=!0},p(t,e){const s=16&e?lt(o,[ut(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ot();const t=n;ct(t.$$.fragment,1,0,(()=>{pt(t,1)})),it()}i?(n=new i(a()),ft(n.$$.fragment),at(n.$$.fragment,1),ht(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&at(n.$$.fragment,t),s=!0)},o(t){n&&ct(n.$$.fragment,t),s=!1},d(t){t&&b(r),n&&pt(n,t)}}}function Wt(t){let e,n;return e=new Jt({props:{error:t[0],status:t[1]}}),{c(){ft(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,r){ht(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(at(e.$$.fragment,t),n=!0)},o(t){ct(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function Ft(t){let e,n,r,s;const o=[Wt,Vt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=E()},l(t){n.l(t),r=E()},m(t,n){i[e].m(t,n),g(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ot(),ct(i[c],1,1,(()=>{i[c]=null})),it(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),at(n,1),n.m(r.parentNode,r))},i(t){s||(at(n),s=!0)},o(t){ct(n),s=!1},d(t){i[e].d(t),t&&b(r)}}}function Yt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Ft]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Gt({props:o}),{c(){ft(n.$$.fragment)},l(t){dt(n.$$.fragment,t)},m(t,e){ht(n,t,e),r=!0},p(t,[e]){const r=12&e?lt(s,[4&e&&{segment:t[2][0]},8&e&&ut(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(at(n.$$.fragment,t),r=!0)},o(t){ct(n.$$.fragment,t),r=!1},d(t){pt(n,t)}}}function Qt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return B(l),u=$t,f=r,G().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class Xt extends bt{constructor(t){super(),gt(this,t,Qt,Yt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Zt=[],te=[{js:()=>Promise.all([import("./index.9c5577cb.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.c213a807.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].cfb94181.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].adb93f25.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.08f385d5.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ee=(ne=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ne(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ne(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ne;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function re(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let oe,ie=1;const ae="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ce={};let le,ue;function fe(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function de(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(le))return null;let e=t.pathname.slice(le.length);if(""===e&&(e="/"),!Zt.some((t=>t.test(e))))for(let n=0;n<ee.length;n+=1){const r=ee[n],s=r.pattern.exec(e);if(s){const n=fe(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function he(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=se(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=de(s);if(o){ge(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),ae.pushState({id:oe},"",s.href)}}function pe(){return{x:pageXOffset,y:pageYOffset}}function me(t){if(ce[oe]=pe(),t.state){const e=de(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else!function(t){ie=t}(ie+1),function(t){oe=t}(ie),ae.replaceState({id:oe},"",location.href)}function ge(t,e,n,r){return re(this,void 0,void 0,(function*(){const s=!!e;if(s)oe=e;else{const t=pe();ce[oe]=t,oe=e=++ie,ce[oe]=n?t:{x:0,y:0}}if(yield ue(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ce[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ce[oe]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function be(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ve,we=null;function $e(t){const e=se(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=de(new URL(t,be(document)));if(e)we&&t===we.href||(we={href:t,promise:Ce(e)}),we.promise}(e.href)}function ye(t){clearTimeout(ve),ve=setTimeout((()=>{$e(t)}),20)}function _e(t,e={noscroll:!1,replaceState:!1}){const n=de(new URL(t,be(document)));if(n){const r=ge(n,null,e.noscroll);return ae[e.replaceState?"replaceState":"pushState"]({id:oe},"",t),r}return location.href=t,new Promise((()=>{}))}const Ee="undefined"!=typeof __SAPPER__&&__SAPPER__;let Se,xe,Te,Ae=!1,Ne=[],Pe="{}";const Ie={page:function(t){const e=wt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:wt(null),session:wt(Ee&&Ee.session)};let Le,Re,ke;function Oe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ue(t){return re(this,void 0,void 0,(function*(){Se&&Ie.preloading.set(!0);const e=function(t){return we&&we.href===t.href?we.promise:Ce(t)}(t),n=xe={},r=yield e,{redirect:s}=r;if(n===xe)if(s)yield _e(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield He(n,e,Oe(e,t.page))}}))}function He(t,e,n){return re(this,void 0,void 0,(function*(){Ie.page.set(n),Ie.preloading.set(!1),Se?Se.$set(e):(e.stores={page:{subscribe:Ie.page.subscribe},preloading:{subscribe:Ie.preloading.subscribe},session:Ie.session},e.level0={props:yield Te},e.notify=Ie.page.notify,Se=new Xt({target:ke,props:e,hydrate:!0})),Ne=t,Pe=JSON.stringify(n.query),Ae=!0,Re=!1}))}function Ce(t){return re(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Te){const t=()=>({});Te=Ee.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Le)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>re(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Pe)return!0;const s=Ne[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(Re||u||!Ne[a]||Ne[a].part!==e.i){u=!1;const{default:r,preload:s}=yield te[e.i].js();let o;o=Ae||!Ee.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Le):{}:Ee.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=Ne[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var je,Me,ze;Ie.session.subscribe((t=>re(void 0,void 0,void 0,(function*(){if(Le=t,!Ae)return;Re=!0;const e=de(new URL(location.href)),n=xe={},{redirect:r,props:s,branch:o}=yield Ce(e);n===xe&&(r?yield _e(r.location,{replaceState:!0}):yield He(o,s,Oe(s,e.page)))})))),je={target:document.querySelector("#sapper")},Me=je.target,ke=Me,ze=Ee.baseUrl,le=ze,ue=Ue,"scrollRestoration"in ae&&(ae.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ae.scrollRestoration="auto"})),addEventListener("load",(()=>{ae.scrollRestoration="manual"})),addEventListener("click",he),addEventListener("popstate",me),addEventListener("touchstart",$e),addEventListener("mousemove",ye),Ee.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ee;Te||(Te=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Te},level1:{props:{status:o,error:i},component:Jt},segments:s},c=fe(n);He([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ae.replaceState({id:ie},"",e);const n=de(new URL(location.href));if(n)return ge(n,ie,!0,t)}));export{pt as A,S as B,s as C,V as D,O as E,u as F,M as G,z as H,Lt as I,$ as J,_e as K,H as L,x as M,e as N,A as O,lt as P,B as Q,K as R,bt as S,l as T,ut as U,X as V,j as W,N as a,L as b,I as c,b as d,w as e,T as f,g,m as h,gt as i,_ as j,R as k,ot as l,ct as m,t as n,it as o,at as p,q,yt as r,i as s,y as t,U as u,E as v,v as w,ft as x,dt as y,ht as z};

import __inject_styles from './inject_styles.5607aec6.js';