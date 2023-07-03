import{S as j,i as q,s as N,e as nt,b as k,g,d as v,h,a6 as at,X as re,U as le,V as oe,_ as K,a7 as ie,G as ut,k as T,a as A,l as U,m as I,c as D,$ as st,O as y,E as C,P as p,a4 as fe,H as ct,I as ht,J as mt,v as ue,f as ce,a0 as he,aa as me,a3 as pe,W as d,n as L,K as de,ab as rt,q as pt,r as dt,u as $e,y as b,z as E,A as F,B as z,C as w,D as M,F as B}from"../chunks/index.c17a76e4.js";import{C as G}from"../chunks/code.eed80d1b.js";import{g as ge,b as lt}from"../chunks/transition.2e3fc1dd.js";import{r as ve}from"../chunks/ripple.83ac3a1e.js";import{s as ot}from"../chunks/index.9191482d.js";import{I as V}from"../chunks/button.5a3614db.js";import{E as _e}from"../chunks/example.b3b9ea27.js";const be=s=>({}),it=s=>({});function ft(s){let t,n,e;const a=s[21].label,l=ut(a,s,s[20],it),i=l||Ee(s);return{c(){t=T("span"),i&&i.c(),this.h()},l(m){t=U(m,"SPAN",{class:!0});var o=I(t);i&&i.l(o),o.forEach(h),this.h()},h(){L(t,"class","md-fab-label")},m(m,o){k(m,t,o),i&&i.m(t,null),e=!0},p(m,o){s=m,l?l.p&&(!e||o[0]&1048576)&&ct(l,a,s,s[20],e?mt(a,s[20],o,be):ht(s[20]),it):i&&i.p&&(!e||o[0]&2048)&&i.p(s,e?o:[-1,-1,-1])},i(m){e||(g(i,m),m&&de(()=>{e&&(n||(n=rt(t,ot,{axis:"x",duration:s[14].duration,delay:s[14].delay,easing:lt(...s[14].bezier)},!0)),n.run(1))}),e=!0)},o(m){v(i,m),m&&(n||(n=rt(t,ot,{axis:"x",duration:s[14].duration,delay:s[14].delay,easing:lt(...s[14].bezier)},!1)),n.run(0)),e=!1},d(m){m&&h(t),i&&i.d(m),m&&n&&n.end()}}}function Ee(s){let t;return{c(){t=pt(s[11])},l(n){t=dt(n,s[11])},m(n,e){k(n,t,e)},p(n,e){e[0]&2048&&$e(t,n[11])},d(n){n&&h(t)}}}function J(s){let t,n,e,a,l,i;const m=s[21].default,o=ut(m,s,s[20],null);let f=(s[17].label||s[11])&&ft(s),_=[{class:"md-fab"},s[16]],$={};for(let u=0;u<_.length;u+=1)$=K($,_[u]);return{c(){t=T(s[12]??(s[16].href?"a":"button")),o&&o.c(),n=A(),f&&f.c(),this.h()},l(u){t=U(u,((s[12]??(s[16].href?"a":"button"))||"null").toUpperCase(),{class:!0});var c=I(t);o&&o.l(c),n=D(c),f&&f.l(c),c.forEach(h),this.h()},h(){st(s[12]??(s[16].href?"a":"button"))(t,$),y(t,"disabled",s[16].disabled),y(t,"flat",s[6]),y(t,"low",s[5]),y(t,"small",s[7]||s[1]==="small"),y(t,"large",s[9]&&!s[7]||s[1]==="large"),y(t,"medium",s[8]&&!s[7]&&!s[9]||s[1]==="medium"),y(t,"surface",s[2]||s[0]==="surface"),y(t,"secondary",s[3]&&!s[2]||s[0]==="secondary"),y(t,"tertiary",s[4]&&!s[2]&&!s[3]||s[0]==="tertiary"),y(t,"primary",!s[4]&&!s[2]&&!s[3]||s[0]==="primary")},m(u,c){k(u,t,c),o&&o.m(t,null),C(t,n),f&&f.m(t,null),a=!0,l||(i=[p(t,"auxclick",s[22]),p(t,"click",s[23]),p(t,"contextmenu",s[24]),p(t,"dblclick",s[25]),p(t,"drag",s[26]),p(t,"dragend",s[27]),p(t,"dragenter",s[28]),p(t,"dragexit",s[29]),p(t,"dragleave",s[30]),p(t,"dragover",s[31]),p(t,"dragstart",s[32]),p(t,"drop",s[33]),p(t,"mousedown",s[34]),p(t,"mouseenter",s[35]),p(t,"mouseleave",s[36]),p(t,"mousemove",s[37]),p(t,"mouseout",s[38]),p(t,"mouseover",s[39]),p(t,"mouseup",s[40]),p(t,"focus",s[41]),p(t,"focusin",s[42]),p(t,"focusout",s[43]),p(t,"blur",s[44]),p(t,"keydown",s[45]),p(t,"keypress",s[46]),p(t,"keyup",s[47]),p(t,"gotpointercapture",s[48]),p(t,"pointercancel",s[49]),p(t,"pointerdown",s[50]),p(t,"pointerenter",s[51]),p(t,"pointerleave",s[52]),p(t,"pointermove",s[53]),p(t,"pointerout",s[54]),p(t,"pointerover",s[55]),p(t,"pointerup",s[56]),p(t,"lostpointercapture",s[57]),p(t,"animationstart",s[58]),p(t,"animationend",s[59]),p(t,"animationiteration",s[60]),p(t,"transitionstart",s[61]),p(t,"transitionrun",s[62]),p(t,"transitionend",s[63]),p(t,"transitioncancel",s[64]),fe(e=ve.call(null,t,s[10]??s[13].ripple))],l=!0)},p(u,c){o&&o.p&&(!a||c[0]&1048576)&&ct(o,m,u,u[20],a?mt(m,u[20],c,null):ht(u[20]),null),u[17].label||u[11]?f?(f.p(u,c),c[0]&133120&&g(f,1)):(f=ft(u),f.c(),g(f,1),f.m(t,null)):f&&(ue(),v(f,1,1,()=>{f=null}),ce()),st(u[12]??(u[16].href?"a":"button"))(t,$=he(_,[{class:"md-fab"},c[0]&65536&&u[16]])),e&&me(e.update)&&c[0]&9216&&e.update.call(null,u[10]??u[13].ripple),y(t,"disabled",u[16].disabled),y(t,"flat",u[6]),y(t,"low",u[5]),y(t,"small",u[7]||u[1]==="small"),y(t,"large",u[9]&&!u[7]||u[1]==="large"),y(t,"medium",u[8]&&!u[7]&&!u[9]||u[1]==="medium"),y(t,"surface",u[2]||u[0]==="surface"),y(t,"secondary",u[3]&&!u[2]||u[0]==="secondary"),y(t,"tertiary",u[4]&&!u[2]&&!u[3]||u[0]==="tertiary"),y(t,"primary",!u[4]&&!u[2]&&!u[3]||u[0]==="primary")},i(u){a||(g(o,u),g(f),a=!0)},o(u){v(o,u),v(f),a=!1},d(u){u&&h(t),o&&o.d(u),f&&f.d(),l=!1,pe(i)}}}function Fe(s){let t=s[12]??(s[16].href?"a":"button"),n,e,a=(s[12]??(s[16].href?"a":"button"))&&J(s);return{c(){a&&a.c(),n=nt()},l(l){a&&a.l(l),n=nt()},m(l,i){a&&a.m(l,i),k(l,n,i),e=!0},p(l,i){l[12]??(l[16].href?"a":"button")?t?N(t,l[12]??(l[16].href?"a":"button"))?(a.d(1),a=J(l),t=l[12]??(l[16].href?"a":"button"),a.c(),a.m(n.parentNode,n)):a.p(l,i):(a=J(l),t=l[12]??(l[16].href?"a":"button"),a.c(),a.m(n.parentNode,n)):t&&(a.d(1),a=null,t=l[12]??(l[16].href?"a":"button"))},i(l){e||(g(a),e=!0)},o(l){v(a),e=!1},d(l){l&&h(n),a&&a.d(l)}}}function ze(s,t,n){const e=["color","size","transition","primary","surface","secondary","tertiary","low","disableElevation","small","medium","large","ripple","label","tag"];let a=at(t,e),l,{$$slots:i={},$$scope:m}=t;const o=re(i),f=le("__mui3_theme");oe(s,f,r=>n(13,l=r));let{color:_="primary"}=t,{size:$="medium"}=t,{transition:u=!0}=t;const c=!0;let{surface:S=!1}=t,{secondary:H=!1}=t,{tertiary:O=!1}=t,{low:W=!1}=t,{disableElevation:X=!1}=t,{small:Q=!1}=t,{medium:R=!0}=t,{large:Y=!1}=t,{ripple:Z=null}=t,{label:x=""}=t,{tag:tt=null}=t,et;function $t(r){d.call(this,s,r)}function gt(r){d.call(this,s,r)}function vt(r){d.call(this,s,r)}function _t(r){d.call(this,s,r)}function bt(r){d.call(this,s,r)}function Et(r){d.call(this,s,r)}function Ft(r){d.call(this,s,r)}function zt(r){d.call(this,s,r)}function It(r){d.call(this,s,r)}function kt(r){d.call(this,s,r)}function wt(r){d.call(this,s,r)}function Mt(r){d.call(this,s,r)}function Ct(r){d.call(this,s,r)}function Lt(r){d.call(this,s,r)}function yt(r){d.call(this,s,r)}function St(r){d.call(this,s,r)}function Bt(r){d.call(this,s,r)}function At(r){d.call(this,s,r)}function Dt(r){d.call(this,s,r)}function Pt(r){d.call(this,s,r)}function Vt(r){d.call(this,s,r)}function Nt(r){d.call(this,s,r)}function jt(r){d.call(this,s,r)}function qt(r){d.call(this,s,r)}function Tt(r){d.call(this,s,r)}function Ut(r){d.call(this,s,r)}function Gt(r){d.call(this,s,r)}function Ht(r){d.call(this,s,r)}function Jt(r){d.call(this,s,r)}function Kt(r){d.call(this,s,r)}function Ot(r){d.call(this,s,r)}function Wt(r){d.call(this,s,r)}function Xt(r){d.call(this,s,r)}function Qt(r){d.call(this,s,r)}function Rt(r){d.call(this,s,r)}function Yt(r){d.call(this,s,r)}function Zt(r){d.call(this,s,r)}function xt(r){d.call(this,s,r)}function te(r){d.call(this,s,r)}function ee(r){d.call(this,s,r)}function ne(r){d.call(this,s,r)}function ae(r){d.call(this,s,r)}function se(r){d.call(this,s,r)}return s.$$set=r=>{t=K(K({},t),ie(r)),n(16,a=at(t,e)),"color"in r&&n(0,_=r.color),"size"in r&&n(1,$=r.size),"transition"in r&&n(18,u=r.transition),"surface"in r&&n(2,S=r.surface),"secondary"in r&&n(3,H=r.secondary),"tertiary"in r&&n(4,O=r.tertiary),"low"in r&&n(5,W=r.low),"disableElevation"in r&&n(6,X=r.disableElevation),"small"in r&&n(7,Q=r.small),"medium"in r&&n(8,R=r.medium),"large"in r&&n(9,Y=r.large),"ripple"in r&&n(10,Z=r.ripple),"label"in r&&n(11,x=r.label),"tag"in r&&n(12,tt=r.tag),"$$scope"in r&&n(20,m=r.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&270336&&n(14,et=ge(u??!0,[l.variables.durations.medium2,0,[...l.variables.easing.standard]]))},[_,$,S,H,O,W,X,Q,R,Y,Z,x,tt,l,et,f,a,o,u,c,m,i,$t,gt,vt,_t,bt,Et,Ft,zt,It,kt,wt,Mt,Ct,Lt,yt,St,Bt,At,Dt,Pt,Vt,Nt,jt,qt,Tt,Ut,Gt,Ht,Jt,Kt,Ot,Wt,Xt,Qt,Rt,Yt,Zt,xt,te,ee,ne,ae,se]}class P extends j{constructor(t){super(),q(this,t,ze,Fe,N,{color:0,size:1,transition:18,primary:19,surface:2,secondary:3,tertiary:4,low:5,disableElevation:6,small:7,medium:8,large:9,ripple:10,label:11,tag:12},null,[-1,-1,-1])}get primary(){return this.$$.ctx[19]}}function Ie(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function ke(s){let t,n;return t=new V({props:{$$slots:{default:[Ie]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function we(s){let t,n;return t=new P({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}class Me extends j{constructor(t){super(),q(this,t,null,we,N,{})}}const Ce=`<script>
	import Fab from '@mui3/fab';
	import Icon from '@mui3/icon';
<\/script>

<Fab>
	<Icon>
		<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
	</Icon>
</Fab>
`;function Le(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),L(t,"viewBox","0 0 24 24")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function ye(s){let t,n;return t=new V({props:{$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Se(s){let t,n;return t=new P({props:{href:"https://www.google.com",target:"_blank",$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}class Be extends j{constructor(t){super(),q(this,t,null,Se,N,{})}}const Ae=`<script>
	import Fab from '@mui3/fab';
	import Icon from '@mui3/icon';
<\/script>

<Fab href="https://www.google.com" target="_blank">
	<Icon>
		<svg viewBox="0 0 24 24">
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
		</svg>
	</Icon>
</Fab>
`;function De(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function Pe(s){let t,n;return t=new V({props:{$$slots:{default:[De]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Ve(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function Ne(s){let t,n;return t=new V({props:{$$slots:{default:[Ve]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function je(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),L(t,"viewBox","0 0 24 24")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function qe(s){let t,n;return t=new V({props:{large:!0,$$slots:{default:[je]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Te(s){let t,n,e,a,l,i,m;return n=new P({props:{small:!0,$$slots:{default:[Pe]},$$scope:{ctx:s}}}),a=new P({props:{$$slots:{default:[Ne]},$$scope:{ctx:s}}}),i=new P({props:{size:"large",$$slots:{default:[qe]},$$scope:{ctx:s}}}),{c(){t=T("div"),b(n.$$.fragment),e=A(),b(a.$$.fragment),l=A(),b(i.$$.fragment),this.h()},l(o){t=U(o,"DIV",{class:!0});var f=I(t);E(n.$$.fragment,f),e=D(f),E(a.$$.fragment,f),l=D(f),E(i.$$.fragment,f),f.forEach(h),this.h()},h(){L(t,"class","fabs svelte-wx69k6")},m(o,f){k(o,t,f),F(n,t,null),C(t,e),F(a,t,null),C(t,l),F(i,t,null),m=!0},p(o,[f]){const _={};f&1&&(_.$$scope={dirty:f,ctx:o}),n.$set(_);const $={};f&1&&($.$$scope={dirty:f,ctx:o}),a.$set($);const u={};f&1&&(u.$$scope={dirty:f,ctx:o}),i.$set(u)},i(o){m||(g(n.$$.fragment,o),g(a.$$.fragment,o),g(i.$$.fragment,o),m=!0)},o(o){v(n.$$.fragment,o),v(a.$$.fragment,o),v(i.$$.fragment,o),m=!1},d(o){o&&h(t),z(n),z(a),z(i)}}}class Ue extends j{constructor(t){super(),q(this,t,null,Te,N,{})}}const Ge=`<script>
	import Fab from '@mui3/fab';
	import Icon from '@mui3/icon';
<\/script>

<div class="fabs">
	<Fab small>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>

	<Fab>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>

	<Fab size="large">
		<Icon large>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
	</Fab>
</div>

<style>
	.fabs {
		display: flex;
		align-items: center;
		gap: var(--md-step6);
	}
</style>
`;function He(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function Je(s){let t,n;return t=new V({props:{$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Ke(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function Oe(s){let t,n;return t=new V({props:{$$slots:{default:[Ke]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function We(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function Xe(s){let t,n;return t=new V({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Qe(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function Re(s){let t,n;return t=new V({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Ye(s){let t,n,e,a,l,i,m,o,f;return n=new P({props:{$$slots:{default:[Je]},$$scope:{ctx:s}}}),a=new P({props:{surface:!0,$$slots:{default:[Oe]},$$scope:{ctx:s}}}),i=new P({props:{color:"secondary",$$slots:{default:[Xe]},$$scope:{ctx:s}}}),o=new P({props:{tertiary:!0,$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){t=T("div"),b(n.$$.fragment),e=A(),b(a.$$.fragment),l=A(),b(i.$$.fragment),m=A(),b(o.$$.fragment),this.h()},l(_){t=U(_,"DIV",{class:!0});var $=I(t);E(n.$$.fragment,$),e=D($),E(a.$$.fragment,$),l=D($),E(i.$$.fragment,$),m=D($),E(o.$$.fragment,$),$.forEach(h),this.h()},h(){L(t,"class","fabs svelte-hc9scu")},m(_,$){k(_,t,$),F(n,t,null),C(t,e),F(a,t,null),C(t,l),F(i,t,null),C(t,m),F(o,t,null),f=!0},p(_,[$]){const u={};$&1&&(u.$$scope={dirty:$,ctx:_}),n.$set(u);const c={};$&1&&(c.$$scope={dirty:$,ctx:_}),a.$set(c);const S={};$&1&&(S.$$scope={dirty:$,ctx:_}),i.$set(S);const H={};$&1&&(H.$$scope={dirty:$,ctx:_}),o.$set(H)},i(_){f||(g(n.$$.fragment,_),g(a.$$.fragment,_),g(i.$$.fragment,_),g(o.$$.fragment,_),f=!0)},o(_){v(n.$$.fragment,_),v(a.$$.fragment,_),v(i.$$.fragment,_),v(o.$$.fragment,_),f=!1},d(_){_&&h(t),z(n),z(a),z(i),z(o)}}}class Ze extends j{constructor(t){super(),q(this,t,null,Ye,N,{})}}const xe=`<script>
	import Fab from '@mui3/fab';
	import Icon from '@mui3/icon';
<\/script>

<div class="fabs">
	<Fab>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>

	<Fab surface>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>

	<Fab color="secondary">
		<Icon	>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>
	<Fab tertiary>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>
</div>

<style>
	.fabs {
		display: flex;
		gap: var(--md-step6);
	}
</style>
`;function tn(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function en(s){let t,n;return t=new V({props:{$$slots:{default:[tn]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function nn(s){let t,n;return{c(){t=T("span"),n=pt("Click Me!"),this.h()},l(e){t=U(e,"SPAN",{slot:!0});var a=I(t);n=dt(a,"Click Me!"),a.forEach(h),this.h()},h(){L(t,"slot","label")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function an(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function sn(s){let t,n;return t=new V({props:{$$slots:{default:[an]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function rn(s){let t,n,e,a,l;return n=new P({props:{$$slots:{label:[nn],default:[en]},$$scope:{ctx:s}}}),n.$on("click",s[1]),a=new P({props:{label:s[0]?"Compose":"",$$slots:{default:[sn]},$$scope:{ctx:s}}}),{c(){t=T("div"),b(n.$$.fragment),e=A(),b(a.$$.fragment),this.h()},l(i){t=U(i,"DIV",{class:!0});var m=I(t);E(n.$$.fragment,m),e=D(m),E(a.$$.fragment,m),m.forEach(h),this.h()},h(){L(t,"class","svelte-1ij64lm")},m(i,m){k(i,t,m),F(n,t,null),C(t,e),F(a,t,null),l=!0},p(i,[m]){const o={};m&4&&(o.$$scope={dirty:m,ctx:i}),n.$set(o);const f={};m&1&&(f.label=i[0]?"Compose":""),m&4&&(f.$$scope={dirty:m,ctx:i}),a.$set(f)},i(i){l||(g(n.$$.fragment,i),g(a.$$.fragment,i),l=!0)},o(i){v(n.$$.fragment,i),v(a.$$.fragment,i),l=!1},d(i){i&&h(t),z(n),z(a)}}}function ln(s,t,n){let e=!1;function a(){n(0,e=!e)}return[e,a]}class on extends j{constructor(t){super(),q(this,t,ln,rn,N,{})}}const fn=`<script>
	import Fab from '@mui3/fab';
	import Icon from '@mui3/icon';
	import '@mui3/button';

	let extended = false;

	function onClick() {
		extended = !extended;
	}
<\/script>

<div>
	<Fab on:click={onClick}>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
		<span slot="label">
			Click Me!
		</span>
	</Fab>

	<Fab label={extended ? 'Compose' : ''}>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>
</div>

<style>
	div {
		display: flex;
		gap: 24px;
		justify-content: flex-start;
		min-width: 288px;
	}
</style>
`;function un(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function cn(s){let t,n;return t=new V({props:{$$slots:{default:[un]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function hn(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function mn(s){let t,n;return t=new V({props:{$$slots:{default:[hn]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function pn(s){let t,n;return{c(){t=w("svg"),n=w("path"),this.h()},l(e){t=M(e,"svg",{});var a=I(t);n=M(a,"path",{d:!0}),I(n).forEach(h),a.forEach(h),this.h()},h(){L(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,a){k(e,t,a),C(t,n)},p:B,d(e){e&&h(t)}}}function dn(s){let t,n;return t=new V({props:{$$slots:{default:[pn]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,a){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function $n(s){let t,n,e,a,l,i,m;return n=new P({props:{$$slots:{default:[cn]},$$scope:{ctx:s}}}),a=new P({props:{low:!0,$$slots:{default:[mn]},$$scope:{ctx:s}}}),i=new P({props:{disableElevation:!0,$$slots:{default:[dn]},$$scope:{ctx:s}}}),{c(){t=T("div"),b(n.$$.fragment),e=A(),b(a.$$.fragment),l=A(),b(i.$$.fragment),this.h()},l(o){t=U(o,"DIV",{class:!0});var f=I(t);E(n.$$.fragment,f),e=D(f),E(a.$$.fragment,f),l=D(f),E(i.$$.fragment,f),f.forEach(h),this.h()},h(){L(t,"class","fabs svelte-wx69k6")},m(o,f){k(o,t,f),F(n,t,null),C(t,e),F(a,t,null),C(t,l),F(i,t,null),m=!0},p(o,[f]){const _={};f&1&&(_.$$scope={dirty:f,ctx:o}),n.$set(_);const $={};f&1&&($.$$scope={dirty:f,ctx:o}),a.$set($);const u={};f&1&&(u.$$scope={dirty:f,ctx:o}),i.$set(u)},i(o){m||(g(n.$$.fragment,o),g(a.$$.fragment,o),g(i.$$.fragment,o),m=!0)},o(o){v(n.$$.fragment,o),v(a.$$.fragment,o),v(i.$$.fragment,o),m=!1},d(o){o&&h(t),z(n),z(a),z(i)}}}class gn extends j{constructor(t){super(),q(this,t,null,$n,N,{})}}const vn=`<script>
	import Fab from '@mui3/fab';
	import Icon from '@mui3/icon';
<\/script>

<div class="fabs">
	<Fab>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>

	<Fab low>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>

	<Fab disableElevation>
		<Icon>
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
		</Icon>
	</Fab>
</div>

<style>
	.fabs {
		display: flex;
		align-items: center;
		gap: var(--md-step6);
	}
</style>
`,_n={title:"Simple",Component:Me,code:Ce},bn={title:"Link",Component:Be,code:Ae},En={title:"Sizes",Component:Ue,code:Ge},Fn={title:"Color",Component:Ze,code:xe},zn={title:"Extended",Component:on,code:fn},In={title:"Elevation",Component:gn,code:vn};function kn(s){let t,n,e,a,l,i,m,o,f,_,$,u;return t=new G({props:{data:_n}}),e=new G({props:{data:bn}}),l=new G({props:{data:En}}),m=new G({props:{data:Fn}}),f=new G({props:{data:zn}}),$=new G({props:{data:In}}),{c(){b(t.$$.fragment),n=A(),b(e.$$.fragment),a=A(),b(l.$$.fragment),i=A(),b(m.$$.fragment),o=A(),b(f.$$.fragment),_=A(),b($.$$.fragment)},l(c){E(t.$$.fragment,c),n=D(c),E(e.$$.fragment,c),a=D(c),E(l.$$.fragment,c),i=D(c),E(m.$$.fragment,c),o=D(c),E(f.$$.fragment,c),_=D(c),E($.$$.fragment,c)},m(c,S){F(t,c,S),k(c,n,S),F(e,c,S),k(c,a,S),F(l,c,S),k(c,i,S),F(m,c,S),k(c,o,S),F(f,c,S),k(c,_,S),F($,c,S),u=!0},p:B,i(c){u||(g(t.$$.fragment,c),g(e.$$.fragment,c),g(l.$$.fragment,c),g(m.$$.fragment,c),g(f.$$.fragment,c),g($.$$.fragment,c),u=!0)},o(c){v(t.$$.fragment,c),v(e.$$.fragment,c),v(l.$$.fragment,c),v(m.$$.fragment,c),v(f.$$.fragment,c),v($.$$.fragment,c),u=!1},d(c){z(t,c),c&&h(n),z(e,c),c&&h(a),z(l,c),c&&h(i),z(m,c),c&&h(o),z(f,c),c&&h(_),z($,c)}}}function wn(s){let t,n;return t=new _e({props:{title:"Floating action buttons (FAB)",description:"The FAB represents the most important action on a screen. It puts key actions within reach",link:"https://m3.material.io/components/floating-action-button/overview",$$slots:{default:[kn]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){F(t,e,a),n=!0},p(e,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}class Dn extends j{constructor(t){super(),q(this,t,null,wn,N,{})}}export{Dn as component};
