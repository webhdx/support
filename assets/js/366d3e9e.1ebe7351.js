"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[384],{1820:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(4848),t=o(8453);const s={},r="Installation guide",a={id:"gc/picoboot/installation-guide",title:"Installation guide",description:"People have a tendency to overestimate their skills after watching tutorial videos where everything seems easy. Please practice soldering on some scrap electronics before attempting PicoBoot installation.",source:"@site/docs/gc/picoboot/installation-guide.md",sourceDirName:"gc/picoboot",slug:"/gc/picoboot/installation-guide",permalink:"/gc/picoboot/installation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/picoboot/installation-guide.md",tags:[],version:"current",lastUpdatedBy:"Maciej Kobus",lastUpdatedAt:1723385375e3,frontMatter:{},sidebar:"MainSidebar",previous:{title:"PicoBoot",permalink:"/gc/picoboot/"},next:{title:"FAQ",permalink:"/gc/picoboot/faq"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Flashing Raspberry Pi Pico board",id:"flashing-raspberry-pi-pico-board",level:2},{value:"Preparing SD card",id:"preparing-sd-card",level:2},{value:"Hardware installation",id:"hardware-installation",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"installation-guide",children:"Installation guide"})}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"People have a tendency to overestimate their skills after watching tutorial videos where everything seems easy. Please practice soldering on some scrap electronics before attempting PicoBoot installation."})}),"\n",(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(i.p,{children:["You obviously need a soldering iron, soldering wire, flux. For the wires I recommend 26-28 AWG gauge. A good recommended soldering station is T12 (",(0,n.jsx)(i.a,{href:"https://amzn.to/3bgBbOW",children:"Amazon"}),", ",(0,n.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DEiTBWJ",children:"AliExpress"}),"). It has Voultar's seal of approval for installing many console mods!"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Soldering iron"}),"\n",(0,n.jsx)(i.li,{children:'Soldering wire, preferably lead based "Sn60Pb40"'}),"\n",(0,n.jsxs)(i.li,{children:["Raspberry Pi Pico (",(0,n.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DmWBvwb",children:"AliExpress"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["SD card adapter (choose one):","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["SD Gecko or WiiSD (",(0,n.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_Dm43n6J",children:"AliExpress"}),"), GC2SD (",(0,n.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DCGkoQf",children:"AliExpress"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["SD2SP2 (",(0,n.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DCQ6XUf",children:"AliExpress"}),"). Get new ",(0,n.jsx)(i.strong,{children:"v2.0"})," version, it's faster."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"FAT32 formatted SD card"}),"\n",(0,n.jsxs)(i.li,{children:["Good quality wires, 26-28 AWG gauge (",(0,n.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DldVJQr",children:"AliExpress"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Links above are affiliated and I get a small commission with no additional cost for you. Thanks to everyone who used links above \ud83d\ude4f"}),"\n",(0,n.jsx)(i.h2,{id:"flashing-raspberry-pi-pico-board",children:"Flashing Raspberry Pi Pico board"}),"\n",(0,n.jsxs)(i.p,{children:["Go to ",(0,n.jsx)(i.a,{href:"https://github.com/webhdx/PicoBoot/releases/latest",children:"the latest release page"})," and download ",(0,n.jsx)(i.code,{children:"picoboot_full.uf2"})," file. Now connect Raspberry Pi Pico board to your computer while holding down ",(0,n.jsx)(i.code,{children:"BOOTSEL"})," button. If it's been done correctly you'll see ",(0,n.jsx)(i.code,{children:"RPI-RP2"})," mass storage device show up. Drag and drop ",(0,n.jsx)(i.code,{children:"picoboot_full.uf2"})," file to that device. It'll automatically eject and green LED will light up if it was programmed correctly. Unplug USB cable from Pico and proceed with hardware installation."]}),"\n",(0,n.jsx)(i.h2,{id:"preparing-sd-card",children:"Preparing SD card"}),"\n",(0,n.jsxs)(i.p,{children:["Format your SD card to FAT32 or exFAT. Download the latest Swiss release from ",(0,n.jsx)(i.a,{href:"https://github.com/emukidid/swiss-gc/releases/latest",children:"here"})," and grab ",(0,n.jsx)(i.code,{children:"swiss_rXXXX.dol"})," file, rename it to ",(0,n.jsx)(i.code,{children:"ipl.dol"})," and copy to the root of your SD card."]}),"\n",(0,n.jsx)(i.h2,{id:"hardware-installation",children:"Hardware installation"}),"\n",(0,n.jsx)(i.admonition,{title:"Wiring change",type:"info",children:(0,n.jsxs)(i.p,{children:["Prior to PicoBoot v0.4, wiring was slightly different and most videos available online cover the old wiring method. You no longer need to bridge pins ",(0,n.jsx)(i.strong,{children:"GP6 and GP7"}),". If you are making fresh PicoBoot installation please follow new wiring diagram. If you are updating from older firmware, you don't have to change the wiring at all as new firmware is backwards compatible."]})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(9311).A+"",children:(0,n.jsx)(i.img,{alt:"Wiring diagram",src:o(9591).A+"",width:"3508",height:"2480"})})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Install PicoBoot on the fan assembly or behind front controller plate."}),"\n",(0,n.jsx)(i.li,{children:"Use official Raspberry Pi Pico (W) boards only."}),"\n",(0,n.jsx)(i.li,{children:"Pay attention to the wires! 26 AWG stranded silicone wires are my best recommendation. This is very important."}),"\n",(0,n.jsx)(i.li,{children:"To remove the heatsink easily, warm up the console for 10-15 minutes just by playing some game. Once it's up to the temperature, the heatsink should come off much easioer. You can twist it back and forth a few times to make thermal pads loosen up. Do not use prying tools. Be careful to not knock off any components from the board, especially DA15 component seems to be often ripped out."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9311:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/files/wiring_diagram-51d6b25be6c8eabae6af0ab58ffc2ac7.jpg"},9591:(e,i,o)=>{o.d(i,{A:()=>n});const n=o.p+"assets/images/wiring_diagram-51d6b25be6c8eabae6af0ab58ffc2ac7.jpg"},8453:(e,i,o)=>{o.d(i,{R:()=>r,x:()=>a});var n=o(6540);const t={},s=n.createContext(t);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);