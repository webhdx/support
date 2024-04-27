"use strict";(self.webpackChunksupport_webhdx_dev=self.webpackChunksupport_webhdx_dev||[]).push([[48],{1200:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=i(4848),n=i(8453);const d={title:"ETH2GC Sidecar Build Guide"},r="ETH2GC Sidecar - Build Guide",c={id:"gc/eth2gc/sidecar/build-guide",title:"ETH2GC Sidecar Build Guide",description:"* Breakout PCB",source:"@site/docs/gc/eth2gc/sidecar/build-guide.md",sourceDirName:"gc/eth2gc/sidecar",slug:"/gc/eth2gc/sidecar/build-guide",permalink:"/gc/eth2gc/sidecar/build-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/webhdx/support/tree/main/docs/gc/eth2gc/sidecar/build-guide.md",tags:[],version:"current",frontMatter:{title:"ETH2GC Sidecar Build Guide"},sidebar:"MainSidebar",previous:{title:"FAQ",permalink:"/gc/eth2gc/faq"},next:{title:"ETH2GC Lite Build Guide",permalink:"/gc/eth2gc/lite/build-guide"}},a={},l=[];function o(e){const t={a:"a",admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"eth2gc-sidecar---build-guide",children:"ETH2GC Sidecar - Build Guide"}),"\n",(0,s.jsx)(t.h1,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Breakout PCB"}),"\n",(0,s.jsx)(t.li,{children:"Main PCB"}),"\n",(0,s.jsx)(t.li,{children:"2x4P Male Headers P=2.54mm"}),"\n",(0,s.jsx)(t.li,{children:"2x5P Female Headers 8.5mm P=2.54mm"}),"\n",(0,s.jsx)(t.li,{children:"2x4P Female Headers 8.5mm P=2.54mm"}),"\n",(0,s.jsx)(t.li,{children:"2 part case"}),"\n",(0,s.jsx)(t.li,{children:"6x M2 6mm self tapping screws"}),"\n",(0,s.jsx)(t.li,{children:"ENC28J60 Mini module"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Part"}),(0,s.jsx)(t.th,{children:"Links"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.img,{alt:"ENC28J60 MINI",src:i(9659).A+"",width:"400",height:"400"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"ENC28J60 MINI"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://s.click.aliexpress.com/e/_DlkjMGp",children:"AliExpress (affiliate)"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.a,{href:"https://www.amazon.com/ENC28J60-Ethernet-Network-Module-Arduino/dp/B07KNTHR84",children:"Amazon US"})]})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["DIY kits are available ",(0,s.jsx)(t.a,{href:"https://store.webhdx.dev/products/eth2gc-sidecar-broadband-adapter-emulator",children:"at my store"}),"."]})}),"\n",(0,s.jsx)(t.h1,{id:"soldering",children:"Soldering"}),"\n",(0,s.jsx)(t.p,{children:"Reference below photos for connectors orientation."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Breakout PCB Front",src:i(9769).A+"",width:"700",height:"700"}),"\n",(0,s.jsx)(t.img,{alt:"Breakout PCB Back",src:i(8245).A+"",width:"700",height:"700"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Main PCB Front",src:i(6990).A+"",width:"700",height:"700"}),"\n",(0,s.jsx)(t.img,{alt:"Main PCB Back",src:i(6141).A+"",width:"700",height:"700"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Leaded solder is recommended - it's easier to work with."}),"\n",(0,s.jsx)(t.li,{children:"Use temperature controller soldering iron set to 330\xb0C (~620\xb0F)."}),"\n",(0,s.jsx)(t.li,{children:"Use flux - it really helps solder to flow."}),"\n",(0,s.jsx)(t.li,{children:"Be careful to not melt solder on gold edge connector. You can protect it with kapton tape."}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"assembly",children:"Assembly"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Some ",(0,s.jsx)(t.strong,{children:"ENC28J60 Mini"})," boards might be wider than others. If your module does not fit, sand down edges of the board with sand paper."]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Attach smaller breakout PCB to the main PCB as shown in the photos below."}),"\n",(0,s.jsx)(t.li,{children:"Attach ENC28J60 Mini module to the main PCB."}),"\n",(0,s.jsx)(t.li,{children:"Put everything in main plastic case."}),"\n",(0,s.jsx)(t.li,{children:"Secure main PCB with 4 M2 self tapping screws."}),"\n",(0,s.jsxs)(t.li,{children:["Mount bottom case cover, align both parts first and make sure they fit together. Lightly press down until both pieces click together. ",(0,s.jsx)(t.strong,{children:"Do not use excessive force!"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Attaching PCBs together",src:i(9402).A+"",width:"700",height:"700"}),"\n",(0,s.jsx)(t.img,{alt:"Ataching ENC28J60 module",src:i(2207).A+"",width:"700",height:"700"}),"\n",(0,s.jsx)(t.img,{alt:"Assembling case",src:i(3470).A+"",width:"700",height:"700"}),"\n",(0,s.jsx)(t.img,{alt:"Final assembly",src:i(5293).A+"",width:"700",height:"700"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9659:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/ENC28J60_Mini-832c51f1fd4bc780525a8eceee746fc4.jpg"},3470:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Assembly_1-f8dd1a6c2e90732e8e2a5ec0fd7a4a57.jpeg"},5293:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Assembly_Final-a92a78b6ea90c2f4f585fd3c43eb24b4.jpeg"},8245:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Breakout_PCB_Back-372a17527f499416d1dfe3bf8336fdb4.jpeg"},9769:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Breakout_PCB_Front-12e23c1f3d644ba4d519733e5d80ffaf.jpeg"},9402:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Main_PCB_Attached-1bb4a7d0f4e2e38d0212d3b350657695.jpeg"},6141:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Main_PCB_Back-eeed53be56e092bd2e9d4fc8c140c614.jpeg"},2207:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Main_PCB_ENC_Attached-4fa9345c706ea57c310925681fd25800.jpeg"},6990:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Sidecar_Main_PCB_Front-21a4bebd54a33e9bbe0d80146c75148d.jpeg"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var s=i(6540);const n={},d=s.createContext(n);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);