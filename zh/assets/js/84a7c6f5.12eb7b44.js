"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[2805],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(b,c(c({ref:n},l),{},{components:t})):r.createElement(b,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7593:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var r=t(3117),o=(t(7294),t(3905));const a={},c="\u4e0e\u5408\u7ea6\u4ea4\u4e92",i={unversionedId:"move/interacting-with-the-contract",id:"move/interacting-with-the-contract",title:"\u4e0e\u5408\u7ea6\u4ea4\u4e92",description:"\u8fd9\u7bc7\u6587\u7ae0\u6307\u5bfc\u4f60\u5982\u4f55\u4e0e\u5408\u7ea6\u4ea4\u4e92\u3002\u901a\u8fc7\u8fd9\u7bc7\u6587\u7ae0\uff0c\u4f60\u5c06\u5b66\u4e60\u5230\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/08-interacting-with-the-contract.md",sourceDirName:"03-move",slug:"/move/interacting-with-the-contract",permalink:"/starcoin-cookbook/zh/docs/move/interacting-with-the-contract",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/08-interacting-with-the-contract.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u4f60\u7684\u7b2c\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6",permalink:"/starcoin-cookbook/zh/docs/move/deploy-first-move-contract"},next:{title:"Understanding module dependency",permalink:"/starcoin-cookbook/zh/docs/move/module-dependency"}},u={},s=[],l={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e0e\u5408\u7ea6\u4ea4\u4e92"},"\u4e0e\u5408\u7ea6\u4ea4\u4e92"),(0,o.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u6307\u5bfc\u4f60\u5982\u4f55\u4e0e\u5408\u7ea6\u4ea4\u4e92\u3002\u901a\u8fc7\u8fd9\u7bc7\u6587\u7ae0\uff0c\u4f60\u5c06\u5b66\u4e60\u5230\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u5408\u7ea6"),(0,o.kt)("li",{parentName:"ul"},"\u5199\u5165\u5408\u7ea6"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b\u8d44\u6e90\uff08Resource\uff09")),(0,o.kt)("p",null,"\u9996\u5148\u6309\u7167",(0,o.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/move/deploy-first-move-contract"},"\u90e8\u7f72\u4f60\u7684\u7b2c\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6"),"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCounter")," \u6a21\u5757\u90e8\u7f72\u5230\u533a\u5757\u94fe\u4e0a\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528 init_counter \u811a\u672c\u51fd\u6570\u6765\u521d\u59cb\u5316\u8d44\u6e90\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'starcoin% account execute-function --function 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::init_counter -s 0xb19b07b76f00a8df445368a91c0547cc -b\ntxn 0x0f67bab5ee5ceeb9c2fe4ffeed9ab6b79f2869e922862ec40dba8aa7787709b1 submitted.\n{\n  "ok": {\n    "dry_run_output": {\n      "events": [],\n      "explained_status": "Executed",\n      "gas_used": "11667",\n      "status": "Executed",\n      "write_set": [\n        {\n          "access_path": "0x00000000000000000000000000000001/1/0x00000000000000000000000000000001::TransactionFee::TransactionFee<0x00000000000000000000000000000001::STC::STC>",\n          "action": "Value",\n          "value": {\n            "Resource": {\n              "json": {\n                "fee": {\n                  "value": 23334\n                }\n              },\n              "raw": "0x265b0000000000000000000000000000"\n            }\n          }\n        },\n  .....\n  .....\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8d44\u6e90\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'starcoin% state get resource 0xb19b07b76f00a8df445368a91c0547cc 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::Counter\n{\n  "ok": {\n    "json": {\n      "value": 0\n    },\n    "raw": "0x0000000000000000"\n  }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528 incr_counter \u9012\u589e\u8ba1\u6570\u5668\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'starcoin% account execute-function --function 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::incr_counter -s 0xb19b07b76f00a8df445368a91c0547cc -b\ntxn 0x7e8d6189c144c7640cbd79617247c0e242f52df6d60c74c29250492077b1b690 submitted.\n{\n  "ok": {\n    "dry_run_output": {\n      "events": [],\n      "explained_status": "Executed",\n      "gas_used": "17231",\n      "status": "Executed",\n      "write_set": [\n        {\n          "access_path": "0x00000000000000000000000000000001/1/0x00000000000000000000000000000001::TransactionFee::TransactionFee<0x00000000000000000000000000000001::STC::STC>",\n          "action": "Value",\n          "value": {\n            "Resource": {\n              "json": {\n                "fee": {\n                  "value": 34462\n                }\n              },\n              "raw": "0x9e860000000000000000000000000000"\n            }\n          }\n        },\n    ......\n    ......\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u518d\u6b21\u67e5\u770b\u8d44\u6e90\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'starcoin% state get resource 0xb19b07b76f00a8df445368a91c0547cc 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::Counter\n{\n  "ok": {\n    "json": {\n      "value": 1\n    },\n    "raw": "0x0100000000000000"\n  }\n}\n')),(0,o.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u770b\u5230\u8ba1\u6570\u5668\u7684\u503c\u662f 1\u3002"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u53e6\u4e00\u4e2a\u5e10\u6237\u518d\u6b21\u521d\u59cb\u5316\u548c\u589e\u52a0\u8ba1\u6570\u5668\u3002")),(0,o.kt)("p",null,"\u5047\u8bbe\u65b0\u8d26\u6237\u5730\u5740\u4e3a 0x0da41daaa9dbd912647c765025a12e5a ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"starcoin% account execute-function -s 0x0da41daaa9dbd912647c765025a12e5a  --function 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::init_counter -b\nstarcoin% contract get resource 0x0da41daaa9dbd912647c765025a12e5a 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::Counter\nstarcoin% account execute-function -s 0x0da41daaa9dbd912647c765025a12e5a  --function 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::incr_counter -b\nstarcoin% contract get resource 0x0da41daaa9dbd912647c765025a12e5a 0xb19b07b76f00a8df445368a91c0547cc::MyCounter::Counter\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TODO"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"watch events"))))}d.isMDXComponent=!0}}]);