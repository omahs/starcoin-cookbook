"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[4821],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,l(l({ref:n},i),{},{components:t})):a.createElement(h,l({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=t(3117),r=(t(7294),t(3905));const o={},l="Accumulator",u={unversionedId:"concepts/accumulator",id:"concepts/accumulator",title:"Accumulator",description:"\u4ecb\u7ecd Accumulator \u4e4b\u524d\uff0c\u5148\u4e86\u89e3\u4e0b\u4ec0\u4e48\u662f Merkle Tree\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/06-accumulator.md",sourceDirName:"99-concepts",slug:"/concepts/accumulator",permalink:"/starcoin-cookbook/zh/docs/concepts/accumulator",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/06-accumulator.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sparse Merkle Tree",permalink:"/starcoin-cookbook/zh/docs/concepts/smt"},next:{title:"Proof",permalink:"/starcoin-cookbook/zh/docs/concepts/proof"}},c={},s=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u8282\u70b9\u7c7b\u578b\u4ecb\u7ecd",id:"\u8282\u70b9\u7c7b\u578b\u4ecb\u7ecd",level:2},{value:"\u8282\u70b9\u7684Frozen",id:"\u8282\u70b9\u7684frozen",level:2},{value:"Leaf Index \u548c Node Index",id:"leaf-index-\u548c-node-index",level:2},{value:"Accumulator append \u8fc7\u7a0b",id:"accumulator-append-\u8fc7\u7a0b",level:2},{value:"\u65b0\u8282\u70b9\u6dfb\u52a0",id:"\u65b0\u8282\u70b9\u6dfb\u52a0",level:3},{value:"\u6839\u8282\u70b9\u7684\u8ba1\u7b97",id:"\u6839\u8282\u70b9\u7684\u8ba1\u7b97",level:3},{value:"Accumulator flush \u548c Accumulator \u5728 KvStore \u4e2d\u7684\u5b58\u50a8",id:"accumulator-flush-\u548c-accumulator-\u5728-kvstore-\u4e2d\u7684\u5b58\u50a8",level:2},{value:"\u67e5\u8be2\u64cd\u4f5c",id:"\u67e5\u8be2\u64cd\u4f5c",level:2},{value:"Accumulator \u7684\u5e42\u7b49\u6027",id:"accumulator-\u7684\u5e42\u7b49\u6027",level:2},{value:"Accumulator \u4e2dAPI\u8bf4\u660e",id:"accumulator-\u4e2dapi\u8bf4\u660e",level:2},{value:"\u521b\u5efa Accumulator",id:"\u521b\u5efa-accumulator",level:3},{value:"\u6dfb\u52a0\u65b0\u7684\u5143\u7d20",id:"\u6dfb\u52a0\u65b0\u7684\u5143\u7d20",level:3},{value:"\u4fdd\u5b58\u6811\u5230 KvStore",id:"\u4fdd\u5b58\u6811\u5230-kvstore",level:3},{value:"\u83b7\u53d6\u53f6\u5b50\u8282\u70b9",id:"\u83b7\u53d6\u53f6\u5b50\u8282\u70b9",level:3},{value:"\u83b7\u53d6proof",id:"\u83b7\u53d6proof",level:3},{value:"\u5176\u4ed6\u7410\u788e\u7ec6\u8282",id:"\u5176\u4ed6\u7410\u788e\u7ec6\u8282",level:2},{value:"append \u8fc7\u7a0b\u4e2d\u7684\u83b7\u53d6 frozen_subtree_roots",id:"append-\u8fc7\u7a0b\u4e2d\u7684\u83b7\u53d6-frozen_subtree_roots",level:3},{value:"NodeIndex \u76f8\u5173\u64cd\u4f5c",id:"nodeindex-\u76f8\u5173\u64cd\u4f5c",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],i={toc:s};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accumulator"},"Accumulator"),(0,r.kt)("p",null,"\u4ecb\u7ecd Accumulator \u4e4b\u524d\uff0c\u5148\u4e86\u89e3\u4e0b\u4ec0\u4e48\u662f ",(0,r.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/concepts/merkletree"},"Merkle Tree"),"\u3002\n\u5728 Starcoin \u4e2d\uff0cAccumulator \u53ef\u4ee5\u8ba4\u4e3a\u662f Merkle Tree \u5b58\u50a8\u5728 KvStore \u4e0a\u3002"),(0,r.kt)("h2",{id:"\u7528\u9014"},"\u7528\u9014"),(0,r.kt)("p",null,"\u8fd9\u9897\u6811\u7684\u4f5c\u7528\u4e3b\u8981\u662f\u63d0\u4f9b Block\uff0cTransaction \u7684 Merkle Proof\uff0c\u4ee5\u53ca\u901a\u8fc7\u6307\u5e8f\u5217\u53f7\u83b7\u53d6\u5bf9\u5e94\u7684 Block\uff08Transaction \u7c7b\u4f3c\uff09\u3002\n\u4e0b\u9762\u4ecb\u7ecd\u4e0b\u5728 Starcoin \u4e2d Accumulator \u7684\u4e00\u4e9b\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u8282\u70b9\u7c7b\u578b\u4ecb\u7ecd"},"\u8282\u70b9\u7c7b\u578b\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u8282\u70b9\u5206\u4e3a\u4e09\u79cd\u7c7b\u578b Leaf\uff0cInternal\uff0cEmpty\u3002\n\u8fd9\u91cc\u4ee5\u5b58\u50a8 Block \u4e3a\u4f8b\u5b50\uff08\u5b58\u50a8 Transaction\u7c7b\u4f3c\uff09\u3002\n\u56fe1\u663e\u793a\u4e86\u5076\u6570\u4e2a Block \u7ec4\u6210\u4e00\u4e2a Accumulator \u7684\u60c5\u51b5\uff08\u8fd9\u91cc\u53ea\u6709 Leaf \u548c Internal\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"even_accumulator.png",src:t(3782).Z,width:"626",height:"501"})),(0,r.kt)("p",null,"\u6700\u4e0b\u9762 Leaf \u90a3\u5c42\u7684 Hash0 \u4ee3\u8868 Block0 \u7684 Hash \u503c\uff0cHash1 \u4ee3\u8868 Block1 \u7684\u503c\uff0cHash2\uff0cHash3 \u7c7b\u4f3c\u3002\n\u8fd9\u91cc Internal01 \u7684\u5de6\u5b50\u6811\u662f Hash0\uff0c\u53f3\u5b50\u6811\u662f Hash1\u3002\nInternal 01 \u7684 Hash01 = Hash(Hash0 + Hash1)\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"+")," \u4ee3\u8868\u62fc\u63a5\u5b57\u7b26\u4e32\u3002\n\u5728 Accumulator \u4e2d Internal \u8282\u70b9\u7684 Hash \u503c\u662f\u7531\u5de6\u5b50\u6811 Hash \u503c\u548c\u53f3\u5b50\u6811 Hash \u503c\u62fc\u63a5\u540e\u518d Hash \u8ba1\u7b97\u5f97\u51fa\uff0cHash \u8ba1\u7b97\u7684\u51fd\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"sha3_256"),"\u3002\n\u8fd9\u91cc\u4ece Block0 \u5f00\u59cb\u662f\u56e0\u4e3a\u5728\u533a\u5757\u94fe\u4e2d\u6709\u521b\u4e16\u5757\uff08Genesis Block\uff09\uff0c\u6700\u4e0a\u9762\u7684\u6839\u8282\u70b9\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"Root_Hash"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"odd_accumulator_origin.png",src:t(9110).Z,width:"831",height:"546"})),(0,r.kt)("p",null,"\u56fe2\u663e\u793a\u4e86\u5947\u6570\u4e2a Block \u7ec4\u6210\u4e00\u4e2a Accumulator \u7684\u60c5\u51b5\uff0c\u5728\u56fe1\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e86 Block4\uff0c\u7531\u4e8e Block4 \u6784\u5efa Internal \u9700\u8981 Empty \u8282\u70b9\u6765\u914d\u5bf9\uff0c\u8fd9\u91cc Empty \u8282\u70b9\u5c31\u662f PlaceHolder\u3002\n\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8981\u8865\u5145\u591a\u4e2a PlaceHolder\uff0c\u8fd9\u91cc\u505a\u4e86\u4e9b\u4f18\u5316\uff0c\u7a7a\u5b50\u6811\u7528 PlaceHolder \u8868\u793a\u6765\u51cf\u5c11\u8ba1\u7b97\uff0c\u8fd9\u91cc PlaceHolder \u6709\u56fa\u5b9a\u7684 Hash \u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"*ACCUMULATOR_PLACEHOLDER_HASH"),"\uff0c\u5982\u56fe3\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"odd_accumulator.png",src:t(9275).Z,width:"711",height:"551"})),(0,r.kt)("p",null,"\u56fe3\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"(Hash(Block), Block)")," \u4f1a\u6309\u7167 Key Value \u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u5b58\u5728 KvStore \u4e2d\u3002\n\u8fd9\u91cc\u7ed9\u51fa\u4ee3\u7801\u4e2d Leaf \u548c Internal \u7684\u5b9a\u4e49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum AccumulatorNode {\n    Internal(InternalNode),\n    Leaf(LeafNode),\n    Empty,\n}\npub struct InternalNode {\n    index: NodeIndex,\n    left: HashValue,\n    right: HashValue,\n    is_frozen: bool,\n}\npub struct LeafNode {\n    index: NodeIndex,\n    hash: HashValue,\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc index \u548c is_frozen \u5728 Internal \u548c Leaf \u4e2d\u90fd\u4e0d\u53c2\u4e0e Hash \u8ba1\u7b97\uff0c NodeIndex \u4e3b\u8981\u7528\u9014\u662f Accumulator \u5b58\u50a8\u5728 KvStore \u4e2d\u8ba1\u7b97 Internal \u7528\u5230\uff0c\u540e\u9762\u4f1a\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"\u8282\u70b9\u7684frozen"},"\u8282\u70b9\u7684Frozen"),(0,r.kt)("p",null,"Merkle Tree \u662f\u5728\u5185\u5b58\u4e2d\u7684\u5f62\u5f0f, Accumulator \u9700\u8981\u628a Merkle Tree \u4fdd\u5b58\u5728 KvStore \u4e2d\u3002\n\u4e00\u79cd\u76f4\u89c2\u7684\u60f3\u6cd5\u5c31\u662f\u628a\u6240\u6709\u7684 Leaf \u8282\u70b9\u4fdd\u5b58\u4e0b\u6765\uff0c\u6bd4\u5982\u56fe3\u4e2d\uff0c\u4fdd\u5b58 Hash0\uff0cHash1\uff0c Hash2\uff0c Hash3\uff0c Hash4\uff0c\u8fd8\u9700\u8981\u4fdd\u5b58\u8fd9\u4e9b\u987a\u5e8f\u5173\u7cfb\u3002\n\u7b2c\u4e00\u6b21\u7528\u7684\u65f6\u5019\u8ba1\u7b97\u5c31\u53ef\u4ee5\u6784\u5efa Merkle Tree\uff0c\u56fe3\u4e2d\u9700\u8981\u8ba1\u7b976\u6b21\uff0c\n\u5f53 Leaf \u6570\u91cf\u6bd4\u8f83\u5927\u7684\u65f6\u5019\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"2^23"),"\u4e2a Leaf (\u5927\u6982800\u4e07\u4e2aBlock)\uff0c\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"2^23"),"\u6b21 sha3_256 \u8ba1\u7b97\uff0c\u8fd9\u4e2a\u590d\u6742\u5ea6\u662fO(N)\u3002\n\u9700\u8981\u52a0\u901f\u4e0b\u8ba1\u7b97\u7684\u8fc7\u7a0b\uff0c\u6ce8\u610f\u5230 Accumulator \u662f\u53ea\u6dfb\u52a0 Leaf \u4e0d\u4f1a\u51fa\u73b0\u5220\u9664\u548c\u66f4\u65b0Leaf\u7684\u60c5\u51b5\uff0c\n\u6bd4\u5982\u5728\u56fe3\u4e2d\uff0cHash0\uff0cHash1\uff0cHash2\uff0cHash3 \u6784\u5efa\u6210\u7684\u5b50 Accumulator \u662f Hash(Hash01 + Hash23)\uff0c \u518d\u6dfb\u52a0\u65b0\u7684 Leaf\uff0c\u4e0d\u4f1a\u4fee\u6539\u6839\u8282\u70b9 Hash(Hash01 + Hash23) \u7684 Accumulator\u3002\n\u53ef\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u5df2\u7ecf\u56fa\u5b9a\u7684\u5b50 Accumulator \u8fdb\u884c\u52a0\u901f\u8ba1\u7b97\u3002\u53ef\u4ee5\u53d1\u73b0\u56fa\u5b9a\u7684\u5b50 Accumulator \u90fd\u662f\u6ee1\u4e8c\u53c9\u6811(Full Binary Tree)\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u5f15\u5165\u4e86 Frozen \u7684\u6982\u5ff5\u3002"),(0,r.kt)("p",null,"PlaceHolder \u662f not Frozen \u7684\uff0cLeaf \u90fd\u662f Frozen \u7684\uff0cInternal \u7684 Frozen \u662f\u9012\u5f52\u5b9a\u4e49\uff0c\u662f\u6307\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u4e2d\u4e0d\u542b\u6709 PlaceHolder \u8282\u70b9\u3002\n\u4e00\u4e2a Accumulator \u4e2d\u8282\u70b9\u6570\u76ee\u6307\u6240\u6709 Frozen \u7684\u8282\u70b9,\u5728\u56fe1\u4e2d\u662f7\u4e2a\uff0c\u56fe3\u4e2d\u662f8\u4e2a\u3002\n\u4e00\u4e2a Accumulator \u53ef\u4ee5\u901a\u8fc7 Root_Hash \u548c frozen_subtree_roots \u5feb\u901f\u786e\u5b9a\u4e0b\u6765\u3002\n\u8fd9\u91cc\u5b9a\u4e49\u4e86 AccumulatorInfo\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct AccumulatorInfo {\n    /// Accumulator root hash\n    pub accumulator_root: HashValue,\n    /// Frozen subtree roots of this accumulator.\n    pub frozen_subtree_roots: Vec<HashValue>,\n    /// The total number of leaves in this accumulator.\n    pub num_leaves: u64,\n    /// The total number of nodes in this accumulator.\n    pub num_nodes: u64,\n}\n")),(0,r.kt)("p",null,"\u5728\u56fe1\u4e2d frozen_subtree_roots \u5143\u7d20\u53ea\u6709\u4e00\u4e2a\u5c31\u662f Root_Hash ( accumulator_root )\u3002\n\u56fe3\u4e2d\u67092\u4e2a\u90fd\u6807\u51fa\u6765\u4e86,\u4ed6\u4eec\u548c Root_Hash \u4e0d\u540c\u3002\n\u8fd9\u91cc frozen_subtree_roots \u6700\u591a\u53ea\u670964\u4e2a\u3002\n\u539f\u56e0\u5982\u4e0b\uff0c\u5047\u8bbe\u6709n\u4e2a\u8282\u70b9\uff0c\u5047\u8bbe ",(0,r.kt)("inlineCode",{parentName:"p"},"2^k <= n < 2^(k + 1)"),"\uff0c \u7b2c\u4e00\u4e2a frozen_subtree \u7528\u7684\u8282\u70b9\u6570\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"2^k"),"\uff0c\u7b2c\u4e8c\u4e2a\u7684 frozen_subtree \u7528\u7684\u8282\u70b9\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"2^k1"),"\uff0c\n\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"2^k1 <= (n - 2^k) < 2^(k1 + 1)"),"\uff0c \u53ef\u4ee5\u53d1\u73b0 frozen_subtree_roots \u548c n \u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e2d\u76841\u662f\u5bf9\u5e94\u7684\uff0c\u7531\u4e8e n \u5b9a\u4ee5\u4e3a64\u4f4d\u6574\u6570\uff0c\u6700\u591a\u670964\u4e2a\u8282\u70b9\u6570\u3002\nHashValue \u4f7f\u7528 sha3_256 \u8ba1\u7b97\u53608\u4e2a\u5b57\u8282\uff0c\u4e00\u4e2a AccumulatorInfo \u5360\u7684\u5185\u5b58\u6700\u5927\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"(1 + 64 + 2) * 8"),"\u4e2a\u5b57\u8282\u3002"),(0,r.kt)("h2",{id:"leaf-index-\u548c-node-index"},"Leaf Index \u548c Node Index"),(0,r.kt)("p",null,"\u5982\u56fe1\u4e2d\uff0cHash0\u3001Hash1\u3001Hash2 \u548c Hash3 \u662f Merkle Tree \u7684\u53f6\u5b50\u8282\u70b9\uff0c\u4ed6\u4eec\u5206\u522b\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"0-3")," \u7684\u53f6\u5b50\u8282\u70b9(\u8ba1\u6570\u4ece0\u5f00\u59cb)\nLeaf Index \u5c31\u662f\u4ece\u5de6\u5f00\u59cb\u53f6\u5b50\u8282\u70b9\u7684\u987a\u5e8f\u3002Node Index \u662f\u4e2d\u5e8f\u904d\u5386 Tree \u7684\u5404\u4e2a\u8282\u70b9\u7684\u987a\u5e8f\uff0cHash0\uff5eHash3 \u5bf9\u5e94\u7684 Node Index \u662f",(0,r.kt)("inlineCode",{parentName:"p"},"0,2,4,6"),"\u3002\n\u7b80\u7565\u56fe\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"     3\n    /  \\\n   /    \\\n  1      5 <-[Node Index, in order transver]\n / \\    / \\\n0   2  4   6\n\n0   1  2   3 <[Leaf Index]\n")),(0,r.kt)("p",null,"Node Index \u5728\u4ee3\u7801\u4e2d\u8868\u793a\u4e3a NodeIndex \u3002\n\u8fd9\u91cc\u4f7f\u7528\u4e2d\u5e8f\u904d\u5386\u7684\u539f\u56e0\u53ef\u80fd\u662f Accumulator \u9700\u8981\u5c06 Merkle Tree \u4fdd\u5b58\u5230 KvStore \u4e2d\uff0c\u7531\u4e8e\u4fdd\u5b58\u7684\u90fd\u662f HashValue\uff0c\u9700\u8981\u77e5\u9053 HashValue \u5728 Merkle Tree \u4e2d\u7684\u4f4d\u7f6e\n\u56fe3\u5728\u56fe1\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e00\u4e2a Hash4 \u7684\u8282\u70b9\uff0c\u4e2d\u5e8f\u904d\u5386\u60c5\u51b5\u4e0b\u5404\u4e2a\u8282\u70b9\u7684 NodeIndex \u503c\u662f\u4e0d\u53d8\u7684\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u4e0b Accumulator \u7684\u4e00\u4e9b\u64cd\u4f5c\u8fc7\u7a0b"),(0,r.kt)("h2",{id:"accumulator-append-\u8fc7\u7a0b"},"Accumulator append \u8fc7\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn append(&mut self, new_leaves: &[HashValue]) -> Result<HashValue>\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u662f\u5bf9\u5e94\u7684\u4ee3\u7801"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"accumulator_store.png",src:t(8180).Z,width:"831",height:"761"}),"\n\u6d41\u7a0b\u5206\u4e3a\u8282\u70b9\u7684\u6dfb\u52a0\u548c\u6839\u8282\u70b9\u7684\u8ba1\u7b97"),(0,r.kt)("h3",{id:"\u65b0\u8282\u70b9\u6dfb\u52a0"},"\u65b0\u8282\u70b9\u6dfb\u52a0"),(0,r.kt)("p",null,"\u5982\u56fe4\u4e2d\uff0cHash0\uff5eHash3 \u6784\u5efa\u7684 Accumulator \u7684 Root_Hash \u4e3a Hash(Internal0123)\uff0c \u73b0\u5728\u6dfb\u52a0 Hash4\uff5eHash6\u3002\n\u6dfb\u52a0 Hash4 LeafNode\uff0cHash4 \u6dfb\u52a0\u5230 to_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"to_freeze = [Hash4]"),"\uff0cHash4 \u4e3a\u5de6\u5b69\u5b50\u8282\u70b9\uff0cHash4 \u6dfb\u52a0\u5b8c\u6210\u3002\n\u6dfb\u52a0 Hash5 LeafNode\uff0cHash5 \u6dfb\u52a0\u5230 to_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"to_freeze = [Hash4, Hash5]"),"\uff0cHash5 \u4e3a\u53f3\u5b69\u5b50\u8282\u70b9\uff0c\u9700\u8981\u548c\u5176\u5144\u5f1f\u8282\u70b9( sibling )\u751f\u6210\u4e00\u4e2a Frozen \u7684 Internal 45\uff0c\n\u5e76\u4e14\u6dfb\u52a0\u5230 to_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"to_freeze = [Hash4, Hash5, Internal45]"),"\uff0c \u8fd9\u91cc\u4ea7\u751f\u4e86\u4e00\u4e2a\u67e5\u8be2 sibling \u64cd\u4f5c\uff0c\u540e\u9762\u4f1a\u4ecb\u7ecd\uff0cHash5 \u6dfb\u52a0\u5b8c\u6210\u3002\n\u6dfb\u52a0 Hash6 LeafNode\uff0cHash6 \u6dfb\u52a0\u5230 to_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"to_freeze = [Hash4, Hash5, Internal45, Hash6]"),"\uff0cHash6 \u4e3a\u4e00\u4e2a\u5de6\u5b69\u5b50\u8282\u70b9\uff0cHash6 \u6dfb\u52a0\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"\u6839\u8282\u70b9\u7684\u8ba1\u7b97"},"\u6839\u8282\u70b9\u7684\u8ba1\u7b97"),(0,r.kt)("p",null,"\u6839\u8282\u70b9\u7684\u8ba1\u7b97\u4f1a\u9700\u8981\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeIndex, HashValue")," \u7684\u6620\u5c04\uff0c\u5c31\u662f\u4e0b\u9762\u63d0\u5230 index_cache\u3002\n\u9700\u8981\u8ba1\u7b97\u4e0b\u751f\u6210\u7684\u65b0 Root_Hash \u503c\uff0cHash6 \u548c PlaceHolder \u751f\u6210 Not Frozen Node Internal67\uff0c\u6dfb\u52a0\u5230 not_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"not_freeze = [Internal67]"),"\uff0c\nInternal67 \u548c\u5176 sibling \u8282\u70b9 Internal45\uff08\u8fd9\u91cc\u4f1a\u4ea7\u751f\u67e5\u8be2\u64cd\u4f5c\uff09\u751f\u6210 Not Frozen Node Internal4567 \u6dfb\u52a0\u5230 not_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"not_freeze = [Internal67, Internal4567]"),"\uff0c\u8fd9\u91cc\u4f1a\u6709\u4e2a\u67e5\u8be2\u8282\u70b9\u64cd\u4f5c\uff0c\nInternal4567 \u548c\u5176 sibling \u8282\u70b9 Internal0123\uff08\u8fd9\u91cc\u4f1a\u4ea7\u751f\u67e5\u8be2\u64cd\u4f5c\uff09\u751f\u6210\u4e00\u4e2a Not Frozen Node Internal01234567\uff0c\n\u6dfb\u52a0\u5230 not_freeze\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"not_freeze = [Internal67, Internal4567, Internal01234567]"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Hash(Internal01234567)"),"\u662f\u65b0\u7684 Root_Hash\u3002\nStarcoin\u5b9e\u73b0\u4e2d\u4f1a\u5c06 to_freeze \u548c not_freeze \u5408\u5e76\u8d77\u6765\uff0c\u5e76\u6784\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"LruCache<NodeIndex, HashValue>"),"\uff0c\u8fd9\u4e2a\u79f0\u4e3a index_cache\uff0c\u67e5\u8be2\u4e2d\u4f1a\u7528\u5230\n\u56fe4\u4e2d NodeIndex \u7528\u84dd\u8272\u8868\u793a\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"index_cache = [(8, Hash4), (10, Hash5), (9, Hash45), (13, Hash(Internal67)), (11, Hash(Internal4567)), (7, HashInternal(Internal01234567))]"),"\u3002"),(0,r.kt)("h2",{id:"accumulator-flush-\u548c-accumulator-\u5728-kvstore-\u4e2d\u7684\u5b58\u50a8"},"Accumulator flush \u548c Accumulator \u5728 KvStore \u4e2d\u7684\u5b58\u50a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn flush(&mut self) -> Result<()> \n")),(0,r.kt)("p",null,"\u5c06 append \u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684 to_freeze \u548c not_free \u5408\u5e76\u540e\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"(Hash(Node), encode(Node))")," Key Value \u952e\u503c\u5bf9\u5f62\u5f0f\u5b58\u50a8\u5728 KvStore \u4e2d\u3002\n\u5728\u56fe4\u4e2d\u4f7f\u7528\u7684\u662f Column BLOCK_ACCUMULATOR\uff0c\u5b9e\u9645\u8fd8\u6709 Transaction \u5bf9\u5e94\u7684 Column TRANSACTION_ACCUMULATOR\uff0c\u56fe\u4e2d\u53ea\u753b\u4e86\u90e8\u5206 Leaf\uff0cInternal\u3002\n\u6ce8\u610f\u5230 Internal \u5206\u4e3a Frozen \u548c Not Frozen\uff0c\u56fe4\u4e2d Internal 67\u8fd9\u4e2a Internal \u8282\u70b9\u662f Not Frozen \u7684\uff0c\u5982\u679c\u518d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684 Leaf Hash7 \u4f1a\u53d8\u6210 Frozen\uff0c \u8fd9\u6837\u4f1a\u4fdd\u5b58\n\u4e24\u4e2a\u4e0d\u540c\u72b6\u6001\u7684 Internal67 \u5230 KvStore\u3002"),(0,r.kt)("h2",{id:"\u67e5\u8be2\u64cd\u4f5c"},"\u67e5\u8be2\u64cd\u4f5c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_node_hash_always(&mut self, index: NodeIndex) -> Result<HashValue>\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u4e2a private \u64cd\u4f5c\uff0c\u4e3b\u8981\u7528\u5728 append \u6d41\u7a0b\u4e2d\uff0c\u901a\u8fc7 NodeIndex \u67e5\u627e\u5bf9\u5e94\u7684 HashValue\u3002\nAccumulator \u5728 KvStore \u4e2d\u7684\u5b58\u50a8\u4e2d\u63d0\u5230\uff0cColumn BLOCK_ACCUMULATOR \u4fdd\u5b58\u662f\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"(Hash(Node)\uff0cencode(Node))")," Key Value \u952e\u503c\u5bf9\u5b58\u50a8\u5728 KvStore \u4e2d\uff0c\u53ea\u80fd\u4ece\u5176\u7236\u7c7b\u8282\u70b9\u4e00\u5c42\u5c42\u67e5\u627e\u3002\n\u6bd4\u5982\u67e5\u8be2 NodeIndex x0\uff08\u5047\u8bbe\u4e3a2\uff09\u7684 HashValue\uff0c\u67e5 NodeIndex x1\uff08\u5047\u8bbe\u4e3a1\uff09\u7684\u7236\u8282\u70b9\uff0c\u5982\u679c index_cache \u4e2d\u6709\uff0c\u901a\u8fc7\u5176 HashValue \u4ece KvStore \u4e2d\u83b7\u53d6\u8fd9\u4e2a Node\u3002\n\u5982\u679c index_cache \u4e2d\u6ca1\u6709\uff0c\u627e\u5176\u7236\u8282\u70b9\u7684\u7236\u8282\u70b9\uff0c\u6700\u7ec8\u80af\u5b9a\u80fd\u627e\u5230\uff08\u6700\u5dee\u7684\u60c5\u51b5\u662f\u627e\u5230 Root_Hash\uff09, \u8fd9\u4e2a\u8282\u70b9\u8bb0\u4e3a Cur_Node , \u7136\u540e\u518d\u4ece Cur_Node \u5c42\u6b21\u904d\u5386\u627e\u5230\u5b50\u5b59\u8282\u70b9\u4e2d NodeIndex \u7b49\u4e8e x0 \u7684\u8282\u70b9\u3002\n\u6d41\u7a0b\u56fe\u89c1\u56fe5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"query_index.png",src:t(2193).Z,width:"600",height:"541"})),(0,r.kt)("h2",{id:"accumulator-\u7684\u5e42\u7b49\u6027"},"Accumulator \u7684\u5e42\u7b49\u6027"),(0,r.kt)("p",null,"\u5728 Merkle Tree \u4e2d\u63d0\u5230\u8bb0\u4f4f Root_Hash \u5c31\u53ef\u4ee5\u8ba4\u4e3a\u662f\u8bb0\u4f4f\u4e86\u6574\u68f5\u6811, \u5728 Starcoin \u4e2d\uff0c\u9700\u8981\u4fdd\u8bc1 Accumulator \u662f\u5e42\u7b49\u7684\u3002\n\u6bd4\u5982\u5728\u56fe3\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u6267\u884c\u4e86 Block0-4 \u7684\u8ba1\u7b97\uff0c\u8fd9\u65f6\u5019\u53c8\u6709\u903b\u8f91\u628a Block4 \u6dfb\u52a0\u8fdb\u6765\u8ba1\u7b97\uff0c\u8fd9\u65f6\u5019\u4f1a\u4e0d\u4f1a\u51fa\u73b0\u6dfb\u52a0 Block5 \u5b9e\u9645\u662f Block4 \u7684\u903b\u8f91\uff0c\u5b9e\u9645\u4e0a\u4e0d\u4f1a\uff0c\u7531\u4e8e Block \u7684 BlockHeader \u5b58\u50a8\u4e86\u524d\u4e00\u4e2a Block \u7684 Hash \u503c\uff0c\n\u901a\u8fc7\u524d\u4e00\u4e2a Hash \u503c\u5c31\u77e5\u9053\u6574\u4e2a Accumulator \u7684 Leaf \u6570\u76ee\u4e3a4\uff0c\u5bf9\u5e94\u7684\u5b50 Accumulator \u7684 Hash \u503c\u662f Hash(Hash01 + Hash23),\u4f1a\u548c Hash(Block4) \u8ba1\u7b97\u65b0\u7684 Accumulator\uff0c\u8fd9\u90e8\u5206\u9700\u8981\u7ed3\u5408\u533a\u5757\u6267\u884c\u6765\u7406\u89e3\u3002"),(0,r.kt)("h2",{id:"accumulator-\u4e2dapi\u8bf4\u660e"},"Accumulator \u4e2dAPI\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u521b\u5efa-accumulator"},"\u521b\u5efa Accumulator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MerkleAccumulator {\n    tree: Mutex<AccumulatorTree>,\n}\n\nimpl MerkleAccumulator {\n    pub fn new_with_info(\n        acc_info: AccumulatorInfo,\n        node_store: Arc<dyn AccumulatorTreeStore>,\n    ) -> Self;\n}\n")),(0,r.kt)("p",null,"new_with_info \u901a\u8fc7 AccumulatorInfo \u521b\u5efa\u65b0\u7684 Accumulator"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u65b0\u7684\u5143\u7d20"},"\u6dfb\u52a0\u65b0\u7684\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," fn append(&self, leaves: &[HashValue]) -> Result<HashValue>\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u65b0\u7684 LeafNode\uff0c\u8fd9\u4e2a\u524d\u9762\u4ecb\u7ecd\u8fc7"),(0,r.kt)("h3",{id:"\u4fdd\u5b58\u6811\u5230-kvstore"},"\u4fdd\u5b58\u6811\u5230 KvStore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," fn flush(&self) -> Result<()>;\n")),(0,r.kt)("p",null,"\u5c06 append \u4ea7\u751f\u7684\u65b0\u5143\u7d20\u5b58\u5230 KvStore"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u53f6\u5b50\u8282\u70b9"},"\u83b7\u53d6\u53f6\u5b50\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_leaf(&self, leaf_index: u64) -> Result<Option<HashValue>>;\nfn get_leaves(&self, start_index: u64, reverse: bool, max_size: u64) -> Result<Vec<HashValue>>;\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u662f\u83b7\u53d6\u53f6\u5b50\u8282\u70b9\uff0c\u7b2c\u4e8c\u4e2a\u662f\u6279\u91cf\u83b7\u53d6\u53f6\u5b50\u8282\u70b9"),(0,r.kt)("h3",{id:"\u83b7\u53d6proof"},"\u83b7\u53d6proof"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_proof(&self, leaf_index: u64) -> Result<Option<AccumulatorProof>> {\n")),(0,r.kt)("p",null,"\u83b7\u53d6Merkle Proof\u8bc1\u660e"),(0,r.kt)("h2",{id:"\u5176\u4ed6\u7410\u788e\u7ec6\u8282"},"\u5176\u4ed6\u7410\u788e\u7ec6\u8282"),(0,r.kt)("h3",{id:"append-\u8fc7\u7a0b\u4e2d\u7684\u83b7\u53d6-frozen_subtree_roots"},"append \u8fc7\u7a0b\u4e2d\u7684\u83b7\u53d6 frozen_subtree_roots"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"FrozenSubTreeIterator::new(self.num_leaves)\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u662f\u56e0\u4e3a frozen_subtree \u548c num_leaves \u4e8c\u8fdb\u5236\u91cc\u7684\u76841\u5bf9\u5e94\uff0c \u5c31\u662f\u627e MSB \u64cd\u4f5c(most significant set bit of a u64)\uff0c\u539f\u7406\u53c2\u8003 Hackers Delight \u7684 flp \u90e8\u5206"),(0,r.kt)("h3",{id:"nodeindex-\u76f8\u5173\u64cd\u4f5c"},"NodeIndex \u76f8\u5173\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u7814\u7a76 NodeIndex \u6e90\u7801\uff0c\u8fd9\u90e8\u5206\u53ef\u4ee5\u4e0d\u770b\nNodeIndex \u63d0\u4f9b\u4e86\u4e00\u4e9b\u64cd\u4f5c\n(1)\u901a\u8fc7 LeafCount \u8ba1\u7b97\u6574\u4e2a\u6811\u9ad8\n(2)Leaf Index \u548c NodeIndex \u7684\u8f6c\u6362\n(3)\u83b7\u53d6\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811 NodeIndex\n(4)\u786e\u5b9a\u67d0\u4e2a NodeIndex \u662f\u5426\u4e3a PlaceHolder\n(5)\u83b7\u53d6\u7236\u8282\u70b9\u7684 NodeIndex\n\u8fd9\u90e8\u5206\u7ec6\u8282\u5f85\u6dfb\u52a0\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u8d44\u6e90",(0,r.kt)("a",{target:"_blank",href:t(7741).Z},"draw.io")),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668 MerkleAccumulator \u662f Starcoin \u533a\u5757\u94fe\u53e6\u4e00\u4e2a\u6838\u5fc3\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u63d0\u4f9b\u533a\u5757\u548c\u4ea4\u6613\u7684\u8bc1\u660e\u3002\u5b83\u7684\u7ed3\u6784\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MerkleAccumulator",src:t(2118).Z,width:"423",height:"244"})),(0,r.kt)("p",null,"MerkleAccumulator \u662f\u4e00\u4e2a\u53f6\u5b50\u8282\u70b9\u53ef\u4ee5\u4ece\u5de6\u5230\u53f3\u4e0d\u65ad\u589e\u52a0\uff0c\u4ece\u800c\u4e0d\u65ad\u7d2f\u52a0\u7684\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668\u3002"),(0,r.kt)("p",null,"Starcoin \u533a\u5757\u94fe\u8bbe\u8ba1\u4e86\u4e24\u4e2a\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668\uff0c\u5206\u522b\u662f\u533a\u5757\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668\u548c\u4ea4\u6613\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668\u3002\n\u4e0a\u56fe\u7ea2\u5708\u8868\u793a\u53f6\u5b50\u8282\u70b9\uff0c\u5bf9\u5e94\u533a\u5757\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668\u5c31\u662f\u6307\u533a\u5757\uff0c\u5bf9\u5e94\u4ea4\u6613\u9ed8\u514b\u5c14\u7d2f\u52a0\u5668\u5c31\u662f\u6307\u4ea4\u6613\uff1b\u84dd\u5708\u8868\u793a\u4e2d\u95f4\u8282\u70b9\u3002\n\u6240\u4ee5 Starcoin \u533a\u5757\u94fe\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u7684\u7ed9\u533a\u5757\u6216\u8005\u4ea4\u6613\u63d0\u4f9b\u8bc1\u660e\uff0c\u4f8b\u5982\uff0c\u4e0a\u56fe\u4e2d\u53f6\u5b50\u8282\u70b9 B \u7684 Proof \u662f CAD\u3002"))}d.isMDXComponent=!0},7741:function(e,n,t){n.Z=t.p+"assets/files/accumulator-98edda2c59e2a0b51e6167b0cc15e854.drawio"},8180:function(e,n,t){n.Z=t.p+"assets/images/accumulator_store-43d4715401ff80b8d3d9591ae241d2f7.png"},3782:function(e,n,t){n.Z=t.p+"assets/images/even_accumulator-1e65bd4c8c5631c0762330cf13778014.png"},9275:function(e,n,t){n.Z=t.p+"assets/images/odd_accumulator-7608b4d1d8ac2f8e44ab1637feb1f920.png"},9110:function(e,n,t){n.Z=t.p+"assets/images/odd_accumulator_origin-923bb20aba3c4082cb67f517eae86ef0.png"},2193:function(e,n,t){n.Z=t.p+"assets/images/query_index-7717e571607d64a2671279259bb9ab26.png"},2118:function(e,n,t){n.Z=t.p+"assets/images/Proof-82521a5ffc5075ab9c39471894b506e0.png"}}]);