import{S as K,i as U,s as Y,e as y,b as $,g as u,v as ot,d as m,f as st,h as l,U as At,V as rt,Y as Tt,G as tt,k as R,l as V,m as x,n as D,H as et,I as nt,J as at,K as Et,R as It,T as Mt,Z as Q,X as zt,ac as Lt,a as z,c as L,O as J,E,y as b,z as h,A as v,B as k,q as S,r as B,F as P,C as O,D as j,w as Ct,ag as xt,ah as Dt}from"../chunks/index.c17a76e4.js";import{E as Gt}from"../chunks/example.b3b9ea27.js";import{B as C}from"../chunks/button.9d5c653e.js";import{I as Z}from"../chunks/button.5a3614db.js";import{g as W,b as dt}from"../chunks/transition.2e3fc1dd.js";import{f as Ht,c as Rt}from"../chunks/index.9191482d.js";import{w as Vt}from"../chunks/index.08d2be9f.js";import{C as bt}from"../chunks/code.eed80d1b.js";const Ft=r=>({context:r&1}),ht=r=>({context:r[0]});function vt(r){let t,n,e,a;const o=r[11].default,i=tt(o,r,r[10],ht);return{c(){t=R("div"),i&&i.c(),this.h()},l(s){t=V(s,"DIV",{class:!0});var c=x(t);i&&i.l(c),c.forEach(l),this.h()},h(){D(t,"class","md-snackbar-wrap svelte-1bjf49e")},m(s,c){$(s,t,c),i&&i.m(t,null),a=!0},p(s,c){r=s,i&&i.p&&(!a||c&1025)&&et(i,o,r,r[10],a?at(o,r[10],c,Ft):nt(r[10]),ht)},i(s){a||(u(i,s),s&&Et(()=>{a&&(e&&e.end(1),n=It(t,Nt,{duration:r[1].in.duration,delay:r[1].in.delay,easing:dt(...r[1].in.bezier)}),n.start())}),a=!0)},o(s){m(i,s),n&&n.invalidate(),s&&(e=Mt(t,Ht,{duration:r[1].out.duration,delay:r[1].out.delay,easing:dt(...r[1].out.bezier)})),a=!1},d(s){s&&l(t),i&&i.d(s),s&&e&&e.end()}}}function Pt(r){let t,n,e=r[2]&&vt(r);return{c(){e&&e.c(),t=y()},l(a){e&&e.l(a),t=y()},m(a,o){e&&e.m(a,o),$(a,t,o),n=!0},p(a,[o]){a[2]?e?(e.p(a,o),o&4&&u(e,1)):(e=vt(a),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(ot(),m(e,1,1,()=>{e=null}),st())},i(a){n||(u(e),n=!0)},o(a){m(e),n=!1},d(a){e&&e.d(a),a&&l(t)}}}function Nt(r,{delay:t=0,duration:n=400,easing:e=Rt,axis:a="y"}={}){const o=getComputedStyle(r),i=+o.opacity,s=a==="y"?"height":"width",c=parseFloat(o[s]);return{delay:t,duration:n,easing:e,css:f=>`
				overflow: hidden;
				opacity: ${f*i};
				${s}: ${f*c}px;
			`}}function Ot(r,t,n){let e,a,{$$slots:o={},$$scope:i}=t;const s=At("__mui3_theme");rt(r,s,d=>n(9,a=d));const c=Vt({group:null,keys:{}});rt(r,c,d=>n(0,e=d)),Tt("__mui3_snackbar",c);let{group:f=null}=t,{transition:_=!0}=t,T,I=!1,M,A;function X(d){f?Q(c,e.keys[f]=!0,e):Q(c,e.keys={},e)}function w(d){const N=Object.entries(e.keys).filter(([F,q])=>q);n(2,I=N.length===1),N.length?N.length===1&&(Q(c,[[e.group]]=N,e),n(5,f=e.group)):(Q(c,e.group=null,e),n(5,f=null))}return r.$$set=d=>{"group"in d&&n(5,f=d.group),"transition"in d&&n(6,_=d.transition),"$$scope"in d&&n(10,i=d.$$scope)},r.$$.update=()=>{r.$$.dirty&512&&n(7,M=[a.variables.durations.medium2,0,[...a.variables.easing.standard]]),r.$$.dirty&512&&n(8,A=[a.variables.durations.medium1,0,[...a.variables.easing.standard]]),r.$$.dirty&448&&(typeof _=="boolean"?n(1,T={in:W(_,M),out:W(_,A)}):n(1,T={in:W(_.in,M),out:W(_.out,A)})),r.$$.dirty&32&&X(),r.$$.dirty&1&&w()},[e,T,I,s,c,f,_,M,A,a,i,o]}class jt extends K{constructor(t){super(),U(this,t,Ot,Pt,Y,{group:5,transition:6})}}const qt=r=>({}),kt=r=>({}),Xt=r=>({}),wt=r=>({});function St(r){let t,n,e,a;const o=r[10].default,i=tt(o,r,r[9],null);let s=(r[6].action||r[6].icon)&&Bt(r);return{c(){t=R("div"),n=R("span"),i&&i.c(),e=z(),s&&s.c(),this.h()},l(c){t=V(c,"DIV",{class:!0});var f=x(t);n=V(f,"SPAN",{class:!0});var _=x(n);i&&i.l(_),_.forEach(l),e=L(f),s&&s.l(f),f.forEach(l),this.h()},h(){D(n,"class","md-snackbar-text"),D(t,"class","md-snackbar"),J(t,"md-snackbar-flat",r[0]),J(t,"md-snackbar-stretch",r[2]),J(t,"md-snackbar-vertical",r[3])},m(c,f){$(c,t,f),E(t,n),i&&i.m(n,null),E(t,e),s&&s.m(t,null),a=!0},p(c,f){i&&i.p&&(!a||f&512)&&et(i,o,c,c[9],a?at(o,c[9],f,null):nt(c[9]),null),c[6].action||c[6].icon?s?(s.p(c,f),f&64&&u(s,1)):(s=Bt(c),s.c(),u(s,1),s.m(t,null)):s&&(ot(),m(s,1,1,()=>{s=null}),st()),(!a||f&1)&&J(t,"md-snackbar-flat",c[0]),(!a||f&4)&&J(t,"md-snackbar-stretch",c[2]),(!a||f&8)&&J(t,"md-snackbar-vertical",c[3])},i(c){a||(u(i,c),u(s),a=!0)},o(c){m(i,c),m(s),a=!1},d(c){c&&l(t),i&&i.d(c),s&&s.d()}}}function Bt(r){let t,n,e;const a=r[10].action,o=tt(a,r,r[9],wt),i=r[10].icon,s=tt(i,r,r[9],kt);return{c(){t=R("span"),o&&o.c(),n=z(),s&&s.c(),this.h()},l(c){t=V(c,"SPAN",{class:!0});var f=x(t);o&&o.l(f),n=L(f),s&&s.l(f),f.forEach(l),this.h()},h(){D(t,"class","md-snackbar-action")},m(c,f){$(c,t,f),o&&o.m(t,null),E(t,n),s&&s.m(t,null),e=!0},p(c,f){o&&o.p&&(!e||f&512)&&et(o,a,c,c[9],e?at(a,c[9],f,Xt):nt(c[9]),wt),s&&s.p&&(!e||f&512)&&et(s,i,c,c[9],e?at(i,c[9],f,qt):nt(c[9]),kt)},i(c){e||(u(o,c),u(s,c),e=!0)},o(c){m(o,c),m(s,c),e=!1},d(c){c&&l(t),o&&o.d(c),s&&s.d(c)}}}function Jt(r){let t,n,e=(!r[5]||!r[4]||r[4].group===r[1])&&St(r);return{c(){e&&e.c(),t=y()},l(a){e&&e.l(a),t=y()},m(a,o){e&&e.m(a,o),$(a,t,o),n=!0},p(a,[o]){!a[5]||!a[4]||a[4].group===a[1]?e?(e.p(a,o),o&18&&u(e,1)):(e=St(a),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(ot(),m(e,1,1,()=>{e=null}),st())},i(a){n||(u(e),n=!0)},o(a){m(e),n=!1},d(a){e&&e.d(a),a&&l(t)}}}function Kt(r,t,n){let e,{$$slots:a={},$$scope:o}=t;const i=zt(a),s=At("__mui3_snackbar");rt(r,s,A=>n(4,e=A));let{disableElevation:c=!1}=t,{autoHideDuration:f=0}=t,{value:_=null}=t,{stretch:T=!1}=t,{vertical:I=!1}=t,M;return Lt(()=>{s&&e&&_!==null&&(_===e.group&&(delete e.keys[_],s.set(e)),clearTimeout(M))}),r.$$set=A=>{"disableElevation"in A&&n(0,c=A.disableElevation),"autoHideDuration"in A&&n(7,f=A.autoHideDuration),"value"in A&&n(1,_=A.value),"stretch"in A&&n(2,T=A.stretch),"vertical"in A&&n(3,I=A.vertical),"$$scope"in A&&n(9,o=A.$$scope)},r.$$.update=()=>{r.$$.dirty&402&&(clearTimeout(M),s&&e&&_!==null&&e.group===_&&f&&n(8,M=setTimeout(()=>{_!==null&&(e!=null&&e.keys[_])&&(delete e.keys[_],s.set(e))},f)))},[c,_,T,I,e,s,i,f,M,o,a]}class H extends K{constructor(t){super(),U(this,t,Kt,Jt,Y,{disableElevation:0,autoHideDuration:7,value:1,stretch:2,vertical:3})}}function Ut(r){let t;return{c(){t=S("Single-line snackbar")},l(n){t=B(n,"Single-line snackbar")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Yt(r){let t;return{c(){t=S("Single-line snackbar with close affordance")},l(n){t=B(n,"Single-line snackbar with close affordance")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Zt(r){let t,n;return{c(){t=O("svg"),n=O("path"),this.h()},l(e){t=j(e,"svg",{viewBox:!0});var a=x(t);n=j(a,"path",{d:!0}),x(n).forEach(l),a.forEach(l),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){$(e,t,a),E(t,n)},p:P,d(e){e&&l(t)}}}function Qt(r){let t,n;return t=new Z({props:{$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Wt(r){let t,n;return t=new C({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[Qt]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function yt(r){let t;return{c(){t=S("Single-line snackbar with action")},l(n){t=B(n,"Single-line snackbar with action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function te(r){let t;return{c(){t=S("Action")},l(n){t=B(n,"Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function ee(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ne(r){let t;return{c(){t=S("Single-line snackbar with action")},l(n){t=B(n,"Single-line snackbar with action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function ae(r){let t;return{c(){t=S("Action")},l(n){t=B(n,"Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function re(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[ae]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function oe(r){let t,n;return{c(){t=O("svg"),n=O("path"),this.h()},l(e){t=j(e,"svg",{viewBox:!0});var a=x(t);n=j(a,"path",{d:!0}),x(n).forEach(l),a.forEach(l),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){$(e,t,a),E(t,n)},p:P,d(e){e&&l(t)}}}function se(r){let t,n;return t=new Z({props:{$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ce(r){let t,n;return t=new C({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function le(r){let t,n,e;return{c(){t=S("Two-line snackbar "),n=R("br"),e=S(" without action")},l(a){t=B(a,"Two-line snackbar "),n=V(a,"BR",{}),e=B(a," without action")},m(a,o){$(a,t,o),$(a,n,o),$(a,e,o)},p:P,d(a){a&&l(t),a&&l(n),a&&l(e)}}}function ie(r){let t,n,e;return{c(){t=S("Two-line snackbar with "),n=R("br"),e=S(" close affordance")},l(a){t=B(a,"Two-line snackbar with "),n=V(a,"BR",{}),e=B(a," close affordance")},m(a,o){$(a,t,o),$(a,n,o),$(a,e,o)},p:P,d(a){a&&l(t),a&&l(n),a&&l(e)}}}function fe(r){let t,n;return{c(){t=O("svg"),n=O("path"),this.h()},l(e){t=j(e,"svg",{viewBox:!0});var a=x(t);n=j(a,"path",{d:!0}),x(n).forEach(l),a.forEach(l),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){$(e,t,a),E(t,n)},p:P,d(e){e&&l(t)}}}function ue(r){let t,n;return t=new Z({props:{$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function $e(r){let t,n;return t=new C({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[ue]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function me(r){let t,n,e;return{c(){t=S("Two-line snackbar "),n=R("br"),e=S("with action")},l(a){t=B(a,"Two-line snackbar "),n=V(a,"BR",{}),e=B(a,"with action")},m(a,o){$(a,t,o),$(a,n,o),$(a,e,o)},p:P,d(a){a&&l(t),a&&l(n),a&&l(e)}}}function _e(r){let t;return{c(){t=S("Action")},l(n){t=B(n,"Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function pe(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ge(r){let t,n,e;return{c(){t=S("Two-line snackbar with "),n=R("br"),e=S(" action and close affordance")},l(a){t=B(a,"Two-line snackbar with "),n=V(a,"BR",{}),e=B(a," action and close affordance")},m(a,o){$(a,t,o),$(a,n,o),$(a,e,o)},p:P,d(a){a&&l(t),a&&l(n),a&&l(e)}}}function de(r){let t;return{c(){t=S("Action")},l(n){t=B(n,"Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function be(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[de]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function he(r){let t,n;return{c(){t=O("svg"),n=O("path"),this.h()},l(e){t=j(e,"svg",{viewBox:!0});var a=x(t);n=j(a,"path",{d:!0}),x(n).forEach(l),a.forEach(l),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){$(e,t,a),E(t,n)},p:P,d(e){e&&l(t)}}}function ve(r){let t,n;return t=new Z({props:{$$slots:{default:[he]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ke(r){let t,n;return t=new C({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[ve]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function we(r){let t,n,e;return{c(){t=S("Two-line snackbar with "),n=R("br"),e=S(" longer action")},l(a){t=B(a,"Two-line snackbar with "),n=V(a,"BR",{}),e=B(a," longer action")},m(a,o){$(a,t,o),$(a,n,o),$(a,e,o)},p:P,d(a){a&&l(t),a&&l(n),a&&l(e)}}}function Se(r){let t;return{c(){t=S("Longer Action")},l(n){t=B(n,"Longer Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Be(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ae(r){let t,n,e;return{c(){t=S("Two-line snackbar with longer "),n=R("br"),e=S(" action and close affordance")},l(a){t=B(a,"Two-line snackbar with longer "),n=V(a,"BR",{}),e=B(a," action and close affordance")},m(a,o){$(a,t,o),$(a,n,o),$(a,e,o)},p:P,d(a){a&&l(t),a&&l(n),a&&l(e)}}}function Te(r){let t;return{c(){t=S("Longer Action")},l(n){t=B(n,"Longer Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Ee(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[Te]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Ie(r){let t,n;return{c(){t=O("svg"),n=O("path"),this.h()},l(e){t=j(e,"svg",{viewBox:!0});var a=x(t);n=j(a,"path",{d:!0}),x(n).forEach(l),a.forEach(l),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){$(e,t,a),E(t,n)},p:P,d(e){e&&l(t)}}}function Me(r){let t,n;return t=new Z({props:{$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ze(r){let t,n;return t=new C({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[Me]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Le(r){let t,n,e,a,o,i,s,c,f,_,T,I,M,A,X,w,d,G,N,F,q;return n=new H({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),a=new H({props:{$$slots:{icon:[Wt],default:[Yt]},$$scope:{ctx:r}}}),i=new H({props:{$$slots:{action:[ee],default:[yt]},$$scope:{ctx:r}}}),c=new H({props:{$$slots:{icon:[ce],action:[re],default:[ne]},$$scope:{ctx:r}}}),_=new H({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),I=new H({props:{$$slots:{icon:[$e],default:[ie]},$$scope:{ctx:r}}}),A=new H({props:{$$slots:{action:[pe],default:[me]},$$scope:{ctx:r}}}),w=new H({props:{$$slots:{icon:[ke],action:[be],default:[ge]},$$scope:{ctx:r}}}),G=new H({props:{vertical:!0,$$slots:{action:[Be],default:[we]},$$scope:{ctx:r}}}),F=new H({props:{vertical:!0,$$slots:{icon:[ze],action:[Ee],default:[Ae]},$$scope:{ctx:r}}}),{c(){t=R("div"),b(n.$$.fragment),e=z(),b(a.$$.fragment),o=z(),b(i.$$.fragment),s=z(),b(c.$$.fragment),f=z(),b(_.$$.fragment),T=z(),b(I.$$.fragment),M=z(),b(A.$$.fragment),X=z(),b(w.$$.fragment),d=z(),b(G.$$.fragment),N=z(),b(F.$$.fragment),this.h()},l(g){t=V(g,"DIV",{class:!0});var p=x(t);h(n.$$.fragment,p),e=L(p),h(a.$$.fragment,p),o=L(p),h(i.$$.fragment,p),s=L(p),h(c.$$.fragment,p),f=L(p),h(_.$$.fragment,p),T=L(p),h(I.$$.fragment,p),M=L(p),h(A.$$.fragment,p),X=L(p),h(w.$$.fragment,p),d=L(p),h(G.$$.fragment,p),N=L(p),h(F.$$.fragment,p),p.forEach(l),this.h()},h(){D(t,"class","layout svelte-1ddlrn6")},m(g,p){$(g,t,p),v(n,t,null),E(t,e),v(a,t,null),E(t,o),v(i,t,null),E(t,s),v(c,t,null),E(t,f),v(_,t,null),E(t,T),v(I,t,null),E(t,M),v(A,t,null),E(t,X),v(w,t,null),E(t,d),v(G,t,null),E(t,N),v(F,t,null),q=!0},p(g,[p]){const ct={};p&1&&(ct.$$scope={dirty:p,ctx:g}),n.$set(ct);const lt={};p&1&&(lt.$$scope={dirty:p,ctx:g}),a.$set(lt);const it={};p&1&&(it.$$scope={dirty:p,ctx:g}),i.$set(it);const ft={};p&1&&(ft.$$scope={dirty:p,ctx:g}),c.$set(ft);const ut={};p&1&&(ut.$$scope={dirty:p,ctx:g}),_.$set(ut);const $t={};p&1&&($t.$$scope={dirty:p,ctx:g}),I.$set($t);const mt={};p&1&&(mt.$$scope={dirty:p,ctx:g}),A.$set(mt);const _t={};p&1&&(_t.$$scope={dirty:p,ctx:g}),w.$set(_t);const pt={};p&1&&(pt.$$scope={dirty:p,ctx:g}),G.$set(pt);const gt={};p&1&&(gt.$$scope={dirty:p,ctx:g}),F.$set(gt)},i(g){q||(u(n.$$.fragment,g),u(a.$$.fragment,g),u(i.$$.fragment,g),u(c.$$.fragment,g),u(_.$$.fragment,g),u(I.$$.fragment,g),u(A.$$.fragment,g),u(w.$$.fragment,g),u(G.$$.fragment,g),u(F.$$.fragment,g),q=!0)},o(g){m(n.$$.fragment,g),m(a.$$.fragment,g),m(i.$$.fragment,g),m(c.$$.fragment,g),m(_.$$.fragment,g),m(I.$$.fragment,g),m(A.$$.fragment,g),m(w.$$.fragment,g),m(G.$$.fragment,g),m(F.$$.fragment,g),q=!1},d(g){g&&l(t),k(n),k(a),k(i),k(c),k(_),k(I),k(A),k(w),k(G),k(F)}}}class Ce extends K{constructor(t){super(),U(this,t,null,Le,Y,{})}}const xe=`<script>
	import { Snackbar } from '@mui3/snackbar';
	import Button from '@mui3/button';
	import Icon from '@mui3/icon/icon.svelte';
<\/script>

<div class="layout">
	<Snackbar>
		Single-line snackbar
	</Snackbar>

	<Snackbar>
		Single-line snackbar with close affordance
		<Button slot="icon" icon variant="text">
			<Icon>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Snackbar>

	<Snackbar>
		Single-line snackbar with action
		<Button slot="action" variant="text">Action</Button>
	</Snackbar>

	<Snackbar>
		Single-line snackbar with action
		<Button slot="action" variant="text">Action</Button>
		<Button slot="icon" icon variant="text">
			<Icon>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Snackbar>

	<Snackbar>
		Two-line snackbar <br /> without action
	</Snackbar>

	<Snackbar>
		Two-line snackbar with <br /> close affordance
		<Button slot="icon" icon variant="text">
			<Icon>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Snackbar>

	<Snackbar>
		Two-line snackbar <br >with action
		<Button slot="action" variant="text">Action</Button>
	</Snackbar>

	<Snackbar>
		Two-line snackbar with <br /> action and close affordance
		<Button slot="action" variant="text">Action</Button>
		<Button slot="icon" icon variant="text">
			<Icon>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Snackbar>
	<Snackbar vertical>
		Two-line snackbar with <br /> longer action
		<Button slot="action" variant="text">Longer Action</Button>
	</Snackbar>

	<Snackbar vertical>
		Two-line snackbar with longer <br /> action and close affordance
		<Button slot="action" variant="text">Longer Action</Button>
		<Button slot="icon" icon variant="text">
			<Icon>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Snackbar>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 712px;
		flex-direction: column;
		gap: 24px;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>
`;function De(r){let t;return{c(){t=S("First")},l(n){t=B(n,"First")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Ge(r){let t;return{c(){t=S("Second")},l(n){t=B(n,"Second")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function He(r){let t;return{c(){t=S("Third")},l(n){t=B(n,"Third")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Re(r){let t;return{c(){t=S("Clear")},l(n){t=B(n,"Clear")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Ve(r){let t;return{c(){t=S("Single-line snackbar")},l(n){t=B(n,"Single-line snackbar")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Fe(r){let t;return{c(){t=S("Single-line snackbar with longer action")},l(n){t=B(n,"Single-line snackbar with longer action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Pe(r){let t;return{c(){t=S("Action")},l(n){t=B(n,"Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function Ne(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[Pe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&128&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Oe(r){let t;return{c(){t=S("Single-line snackbar with action and close affordance")},l(n){t=B(n,"Single-line snackbar with action and close affordance")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function je(r){let t;return{c(){t=S("Action")},l(n){t=B(n,"Action")},m(n,e){$(n,t,e)},d(n){n&&l(t)}}}function qe(r){let t,n;return t=new C({props:{slot:"action",variant:"text",$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const o={};a&128&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Xe(r){let t,n,e,a,o,i;return t=new H({props:{value:"first",$$slots:{default:[Ve]},$$scope:{ctx:r}}}),e=new H({props:{vertical:!0,value:"second",autoHideDuration:1e3,$$slots:{action:[Ne],default:[Fe]},$$scope:{ctx:r}}}),o=new H({props:{value:"third",$$slots:{action:[qe],default:[Oe]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment),n=z(),b(e.$$.fragment),a=z(),b(o.$$.fragment)},l(s){h(t.$$.fragment,s),n=L(s),h(e.$$.fragment,s),a=L(s),h(o.$$.fragment,s)},m(s,c){v(t,s,c),$(s,n,c),v(e,s,c),$(s,a,c),v(o,s,c),i=!0},p(s,c){const f={};c&128&&(f.$$scope={dirty:c,ctx:s}),t.$set(f);const _={};c&128&&(_.$$scope={dirty:c,ctx:s}),e.$set(_);const T={};c&128&&(T.$$scope={dirty:c,ctx:s}),o.$set(T)},i(s){i||(u(t.$$.fragment,s),u(e.$$.fragment,s),u(o.$$.fragment,s),i=!0)},o(s){m(t.$$.fragment,s),m(e.$$.fragment,s),m(o.$$.fragment,s),i=!1},d(s){k(t,s),s&&l(n),k(e,s),s&&l(a),k(o,s)}}}function Je(r){let t,n,e,a,o,i,s,c,f,_,T,I,M;n=new C({props:{$$slots:{default:[De]},$$scope:{ctx:r}}}),n.$on("click",r[2]),a=new C({props:{$$slots:{default:[Ge]},$$scope:{ctx:r}}}),a.$on("click",r[3]),i=new C({props:{$$slots:{default:[He]},$$scope:{ctx:r}}}),i.$on("click",r[4]),c=new C({props:{$$slots:{default:[Re]},$$scope:{ctx:r}}}),c.$on("click",r[5]);function A(w){r[6](w)}let X={$$slots:{default:[Xe]},$$scope:{ctx:r}};return r[0]!==void 0&&(X.group=r[0]),T=new jt({props:X}),Ct.push(()=>xt(T,"group",A)),{c(){t=R("div"),b(n.$$.fragment),e=z(),b(a.$$.fragment),o=z(),b(i.$$.fragment),s=z(),b(c.$$.fragment),f=z(),_=R("div"),b(T.$$.fragment),this.h()},l(w){t=V(w,"DIV",{class:!0});var d=x(t);h(n.$$.fragment,d),e=L(d),h(a.$$.fragment,d),o=L(d),h(i.$$.fragment,d),s=L(d),h(c.$$.fragment,d),f=L(d),_=V(d,"DIV",{class:!0});var G=x(_);h(T.$$.fragment,G),G.forEach(l),d.forEach(l),this.h()},h(){D(_,"class","message svelte-160z3di"),D(t,"class","layout svelte-160z3di")},m(w,d){$(w,t,d),v(n,t,null),E(t,e),v(a,t,null),E(t,o),v(i,t,null),E(t,s),v(c,t,null),E(t,f),E(t,_),v(T,_,null),M=!0},p(w,[d]){const G={};d&128&&(G.$$scope={dirty:d,ctx:w}),n.$set(G);const N={};d&128&&(N.$$scope={dirty:d,ctx:w}),a.$set(N);const F={};d&128&&(F.$$scope={dirty:d,ctx:w}),i.$set(F);const q={};d&128&&(q.$$scope={dirty:d,ctx:w}),c.$set(q);const g={};d&128&&(g.$$scope={dirty:d,ctx:w}),!I&&d&1&&(I=!0,g.group=w[0],Dt(()=>I=!1)),T.$set(g)},i(w){M||(u(n.$$.fragment,w),u(a.$$.fragment,w),u(i.$$.fragment,w),u(c.$$.fragment,w),u(T.$$.fragment,w),M=!0)},o(w){m(n.$$.fragment,w),m(a.$$.fragment,w),m(i.$$.fragment,w),m(c.$$.fragment,w),m(T.$$.fragment,w),M=!1},d(w){w&&l(t),k(n),k(a),k(i),k(c),k(T)}}}function Ke(r,t,n){let e="";function a(_=""){n(0,e=_)}const o=()=>a("first"),i=()=>a("second"),s=()=>a("third"),c=()=>a();function f(_){e=_,n(0,e)}return[e,a,o,i,s,c,f]}class Ue extends K{constructor(t){super(),U(this,t,Ke,Je,Y,{})}}const Ye=`<script>
	import { SnackbarManager, Snackbar } from '@mui3/snackbar';
	import Button from '@mui3/button';

	let group = '';

	function setGroup(value = '') {
		group = value;
	}
<\/script>

<div class="layout">
	<Button on:click={() => setGroup('first')}>First</Button>
	<Button on:click={() => setGroup('second')}>Second</Button>
	<Button on:click={() => setGroup('third')}>Third</Button>
	<Button on:click={() => setGroup()}>Clear</Button>

	<div class="message">
		<SnackbarManager bind:group>
			<Snackbar value="first">
				Single-line snackbar
			</Snackbar>
			<Snackbar vertical value="second" autoHideDuration={1000}>
				Single-line snackbar with longer action
				<Button slot="action" variant="text">Action</Button>
			</Snackbar>
			<Snackbar value="third">
				Single-line snackbar with action and close affordance
				<Button slot="action" variant="text">Action</Button>
			</Snackbar>

		</SnackbarManager>
	</div>
</div>

<style>
	.layout {
		display: flex;
		gap: 16px;
	}
	.message {
		position: fixed;
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
`,Ze={title:"Simple",Component:Ce,code:xe},Qe={title:"Manager",Component:Ue,code:Ye};function We(r){let t,n,e,a;return t=new bt({props:{data:Ze}}),e=new bt({props:{data:Qe}}),{c(){b(t.$$.fragment),n=z(),b(e.$$.fragment)},l(o){h(t.$$.fragment,o),n=L(o),h(e.$$.fragment,o)},m(o,i){v(t,o,i),$(o,n,i),v(e,o,i),a=!0},p:P,i(o){a||(u(t.$$.fragment,o),u(e.$$.fragment,o),a=!0)},o(o){m(t.$$.fragment,o),m(e.$$.fragment,o),a=!1},d(o){k(t,o),o&&l(n),k(e,o)}}}function ye(r){let t,n;return t=new Gt({props:{title:"Snackbars",$$slots:{default:[We]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(u(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}class ln extends K{constructor(t){super(),U(this,t,null,ye,Y,{})}}export{ln as component};
