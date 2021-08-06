(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8280],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return l},mdx:function(){return v},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){return function(t){var n=m(t.components);return r.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(n),l=a,f=d["".concat(i,".").concat(l)]||d[l]||u[l]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70951:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(2784),n(3905)),i=["components"],c={id:"javascript",title:"Plain JavaScript"},s={unversionedId:"javascript",id:"javascript",isDocsHomePage:!1,title:"Plain JavaScript",description:"Since Remotion 1.3, you can opt out of Typescript and it's type checking advantages in Remotion. Continue at your own risk.",source:"@site/docs/jsx-support.md",sourceDirName:".",slug:"/javascript",permalink:"/docs/javascript",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/jsx-support.md",version:"current",frontMatter:{id:"javascript",title:"Plain JavaScript"},sidebar:"someSidebar",previous:{title:"<Img> and <IFrame> tags",permalink:"/docs/use-img-and-iframe"},next:{title:"Data fetching",permalink:"/docs/data-fetching"}},p=[{value:"Opting out of Typescript",id:"opting-out-of-typescript",children:[]},{value:"Upgrading",id:"upgrading",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.default)(e,i);return(0,o.mdx)("wrapper",(0,r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Since Remotion 1.3, you can opt out of Typescript and it's type checking advantages in Remotion. Continue at your own risk."),(0,o.mdx)("h2",{id:"opting-out-of-typescript"},"Opting out of Typescript"),(0,o.mdx)("p",null,"You may import ",(0,o.mdx)("inlineCode",{parentName:"p"},".js")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},".jsx")," files as normal. If you would like to completely move to JS, rename ",(0,o.mdx)("inlineCode",{parentName:"p"},"index.tsx")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Video.tsx")," so they have a ",(0,o.mdx)("inlineCode",{parentName:"p"},".jsx")," file extension. Remove types such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"React.FC")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"SpringConfig"),"."),(0,o.mdx)("h2",{id:"upgrading"},"Upgrading"),(0,o.mdx)("p",null,"If you upgrade from Remotion 1.2 or older, consider changing the ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm test")," command to also include JavaScript files, and to remove the ",(0,o.mdx)("inlineCode",{parentName:"p"},"tsc")," command:"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"diff"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'-  "test": "eslint src --ext ts,tsx && tsc"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+  "test": "eslint src --ext ts,tsx,js,jsx"'))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"diff"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'-  "test": "eslint src --ext ts,tsx && tsc"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+  "test": "eslint src --ext ts,tsx,js,jsx"')))))),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/webpack"},"Custom Webpack config")," for more advanced tweaking")))}m.isMDXComponent=!0}}]);