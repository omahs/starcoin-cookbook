"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[6863],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,r=new Array(c);r[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<c;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5421:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var a=t(3117),o=(t(7294),t(3905));const c={},r="Create a new Token",l={unversionedId:"move/move-examples/create-a-new-token",id:"move/move-examples/create-a-new-token",title:"Create a new Token",description:"In this chapter, we will focus on how to create a custom token on the Starcoin blockchain. Let's get started.",source:"@site/docs/03-move/98-move-examples/01-create-a-new-token.md",sourceDirName:"03-move/98-move-examples",slug:"/move/move-examples/create-a-new-token",permalink:"/starcoin-cookbook/docs/move/move-examples/create-a-new-token",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/98-move-examples/01-create-a-new-token.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Move VM, Bytecode, and Disassembler",permalink:"/starcoin-cookbook/docs/move/move-test/disassembler"},next:{title:"Create a new NFT",permalink:"/starcoin-cookbook/docs/move/move-examples/create-a-new-nft"}},i={},s=[{value:"Required",id:"required",level:2},{value:"Compile the module",id:"compile-the-module",level:2},{value:"Import account",id:"import-account",level:2},{value:"Get devnet test coins",id:"get-devnet-test-coins",level:2},{value:"Deploy module",id:"deploy-module",level:2},{value:"Execute script function",id:"execute-script-function",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-new-token"},"Create a new Token"),(0,o.kt)("p",null,"In this chapter, we will focus on how to create a custom token on the Starcoin blockchain. Let's get started."),(0,o.kt)("h2",{id:"required"},"Required"),(0,o.kt)("p",null,"First, start a dev network described in ",(0,o.kt)("a",{parentName:"p",href:"/starcoin-cookbook/docs/getting-started/setup/dev-network"},"How to set up a local dev network")," and get some coins, say ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000"),"."),(0,o.kt)("p",null,"In this document, I will use ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc"),", the default account address of my dev network, to represent the person who issues and send the new token. And I also created another account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x831d51f0087596e6aa4e7b3b9c85f945")," and transfer some STC to it. The account will be used to receive the token."),(0,o.kt)("p",null,"The source file can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin-cookbook/tree/main/examples/my-token"},"my-token"),"."),(0,o.kt)("h2",{id:"compile-the-module"},"Compile the module"),(0,o.kt)("p",null,"Change the address of the module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"edit ",(0,o.kt)("inlineCode",{parentName:"li"},"Move.toml")),(0,o.kt)("li",{parentName:"ul"},"change ",(0,o.kt)("inlineCode",{parentName:"li"},'MyToken = "0xABCDE"')," to ",(0,o.kt)("inlineCode",{parentName:"li"},'MyToken = "0xb19b07b76f00a8df445368a91c0547cc"'))),(0,o.kt)("p",null,"Then open a console and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mpm release\n\nPackaging Modules:\n         0xb19b07b76f00a8df445368a91c0547cc::MyToken\nRelease done: release/my_token.v0.0.1.blob, package hash: 0xc3b9cf32499f4bdf0a38d57f7c7c66a6f4df69881a8980bcda2106782dce88ba\n")),(0,o.kt)("p",null,"It will compile the module, and then you will get the binary package ",(0,o.kt)("inlineCode",{parentName:"p"},"my_token.v0.0.1.blob")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," folder. We will use it then."),(0,o.kt)("h2",{id:"import-account"},"Import account"),(0,o.kt)("p",null,"We will need to import ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc")," account to deploy the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account import -i 0x05c9d09cd06a49e99efd0308c64bfdfb57409e10bc9e2a57cb4330cd946b4e83 -p <MY-PASSWORD>\n\n{\n  "ok": {\n    "address": "0xb19b07b76f00a8df445368a91c0547cc",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x7932502fa3f8c9bc9c9bb994f718b9bd90e58a6cdb145e24769560d3c96254d2",\n    "receipt_identifier": "stc1pkxds0dm0qz5d73zndz53cp28esyfj4ue"\n  }\n}\n')),(0,o.kt)("h2",{id:"get-devnet-test-coins"},"Get devnet test coins"),(0,o.kt)("p",null,"Get some STC coin from ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," net, and it will send ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000")," STC to the account by default. Notice that, this command can only be used in dev net."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% dev get-coin 0xb19b07b76f00a8df445368a91c0547cc\n")),(0,o.kt)("h2",{id:"deploy-module"},"Deploy module"),(0,o.kt)("p",null,"Then, unlock the account and deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"MyToken")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account unlock 0xb19b07b76f00a8df445368a91c0547cc -p <MY-PASSWORD>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% dev deploy /path/to/my-token/release/my_token.v0.0.1.blob -s 0xb19b07b76f00a8df445368a91c0547cc -b\n\ntxn 0x686964d6a4212f1e32e8626132e14dabffb034d6f3aec921e80a2e54726391b1 submitted.\n{\n  "ok": {\n    "dry_run_output": {\n      "events": [],\n      "explained_status": "Executed",\n      "gas_used": "7800",\n      "status": "Executed",\n      "write_set": [\n        {\n          "access_path": "0x00000000000000000000000000000001/1/0x00000000000000000000000000000001::TransactionFee::TransactionFee<0x00000000000000000000000000000001::STC::STC>",\n          "action": "Value",\n          "value": {\n            "Resource": {\n              "json": {\n                "fee": {\n                  "value": 25031\n                }\n              },\n              "raw": "0xc7610000000000000000000000000000"\n            }\n          }\n        },\n  .....\n  ....\n}\n')),(0,o.kt)("p",null,"You can see that the transation is submitted and the result status is ",(0,o.kt)("inlineCode",{parentName:"p"},"Executed"),". That means the module has been deployed."),(0,o.kt)("h2",{id:"execute-script-function"},"Execute script function"),(0,o.kt)("p",null,"First\uff0cuse the account ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc")," to initial module via ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account execute-function --function 0xb19b07b76f00a8df445368a91c0547cc::MyToken::init -s 0xb19b07b76f00a8df445368a91c0547cc --blocking\n")),(0,o.kt)("p",null,"Second, use the account ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc")," to mint some MyToken."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account execute-function --function 0xb19b07b76f00a8df445368a91c0547cc::MyToken::mint --blocking --arg 1000000u128 -s 0xb19b07b76f00a8df445368a91c0547cc\n")),(0,o.kt)("p",null,"Third, use the account ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb19b07b76f00a8df445368a91c0547cc")," to transfer 1000 MyToken to another user ",(0,o.kt)("inlineCode",{parentName:"p"},"0x831d51f0087596e6aa4e7b3b9c85f945"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin%  account execute-function --function 0x1::TransferScripts::peer_to_peer_v2 -t 0xb19b07b76f00a8df445368a91c0547cc::MyToken::MyToken --arg 0x831d51f0087596e6aa4e7b3b9c85f945 --arg 10000u128 -s 0xb19b07b76f00a8df445368a91c0547cc\n")),(0,o.kt)("p",null,"Last, show balances of the second user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0x831d51f0087596e6aa4e7b3b9c85f945\n{\n  "ok": {\n    "account": {\n      "address": "0x831d51f0087596e6aa4e7b3b9c85f945",\n      "is_default": true,\n      "is_readonly": false,\n      "public_key": "0x29894dafe73616f807ed48aef1978974122d790a62be767d115f396b422cbb75",\n      "receipt_identifier": "stc1psvw4ruqgwktwd2jw0vaeep0eg5eac86k"\n    },\n    "auth_key": "0xedf8fad3eb73ab981793ca5b29b9f660831d51f0087596e6aa4e7b3b9c85f945",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100000533341,\n      "0xb19b07b76f00a8df445368a91c0547cc::MyToken::MyToken": 10000    <- Note that MyToken has been successfully received\n    },\n    "sequence_number": 3\n  }\n}\n')))}d.isMDXComponent=!0}}]);