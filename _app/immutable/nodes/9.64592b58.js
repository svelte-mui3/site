import{S as B,i as A,s as V,y as c,z as u,A as p,g,d as h,B as _,a as E,c as z,b as m,h as a,q as w,r as x,k as T,l as U,m as I,n as k,E as P,F as M,C as S,D as C}from"../chunks/index.c17a76e4.js";import{E as K}from"../chunks/example.b3b9ea27.js";import{a as R,C as F}from"../chunks/code.eed80d1b.js";import{L as b}from"../chunks/list-item.d17a0690.js";import{I as N}from"../chunks/button.5a3614db.js";import{S as j}from"../chunks/switch.8270ccbf.js";function O($){let t;return{c(){t=w("List Item #1")},l(s){t=x(s,"List Item #1")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function Q($){let t,s,e,n,r,d;return t=new b({props:{$$slots:{default:[O]},$$scope:{ctx:$}}}),e=new b({props:{headline:"List Item #2"}}),r=new b({props:{href:"https://m3.material.io/components/lists/overview",target:"_blank",headline:"List Item Link"}}),{c(){c(t.$$.fragment),s=E(),c(e.$$.fragment),n=E(),c(r.$$.fragment)},l(i){u(t.$$.fragment,i),s=z(i),u(e.$$.fragment,i),n=z(i),u(r.$$.fragment,i)},m(i,o){p(t,i,o),m(i,s,o),p(e,i,o),m(i,n,o),p(r,i,o),d=!0},p(i,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:i}),t.$set(f)},i(i){d||(g(t.$$.fragment,i),g(e.$$.fragment,i),g(r.$$.fragment,i),d=!0)},o(i){h(t.$$.fragment,i),h(e.$$.fragment,i),h(r.$$.fragment,i),d=!1},d(i){_(t,i),i&&a(s),_(e,i),i&&a(n),_(r,i)}}}function W($){let t,s;return t=new R({props:{$$slots:{default:[Q]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}class X extends B{constructor(t){super(),A(this,t,null,W,V,{})}}const Y=`<script>
	import Card from '@mui3/card';
	import ListItem from '@mui3/list';
<\/script>

<Card>
	<ListItem>List Item #1</ListItem>

	<ListItem headline="List Item #2" />

	<ListItem
		href="https://m3.material.io/components/lists/overview"
		target="_blank"
		headline="List Item Link"
	/>
</Card>
`;function Z($){let t;return{c(){t=w("List Item #1")},l(s){t=x(s,"List Item #1")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function y($){let t;return{c(){t=w("List Item #2")},l(s){t=x(s,"List Item #2")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function tt($){let t;return{c(){t=w("List Item #3")},l(s){t=x(s,"List Item #3")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function et($){let t,s;return{c(){t=T("span"),s=w("Subtitle for in slot"),this.h()},l(e){t=U(e,"SPAN",{slot:!0});var n=I(t);s=x(n,"Subtitle for in slot"),n.forEach(a),this.h()},h(){k(t,"slot","subtitle")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function st($){let t;return{c(){t=w("List Item #4")},l(s){t=x(s,"List Item #4")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function nt($){let t,s,e,n;return{c(){t=T("span"),s=w("Very long multiline subtitle "),e=T("br"),n=w(' for fourth item"'),this.h()},l(r){t=U(r,"SPAN",{slot:!0});var d=I(t);s=x(d,"Very long multiline subtitle "),e=U(d,"BR",{}),n=x(d,' for fourth item"'),d.forEach(a),this.h()},h(){k(t,"slot","subtitle")},m(r,d){m(r,t,d),P(t,s),P(t,e),P(t,n)},p:M,d(r){r&&a(t)}}}function rt($){let t,s,e,n,r,d,i,o;return t=new b({props:{tag:"label",subtitle:"Subtitle for first item",$$slots:{default:[Z]},$$scope:{ctx:$}}}),e=new b({props:{tag:"label",subtitle:"Subtitle for second item",$$slots:{default:[y]},$$scope:{ctx:$}}}),r=new b({props:{tag:"label",$$slots:{subtitle:[et],default:[tt]},$$scope:{ctx:$}}}),i=new b({props:{tag:"label",$$slots:{subtitle:[nt],default:[st]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment),s=E(),c(e.$$.fragment),n=E(),c(r.$$.fragment),d=E(),c(i.$$.fragment)},l(f){u(t.$$.fragment,f),s=z(f),u(e.$$.fragment,f),n=z(f),u(r.$$.fragment,f),d=z(f),u(i.$$.fragment,f)},m(f,L){p(t,f,L),m(f,s,L),p(e,f,L),m(f,n,L),p(r,f,L),m(f,d,L),p(i,f,L),o=!0},p(f,L){const l={};L&1&&(l.$$scope={dirty:L,ctx:f}),t.$set(l);const v={};L&1&&(v.$$scope={dirty:L,ctx:f}),e.$set(v);const q={};L&1&&(q.$$scope={dirty:L,ctx:f}),r.$set(q);const D={};L&1&&(D.$$scope={dirty:L,ctx:f}),i.$set(D)},i(f){o||(g(t.$$.fragment,f),g(e.$$.fragment,f),g(r.$$.fragment,f),g(i.$$.fragment,f),o=!0)},o(f){h(t.$$.fragment,f),h(e.$$.fragment,f),h(r.$$.fragment,f),h(i.$$.fragment,f),o=!1},d(f){_(t,f),f&&a(s),_(e,f),f&&a(n),_(r,f),f&&a(d),_(i,f)}}}function it($){let t,s;return t=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}class $t extends B{constructor(t){super(),A(this,t,null,it,V,{})}}const lt=`<script>
	import Card from '@mui3/card';
	import ListItem from '@mui3/list';
<\/script>

<Card>
	<ListItem tag="label" subtitle="Subtitle for first item">
		List Item #1
	</ListItem>

	<ListItem tag="label" subtitle="Subtitle for second item">
		List Item #2
	</ListItem>

	<ListItem tag="label">
		List Item #3
		<span slot="subtitle">
			Subtitle for in slot
		</span>
	</ListItem>

	<ListItem tag="label">
		List Item #4
		<span slot="subtitle">
			Very long multiline subtitle <br /> for fourth item"
		</span>
	</ListItem>
</Card>
`;function at($){let t;return{c(){t=w("List Item #1")},l(s){t=x(s,"List Item #1")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function ft($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function ot($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[ft]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function mt($){let t;return{c(){t=w("List Item #2")},l(s){t=x(s,"List Item #2")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function ct($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function ut($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[ct]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function pt($){let t;return{c(){t=w("List Item #3")},l(s){t=x(s,"List Item #3")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function gt($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function ht($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[gt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function _t($){let t,s,e,n,r,d;return t=new b({props:{tag:"label",$$slots:{leading:[ot],default:[at]},$$scope:{ctx:$}}}),e=new b({props:{tag:"label",$$slots:{leading:[ut],default:[mt]},$$scope:{ctx:$}}}),r=new b({props:{tag:"label",$$slots:{leading:[ht],default:[pt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment),s=E(),c(e.$$.fragment),n=E(),c(r.$$.fragment)},l(i){u(t.$$.fragment,i),s=z(i),u(e.$$.fragment,i),n=z(i),u(r.$$.fragment,i)},m(i,o){p(t,i,o),m(i,s,o),p(e,i,o),m(i,n,o),p(r,i,o),d=!0},p(i,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:i}),t.$set(f);const L={};o&1&&(L.$$scope={dirty:o,ctx:i}),e.$set(L);const l={};o&1&&(l.$$scope={dirty:o,ctx:i}),r.$set(l)},i(i){d||(g(t.$$.fragment,i),g(e.$$.fragment,i),g(r.$$.fragment,i),d=!0)},o(i){h(t.$$.fragment,i),h(e.$$.fragment,i),h(r.$$.fragment,i),d=!1},d(i){_(t,i),i&&a(s),_(e,i),i&&a(n),_(r,i)}}}function dt($){let t,s;return t=new R({props:{$$slots:{default:[_t]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}class vt extends B{constructor(t){super(),A(this,t,null,dt,V,{})}}const Lt=`<script>
	import Card from '@mui3/card';
	import Icon from '@mui3/icon/icon.svelte';
	import ListItem from '@mui3/list';
<\/script>

<Card>
    <ListItem tag="label">
        <Icon slot="leading">
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        List Item #1
    </ListItem>
    <ListItem tag="label">
        <Icon slot="leading">
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        List Item #2
    </ListItem>
    <ListItem tag="label">
        <Icon slot="leading">
            <svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </Icon>
        List Item #3
    </ListItem>
</Card>
`;function It($){let t;return{c(){t=w("List Item #1")},l(s){t=x(s,"List Item #1")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function bt($){let t;return{c(){t=T("input"),this.h()},l(s){t=U(s,"INPUT",{type:!0}),this.h()},h(){k(t,"type","checkbox")},m(s,e){m(s,t,e)},p:M,d(s){s&&a(t)}}}function wt($){let t,s;return t=new j({props:{slot:"trailing",$$slots:{default:[bt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function xt($){let t;return{c(){t=w("List Item #2")},l(s){t=x(s,"List Item #2")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function St($){let t;return{c(){t=T("input"),this.h()},l(s){t=U(s,"INPUT",{type:!0}),this.h()},h(){k(t,"type","checkbox")},m(s,e){m(s,t,e)},p:M,d(s){s&&a(t)}}}function Ct($){let t,s;return t=new j({props:{slot:"trailing",$$slots:{default:[St]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Et($){let t;return{c(){t=w("List Item #3")},l(s){t=x(s,"List Item #3")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function zt($){let t;return{c(){t=T("input"),this.h()},l(s){t=U(s,"INPUT",{type:!0}),this.h()},h(){k(t,"type","checkbox")},m(s,e){m(s,t,e)},p:M,d(s){s&&a(t)}}}function Mt($){let t,s;return t=new j({props:{slot:"trailing",$$slots:{default:[zt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function kt($){let t,s,e,n,r,d;return t=new b({props:{tag:"label",$$slots:{trailing:[wt],default:[It]},$$scope:{ctx:$}}}),e=new b({props:{tag:"label",$$slots:{trailing:[Ct],default:[xt]},$$scope:{ctx:$}}}),r=new b({props:{tag:"label",$$slots:{trailing:[Mt],default:[Et]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment),s=E(),c(e.$$.fragment),n=E(),c(r.$$.fragment)},l(i){u(t.$$.fragment,i),s=z(i),u(e.$$.fragment,i),n=z(i),u(r.$$.fragment,i)},m(i,o){p(t,i,o),m(i,s,o),p(e,i,o),m(i,n,o),p(r,i,o),d=!0},p(i,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:i}),t.$set(f);const L={};o&1&&(L.$$scope={dirty:o,ctx:i}),e.$set(L);const l={};o&1&&(l.$$scope={dirty:o,ctx:i}),r.$set(l)},i(i){d||(g(t.$$.fragment,i),g(e.$$.fragment,i),g(r.$$.fragment,i),d=!0)},o(i){h(t.$$.fragment,i),h(e.$$.fragment,i),h(r.$$.fragment,i),d=!1},d(i){_(t,i),i&&a(s),_(e,i),i&&a(n),_(r,i)}}}function Pt($){let t,s;return t=new R({props:{$$slots:{default:[kt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}class Nt extends B{constructor(t){super(),A(this,t,null,Pt,V,{})}}const Tt=`<script>
	import Card from '@mui3/card';
	import ListItem from '@mui3/list';
	import Switch from '@mui3/switch/switch.svelte';
<\/script>

<Card>
	<ListItem tag="label">
		List Item #1
		<Switch slot="trailing"><input type="checkbox" /></Switch>
	</ListItem>

	<ListItem tag="label">
		List Item #2
		<Switch slot="trailing"><input type="checkbox" /></Switch>
	</ListItem>

	<ListItem tag="label">
		List Item #3
		<Switch slot="trailing"><input type="checkbox" /></Switch>
	</ListItem>
</Card>
`;function Ut($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function Bt($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[Ut]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function At($){let t;return{c(){t=w("List Item #2")},l(s){t=x(s,"List Item #2")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function Vt($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function qt($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[Vt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Dt($){let t;return{c(){t=T("input"),this.h()},l(s){t=U(s,"INPUT",{type:!0}),this.h()},h(){k(t,"type","checkbox")},m(s,e){m(s,t,e)},p:M,d(s){s&&a(t)}}}function Ft($){let t,s;return t=new j({props:{slot:"trailing",$$slots:{default:[Dt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Rt($){let t;return{c(){t=w("List Item #3")},l(s){t=x(s,"List Item #3")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function jt($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function Gt($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[jt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Ht($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function Jt($){let t,s;return t=new N({props:{slot:"trailing",$$slots:{default:[Ht]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Kt($){let t;return{c(){t=w("List Item #4")},l(s){t=x(s,"List Item #4")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function Ot($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function Qt($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[Ot]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Wt($){let t;return{c(){t=T("input"),this.h()},l(s){t=U(s,"INPUT",{type:!0}),this.h()},h(){k(t,"type","checkbox")},m(s,e){m(s,t,e)},p:M,d(s){s&&a(t)}}}function Xt($){let t,s;return t=new j({props:{slot:"trailing",$$slots:{default:[Wt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function Yt($){let t;return{c(){t=w("List Item #5")},l(s){t=x(s,"List Item #5")},m(s,e){m(s,t,e)},d(s){s&&a(t)}}}function Zt($){let t,s;return{c(){t=S("svg"),s=S("path"),this.h()},l(e){t=C(e,"svg",{});var n=I(t);s=C(n,"path",{d:!0}),I(s).forEach(a),n.forEach(a),this.h()},h(){k(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")},m(e,n){m(e,t,n),P(t,s)},p:M,d(e){e&&a(t)}}}function yt($){let t,s;return t=new N({props:{slot:"leading",$$slots:{default:[Zt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function te($){let t,s,e,n,r,d,i,o,f,L;return t=new b({props:{headline:"List Item #1",subtitle:"Subtitle for first item",$$slots:{leading:[Bt]},$$scope:{ctx:$}}}),e=new b({props:{tag:"label",subtitle:"Subtitle for second item",divider:!0,$$slots:{trailing:[Ft],leading:[qt],default:[At]},$$scope:{ctx:$}}}),r=new b({props:{subtitle:"Subtitle for third item",$$slots:{trailing:[Jt],leading:[Gt],default:[Rt]},$$scope:{ctx:$}}}),i=new b({props:{tag:"label",subtitle:"Subtitle for fourth item",divider:!0,$$slots:{trailing:[Xt],leading:[Qt],default:[Kt]},$$scope:{ctx:$}}}),f=new b({props:{subtitle:"Subtitle for fifth item",disabled:!0,$$slots:{leading:[yt],default:[Yt]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment),s=E(),c(e.$$.fragment),n=E(),c(r.$$.fragment),d=E(),c(i.$$.fragment),o=E(),c(f.$$.fragment)},l(l){u(t.$$.fragment,l),s=z(l),u(e.$$.fragment,l),n=z(l),u(r.$$.fragment,l),d=z(l),u(i.$$.fragment,l),o=z(l),u(f.$$.fragment,l)},m(l,v){p(t,l,v),m(l,s,v),p(e,l,v),m(l,n,v),p(r,l,v),m(l,d,v),p(i,l,v),m(l,o,v),p(f,l,v),L=!0},p(l,v){const q={};v&1&&(q.$$scope={dirty:v,ctx:l}),t.$set(q);const D={};v&1&&(D.$$scope={dirty:v,ctx:l}),e.$set(D);const G={};v&1&&(G.$$scope={dirty:v,ctx:l}),r.$set(G);const H={};v&1&&(H.$$scope={dirty:v,ctx:l}),i.$set(H);const J={};v&1&&(J.$$scope={dirty:v,ctx:l}),f.$set(J)},i(l){L||(g(t.$$.fragment,l),g(e.$$.fragment,l),g(r.$$.fragment,l),g(i.$$.fragment,l),g(f.$$.fragment,l),L=!0)},o(l){h(t.$$.fragment,l),h(e.$$.fragment,l),h(r.$$.fragment,l),h(i.$$.fragment,l),h(f.$$.fragment,l),L=!1},d(l){_(t,l),l&&a(s),_(e,l),l&&a(n),_(r,l),l&&a(d),_(i,l),l&&a(o),_(f,l)}}}function ee($){let t,s;return t=new R({props:{$$slots:{default:[te]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}class se extends B{constructor(t){super(),A(this,t,null,ee,V,{})}}const ne=`<script>
	import Card from '@mui3/card';
	import Icon from '@mui3/icon';
	import ListItem from '@mui3/list';
	import Switch from '@mui3/switch/switch.svelte';
<\/script>

<Card>
	<ListItem headline="List Item #1" subtitle="Subtitle for first item">
		<Icon slot="leading">
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
		</Icon>
	</ListItem>

	<ListItem tag="label" subtitle="Subtitle for second item" divider>
		<Icon slot="leading">
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
		</Icon>
		List Item #2
		<Switch slot="trailing"><input type="checkbox" /></Switch>
	</ListItem>

	<ListItem subtitle="Subtitle for third item">
		<Icon slot="leading">
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
		</Icon>
		List Item #3
        <Icon slot="trailing">
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
		</Icon>
	</ListItem>

	<ListItem tag="label" subtitle="Subtitle for fourth item" divider>
		<Icon slot="leading">
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
		</Icon>
		List Item #4
		<Switch slot="trailing"><input type="checkbox" /></Switch>
	</ListItem>

	<ListItem subtitle="Subtitle for fifth item" disabled>
		<Icon slot="leading">
			<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
		</Icon>
		List Item #5
    </ListItem>
</Card>
`,re={title:"Basic",Component:X,code:Y},ie={title:"Subtitle",Component:$t,code:lt},$e={title:"Leading",Component:vt,code:Lt},le={title:"Trailing",Component:Nt,code:Tt},ae={title:"Complex",Component:se,code:ne};function fe($){let t,s,e,n,r,d,i,o,f,L;return t=new F({props:{data:re}}),e=new F({props:{data:ie}}),r=new F({props:{data:$e}}),i=new F({props:{data:le}}),f=new F({props:{data:ae}}),{c(){c(t.$$.fragment),s=E(),c(e.$$.fragment),n=E(),c(r.$$.fragment),d=E(),c(i.$$.fragment),o=E(),c(f.$$.fragment)},l(l){u(t.$$.fragment,l),s=z(l),u(e.$$.fragment,l),n=z(l),u(r.$$.fragment,l),d=z(l),u(i.$$.fragment,l),o=z(l),u(f.$$.fragment,l)},m(l,v){p(t,l,v),m(l,s,v),p(e,l,v),m(l,n,v),p(r,l,v),m(l,d,v),p(i,l,v),m(l,o,v),p(f,l,v),L=!0},p:M,i(l){L||(g(t.$$.fragment,l),g(e.$$.fragment,l),g(r.$$.fragment,l),g(i.$$.fragment,l),g(f.$$.fragment,l),L=!0)},o(l){h(t.$$.fragment,l),h(e.$$.fragment,l),h(r.$$.fragment,l),h(i.$$.fragment,l),h(f.$$.fragment,l),L=!1},d(l){_(t,l),l&&a(s),_(e,l),l&&a(n),_(r,l),l&&a(d),_(i,l),l&&a(o),_(f,l)}}}function oe($){let t,s;return t=new K({props:{title:"Lists",description:"Lists are continuous, vertical indexes of text or images",link:"https://m3.material.io/components/lists/overview",$$slots:{default:[fe]},$$scope:{ctx:$}}}),{c(){c(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){p(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){_(t,e)}}}function me($){return[]}class de extends B{constructor(t){super(),A(this,t,me,oe,V,{})}}export{de as component};
