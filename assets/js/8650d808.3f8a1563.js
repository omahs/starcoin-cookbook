"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[3172],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(o),m=n,g=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return o?r.createElement(g,i(i({ref:t},d),{},{components:o})):r.createElement(g,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},6612:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=o(3117),n=(o(7294),o(3905));const a={},i="How to upgrade Move Module",p={unversionedId:"move/how-to-upgrade",id:"move/how-to-upgrade",title:"How to upgrade Move Module",description:"TODO",source:"@site/docs/03-move/10-how-to-upgrade.md",sourceDirName:"03-move",slug:"/move/how-to-upgrade",permalink:"/starcoin-cookbook/docs/move/how-to-upgrade",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/10-how-to-upgrade.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Understanding module dependency",permalink:"/starcoin-cookbook/docs/move/module-dependency"},next:{title:"For solidity developer",permalink:"/starcoin-cookbook/docs/move/for-solidity-developer"}},l={},c=[{value:"FAQ",id:"faq",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-upgrade-move-module"},"How to upgrade Move Module"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"TODO"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Introduce the Compatibility requirement"),(0,n.kt)("li",{parentName:"ol"},"Introduce upgrade strategy"),(0,n.kt)("li",{parentName:"ol"},"Suggestion to keep Compatibility and How to force upgrade"),(0,n.kt)("li",{parentName:"ol"},"Hot to delegate UpgradeCapability to DAO"),(0,n.kt)("li",{parentName:"ol"},"Give an example for upgrade module")),(0,n.kt)("p",{parentName:"admonition"},"Migrate and Rewrite"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/en/developer/blog/starcoin_stdlib_upgrade/"},"https://starcoin.org/en/developer/blog/starcoin_stdlib_upgrade/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/blog/starcoin_stdlib_upgrade/"},"https://starcoin.org/zh/developer/blog/starcoin_stdlib_upgrade/")," ")),(0,n.kt)("p",{parentName:"admonition"},"Part of "),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/blog/starcoin_code_is_law/"},"https://starcoin.org/zh/developer/blog/starcoin_code_is_law/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://starcoin.org/zh/developer/blog/starcoin_code_is_law/"},"https://starcoin.org/zh/developer/blog/starcoin_code_is_law/")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954/905361928652722177"},"Can third-party contract incompatible upgrade be implemented without Dao?")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Incompatible upgrades can be achieved through a two-stage commit upgrade, but the current command line does not yet support direct two-stage upgrades."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954/908657602811006996"},"What if ",(0,n.kt)("inlineCode",{parentName:"a"},"BACKWARD_INCOMPATIBLE_MODULE_UPDATE")," error occurs when redeploying tokenswap?")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Error due to incompatibility between front and back\uff0cadd the ",(0,n.kt)("inlineCode",{parentName:"p"},"--ignore-breaking-changes")," parameter and rerun."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/822159062475997194/892760287797714954/909277467032830012"},"Is there a way to force deploy module?")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Without considering compatibility, the deploy module can be submitted in two phases.")))))}u.isMDXComponent=!0}}]);