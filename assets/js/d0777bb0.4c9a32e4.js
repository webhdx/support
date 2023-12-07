"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[290],{2458:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=i(5893),o=i(1151),s=i(9965),r=i(4996);const a={},l="User Manual",d={id:"gc/m2loader/user-manual",title:"User Manual",description:"Congratulations on your purchase of the M.2 Loader, M.2 SATA SSD adapter designed for use with the Nintendo GameCube. This device is preassembled and ready to use, offering enhanced storage capabilities and a seamless gaming experience. Please follow the instructions below.",source:"@site/docs/gc/m2loader/user-manual.md",sourceDirName:"gc/m2loader",slug:"/gc/m2loader/user-manual",permalink:"/gc/m2loader/user-manual",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/m2loader/user-manual.md",tags:[],version:"current",frontMatter:{},sidebar:"MainSidebar",previous:{title:"index",permalink:"/gc/m2loader/"},next:{title:"SSD Compatibility List",permalink:"/gc/m2loader/ssd-compatibility-list"}},c={},u=[{value:"Requirement",id:"requirement",level:2},{value:"Preparing SSD",id:"preparing-ssd",level:2},{value:"Installing SSD",id:"installing-ssd",level:2},{value:"Connecting M.2 Loader",id:"connecting-m2-loader",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"user-manual",children:"User Manual"}),"\n",(0,n.jsx)(t.p,{children:"Congratulations on your purchase of the M.2 Loader, M.2 SATA SSD adapter designed for use with the Nintendo GameCube. This device is preassembled and ready to use, offering enhanced storage capabilities and a seamless gaming experience. Please follow the instructions below."}),"\n",(0,n.jsx)(t.h2,{id:"requirement",children:"Requirement"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"M.2 Loader"}),"\n",(0,n.jsx)(t.li,{children:"SSD"}),"\n",(0,n.jsx)(t.li,{children:"M.2 to USB adapter"}),"\n",(0,n.jsx)(t.li,{children:"GameCube"}),"\n",(0,n.jsx)(t.li,{children:"some way to load Swiss"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To utilize the M.2 Loader, you will need to acquire an M.2 SATA SSD. I strongly recommend purchasing one from the ",(0,n.jsx)(t.a,{href:"/gc/m2loader/ssd-compatibility-list",children:"SSD Compatibility List"}),". It is crucial to note that not all SSDs are compatible, and the M.2 Loader community consistently updates the compatibility list."]}),"\n",(0,n.jsx)(t.p,{children:"It's essential to understand that the M.2 Loader is not a standalone device, differing significantly from an Optical Drive Emulator such as GC Loader. It functions solely as a storage device, with Swiss handling the necessary processes to run games from it. Solder-free methods can be employed to run Swiss, including game save exploits and Action Replay."}),"\n",(0,n.jsx)(t.p,{children:"For a more convenient M.2 Loader experience, it is advisable to use it on a console equipped with a modchip. PicoBoot is an excellent choice, being cost-effective and widely accessible due to its use of the Raspberry Pi Pico board. Nevertheless, alternatives such as KunaiGC or even older modchips (XenoGC, Qoob SX, Qoob Pro, ViperGC, Viper Extreme, HyperBoot) are equally effective and compatible."}),"\n",(0,n.jsx)(t.h2,{id:"preparing-ssd",children:"Preparing SSD"}),"\n",(0,n.jsx)(t.p,{children:"First you'll need to set up your SSD on your computer. This can be done with inexpensive M.2 SSD to USB adapter. A really cheap ones will do the job. I use $4 USB adapter and never had a single problem with it."}),"\n",(0,n.jsx)(t.p,{children:"Once connected you need to format the drive to use FAT32 or exFAT filesystem. FAT32 has better compatibility with homebrew software so I recommend using FAT32. It's also important to use Master Boot Record (MBR) partition table."}),"\n",(0,n.jsx)(t.p,{children:'If you are on Windows PC, you can use program called "guiformat" to prepare the SSD. Mac OS has built in program "Disk Utility".'}),"\n",(0,n.jsx)(t.p,{children:"Once the drive is formatted, you can copy your ISO images to it."}),"\n",(0,n.jsx)(t.h2,{id:"installing-ssd",children:"Installing SSD"}),"\n",(0,n.jsx)(t.p,{children:"Before connecting the M.2 Loader to your GameCube, it is imperative to install the SSD. Please refrain from removing the SSD while the M.2 Loader is connected to the console."}),"\n",(0,n.jsx)(t.p,{children:"To install the SSD, angle it appropriately, slide it into the M.2 slot, and firmly secure it in place using the provided screw."}),"\n",(0,n.jsx)(s.Z,{alt:"SSD installation",width:"60%",sources:{light:(0,r.Z)("/img/m2loader/ssd_install_light.jpg"),dark:(0,r.Z)("/img/m2loader/ssd_install_dark.jpg")}}),"\n",(0,n.jsx)(t.h2,{id:"connecting-m2-loader",children:"Connecting M.2 Loader"}),"\n",(0,n.jsx)(t.p,{children:"Carefully insert the M.2 Loader into Serial Port 1 on the upside-down console, ensuring secure attachment. If met with resistance, avoid force, realign, and retry to prevent potential damage to the port."}),"\n",(0,n.jsxs)(t.p,{children:["Consider omitting the original port cover, especially if your SSD generates significant heat. Check the ",(0,n.jsx)(t.a,{href:"/gc/m2loader/ssd-compatibility-list",children:"SSD Compatibility List"})," for heat-resistant disk recommendations to prevent potential overheating, which can lead to reduced lifespan or permanent damage. Some low profile heatsinks can be used to mitigate heat related problems."]}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"Rest assured, all units undergo thorough testing before they ship out. If you're facing any challenges, here are some tips to help you troubleshoot:"}),"\n",(0,n.jsx)(t.p,{children:"Firstly, make sure your SSD is a SATA type and is set up correctly\u2014specifically, using the FAT32 file system and MBR configuration. Check our user manual for guidance on these settings."}),"\n",(0,n.jsx)(t.p,{children:"Keep in mind that certain SSDs may pose compatibility issues. Even if they seem to work initially, like browsing files in Swiss, they might struggle with loading games. If you're running into problems, trying a different SSD could be worth exploring."})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(7294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);