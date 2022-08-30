"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[6814],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),v=o,d=s["".concat(c,".").concat(v)]||s[v]||m[v]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2355:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={},i="\u8bbe\u7f6e Move \u5f00\u53d1\u73af\u5883",p={unversionedId:"move/prepare-move-env",id:"move/prepare-move-env",title:"\u8bbe\u7f6e Move \u5f00\u53d1\u73af\u5883",description:"\u5b89\u88c5 mpm",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/01-prepare-move-env.md",sourceDirName:"03-move",slug:"/move/prepare-move-env",permalink:"/starcoin-cookbook/zh/docs/move/prepare-move-env",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/01-prepare-move-env.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Move \u5b9e\u6218",permalink:"/starcoin-cookbook/zh/docs/move/"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/starcoin-cookbook/zh/docs/move/quick-start"}},c={},l=[{value:"\u5b89\u88c5 mpm",id:"\u5b89\u88c5-mpm",level:2},{value:"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5",id:"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5",level:3},{value:"\u901a\u8fc7\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5",id:"\u901a\u8fc7\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5",level:3},{value:"\u4ece\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5",id:"\u4ece\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:3},{value:"\u5b89\u88c5 IDE \u63d2\u4ef6",id:"\u5b89\u88c5-ide-\u63d2\u4ef6",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"\u8bbe\u7f6e Move Prover \u73af\u5883",id:"\u8bbe\u7f6e-move-prover-\u73af\u5883",level:2}],u={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8bbe\u7f6e-move-\u5f00\u53d1\u73af\u5883"},"\u8bbe\u7f6e Move \u5f00\u53d1\u73af\u5883"),(0,o.kt)("h2",{id:"\u5b89\u88c5-mpm"},"\u5b89\u88c5 mpm"),(0,o.kt)("p",null,"Move Package Manager\uff08mpm\uff09\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u5f00\u53d1 Move \u9879\u76ee\u3002\u53ef\u4ee5\u7c7b\u6bd4 Rust \u7684 Cargo\uff0c\u6216 NodeJS \u7684 npm\u3002"),(0,o.kt)("p",null,"\u9009\u62e9\u4e0b\u9762\u7684\u4e00\u79cd\u65b9\u6cd5\u5b89\u88c5"),(0,o.kt)("h3",{id:"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5"},"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5"),(0,o.kt)("p",null,"\u8fd0\u884c starcoin-framework \u4e0b\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin-framework/blob/main/scripts/dev_setup.sh"},(0,o.kt)("inlineCode",{parentName:"a"},"scripts/dev_setup.sh")),"\uff08\u81ea\u52a8\u5316\u5b89\u88c5\u811a\u672c\uff09\uff0c\u5b83\u5305\u542b\u4e86 mpm\u3001Rust\u3001\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u4ee5\u53ca Move Prover \u5de5\u5177\u7684\u4f9d\u8d56\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/starcoinorg/starcoin-framework/main/scripts/dev_setup.sh | bash /dev/stdin -b -t -p\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u7ed9\u5b9a\u7684\u53c2\u6570\u4f1a\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u5b89\u88c5 mpm\u3001Rust\u7684\u5b89\u88c5\uff0c\u5e76\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u66f4\u591a\u53c2\u6570\u53ef\u4ee5\u6253\u5f00\u811a\u672c\u6587\u4ef6\u67e5\u770b\u3002"),(0,o.kt)("h3",{id:"\u901a\u8fc7\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5"},"\u901a\u8fc7\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5"),(0,o.kt)("p",null,"\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starcoinorg/starcoin"},"starcoiorg/starcoin")," \u7684\u53d1\u5e03\u9875\u9762\u4e0b\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"mpm-[your_os]-latest.zip")," \u5e76\u89e3\u538b\uff0c\u7136\u540e\u624b\u52a8\u6dfb\u52a0\u5230 PATH\u3002"),(0,o.kt)("h3",{id:"\u4ece\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5"},"\u4ece\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4ece\u672c\u5730\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/starcoinorg/starcoin.git\n$ cd starcoin\n$ cargo install --path vm/move-package-manager\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4ecegit\u4ed3\u5e93\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo install --git https://github.com/starcoinorg/starcoin move-package-manager --bin mpm\n")),(0,o.kt)("p",null,"\u8fd9\u5c06\u5728 Cargo \u7684 bin \u76ee\u5f55\u4e2d\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"mpm")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u5728 macOS \u548c Linux \u4e0a\uff0c\u8fd9\u4e2a\u76ee\u5f55\u901a\u5e38\u662f ",(0,o.kt)("em",{parentName:"p"},"~/.Cargo/bin/"),"\u3002\u4f60\u9700\u8981\u786e\u4fdd\u8be5\u4f4d\u7f6e\u5728\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," \u73af\u5883\u53d8\u91cf\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"mpm"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mpm\nmove-package-manager 1.11.11\nStarcoin Core Dev <dev@starcoin.org>\nCLI frontend for the Move compiler and VM\n\nUSAGE:\n    mpm [OPTIONS] <SUBCOMMAND>\n  ...\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5-ide-\u63d2\u4ef6"},"\u5b89\u88c5 IDE \u63d2\u4ef6"),(0,o.kt)("h3",{id:"vs-code"},"VS Code"),(0,o.kt)("p",null,"\u5728\u63d2\u4ef6\u5e02\u573a\u4e2d\u641c\u7d22 starcoin-ide\u3002\u70b9\u51fb\u5b89\u88c5\u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"\u8bbe\u7f6e-move-prover-\u73af\u5883"},"\u8bbe\u7f6e Move Prover \u73af\u5883"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c starcoin-framework \u4e0b\u7684 dev_setup.sh\uff08\u81ea\u52a8\u5316\u5b89\u88c5\u811a\u672c\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./scripts/dev_setup.sh -ypt\n")),(0,o.kt)("p",null,"\u5f53\u4e0a\u9762\u7684\u547d\u4ee4\u6267\u884c\u5b8c\u6bd5\u65f6\uff0c\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"boogie /version"),'\uff0c\u5982\u679c\u8f93\u51fa\u7c7b\u4f3c "Boogie program verifier version X.X.X"\uff0c\u90a3\u4e48\u5b89\u88c5\u5df2\u7ecf\u6210\u529f\u3002'),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u76ee\u524d Move Prover \u53ea\u80fd\u5728\u7c7b UNIX \u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8fd0\u884c\uff08\u4f8b\u5982 Linux\u3001macOS\uff09\u3002 Windows \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5 WSL \u6765\u8fd0\u884c\u3002"))}m.isMDXComponent=!0}}]);