"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[4002],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,f=d["".concat(i,".").concat(k)]||d[k]||s[k]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={},l="\u8d26\u53f7\u7ba1\u7406",c={unversionedId:"getting-started/accounts/account-manage",id:"getting-started/accounts/account-manage",title:"\u8d26\u53f7\u7ba1\u7406",description:"Starcoin \u8282\u70b9\u5185\u7f6e\u4e86\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u94b1\u5305\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8d26\u53f7\u76f8\u5173\u7684\u63a5\u53e3\u4ee5\u53ca\u547d\u4ee4\u6765\u7ba1\u7406\u81ea\u5df1\u7684\u8d26\u6237\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/01-account-manage.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/account-manage",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/account-manage",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/01-account-manage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7406\u89e3\u548c\u7ba1\u7406\u8d26\u6237",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/"},next:{title:"\u7b2c\u4e00\u7b14\u94fe\u4e0a\u4ea4\u6613",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/first-transaction"}},i={},u=[],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8d26\u53f7\u7ba1\u7406"},"\u8d26\u53f7\u7ba1\u7406"),(0,r.kt)("p",null,"Starcoin \u8282\u70b9\u5185\u7f6e\u4e86\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u94b1\u5305\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8d26\u53f7\u76f8\u5173\u7684\u63a5\u53e3\u4ee5\u53ca\u547d\u4ee4\u6765\u7ba1\u7406\u81ea\u5df1\u7684\u8d26\u6237\u3002"),(0,r.kt)("p",null,"\u8282\u70b9\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u8d26\u6237\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a\u7a7a\u3002\n\u9ed8\u8ba4\u8d26\u6237\u53ef\u4ee5\u901a\u8fc7\u8d26\u6237\u76f8\u5173\u7684\u547d\u4ee4\u8fdb\u884c\u53d8\u66f4\u3002\n\u4ee5\u4e0b\u547d\u4ee4\u9700\u8981\u8fde\u63a5\u5230\u63a7\u5236\u53f0\u8fdb\u884c\u64cd\u4f5c\uff0c\u8fde\u63a5\u65b9\u5f0f\u8bf7\u53c2\u770b",(0,r.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/getting-started/setup/starcoin-console"},"\u5982\u4f55\u4e0e Starcoin \u63a7\u5236\u53f0\u4ea4\u4e92"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8d26\u6237")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account create -p <MY-PASSWORD>\n{\n  "ok": {\n    "address": "0xf096a2a61d3042774187a462a5394537",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x96734ea5015c3e1901b1af3e9c16f42df074c92749988d0563be3f5df65c2da6",\n    "receipt_identifier": "stc1p7zt29fsaxpp8wsv853322w29xu02slxc"\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8d26\u6237")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xf096a2a61d3042774187a462a5394537\n{\n  "ok": {\n    "account": {\n      "address": "0xf096a2a61d3042774187a462a5394537",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x96734ea5015c3e1901b1af3e9c16f42df074c92749988d0563be3f5df65c2da6",\n      "receipt_identifier": "stc1p7zt29fsaxpp8wsv853322w29xu02slxc"\n    },\n    "auth_key": "0x4c9c5a86f958a1a02286e46807df916ff096a2a61d3042774187a462a5394537",\n    "balances": {},\n    "sequence_number": null\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," \u662f\u8d26\u6237\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_default")," \u8868\u793a\u662f\u5426\u4e3a\u9ed8\u8ba4\u8d26\u53f7\u3002\u5f88\u591a\u547d\u4ee4\u5982\u679c\u9700\u8981\u8d26\u53f7\u53c2\u6570\uff0c\u4f46\u7528\u6237\u6ca1\u6709\u4f20\u9012\uff0c\u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u8d26\u53f7\u3002\u5982\u679c\u8282\u70b9\u5f00\u542f\u4e86\u6316\u77ff\u5ba2\u6237\u7aef\uff0c\u4e5f\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u8d26\u53f7\u8fdb\u884c\u6316\u77ff\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_readonly")," \u8868\u793a\u662f\u5426\u4e3a\u53ea\u8bfb\u8d26\u53f7\uff0c\u53ea\u8bfb\u8d26\u53f7\u7684\u79c1\u94a5\u5e76\u4e0d\u6258\u7ba1\u5728\u8282\u70b9\u94b1\u5305\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key")," \u662f\u8d26\u6237\u5730\u5740\u5bf9\u5e94\u7684\u516c\u94a5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receipt_identifier")," \u662f\u6536\u6b3e\u4eba\u8bc6\u522b\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth_key")," \u662f\u8ba4\u8bc1\u79d8\u94a5\uff0c\u6700\u540e\u662f\u9700\u8981\u5199\u5230\u94fe\u4e0a\u53bb\u7684\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u521b\u5efa\u8d26\u6237\u53ea\u662f\u5728 Starcoin \u8282\u70b9\u91cc\u521b\u5efa\u4e00\u5bf9\u5bc6\u94a5\uff0c\u5e76\u4e0d\u4f1a\u66f4\u65b0\u94fe\u7684\u72b6\u6001\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence_number")," \u6b64\u65f6\u8fd8\u662f\u7a7a\u7684\u3002\u4ee5\u4e0a\u4fe1\u606f\u90fd\u5c5e\u4e8e\u516c\u5f00\u4fe1\u606f\uff0c\u53ea\u6709\u79c1\u94a5\u662f\u9700\u8981\u7528\u6237\u4fdd\u5bc6\u7684\u3002")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8d26\u6237\u5217\u8868")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account list\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u5f53\u524d\u8282\u70b9\u4e0a\u7684\u6240\u6709\u8d26\u6237\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u672c\u5730\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u7f51\u7edc\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\uff0c\u90a3\u4e48\u5728\u5217\u51fa\u7684\u8d26\u6237\u5217\u8868\u4e2d\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u8d26\u6237\u7684\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    {\n      "address": "0x0000000000000000000000000a550c18",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xb9c6ee1630ef3e711144a648db06bbb2284f7274cfbee53ffcee503cc1a49200aef3f4a4b8eca1dfc343361bf8e436bd42de9259c04b8314eb8e2054dd6e82ab01",\n      "receipt_identifier": "stc1pqqqqqqqqqqqqqqqqqqqq54gvrqzaqnvx"\n    },\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000a550c18")," \u8fd9\u4e2a\u8d26\u6237\u5730\u5740\u662f Starcoin \u57fa\u91d1\u4f1a\u7684\u5730\u5740\uff0c\u540c\u65f6\u4e5f\u662f\u5185\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u7f51\u7edc\u7684\u6c34\u9f99\u5934\u5730\u5740\u3002"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6216\u8005\u53d8\u66f4\u9ed8\u8ba4\u8d26\u53f7")),(0,r.kt)("p",null,"\u67e5\u770b\u9ed8\u8ba4\u8d26\u53f7\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account default\n")),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"0xf096a2a61d3042774187a462a5394537")," \u8bbe\u7f6e\u4f4d\u9ed8\u8ba4\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account default 0xf096a2a61d3042774187a462a5394537\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u5bfc\u5165\u8d26\u53f7")),(0,r.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u78c1\u76d8\u635f\u574f\u7b49\u539f\u56e0\u5bfc\u81f4\u81ea\u5df1\u7684\u8d44\u4ea7\u635f\u5931\uff0c\u5907\u4efd\u81ea\u5df1\u7684\u79c1\u94a5\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account export 0xf096a2a61d3042774187a462a5394537 -p <MY-PASSWORD>\n")),(0,r.kt)("p",null,"\u5373\u53ef\u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"0xf096a2a61d3042774187a462a5394537")," \u7684\u79c1\u94a5\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account import -i <PRIVATE-KEY> -p <MY-PASSWORD> 0xf096a2a61d3042774187a462a5394537\n")),(0,r.kt)("p",null,"\u5373\u53ef\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"0xf096a2a61d3042774187a462a5394537")," \u8d26\u53f7\u3002\u8fd9\u4e2a\u547d\u4ee4\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5c06\u8d26\u53f7\u5bfc\u5165\u5230\u4e0d\u540c\u7684\u8282\u70b9\u4e0a\uff0c\u7528\u6765\u505a\u8282\u70b9\u8fc1\u79fb\u3002"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u53ea\u8bfb\u8d26\u53f7")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u628a\u79c1\u94a5\u6258\u7ba1\u5728\u8282\u70b9\u94b1\u5305\u4e2d\uff0c\u53ea\u662f\u60f3\u67e5\u770b\u8be5\u8d26\u53f7\uff0c\u6216\u8005\u5c06\u8be5\u8d26\u53f7\u4f5c\u4e3a\u6316\u77ff\u8d26\u53f7\uff0c\u53ef\u4ee5\u901a\u8fc7\u516c\u94a5\u5bfc\u5165\u53ea\u8bfb\u8d26\u53f7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account import-readonly -i <PUBLIC-KEY>\n")),(0,r.kt)("p",null,"\u7136\u540e\u5c06\u8be5\u8d26\u53f7\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8d26\u53f7\u3002"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u8d26\u53f7")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account remove 0xf096a2a61d3042774187a462a5394537 -p <MY-PASSWORD>\n")),(0,r.kt)("p",null,"\u5982\u679c\u662f\u53ea\u8bfb\u8d26\u53f7\uff0c\u65e0\u9700\u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," \u9009\u9879\u3002\u5220\u9664\u8d26\u53f7\u53ea\u662f\u5c06\u8d26\u53f7\u4ece\u8282\u70b9\u94b1\u5305\u4e2d\u5220\u9664\uff0c\u5e76\u4e0d\u5f71\u54cd\u8be5\u8d26\u53f7\u5728\u94fe\u4e0a\u7684\u72b6\u6001\u3002"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"\u9501\u5b9a\u4e0e\u89e3\u9501\u8d26\u53f7")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9501\u5b9a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin% account lock 0xf096a2a61d3042774187a462a5394537\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e3\u9501")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-d")," \u9009\u9879\u53ef\u4ee5\u6307\u5b9a\u8d26\u6237\u4fdd\u6301\u89e3\u9501\u7684\u65f6\u95f4\uff08\u5355\u4f4d\u4e3a\u79d2\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"300")," \u79d2\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin% account unlock 0xf096a2a61d3042774187a462a5394537 -p <MY-PASSWORD> -d 300\n")))}s.isMDXComponent=!0}}]);