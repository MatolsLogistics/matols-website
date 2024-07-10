"use strict";(self.webpackChunkmatols_website=self.webpackChunkmatols_website||[]).push([[581],{2581:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(4858),s=o(4694),a=o(6178),n=o.n(a),l=o(607),i=o(1899),c=o.n(i),d=o(6600),m=o(3234),x=o(5043),u=o(4703),p=o(5475),h=o(7613),g=o(2820),b=o(579);function y(){const[e,t]=(0,x.useState)(!1),{setCreateBookingObj:o,getCreateBookingObj:a}=(0,d.X)(m.r.create_booking),{register:i,handleSubmit:y,control:f}=(0,r.mN)({defaultValues:l.bq});return(0,b.jsxs)("form",{onSubmit:y((e=>{const r=a(),s=(e=>{const o=new Date(Date.parse(e.booking_date)),r=new Date(Date.parse("".concat(e.booking_date," ").concat(e.booking_time))),s=new Date(Date.parse("".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate()," ").concat(r.getHours(),":").concat(r.getMinutes())))-Date.now()<54e5;return t((e=>s)),s})(e);s||(r?(o({...r,...e}),window.location.href=u.C.makebooking):(o({...e}),window.location.href=u.C.makebooking))})),children:[(0,b.jsxs)("div",{className:"custom_datepicker_width my-4",children:[(0,b.jsx)(r.xI,{control:f,name:"booking_date",render:t=>{let{field:o}=t;return(0,b.jsx)(c(),{className:(0,s.cn)("text-sm rounded-md text-gray-700 border-gray-200 focus:ring-yellow-400 focus:bg-white focus:border-yellow-400 py-3 px-4",{"border-red-500 bg-red-50 bg-opacity-100":e}),dateFormat:"yyyy-MMM-dd",timeFormat:"HH:mm",minDate:Date.now(),showPopperArrow:!1,closeOnScroll:!0,selected:o.value,onChange:e=>o.onChange(n()(e).format("yyyy-MM-DD")),onFocus:e=>e.target.readOnly=!0})}}),(0,b.jsx)("span",{className:"text-xs text-gray-400",children:"Booking date"})]}),(0,b.jsxs)("div",{className:"custom_datepicker_width my-4",children:[(0,b.jsx)(r.xI,{control:f,name:"booking_time",render:t=>{let{field:o}=t;return(0,b.jsx)(c(),{timeFormat:"HH:mm",dateFormat:"HH:mm",timeCaption:"Time",className:(0,s.cn)("text-sm rounded-md text-gray-700 border-gray-200 focus:ring-yellow-400 focus:bg-white focus:border-yellow-400 py-3 px-4",{"border-red-500 bg-red-50 bg-opacity-100":e}),minDate:Date.now(),timeIntervals:15,showTimeSelect:!0,showTimeSelectOnly:!0,showPopperArrow:!1,selected:new Date(Date.parse("2024-06-05 ".concat(o.value))),onChange:e=>o.onChange(n()(e).format("HH:mm:ss")),onFocus:e=>e.target.readOnly=!0})}}),(0,b.jsx)("span",{className:"text-xs text-gray-400",children:"Booking time"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("select",{...i("helpers",{valueAsNumber:!0}),id:"helpers",name:"helpers",className:"block text-sm appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-yellow-400 focus:bg-white focus:border-yellow-400",children:l.Ez.map(((e,t)=>(0,b.jsxs)("option",{value:t+1,children:[t+1," Helpers"]},t+1)))}),(0,b.jsx)("span",{className:"text-xs text-gray-400",children:"Request additional suport"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("select",{...i("floors",{valueAsNumber:!0}),id:"floors",name:"floors",className:"mt-4 block text-sm appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-yellow-400 focus:bg-white focus:border-yellow-400",children:l.Wg.map(((e,t)=>(0,b.jsxs)("option",{value:t+1,children:[t+1," Floors"]},t)))}),(0,b.jsx)("span",{className:"text-xs text-gray-400",children:"Total number of floors to carry up or down in both pick and dropoff locations"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("select",{...i("payment_option"),id:"payment_option",name:"payment_option",className:"mt-4 block text-sm appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-yellow-400 focus:bg-white focus:border-yellow-400",children:["EFT","CASH"].map(((e,t)=>(0,b.jsxs)("option",{value:e,children:[e," payment"]},t)))}),(0,b.jsx)("span",{className:"text-xs text-gray-400",children:"Choose your prefared payment option"})]}),(0,b.jsxs)("div",{className:"mt-4",children:[(0,b.jsx)("textarea",{...i("customer_driver_note"),type:"text",rows:3,name:"customer_driver_note",placeholder:"Leave a note for the driver",className:(0,s.cn)("text-sm text-gray-700 w-full rounded-md border-gray-200 focus:bg-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none")}),(0,b.jsx)("span",{className:"text-xs text-gray-400",children:"Need to give the driver additional instruction?, leave a note for the driver here."})]}),(0,b.jsxs)("div",{className:"py-4",children:[e&&(0,b.jsx)(h.$,{className:"mb-4",secondaryText:l.xg}),(0,b.jsxs)("div",{className:"flex flex-row items-center justify-end gap-3",children:[(0,b.jsx)(p.N_,{to:u.C.chooseroutes,className:"px-3 py-2 rounded-md text-yellow-400 bg-black font-bold border-none ring-0  hover:opacity-75",children:"Back"}),(0,b.jsx)(g.$,{className:"w-auto  hover:opacity-75",children:"Select and continue"})]})]})]})}var f=o(4732);function w(){return(0,b.jsx)(f.q,{children:(0,b.jsxs)("main",{className:"max-w-xl mx-auto my-4 p-6 text-black bg-white",children:[(0,b.jsxs)("h2",{className:"text-start text-black pb-6 font-extrabold text-3xl",children:["Choose additional information",(0,b.jsxs)("p",{className:"text-sm font-normal text-slate-600 pt-2",children:["Thank you for choosing Matols logistics services as your go to service provider."," ",(0,b.jsx)("span",{className:"text-sm text-blue-700",children:"All payments must be done upon delivery"}),"!."]})]}),(0,b.jsx)(y,{}),(0,b.jsx)("div",{className:"mb-20"})]})})}},7613:(e,t,o)=>{o.d(t,{$:()=>n,C:()=>a});o(5043);var r=o(4694),s=o(579);function a(e){let{secondaryText:t,className:o,children:a,...n}=e;return(0,s.jsx)("div",{...n,className:(0,r.cn)("bg-green-100 border-t-4 border-green-500 rounded-b-md text-green-900 px-4 py-2",o),role:"alert",children:(0,s.jsx)("div",{className:"flex text-wrap break-words",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold",children:"Yey ! all set"}),(0,s.jsx)("p",{className:"text-sm text-wrap break-words",children:t||"Welcome to Matols Logistics services"})]})})})}function n(e){let{secondaryText:t,className:o,children:a,...n}=e;return(0,s.jsx)("div",{...n,className:(0,r.cn)("bg-red-100 border-t-4 border-red-500 rounded-b-md text-red-900 px-4 py-2",o),role:"alert",children:(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold",children:"Oops ! Error"}),(0,s.jsx)("p",{className:"text-sm",children:t||"An error occured"})]})})})}},4732:(e,t,o)=>{o.d(t,{q:()=>l});var r=o(2122);const s={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}};var a=o(607),n=o(579);function l(e){let{children:t,...o}=e;return(0,n.jsx)(r.P.section,{variants:s,animate:"visible",initial:"hidden",exit:"exit",transition:{duration:a.KD,delay:a.XP},children:t})}},6600:(e,t,o)=>{o.d(t,{X:()=>s});var r=o(4e3);function s(e){const{setItem:t,getItem:o,removeItem:s}=(0,r.M)(e);return{setCreateBookingObj:o=>{try{const r=window.localStorage.getItem(e);if(r){const e={...JSON.parse(r),...o};return void t(e)}t(o)}catch(r){}},getCreateBookingObj:o,removeCreatedBookingObj:s}}}}]);
//# sourceMappingURL=581.5fd5a762.chunk.js.map