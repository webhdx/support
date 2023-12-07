"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[747],{5127:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(5893),n=t(1151);const s={},r="Troubleshooting",a={id:"gc/picoboot/troubleshooting",title:"Troubleshooting",description:"My console boots to vanilla GC menu",source:"@site/docs/gc/picoboot/troubleshooting.md",sourceDirName:"gc/picoboot",slug:"/gc/picoboot/troubleshooting",permalink:"/gc/picoboot/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/picoboot/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"MainSidebar",previous:{title:"Installation guide",permalink:"/gc/picoboot/installation-guide"},next:{title:"Update PicoBoot",permalink:"/gc/picoboot/update-picoboot"}},l={},h=[{value:"My console boots to vanilla GC menu",id:"my-console-boots-to-vanilla-gc-menu",level:2},{value:"Orange light is on but it doesn&#39;t display anything on the screen",id:"orange-light-is-on-but-it-doesnt-display-anything-on-the-screen",level:2},{value:"Other possible solutions:",id:"other-possible-solutions",level:4},{value:"Power light comes off shortly after hitting the power button",id:"power-light-comes-off-shortly-after-hitting-the-power-button",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(o.h2,{id:"my-console-boots-to-vanilla-gc-menu",children:"My console boots to vanilla GC menu"}),"\n",(0,i.jsx)(o.p,{children:'In most cases this suggests there are issues with your SD card setup. Many people experienced this with SD2SP2 adapters which are very often terrible quality. I suggest trying different SD2SP2 adapter, preferably sideloading one (so called "GB Player compatible") which are, in my experience, more reliable. Getting one of memory card form factor adapters (SD Gecko, WiiSD) is also a good idea. These adapters pretty much always work. Also this is the adapter you want to get if you are using DOL-101 model.'}),"\n",(0,i.jsxs)(o.p,{children:["Starting with ",(0,i.jsx)(o.a,{href:"https://github.com/webhdx/PicoBoot/releases/tag/v0.2",children:"PicoBoot v0.2"})," release you can hold D-Pad Down during boot to see debug output from iplboot. You should see similar output as shown below:"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"IPLBoot debug output",src:t(2366).Z+"",width:"2784",height:"1664"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"Mounted GAMECUBE as sda\nReading /ipl.dol\n"})}),"\n",(0,i.jsxs)(o.p,{children:["This means it properly detected my memory card named GAMECUBE in Memory Card Slot A, which is true because I've used SD Gecko adapter. If you don't see similar message it means your card couldn't be detected, you've used wrong file system (FAT32 is recommended) or there is no ",(0,i.jsx)(o.code,{children:"ipl.dol"})," file on the memory card."]}),"\n",(0,i.jsx)(o.h2,{id:"orange-light-is-on-but-it-doesnt-display-anything-on-the-screen",children:"Orange light is on but it doesn't display anything on the screen"}),"\n",(0,i.jsx)(o.p,{children:"First rule out any shorts between adjacent points. It's also common for GP4 and GP6&7 short to the heatsink if you soldered wires over U10 chip."}),"\n",(0,i.jsx)(o.p,{children:"If you are 100% sure your soldering is okay and there are no shorts, you are probably experiencing interference introduced to data lines because of the wires length. There is a golden rule: use as short wires as possible. 10 centimeters (~4 inches) is what I'd consider as a maximum recommended length. The type of wire is also very important. Use 26-28 AWG stranded wires. Single core or thick wires can easily break or in worst case rip pads from the motherboard if you put too much stress on them. If that happens it's a game over for your console and it's beyond fixable at that point."}),"\n",(0,i.jsx)(o.p,{children:"PicoBoot placement also plays a huge role in reliability - install it near the fan, it's guaranteed to work in that spot. Any other placement is not guaranteed to work, especially placing PicoBoot in Serial Port 1 slot as it's confirmed to be unreliable."}),"\n",(0,i.jsx)(o.h4,{id:"other-possible-solutions",children:"Other possible solutions:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Try different power supply, ref. ",(0,i.jsx)(o.a,{href:"https://github.com/webhdx/PicoBoot/issues/32",children:"https://github.com/webhdx/PicoBoot/issues/32"})]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"power-light-comes-off-shortly-after-hitting-the-power-button",children:"Power light comes off shortly after hitting the power button"}),"\n",(0,i.jsx)(o.p,{children:"This indicates shorted power line. Check your soldering and make sure wires are not touching any other point than the one mentioned in the diagram. Please be careful, there is 12V power line on the SP1 connector where you need to solder 3 wires. It's possible to short it to data lines and fry CPU."})]})}function d(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2366:(e,o,t)=>{t.d(o,{Z:()=>i});const i=t.p+"assets/images/iplboot_debug_output-6410fa6cd5a237e432ea7b80f28da878.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>r});var i=t(7294);const n={},s=i.createContext(n);function r(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);