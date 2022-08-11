"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[7437],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<c;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var a=n(3117),o=(n(7294),n(3905));const c={},r="Execute your first transaction on Starcoin",i={unversionedId:"getting-started/accounts/first-transaction",id:"getting-started/accounts/first-transaction",title:"Execute your first transaction on Starcoin",description:"This article guides you on how to execute your first transaction on the Starcoin blockchain.",source:"@site/docs/02-getting-started/03-accounts/02-first-transaction.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/first-transaction",permalink:"/starcoin-cookbook/docs/getting-started/accounts/first-transaction",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/03-accounts/02-first-transaction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manage accounts by CLI",permalink:"/starcoin-cookbook/docs/getting-started/accounts/account-manage"},next:{title:"Multisig accounts and multisig transactions",permalink:"/starcoin-cookbook/docs/getting-started/accounts/multisig-account"}},s={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"A few steps to submit a transaction",id:"a-few-steps-to-submit-a-transaction",level:2},{value:"Create an account",id:"create-an-account",level:3},{value:"Use Faucet to top up your account",id:"use-faucet-to-top-up-your-account",level:3},{value:"Submit Transaction",id:"submit-transaction",level:3}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execute-your-first-transaction-on-starcoin"},"Execute your first transaction on Starcoin"),(0,o.kt)("p",null,"This article guides you on how to execute your first transaction on the Starcoin blockchain.\nBefore that, I recommend you read tech-related articles to get some idea of the basic concepts of Starcoin."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Let's say you've run up a Starcoin dev node locally."),(0,o.kt)("h2",{id:"a-few-steps-to-submit-a-transaction"},"A few steps to submit a transaction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start the Starcoin CLI console and connect to the Starcoin node\uff0cdetail document at ",(0,o.kt)("a",{parentName:"li",href:"/starcoin-cookbook/docs/getting-started/setup/starcoin-console"},"How working with the Starcoin console"),"."),(0,o.kt)("li",{parentName:"ul"},"Create two accounts: Alice and Bob, detail step see ",(0,o.kt)("a",{parentName:"li",href:"/starcoin-cookbook/docs/getting-started/accounts/account-manage"},"Manage account by CLI"),"."),(0,o.kt)("li",{parentName:"ul"},"Mint money into Alice's account."),(0,o.kt)("li",{parentName:"ul"},"Submit transfer transaction: Alice send money to Bob.")),(0,o.kt)("h3",{id:"create-an-account"},"Create an account"),(0,o.kt)("p",null,"After connecting to the node, let's first create two accounts. Here we assume that both accounts have been created successfully.\nAlice is the default account with the address ",(0,o.kt)("inlineCode",{parentName:"p"},"0xf096a2a61d3042774187a462a5394537")," and Bob's address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xbabb67fa74c24466c500e642c79437de"),"."),(0,o.kt)("h3",{id:"use-faucet-to-top-up-your-account"},"Use Faucet to top up your account"),(0,o.kt)("p",null,"In dev environment, faucet can be used to mint accounts.\nFaucet only exists in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," net to make it easier for developers developing and testing dapps."),(0,o.kt)("p",null,"Let's do it!."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% dev get-coin -v 100STC\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dev get-coin")," will mint some coins the default account, and if the account does not exist on the chain, it will creates the account first and then transfers a specified (with ",(0,o.kt)("inlineCode",{parentName:"p"},"-v"),") number of coins to the account.\nThe output of the command is the transaction data issued by the FAUCET account (address ",(0,o.kt)("inlineCode",{parentName:"p"},"0000000000000000000000000A550C18"),")."),(0,o.kt)("p",null,"Wait a few seconds and then check your account information again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xf096a2a61d3042774187a462a5394537\n{\n  "ok": {\n    "account": {\n      "address": "0xf096a2a61d3042774187a462a5394537",\n      "is_default": true,\n      "is_readonly": false,\n      "public_key": "0x96734ea5015c3e1901b1af3e9c16f42df074c92749988d0563be3f5df65c2da6",\n      "receipt_identifier": "stc1p7zt29fsaxpp8wsv853322w29xu02slxc"\n    },\n    "auth_key": "0x4c9c5a86f958a1a02286e46807df916ff096a2a61d3042774187a462a5394537",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100000000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"balances")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sequence_number")," is filled."),(0,o.kt)("h3",{id:"submit-transaction"},"Submit Transaction"),(0,o.kt)("p",null,"First you need to unlock Alice's account and authorize node to sign the transaction using Alice's private key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account unlock -p <MY-PASSWORD> 0xf096a2a61d3042774187a462a5394537\n")),(0,o.kt)("p",null,"Where the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," option specifies ",(0,o.kt)("inlineCode",{parentName:"p"},"<MY-PASSWORD>")," is the password that was needed when creating the account, if the default account's init password is empty."),(0,o.kt)("p",null,"Once the account is unlocked, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account transfer -s 0xf096a2a61d3042774187a462a5394537 -r 0xbabb67fa74c24466c500e642c79437de -v 10000 -b\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-s 0xf096a2a61d3042774187a462a5394537"),": is Alice's account address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-r 0xbabb67fa74c24466c500e642c79437de"),": is Bob's account address.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If, Bob's account does not yet exist on the chain, the transfer transaction will automatically create Bob's account on the chain.")),(0,o.kt)("p",null,"At this point, the transaction has been submitted to the chain.\nYou still need to wait a few seconds (",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," environment block time is relatively short, maybe longer in ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," environment) to let the transaction included the chain.\nThen check Bob's account information again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xbabb67fa74c24466c500e642c79437de\n{\n  "ok": {\n    "account": {\n      "address": "0xbabb67fa74c24466c500e642c79437de",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x6b1adad8156edba7d24efa5bb216e8e8f927a3866c875e95a636e6399ae4ed46",\n      "receipt_identifier": "stc1ph2ak07n5cfzxd3gquepv09phmc0crcec"\n    },\n    "auth_key": "0x282d7d31aa5c7daac4fab02c084f896dbabb67fa74c24466c500e642c79437de",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 10000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,o.kt)("p",null,"Bob has the money now!"),(0,o.kt)("p",null,"At this point, you have successfully completed an on-chain transfer."))}d.isMDXComponent=!0}}]);