"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8951],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8909:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={},c="Contribution Guide",s={unversionedId:"miscellaneous/contributing",id:"miscellaneous/contributing",title:"Contribution Guide",description:"How to Contribute",source:"@site/docs/100-miscellaneous/99-contributing.md",sourceDirName:"100-miscellaneous",slug:"/miscellaneous/contributing",permalink:"/starcoin-cookbook/docs/miscellaneous/contributing",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/100-miscellaneous/99-contributing.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi-signature",permalink:"/starcoin-cookbook/docs/concepts/multisig"}},u={},d=[{value:"How to Contribute",id:"how-to-contribute",level:2},{value:"1. Clone the Cookbook",id:"1-clone-the-cookbook",level:3},{value:"2. Installing Packages",id:"2-installing-packages",level:3},{value:"3. Running the Development Server",id:"3-running-the-development-server",level:3},{value:"4. Build",id:"4-build",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"File Structure Guidelines",id:"file-structure-guidelines",level:3},{value:"Document Style Guidelines",id:"document-style-guidelines",level:3},{value:"FAQ",id:"faq",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-guide"},"Contribution Guide"),(0,i.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,i.kt)("h3",{id:"1-clone-the-cookbook"},"1. Clone the Cookbook"),(0,i.kt)("p",null,"Fork the Starcoin Cookbook repo to make a copy of this cookbook in your account. Then ",(0,i.kt)("strong",{parentName:"p"},"clone")," that repo to your development environment and navigate to the local repo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:your-username/starcoin-cookbook.git\ncd starcoin-cookbook\n")),(0,i.kt)("h3",{id:"2-installing-packages"},"2. Installing Packages"),(0,i.kt)("p",null,"Node.js and yarn are required to build this cookbook, read the ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"yarn installation page")," for details."),(0,i.kt)("p",null,"Execute the following command in the project root to install the packages and dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn\n")),(0,i.kt)("h3",{id:"3-running-the-development-server"},"3. Running the Development Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn start\n")),(0,i.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,i.kt)("p",null,"English locale is used by default. Start your localized site in dev mode, using the locale of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn start --locale zh\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Available locales defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."))),(0,i.kt)("h3",{id:"4-build"},"4. Build"),(0,i.kt)("p",null,"This command generates static content into the ",(0,i.kt)("inlineCode",{parentName:"p"},"/build")," directory and can be served using any static contents hosting service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn build\n")),(0,i.kt)("p",null,"The default BaseUrl is ",(0,i.kt)("inlineCode",{parentName:"p"},"/starcoin-cookbook"),", if you want to change it, you can specify it via environment variable before build."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ export BASE_URL='/'\n")),(0,i.kt)("p",null,"(2) Run the following command, which will start a web service locally."),(0,i.kt)("p",null,"Then run serve to serving build directory at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/starcoin-cookbook/"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn serve\n")),(0,i.kt)("p",null,"If you specify the BASE_URL environment variable as ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", the address will be: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("h3",{id:"file-structure-guidelines"},"File Structure Guidelines"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A numerical prefix is required in the directory name and file, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"01-build.md"),", which indicates the order of the document in the sidebar."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"kebab-case")," naming convention is used in directory and file names."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md")," in each directory is the front page of the directory."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"_category_.yaml")," is the configuration file for a directory, in which the ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," property is the title of this directory showing in the sidebar."),(0,i.kt)("li",{parentName:"ol"},"The default documents are in English, translations can be found in ",(0,i.kt)("inlineCode",{parentName:"li"},"i18n/<language-code>/docusaurus-plugin-content-docs/current"),". Translations should use the same file name as the English docs.")),(0,i.kt)("h3",{id:"document-style-guidelines"},"Document Style Guidelines"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Chinese version is following additional document conventions, read the Chinese document style for details."))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How to translate a section (directory)?"),(0,i.kt)("p",{parentName:"li"},"Adding Chinese translation for example. Run the following command after adding a new section (directory):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn write-translations --locale zh\n")),(0,i.kt)("p",{parentName:"li"},"Changes are made to ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/zh/docusaurus-plugin-content-docs/current.json"),", and new directory name is added. Editing the file to add translation."),(0,i.kt)("p",{parentName:"li"},"Change ",(0,i.kt)("inlineCode",{parentName:"p"},"zh")," to the corresponding language code for other languages."))))}m.isMDXComponent=!0}}]);