"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[491],{600:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var n=t(4848),i=t(8453);const c={},r="Update PicoBoot",s={id:"gc/picoboot/update-picoboot",title:"Update PicoBoot",description:"\u2757 In order to update PicoBoot you need a microUSB cable and physical access to the Raspberry Pico board inside your console.",source:"@site/docs/gc/picoboot/update-picoboot.md",sourceDirName:"gc/picoboot",slug:"/gc/picoboot/update-picoboot",permalink:"/gc/picoboot/update-picoboot",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/picoboot/update-picoboot.md",tags:[],version:"current",frontMatter:{},sidebar:"MainSidebar",previous:{title:"Troubleshooting",permalink:"/gc/picoboot/troubleshooting"}},d={},a=[];function l(o){const e={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"update-picoboot",children:"Update PicoBoot"}),"\n",(0,n.jsx)(e.p,{children:"\u2757 In order to update PicoBoot you need a microUSB cable and physical access to the Raspberry Pico board inside your console."}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Grab the latest ",(0,n.jsx)(e.code,{children:"picoboot.uf"})," file from ",(0,n.jsx)(e.a,{href:"https://github.com/webhdx/PicoBoot/releases/latest",children:"Releases page"})]}),"\n",(0,n.jsxs)(e.li,{children:["Hold down ",(0,n.jsx)(e.code,{children:"BOOTSEL"})," button on Raspberry Pi Pico board and connect USB cable to our computer."]}),"\n",(0,n.jsx)(e.li,{children:"A new mass storage device will appear."}),"\n",(0,n.jsxs)(e.li,{children:["Copy ",(0,n.jsx)(e.code,{children:"picoboot.uf2"})," file onto that device."]}),"\n",(0,n.jsx)(e.li,{children:"It will automatically eject itself once it finishes writing the firmware."}),"\n",(0,n.jsx)(e.li,{children:"Disconnect the USB cable and test your console."}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u2757 ",(0,n.jsx)(e.strong,{children:"Important"})," \u2757  Due to current PicoBoot wiring method you should desolder 3.3V wire for the time of update. This is done to prevent supplying 3.3V to the console which results in overloading power regulator on Pico board. It'll get very hot if you don't desolder the wire. If you do it quickly enough it shouldn't do any harm to the Pico but it's recommended to just desolder the wire and resolder it once you're done updating."]})]})}function p(o={}){const{wrapper:e}={...(0,i.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(l,{...o})}):l(o)}},8453:(o,e,t)=>{t.d(e,{R:()=>r,x:()=>s});var n=t(6540);const i={},c=n.createContext(i);function r(o){const e=n.useContext(c);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function s(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:r(o.components),n.createElement(c.Provider,{value:e},o.children)}}}]);