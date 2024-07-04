"use strict";(self.webpackChunkmatols_website=self.webpackChunkmatols_website||[]).push([[883],{6264:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var o=s(5043),l=s(2129),a=s(1581),c=s(6600),r=s(3234),i=s(5475),n=s(4703),d=s(579);function m(){const[e,t]=(0,o.useState)(1),{setCreateBookingObj:s,getCreateBookingObj:m}=(0,c.X)(r.r.create_booking);return(0,o.useEffect)((()=>{const e=m();e&&t((t=>Number(e.vehicle_type).toFixed(1)))}),[]),(0,d.jsxs)("main",{className:"max-w-xl mx-auto my-4 p-6 text-black bg-white",children:[(0,d.jsxs)("h2",{className:"text-start text-black pb-6 px-2 font-extrabold text-3xl",children:["Choose Vehicle type",(0,d.jsx)("p",{className:"text-sm font-normal text-slate-600 pt-2",children:"Thank you for choosing Matols logistics services as your go to service provider."})]}),l.rZ.map(((s,o)=>(0,d.jsx)(a._,{vehicle_details:s,onChange:t,value:e},o))),(0,d.jsx)("div",{className:"py-4 flex flex-row justify-end",children:(0,d.jsx)(i.N_,{className:"text-center font-bold px-3 py-2 rounded-md text-black bg-yellow-400 w-auto",reloadDocument:!1,onClick:()=>s({vehicle_type:e}),to:n.C.chooseroutes,children:"Select and continue"})})]})}},1581:(e,t,s)=>{s.d(t,{_:()=>a});var o=s(4694),l=s(579);function a(e){let{vehicle_details:t,onChange:s,value:a,...c}=e;const r=()=>s((e=>Number(t.vehicle_type).toFixed(1)));return(0,l.jsx)("div",{className:(0,o.cn)("rounded-lg p-2 shadow-sm border border-gray-200 my-2 text-sm",{"text-base bg-yellow-400 bg-opacity-20":a===Number(t.vehicle_type).toFixed(1)}),onClick:r,children:(0,l.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4",children:[(0,l.jsxs)("div",{className:"flex justify-start items-start gap-3",children:[(0,l.jsx)("input",{...c,type:"checkbox",id:Number(t.vehicle_type).toFixed(1),value:Number(t.vehicle_type).toFixed(1),checked:a===Number(t.vehicle_type).toFixed(1),onChange:r,className:(0,o.cn)("peer rounded-sm border-gray-300 my-[0.1rem] checked:my-[0.3rem] text-yellow-400 focus:ring-yellow-400 disabled:opacity-50 disabled:pointer-events-none",{})}),(0,l.jsxs)("label",{htmlFor:"termsandprivacy",className:"peer-checked:font-extrabold font-bold peer-checked:text-yellow-500",children:[t.vehicle_type," Ton"," ",(0,l.jsx)("span",{className:"font-normal text-slate-800",children:t.vehicle_description})]})]}),(0,l.jsx)("img",{className:"h-10",src:t.vehicle_type_svg,alt:"{vehicle_details.vehicle_type_svg}"})]})})}},6600:(e,t,s)=>{s.d(t,{X:()=>l});var o=s(4e3);function l(e){const{setItem:t,getItem:s,removeItem:l}=(0,o.M)(e);return{setCreateBookingObj:s=>{try{const o=window.localStorage.getItem(e);if(o){const e={...JSON.parse(o),...s};return void t(e)}t(s)}catch(o){}},getCreateBookingObj:s,removeCreatedBookingObj:l}}}}]);
//# sourceMappingURL=883.e5d58f89.chunk.js.map