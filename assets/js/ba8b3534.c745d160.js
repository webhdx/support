"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[815],{8032:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(6540);var a=t(3855),l=t(7006),s=t(4848);function o(e){let{pluginId:n,pluginInstanceContent:t}=e;return(0,s.jsxs)("section",{style:{marginBottom:30},children:[(0,s.jsx)("code",{children:n}),(0,s.jsx)(l.A,{src:t,collapseDepth:2})]})}function r(e){let{pluginName:n,pluginContent:t}=e;return(0,s.jsxs)("section",{style:{marginBottom:60},children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("div",{children:Object.entries(t).filter((e=>{let[,n]=e;return!!n})).map((e=>{let[n,t]=e;return(0,s.jsx)(o,{pluginId:n,pluginInstanceContent:t},n)}))})]})}function u(e){let{allContent:n}=e;return(0,s.jsxs)(a.A,{children:[(0,s.jsx)("h2",{children:"Plugin content"}),(0,s.jsx)("div",{children:Object.entries(n).filter((e=>{let[,n]=e;return Object.values(n).some((e=>!!e))})).map((e=>{let[n,t]=e;return(0,s.jsx)(r,{pluginName:n,pluginContent:t},n)}))})]})}},7006:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,u=e=>"string"==typeof e||e instanceof String,c=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const p=()=>d++;function m(e){let{field:n,value:t,data:l,lastElement:s,openBracket:o,closeBracket:r,level:u,style:c,shouldExpandNode:i}=e;const d=(0,a.useRef)(!1),[m,h,_]=function(e){const[n,t]=(0,a.useState)(e());return[n,()=>t((e=>!e)),t]}((()=>i(u,t,n)));(0,a.useEffect)((()=>{d.current?_(i(u,t,n)):d.current=!0}),[i]);const v=m?c.collapseIcon:c.expandIcon,x=m?"collapse JSON":"expand JSON",f=function(){const e=(0,a.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${p()}:`),e.current}(),g=u+1,E=l.length-1,j=e=>{" "===e.key&&h()};return(0,a.createElement)("div",{className:c.basicChildStyle,role:"list"},(0,a.createElement)("span",{className:v,onClick:h,onKeyDown:j,role:"button",tabIndex:0,"aria-label":x,"aria-expanded":m,"aria-controls":m?f:void 0}),n&&(0,a.createElement)("span",{className:c.label},n,":"),(0,a.createElement)("span",{className:c.punctuation},o),m?(0,a.createElement)("div",{id:f},l.map(((e,n)=>(0,a.createElement)(b,{key:e[0]||n,field:e[0],value:e[1],style:c,lastElement:n===E,level:g,shouldExpandNode:i})))):(0,a.createElement)("span",{className:c.collapsedContent,onClick:h,onKeyDown:j,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":x,"aria-expanded":m}),(0,a.createElement)("span",{className:c.punctuation},r),!s&&(0,a.createElement)("span",{className:c.punctuation},","))}function h(e){let{field:n,value:t,style:a,lastElement:l,shouldExpandNode:s,level:o}=e;return m({field:n,value:t,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:a,shouldExpandNode:s,data:Object.keys(t).map((e=>[e,t[e]]))})}function _(e){let{field:n,value:t,style:a,lastElement:l,level:s,shouldExpandNode:o}=e;return m({field:n,value:t,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:a,shouldExpandNode:o,data:t.map((e=>[void 0,e]))})}function v(e){let{field:n,value:t,style:c,lastElement:i}=e,d=t,p=c.otherValue;return null===t?(d="null",p=c.nullValue):void 0===t?(d="undefined",p=c.undefinedValue):u(t)?(d=c.noQuotesForStringValues?t:`"${t}"`,p=c.stringValue):l(t)?(d=t?"true":"false",p=c.booleanValue):s(t)?(d=t.toString(),p=c.numberValue):o(t)?(d=`${t.toString()}n`,p=c.numberValue):d=r(t)?t.toISOString():t.toString(),""===n&&(n='""'),(0,a.createElement)("div",{className:c.basicChildStyle,role:"listitem"},n&&(0,a.createElement)("span",{className:c.label},n,":"),(0,a.createElement)("span",{className:p},d),!i&&(0,a.createElement)("span",{className:c.punctuation},","))}function b(e){const n=e.value;return c(n)?(0,a.createElement)(_,Object.assign({},e)):i(n)&&!r(n)?(0,a.createElement)(h,Object.assign({},e)):(0,a.createElement)(v,Object.assign({},e))}var x="_2bkNM";const f={container:"_2IvMF _GzYRV",basicChildStyle:x,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},g=()=>!0,E=e=>{let{data:n,style:t=f,shouldExpandNode:l=g}=e;return(0,a.createElement)("div",{className:t.container},(0,a.createElement)(b,{value:n,style:t,lastElement:!0,level:0,shouldExpandNode:l}))},j="containerParaiso_cQJv",y="basicElementParaiso_QZsA",N="labelParaiso_wRN4",V="nullValueParaiso_AoA7",k="undefinedValueParaiso_FhTI",I="stringValueParaiso_V3BI",C="booleanValueParaiso_DtTx",S="numberValueParaiso_QJS7",P="otherValueParaiso_LEJn",A="punctuationParaiso_IgdH",O="expandIconParaiso_FXv1",B="collapseIconParaiso_vUhq",F="collapseContentParaiso_r7rr";var D=t(4848);const J={container:j,basicChildStyle:y,label:N,nullValue:V,undefinedValue:k,stringValue:I,booleanValue:C,numberValue:S,otherValue:P,punctuation:A,collapseIcon:B,expandIcon:O,collapsedContent:F};function w(e){let{src:n,collapseDepth:t}=e;return(0,D.jsx)(E,{data:n,shouldExpandNode:(e,n)=>Array.isArray(n)?n.length<5:void 0!==t&&e<t,style:J})}},3855:(e,n,t)=>{t.d(n,{A:()=>u});t(6540);var a=t(1141),l=t(4783);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=t(4848);function r(e){let{to:n,children:t}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:n,exact:!0,activeStyle:{backgroundColor:"#363739"},children:t})}function u(e){let{children:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:n})]})]})}}}]);