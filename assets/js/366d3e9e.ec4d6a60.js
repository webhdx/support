"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[384],{1820:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=o(4848),n=o(8453);const r={},s="Installation guide",a={id:"gc/picoboot/installation-guide",title:"Installation guide",description:"0. Word of caution",source:"@site/docs/gc/picoboot/installation-guide.md",sourceDirName:"gc/picoboot",slug:"/gc/picoboot/installation-guide",permalink:"/gc/picoboot/installation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/picoboot/installation-guide.md",tags:[],version:"current",lastUpdatedBy:"Maciej Kobus",lastUpdatedAt:1723298697e3,frontMatter:{},sidebar:"MainSidebar",previous:{title:"PicoBoot",permalink:"/gc/picoboot/"},next:{title:"FAQ",permalink:"/gc/picoboot/faq"}},l={},c=[{value:"0. Word of caution",id:"0-word-of-caution",level:2},{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Flashing Raspberry Pi Pico board",id:"2-flashing-raspberry-pi-pico-board",level:2},{value:"3. Preparing SD card",id:"3-preparing-sd-card",level:2},{value:"4. Hardware installation",id:"4-hardware-installation",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"installation-guide",children:"Installation guide"})}),"\n",(0,t.jsx)(i.h2,{id:"0-word-of-caution",children:"0. Word of caution"}),"\n",(0,t.jsx)(i.p,{children:"There are a lot of botched installation pictures all over the internet. It became ridiculous at that point. Please don't attempt the installation until you have enough soldering experience. You won't be able to magically do it after watching one video on YouTube. It requires actual practice! Try on some scrap electronics first."}),"\n",(0,t.jsx)(i.h2,{id:"1-prerequisites",children:"1. Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["You obviously need a soldering iron, soldering wire, flux and 26-28 AWG wires. I recommend T12 soldering station (",(0,t.jsx)(i.a,{href:"https://amzn.to/3bgBbOW",children:"Amazon"}),", ",(0,t.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DEiTBWJ",children:"AliExpress"}),")."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Raspberry Pi Pico (",(0,t.jsx)(i.a,{href:"https://amzn.to/3JbIsMw",children:"Amazon"}),", ",(0,t.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DmWBvwb",children:"AliExpress"}),")"]}),"\n",(0,t.jsxs)(i.li,{children:["SD Gecko/WiiSD (",(0,t.jsx)(i.a,{href:"https://amzn.to/3cPCEMs",children:"Amazon"}),", ",(0,t.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_Dm43n6J",children:"AliExpress"}),") or SD2SP2 (",(0,t.jsx)(i.a,{href:"https://amzn.to/3I1cCSl",children:"Amazon"}),", ",(0,t.jsx)(i.a,{href:"https://amzn.to/3PNamBe",children:"AliExpress"}),")"]}),"\n",(0,t.jsx)(i.li,{children:"FAT32 or exFAT formatted SD card"}),"\n",(0,t.jsxs)(i.li,{children:["Good quality wires, 26-28 AWG (",(0,t.jsx)(i.a,{href:"https://amzn.to/3w6jvwQ",children:"Amazon"}),", ",(0,t.jsx)(i.a,{href:"https://s.click.aliexpress.com/e/_DldVJQr",children:"AliExpress"}),")"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Links above are affiliate and I get small commission \ud83d\udcb5 if you buy these products. Thanks to everyone who used links above \ud83d\ude4f"}),"\n",(0,t.jsx)(i.h2,{id:"2-flashing-raspberry-pi-pico-board",children:"2. Flashing Raspberry Pi Pico board"}),"\n",(0,t.jsxs)(i.p,{children:["Go to ",(0,t.jsx)(i.a,{href:"https://github.com/webhdx/PicoBoot/releases/latest",children:"the latest release page"})," and download ",(0,t.jsx)(i.code,{children:"picoboot.uf2"})," file. Now connect Raspberry Pi Pico board to your computer while holding ",(0,t.jsx)(i.code,{children:"BOOTSEL"})," button pressed. If it's been done correctly you'll see ",(0,t.jsx)(i.code,{children:"RPI-RP2"})," mass storage device show up. Drag and drop ",(0,t.jsx)(i.code,{children:"picoboot.uf2"})," file to that device. It'll automatically eject and green LED will light up if it was programmed correctly. Unplug USB cable from Pico and proceed with hardware installation."]}),"\n",(0,t.jsx)(i.h2,{id:"3-preparing-sd-card",children:"3. Preparing SD card"}),"\n",(0,t.jsxs)(i.p,{children:["Format your SD card to FAT32 or exFAT. Download the latest Swiss release from ",(0,t.jsx)(i.a,{href:"https://github.com/emukidid/swiss-gc/releases/latest",children:"here"})," and grab ",(0,t.jsx)(i.code,{children:"swiss_rXXXX.dol"})," file, rename it to ",(0,t.jsx)(i.code,{children:"ipl.dol"})," and copy to the root of your SD card."]}),"\n",(0,t.jsx)(i.h2,{id:"4-hardware-installation",children:"4. Hardware installation"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Wiring diagram",src:o(9591).A+"",width:"3508",height:"2480"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Install PicoBoot on the fan assembly, behind front controller plate. Any other location like Serial Port 1 slot is not recommended and won't work reliably."}),"\n",(0,t.jsx)(i.li,{children:"Use only official Raspberry Pi Pico/Pico W boards. Alternative boards are not supported."}),"\n",(0,t.jsx)(i.li,{children:"Pay attention to the wires you're using! 26 AWG stranded silicone wires are my best recommendation. This is very important and using wrong type of cables caused many people to pull their hair out."}),"\n",(0,t.jsx)(i.li,{children:"To remove the heatsink easily, run the console for 10-15 minutes. Once it's heated up, the heatsink should come off without using excessive force. You can twist it back and forth a few times to make thermal pads loosen up. Do not use ANY prying tools. Use your hands and be gentle. Be careful to not knock off any components from the board, especially DA15 which seems to be often ripped during heatsink removal."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9591:(e,i,o)=>{o.d(i,{A:()=>t});const t=o.p+"assets/images/wiring_diagram-62715e1549b7e8e2aeed7fb340744b30.jpg"},8453:(e,i,o)=>{o.d(i,{R:()=>s,x:()=>a});var t=o(6540);const n={},r=t.createContext(n);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);