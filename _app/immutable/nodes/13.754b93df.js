import{S as D,i as V,s as A,k as _,y as m,a as I,l as d,m as E,z as g,c as P,h as $,n as y,b as f,A as w,E as S,g as v,d as k,B as b,F as R,q as B,r as F,u as j,P as U,af as O,ag as z}from"../chunks/index.b9a67496.js";import{C as q}from"../chunks/code.92b9ad65.js";import{E as G}from"../chunks/example.c7646941.js";import{S as C}from"../chunks/switch.69c592c6.js";function H(a){let t;return{c(){t=_("input"),this.h()},l(e){t=d(e,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox")},m(e,n){f(e,t,n)},p:R,d(e){e&&$(t)}}}function J(a){let t;return{c(){t=_("input"),this.h()},l(e){t=d(e,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox"),t.checked=!0},m(e,n){f(e,t,n)},p:R,d(e){e&&$(t)}}}function K(a){let t;return{c(){t=_("input"),this.h()},l(e){t=d(e,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox"),t.disabled=!0},m(e,n){f(e,t,n)},p:R,d(e){e&&$(t)}}}function L(a){let t;return{c(){t=_("input"),this.h()},l(e){t=d(e,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox"),t.disabled=!0,t.checked=!0},m(e,n){f(e,t,n)},p:R,d(e){e&&$(t)}}}function M(a){let t,e,n,i,s,c,o,h,l;return e=new C({props:{$$slots:{default:[H]},$$scope:{ctx:a}}}),i=new C({props:{$$slots:{default:[J]},$$scope:{ctx:a}}}),c=new C({props:{$$slots:{default:[K]},$$scope:{ctx:a}}}),h=new C({props:{$$slots:{default:[L]},$$scope:{ctx:a}}}),{c(){t=_("div"),m(e.$$.fragment),n=I(),m(i.$$.fragment),s=I(),m(c.$$.fragment),o=I(),m(h.$$.fragment),this.h()},l(u){t=d(u,"DIV",{class:!0});var r=E(t);g(e.$$.fragment,r),n=P(r),g(i.$$.fragment,r),s=P(r),g(c.$$.fragment,r),o=P(r),g(h.$$.fragment,r),r.forEach($),this.h()},h(){y(t,"class","svelte-1lcl7k")},m(u,r){f(u,t,r),w(e,t,null),S(t,n),w(i,t,null),S(t,s),w(c,t,null),S(t,o),w(h,t,null),l=!0},p(u,[r]){const p={};r&1&&(p.$$scope={dirty:r,ctx:u}),e.$set(p);const x={};r&1&&(x.$$scope={dirty:r,ctx:u}),i.$set(x);const N={};r&1&&(N.$$scope={dirty:r,ctx:u}),c.$set(N);const T={};r&1&&(T.$$scope={dirty:r,ctx:u}),h.$set(T)},i(u){l||(v(e.$$.fragment,u),v(i.$$.fragment,u),v(c.$$.fragment,u),v(h.$$.fragment,u),l=!0)},o(u){k(e.$$.fragment,u),k(i.$$.fragment,u),k(c.$$.fragment,u),k(h.$$.fragment,u),l=!1},d(u){u&&$(t),b(e),b(i),b(c),b(h)}}}class Q extends D{constructor(t){super(),V(this,t,null,M,A,{})}}const W=`<script>
	import Switch from '@mui3/switch';
<\/script>

<div>
	<Switch>
		<input type="checkbox" />
	</Switch>

	<Switch>
		<input type="checkbox" checked />
	</Switch>

	<Switch>
		<input type="checkbox" disabled />
	</Switch>

	<Switch>
		<input type="checkbox" disabled checked />
	</Switch>
</div>

<style>
	div {
		display: flex;
		gap: 16px;
	}
</style>
`;function X(a){let t,e,n;return{c(){t=_("input"),this.h()},l(i){t=d(i,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox")},m(i,s){f(i,t,s),t.checked=a[0],e||(n=U(t,"change",a[1]),e=!0)},p(i,s){s&1&&(t.checked=i[0])},d(i){i&&$(t),e=!1,n()}}}function Y(a){let t,e,n,i,s;return e=new C({props:{$$slots:{default:[X]},$$scope:{ctx:a}}}),{c(){t=_("div"),m(e.$$.fragment),n=I(),i=B(a[0]),this.h()},l(c){t=d(c,"DIV",{class:!0});var o=E(t);g(e.$$.fragment,o),n=P(o),i=F(o,a[0]),o.forEach($),this.h()},h(){y(t,"class","svelte-1d4fmra")},m(c,o){f(c,t,o),w(e,t,null),S(t,n),S(t,i),s=!0},p(c,[o]){const h={};o&5&&(h.$$scope={dirty:o,ctx:c}),e.$set(h),(!s||o&1)&&j(i,c[0])},i(c){s||(v(e.$$.fragment,c),s=!0)},o(c){k(e.$$.fragment,c),s=!1},d(c){c&&$(t),b(e)}}}function Z(a,t,e){let n=!1;function i(){n=this.checked,e(0,n)}return[n,i]}class tt extends D{constructor(t){super(),V(this,t,Z,Y,A,{})}}const et=`<script>
	import Switch from '@mui3/switch';

	let checked = false;
<\/script>

<div>
	<Switch>
		<input type="checkbox" bind:checked />
	</Switch>

	{checked}
</div>

<style>
	div {
		display: flex;
		width: 120px;
		gap: 16px;
		align-items: center;
	}
</style>
`;function nt(a){let t,e,n,i;return e=O(a[2][0]),{c(){t=_("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox"),t.__value=1,t.value=t.__value,e.p(t)},m(s,c){f(s,t,c),t.checked=~(a[0]||[]).indexOf(t.__value),n||(i=U(t,"change",a[1]),n=!0)},p(s,c){c&1&&(t.checked=~(s[0]||[]).indexOf(t.__value))},d(s){s&&$(t),e.r(),n=!1,i()}}}function st(a){let t,e,n,i;return e=O(a[2][0]),{c(){t=_("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox"),t.__value=2,t.value=t.__value,e.p(t)},m(s,c){f(s,t,c),t.checked=~(a[0]||[]).indexOf(t.__value),n||(i=U(t,"change",a[3]),n=!0)},p(s,c){c&1&&(t.checked=~(s[0]||[]).indexOf(t.__value))},d(s){s&&$(t),e.r(),n=!1,i()}}}function it(a){let t,e,n,i;return e=O(a[2][0]),{c(){t=_("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0}),this.h()},h(){y(t,"type","checkbox"),t.__value=3,t.value=t.__value,e.p(t)},m(s,c){f(s,t,c),t.checked=~(a[0]||[]).indexOf(t.__value),n||(i=U(t,"change",a[4]),n=!0)},p(s,c){c&1&&(t.checked=~(s[0]||[]).indexOf(t.__value))},d(s){s&&$(t),e.r(),n=!1,i()}}}function ct(a){let t,e,n,i,s,c,o,h,l,u;return e=new C({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}),i=new C({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),c=new C({props:{$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){t=_("div"),m(e.$$.fragment),n=I(),m(i.$$.fragment),s=I(),m(c.$$.fragment),o=I(),h=_("span"),l=B(a[0]),this.h()},l(r){t=d(r,"DIV",{class:!0});var p=E(t);g(e.$$.fragment,p),n=P(p),g(i.$$.fragment,p),s=P(p),g(c.$$.fragment,p),o=P(p),h=d(p,"SPAN",{});var x=E(h);l=F(x,a[0]),x.forEach($),p.forEach($),this.h()},h(){y(t,"class","svelte-1af4v3u")},m(r,p){f(r,t,p),w(e,t,null),S(t,n),w(i,t,null),S(t,s),w(c,t,null),S(t,o),S(t,h),S(h,l),u=!0},p(r,[p]){const x={};p&33&&(x.$$scope={dirty:p,ctx:r}),e.$set(x);const N={};p&33&&(N.$$scope={dirty:p,ctx:r}),i.$set(N);const T={};p&33&&(T.$$scope={dirty:p,ctx:r}),c.$set(T),(!u||p&1)&&j(l,r[0])},i(r){u||(v(e.$$.fragment,r),v(i.$$.fragment,r),v(c.$$.fragment,r),u=!0)},o(r){k(e.$$.fragment,r),k(i.$$.fragment,r),k(c.$$.fragment,r),u=!1},d(r){r&&$(t),b(e),b(i),b(c)}}}function at(a,t,e){let n=[1];const i=[[]];function s(){n=z(i[0],this.__value,this.checked),e(0,n)}function c(){n=z(i[0],this.__value,this.checked),e(0,n)}function o(){n=z(i[0],this.__value,this.checked),e(0,n)}return[n,s,i,c,o]}class rt extends D{constructor(t){super(),V(this,t,at,ct,A,{})}}const lt=`<script>
	import Switch from '@mui3/switch';

	let group = [1];
<\/script>

<div>
	<Switch>
		<input type="checkbox" bind:group value={1} />
	</Switch>

	<Switch>
		<input type="checkbox" bind:group value={2}/>
	</Switch>

	<Switch>
		<input type="checkbox" bind:group value={3} />
	</Switch>

	<span>{group}</span>
</div>

<style>
	div {
		display: flex;
		min-width: 240px;
		align-items: center;
		gap: 16px;
	}
</style>
`;function ut(a){let t,e,n,i;return e=O(a[2][0]),{c(){t=_("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0}),this.h()},h(){y(t,"type","radio"),t.__value=1,t.value=t.__value,e.p(t)},m(s,c){f(s,t,c),t.checked=t.__value===a[0],n||(i=U(t,"change",a[1]),n=!0)},p(s,c){c&1&&(t.checked=t.__value===s[0])},d(s){s&&$(t),e.r(),n=!1,i()}}}function pt(a){let t,e,n,i;return e=O(a[2][0]),{c(){t=_("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0}),this.h()},h(){y(t,"type","radio"),t.__value=2,t.value=t.__value,e.p(t)},m(s,c){f(s,t,c),t.checked=t.__value===a[0],n||(i=U(t,"change",a[3]),n=!0)},p(s,c){c&1&&(t.checked=t.__value===s[0])},d(s){s&&$(t),e.r(),n=!1,i()}}}function ot(a){let t,e,n,i;return e=O(a[2][0]),{c(){t=_("input"),this.h()},l(s){t=d(s,"INPUT",{type:!0}),this.h()},h(){y(t,"type","radio"),t.__value=3,t.value=t.__value,e.p(t)},m(s,c){f(s,t,c),t.checked=t.__value===a[0],n||(i=U(t,"change",a[4]),n=!0)},p(s,c){c&1&&(t.checked=t.__value===s[0])},d(s){s&&$(t),e.r(),n=!1,i()}}}function ht(a){let t,e,n,i,s,c,o,h,l,u;return e=new C({props:{$$slots:{default:[ut]},$$scope:{ctx:a}}}),i=new C({props:{$$slots:{default:[pt]},$$scope:{ctx:a}}}),c=new C({props:{$$slots:{default:[ot]},$$scope:{ctx:a}}}),{c(){t=_("div"),m(e.$$.fragment),n=I(),m(i.$$.fragment),s=I(),m(c.$$.fragment),o=I(),h=_("span"),l=B(a[0]),this.h()},l(r){t=d(r,"DIV",{class:!0});var p=E(t);g(e.$$.fragment,p),n=P(p),g(i.$$.fragment,p),s=P(p),g(c.$$.fragment,p),o=P(p),h=d(p,"SPAN",{});var x=E(h);l=F(x,a[0]),x.forEach($),p.forEach($),this.h()},h(){y(t,"class","svelte-1af4v3u")},m(r,p){f(r,t,p),w(e,t,null),S(t,n),w(i,t,null),S(t,s),w(c,t,null),S(t,o),S(t,h),S(h,l),u=!0},p(r,[p]){const x={};p&33&&(x.$$scope={dirty:p,ctx:r}),e.$set(x);const N={};p&33&&(N.$$scope={dirty:p,ctx:r}),i.$set(N);const T={};p&33&&(T.$$scope={dirty:p,ctx:r}),c.$set(T),(!u||p&1)&&j(l,r[0])},i(r){u||(v(e.$$.fragment,r),v(i.$$.fragment,r),v(c.$$.fragment,r),u=!0)},o(r){k(e.$$.fragment,r),k(i.$$.fragment,r),k(c.$$.fragment,r),u=!1},d(r){r&&$(t),b(e),b(i),b(c)}}}function $t(a,t,e){let n=1;const i=[[]];function s(){n=this.__value,e(0,n)}function c(){n=this.__value,e(0,n)}function o(){n=this.__value,e(0,n)}return[n,s,i,c,o]}class ft extends D{constructor(t){super(),V(this,t,$t,ht,A,{})}}const _t=`<script>
	import Switch from '@mui3/switch';

	let group = 1;
<\/script>

<div>
	<Switch>
		<input type="radio" bind:group value={1} />
	</Switch>

	<Switch>
		<input type="radio" bind:group value={2}/>
	</Switch>

	<Switch>
		<input type="radio" bind:group value={3} />
	</Switch>

	<span>{group}</span>
</div>

<style>
	div {
		display: flex;
		min-width: 240px;
		align-items: center;
		gap: 16px;
	}
</style>
`,dt={title:"Simple",Component:Q,code:W},mt={title:"Single",Component:tt,code:et},gt={title:"Checkbox group",Component:rt,code:lt},wt={title:"Radio group",Component:ft,code:_t};function vt(a){let t,e,n,i,s,c,o,h;return t=new q({props:{data:dt}}),n=new q({props:{data:mt}}),s=new q({props:{data:gt}}),o=new q({props:{data:wt}}),{c(){m(t.$$.fragment),e=I(),m(n.$$.fragment),i=I(),m(s.$$.fragment),c=I(),m(o.$$.fragment)},l(l){g(t.$$.fragment,l),e=P(l),g(n.$$.fragment,l),i=P(l),g(s.$$.fragment,l),c=P(l),g(o.$$.fragment,l)},m(l,u){w(t,l,u),f(l,e,u),w(n,l,u),f(l,i,u),w(s,l,u),f(l,c,u),w(o,l,u),h=!0},p:R,i(l){h||(v(t.$$.fragment,l),v(n.$$.fragment,l),v(s.$$.fragment,l),v(o.$$.fragment,l),h=!0)},o(l){k(t.$$.fragment,l),k(n.$$.fragment,l),k(s.$$.fragment,l),k(o.$$.fragment,l),h=!1},d(l){b(t,l),l&&$(e),b(n,l),l&&$(i),b(s,l),l&&$(c),b(o,l)}}}function kt(a){let t,e;return t=new G({props:{title:"Switches",$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){m(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,i){w(t,n,i),e=!0},p(n,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:n}),t.$set(s)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){k(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}class It extends D{constructor(t){super(),V(this,t,null,kt,A,{})}}export{It as component};
