import{S as U,i as k,s as S,k as I,y as h,a as b,l as L,m as F,z as d,c as x,h as f,n as c,b as u,A as m,E as B,g as v,d as g,B as _,F as z,C as E,D as y,a2 as q,P as O,M as j,q as R,r as K}from"../chunks/index.c17a76e4.js";import{F as M}from"../chunks/field.91719193.js";import{I as N}from"../chunks/button.5a3614db.js";import{B as G}from"../chunks/button.9d5c653e.js";import{E as H}from"../chunks/example.b3b9ea27.js";import{C as V}from"../chunks/code.eed80d1b.js";function J(a){let t;return{c(){t=I("input")},l(e){t=L(e,"INPUT",{})},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function Q(a){let t;return{c(){t=I("input"),this.h()},l(e){t=L(e,"INPUT",{placeholder:!0,type:!0}),this.h()},h(){c(t,"placeholder","Placeholder"),c(t,"type","text")},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function W(a){let t;return{c(){t=I("input"),this.h()},l(e){t=L(e,"INPUT",{placeholder:!0,type:!0}),this.h()},h(){c(t,"placeholder","Placeholder"),c(t,"type","text")},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function X(a){let t,e,n,s,l,r,o;return e=new M({props:{$$slots:{default:[J]},$$scope:{ctx:a}}}),s=new M({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),r=new M({props:{label:"Label",$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){t=I("div"),h(e.$$.fragment),n=b(),h(s.$$.fragment),l=b(),h(r.$$.fragment),this.h()},l(i){t=L(i,"DIV",{class:!0});var $=F(t);d(e.$$.fragment,$),n=x($),d(s.$$.fragment,$),l=x($),d(r.$$.fragment,$),$.forEach(f),this.h()},h(){c(t,"class","svelte-h63avg")},m(i,$){u(i,t,$),m(e,t,null),B(t,n),m(s,t,null),B(t,l),m(r,t,null),o=!0},p(i,[$]){const w={};$&1&&(w.$$scope={dirty:$,ctx:i}),e.$set(w);const P={};$&1&&(P.$$scope={dirty:$,ctx:i}),s.$set(P);const T={};$&1&&(T.$$scope={dirty:$,ctx:i}),r.$set(T)},i(i){o||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(r.$$.fragment,i),o=!0)},o(i){g(e.$$.fragment,i),g(s.$$.fragment,i),g(r.$$.fragment,i),o=!1},d(i){i&&f(t),_(e),_(s),_(r)}}}class Y extends U{constructor(t){super(),k(this,t,null,X,S,{})}}const Z=`<script>
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
`;function tt(a){let t;return{c(){t=I("input")},l(e){t=L(e,"INPUT",{})},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function et(a){let t;return{c(){t=I("input"),this.h()},l(e){t=L(e,"INPUT",{placeholder:!0}),this.h()},h(){c(t,"placeholder","Placeholder")},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function nt(a){let t,e,n,s,l;return e=new M({props:{fixedLabel:!0,label:"Label",$$slots:{default:[tt]},$$scope:{ctx:a}}}),s=new M({props:{fixedLabel:!0,label:"Label",$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){t=I("div"),h(e.$$.fragment),n=b(),h(s.$$.fragment),this.h()},l(r){t=L(r,"DIV",{class:!0});var o=F(t);d(e.$$.fragment,o),n=x(o),d(s.$$.fragment,o),o.forEach(f),this.h()},h(){c(t,"class","svelte-h63avg")},m(r,o){u(r,t,o),m(e,t,null),B(t,n),m(s,t,null),l=!0},p(r,[o]){const i={};o&1&&(i.$$scope={dirty:o,ctx:r}),e.$set(i);const $={};o&1&&($.$$scope={dirty:o,ctx:r}),s.$set($)},i(r){l||(v(e.$$.fragment,r),v(s.$$.fragment,r),l=!0)},o(r){g(e.$$.fragment,r),g(s.$$.fragment,r),l=!1},d(r){r&&f(t),_(e),_(s)}}}class lt extends U{constructor(t){super(),k(this,t,null,nt,S,{})}}const st=`<script>
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
`;function rt(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function it(a){let t,e,n,s;return t=new N({props:{inactive:!0,$$slots:{default:[rt]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=b(),n=I("input"),this.h()},l(l){d(t.$$.fragment,l),e=x(l),n=L(l,"INPUT",{placeholder:!0}),this.h()},h(){c(n,"placeholder","Placeholder")},m(l,r){m(t,l,r),u(l,e,r),u(l,n,r),s=!0},p(l,r){const o={};r&1&&(o.$$scope={dirty:r,ctx:l}),t.$set(o)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(e),l&&f(n)}}}function ot(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function at(a){let t,e,n,s;return n=new N({props:{inactive:!0,$$slots:{default:[ot]},$$scope:{ctx:a}}}),{c(){t=I("input"),e=b(),h(n.$$.fragment),this.h()},l(l){t=L(l,"INPUT",{placeholder:!0}),e=x(l),d(n.$$.fragment,l),this.h()},h(){c(t,"placeholder","Placeholder")},m(l,r){u(l,t,r),u(l,e,r),m(n,l,r),s=!0},p(l,r){const o={};r&1&&(o.$$scope={dirty:r,ctx:l}),n.$set(o)},i(l){s||(v(n.$$.fragment,l),s=!0)},o(l){g(n.$$.fragment,l),s=!1},d(l){l&&f(t),l&&f(e),_(n,l)}}}function $t(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function ft(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function pt(a){let t,e,n,s,l,r;return t=new N({props:{inactive:!0,$$slots:{default:[$t]},$$scope:{ctx:a}}}),l=new N({props:{inactive:!0,$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=b(),n=I("input"),s=b(),h(l.$$.fragment),this.h()},l(o){d(t.$$.fragment,o),e=x(o),n=L(o,"INPUT",{placeholder:!0}),s=x(o),d(l.$$.fragment,o),this.h()},h(){c(n,"placeholder","Placeholder")},m(o,i){m(t,o,i),u(o,e,i),u(o,n,i),u(o,s,i),m(l,o,i),r=!0},p(o,i){const $={};i&1&&($.$$scope={dirty:i,ctx:o}),t.$set($);const w={};i&1&&(w.$$scope={dirty:i,ctx:o}),l.$set(w)},i(o){r||(v(t.$$.fragment,o),v(l.$$.fragment,o),r=!0)},o(o){g(t.$$.fragment,o),g(l.$$.fragment,o),r=!1},d(o){_(t,o),o&&f(e),o&&f(n),o&&f(s),_(l,o)}}}function ut(a){let t,e,n,s,l,r,o;return e=new M({props:{label:"Label",$$slots:{default:[it]},$$scope:{ctx:a}}}),s=new M({props:{label:"Label",$$slots:{default:[at]},$$scope:{ctx:a}}}),r=new M({props:{label:"Label",$$slots:{default:[pt]},$$scope:{ctx:a}}}),{c(){t=I("div"),h(e.$$.fragment),n=b(),h(s.$$.fragment),l=b(),h(r.$$.fragment),this.h()},l(i){t=L(i,"DIV",{class:!0});var $=F(t);d(e.$$.fragment,$),n=x($),d(s.$$.fragment,$),l=x($),d(r.$$.fragment,$),$.forEach(f),this.h()},h(){c(t,"class","svelte-h63avg")},m(i,$){u(i,t,$),m(e,t,null),B(t,n),m(s,t,null),B(t,l),m(r,t,null),o=!0},p(i,[$]){const w={};$&1&&(w.$$scope={dirty:$,ctx:i}),e.$set(w);const P={};$&1&&(P.$$scope={dirty:$,ctx:i}),s.$set(P);const T={};$&1&&(T.$$scope={dirty:$,ctx:i}),r.$set(T)},i(i){o||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(r.$$.fragment,i),o=!0)},o(i){g(e.$$.fragment,i),g(s.$$.fragment,i),g(r.$$.fragment,i),o=!1},d(i){i&&f(t),_(e),_(s),_(r)}}}class ct extends U{constructor(t){super(),k(this,t,null,ut,S,{})}}const ht=`<script>
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
`;function dt(a){let t,e,n;return{c(){t=I("input"),this.h()},l(s){t=L(s,"INPUT",{type:!0,placeholder:!0}),this.h()},h(){c(t,"type","text"),c(t,"placeholder","Placeholder")},m(s,l){u(s,t,l),q(t,a[0]),e||(n=O(t,"input",a[1]),e=!0)},p(s,l){l&1&&t.value!==s[0]&&q(t,s[0])},d(s){s&&f(t),e=!1,n()}}}function mt(a){let t;return{c(){t=I("input"),this.h()},l(e){t=L(e,"INPUT",{placeholder:!0}),this.h()},h(){c(t,"placeholder","Placeholder")},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function vt(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function gt(a){let t,e,n,s;return t=new N({props:{inactive:!0,$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=b(),n=I("input"),this.h()},l(l){d(t.$$.fragment,l),e=x(l),n=L(l,"INPUT",{placeholder:!0}),this.h()},h(){c(n,"placeholder","Placeholder")},m(l,r){m(t,l,r),u(l,e,r),u(l,n,r),s=!0},p(l,r){const o={};r&4&&(o.$$scope={dirty:r,ctx:l}),t.$set(o)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(e),l&&f(n)}}}function _t(a){let t,e,n,s,l,r,o;return e=new M({props:{label:"Label",supportingText:a[0],$$slots:{default:[dt]},$$scope:{ctx:a}}}),s=new M({props:{label:"Label",supportingText:a[0],$$slots:{default:[mt]},$$scope:{ctx:a}}}),r=new M({props:{label:"Label",supportingText:a[0],$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){t=I("div"),h(e.$$.fragment),n=b(),h(s.$$.fragment),l=b(),h(r.$$.fragment),this.h()},l(i){t=L(i,"DIV",{class:!0});var $=F(t);d(e.$$.fragment,$),n=x($),d(s.$$.fragment,$),l=x($),d(r.$$.fragment,$),$.forEach(f),this.h()},h(){c(t,"class","svelte-h63avg")},m(i,$){u(i,t,$),m(e,t,null),B(t,n),m(s,t,null),B(t,l),m(r,t,null),o=!0},p(i,[$]){const w={};$&1&&(w.supportingText=i[0]),$&5&&(w.$$scope={dirty:$,ctx:i}),e.$set(w);const P={};$&1&&(P.supportingText=i[0]),$&4&&(P.$$scope={dirty:$,ctx:i}),s.$set(P);const T={};$&1&&(T.supportingText=i[0]),$&4&&(T.$$scope={dirty:$,ctx:i}),r.$set(T)},i(i){o||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(r.$$.fragment,i),o=!0)},o(i){g(e.$$.fragment,i),g(s.$$.fragment,i),g(r.$$.fragment,i),o=!1},d(i){i&&f(t),_(e),_(s),_(r)}}}function bt(a,t,e){let n="Supporting text";function s(){n=this.value,e(0,n)}return[n,s]}class xt extends U{constructor(t){super(),k(this,t,bt,_t,S,{})}}const wt=`<script>
	import Field from '@mui3/field';
	import Icon from '@mui3/icon';

	let supportingText = 'Supporting text';
<\/script>

<div>
	<Field label="Label" {supportingText}>
		<input
			type="text"
			placeholder="Placeholder"
			bind:value={supportingText}
		/>
	</Field>

	<Field label="Label" {supportingText}>
		<input placeholder="Placeholder" />
	</Field>

	<Field label="Label" {supportingText}>
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
`;function Ft(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function It(a){let t,e,n,s;return t=new N({props:{inactive:!0,$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=b(),n=I("input"),this.h()},l(l){d(t.$$.fragment,l),e=x(l),n=L(l,"INPUT",{placeholder:!0}),this.h()},h(){c(n,"placeholder","Placeholder")},m(l,r){m(t,l,r),u(l,e,r),u(l,n,r),s=!0},p(l,r){const o={};r&1&&(o.$$scope={dirty:r,ctx:l}),t.$set(o)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(e),l&&f(n)}}}function Lt(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function Pt(a){let t,e;return t=new N({props:{inactive:!0,$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,s){m(t,n,s),e=!0},p(n,s){const l={};s&1&&(l.$$scope={dirty:s,ctx:n}),t.$set(l)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){_(t,n)}}}function Bt(a){let t,e,n,s;return n=new G({props:{icon:!0,variant:"text",$$slots:{default:[Pt]},$$scope:{ctx:a}}}),{c(){t=I("input"),e=b(),h(n.$$.fragment),this.h()},l(l){t=L(l,"INPUT",{placeholder:!0}),e=x(l),d(n.$$.fragment,l),this.h()},h(){c(t,"placeholder","Placeholder")},m(l,r){u(l,t,r),u(l,e,r),m(n,l,r),s=!0},p(l,r){const o={};r&1&&(o.$$scope={dirty:r,ctx:l}),n.$set(o)},i(l){s||(v(n.$$.fragment,l),s=!0)},o(l){g(n.$$.fragment,l),s=!1},d(l){l&&f(t),l&&f(e),_(n,l)}}}function Tt(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function Et(a){let t,e;return t=new N({props:{inactive:!0,$$slots:{default:[Tt]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,s){m(t,n,s),e=!0},p(n,s){const l={};s&1&&(l.$$scope={dirty:s,ctx:n}),t.$set(l)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){_(t,n)}}}function yt(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function Mt(a){let t,e;return t=new N({props:{inactive:!0,$$slots:{default:[yt]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,s){m(t,n,s),e=!0},p(n,s){const l={};s&1&&(l.$$scope={dirty:s,ctx:n}),t.$set(l)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){_(t,n)}}}function zt(a){let t,e,n,s,l,r;return t=new G({props:{icon:!0,variant:"text",tag:"span",$$slots:{default:[Et]},$$scope:{ctx:a}}}),l=new G({props:{icon:!0,variant:"text",$$slots:{default:[Mt]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=b(),n=I("input"),s=b(),h(l.$$.fragment),this.h()},l(o){d(t.$$.fragment,o),e=x(o),n=L(o,"INPUT",{placeholder:!0}),s=x(o),d(l.$$.fragment,o),this.h()},h(){c(n,"placeholder","Placeholder")},m(o,i){m(t,o,i),u(o,e,i),u(o,n,i),u(o,s,i),m(l,o,i),r=!0},p(o,i){const $={};i&1&&($.$$scope={dirty:i,ctx:o}),t.$set($);const w={};i&1&&(w.$$scope={dirty:i,ctx:o}),l.$set(w)},i(o){r||(v(t.$$.fragment,o),v(l.$$.fragment,o),r=!0)},o(o){g(t.$$.fragment,o),g(l.$$.fragment,o),r=!1},d(o){_(t,o),o&&f(e),o&&f(n),o&&f(s),_(l,o)}}}function Ct(a){let t,e,n,s,l,r,o;return e=new M({props:{label:"Label",$$slots:{default:[It]},$$scope:{ctx:a}}}),s=new M({props:{label:"Label",$$slots:{default:[Bt]},$$scope:{ctx:a}}}),r=new M({props:{label:"Label",$$slots:{default:[zt]},$$scope:{ctx:a}}}),{c(){t=I("div"),h(e.$$.fragment),n=b(),h(s.$$.fragment),l=b(),h(r.$$.fragment),this.h()},l(i){t=L(i,"DIV",{class:!0});var $=F(t);d(e.$$.fragment,$),n=x($),d(s.$$.fragment,$),l=x($),d(r.$$.fragment,$),$.forEach(f),this.h()},h(){c(t,"class","svelte-h63avg")},m(i,$){u(i,t,$),m(e,t,null),B(t,n),m(s,t,null),B(t,l),m(r,t,null),o=!0},p(i,[$]){const w={};$&1&&(w.$$scope={dirty:$,ctx:i}),e.$set(w);const P={};$&1&&(P.$$scope={dirty:$,ctx:i}),s.$set(P);const T={};$&1&&(T.$$scope={dirty:$,ctx:i}),r.$set(T)},i(i){o||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(r.$$.fragment,i),o=!0)},o(i){g(e.$$.fragment,i),g(s.$$.fragment,i),g(r.$$.fragment,i),o=!1},d(i){i&&f(t),_(e),_(s),_(r)}}}class Nt extends U{constructor(t){super(),k(this,t,null,Ct,S,{})}}const Ut=`<script>
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
`;function kt(a){let t;return{c(){t=R("visibility_off")},l(e){t=K(e,"visibility_off")},m(e,n){u(e,t,n)},d(e){e&&f(t)}}}function St(a){let t;return{c(){t=R("visibility")},l(e){t=K(e,"visibility")},m(e,n){u(e,t,n)},d(e){e&&f(t)}}}function Dt(a){let t;function e(l,r){return l[0]?St:kt}let n=e(a),s=n(a);return{c(){t=I("span"),s.c(),this.h()},l(l){t=L(l,"SPAN",{class:!0});var r=F(t);s.l(r),r.forEach(f),this.h()},h(){c(t,"class","material-symbols-outlined md-icon")},m(l,r){u(l,t,r),s.m(t,null)},p(l,r){n!==(n=e(l))&&(s.d(1),s=n(l),s&&(s.c(),s.m(t,null)))},d(l){l&&f(t),s.d()}}}function Vt(a){let t,e,n,s;return n=new G({props:{icon:!0,variant:"text",$$slots:{default:[Dt]},$$scope:{ctx:a}}}),n.$on("click",a[2]),n.$on("mousedown",qt),{c(){t=I("input"),e=b(),h(n.$$.fragment),this.h()},l(l){t=L(l,"INPUT",{placeholder:!0,type:!0}),e=x(l),d(n.$$.fragment,l),this.h()},h(){c(t,"placeholder","Password"),c(t,"type",a[1])},m(l,r){u(l,t,r),u(l,e,r),m(n,l,r),s=!0},p(l,r){(!s||r&2)&&c(t,"type",l[1]);const o={};r&9&&(o.$$scope={dirty:r,ctx:l}),n.$set(o)},i(l){s||(v(n.$$.fragment,l),s=!0)},o(l){g(n.$$.fragment,l),s=!1},d(l){l&&f(t),l&&f(e),_(n,l)}}}function At(a){let t,e,n,s;return n=new M({props:{label:"Password",$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){t=I("link"),e=b(),h(n.$$.fragment),this.h()},l(l){const r=j("svelte-1s8540p",document.head);t=L(r,"LINK",{rel:!0,href:!0}),r.forEach(f),e=x(l),d(n.$$.fragment,l),this.h()},h(){c(t,"rel","stylesheet"),c(t,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,200")},m(l,r){B(document.head,t),u(l,e,r),m(n,l,r),s=!0},p(l,[r]){const o={};r&11&&(o.$$scope={dirty:r,ctx:l}),n.$set(o)},i(l){s||(v(n.$$.fragment,l),s=!0)},o(l){g(n.$$.fragment,l),s=!1},d(l){f(t),l&&f(e),_(n,l)}}}function qt(a){a.preventDefault()}function Gt(a,t,e){let n=!1,s="text";function l(){e(0,n=!n)}return a.$$.update=()=>{a.$$.dirty&1&&e(1,s=n?"password":"text")},[n,s,l]}class Ot extends U{constructor(t){super(),k(this,t,Gt,At,S,{})}}const Rt=`<script>
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
`;function Kt(a){let t,e,n;return{c(){t=I("input"),this.h()},l(s){t=L(s,"INPUT",{type:!0,placeholder:!0}),this.h()},h(){c(t,"type","text"),c(t,"placeholder","Placeholder")},m(s,l){u(s,t,l),q(t,a[0]),e||(n=O(t,"input",a[1]),e=!0)},p(s,l){l&1&&t.value!==s[0]&&q(t,s[0])},d(s){s&&f(t),e=!1,n()}}}function jt(a){let t;return{c(){t=I("input"),this.h()},l(e){t=L(e,"INPUT",{placeholder:!0}),this.h()},h(){c(t,"placeholder","Placeholder")},m(e,n){u(e,t,n)},p:z,d(e){e&&f(t)}}}function Ht(a){let t,e;return{c(){t=E("svg"),e=E("path"),this.h()},l(n){t=y(n,"svg",{viewBox:!0});var s=F(t);e=y(s,"path",{d:!0}),F(e).forEach(f),s.forEach(f),this.h()},h(){c(e,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),c(t,"viewBox","0 0 24 24")},m(n,s){u(n,t,s),B(t,e)},p:z,d(n){n&&f(t)}}}function Jt(a){let t,e,n,s;return t=new N({props:{inactive:!0,$$slots:{default:[Ht]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=b(),n=I("input"),this.h()},l(l){d(t.$$.fragment,l),e=x(l),n=L(l,"INPUT",{placeholder:!0}),this.h()},h(){c(n,"placeholder","Placeholder")},m(l,r){m(t,l,r),u(l,e,r),u(l,n,r),s=!0},p(l,r){const o={};r&4&&(o.$$scope={dirty:r,ctx:l}),t.$set(o)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){g(t.$$.fragment,l),s=!1},d(l){_(t,l),l&&f(e),l&&f(n)}}}function Qt(a){let t,e,n,s,l,r,o;return e=new M({props:{label:"Label",supportingText:a[0],$$slots:{default:[Kt]},$$scope:{ctx:a}}}),s=new M({props:{error:!0,label:"Label",supportingText:a[0],$$slots:{default:[jt]},$$scope:{ctx:a}}}),r=new M({props:{error:!0,supportingText:a[0],$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){t=I("div"),h(e.$$.fragment),n=b(),h(s.$$.fragment),l=b(),h(r.$$.fragment),this.h()},l(i){t=L(i,"DIV",{class:!0});var $=F(t);d(e.$$.fragment,$),n=x($),d(s.$$.fragment,$),l=x($),d(r.$$.fragment,$),$.forEach(f),this.h()},h(){c(t,"class","svelte-h63avg")},m(i,$){u(i,t,$),m(e,t,null),B(t,n),m(s,t,null),B(t,l),m(r,t,null),o=!0},p(i,[$]){const w={};$&1&&(w.supportingText=i[0]),$&5&&(w.$$scope={dirty:$,ctx:i}),e.$set(w);const P={};$&1&&(P.supportingText=i[0]),$&4&&(P.$$scope={dirty:$,ctx:i}),s.$set(P);const T={};$&1&&(T.supportingText=i[0]),$&4&&(T.$$scope={dirty:$,ctx:i}),r.$set(T)},i(i){o||(v(e.$$.fragment,i),v(s.$$.fragment,i),v(r.$$.fragment,i),o=!0)},o(i){g(e.$$.fragment,i),g(s.$$.fragment,i),g(r.$$.fragment,i),o=!1},d(i){i&&f(t),_(e),_(s),_(r)}}}function Wt(a,t,e){let n="Supporting text";function s(){n=this.value,e(0,n)}return[n,s]}class Xt extends U{constructor(t){super(),k(this,t,Wt,Qt,S,{})}}const Yt=`<script>
	import Field from '@mui3/field';
	import Icon from '@mui3/icon';

	let supportingText = 'Supporting text';
<\/script>

<div>
	<Field label="Label" {supportingText}>
		<input
			type="text"
			placeholder="Placeholder"
			bind:value={supportingText}
		/>
	</Field>

	<Field error label="Label" {supportingText}>
		<input placeholder="Placeholder" />
	</Field>

	<Field error {supportingText}>
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
`,Zt={title:"Simple",Component:Y,code:Z},te={title:"Fixed label",Component:lt,code:st},ee={title:"Icons",Component:ct,code:ht},ne={title:"Supporting Text",Component:xt,code:wt},le={title:"Error",Component:Xt,code:Yt},se={title:"Button",Component:Nt,code:Ut},re={title:"Password",Component:Ot,code:Rt};function ie(a){let t,e,n,s,l,r,o,i,$,w,P,T,D,A;return t=new V({props:{data:Zt}}),n=new V({props:{data:te}}),l=new V({props:{data:ee}}),o=new V({props:{data:ne}}),$=new V({props:{data:le}}),P=new V({props:{data:se}}),D=new V({props:{data:re}}),{c(){h(t.$$.fragment),e=b(),h(n.$$.fragment),s=b(),h(l.$$.fragment),r=b(),h(o.$$.fragment),i=b(),h($.$$.fragment),w=b(),h(P.$$.fragment),T=b(),h(D.$$.fragment)},l(p){d(t.$$.fragment,p),e=x(p),d(n.$$.fragment,p),s=x(p),d(l.$$.fragment,p),r=x(p),d(o.$$.fragment,p),i=x(p),d($.$$.fragment,p),w=x(p),d(P.$$.fragment,p),T=x(p),d(D.$$.fragment,p)},m(p,C){m(t,p,C),u(p,e,C),m(n,p,C),u(p,s,C),m(l,p,C),u(p,r,C),m(o,p,C),u(p,i,C),m($,p,C),u(p,w,C),m(P,p,C),u(p,T,C),m(D,p,C),A=!0},p:z,i(p){A||(v(t.$$.fragment,p),v(n.$$.fragment,p),v(l.$$.fragment,p),v(o.$$.fragment,p),v($.$$.fragment,p),v(P.$$.fragment,p),v(D.$$.fragment,p),A=!0)},o(p){g(t.$$.fragment,p),g(n.$$.fragment,p),g(l.$$.fragment,p),g(o.$$.fragment,p),g($.$$.fragment,p),g(P.$$.fragment,p),g(D.$$.fragment,p),A=!1},d(p){_(t,p),p&&f(e),_(n,p),p&&f(s),_(l,p),p&&f(r),_(o,p),p&&f(i),_($,p),p&&f(w),_(P,p),p&&f(T),_(D,p)}}}function oe(a){let t,e;return t=new H({props:{title:"Text Fields",description:"Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.",link:"https://m3.material.io/components/text-fields/overview",$$slots:{default:[ie]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,s){m(t,n,s),e=!0},p(n,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:n}),t.$set(l)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){_(t,n)}}}function ae(a){return[]}class de extends U{constructor(t){super(),k(this,t,ae,oe,S,{})}}export{de as component};
