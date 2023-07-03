import{S as X,i as y,s as Q,e as fe,b as h,g as m,d,h as i,U as ge,V as le,Y as we,Z as pe,G as ae,k as ne,a as N,l as se,m as C,c as A,$ as _e,O as ee,E as B,H as re,I as oe,J as ue,o as Ie,ac as Ee,_ as ze,n as K,p as be,P as Le,a4 as Me,v as Ce,f as ke,a0 as Se,aa as We,a3 as Ne,K as Ae,R as Pe,T as De,y as I,z as E,A as z,B as L,w as P,ag as D,ah as F,q as H,r as J,C as k,D as S,F as Z}from"../chunks/index.c17a76e4.js";import{g as ce,b as me}from"../chunks/transition.2e3fc1dd.js";import{b as he}from"../chunks/index.9191482d.js";import{w as Fe}from"../chunks/index.08d2be9f.js";import{r as Ue}from"../chunks/ripple.83ac3a1e.js";import{I as j}from"../chunks/button.5a3614db.js";import{C as x}from"../chunks/code.eed80d1b.js";import{E as qe}from"../chunks/example.b3b9ea27.js";const Be=a=>({}),ve=a=>({}),Ge=a=>({}),de=a=>({});function $e(a){let e,s,n,t;const o=a[9].before,f=ae(o,a,a[8],de),l=a[9].default,$=ae(l,a,a[8],null),v=a[9].after,_=ae(v,a,a[8],ve);return{c(){e=ne(a[1]),f&&f.c(),s=N(),$&&$.c(),n=N(),_&&_.c(),this.h()},l(c){e=se(c,(a[1]||"null").toUpperCase(),{class:!0});var b=C(e);f&&f.l(b),s=A(b),$&&$.l(b),n=A(b),_&&_.l(b),b.forEach(i),this.h()},h(){_e(a[1])(e,{class:"tabs svelte-1odf2lz"}),ee(e,"wide",a[0])},m(c,b){h(c,e,b),f&&f.m(e,null),B(e,s),$&&$.m(e,null),B(e,n),_&&_.m(e,null),t=!0},p(c,b){f&&f.p&&(!t||b&256)&&re(f,o,c,c[8],t?ue(o,c[8],b,Ge):oe(c[8]),de),$&&$.p&&(!t||b&256)&&re($,l,c,c[8],t?ue(l,c[8],b,null):oe(c[8]),null),_&&_.p&&(!t||b&256)&&re(_,v,c,c[8],t?ue(v,c[8],b,Be):oe(c[8]),ve),(!t||b&1)&&ee(e,"wide",c[0])},i(c){t||(m(f,c),m($,c),m(_,c),t=!0)},o(c){d(f,c),d($,c),d(_,c),t=!1},d(c){c&&i(e),f&&f.d(c),$&&$.d(c),_&&_.d(c)}}}function He(a){let e=a[1],s,n,t=a[1]&&$e(a);return{c(){t&&t.c(),s=fe()},l(o){t&&t.l(o),s=fe()},m(o,f){t&&t.m(o,f),h(o,s,f),n=!0},p(o,[f]){o[1]?e?Q(e,o[1])?(t.d(1),t=$e(o),e=o[1],t.c(),t.m(s.parentNode,s)):t.p(o,f):(t=$e(o),e=o[1],t.c(),t.m(s.parentNode,s)):e&&(t.d(1),t=null,e=o[1])},i(o){n||(m(t),n=!0)},o(o){d(t),n=!1},d(o){o&&i(s),t&&t.d(o)}}}function Je(a,e,s){let n,t,{$$slots:o={},$$scope:f}=e;const l=ge("__mui3_theme");le(a,l,w=>s(7,t=w));let{fullWidth:$=!1}=e,{transition:v=!0}=e,{ripple:_=null}=e,{tag:c="div"}=e,b=ce(v,[t.variables.durations.medium2,0,[...t.variables.easing.standard]]);const p=Fe({count:0,ripple:_??t.ripple,transition:he({duration:b.duration,delay:b.delay,easing:me(...b.bezier)})});return le(a,p,w=>s(10,n=w)),we("md-tabs",p),a.$$set=w=>{"fullWidth"in w&&s(0,$=w.fullWidth),"transition"in w&&s(4,v=w.transition),"ripple"in w&&s(5,_=w.ripple),"tag"in w&&s(1,c=w.tag),"$$scope"in w&&s(8,f=w.$$scope)},a.$$.update=()=>{a.$$.dirty&144&&s(6,b=ce(v,[t.variables.durations.medium2,0,[...t.variables.easing.standard]])),a.$$.dirty&160&&pe(p,n.ripple=_??t.ripple,n),a.$$.dirty&64&&pe(p,n.transition=he({duration:b.duration,delay:b.delay,easing:me(...b.bezier)}),n)},[$,c,l,p,v,_,b,t,f,o]}class te extends X{constructor(e){super(),y(this,e,Je,He,Q,{fullWidth:0,transition:4,ripple:5,tag:1})}}function Te(a){let e,s,n,t;return{c(){e=ne("span"),this.h()},l(o){e=se(o,"SPAN",{class:!0}),C(e).forEach(i),this.h()},h(){K(e,"class","line svelte-1knr5nh")},m(o,f){h(o,e,f),t=!0},i(o){t||(o&&Ae(()=>{t&&(n&&n.end(1),s=Pe(e,a[5],{key:"tab"}),s.start())}),t=!0)},o(o){s&&s.invalidate(),o&&(n=De(e,a[4],{key:"tab"})),t=!1},d(o){o&&i(e),o&&n&&n.end()}}}function ie(a){let e,s,n,t,o,f,l=`${100/a[3].count}%`,$,v,_;const c=a[14].default,b=ae(c,a,a[13],null);let p=a[6]&&Te(a),w=[{disabled:o=a[0]?void 0:a[2]},{class:"tab svelte-1knr5nh"},{href:a[0]}],W={};for(let u=0;u<w.length;u+=1)W=ze(W,w[u]);return{c(){e=ne(a[0]?"a":"button"),s=ne("span"),n=ne("span"),b&&b.c(),t=N(),p&&p.c(),this.h()},l(u){e=se(u,((a[0]?"a":"button")||"null").toUpperCase(),{disabled:!0,class:!0,href:!0});var T=C(e);s=se(T,"SPAN",{class:!0});var M=C(s);n=se(M,"SPAN",{class:!0});var G=C(n);b&&b.l(G),G.forEach(i),t=A(M),p&&p.l(M),M.forEach(i),T.forEach(i),this.h()},h(){K(n,"class","inner svelte-1knr5nh"),K(s,"class","content svelte-1knr5nh"),_e(a[0]?"a":"button")(e,W),ee(e,"disabled",a[2]&&a[0]),ee(e,"active",a[6]),be(e,"width",l)},m(u,T){h(u,e,T),B(e,s),B(s,n),b&&b.m(n,null),B(s,t),p&&p.m(s,null),$=!0,v||(_=[Le(e,"click",a[10]),Me(f=Ue.call(null,e,a[1]??a[7].ripple))],v=!0)},p(u,T){b&&b.p&&(!$||T&8192)&&re(b,c,u,u[13],$?ue(c,u[13],T,null):oe(u[13]),null),u[6]?p?T&64&&m(p,1):(p=Te(u),p.c(),m(p,1),p.m(s,null)):p&&(Ce(),d(p,1,1,()=>{p=null}),ke()),_e(u[0]?"a":"button")(e,W=Se(w,[(!$||T&5&&o!==(o=u[0]?void 0:u[2]))&&{disabled:o},{class:"tab svelte-1knr5nh"},(!$||T&1)&&{href:u[0]}])),f&&We(f.update)&&T&130&&f.update.call(null,u[1]??u[7].ripple),ee(e,"disabled",u[2]&&u[0]),ee(e,"active",u[6]),T&8&&l!==(l=`${100/u[3].count}%`)&&be(e,"width",l)},i(u){$||(m(b,u),m(p),$=!0)},o(u){d(b,u),d(p),$=!1},d(u){u&&i(e),b&&b.d(u),p&&p.d(),v=!1,Ne(_)}}}function Ke(a){let e=a[0]?"a":"button",s,n,t=(a[0]?"a":"button")&&ie(a);return{c(){t&&t.c(),s=fe()},l(o){t&&t.l(o),s=fe()},m(o,f){t&&t.m(o,f),h(o,s,f),n=!0},p(o,[f]){o[0],e?Q(e,o[0]?"a":"button")?(t.d(1),t=ie(o),e=o[0]?"a":"button",t.c(),t.m(s.parentNode,s)):t.p(o,f):(t=ie(o),e=o[0]?"a":"button",t.c(),t.m(s.parentNode,s))},i(o){n||(m(t),n=!0)},o(o){d(t),n=!1},d(o){o&&i(s),t&&t.d(o)}}}function Oe(a,e,s){let n,t,{$$slots:o={},$$scope:f}=e;const l=ge("__mui3_theme");le(a,l,M=>s(7,t=M));let{href:$=null}=e,{group:v=null}=e,{value:_=null}=e,{ripple:c=null}=e,{disabled:b=!1}=e;const p=ge("md-tabs");le(a,p,M=>s(3,n=M));let w,W,u=!1;Ie(()=>{pe(p,n.count+=1,n),s(4,[w,W]=n.transition,w,(s(5,W),s(3,n)))}),Ee(()=>{pe(p,n.count-=1,n)});function T(){u||$||s(11,v=_)}return a.$$set=M=>{"href"in M&&s(0,$=M.href),"group"in M&&s(11,v=M.group),"value"in M&&s(12,_=M.value),"ripple"in M&&s(1,c=M.ripple),"disabled"in M&&s(2,b=M.disabled),"$$scope"in M&&s(13,f=M.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&s(4,[w,W]=n.transition,w,(s(5,W),s(3,n))),a.$$.dirty&6145&&v!==null&&($?s(6,u=String(v)===$):s(6,u=v===_))},[$,c,b,n,w,W,u,t,l,p,T,v,_,f,o]}class U extends X{constructor(e){super(),y(this,e,Oe,Ke,Q,{href:0,group:11,value:12,ripple:1,disabled:2})}}function Re(a){let e;return{c(){e=H("Tab #1")},l(s){e=J(s,"Tab #1")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function Ve(a){let e;return{c(){e=H("Tab #2")},l(s){e=J(s,"Tab #2")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function Ye(a){let e;return{c(){e=H("Tab #3")},l(s){e=J(s,"Tab #3")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function Ze(a){let e;return{c(){e=H("Tab #4")},l(s){e=J(s,"Tab #4")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function je(a){let e,s,n,t,o,f,l,$,v,_,c,b;function p(r){a[1](r)}let w={value:1,$$slots:{default:[Re]},$$scope:{ctx:a}};a[0]!==void 0&&(w.group=a[0]),e=new U({props:w}),P.push(()=>D(e,"group",p));function W(r){a[2](r)}let u={value:2,$$slots:{default:[Ve]},$$scope:{ctx:a}};a[0]!==void 0&&(u.group=a[0]),t=new U({props:u}),P.push(()=>D(t,"group",W));function T(r){a[3](r)}let M={value:3,$$slots:{default:[Ye]},$$scope:{ctx:a}};a[0]!==void 0&&(M.group=a[0]),l=new U({props:M}),P.push(()=>D(l,"group",T));function G(r){a[4](r)}let q={value:4,$$slots:{default:[Ze]},$$scope:{ctx:a}};return a[0]!==void 0&&(q.group=a[0]),_=new U({props:q}),P.push(()=>D(_,"group",G)),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),f=N(),I(l.$$.fragment),v=N(),I(_.$$.fragment)},l(r){E(e.$$.fragment,r),n=A(r),E(t.$$.fragment,r),f=A(r),E(l.$$.fragment,r),v=A(r),E(_.$$.fragment,r)},m(r,g){z(e,r,g),h(r,n,g),z(t,r,g),h(r,f,g),z(l,r,g),h(r,v,g),z(_,r,g),b=!0},p(r,g){const O={};g&32&&(O.$$scope={dirty:g,ctx:r}),!s&&g&1&&(s=!0,O.group=r[0],F(()=>s=!1)),e.$set(O);const R={};g&32&&(R.$$scope={dirty:g,ctx:r}),!o&&g&1&&(o=!0,R.group=r[0],F(()=>o=!1)),t.$set(R);const V={};g&32&&(V.$$scope={dirty:g,ctx:r}),!$&&g&1&&($=!0,V.group=r[0],F(()=>$=!1)),l.$set(V);const Y={};g&32&&(Y.$$scope={dirty:g,ctx:r}),!c&&g&1&&(c=!0,Y.group=r[0],F(()=>c=!1)),_.$set(Y)},i(r){b||(m(e.$$.fragment,r),m(t.$$.fragment,r),m(l.$$.fragment,r),m(_.$$.fragment,r),b=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),d(l.$$.fragment,r),d(_.$$.fragment,r),b=!1},d(r){L(e,r),r&&i(n),L(t,r),r&&i(f),L(l,r),r&&i(v),L(_,r)}}}function Qe(a){let e,s;return e=new te({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&33&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function Xe(a,e,s){let n=1;function t($){n=$,s(0,n)}function o($){n=$,s(0,n)}function f($){n=$,s(0,n)}function l($){n=$,s(0,n)}return[n,t,o,f,l]}class ye extends X{constructor(e){super(),y(this,e,Xe,Qe,Q,{})}}const xe=`<script>
	import { Tabs, Tab } from '@mui3/tabs';

	let group = 1;
<\/script>

<Tabs>
    <Tab bind:group value={1}>Tab #1</Tab>
    <Tab bind:group value={2}>Tab #2</Tab>
    <Tab bind:group value={3}>Tab #3</Tab>
    <Tab bind:group value={4}>Tab #4</Tab>
</Tabs>
`;function et(a){let e;return{c(){e=H("Tab #1")},l(s){e=J(s,"Tab #1")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function tt(a){let e;return{c(){e=H("Tab #2")},l(s){e=J(s,"Tab #2")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function nt(a){let e;return{c(){e=H("Tab #3")},l(s){e=J(s,"Tab #3")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function st(a){let e;return{c(){e=H("Tab #4")},l(s){e=J(s,"Tab #4")},m(s,n){h(s,e,n)},d(s){s&&i(e)}}}function at(a){let e,s,n,t,o,f,l,$,v,_,c,b;function p(r){a[1](r)}let w={value:1,$$slots:{default:[et]},$$scope:{ctx:a}};a[0]!==void 0&&(w.group=a[0]),e=new U({props:w}),P.push(()=>D(e,"group",p));function W(r){a[2](r)}let u={value:2,$$slots:{default:[tt]},$$scope:{ctx:a}};a[0]!==void 0&&(u.group=a[0]),t=new U({props:u}),P.push(()=>D(t,"group",W));function T(r){a[3](r)}let M={value:3,$$slots:{default:[nt]},$$scope:{ctx:a}};a[0]!==void 0&&(M.group=a[0]),l=new U({props:M}),P.push(()=>D(l,"group",T));function G(r){a[4](r)}let q={value:4,$$slots:{default:[st]},$$scope:{ctx:a}};return a[0]!==void 0&&(q.group=a[0]),_=new U({props:q}),P.push(()=>D(_,"group",G)),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),f=N(),I(l.$$.fragment),v=N(),I(_.$$.fragment)},l(r){E(e.$$.fragment,r),n=A(r),E(t.$$.fragment,r),f=A(r),E(l.$$.fragment,r),v=A(r),E(_.$$.fragment,r)},m(r,g){z(e,r,g),h(r,n,g),z(t,r,g),h(r,f,g),z(l,r,g),h(r,v,g),z(_,r,g),b=!0},p(r,g){const O={};g&32&&(O.$$scope={dirty:g,ctx:r}),!s&&g&1&&(s=!0,O.group=r[0],F(()=>s=!1)),e.$set(O);const R={};g&32&&(R.$$scope={dirty:g,ctx:r}),!o&&g&1&&(o=!0,R.group=r[0],F(()=>o=!1)),t.$set(R);const V={};g&32&&(V.$$scope={dirty:g,ctx:r}),!$&&g&1&&($=!0,V.group=r[0],F(()=>$=!1)),l.$set(V);const Y={};g&32&&(Y.$$scope={dirty:g,ctx:r}),!c&&g&1&&(c=!0,Y.group=r[0],F(()=>c=!1)),_.$set(Y)},i(r){b||(m(e.$$.fragment,r),m(t.$$.fragment,r),m(l.$$.fragment,r),m(_.$$.fragment,r),b=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),d(l.$$.fragment,r),d(_.$$.fragment,r),b=!1},d(r){L(e,r),r&&i(n),L(t,r),r&&i(f),L(l,r),r&&i(v),L(_,r)}}}function rt(a){let e,s;return e=new te({props:{fullWidth:!0,$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&33&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function ot(a,e,s){let n=1;function t($){n=$,s(0,n)}function o($){n=$,s(0,n)}function f($){n=$,s(0,n)}function l($){n=$,s(0,n)}return[n,t,o,f,l]}class ut extends X{constructor(e){super(),y(this,e,ot,rt,Q,{})}}const ft=`<script>
	import { Tabs, Tab } from '@mui3/tabs';

	let group = 1;
<\/script>

<Tabs fullWidth>
    <Tab bind:group value={1}>Tab #1</Tab>
    <Tab bind:group value={2}>Tab #2</Tab>
    <Tab bind:group value={3}>Tab #3</Tab>
    <Tab bind:group value={4}>Tab #4</Tab>
</Tabs>
`;function lt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function pt(a){let e,s;return e=new j({props:{$$slots:{default:[lt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,t){const o={};t&32&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function $t(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function it(a){let e,s;return e=new j({props:{$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,t){const o={};t&32&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function gt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function _t(a){let e,s;return e=new j({props:{$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,t){const o={};t&32&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function bt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function ct(a){let e,s;return e=new j({props:{$$slots:{default:[bt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,t){const o={};t&32&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function mt(a){let e,s,n,t,o,f,l,$,v,_,c,b;function p(r){a[1](r)}let w={value:1,$$slots:{default:[pt]},$$scope:{ctx:a}};a[0]!==void 0&&(w.group=a[0]),e=new U({props:w}),P.push(()=>D(e,"group",p));function W(r){a[2](r)}let u={value:2,$$slots:{default:[it]},$$scope:{ctx:a}};a[0]!==void 0&&(u.group=a[0]),t=new U({props:u}),P.push(()=>D(t,"group",W));function T(r){a[3](r)}let M={value:3,$$slots:{default:[_t]},$$scope:{ctx:a}};a[0]!==void 0&&(M.group=a[0]),l=new U({props:M}),P.push(()=>D(l,"group",T));function G(r){a[4](r)}let q={value:4,$$slots:{default:[ct]},$$scope:{ctx:a}};return a[0]!==void 0&&(q.group=a[0]),_=new U({props:q}),P.push(()=>D(_,"group",G)),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),f=N(),I(l.$$.fragment),v=N(),I(_.$$.fragment)},l(r){E(e.$$.fragment,r),n=A(r),E(t.$$.fragment,r),f=A(r),E(l.$$.fragment,r),v=A(r),E(_.$$.fragment,r)},m(r,g){z(e,r,g),h(r,n,g),z(t,r,g),h(r,f,g),z(l,r,g),h(r,v,g),z(_,r,g),b=!0},p(r,g){const O={};g&32&&(O.$$scope={dirty:g,ctx:r}),!s&&g&1&&(s=!0,O.group=r[0],F(()=>s=!1)),e.$set(O);const R={};g&32&&(R.$$scope={dirty:g,ctx:r}),!o&&g&1&&(o=!0,R.group=r[0],F(()=>o=!1)),t.$set(R);const V={};g&32&&(V.$$scope={dirty:g,ctx:r}),!$&&g&1&&($=!0,V.group=r[0],F(()=>$=!1)),l.$set(V);const Y={};g&32&&(Y.$$scope={dirty:g,ctx:r}),!c&&g&1&&(c=!0,Y.group=r[0],F(()=>c=!1)),_.$set(Y)},i(r){b||(m(e.$$.fragment,r),m(t.$$.fragment,r),m(l.$$.fragment,r),m(_.$$.fragment,r),b=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),d(l.$$.fragment,r),d(_.$$.fragment,r),b=!1},d(r){L(e,r),r&&i(n),L(t,r),r&&i(f),L(l,r),r&&i(v),L(_,r)}}}function ht(a){let e,s;return e=new te({props:{$$slots:{default:[mt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&33&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function vt(a,e,s){let n=1;function t($){n=$,s(0,n)}function o($){n=$,s(0,n)}function f($){n=$,s(0,n)}function l($){n=$,s(0,n)}return[n,t,o,f,l]}class dt extends X{constructor(e){super(),y(this,e,vt,ht,Q,{})}}const Tt=`<script>
	import Icon from '@mui3/icon';
	import { Tabs, Tab } from '@mui3/tabs';

	let group = 1;
<\/script>

<Tabs>
    <Tab bind:group value={1}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
    </Tab>
    <Tab bind:group value={2}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
    </Tab>
    <Tab bind:group value={3}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
    </Tab>
    <Tab bind:group value={4}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
    </Tab>
</Tabs>

`;function wt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function It(a){let e,s,n;return e=new j({props:{$$slots:{default:[wt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #1`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #1`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&32&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Et(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function zt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Et]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #2`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #2`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&32&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Lt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function Mt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #3`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #3`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&32&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Ct(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function kt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Ct]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #4`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #4`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&32&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function St(a){let e,s,n,t,o,f,l,$,v,_,c,b;function p(r){a[1](r)}let w={value:1,$$slots:{default:[It]},$$scope:{ctx:a}};a[0]!==void 0&&(w.group=a[0]),e=new U({props:w}),P.push(()=>D(e,"group",p));function W(r){a[2](r)}let u={value:2,$$slots:{default:[zt]},$$scope:{ctx:a}};a[0]!==void 0&&(u.group=a[0]),t=new U({props:u}),P.push(()=>D(t,"group",W));function T(r){a[3](r)}let M={value:3,$$slots:{default:[Mt]},$$scope:{ctx:a}};a[0]!==void 0&&(M.group=a[0]),l=new U({props:M}),P.push(()=>D(l,"group",T));function G(r){a[4](r)}let q={value:4,$$slots:{default:[kt]},$$scope:{ctx:a}};return a[0]!==void 0&&(q.group=a[0]),_=new U({props:q}),P.push(()=>D(_,"group",G)),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),f=N(),I(l.$$.fragment),v=N(),I(_.$$.fragment)},l(r){E(e.$$.fragment,r),n=A(r),E(t.$$.fragment,r),f=A(r),E(l.$$.fragment,r),v=A(r),E(_.$$.fragment,r)},m(r,g){z(e,r,g),h(r,n,g),z(t,r,g),h(r,f,g),z(l,r,g),h(r,v,g),z(_,r,g),b=!0},p(r,g){const O={};g&32&&(O.$$scope={dirty:g,ctx:r}),!s&&g&1&&(s=!0,O.group=r[0],F(()=>s=!1)),e.$set(O);const R={};g&32&&(R.$$scope={dirty:g,ctx:r}),!o&&g&1&&(o=!0,R.group=r[0],F(()=>o=!1)),t.$set(R);const V={};g&32&&(V.$$scope={dirty:g,ctx:r}),!$&&g&1&&($=!0,V.group=r[0],F(()=>$=!1)),l.$set(V);const Y={};g&32&&(Y.$$scope={dirty:g,ctx:r}),!c&&g&1&&(c=!0,Y.group=r[0],F(()=>c=!1)),_.$set(Y)},i(r){b||(m(e.$$.fragment,r),m(t.$$.fragment,r),m(l.$$.fragment,r),m(_.$$.fragment,r),b=!0)},o(r){d(e.$$.fragment,r),d(t.$$.fragment,r),d(l.$$.fragment,r),d(_.$$.fragment,r),b=!1},d(r){L(e,r),r&&i(n),L(t,r),r&&i(f),L(l,r),r&&i(v),L(_,r)}}}function Wt(a){let e,s;return e=new te({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&33&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function Nt(a,e,s){let n=1;function t($){n=$,s(0,n)}function o($){n=$,s(0,n)}function f($){n=$,s(0,n)}function l($){n=$,s(0,n)}return[n,t,o,f,l]}class At extends X{constructor(e){super(),y(this,e,Nt,Wt,Q,{})}}const Pt=`<script>
	import Icon from '@mui3/icon';
	import { Tabs, Tab } from '@mui3/tabs';

	let group = 1;
<\/script>

<Tabs>
    <Tab bind:group value={1}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #1
    </Tab>
    <Tab bind:group value={2}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #2
    </Tab>
    <Tab bind:group value={3}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #3
    </Tab>
    <Tab bind:group value={4}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #4
    </Tab>
</Tabs>

`;function Dt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function Ft(a){let e,s,n;return e=new j({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #1 with long lable`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #1 with long lable`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Ut(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function qt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Ut]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #2 with long lable`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #2 with long lable`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Bt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function Gt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Bt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #3`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #3`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Ht(a){let e,s,n,t,o,f,l,$,v;function _(u){a[1](u)}let c={value:1,$$slots:{default:[Ft]},$$scope:{ctx:a}};a[0]!==void 0&&(c.group=a[0]),e=new U({props:c}),P.push(()=>D(e,"group",_));function b(u){a[2](u)}let p={value:2,$$slots:{default:[qt]},$$scope:{ctx:a}};a[0]!==void 0&&(p.group=a[0]),t=new U({props:p}),P.push(()=>D(t,"group",b));function w(u){a[3](u)}let W={value:3,$$slots:{default:[Gt]},$$scope:{ctx:a}};return a[0]!==void 0&&(W.group=a[0]),l=new U({props:W}),P.push(()=>D(l,"group",w)),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),f=N(),I(l.$$.fragment)},l(u){E(e.$$.fragment,u),n=A(u),E(t.$$.fragment,u),f=A(u),E(l.$$.fragment,u)},m(u,T){z(e,u,T),h(u,n,T),z(t,u,T),h(u,f,T),z(l,u,T),v=!0},p(u,T){const M={};T&16&&(M.$$scope={dirty:T,ctx:u}),!s&&T&1&&(s=!0,M.group=u[0],F(()=>s=!1)),e.$set(M);const G={};T&16&&(G.$$scope={dirty:T,ctx:u}),!o&&T&1&&(o=!0,G.group=u[0],F(()=>o=!1)),t.$set(G);const q={};T&16&&(q.$$scope={dirty:T,ctx:u}),!$&&T&1&&($=!0,q.group=u[0],F(()=>$=!1)),l.$set(q)},i(u){v||(m(e.$$.fragment,u),m(t.$$.fragment,u),m(l.$$.fragment,u),v=!0)},o(u){d(e.$$.fragment,u),d(t.$$.fragment,u),d(l.$$.fragment,u),v=!1},d(u){L(e,u),u&&i(n),L(t,u),u&&i(f),L(l,u)}}}function Jt(a){let e,s;return e=new te({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&17&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function Kt(a,e,s){let n=1;function t(l){n=l,s(0,n)}function o(l){n=l,s(0,n)}function f(l){n=l,s(0,n)}return[n,t,o,f]}class Ot extends X{constructor(e){super(),y(this,e,Kt,Jt,Q,{})}}const Rt=`<script>
	import Icon from '@mui3/icon';
	import { Tabs, Tab } from '@mui3/tabs';

	let group = 1;
<\/script>

<Tabs>
    <Tab bind:group value={1}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #1 with long lable
    </Tab>
    <Tab bind:group value={2}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #2 with long lable
    </Tab>
    <Tab bind:group value={3}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #3
    </Tab>
</Tabs>

`;function Vt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function Yt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #1`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #1`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Zt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function jt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #2`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #2`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function Qt(a){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(n){e=S(n,"svg",{});var t=C(e);s=S(t,"path",{d:!0}),C(s).forEach(i),t.forEach(i),this.h()},h(){K(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(n,t){h(n,e,t),B(e,s)},p:Z,d(n){n&&i(e)}}}function Xt(a){let e,s,n;return e=new j({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment),s=H(`
        Tab #3`)},l(t){E(e.$$.fragment,t),s=J(t,`
        Tab #3`)},m(t,o){z(e,t,o),h(t,s,o),n=!0},p(t,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){L(e,t),t&&i(s)}}}function yt(a){let e,s,n,t,o,f,l,$,v;function _(u){a[1](u)}let c={value:1,$$slots:{default:[Yt]},$$scope:{ctx:a}};a[0]!==void 0&&(c.group=a[0]),e=new U({props:c}),P.push(()=>D(e,"group",_));function b(u){a[2](u)}let p={value:2,disabled:!0,$$slots:{default:[jt]},$$scope:{ctx:a}};a[0]!==void 0&&(p.group=a[0]),t=new U({props:p}),P.push(()=>D(t,"group",b));function w(u){a[3](u)}let W={value:3,$$slots:{default:[Xt]},$$scope:{ctx:a}};return a[0]!==void 0&&(W.group=a[0]),l=new U({props:W}),P.push(()=>D(l,"group",w)),{c(){I(e.$$.fragment),n=N(),I(t.$$.fragment),f=N(),I(l.$$.fragment)},l(u){E(e.$$.fragment,u),n=A(u),E(t.$$.fragment,u),f=A(u),E(l.$$.fragment,u)},m(u,T){z(e,u,T),h(u,n,T),z(t,u,T),h(u,f,T),z(l,u,T),v=!0},p(u,T){const M={};T&16&&(M.$$scope={dirty:T,ctx:u}),!s&&T&1&&(s=!0,M.group=u[0],F(()=>s=!1)),e.$set(M);const G={};T&16&&(G.$$scope={dirty:T,ctx:u}),!o&&T&1&&(o=!0,G.group=u[0],F(()=>o=!1)),t.$set(G);const q={};T&16&&(q.$$scope={dirty:T,ctx:u}),!$&&T&1&&($=!0,q.group=u[0],F(()=>$=!1)),l.$set(q)},i(u){v||(m(e.$$.fragment,u),m(t.$$.fragment,u),m(l.$$.fragment,u),v=!0)},o(u){d(e.$$.fragment,u),d(t.$$.fragment,u),d(l.$$.fragment,u),v=!1},d(u){L(e,u),u&&i(n),L(t,u),u&&i(f),L(l,u)}}}function xt(a){let e,s;return e=new te({props:{$$slots:{default:[yt]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&17&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function en(a,e,s){let n=1;function t(l){n=l,s(0,n)}function o(l){n=l,s(0,n)}function f(l){n=l,s(0,n)}return[n,t,o,f]}class tn extends X{constructor(e){super(),y(this,e,en,xt,Q,{})}}const nn=`<script>
	import Icon from '@mui3/icon';
	import { Tabs, Tab } from '@mui3/tabs';

	let group = 1;
<\/script>

<Tabs>
    <Tab bind:group value={1}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #1
    </Tab>
    <Tab bind:group value={2} disabled>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #2
    </Tab>
    <Tab bind:group value={3}>
        <Icon>
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        Tab #3
    </Tab>
</Tabs>

`,sn={title:"Simple",Component:ye,code:xe},an={title:"Full width",Component:ut,code:ft},rn={title:"Icons",Component:dt,code:Tt},on={title:"Icons and Text",Component:At,code:Pt},un={title:"Long label",Component:Ot,code:Rt},fn={title:"Disabled",Component:tn,code:nn};function ln(a){let e,s,n,t,o,f,l,$,v,_,c,b;return e=new x({props:{data:sn}}),n=new x({props:{data:an}}),o=new x({props:{data:rn}}),l=new x({props:{data:on}}),v=new x({props:{data:un}}),c=new x({props:{data:fn}}),{c(){I(e.$$.fragment),s=N(),I(n.$$.fragment),t=N(),I(o.$$.fragment),f=N(),I(l.$$.fragment),$=N(),I(v.$$.fragment),_=N(),I(c.$$.fragment)},l(p){E(e.$$.fragment,p),s=A(p),E(n.$$.fragment,p),t=A(p),E(o.$$.fragment,p),f=A(p),E(l.$$.fragment,p),$=A(p),E(v.$$.fragment,p),_=A(p),E(c.$$.fragment,p)},m(p,w){z(e,p,w),h(p,s,w),z(n,p,w),h(p,t,w),z(o,p,w),h(p,f,w),z(l,p,w),h(p,$,w),z(v,p,w),h(p,_,w),z(c,p,w),b=!0},p:Z,i(p){b||(m(e.$$.fragment,p),m(n.$$.fragment,p),m(o.$$.fragment,p),m(l.$$.fragment,p),m(v.$$.fragment,p),m(c.$$.fragment,p),b=!0)},o(p){d(e.$$.fragment,p),d(n.$$.fragment,p),d(o.$$.fragment,p),d(l.$$.fragment,p),d(v.$$.fragment,p),d(c.$$.fragment,p),b=!1},d(p){L(e,p),p&&i(s),L(n,p),p&&i(t),L(o,p),p&&i(f),L(l,p),p&&i($),L(v,p),p&&i(_),L(c,p)}}}function pn(a){let e,s;return e=new qe({props:{title:"Tabs",description:"Tabs organize content across different screens, data sets, and other interactions",link:"https://m3.material.io/components/tabs/overview",$$slots:{default:[ln]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,t){z(e,n,t),s=!0},p(n,[t]){const o={};t&1&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){s||(m(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){L(e,n)}}}function $n(a){return[]}class Tn extends X{constructor(e){super(),y(this,e,$n,pn,Q,{})}}export{Tn as component};
