"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[7712],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),v=o,f=m["".concat(p,".").concat(v)]||m[v]||u[v]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},p="Setting up Move develop environment",l={unversionedId:"move/prepare-move-env",id:"move/prepare-move-env",title:"Setting up Move develop environment",description:"Installation",source:"@site/docs/03-move/01-prepare-move-env.md",sourceDirName:"03-move",slug:"/move/prepare-move-env",permalink:"/starcoin-cookbook/docs/move/prepare-move-env",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/01-prepare-move-env.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Move in Action",permalink:"/starcoin-cookbook/docs/move/"},next:{title:"Move Language",permalink:"/starcoin-cookbook/docs/move/move-language/"}},s={},u=[{value:"Installation",id:"installation",level:2}],m={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-move-develop-environment"},"Setting up Move develop environment"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin-framework/blob/main/scripts/dev_setup.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"dev_setup.sh")),"(automated installation script) of starcoin-framework, which contains the move prover environment setup")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/starcoinorg/starcoin-framework/main/scripts/dev_setup.sh | bash /dev/stdin -b -t\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download from the release page of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin"},"starcoiorg/starcoin"),".")),(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/starcoinorg/starcoin.git\n$ cargo install --path starcoin/vm/move-package-manager\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cargo install --git https://github.com/starcoinorg/starcoin move-package-manager --bin mpm\n")),(0,a.kt)("p",null,"This will install the ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm")," binary in your Cargo binary directory. On macOS and Linux this is usually ",(0,a.kt)("em",{parentName:"p"},"~/.cargo/bin"),". You'll want to make sure this location is in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,a.kt)("p",null,"Now you should be able to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm\nmove-package-manager 1.11.7-rc\nStarcoin Core Dev <dev@starcoin.org>\nCLI frontend for the Move compiler and VM\n\nUSAGE:\n    mpm [OPTIONS] <SUBCOMMAND>\n  ...\n")),(0,a.kt)("p",null,"TODO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up env for move prover.")))}v.isMDXComponent=!0}}]);