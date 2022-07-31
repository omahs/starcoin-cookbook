"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[4783],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return s}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(o),s=n,f=m["".concat(l,".").concat(s)]||m[s]||d[s]||a;return o?r.createElement(f,i(i({ref:t},u),{},{components:o})):r.createElement(f,i({ref:t},u))}));function s(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8646:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=o(3117),n=(o(7294),o(3905));const a={},i="How to upgrade Move Module",c={unversionedId:"move/how-to-upgrade",id:"move/how-to-upgrade",title:"How to upgrade Move Module",description:"TODO",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/10-how-to-upgrade.md",sourceDirName:"03-move",slug:"/move/how-to-upgrade",permalink:"/starcoin-cookbook/zh/docs/move/how-to-upgrade",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/10-how-to-upgrade.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Understanding module dependency",permalink:"/starcoin-cookbook/zh/docs/move/module-dependency"},next:{title:"For solidity developer",permalink:"/starcoin-cookbook/zh/docs/move/for-solidity-developer"}},l={},p=[{value:"FAQ",id:"faq",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-upgrade-move-module"},"How to upgrade Move Module"),(0,n.kt)("p",null,"TODO"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Introduce the Compatibility requirement"),(0,n.kt)("li",{parentName:"ol"},"Introduce upgrade strategy"),(0,n.kt)("li",{parentName:"ol"},"Suggestion to keep Compatibility and How to force upgrade"),(0,n.kt)("li",{parentName:"ol"},"Hot to delegate UpgradeCapability to DAO"),(0,n.kt)("li",{parentName:"ol"},"Give an example for upgrade module")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954/905361928652722177"},"\u5982\u679c\u4e0d\u901a\u8fc7 DAO \u662f\u5426\u53ef\u4ee5\u5b9e\u73b0\u7b2c\u4e09\u65b9\u5408\u7ea6\u4e0d\u517c\u5bb9\u5347\u7ea7\uff1f")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u4e24\u9636\u6bb5\u63d0\u4ea4\u5347\u7ea7\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e0d\u517c\u5bb9\u5347\u7ea7\uff0c\u4f46\u5f53\u524d\u7684\u547d\u4ee4\u884c\u8fd8\u4e0d\u652f\u6301\u76f4\u63a5\u4e24\u9636\u6bb5\u5347\u7ea7\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954/908657602811006996"},"\u91cd\u65b0\u90e8\u7f72 tokenswap \u51fa\u73b0 ",(0,n.kt)("inlineCode",{parentName:"a"},"BACKWARD_INCOMPATIBLE_MODULE_UPDATE")," \u62a5\u9519\u600e\u4e48\u529e\uff1f")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u540e\u4e24\u6b21\u4e0d\u517c\u5bb9\u5bfc\u81f4\u7684\u62a5\u9519\uff0c\u6839\u636e\u63d0\u793a\u9700\u52a0\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"--ignore-breaking-changes")," \u53c2\u6570\u91cd\u65b0\u8fd0\u884c\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954/909277467032830012"},"\u6709\u6ca1\u6709\u5f3a\u5236 deploy module \u7684\u65b9\u6cd5\uff1f")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u4e0d\u8003\u8651\u517c\u5bb9\u6027\u7684\u524d\u63d0\u4e0b\uff0c\u901a\u8fc7\u4e24\u9636\u6bb5\u63d0\u4ea4 deploy module \u5373\u53ef\u3002")))))}d.isMDXComponent=!0}}]);