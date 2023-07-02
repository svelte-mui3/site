import{S as k,i as U,s as D,k as L,y as h,a as b,l as I,m as x,z as d,c as w,h as f,n as p,b as u,A as m,E as B,g as v,d as g,B as _,F as z,C as E,D as M,a2 as A,P as O,M as R,q,r as G}from"../chunks/index.b9a67496.js";import{F as C}from"../chunks/field.9e409bc6.js";import{I as T}from"../chunks/icon.629bc55a.js";import{B as V}from"../chunks/button.53a546aa.js";import{E as K}from"../chunks/example.c7646941.js";import{C as S}from"../chunks/code.92b9ad65.js";function j(o){let t;return{c(){t=L("input")},l(n){t=I(n,"INPUT",{})},m(n,e){u(n,t,e)},p:z,d(n){n&&f(t)}}}function H(o){let t;return{c(){t=L("input"),this.h()},l(n){t=I(n,"INPUT",{placeholder:!0,type:!0}),this.h()},h(){p(t,"placeholder","Placeholder"),p(t,"type","text")},m(n,e){u(n,t,e)},p:z,d(n){n&&f(t)}}}function J(o){let t;return{c(){t=L("input"),this.h()},l(n){t=I(n,"INPUT",{placeholder:!0,type:!0}),this.h()},h(){p(t,"placeholder","Placeholder"),p(t,"type","text")},m(n,e){u(n,t,e)},p:z,d(n){n&&f(t)}}}function Q(o){let t,n,e,s,l,i,r;return n=new C({props:{$$slots:{default:[j]},$$scope:{ctx:o}}}),s=new C({props:{$$slots:{default:[H]},$$scope:{ctx:o}}}),i=new C({props:{label:"Label",$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){t=L("div"),h(n.$$.fragment),e=b(),h(s.$$.fragment),l=b(),h(i.$$.fragment),this.h()},l(a){t=I(a,"DIV",{class:!0});var $=x(t);d(n.$$.fragment,$),e=w($),d(s.$$.fragment,$),l=w($),d(i.$$.fragment,$),$.forEach(f),this.h()},h(){p(t,"class","svelte-h63avg")},m(a,$){u(a,t,$),m(n,t,null),B(t,e),m(s,t,null),B(t,l),m(i,t,null),r=!0},p(a,[$]){const F={};$&1&&(F.$$scope={dirty:$,ctx:a}),n.$set(F);const P={};$&1&&(P.$$scope={dirty:$,ctx:a}),s.$set(P);const y={};$&1&&(y.$$scope={dirty:$,ctx:a}),i.$set(y)},i(a){r||(v(n.$$.fragment,a),v(s.$$.fragment,a),v(i.$$.fragment,a),r=!0)},o(a){g(n.$$.fragment,a),g(s.$$.fragment,a),g(i.$$.fragment,a),r=!1},d(a){a&&f(t),_(n),_(s),_(i)}}}class W extends k{constructor(t){super(),U(this,t,null,Q,D,{})}}const X=`<script>
	import Field from '@mui3/field';
<\/script>

<div>
	<Field>
		<input />
	</Field>

	<Field>
		<input placeholder="Placeholder" type="text" />
	</Field>

	<Field label="Label">
		<input placeholder="Placeholder" type="text" />
	</Field>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
`;function Y(o){let t;return{c(){t=L("input")},l(n){t=I(n,"INPUT",{})},m(n,e){u(n,t,e)},p:z,d(n){n&&f(t)}}}function Z(o){let t;return{c(){t=L("input"),this.h()},l(n){t=I(n,"INPUT",{placeholder:!0}),this.h()},h(){p(t,"placeholder","Placeholder")},m(n,e){u(n,t,e)},p:z,d(n){n&&f(t)}}}function tt(o){let t,n,e,s,l;return n=new C({props:{fixedLabel:!0,label:"Label",$$slots:{default:[Y]},$$scope:{ctx:o}}}),s=new C({props:{fixedLabel:!0,label:"Label",$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){t=L("div"),h(n.$$.fragment),e=b(),h(s.$$.fragment),this.h()},l(i){t=I(i,"DIV",{class:!0});var r=x(t);d(n.$$.fragment,r),e=w(r),d(s.$$.fragment,r),r.forEach(f),this.h()},h(){p(t,"class","svelte-h63avg")},m(i,r){u(i,t,r),m(n,t,null),B(t,e),m(s,t,null),l=!0},p(i,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:i}),n.$set(a);const $={};r&1&&($.$$scope={dirty:r,ctx:i}),s.$set($)},i(i){l||(v(n.$$.fragment,i),v(s.$$.fragment,i),l=!0)},o(i){g(n.$$.fragment,i),g(s.$$.fragment,i),l=!1},d(i){i&&f(t),_(n),_(s)}}}class et extends k{constructor(t){super(),U(this,t,null,tt,D,{})}}const nt=`<script>
	import Field from '@mui3/field';
<\/script>

<div>
	<Field fixedLabel label="Label">
		<input />
	</Field>

	<Field fixedLabel label="Label">
		<input placeholder="Placeholder" />
	</Field>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
`;function lt(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function st(o){let t,n,e,s;return t=new T({props:{inactive:!0,$$slots:{default:[lt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment),n=b(),e=L("input"),this.h()},l(l){d(t.$$.fragment,l),n=w(l),e=I(l,"INPUT",{placeholder:!0}),this.h()},h(){p(e,"placeholder","Placeholder")},m(l,i){m(t,l,i),u(l,n,i),u(l,e,i),s=!0},p(l,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:l}),t.$set(r)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(n),l&&f(e)}}}function it(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function rt(o){let t,n,e,s;return e=new T({props:{inactive:!0,$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){t=L("input"),n=b(),h(e.$$.fragment),this.h()},l(l){t=I(l,"INPUT",{placeholder:!0}),n=w(l),d(e.$$.fragment,l),this.h()},h(){p(t,"placeholder","Placeholder")},m(l,i){u(l,t,i),u(l,n,i),m(e,l,i),s=!0},p(l,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:l}),e.$set(r)},i(l){s||(v(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){l&&f(t),l&&f(n),_(e,l)}}}function at(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function ot(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function $t(o){let t,n,e,s,l,i;return t=new T({props:{inactive:!0,$$slots:{default:[at]},$$scope:{ctx:o}}}),l=new T({props:{inactive:!0,$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment),n=b(),e=L("input"),s=b(),h(l.$$.fragment),this.h()},l(r){d(t.$$.fragment,r),n=w(r),e=I(r,"INPUT",{placeholder:!0}),s=w(r),d(l.$$.fragment,r),this.h()},h(){p(e,"placeholder","Placeholder")},m(r,a){m(t,r,a),u(r,n,a),u(r,e,a),u(r,s,a),m(l,r,a),i=!0},p(r,a){const $={};a&1&&($.$$scope={dirty:a,ctx:r}),t.$set($);const F={};a&1&&(F.$$scope={dirty:a,ctx:r}),l.$set(F)},i(r){i||(v(t.$$.fragment,r),v(l.$$.fragment,r),i=!0)},o(r){g(t.$$.fragment,r),g(l.$$.fragment,r),i=!1},d(r){_(t,r),r&&f(n),r&&f(e),r&&f(s),_(l,r)}}}function ft(o){let t,n,e,s,l,i,r;return n=new C({props:{label:"Label",$$slots:{default:[st]},$$scope:{ctx:o}}}),s=new C({props:{label:"Label",$$slots:{default:[rt]},$$scope:{ctx:o}}}),i=new C({props:{label:"Label",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){t=L("div"),h(n.$$.fragment),e=b(),h(s.$$.fragment),l=b(),h(i.$$.fragment),this.h()},l(a){t=I(a,"DIV",{class:!0});var $=x(t);d(n.$$.fragment,$),e=w($),d(s.$$.fragment,$),l=w($),d(i.$$.fragment,$),$.forEach(f),this.h()},h(){p(t,"class","svelte-h63avg")},m(a,$){u(a,t,$),m(n,t,null),B(t,e),m(s,t,null),B(t,l),m(i,t,null),r=!0},p(a,[$]){const F={};$&1&&(F.$$scope={dirty:$,ctx:a}),n.$set(F);const P={};$&1&&(P.$$scope={dirty:$,ctx:a}),s.$set(P);const y={};$&1&&(y.$$scope={dirty:$,ctx:a}),i.$set(y)},i(a){r||(v(n.$$.fragment,a),v(s.$$.fragment,a),v(i.$$.fragment,a),r=!0)},o(a){g(n.$$.fragment,a),g(s.$$.fragment,a),g(i.$$.fragment,a),r=!1},d(a){a&&f(t),_(n),_(s),_(i)}}}class ct extends k{constructor(t){super(),U(this,t,null,ft,D,{})}}const ut=`<script>
	import Field from '@mui3/field';
	import Icon from '@mui3/icon';
<\/script>

<div>
	<Field label="Label">
		<Icon inactive>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
		<input placeholder="Placeholder" />
	</Field>

	<Field label="Label">
		<input placeholder="Placeholder" />
		<Icon inactive>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
	</Field>

	<Field label="Label">
		<Icon inactive>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
		<input placeholder="Placeholder" />
		<Icon inactive>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
	</Field>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
`;function pt(o){let t,n,e;return{c(){t=L("input"),this.h()},l(s){t=I(s,"INPUT",{type:!0,placeholder:!0}),this.h()},h(){p(t,"type","text"),p(t,"placeholder","Placeholder")},m(s,l){u(s,t,l),A(t,o[0]),n||(e=O(t,"input",o[1]),n=!0)},p(s,l){l&1&&t.value!==s[0]&&A(t,s[0])},d(s){s&&f(t),n=!1,e()}}}function ht(o){let t;return{c(){t=L("input"),this.h()},l(n){t=I(n,"INPUT",{placeholder:!0}),this.h()},h(){p(t,"placeholder","Placeholder")},m(n,e){u(n,t,e)},p:z,d(n){n&&f(t)}}}function dt(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function mt(o){let t,n,e,s;return t=new T({props:{inactive:!0,$$slots:{default:[dt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment),n=b(),e=L("input"),this.h()},l(l){d(t.$$.fragment,l),n=w(l),e=I(l,"INPUT",{placeholder:!0}),this.h()},h(){p(e,"placeholder","Placeholder")},m(l,i){m(t,l,i),u(l,n,i),u(l,e,i),s=!0},p(l,i){const r={};i&4&&(r.$$scope={dirty:i,ctx:l}),t.$set(r)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(n),l&&f(e)}}}function vt(o){let t,n,e,s,l,i,r;return n=new C({props:{label:"Label",message:o[0],$$slots:{default:[pt]},$$scope:{ctx:o}}}),s=new C({props:{label:"Label",message:o[0],$$slots:{default:[ht]},$$scope:{ctx:o}}}),i=new C({props:{label:"Label",message:o[0],$$slots:{default:[mt]},$$scope:{ctx:o}}}),{c(){t=L("div"),h(n.$$.fragment),e=b(),h(s.$$.fragment),l=b(),h(i.$$.fragment),this.h()},l(a){t=I(a,"DIV",{class:!0});var $=x(t);d(n.$$.fragment,$),e=w($),d(s.$$.fragment,$),l=w($),d(i.$$.fragment,$),$.forEach(f),this.h()},h(){p(t,"class","svelte-h63avg")},m(a,$){u(a,t,$),m(n,t,null),B(t,e),m(s,t,null),B(t,l),m(i,t,null),r=!0},p(a,[$]){const F={};$&1&&(F.message=a[0]),$&5&&(F.$$scope={dirty:$,ctx:a}),n.$set(F);const P={};$&1&&(P.message=a[0]),$&4&&(P.$$scope={dirty:$,ctx:a}),s.$set(P);const y={};$&1&&(y.message=a[0]),$&4&&(y.$$scope={dirty:$,ctx:a}),i.$set(y)},i(a){r||(v(n.$$.fragment,a),v(s.$$.fragment,a),v(i.$$.fragment,a),r=!0)},o(a){g(n.$$.fragment,a),g(s.$$.fragment,a),g(i.$$.fragment,a),r=!1},d(a){a&&f(t),_(n),_(s),_(i)}}}function gt(o,t,n){let e="Supporting text";function s(){e=this.value,n(0,e)}return[e,s]}class _t extends k{constructor(t){super(),U(this,t,gt,vt,D,{})}}const bt=`<script>
	import Field from '@mui3/field';
	import Icon from '@mui3/icon';

	let message = 'Supporting text';
<\/script>

<div>
	<Field label="Label" {message}>
		<input
			type="text"
			placeholder="Placeholder"
			bind:value={message}
		/>
	</Field>

	<Field label="Label" {message}>
		<input placeholder="Placeholder" />
	</Field>

	<Field label="Label" {message}>
		<Icon inactive>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
		<input placeholder="Placeholder" />
	</Field>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
`;function wt(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function xt(o){let t,n,e,s;return t=new T({props:{inactive:!0,$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment),n=b(),e=L("input"),this.h()},l(l){d(t.$$.fragment,l),n=w(l),e=I(l,"INPUT",{placeholder:!0}),this.h()},h(){p(e,"placeholder","Placeholder")},m(l,i){m(t,l,i),u(l,n,i),u(l,e,i),s=!0},p(l,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:l}),t.$set(r)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(n),l&&f(e)}}}function Ft(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function Lt(o){let t,n;return t=new T({props:{inactive:!0,$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,s){m(t,e,s),n=!0},p(e,s){const l={};s&1&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function It(o){let t,n,e,s;return e=new V({props:{icon:!0,variant:"text",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),{c(){t=L("input"),n=b(),h(e.$$.fragment),this.h()},l(l){t=I(l,"INPUT",{placeholder:!0}),n=w(l),d(e.$$.fragment,l),this.h()},h(){p(t,"placeholder","Placeholder")},m(l,i){u(l,t,i),u(l,n,i),m(e,l,i),s=!0},p(l,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:l}),e.$set(r)},i(l){s||(v(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){l&&f(t),l&&f(n),_(e,l)}}}function Pt(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function Bt(o){let t,n;return t=new T({props:{inactive:!0,$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,s){m(t,e,s),n=!0},p(e,s){const l={};s&1&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function Et(o){let t,n;return{c(){t=E("svg"),n=E("path"),this.h()},l(e){t=M(e,"svg",{viewBox:!0});var s=x(t);n=M(s,"path",{d:!0}),x(n).forEach(f),s.forEach(f),this.h()},h(){p(n,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),p(t,"viewBox","0 0 24 24")},m(e,s){u(e,t,s),B(t,n)},p:z,d(e){e&&f(t)}}}function Mt(o){let t,n;return t=new T({props:{inactive:!0,$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,s){m(t,e,s),n=!0},p(e,s){const l={};s&1&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function yt(o){let t,n,e,s,l,i;return t=new V({props:{icon:!0,variant:"text",tag:"span",$$slots:{default:[Bt]},$$scope:{ctx:o}}}),l=new V({props:{icon:!0,variant:"text",$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment),n=b(),e=L("input"),s=b(),h(l.$$.fragment),this.h()},l(r){d(t.$$.fragment,r),n=w(r),e=I(r,"INPUT",{placeholder:!0}),s=w(r),d(l.$$.fragment,r),this.h()},h(){p(e,"placeholder","Placeholder")},m(r,a){m(t,r,a),u(r,n,a),u(r,e,a),u(r,s,a),m(l,r,a),i=!0},p(r,a){const $={};a&1&&($.$$scope={dirty:a,ctx:r}),t.$set($);const F={};a&1&&(F.$$scope={dirty:a,ctx:r}),l.$set(F)},i(r){i||(v(t.$$.fragment,r),v(l.$$.fragment,r),i=!0)},o(r){g(t.$$.fragment,r),g(l.$$.fragment,r),i=!1},d(r){_(t,r),r&&f(n),r&&f(e),r&&f(s),_(l,r)}}}function zt(o){let t,n,e,s,l,i,r;return n=new C({props:{label:"Label",$$slots:{default:[xt]},$$scope:{ctx:o}}}),s=new C({props:{label:"Label",$$slots:{default:[It]},$$scope:{ctx:o}}}),i=new C({props:{label:"Label",$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){t=L("div"),h(n.$$.fragment),e=b(),h(s.$$.fragment),l=b(),h(i.$$.fragment),this.h()},l(a){t=I(a,"DIV",{class:!0});var $=x(t);d(n.$$.fragment,$),e=w($),d(s.$$.fragment,$),l=w($),d(i.$$.fragment,$),$.forEach(f),this.h()},h(){p(t,"class","svelte-h63avg")},m(a,$){u(a,t,$),m(n,t,null),B(t,e),m(s,t,null),B(t,l),m(i,t,null),r=!0},p(a,[$]){const F={};$&1&&(F.$$scope={dirty:$,ctx:a}),n.$set(F);const P={};$&1&&(P.$$scope={dirty:$,ctx:a}),s.$set(P);const y={};$&1&&(y.$$scope={dirty:$,ctx:a}),i.$set(y)},i(a){r||(v(n.$$.fragment,a),v(s.$$.fragment,a),v(i.$$.fragment,a),r=!0)},o(a){g(n.$$.fragment,a),g(s.$$.fragment,a),g(i.$$.fragment,a),r=!1},d(a){a&&f(t),_(n),_(s),_(i)}}}class Ct extends k{constructor(t){super(),U(this,t,null,zt,D,{})}}const Nt=`<script>
	import Field from '@mui3/field';
	import Icon from '@mui3/icon';
	import Button from '@mui3/button';
<\/script>

<div>
	<Field label="Label">
		<Icon inactive>
			<svg viewBox="0 0 24 24">
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
			</svg>
		</Icon>
		<input placeholder="Placeholder" />
	</Field>

	<Field label="Label">
		<input placeholder="Placeholder" />
		<Button icon variant="text">
			<Icon inactive>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Field>

	<Field label="Label">
		<Button icon variant="text" tag="span">
			<Icon inactive>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
		<input placeholder="Placeholder" />
		<Button icon variant="text">
			<Icon inactive>
				<svg viewBox="0 0 24 24">
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
				</svg>
			</Icon>
		</Button>
	</Field>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
`;function Tt(o){let t;return{c(){t=q("visibility_off")},l(n){t=G(n,"visibility_off")},m(n,e){u(n,t,e)},d(n){n&&f(t)}}}function kt(o){let t;return{c(){t=q("visibility")},l(n){t=G(n,"visibility")},m(n,e){u(n,t,e)},d(n){n&&f(t)}}}function Ut(o){let t;function n(l,i){return l[0]?kt:Tt}let e=n(o),s=e(o);return{c(){t=L("span"),s.c(),this.h()},l(l){t=I(l,"SPAN",{class:!0});var i=x(t);s.l(i),i.forEach(f),this.h()},h(){p(t,"class","material-symbols-outlined md-icon")},m(l,i){u(l,t,i),s.m(t,null)},p(l,i){e!==(e=n(l))&&(s.d(1),s=e(l),s&&(s.c(),s.m(t,null)))},d(l){l&&f(t),s.d()}}}function Dt(o){let t,n,e,s;return e=new V({props:{icon:!0,variant:"text",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),e.$on("click",o[2]),e.$on("mousedown",Vt),{c(){t=L("input"),n=b(),h(e.$$.fragment),this.h()},l(l){t=I(l,"INPUT",{placeholder:!0,type:!0}),n=w(l),d(e.$$.fragment,l),this.h()},h(){p(t,"placeholder","Password"),p(t,"type",o[1])},m(l,i){u(l,t,i),u(l,n,i),m(e,l,i),s=!0},p(l,i){(!s||i&2)&&p(t,"type",l[1]);const r={};i&9&&(r.$$scope={dirty:i,ctx:l}),e.$set(r)},i(l){s||(v(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){l&&f(t),l&&f(n),_(e,l)}}}function St(o){let t,n,e,s;return e=new C({props:{label:"Password",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){t=L("link"),n=b(),h(e.$$.fragment),this.h()},l(l){const i=R("svelte-1s8540p",document.head);t=I(i,"LINK",{rel:!0,href:!0}),i.forEach(f),n=w(l),d(e.$$.fragment,l),this.h()},h(){p(t,"rel","stylesheet"),p(t,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,200")},m(l,i){B(document.head,t),u(l,n,i),m(e,l,i),s=!0},p(l,[i]){const r={};i&11&&(r.$$scope={dirty:i,ctx:l}),e.$set(r)},i(l){s||(v(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){f(t),l&&f(n),_(e,l)}}}function Vt(o){o.preventDefault()}function At(o,t,n){let e=!1,s="text";function l(){n(0,e=!e)}return o.$$.update=()=>{o.$$.dirty&1&&n(1,s=e?"password":"text")},[e,s,l]}class qt extends k{constructor(t){super(),U(this,t,At,St,D,{})}}const Gt=`<script>
	import Field from '@mui3/field';
	import Button from '@mui3/button';

	let visibility = false;

	let type = 'text';

	$: type = visibility ? 'password' : 'text';

	/**
	 * mousedown's handler to prevent loss of input focus
	 * @param {MouseEvent} event MouseEvent
	 */
	function onMouseDown(event) {
		event.preventDefault();
	}

	/** click's handler for toggle input type */
	function onClick() {
		visibility = !visibility;
	}
<\/script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,200"
	/>
</svelte:head>

<Field label="Password">
	<input placeholder="Password" {type} />
	<Button icon variant="text" on:click={onClick} on:mousedown={onMouseDown}>
		<span class="material-symbols-outlined md-icon">
			{#if visibility}
				visibility
			{:else}
				visibility_off
			{/if}
		</span>
	</Button>
</Field>
`,Ot={title:"Simple",Component:W,code:X},Rt={title:"Fixed label",Component:et,code:nt},Kt={title:"Icons",Component:ct,code:ut},jt={title:"Message",Component:_t,code:bt},Ht={title:"Button",Component:Ct,code:Nt},Jt={title:"Password",Component:qt,code:Gt};function Qt(o){let t,n,e,s,l,i,r,a,$,F,P,y;return t=new S({props:{data:Ot}}),e=new S({props:{data:Rt}}),l=new S({props:{data:Kt}}),r=new S({props:{data:jt}}),$=new S({props:{data:Ht}}),P=new S({props:{data:Jt}}),{c(){h(t.$$.fragment),n=b(),h(e.$$.fragment),s=b(),h(l.$$.fragment),i=b(),h(r.$$.fragment),a=b(),h($.$$.fragment),F=b(),h(P.$$.fragment)},l(c){d(t.$$.fragment,c),n=w(c),d(e.$$.fragment,c),s=w(c),d(l.$$.fragment,c),i=w(c),d(r.$$.fragment,c),a=w(c),d($.$$.fragment,c),F=w(c),d(P.$$.fragment,c)},m(c,N){m(t,c,N),u(c,n,N),m(e,c,N),u(c,s,N),m(l,c,N),u(c,i,N),m(r,c,N),u(c,a,N),m($,c,N),u(c,F,N),m(P,c,N),y=!0},p:z,i(c){y||(v(t.$$.fragment,c),v(e.$$.fragment,c),v(l.$$.fragment,c),v(r.$$.fragment,c),v($.$$.fragment,c),v(P.$$.fragment,c),y=!0)},o(c){g(t.$$.fragment,c),g(e.$$.fragment,c),g(l.$$.fragment,c),g(r.$$.fragment,c),g($.$$.fragment,c),g(P.$$.fragment,c),y=!1},d(c){_(t,c),c&&f(n),_(e,c),c&&f(s),_(l,c),c&&f(i),_(r,c),c&&f(a),_($,c),c&&f(F),_(P,c)}}}function Wt(o){let t,n;return t=new K({props:{title:"Text Fields",$$slots:{default:[Qt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,s){m(t,e,s),n=!0},p(e,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function Xt(o){return[]}class se extends k{constructor(t){super(),U(this,t,Xt,Wt,D,{})}}export{se as component};
