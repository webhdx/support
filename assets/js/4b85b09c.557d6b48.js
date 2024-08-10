"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[502],{4909:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var n=i(4848),r=i(8453);const t={sidebar_position:2},c="Compiling PicoBoot firmware",s={id:"gc/picoboot/compiling-firmware",title:"Compiling PicoBoot firmware",description:"\u2757 Make sure your Raspberry Pi Pico build environment is set up on your machine.",source:"@site/docs/gc/picoboot/compiling-firmware.md",sourceDirName:"gc/picoboot",slug:"/gc/picoboot/compiling-firmware",permalink:"/gc/picoboot/compiling-firmware",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/picoboot/compiling-firmware.md",tags:[],version:"current",lastUpdatedBy:"Maciej Kobus",lastUpdatedAt:1723298697e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"MainSidebar",previous:{title:"Update PicoBoot",permalink:"/gc/picoboot/update-picoboot"}},a={},l=[];function d(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"compiling-picoboot-firmware",children:"Compiling PicoBoot firmware"})}),"\n",(0,n.jsx)(o.p,{children:"\u2757 Make sure your Raspberry Pi Pico build environment is set up on your machine."}),"\n",(0,n.jsx)(o.p,{children:"Build Makefile and all required build scripts:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"# cmake .\n"})}),"\n",(0,n.jsx)(o.p,{children:"Then grab any DOL file you'd like to boot and run processing script:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"# ./process_ipl.py iplboot.dol ipl.h\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Do not change ",(0,n.jsx)(o.code,{children:"ipl.h"})," output file name."]}),"\n",(0,n.jsxs)(o.p,{children:["Once it's ready and ",(0,n.jsx)(o.code,{children:"ipl.h"})," file has been created you can build the firmware:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"# make\n"})}),"\n",(0,n.jsxs)(o.p,{children:["If everything worked you should see new file ",(0,n.jsx)(o.code,{children:"picoboot.uf2"})," created in the main project directory. Now hold ",(0,n.jsx)(o.code,{children:"BOOTSEL"})," button on Raspberry Pi Pico and connect USB cable. New mass storage device will appear. Copy ",(0,n.jsx)(o.code,{children:"picoboot.uf2"})," file to ",(0,n.jsx)(o.code,{children:"RPI-RP2"})," device. Once it's done it'll automatically eject itself. Disconnect the cable and you're all done."]})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,i)=>{i.d(o,{R:()=>c,x:()=>s});var n=i(6540);const r={},t=n.createContext(r);function c(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);