import{S as ie,i as fe,s as Y,e as U,b as k,g as y,d as w,h as g,X as oe,o as re,ac as ue,t as _e,G as Z,k as v,a as A,l as M,m as q,c as P,n as H,O as d,$ as me,E as S,P as ce,H as x,I as $,J as ee,v as be,f as pe,w as X,q as C,r as F,p as j,u as V,K as de,ab as z}from"./index.c17a76e4.js";import{s as O}from"./index.9191482d.js";const ge=t=>({}),Q=t=>({});function R(t){let l,e,f,o,a,i;return{c(){l=v("span"),e=v("span"),f=C(t[0]),o=A(),a=v("span"),i=C(t[0]),this.h()},l(n){l=M(n,"SPAN",{class:!0});var u=q(l);e=M(u,"SPAN",{class:!0});var h=q(e);f=F(h,t[0]),h.forEach(g),u.forEach(g),o=P(n),a=M(n,"SPAN",{class:!0});var b=q(a);i=F(b,t[0]),b.forEach(g),this.h()},h(){H(e,"class","header-content svelte-f9bgib"),H(l,"class","header svelte-f9bgib"),H(a,"class","label svelte-f9bgib"),j(a,"--md-field-label-left",typeof t[7]=="number"?`${t[7]}px`:null)},m(n,u){k(n,l,u),S(l,e),S(e,f),k(n,o,u),k(n,a,u),S(a,i)},p(n,u){u&1&&V(f,n[0]),u&1&&V(i,n[0]),u&128&&j(a,"--md-field-label-left",typeof n[7]=="number"?`${n[7]}px`:null)},d(n){n&&g(l),n&&g(o),n&&g(a)}}}function W(t){let l,e,f;const o=t[16].supportingText,a=Z(o,t,t[15],Q),i=a||he(t);return{c(){l=v("div"),i&&i.c(),this.h()},l(n){l=M(n,"DIV",{class:!0});var u=q(l);i&&i.l(u),u.forEach(g),this.h()},h(){H(l,"class","supporting-text svelte-f9bgib"),d(l,"error",t[5]),d(l,"absolute",t[2])},m(n,u){k(n,l,u),i&&i.m(l,null),f=!0},p(n,u){a?a.p&&(!f||u&32768)&&x(a,o,n,n[15],f?ee(o,n[15],u,ge):$(n[15]),Q):i&&i.p&&(!f||u&2)&&i.p(n,f?u:-1),(!f||u&32)&&d(l,"error",n[5]),(!f||u&4)&&d(l,"absolute",n[2])},i(n){f||(y(i,n),n&&de(()=>{f&&(e||(e=z(l,O,{duration:250},!0)),e.run(1))}),f=!0)},o(n){w(i,n),n&&(e||(e=z(l,O,{duration:250},!1)),e.run(0)),f=!1},d(n){n&&g(l),i&&i.d(n),n&&e&&e.end()}}}function he(t){let l;return{c(){l=C(t[1])},l(e){l=F(e,t[1])},m(e,f){k(e,l,f)},p(e,f){f&2&&V(l,e[1])},d(e){e&&g(l)}}}function I(t){let l,e,f,o,a,i,n,u;const h=t[16].default,b=Z(h,t,t[15],null);let p=t[0]&&R(t),m=(t[13].supportingText||t[1])&&W(t);return{c(){l=v(t[4]),e=v("label"),f=v("div"),b&&b.c(),o=A(),p&&p.c(),a=A(),m&&m.c(),this.h()},l(r){l=M(r,(t[4]||"null").toUpperCase(),{class:!0});var _=q(l);e=M(_,"LABEL",{class:!0});var c=q(e);f=M(c,"DIV",{class:!0});var T=q(f);b&&b.l(T),T.forEach(g),o=P(c),p&&p.l(c),c.forEach(g),a=P(_),m&&m.l(_),_.forEach(g),this.h()},h(){H(f,"class","input svelte-f9bgib"),H(e,"class","field svelte-f9bgib"),d(e,"mounted",t[11]),d(e,"error",t[5]),d(e,"small",t[6]),d(e,"empty",!t[8]),d(e,"complex",!!t[0]||!!t[0]&&t[3]),d(e,"fixedLabel",t[3]),me(t[4])(l,{class:"field-wrap svelte-f9bgib"})},m(r,_){k(r,l,_),S(l,e),S(e,f),b&&b.m(f,null),t[17](f),S(e,o),p&&p.m(e,null),t[18](e),S(l,a),m&&m.m(l,null),i=!0,n||(u=ce(l,"mousedown",t[12]),n=!0)},p(r,_){b&&b.p&&(!i||_&32768)&&x(b,h,r,r[15],i?ee(h,r[15],_,null):$(r[15]),null),r[0]?p?p.p(r,_):(p=R(r),p.c(),p.m(e,null)):p&&(p.d(1),p=null),(!i||_&2048)&&d(e,"mounted",r[11]),(!i||_&32)&&d(e,"error",r[5]),(!i||_&64)&&d(e,"small",r[6]),(!i||_&256)&&d(e,"empty",!r[8]),(!i||_&9)&&d(e,"complex",!!r[0]||!!r[0]&&r[3]),(!i||_&8)&&d(e,"fixedLabel",r[3]),r[13].supportingText||r[1]?m?(m.p(r,_),_&8194&&y(m,1)):(m=W(r),m.c(),y(m,1),m.m(l,null)):m&&(be(),w(m,1,1,()=>{m=null}),pe())},i(r){i||(y(b,r),y(m),i=!0)},o(r){w(b,r),w(m),i=!1},d(r){r&&g(l),b&&b.d(r),t[17](null),p&&p.d(),t[18](null),m&&m.d(),n=!1,u()}}}function Te(t){let l=t[4],e,f,o=t[4]&&I(t);return{c(){o&&o.c(),e=U()},l(a){o&&o.l(a),e=U()},m(a,i){o&&o.m(a,i),k(a,e,i),f=!0},p(a,[i]){a[4]?l?Y(l,a[4])?(o.d(1),o=I(a),l=a[4],o.c(),o.m(e.parentNode,e)):o.p(a,i):(o=I(a),l=a[4],o.c(),o.m(e.parentNode,e)):l&&(o.d(1),o=null,l=a[4])},i(a){f||(y(o),f=!0)},o(a){w(o),f=!1},d(a){a&&g(e),o&&o.d(a)}}}function Le(t,l,e){let{$$slots:f={},$$scope:o}=l;const a=oe(f);let{label:i=""}=l,{supportingText:n=""}=l,{absoluteSupportingText:u=!1}=l,{fixedLabel:h=!1}=l,{tag:b="label"}=l,{transition:p=!0}=l,{error:m=!1}=l,r="",_,c,T,L,{small:B=!1}=l,G=!1;re(()=>{const s=T.querySelector("input")??c.querySelector("select")??c.querySelector("textarea");e(8,r=(s==null?void 0:s.value)??r),e(7,_=(s==null?void 0:s.offsetLeft)??_),console.log("onMount",_),c.addEventListener("input",J),le(c),se()}),ue(()=>{L==null||L.disconnect(),c==null||c.removeEventListener("input",J)});function J(s){(s.target instanceof HTMLInputElement||s.target instanceof HTMLSelectElement)&&(e(8,r=s.target.value),e(7,_=s.target.offsetLeft))}function le(s){!s||s.nodeType!==1||(L==null||L.disconnect(),L=new MutationObserver(E=>E.forEach(K=>{for(let D=0;D<K.addedNodes.length;D++){const N=K.addedNodes[D];if(N instanceof HTMLInputElement||N instanceof HTMLSelectElement||N instanceof HTMLTextAreaElement){e(7,_=N.offsetLeft),console.log("MutationObserver",_),e(8,r=N.value);break}}})),L.observe(s,{childList:!0,subtree:!0}))}function te(s){const E=c.querySelector("input")??c.querySelector("select")??c.querySelector("textarea");s.target instanceof HTMLElement&&s.target!==E&&E===document.activeElement&&(s.target===c||s.target===T)?s.preventDefault():(s.target===c||s.target===T)&&(E==null||E.focus())}async function se(){await _e(),e(11,G=!0)}function ne(s){X[s?"unshift":"push"](()=>{T=s,e(10,T)})}function ae(s){X[s?"unshift":"push"](()=>{c=s,e(9,c)})}return t.$$set=s=>{"label"in s&&e(0,i=s.label),"supportingText"in s&&e(1,n=s.supportingText),"absoluteSupportingText"in s&&e(2,u=s.absoluteSupportingText),"fixedLabel"in s&&e(3,h=s.fixedLabel),"tag"in s&&e(4,b=s.tag),"transition"in s&&e(14,p=s.transition),"error"in s&&e(5,m=s.error),"small"in s&&e(6,B=s.small),"$$scope"in s&&e(15,o=s.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&console.log("left",_)},[i,n,u,h,b,m,B,_,r,c,T,G,te,a,p,o,f,ne,ae]}class ke extends ie{constructor(l){super(),fe(this,l,Le,Te,Y,{label:0,supportingText:1,absoluteSupportingText:2,fixedLabel:3,tag:4,transition:14,error:5,small:6})}}export{ke as F};
