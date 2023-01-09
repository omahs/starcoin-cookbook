"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[4616],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||o;return n?r.createElement(d,c(c({ref:t},i),{},{components:n})):r.createElement(d,c({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const o={},c="\u5982\u4f55\u90e8\u7f72 Move \u667a\u80fd\u5408\u7ea6",l={unversionedId:"move/deploy-first-move-contract",id:"move/deploy-first-move-contract",title:"\u5982\u4f55\u90e8\u7f72 Move \u667a\u80fd\u5408\u7ea6",description:"\u5728\u5feb\u901f\u5f00\u59cb\u4e2d\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u7f16\u5199\u3001\u7f16\u8bd1\u3001\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u7684\u6574\u4e2a\u8fc7\u7a0b\u4e86\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/07-deploy-first-move-contract.md",sourceDirName:"03-move",slug:"/move/deploy-first-move-contract",permalink:"/starcoin-cookbook/zh/docs/move/deploy-first-move-contract",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/07-deploy-first-move-contract.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9884\u8a00\u673a\u534f\u8bae",permalink:"/starcoin-cookbook/zh/docs/move/starcoin-framework/oracle"},next:{title:"\u4e0e\u5408\u7ea6\u4ea4\u4e92",permalink:"/starcoin-cookbook/zh/docs/move/interacting-with-the-contract"}},p={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u91cd\u8981\u6027",id:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u91cd\u8981\u6027",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5408\u7ea6\u4ee3\u7801",id:"\u5408\u7ea6\u4ee3\u7801",level:2},{value:"\u90e8\u7f72\u6d41\u7a0b",id:"\u90e8\u7f72\u6d41\u7a0b",level:2}],i={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u90e8\u7f72-move-\u667a\u80fd\u5408\u7ea6"},"\u5982\u4f55\u90e8\u7f72 Move \u667a\u80fd\u5408\u7ea6"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/move/quick-start"},"\u5feb\u901f\u5f00\u59cb"),"\u4e2d\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u7f16\u5199\u3001\u7f16\u8bd1\u3001\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u7684\u6574\u4e2a\u8fc7\u7a0b\u4e86\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u5c06\u4f1a\u66f4\u8be6\u7ec6\u5730\u8bb2\u89e3",(0,a.kt)("em",{parentName:"p"},"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6"),"\u7684\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"Move \u8bed\u8a00\u662f Meta\uff08\u539f Facebook\uff09\u516c\u53f8\u4e3a ",(0,a.kt)("em",{parentName:"p"},"Libra")," \u9879\u76ee\uff08\u540e\u66f4\u540d\u4e3a ",(0,a.kt)("em",{parentName:"p"},"Diem"),"\uff09\u5f00\u53d1\u7684",(0,a.kt)("em",{parentName:"p"},"\u9886\u57df\u4e13\u7528\u8bed\u8a00\uff08DSL\uff09"),"\u3002\nMove \u8bed\u8a00\u4f5c\u4e3a",(0,a.kt)("em",{parentName:"p"},"\u9762\u5411\u8d44\u6e90\u7f16\u7a0b"),"\u7684\u667a\u80fd\u5408\u7ea6\u7f16\u7a0b\u8bed\u8a00\uff0c\u65e0\u7591\u7ed9\u533a\u5757\u94fe\u6280\u672f\u6ce8\u5165\u65b0\u7684\u6d3b\u529b\u3002\n",(0,a.kt)("em",{parentName:"p"},"Starcoin \u533a\u5757\u94fe"),"\u662f",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6761\u4f7f\u7528 Move \u8bed\u8a00\u7684\u7684\u516c\u94fe"),"\uff0c\u4f5c\u4e3a Move \u8bed\u8a00\u7684\u8d21\u732e\u8005\u4ee5\u53ca\u53d7\u76ca\u8005\uff0cStarcoin \u4e00\u76f4\u52aa\u529b\u6784\u5efa ",(0,a.kt)("em",{parentName:"p"},"Move \u751f\u6001"),"\u3002"),(0,a.kt)("p",null,"\u867d\u7136 Diem \u56e0\u4e3a\u4e00\u4e9b\u4e0d\u53ef\u6297\u62d2\u7684\u56e0\u7d20\u800c\u544a\u7ec8\uff0c\u4f46\u662f\u8fd9\u8fc7\u7a0b\u4e2d\u8bde\u751f\u7684\u4e00\u6279\u5148\u8fdb\u6280\u672f\uff0c\u65e0\u7591\u7ed9 Web3 \u4e16\u754c\u6ce8\u5165\u4e86\u65b0\u7684\u6d3b\u529b\u3002\n\u4e0d\u5c11\u70ed\u8877\u533a\u5757\u94fe\u6280\u672f\u3001\u61a7\u61ac Web3 \u7f8e\u597d\u7684\u4e16\u754c\u7684\u6280\u672f\u8005\uff0c\u7eb7\u7eb7\u5954\u8d74\u65b0\u7684\u822a\u7a0b\uff0c\u6cbf\u7528 ",(0,a.kt)("em",{parentName:"p"},"Diem \u533a\u5757\u94fe"),"\u7559\u4e0b\u7684\u5f00\u6e90\u6280\u672f\u6784\u5efa\u4e86\u4e24\u6761\u57fa\u4e8e Move \u8bed\u8a00\u6765\u7f16\u5199\u667a\u80fd\u5408\u7ea6\u7684\u65b0\u516c\u94fe ",(0,a.kt)("em",{parentName:"p"},"Aptos")," \u548c ",(0,a.kt)("em",{parentName:"p"},"Sui"),"\uff08\u76ee\u524d\u5df2\u5904\u4e8e\u6d4b\u8bd5\u7f51\u9636\u6bb5\uff09\u3002"),(0,a.kt)("p",null,"Move \u751f\u6001\u4e2d\u7684\u4e09\u5927\u516c\u94fe ",(0,a.kt)("em",{parentName:"p"},"Starcoin"),"\u3001",(0,a.kt)("em",{parentName:"p"},"Aptos")," \u548c ",(0,a.kt)("em",{parentName:"p"},"Sui"),"\uff0c\u6b63\u4ee5",(0,a.kt)("em",{parentName:"p"},"\u661f\u661f\u4e4b\u706b\u53ef\u4ee5\u71ce\u539f"),"\u4e4b\u52bf\uff0c\u5171\u540c\u4e3a Move \u751f\u6001\u53d1\u5149\u53d1\u70ed\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u91cd\u8981\u6027"},"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u91cd\u8981\u6027"),(0,a.kt)("p",null,"\u533a\u5757\u94fe\u6280\u672f\u7684\u53d1\u5c55\u7ecf\u5386\u4e86\u4e24\u4e2a\u9636\u6bb5\uff0c\u6bd4\u7279\u5e01\uff08BTC\uff09\u5f00\u542f\u4e86",(0,a.kt)("em",{parentName:"p"},"\u533a\u5757\u94fe1.0"),"\u65f6\u4ee3\uff0c\u4ee5\u592a\u574a\uff08ETH\uff09\u5f00\u542f\u4e86",(0,a.kt)("em",{parentName:"p"},"\u533a\u5757\u94fe2.0"),"\u65f6\u4ee3\u3002\n\u4ee5\u592a\u574a\u7684\u51fa\u73b0\u4e3a\u533a\u5757\u94fe\u5e26\u6765\u4e86",(0,a.kt)("em",{parentName:"p"},"\u667a\u80fd\u5408\u7ea6"),"\u8fd9\u4e00\u5173\u952e\u6280\u672f\uff0c\u8ba9\u533a\u5757\u94fe\u4e0d\u53ea\u505c\u7559\u5728\u8bb0\u8d26\u8fd9\u4e00\u5355\u7684\u76ee\u7684\uff0c\u800c\u662f\u5e26\u6765\u66f4\u591a\u7684\u5e94\u7528\u62d3\u5c55\u6027\u3002\n\u9057\u61be\u7684\u662f\uff0c\u667a\u80fd\u5408\u7ea6\u5982\u540c\u4e00\u628a\u53cc\u5203\u5251\uff0c\u5728\u5e26\u6765\u4f17\u591a\u4e30\u5bcc\u529f\u80fd\u62d3\u5c55\u7684\u540c\u65f6\uff0c\u4e5f\u5bb9\u6613\u8ba9\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u8005\u65e0\u610f\u95f4\u5f15\u5165\u4e0d\u5b89\u5168\u7684\u4ee3\u7801\uff0c\u8ba9\u94fe\u7684\u8d44\u4ea7\u53d7\u5230\u5a01\u80c1\u3002"),(0,a.kt)("p",null,"\u6211\u60f3\uff0c\u7f16\u5199\u7b80\u5355\u3001\u5b89\u5168\u3001\u6613\u90e8\u7f72\u7684\u667a\u80fd\u5408\u7ea6\u5e94\u8be5\u662f",(0,a.kt)("em",{parentName:"p"},"\u533a\u5757\u94fe3.0"),"\u65f6\u4ee3\u5e94\u8be5\u5173\u6ce8\u7684\u91cd\u70b9\uff0c",(0,a.kt)("em",{parentName:"p"},"\u9762\u5411\u8d44\u6e90\u7f16\u7a0b"),"\u7684 Move \u8bed\u8a00\uff0c\u65e0\u7591\u7ed9\u8fd9\u4e2a\u95ee\u9898\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u90e8\u7f72",(0,a.kt)("em",{parentName:"p"},"\u667a\u80fd\u5408\u7ea6"),"\u51e0\u4e4e\u662f\u6bcf\u6761",(0,a.kt)("em",{parentName:"p"},"\u667a\u80fd\u94fe"),"\u7684\u6700\u57fa\u672c\u529f\u80fd\uff0c\u63a5\u4e0b\u6765\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5728 Starcoin \u533a\u5757\u94fe\u90e8\u7f72\u5408\u7ea6\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u7bc7\u6587\u7ae0\uff0c\u4f60\u5c06\u5b66\u4e60\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4e3a Move \u9879\u76ee\u5f00\u53d1\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55\u548c\u914d\u7f6e\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6253\u5305\uff08\u7f16\u8bd1\uff09\u4e00\u4e2a Move \u6a21\u5757\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5c06\u7f16\u8bd1\u597d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u90e8\u7f72\u5230 Starcoin \u533a\u5757\u94fe\u4e0a\u3002")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6839\u636e",(0,a.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/getting-started/setup/dev-network"},"\u5982\u4f55\u8bbe\u7f6e\u672c\u5730\u5f00\u53d1\u7f51\u7edc"),"\u7684\u63cf\u8ff0\u542f\u52a8\u4e00\u4e2a ",(0,a.kt)("em",{parentName:"p"},"dev")," \u7f51\u7edc\u8282\u70b9\u3002\n\u5e76\u4e14\u4e3a\u8d26\u6237\u83b7\u53d6\u4e00\u4e9b ",(0,a.kt)("em",{parentName:"p"},"dev")," \u7f51\u7edc\u7684\u6d4b\u8bd5\u4ee3\u5e01\uff0c\u5e76\u89e3\u9501\u8d26\u6237\u3002\n\u8fd9\u91cc\u5c06\u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc")," \u4f5c\u4e3a\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u8d26\u6237\u5730\u5740\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% dev get-coin 0xb19b07b76f00a8df445368a91c0547cc\n")),(0,a.kt)("h2",{id:"\u5408\u7ea6\u4ee3\u7801"},"\u5408\u7ea6\u4ee3\u7801"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/my-counter"},"\u8ba1\u6570\u5668\u5408\u7ea6"),"\uff0c\u529f\u80fd\u6709\u521b\u5efa\u8ba1\u6570\u5668\uff0c\u9012\u589e\u8ba1\u6570\u5668\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/move/quick-start"},"\u5feb\u901f\u5f00\u59cb"),"\u4e2d\u7684\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"\u9879\u76ee\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 Move.toml\n\u2514\u2500\u2500 sources\n    \u2514\u2500\u2500 MyCounter.move\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-move",metastring:'title="my-counter/sources/MyCounter.move"',title:'"my-counter/sources/MyCounter.move"'},"module MyCounterAddr::MyCounter {\n     use StarcoinFramework::Signer;\n\n     struct Counter has key, store {\n        value:u64,\n     }\n     public fun init(account: &signer){\n        move_to(account, Counter{value:0});\n     }\n     public fun incr(account: &signer) acquires Counter {\n        let counter = borrow_global_mut<Counter>(Signer::address_of(account));\n        counter.value = counter.value + 1;\n     }\n\n     public(script) fun init_counter(account: signer){\n        Self::init(&account)\n     }\n\n     public(script) fun incr_counter(account: signer)  acquires Counter {\n        Self::incr(&account)\n     }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="my-counter/Move.toml" {7}',title:'"my-counter/Move.toml"',"{7}":!0},'[package]\nname = "my_counter"\nversion = "0.0.1"\n\n[addresses]\nStarcoinFramework = "0x1"\nMyCounterAddr = "0xb19b07b76f00a8df445368a91c0547cc"\n\n[dependencies]\nStarcoinFramework = {git = "https://github.com/starcoinorg/starcoin-framework.git", rev="cf1deda180af40a8b3e26c0c7b548c4c290cd7e7"}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Move.toml")," \u6587\u4ef6\u548c ",(0,a.kt)("em",{parentName:"p"},"sources")," \u76ee\u5f55\u662f\u4e00\u4e2a Move \u9879\u76ee\u76ee\u5f55\u7684\u57fa\u672c\u7ec4\u6210\u7ed3\u6784\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u6d41\u7a0b"},"\u90e8\u7f72\u6d41\u7a0b"),(0,a.kt)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728\u6211\u4eec\u5f00\u59cb\u5427\uff01"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5408\u7ea6\u5730\u5740")),(0,a.kt)("p",null,"\u667a\u80fd\u5408\u7ea6\u662f\u90e8\u7f72\u5728\u67d0\u4e2a\u8d26\u6237\u4e0b\u7684\uff0c\u56e0\u6b64\u9700\u8981\u4fee\u6539 ",(0,a.kt)("em",{parentName:"p"},"Move.toml")," \u6587\u4ef6\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCounterAddr")," \u7684\u503c\u4e3a\u4f60\u5b9e\u9645\u7684\u8d26\u6237\u5730\u5740\u3002\n\u8fd9\u91cc\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc")," \u4e3a\u4f8b\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u6a21\u5757")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mpm release\n\nPackaging Modules:\n         0xb19b07b76f00a8df445368a91c0547cc::MyCounter\nRelease done: release/my-counter.v0.0.0.blob, package hash: 0x3be68089a746a7a3d1aaf2e0282a7c73f3724e07d19dbdd5d5514f01ace9a662\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u5c06\u4f1a\u7f16\u8bd1\u6a21\u5757\uff0c\u5e76\u751f\u6210\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5305 ",(0,a.kt)("em",{parentName:"p"},"release/my-counter.v0.0.1.blob"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pwd")," \u547d\u4ee4\u786e\u5b9a\u5408\u7ea6\u7684",(0,a.kt)("em",{parentName:"p"},"\u7edd\u5bf9\u8def\u5f84"),"\uff0c\u65b9\u4fbf\u5728 ",(0,a.kt)("em",{parentName:"p"},"Starcoin \u63a7\u5236\u53f0"),"\u4e2d\u90e8\u7f72\u3002")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u89e3\u9501\u8d26\u6237")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin% account unlock 0xb19b07b76f00a8df445368a91c0547cc -p <MY-PASSWORD>\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u5230\u533a\u5757\u94fe")),(0,a.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\u53ef\u4ee5\u5c06 Move \u4e8c\u8fdb\u5236\u5305\u90e8\u7f72\u5230\u533a\u5757\u94fe\u4e0a\uff1a"),(0,a.kt)("p",null,"\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm deploy")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"starcoin% dev deploy"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mpm deploy")),(0,a.kt)("p",null,"\u90e8\u7f72\u6a21\u5757\u9700\u8981\u8d26\u53f7\u8fdb\u884c\u7b7e\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"mpm deploy")," \u547d\u4ee4\u652f\u6301\u4e09\u79cd\u8d26\u53f7\u6a21\u5f0f\uff1a\n1) \u672c\u5730\u94b1\u5305; 2) \u79c1\u94a5\u6587\u4ef6; 3) \u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u4e09\u79cd\u8d26\u53f7\u6a21\u5f0f\u5bf9\u5e94\u7684\u547d\u4ee4\u5206\u522b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm deploy --rpc ws://127.0.0.1:9871 --local-account-dir /your/local/account/dir --password xxxxx /your/dev/path/my-counter/release/my-counter.v0.0.1.blob\n\n$ mpm deploy --rpc ws://127.0.0.1:9871 --secret-file /your/secret/file /your/dev/path/my-counter/release/my-counter.v0.0.1.blob\n\n$ mpm deploy --rpc ws://127.0.0.1:9871 --from-env /your/dev/path/my-counter/release/my-counter.v0.0.1.blob\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5c06\u6a21\u5757\u90e8\u7f72\u5230 Barnard \u6d4b\u8bd5\u7f51\u6216\u8005\u4e3b\u7f51\u4e0a\uff0c\u53ea\u9700\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc")," \u9009\u9879\u6307\u5b9a\u4e3a\u5bf9\u5e94\u7684 RPC \u5730\u5740\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"secret-file"))," \u662f\u4e00\u4e2a\u50a8\u5b58\u79c1\u94a5\u7684\u672c\u5730\u6587\u4ef6\uff0c\u91cc\u9762\u53ea\u5305\u542b\u4e00\u884c\u79c1\u94a5\uff0c\u65e0\u5176\u4ed6\u524d\u7f00\uff0c\u540e\u7f00\u3002"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u7684\u952e\u503c\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"STARCOIN_PRIVATE_KEY"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"starcoin% dev deploy ")),(0,a.kt)("p",null,"\u5728 Starcoin \u63a7\u5236\u53f0\u6a21\u5f0f\u4e0b\uff0c\u8fd0\u884c\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% dev deploy /your/dev/path/my-counter/release/my-counter.v0.0.1.blob -s 0xb19b07b76f00a8df445368a91c0547cc -b\n\ntxn 0xeb055894f0c4440608246825c238a36683a8a0ad57144e905a12398a02ce806b submitted.\n{\n  "ok": {\n    "dry_run_output": {\n      "events": [],\n      "explained_status": "Executed",\n      "gas_used": "7800",\n      "status": "Executed",\n      "write_set": [\n        {\n          "access_path": "0x00000000000000000000000000000001/1/0x00000000000000000000000000000001::TransactionFee::TransactionFee<0x00000000000000000000000000000001::STC::STC>",\n          "action": "Value",\n          "value": {\n            "Resource": {\n              "json": {\n                "fee": {\n                  "value": 292331\n                }\n              },\n              "raw": "0xeb750400000000000000000000000000"\n            }\n          }\n        },\n  .....\n  ....\n}\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm deploy")," \u547d\u4ee4\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u90e8\u7f72\uff0c\u8fd8\u662f\u501f\u52a9 Starcoin \u63a7\u5236\u53f0\u6765\u90e8\u7f72\uff0c\u4e3b\u8981\u6839\u636e\u4e2a\u4eba\u559c\u597d\u6216\u4fbf\u5229\u7a0b\u5ea6\u6765\u9009\u62e9\u3002"))}m.isMDXComponent=!0}}]);