"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8060],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),k=o,d=m["".concat(l,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const i={},a="\u8d26\u53f7",c={unversionedId:"concepts/account",id:"concepts/account",title:"\u8d26\u53f7",description:"\u8d26\u6237\u3001\u5730\u5740\u3001\u8ba4\u8bc1\u5bc6\u94a5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/01-account.md",sourceDirName:"99-concepts",slug:"/concepts/account",permalink:"/starcoin-cookbook/zh/docs/concepts/account",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/01-account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Merkle Tree",permalink:"/starcoin-cookbook/zh/docs/concepts/merkletree"},next:{title:"\u4ea4\u6613",permalink:"/starcoin-cookbook/zh/docs/concepts/transaction"}},l={},u=[{value:"\u751f\u6210\u8ba4\u8bc1\u5bc6\u94a5\u548c\u52a0\u5bc6\u5bc6\u94a5",id:"\u751f\u6210\u8ba4\u8bc1\u5bc6\u94a5\u548c\u52a0\u5bc6\u5bc6\u94a5",level:2},{value:"\u5e8f\u5217\u53f7",id:"\u5e8f\u5217\u53f7",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d26\u53f7"},"\u8d26\u53f7"),(0,o.kt)("p",null,"\u8d26\u6237\u3001\u5730\u5740\u3001\u8ba4\u8bc1\u5bc6\u94a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u8d26\u53f7\uff08account\uff09"),"\uff1a\u8d26\u6237\u4ee3\u8868\u4e86 Starcoin \u4e0a\u7684\u4e00\u4e2a\u53ef\u4ee5\u53d1\u9001\u4ea4\u6613\u7684\u8d44\u6e90\u3002\u4e00\u4e2a\u8d26\u6237\u662f\u4e00\u7ec4 Move \u8d44\u6e90\u7684\u96c6\u5408\u3002\u5176\u7531 16 \u5b57\u8282\u7684\u5730\u5740\u552f\u4e00\u6807\u8bc6\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u8ba4\u8bc1\u5bc6\u94a5\uff08authentication_key\uff09"),"\uff1a\u6bcf\u4e2a\u8d26\u6237\u90fd\u4f1a\u5728\u94fe\u4e0a\u5b58\u50a8\u4e86\u4e00\u4e2a\u8ba4\u8bc1\u5bc6\u94a5, \u7528\u4e8e\u8ba4\u8bc1\u4ea4\u6613\u7684\u7b7e\u540d\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u5730\u5740\uff08address\uff09"),"\uff1a\u4e00\u4e2a\u8d26\u6237\u7684\u5730\u5740\u6765\u81ea\u4e8e\u5b83\u7684",(0,o.kt)("strong",{parentName:"li"},"\u521d\u59cb\u8ba4\u8bc1\u5bc6\u94a5"),"\u3002Starcoin \u652f\u6301\u5728\u4e0d\u6539\u53d8\u5176\u5730\u5740\u7684\u60c5\u51b5\u4e0b\u4fee\u6539\u8d26\u6237\u7684\u8ba4\u8bc1\u5bc6\u94a5\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u6536\u6b3e\u8bc6\u522b\u7801\uff08receipt_identifier\uff09"),"\uff1a\u4e00\u79cd\u7f16\u7801\u540e\u7684\u5730\u5740\uff0c\u5305\u542b\u7684\u6821\u9a8c\u673a\u5236\uff0c\u907f\u514d\u590d\u5236\u7684\u65f6\u5019\u88ab\u7be1\u6539\u3002")),(0,o.kt)("h2",{id:"\u751f\u6210\u8ba4\u8bc1\u5bc6\u94a5\u548c\u52a0\u5bc6\u5bc6\u94a5"},"\u751f\u6210\u8ba4\u8bc1\u5bc6\u94a5\u548c\u52a0\u5bc6\u5bc6\u94a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u5bc6\u94a5\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"(public_key, private_key)"),". Starcoin \u5bc6\u94a5\u4f7f\u7528 Ed25519 curve \u53ca PureEdDSA scheme \u751f\u6210\uff0c\u89c1 RFC 8032"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u6210\u8ba4\u8bc1\u5bc6\u94a5 ",(0,o.kt)("inlineCode",{parentName:"li"},"authentication_key = sha3-256(public_key | 0x00)"),"\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"|")," \u4e3a\u8fde\u63a5\u3002",(0,o.kt)("inlineCode",{parentName:"li"},"0x00")," \u662f\u4e00\u4e2a 1 \u5b57\u8282\u7684\u6807\u8bc6\u7b26\uff0c\u8868\u793a\u5355\u7b7e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u6210\u5e10\u6237\u5730\u5740 ",(0,o.kt)("inlineCode",{parentName:"li"},"account_address = authentication_key[-16:]")," \u5373 ",(0,o.kt)("inlineCode",{parentName:"li"},"authentication_key")," \u7684\u540e16\u5b57\u8282\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6536\u6b3e\u8bc6\u522b\u7801 ",(0,o.kt)("inlineCode",{parentName:"li"},'receipt_identifier = "stc" + 1 + bech32(account_address)'),"\u3002\u8be6\u60c5\u53c2\u770b sip-21\u3002")),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u5bf9\u6bd4, Ethereum/Bitcoin, Starcoin \u5730\u5740\u4e0d\u4ec5\u66f4\u77ed\uff0c\u4e3a 16 \u5b57\u8282, \u540c\u65f6\uff0c\u5728\u4e0d\u6539\u53d8\u5730\u5740\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd8\u652f\u6301\u7528\u6237\u4fee\u6539\u5bc6\u94a5\u5bf9\u3002\u66f4\u52a0\u7075\u6d3b\u548c\u5b89\u5168\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developer.starcoin.org/zh/sips/sip-21/"},"sip-21 receipt_identifier")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-sdk-python/blob/master/examples/rotate_auth_key.py"},"rotate key \u4f8b\u5b50"))),(0,o.kt)("h2",{id:"\u5e8f\u5217\u53f7"},"\u5e8f\u5217\u53f7"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8d26\u6237\u7684\u5e8f\u5217\u53f7\u8868\u793a\u4ece\u8be5\u8d26\u6237\u63d0\u4ea4\u5230\u533a\u5757\u94fe\u4e0a\u7684\u4ea4\u6613\u7684\u6570\u91cf\u3002\u6bcf\u6b21\u4ece\u8be5\u8d26\u6237\u53d1\u9001\u7684\u4ea4\u6613\u88ab\u6267\u884c\u6216\u4e2d\u6b62\u65f6\uff0c\u5b83\u90fd\u4f1a\u88ab\u9012\u589e\uff0c\u5e76\u5b58\u50a8\u5728\u533a\u5757\u94fe\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5f53\u4ea4\u6613\u4e0e\u53d1\u9001\u8005\u8d26\u6237\u7684\u5f53\u524d\u5e8f\u5217\u53f7\u76f8\u5339\u914d\u65f6\u624d\u4f1a\u88ab\u6267\u884c\u3002\u8fd9\u6709\u52a9\u4e8e\u5bf9\u6765\u81ea\u540c\u4e00\u53d1\u4ef6\u4eba\u7684\u591a\u4e2a\u4ea4\u6613\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u9632\u6b62\u91cd\u653e\u653b\u51fb\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u8d26\u6237 A \u7684\u5f53\u524d\u5e8f\u5217\u53f7\u662f X\uff0c\u90a3\u4e48\u8d26\u6237 A \u4e0a\u7684\u4ea4\u6613 T \u53ea\u6709\u5728 T \u7684\u5e8f\u5217\u53f7\u662f X \u65f6\u624d\u4f1a\u88ab\u6267\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u5e8f\u5217\u53f7\u5927\u4e8e\u8d26\u6237\u5e8f\u5217\u53f7\u7684\u4ea4\u6613\u5c06\u88ab\u4fdd\u5b58\u5728 mempool \u4e2d\uff0c\u76f4\u5230\u5b83\u4eec\u7684\u8d26\u6237\u5e8f\u5217\u53f7\u589e\u52a0\u5230\u4e0e\u4ea4\u6613\u5e8f\u5217\u53f7\u5339\u914d\uff08\u6216\u76f4\u5230\u5b83\u4eec\u8fc7\u671f\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5f53\u4ea4\u6613\u88ab\u6267\u884c\u65f6\uff0c\u8be5\u8d26\u6237\u7684\u5e8f\u5217\u53f7\u5c06\u53d8\u6210 X+1\u3002\u8d26\u6237\u7684\u5e8f\u5217\u53f7\u662f\u4e25\u683c\u589e\u52a0\u7684\u3002")))}s.isMDXComponent=!0}}]);