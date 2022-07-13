"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[4271],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7597:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=t(3117),r=(t(7294),t(3905));const i={},a="\u79fb\u52a8\u865a\u62df\u673a\u3001\u5b57\u8282\u7801\u548c\u53cd\u6c47\u7f16\u7a0b\u5e8f",l={unversionedId:"move/move-test/disassembler",id:"move/move-test/disassembler",title:"\u79fb\u52a8\u865a\u62df\u673a\u3001\u5b57\u8282\u7801\u548c\u53cd\u6c47\u7f16\u7a0b\u5e8f",description:"\u5f53\u6211\u4eec\u5728\u7f16\u5199\u4e00\u6bb5 Move \u4ee3\u7801\u3001\u7f16\u8bd1\u5e76\u5728 Move \u865a\u62df\u673a\u4e2d\u6267\u884c\u5b83\u65f6\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/97-move-test/04-disassembler.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/disassembler",permalink:"/starcoin-cookbook/zh/docs/move/move-test/disassembler",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/97-move-test/04-disassembler.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55 Debug Move \u6a21\u5757\u548c\u6392\u67e5\u95ee\u9898",permalink:"/starcoin-cookbook/zh/docs/move/move-test/how-to-debug"},next:{title:"\u521b\u5efa\u4e00\u79cd\u65b0\u7684\u4ee3\u5e01",permalink:"/starcoin-cookbook/zh/docs/move/move-examples/create-a-new-token"}},s={},p=[{value:"\u79fb\u52a8\u865a\u62df\u673a\u6267\u884c\u6a21\u578b",id:"\u79fb\u52a8\u865a\u62df\u673a\u6267\u884c\u6a21\u578b",level:2},{value:"Move \u53cd\u6c47\u7f16\u5668 (Disassembler)",id:"move-\u53cd\u6c47\u7f16\u5668-disassembler",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u79fb\u52a8\u865a\u62df\u673a\u5b57\u8282\u7801\u548c\u53cd\u6c47\u7f16\u7a0b\u5e8f"},"\u79fb\u52a8\u865a\u62df\u673a\u3001\u5b57\u8282\u7801\u548c\u53cd\u6c47\u7f16\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u7f16\u5199\u4e00\u6bb5 Move \u4ee3\u7801\u3001\u7f16\u8bd1\u5e76\u5728 Move \u865a\u62df\u673a\u4e2d\u6267\u884c\u5b83\u65f6\uff0c\n\u6211\u4eec\u6709\u65f6\u5e0c\u671b\u4e86\u89e3\u5e55\u540e\u5b9e\u9645\u53d1\u751f\u7684\u4e8b\u60c5\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u770b\u4e00\u4e0b Move \u5e95\u5c42\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002"),(0,r.kt)("h2",{id:"\u79fb\u52a8\u865a\u62df\u673a\u6267\u884c\u6a21\u578b"},"\u79fb\u52a8\u865a\u62df\u673a\u6267\u884c\u6a21\u578b"),(0,r.kt)("p",null,"\u79fb\u52a8\u89e3\u91ca\u5668\u5728\u5b57\u8282\u7801\u7ea7\u522b\u5904\u7406\u7a0b\u5e8f\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u5c31\u50cf\u5176\u4ed6\u57fa\u4e8e\u5806\u6808\u7684\u89e3\u91ca\u5668\u4e00\u6837\uff0c\u5f53\u770b\u5230\u4e00\u6761\u6307\u4ee4\u65f6\uff0c\u79fb\u52a8\u89e3\u91ca\u5668\n\u53ef\u80fd\u4f1a\u6d88\u8017\u5806\u6808\u4e2d\u7684\u64cd\u4f5c\u6570\u5e76\u5c06\u7ed3\u679c\u63a8\u9001\u7ed9\u5b83\u3002\u4f46\u4e0e x86 \u673a\u5668\u4e0d\u540c\u7684\u662f\uff0c\n\u5728 x86 \u673a\u5668\u4e0a\uff0c\u64cd\u4f5c\u6570/\u53d8\u91cf\u4e0e\u8c03\u7528\u5806\u6808\u5171\u4eab\u540c\u4e00\u533a\u57df\uff0c\u4f46 Move VM \u903b\u8f91\u4e0a\u5c06\u4e24\u8005\u5206\u79bb\n\u5f00\u6765\uff1aMove \u89e3\u91ca\u5668\u6709\u4e24\u90e8\u5206\u2014\u2014\u4e00\u4e2a\u64cd\u4f5c\u6570\u6808\u548c\u4e00\u4e2a\u8c03\u7528\u6808\uff08\u5176\u5185\u90e8\u7ed3\u6784\u5982\u4e0b\u56fe\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u89e3\u91ca\u5668(Interpreter)\n\u251c\u2500\u2500 \u64cd\u4f5c\u6570\u6808(operand Stack)\n\u2502   \u251c\u2500\u2500 value[0]  <---- \u6808\u5e95\n\u2502   \u251c\u2500\u2500 value[1]\n\u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 value[n]  <---- \u6808\u9876\n\u2514\u2500\u2500 \u8c03\u7528\u6808(call stack)\n    \u251c\u2500\u2500 frame[0]                            <-- \u8c03\u7528\u6808\u5e95\n    \u2502   \u251c\u2500\u2500 pc (\u7a0b\u5e8f\u8ba1\u6570\u5668)\n    \u2502   \u251c\u2500\u2500 locals (\u4e00\u7ec4 ValueImpl\uff0c\u5305\u542b\u5c40\u90e8\u53d8\u91cf\u548c\u5b9e\u53c2)\n    \u2502   \u251c\u2500\u2500 function (\u8fd0\u884c\u65f6\u51fd\u6570)\n    \u2502   \u2514\u2500\u2500 ty_args (\u7c7b\u578b\u53c2\u6570)\n    \u251c\u2500\u2500 frame[1]\n    \u251c\u2500\u2500 ...\n    \u2514\u2500\u2500 frame[m]                            <-- \u8c03\u7528\u6808\u9876\n")),(0,r.kt)("p",null,"\u5728\u4efb\u4f55\u7a0b\u5e8f\u8c03\u7528\u4e2d\uff0c\u8c03\u7528\u8005\u51c6\u5907\u53c2\u6570\uff08\u4e5f\u79f0\u4e3a\u5b9e\u9645\u53c2\u6570\uff09\u5e76\u628a\u5b83\u4eec\u538b\n\u5230\u64cd\u4f5c\u6570\u6808\uff0c\u7136\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," \u6307\u4ee4\u5c06\u5728\u6808\u9876\u521b\u5efa\u4e00\u4e2a\u65b0\u5e27(frame)\uff0c\u5206\u914d\u7ed9\n\u88ab\u8c03\u7528\u7ed9\u51fd\u6570\uff0c\u5176\u4e2d\u5f62\u5f0f\u53c2\u6570\u662f\u4ece\u5806\u6808\u4e2d\u590d\u5236\u7684\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u5b83\u4eec\u7684\u540d\u79f0\u4e2d\u7406\u89e3\u5927\u591a\u6570\u6307\u4ee4\u7684\u542b\u4e49\u3002\u6bcf\u5f53\u4f60\u60f3\u77e5\u9053\u4efb\u4f55\u6307\u4ee4\u7684\u6548\u679c\uff0c\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"execute_code_impl()"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/move/blob/main/language/move-vm/runtime/src/move_vm.rs"},"interpreter.rs"),"\n\u4ee5\u4e86\u89e3\u8be6\u60c5\u3002"),(0,r.kt)("h2",{id:"move-\u53cd\u6c47\u7f16\u5668-disassembler"},"Move \u53cd\u6c47\u7f16\u5668 (Disassembler)"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u65f6\u5019\uff0cMove \u5f00\u53d1\u4eba\u5458\u5728\u6e90\u4ee3\u7801\u7ea7\u522b\u7f16\u5199\u4ee3\u7801\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u3002\n\u7136\u800c\uff0c\u7531\u4e8e\u5b57\u8282\u7801\u5b9e\u9645\u4e0a\u662f Move VM \u6267\u884c\u7684\u5185\u5bb9\uff0c\u5728\u4e00\u4e9b\u7f55\u89c1\u7684\u60c5\u51b5\u4e0b\uff0c\n\u6211\u4eec\u53ef\u80fd\u9700\u8981\u68c0\u67e5\u7279\u5b9a\u6a21\u5757\u6216\u51fd\u6570\u7684\u76f8\u5e94\u5b57\u8282\u7801\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5728 Starcoin Framework \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentiferNFT")," \u6a21\u5757\u4e2d\u6709\u4e00\u4e2a\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"owns()"),"\uff0c\u5728\n",(0,r.kt)("inlineCode",{parentName:"p"},"NFT.move")," \u5f53\u4e2d\u3002\u5b83\u7684\u539f\u59cb\u5b9e\u73b0\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public fun owns<NFTMeta: copy + store + drop, NFTBody: store>(owner: address): bool acquires IdentifierNFT {\n    if (!exists<IdentifierNFT<NFTMeta, NFTBody>>(owner)) {\n        return false\n    };\n    let id_nft = borrow_global<IdentifierNFT<NFTMeta, NFTBody>>(owner);\n    Option::is_some(&id_nft.nft)\n}\n")),(0,r.kt)("p",null,"\u6709\u4e9b\u8bfb\u8005\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"if not X then false else Y"),"\u5f62\u5f0f\u7684\u903b\u8f91\u662f\n\u5b9e\u9645\u4e0a\u76f8\u5f53\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"X and Y"),"\u3002\u56e0\u6b64\uff0c\u5f88\u5bb9\u6613\u5c06\u51fd\u6570\u7b80\u5316\u4e3a\u8fd9\u79cd\u5f62\u5f0f\n\uff08\u8ba9\u6211\u4eec\u79f0\u4e4b\u4e3a\u5355\u884c\u7248\u672c\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public fun owns<NFTMeta: copy + store + drop, NFTBody: store>(owner: address): bool acquires IdentifierNFT {\n    exists<IdentifierNFT<NFTMeta, NFTBody>>(owner)) && \n        Option::is_some(borrow_global<IdentifierNFT<NFTMeta, NFTBody>>(owner)&.nft)\n}\n")),(0,r.kt)("p",null,"\u4f46\u662f\u5982\u679c\u6211\u4eec\u5c1d\u8bd5\u8fd0\u884c\u6d4b\u8bd5\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u5355\u884c\u7248\u672c\u6d88\u8017\u7684 gas \u8d39\u7528\u4e0e\n\u539f\u59cb\u7248\u672c\u4e0d\u4e00\u6837\u3002\u4e3a\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6765\u68c0\u67e5\u4e00\u4e0b\u5b57\u8282\u7801\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u68c0\u67e5\u539f\u59cb\u5b9e\u73b0\u7684\u5b57\u8282\u7801\u3002\n\u8981\u53cd\u6c47\u7f16\u6a21\u5757 ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierNFT"),"\uff0c\u8bf7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"mpm package disassemble --name IdentifierNFT"),"\u3002\n\u8fd9\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"owns")," \u51fd\u6570\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public owns<NFTMeta: copy + drop + store, NFTBody: store>(id_nft: address): bool {\nB0:\n    0: CopyLoc[0](owner: address)\n    1: ExistsGeneric[0](IdentifierNFT<NFTMeta, NFTBody>)\n    2: Not\n    3: BrTrue(5)\nB1:\n    4: Branch(7)\nB2:\n    5: LdFalse\n    6: Ret\nB3:\n    7: CopyLoc[0](owner: address)\n    8: ImmBorrowGlobalGeneric[0](IdentifierNFT<NFTMeta, NFTBody>)\n    9: StLoc[1](id_nft: &IdentifierNFT<NFTMeta, NFTBody>)\n    10: MoveLoc[1](id_nft: &IdentifierNFT<NFTMeta, NFTBody>)\n    11: ImmBorrowFieldGeneric[0](IdentifierNFT.nft: Option<NFT<NFTMeta, NFTBody>>)\n    12: Call[5](is_some<NFT<NFTMeta, NFTBody>>(&Option<NFT<NFTMeta, NFTBody>>): bool)\n    13: Ret\n}\n")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u5c1d\u8bd5\u4f7f\u7528\u6211\u4eec\u4e4b\u524d\u5b66\u5230\u7684\u4e1c\u897f\u6765\u7406\u89e3\u5b83\uff1a\n\u51fd\u6570\u4e2d\u67094\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_block"},"\u57fa\u672c\u5757"),":B0\u3001B1\u3001B2\u3001B3\u3002\n\u5728 B0 \u4e2d\uff0c\u5b83\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," \u5730\u5740\u590d\u5236\u5230\u6808\u4e2d\uff0c\u7136\u540e\u7528\u5b83\u6765\u505a\u5b58\u5728\u6027\u68c0\u67e5\uff0c\n\u7136\u540e\u662f\u4e00\u4e2a\u5426\u5b9a\uff0c\u6700\u540e\u6761\u4ef6\u8df3\u8f6c\u5230 B2\u3002"),(0,r.kt)("p",null,"B2 \u53ea\u662f\u7b80\u5355\u5730\u628a\u503c false \u538b\u6808\u5e76\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"B1 \u662f\u4e00\u4e2a\u6ca1\u6709\u5b9e\u9645\u610f\u4e49\u7684\u57fa\u672c\u5757\uff0c\u5b83\u53ea\u5c06\u63a7\u5236\u6d41\u5e26\u5230 B3\u3002B3 \u4ece\u6307\u4ee4 7-8 \u4e2d\u5bf9\u5730\u5740 owner \u8fdb\u884c\u5168\u5c40\u501f\u7528\uff0c\n\u6307\u4ee4 9 \u5c06\u5176\u501f\u7528\u7ed3\u679c\u5b58\u50a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"id_nft")," \u4e2d\u3002\u6307\u4ee4 10 \u518d\u6b21\u5c06\u5176\u52a0\u8f7d\u5230\u5806\u6808\u4e2d\uff08\u662f\u7684\uff0c\u4f60\n\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e00\u4e2a\u7b80\u5355\u7684\u7aa5\u89c6\u5b54\u6307\u4ee4\u4f18\u5316\u53ef\u4ee5\u6d88\u9664\u6307\u4ee4 9-10\u3002\u76ee\u524d Move\n\u7f16\u8bd1\u5668\u5e76\u6ca1\u6709\u771f\u6b63\u505a\u592a\u591a\u4f18\u5316\uff09\u3002\u6700\u540e\u4e09\u4e2a\u6307\u4ee4 11-13 \u8fd4\u56de\n\u5b57\u6bb5 0 \u4e0a\u7684\u8c13\u8bcd ",(0,r.kt)("inlineCode",{parentName:"p"},"is_some()"),"\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u68c0\u67e5\u4e00\u4e0b\u5355\u884c\u7248\u672c\u7684\u5b57\u8282\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public owns<NFTMeta: copy + drop + store, NFTBody: store>(%#1: address): bool {\nB0:\n    0: CopyLoc[0](owner: address)\n    1: ExistsGeneric[0](IdentifierNFT<NFTMeta, NFTBody>)\n    2: BrTrue(4)\nB1:\n    3: Branch(10)\nB2:\n    4: CopyLoc[0](owner: address)\n    5: ImmBorrowGlobalGeneric[0](IdentifierNFT<NFTMeta, NFTBody>)\n    6: ImmBorrowFieldGeneric[0](IdentifierNFT.nft: Option<NFT<NFTMeta, NFTBody>>)\n    7: Call[5](is_some<NFT<NFTMeta, NFTBody>>(&Option<NFT<NFTMeta, NFTBody>>): bool)\n    8: StLoc[1](%#1: bool)\n    9: Branch(12)\nB3:\n    10: LdFalse\n    11: StLoc[1](%#1: bool)\nB4:\n    12: MoveLoc[1](%#1: bool)\n    13: Ret\n}\n")),(0,r.kt)("p",null,"\u6b64\u5904\u4e0d\u518d\u8d58\u8ff0\uff0c\u56e0\u4e3a\u5927\u90e8\u5206\u6307\u4ee4\u7684\u610f\u601d\u90fd\u662f\u4e00\u6837\u7684\u3002\n\u8fd9\u91cc\u63d0\u4e00\u4e0b\u503c\u5f97\u6ce8\u610f\u7684\u4e00\u4e9b\u4e0d\u540c\u4e4b\u5904\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u884c\u7248\u672c\u7684\u57fa\u7840\u5757\u66f4\u591a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7ed3\u679c\u4e0d\u518d\u76f4\u63a5\u4ece\u5806\u6808\u8fd4\u56de\u3002\u8bf7\u6ce8\u610f\uff0c\u7f16\u8bd1\u5668\u751f\u6210\u4e86\u4e00\u4e2a\u672a\u547d\u540d\u7684\u5c40\u90e8\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"li"},"%#1"),"\uff0c\u4efb\u4f55\u8981\u8fd4\u56de\u7684\u503c\u90fd\u5b58\u50a8\u5728\u5176\u4e2d\uff0c\n\u6700\u540e\u662f B4 \u8fd4\u56de\u5b83\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u539f\u59cb\u5b57\u8282\u7801\u4e2d\u7684\u5197\u4f59\u6307\u4ee4 9-10 \u5728\u8fd9\u91cc\u4e0d\u518d\u5b58\u5728\uff0c\u56e0\u4e3a\u5355\u884c\u7248\u672c\u6ca1\u6709\u4e34\u65f6\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"li"},"id_nft"),"\u3002")),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5b8c\u5168\u7406\u89e3\u4e86\u91cd\u6784\u5e26\u6765\u7684\u884c\u4e3a\u5dee\u5f02\u3002"))}d.isMDXComponent=!0}}]);