import{S as K,i as U,s as Y,e as y,b as u,g as f,v as rt,d as m,f as ot,h as i,V as Tt,Y as Et,G as tt,k as V,l as F,m as z,n as D,H as et,I as nt,J as at,K as It,R as Mt,T as Lt,Z as Q,X as Ct,U as xt,a9 as zt,a as M,c as L,O as J,E,y as p,z as b,A as d,B as h,q as w,r as S,F as P,C as j,D as q,w as Dt,ad as Ht,ae as Rt}from"../chunks/index.b9a67496.js";import{E as Vt}from"../chunks/example.c7646941.js";import{B as x}from"../chunks/button.53a546aa.js";import{I as Z}from"../chunks/icon.629bc55a.js";import{g as W,b as pt}from"../chunks/transition.7b703474.js";import{f as Ft,c as Pt}from"../chunks/index.05c2f6c5.js";import{w as Nt}from"../chunks/index.61baa469.js";import{C as bt}from"../chunks/code.92b9ad65.js";const Ot=r=>({context:r&1}),dt=r=>({context:r[0]});function ht(r){let t,n,e,a;const o=r[7].default,l=tt(o,r,r[6],dt);return{c(){t=V("div"),l&&l.c(),this.h()},l(s){t=F(s,"DIV",{class:!0});var c=z(t);l&&l.l(c),c.forEach(i),this.h()},h(){D(t,"class","md-snackbar-wrap svelte-1bjf49e")},m(s,c){u(s,t,c),l&&l.m(t,null),a=!0},p(s,c){r=s,l&&l.p&&(!a||c&65)&&et(l,o,r,r[6],a?at(o,r[6],c,Ot):nt(r[6]),dt)},i(s){a||(f(l,s),s&&It(()=>{a&&(e&&e.end(1),n=Mt(t,qt,{duration:r[1].in.duration,delay:r[1].in.delay,easing:pt(...r[1].in.bezier)}),n.start())}),a=!0)},o(s){m(l,s),n&&n.invalidate(),s&&(e=Lt(t,Ft,{duration:r[1].out.duration,delay:r[1].out.delay,easing:pt(...r[1].out.bezier)})),a=!1},d(s){s&&i(t),l&&l.d(s),s&&e&&e.end()}}}function jt(r){let t,n,e=r[2]&&ht(r);return{c(){e&&e.c(),t=y()},l(a){e&&e.l(a),t=y()},m(a,o){e&&e.m(a,o),u(a,t,o),n=!0},p(a,[o]){a[2]?e?(e.p(a,o),o&4&&f(e,1)):(e=ht(a),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(rt(),m(e,1,1,()=>{e=null}),ot())},i(a){n||(f(e),n=!0)},o(a){m(e),n=!1},d(a){e&&e.d(a),a&&i(t)}}}function qt(r,{delay:t=0,duration:n=400,easing:e=Pt,axis:a="y"}={}){const o=getComputedStyle(r),l=+o.opacity,s=a==="y"?"height":"width",c=parseFloat(o[s]);return{delay:t,duration:n,easing:e,css:$=>`
				overflow: hidden;
				opacity: ${$*l};
				${s}: ${$*c}px;
			`}}const vt=[300,0,[.2,0,0,1]],kt=[250,0,[.2,0,0,1]];function Gt(r,t,n){let e,{$$slots:a={},$$scope:o}=t;const l=Nt({group:null,keys:{}});Tt(r,l,T=>n(0,e=T)),Et("__mui3_snackbar",l);let{group:s=null}=t,{transition:c=!0}=t,$,k=!1;function I(T){s?Q(l,e.keys[s]=!0,e):Q(l,e.keys={},e)}function C(T){const N=Object.entries(e.keys).filter(([v,B])=>B);n(2,k=N.length===1),N.length?N.length===1&&(Q(l,e.group=N[0][0],e),n(4,s=e.group)):(Q(l,e.group=null,e),n(4,s=null))}return r.$$set=T=>{"group"in T&&n(4,s=T.group),"transition"in T&&n(5,c=T.transition),"$$scope"in T&&n(6,o=T.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&(typeof c=="boolean"?n(1,$={in:W(c,vt),out:W(c,kt)}):n(1,$={in:W(c.in,vt),out:W(c.out,kt)})),r.$$.dirty&16&&I(),r.$$.dirty&1&&C()},[e,$,k,l,s,c,o,a]}class Xt extends K{constructor(t){super(),U(this,t,Gt,jt,Y,{group:4,transition:5})}}const Jt=r=>({}),wt=r=>({}),Kt=r=>({}),St=r=>({});function Bt(r){let t,n,e,a;const o=r[10].default,l=tt(o,r,r[9],null);let s=(r[6].action||r[6].icon)&&At(r);return{c(){t=V("div"),n=V("span"),l&&l.c(),e=M(),s&&s.c(),this.h()},l(c){t=F(c,"DIV",{class:!0});var $=z(t);n=F($,"SPAN",{class:!0});var k=z(n);l&&l.l(k),k.forEach(i),e=L($),s&&s.l($),$.forEach(i),this.h()},h(){D(n,"class","md-snackbar-text"),D(t,"class","md-snackbar"),J(t,"md-snackbar-flat",r[0]),J(t,"md-snackbar-stretch",r[2]),J(t,"md-snackbar-vertical",r[3])},m(c,$){u(c,t,$),E(t,n),l&&l.m(n,null),E(t,e),s&&s.m(t,null),a=!0},p(c,$){l&&l.p&&(!a||$&512)&&et(l,o,c,c[9],a?at(o,c[9],$,null):nt(c[9]),null),c[6].action||c[6].icon?s?(s.p(c,$),$&64&&f(s,1)):(s=At(c),s.c(),f(s,1),s.m(t,null)):s&&(rt(),m(s,1,1,()=>{s=null}),ot()),(!a||$&1)&&J(t,"md-snackbar-flat",c[0]),(!a||$&4)&&J(t,"md-snackbar-stretch",c[2]),(!a||$&8)&&J(t,"md-snackbar-vertical",c[3])},i(c){a||(f(l,c),f(s),a=!0)},o(c){m(l,c),m(s),a=!1},d(c){c&&i(t),l&&l.d(c),s&&s.d()}}}function At(r){let t,n,e;const a=r[10].action,o=tt(a,r,r[9],St),l=r[10].icon,s=tt(l,r,r[9],wt);return{c(){t=V("span"),o&&o.c(),n=M(),s&&s.c(),this.h()},l(c){t=F(c,"SPAN",{class:!0});var $=z(t);o&&o.l($),n=L($),s&&s.l($),$.forEach(i),this.h()},h(){D(t,"class","md-snackbar-action")},m(c,$){u(c,t,$),o&&o.m(t,null),E(t,n),s&&s.m(t,null),e=!0},p(c,$){o&&o.p&&(!e||$&512)&&et(o,a,c,c[9],e?at(a,c[9],$,Kt):nt(c[9]),St),s&&s.p&&(!e||$&512)&&et(s,l,c,c[9],e?at(l,c[9],$,Jt):nt(c[9]),wt)},i(c){e||(f(o,c),f(s,c),e=!0)},o(c){m(o,c),m(s,c),e=!1},d(c){c&&i(t),o&&o.d(c),s&&s.d(c)}}}function Ut(r){let t,n,e=(!r[5]||!r[4]||r[4].group===r[1])&&Bt(r);return{c(){e&&e.c(),t=y()},l(a){e&&e.l(a),t=y()},m(a,o){e&&e.m(a,o),u(a,t,o),n=!0},p(a,[o]){!a[5]||!a[4]||a[4].group===a[1]?e?(e.p(a,o),o&18&&f(e,1)):(e=Bt(a),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(rt(),m(e,1,1,()=>{e=null}),ot())},i(a){n||(f(e),n=!0)},o(a){m(e),n=!1},d(a){e&&e.d(a),a&&i(t)}}}function Yt(r,t,n){let e,{$$slots:a={},$$scope:o}=t;const l=Ct(a),s=xt("__mui3_snackbar");Tt(r,s,A=>n(4,e=A));let{disableElevation:c=!1}=t,{autoHideDuration:$=0}=t,{value:k=null}=t,{stretch:I=!1}=t,{vertical:C=!1}=t,T;return zt(()=>{s&&e&&k!==null&&(k==e.group&&(delete e.keys[k],s.set(e)),clearTimeout(T))}),r.$$set=A=>{"disableElevation"in A&&n(0,c=A.disableElevation),"autoHideDuration"in A&&n(7,$=A.autoHideDuration),"value"in A&&n(1,k=A.value),"stretch"in A&&n(2,I=A.stretch),"vertical"in A&&n(3,C=A.vertical),"$$scope"in A&&n(9,o=A.$$scope)},r.$$.update=()=>{r.$$.dirty&402&&(clearTimeout(T),s&&e&&k!==null&&e.group===k&&$&&n(8,T=setTimeout(()=>{k!==null&&(e!=null&&e.keys[k])&&(delete e.keys[k],s.set(e))},$)))},[c,k,I,C,e,s,l,$,T,o,a]}class R extends K{constructor(t){super(),U(this,t,Yt,Ut,Y,{disableElevation:0,autoHideDuration:7,value:1,stretch:2,vertical:3})}}function Zt(r){let t;return{c(){t=w("Single-line snackbar")},l(n){t=S(n,"Single-line snackbar")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Qt(r){let t;return{c(){t=w("Single-line snackbar with close affordance")},l(n){t=S(n,"Single-line snackbar with close affordance")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Wt(r){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(e){t=q(e,"svg",{viewBox:!0});var a=z(t);n=q(a,"path",{d:!0}),z(n).forEach(i),a.forEach(i),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){u(e,t,a),E(t,n)},p:P,d(e){e&&i(t)}}}function yt(r){let t,n;return t=new Z({props:{$$slots:{default:[Wt]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function te(r){let t,n;return t=new x({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ee(r){let t;return{c(){t=w("Single-line snackbar with action")},l(n){t=S(n,"Single-line snackbar with action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function ne(r){let t;return{c(){t=w("Action")},l(n){t=S(n,"Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function ae(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[ne]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function re(r){let t;return{c(){t=w("Single-line snackbar with action")},l(n){t=S(n,"Single-line snackbar with action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function oe(r){let t;return{c(){t=w("Action")},l(n){t=S(n,"Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function se(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ce(r){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(e){t=q(e,"svg",{viewBox:!0});var a=z(t);n=q(a,"path",{d:!0}),z(n).forEach(i),a.forEach(i),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){u(e,t,a),E(t,n)},p:P,d(e){e&&i(t)}}}function le(r){let t,n;return t=new Z({props:{$$slots:{default:[ce]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ie(r){let t,n;return t=new x({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function fe(r){let t,n,e;return{c(){t=w("Two-line snackbar "),n=V("br"),e=w(" without action")},l(a){t=S(a,"Two-line snackbar "),n=F(a,"BR",{}),e=S(a," without action")},m(a,o){u(a,t,o),u(a,n,o),u(a,e,o)},p:P,d(a){a&&i(t),a&&i(n),a&&i(e)}}}function ue(r){let t,n,e;return{c(){t=w("Two-line snackbar with "),n=V("br"),e=w(" close affordance")},l(a){t=S(a,"Two-line snackbar with "),n=F(a,"BR",{}),e=S(a," close affordance")},m(a,o){u(a,t,o),u(a,n,o),u(a,e,o)},p:P,d(a){a&&i(t),a&&i(n),a&&i(e)}}}function $e(r){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(e){t=q(e,"svg",{viewBox:!0});var a=z(t);n=q(a,"path",{d:!0}),z(n).forEach(i),a.forEach(i),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){u(e,t,a),E(t,n)},p:P,d(e){e&&i(t)}}}function me(r){let t,n;return t=new Z({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function _e(r){let t,n;return t=new x({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ge(r){let t,n,e;return{c(){t=w("Two-line snackbar "),n=V("br"),e=w("with action")},l(a){t=S(a,"Two-line snackbar "),n=F(a,"BR",{}),e=S(a,"with action")},m(a,o){u(a,t,o),u(a,n,o),u(a,e,o)},p:P,d(a){a&&i(t),a&&i(n),a&&i(e)}}}function pe(r){let t;return{c(){t=w("Action")},l(n){t=S(n,"Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function be(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[pe]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function de(r){let t,n,e;return{c(){t=w("Two-line snackbar with "),n=V("br"),e=w(" action and close affordance")},l(a){t=S(a,"Two-line snackbar with "),n=F(a,"BR",{}),e=S(a," action and close affordance")},m(a,o){u(a,t,o),u(a,n,o),u(a,e,o)},p:P,d(a){a&&i(t),a&&i(n),a&&i(e)}}}function he(r){let t;return{c(){t=w("Action")},l(n){t=S(n,"Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function ve(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[he]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ke(r){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(e){t=q(e,"svg",{viewBox:!0});var a=z(t);n=q(a,"path",{d:!0}),z(n).forEach(i),a.forEach(i),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){u(e,t,a),E(t,n)},p:P,d(e){e&&i(t)}}}function we(r){let t,n;return t=new Z({props:{$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Se(r){let t,n;return t=new x({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[we]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Be(r){let t,n,e;return{c(){t=w("Two-line snackbar with "),n=V("br"),e=w(" longer action")},l(a){t=S(a,"Two-line snackbar with "),n=F(a,"BR",{}),e=S(a," longer action")},m(a,o){u(a,t,o),u(a,n,o),u(a,e,o)},p:P,d(a){a&&i(t),a&&i(n),a&&i(e)}}}function Ae(r){let t;return{c(){t=w("Longer Action")},l(n){t=S(n,"Longer Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Te(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[Ae]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ee(r){let t,n,e;return{c(){t=w("Two-line snackbar with longer "),n=V("br"),e=w(" action and close affordance")},l(a){t=S(a,"Two-line snackbar with longer "),n=F(a,"BR",{}),e=S(a," action and close affordance")},m(a,o){u(a,t,o),u(a,n,o),u(a,e,o)},p:P,d(a){a&&i(t),a&&i(n),a&&i(e)}}}function Ie(r){let t;return{c(){t=w("Longer Action")},l(n){t=S(n,"Longer Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Me(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Le(r){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(e){t=q(e,"svg",{viewBox:!0});var a=z(t);n=q(a,"path",{d:!0}),z(n).forEach(i),a.forEach(i),this.h()},h(){D(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),D(t,"viewBox","0 0 24 24")},m(e,a){u(e,t,a),E(t,n)},p:P,d(e){e&&i(t)}}}function Ce(r){let t,n;return t=new Z({props:{$$slots:{default:[Le]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function xe(r){let t,n;return t=new x({props:{slot:"icon",icon:!0,variant:"text",$$slots:{default:[Ce]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function ze(r){let t,n,e,a,o,l,s,c,$,k,I,C,T,A,N,v,B,H,X,O,G;return n=new R({props:{$$slots:{default:[Zt]},$$scope:{ctx:r}}}),a=new R({props:{$$slots:{icon:[te],default:[Qt]},$$scope:{ctx:r}}}),l=new R({props:{$$slots:{action:[ae],default:[ee]},$$scope:{ctx:r}}}),c=new R({props:{$$slots:{icon:[ie],action:[se],default:[re]},$$scope:{ctx:r}}}),k=new R({props:{$$slots:{default:[fe]},$$scope:{ctx:r}}}),C=new R({props:{$$slots:{icon:[_e],default:[ue]},$$scope:{ctx:r}}}),A=new R({props:{$$slots:{action:[be],default:[ge]},$$scope:{ctx:r}}}),v=new R({props:{$$slots:{icon:[Se],action:[ve],default:[de]},$$scope:{ctx:r}}}),H=new R({props:{vertical:!0,$$slots:{action:[Te],default:[Be]},$$scope:{ctx:r}}}),O=new R({props:{vertical:!0,$$slots:{icon:[xe],action:[Me],default:[Ee]},$$scope:{ctx:r}}}),{c(){t=V("div"),p(n.$$.fragment),e=M(),p(a.$$.fragment),o=M(),p(l.$$.fragment),s=M(),p(c.$$.fragment),$=M(),p(k.$$.fragment),I=M(),p(C.$$.fragment),T=M(),p(A.$$.fragment),N=M(),p(v.$$.fragment),B=M(),p(H.$$.fragment),X=M(),p(O.$$.fragment),this.h()},l(g){t=F(g,"DIV",{class:!0});var _=z(t);b(n.$$.fragment,_),e=L(_),b(a.$$.fragment,_),o=L(_),b(l.$$.fragment,_),s=L(_),b(c.$$.fragment,_),$=L(_),b(k.$$.fragment,_),I=L(_),b(C.$$.fragment,_),T=L(_),b(A.$$.fragment,_),N=L(_),b(v.$$.fragment,_),B=L(_),b(H.$$.fragment,_),X=L(_),b(O.$$.fragment,_),_.forEach(i),this.h()},h(){D(t,"class","layout svelte-te859q")},m(g,_){u(g,t,_),d(n,t,null),E(t,e),d(a,t,null),E(t,o),d(l,t,null),E(t,s),d(c,t,null),E(t,$),d(k,t,null),E(t,I),d(C,t,null),E(t,T),d(A,t,null),E(t,N),d(v,t,null),E(t,B),d(H,t,null),E(t,X),d(O,t,null),G=!0},p(g,[_]){const st={};_&1&&(st.$$scope={dirty:_,ctx:g}),n.$set(st);const ct={};_&1&&(ct.$$scope={dirty:_,ctx:g}),a.$set(ct);const lt={};_&1&&(lt.$$scope={dirty:_,ctx:g}),l.$set(lt);const it={};_&1&&(it.$$scope={dirty:_,ctx:g}),c.$set(it);const ft={};_&1&&(ft.$$scope={dirty:_,ctx:g}),k.$set(ft);const ut={};_&1&&(ut.$$scope={dirty:_,ctx:g}),C.$set(ut);const $t={};_&1&&($t.$$scope={dirty:_,ctx:g}),A.$set($t);const mt={};_&1&&(mt.$$scope={dirty:_,ctx:g}),v.$set(mt);const _t={};_&1&&(_t.$$scope={dirty:_,ctx:g}),H.$set(_t);const gt={};_&1&&(gt.$$scope={dirty:_,ctx:g}),O.$set(gt)},i(g){G||(f(n.$$.fragment,g),f(a.$$.fragment,g),f(l.$$.fragment,g),f(c.$$.fragment,g),f(k.$$.fragment,g),f(C.$$.fragment,g),f(A.$$.fragment,g),f(v.$$.fragment,g),f(H.$$.fragment,g),f(O.$$.fragment,g),G=!0)},o(g){m(n.$$.fragment,g),m(a.$$.fragment,g),m(l.$$.fragment,g),m(c.$$.fragment,g),m(k.$$.fragment,g),m(C.$$.fragment,g),m(A.$$.fragment,g),m(v.$$.fragment,g),m(H.$$.fragment,g),m(O.$$.fragment,g),G=!1},d(g){g&&i(t),h(n),h(a),h(l),h(c),h(k),h(C),h(A),h(v),h(H),h(O)}}}class De extends K{constructor(t){super(),U(this,t,null,ze,Y,{})}}const He=`<script>
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
`;function Re(r){let t;return{c(){t=w("First")},l(n){t=S(n,"First")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Ve(r){let t;return{c(){t=w("Second")},l(n){t=S(n,"Second")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Fe(r){let t;return{c(){t=w("Third")},l(n){t=S(n,"Third")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Pe(r){let t;return{c(){t=w("Clear")},l(n){t=S(n,"Clear")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Ne(r){let t;return{c(){t=w("Single-line snackbar")},l(n){t=S(n,"Single-line snackbar")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Oe(r){let t;return{c(){t=w("Single-line snackbar with longer action")},l(n){t=S(n,"Single-line snackbar with longer action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function je(r){let t;return{c(){t=w("Action")},l(n){t=S(n,"Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function qe(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&64&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ge(r){let t;return{c(){t=w("Single-line snackbar with action and close affordance")},l(n){t=S(n,"Single-line snackbar with action and close affordance")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Xe(r){let t;return{c(){t=w("Action")},l(n){t=S(n,"Action")},m(n,e){u(n,t,e)},d(n){n&&i(t)}}}function Je(r){let t,n;return t=new x({props:{slot:"action",variant:"text",$$slots:{default:[Xe]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,a){const o={};a&64&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Ke(r){let t,n,e,a,o,l;return t=new R({props:{value:"first",$$slots:{default:[Ne]},$$scope:{ctx:r}}}),e=new R({props:{vertical:!0,value:"second",autoHideDuration:1e3,$$slots:{action:[qe],default:[Oe]},$$scope:{ctx:r}}}),o=new R({props:{value:"third",$$slots:{action:[Je],default:[Ge]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment),n=M(),p(e.$$.fragment),a=M(),p(o.$$.fragment)},l(s){b(t.$$.fragment,s),n=L(s),b(e.$$.fragment,s),a=L(s),b(o.$$.fragment,s)},m(s,c){d(t,s,c),u(s,n,c),d(e,s,c),u(s,a,c),d(o,s,c),l=!0},p(s,c){const $={};c&64&&($.$$scope={dirty:c,ctx:s}),t.$set($);const k={};c&64&&(k.$$scope={dirty:c,ctx:s}),e.$set(k);const I={};c&64&&(I.$$scope={dirty:c,ctx:s}),o.$set(I)},i(s){l||(f(t.$$.fragment,s),f(e.$$.fragment,s),f(o.$$.fragment,s),l=!0)},o(s){m(t.$$.fragment,s),m(e.$$.fragment,s),m(o.$$.fragment,s),l=!1},d(s){h(t,s),s&&i(n),h(e,s),s&&i(a),h(o,s)}}}function Ue(r){let t,n,e,a,o,l,s,c,$,k,I,C,T;n=new x({props:{$$slots:{default:[Re]},$$scope:{ctx:r}}}),n.$on("click",r[1]),a=new x({props:{$$slots:{default:[Ve]},$$scope:{ctx:r}}}),a.$on("click",r[2]),l=new x({props:{$$slots:{default:[Fe]},$$scope:{ctx:r}}}),l.$on("click",r[3]),c=new x({props:{$$slots:{default:[Pe]},$$scope:{ctx:r}}}),c.$on("click",r[4]);function A(v){r[5](v)}let N={$$slots:{default:[Ke]},$$scope:{ctx:r}};return r[0]!==void 0&&(N.group=r[0]),I=new Xt({props:N}),Dt.push(()=>Ht(I,"group",A)),{c(){t=V("div"),p(n.$$.fragment),e=M(),p(a.$$.fragment),o=M(),p(l.$$.fragment),s=M(),p(c.$$.fragment),$=M(),k=V("div"),p(I.$$.fragment),this.h()},l(v){t=F(v,"DIV",{class:!0});var B=z(t);b(n.$$.fragment,B),e=L(B),b(a.$$.fragment,B),o=L(B),b(l.$$.fragment,B),s=L(B),b(c.$$.fragment,B),$=L(B),k=F(B,"DIV",{class:!0});var H=z(k);b(I.$$.fragment,H),H.forEach(i),B.forEach(i),this.h()},h(){D(k,"class","message svelte-3gk73s"),D(t,"class","layout svelte-3gk73s")},m(v,B){u(v,t,B),d(n,t,null),E(t,e),d(a,t,null),E(t,o),d(l,t,null),E(t,s),d(c,t,null),E(t,$),E(t,k),d(I,k,null),T=!0},p(v,[B]){const H={};B&64&&(H.$$scope={dirty:B,ctx:v}),n.$set(H);const X={};B&64&&(X.$$scope={dirty:B,ctx:v}),a.$set(X);const O={};B&64&&(O.$$scope={dirty:B,ctx:v}),l.$set(O);const G={};B&64&&(G.$$scope={dirty:B,ctx:v}),c.$set(G);const g={};B&64&&(g.$$scope={dirty:B,ctx:v}),!C&&B&1&&(C=!0,g.group=v[0],Rt(()=>C=!1)),I.$set(g)},i(v){T||(f(n.$$.fragment,v),f(a.$$.fragment,v),f(l.$$.fragment,v),f(c.$$.fragment,v),f(I.$$.fragment,v),T=!0)},o(v){m(n.$$.fragment,v),m(a.$$.fragment,v),m(l.$$.fragment,v),m(c.$$.fragment,v),m(I.$$.fragment,v),T=!1},d(v){v&&i(t),h(n),h(a),h(l),h(c),h(I)}}}function Ye(r,t,n){let e="";const a=()=>n(0,e="first"),o=()=>n(0,e="second"),l=()=>n(0,e="third"),s=()=>n(0,e="");function c($){e=$,n(0,e)}return[e,a,o,l,s,c]}class Ze extends K{constructor(t){super(),U(this,t,Ye,Ue,Y,{})}}const Qe=`<script>
	import { SnackbarManager, Snackbar } from '@mui3/snackbar';
	import Button from '@mui3/button';
	
    let group = '';
<\/script>

<div class="layout">
    <Button on:click={() => group = 'first'}>First</Button>
    <Button on:click={() => group ='second'}>Second</Button>
    <Button on:click={() => group ='third'}>Third</Button>
    <Button on:click={() => group = ''}>Clear</Button>

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
</style>`,We={title:"Simple",Component:De,code:He},ye={title:"Manager",Component:Ze,code:Qe};function tn(r){let t,n,e,a;return t=new bt({props:{data:We}}),e=new bt({props:{data:ye}}),{c(){p(t.$$.fragment),n=M(),p(e.$$.fragment)},l(o){b(t.$$.fragment,o),n=L(o),b(e.$$.fragment,o)},m(o,l){d(t,o,l),u(o,n,l),d(e,o,l),a=!0},p:P,i(o){a||(f(t.$$.fragment,o),f(e.$$.fragment,o),a=!0)},o(o){m(t.$$.fragment,o),m(e.$$.fragment,o),a=!1},d(o){h(t,o),o&&i(n),h(e,o)}}}function en(r){let t,n;return t=new Vt({props:{title:"Snackbars",$$slots:{default:[tn]},$$scope:{ctx:r}}}),{c(){p(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}class un extends K{constructor(t){super(),U(this,t,null,en,Y,{})}}export{un as component};
