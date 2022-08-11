"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[9775],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=s(n),f=o,m=k["".concat(l,".").concat(f)]||k[f]||p[f]||a;return n?r.createElement(m,c(c({ref:e},u),{},{components:n})):r.createElement(m,c({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=k;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},149:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const a={},c="Block",i={unversionedId:"concepts/block",id:"concepts/block",title:"Block",description:"A block contains a batch of the ordered transactions , as well as other key data:",source:"@site/docs/99-concepts/03-block.md",sourceDirName:"99-concepts",slug:"/concepts/block",permalink:"/starcoin-cookbook/docs/concepts/block",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/99-concepts/03-block.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction",permalink:"/starcoin-cookbook/docs/concepts/transaction"},next:{title:"State",permalink:"/starcoin-cookbook/docs/concepts/state"}},l={},s=[],u={toc:s};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block"},"Block"),(0,o.kt)("p",null,"A block contains a batch of the ordered ",(0,o.kt)("a",{parentName:"p",href:"/starcoin-cookbook/docs/concepts/transaction"},"transactions")," , as well as other key data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parent hash")," \u2014 The parent block hash, which chains the blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block number")," \u2014 Block number, parent block number plus one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"State root")," \u2014 Hash of the final state after execution of the block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transaction accumulator root")," \u2014 The transaction accumulator root hash after executing this block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block accumulator root")," \u2014 The hash after accumulating the IDs of all the previous blocks in order.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TODO"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Block Header"),(0,o.kt)("li",{parentName:"ol"},"Block Struct"),(0,o.kt)("li",{parentName:"ol"},"BlockInfo"),(0,o.kt)("li",{parentName:"ol"},"Block Accumulator"))))}p.isMDXComponent=!0}}]);