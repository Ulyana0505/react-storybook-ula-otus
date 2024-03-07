/*! For license information please see components-Paragraph-stories.73182a41.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_storybook_ula_otus=self.webpackChunkreact_storybook_ula_otus||[]).push([[417],{"./src/components/Paragraph.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,Quote:()=>Quote,SemiBold:()=>SemiBold,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Paragraph_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph({style,children}){return"normal"===style?(0,jsx_runtime.jsx)("p",{children}):"quote"===style?(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("q",{children})}):"semi-bold"===style?(0,jsx_runtime.jsx)("p",{style:{fontWeight:"600"},children}):void 0}try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"quote"'},{value:'"semi-bold"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}const Paragraph_stories={title:"Paragraph",component:Paragraph},Normal=()=>(0,jsx_runtime.jsx)(Paragraph,{style:"normal",children:"Просто текст."});Normal.displayName="Normal";const Quote=()=>(0,jsx_runtime.jsx)(Paragraph,{style:"quote",children:"Просто цитата."});Quote.displayName="Quote";const SemiBold=()=>(0,jsx_runtime.jsx)(Paragraph,{style:"semi-bold",children:"Полу жирный текст."});SemiBold.displayName="SemiBold",Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:'() => <Paragraph style={"normal"}>Просто текст.</Paragraph>',...Normal.parameters?.docs?.source}}},Quote.parameters={...Quote.parameters,docs:{...Quote.parameters?.docs,source:{originalSource:'() => <Paragraph style={"quote"}>Просто цитата.</Paragraph>',...Quote.parameters?.docs?.source}}},SemiBold.parameters={...SemiBold.parameters,docs:{...SemiBold.parameters?.docs,source:{originalSource:'() => <Paragraph style={"semi-bold"}>Полу жирный текст.</Paragraph>',...SemiBold.parameters?.docs?.source}}};const __namedExportsOrder=["Normal","Quote","SemiBold"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);