"use strict";(self.webpackChunkmatols_website=self.webpackChunkmatols_website||[]).push([[593],{1593:(e,s,t)=>{t.r(s),t.d(s,{default:()=>y});var r=t(4858),a=t(2907),l=t(3156),o=t(2780),i=t(6007),c=t(5043),d=t(2820),n=t(4e3),m=t(3234),x=t(7613),u=t(4694),h=t(8364),p=t(4703),b=t(7257),f=t(4732),w=t(579);function y(){const[e,s]=(0,c.useState)(!1),{setItem:t}=(0,n.M)(m.r.tokens),{decodedJwt:y,setJwtToken:j}=(0,h.j)(),[v,N]=(0,c.useState)(!1),{set:g}=(0,b.Z)((()=>window.location.href=p.C.home),5e3),{register:k,handleSubmit:C,formState:{isLoading:S,errors:T}}=(0,r.mN)(),{isLoading:q,isSuccess:E,mutateAsync:L,isError:_,error:z}=(0,a.useMutation)("signin",{mutationFn:i.dL,onSuccess:e=>{t(e),j(e.access),N((e=>!0)),g()},onMutate:e=>{N((e=>!0))},onError:e=>{N((e=>!1))}});return(0,w.jsx)(f.q,{children:(0,w.jsxs)("main",{className:"max-w-xl mx-auto p-6 my-6 text-black bg-white",children:[(0,w.jsxs)("div",{className:"rounded-md p-4 shadow-sm border border-gray-200",children:[(0,w.jsxs)("h2",{className:"text-start text-black pb-6 px-2 font-extrabold text-3xl",children:["Welcome back",(0,w.jsxs)("p",{className:"text-sm font-normal text-slate-600 pt-2",children:["Trust matols logistics services to transport your items safely. Dont have an account ?"," ",(0,w.jsx)("a",{href:p.C.register,className:"text-yellow-400 font-bold hover:opacity-75",children:"Register"}),"."]})]}),(0,w.jsxs)("form",{className:"px-2",onSubmit:C((async e=>{try{await L(e)}catch(z){}})),children:[(0,w.jsxs)("div",{className:"rounded-md shadow-sm",children:[(0,w.jsx)("input",{...k("email",{required:"Email address required",disabled:v}),type:"email",name:"email",placeholder:"matols@gmail.com",className:(0,u.cn)("text-sm text-slate-800  w-full relative shadow-sm block rounded-t-md border-gray-200 focus:z-10 focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none",{"text-slate-800 placeholder:text-slate-800 bg-red-100":T.email})}),(0,w.jsxs)("div",{className:"relative",children:[(0,w.jsx)("input",{...k("password",{required:"Password required",disabled:v}),type:e?"text":"password",name:"password",placeholder:"Enter password",className:(0,u.cn)("peer text-sm pe-9 text-slate-800 w-full shadow-sm relative block rounded-b-md border-gray-200 focus:z-10 focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-75 disabled:pointer-events-none",{" text-slate-800 placeholder:text-slate-800 bg-red-100":T.password})}),(0,w.jsx)("div",{className:"peer-focus:z-10 absolute inset-y-0 right-0 px-3 flex justify-center items-center",children:(0,w.jsx)("div",{onClick:()=>s((e=>!e)),children:e?(0,w.jsx)(l.$_Y,{className:"text-yellow-400 cursor-pointer hover:opacity-75",size:20}):(0,w.jsx)(l.QJN,{className:"text-yellow-400 cursor-pointer hover:opacity-75",size:20})})})]})]}),T.email&&(0,w.jsx)("p",{className:"pt-2 text-red-500 text-sm italic",children:T.email.message}),T.password&&(0,w.jsx)("p",{className:"pt-2 text-red-500 text-sm italic",children:T.password.message}),(0,w.jsx)("div",{className:"w-full text-end py-4",children:(0,w.jsx)("a",{href:p.C.requestpasswordreset,className:"text-yellow-400 text-sm font-bold hover:opacity-75",children:"Forgot password?"})}),_&&(0,w.jsx)(x.$,{className:"mb-4",secondaryText:"".concat(z.response.data.message," ").concat(z.message)}),E&&(0,w.jsx)(x.C,{secondaryText:"Welcome back matols Logistics services ".concat(y.user_first_name," ").concat(y.user_surname),className:"mb-4"}),(0,w.jsx)(d.$,{className:"rounded-md text-base shadow-sm hover:opacity-75",type:"submit",disabled:v,children:q||S?(0,w.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,w.jsx)(o.LW,{visible:!0,width:"40",height:"20",color:"#000"})}):"Sign in to your account"})]})]}),(0,w.jsx)("div",{className:"mb-20"})]})})}},7613:(e,s,t)=>{t.d(s,{$:()=>o,C:()=>l});t(5043);var r=t(4694),a=t(579);function l(e){let{secondaryText:s,className:t,children:l,...o}=e;return(0,a.jsx)("div",{...o,className:(0,r.cn)("bg-green-100 border-t-4 border-green-500 rounded-b-md text-green-900 px-4 py-2",t),role:"alert",children:(0,a.jsx)("div",{className:"flex text-wrap break-words",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold",children:"Yey ! all set"}),(0,a.jsx)("p",{className:"text-sm text-wrap break-words",children:s||"Welcome to Matols Logistics services"})]})})})}function o(e){let{secondaryText:s,className:t,children:l,...o}=e;return(0,a.jsx)("div",{...o,className:(0,r.cn)("bg-red-100 border-t-4 border-red-500 rounded-b-md text-red-900 px-4 py-2",t),role:"alert",children:(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold",children:"Oops ! Error"}),(0,a.jsx)("p",{className:"text-sm",children:s||"An error occured"})]})})})}},4732:(e,s,t)=>{t.d(s,{q:()=>i});var r=t(2122);const a={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}};var l=t(607),o=t(579);function i(e){let{children:s,...t}=e;return(0,o.jsx)(r.P.section,{variants:a,animate:"visible",initial:"hidden",exit:"exit",transition:{duration:l.KD,delay:l.XP},children:s})}},7257:(e,s,t)=>{t.d(s,{Z:()=>a});var r=t(5043);function a(e,s){const t=(0,r.useRef)(e),a=(0,r.useRef)();(0,r.useEffect)((()=>{t.current=e}),[e]);return{set:(0,r.useCallback)((()=>{a.current=setTimeout((()=>t.current()),s)}),[s]),resetCallBack:e=>{a.current=setTimeout((()=>e()),s)}}}}}]);
//# sourceMappingURL=593.9d75b90f.chunk.js.map