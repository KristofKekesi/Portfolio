(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{6055:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return s(1491)}])},61:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var l=s(5893),i=s(7294),a=s(2547),n=s.n(a),r=s(3346);function c(){return(0,i.useEffect)(()=>{n()(),window.addEventListener("resize",n())},[]),(0,l.jsxs)("footer",{children:[(0,l.jsx)("center",{children:(0,l.jsxs)("ul",{id:"footer-content",className:"w-screen flex justify-center wrap px-10 pb-7",children:[(0,l.jsxs)("li",{children:["Contacts",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"target",href:"mailto:kristof@kekesi.dev",children:"Email"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"target",href:"https://github.com/KristofKekesi",children:"GitHub"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"target",href:"https://twitter.com/KristofKekesi",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"target",href:"https://www.instagram.com/kristofkekesiofficial/",children:"Instagram"})})]})]}),(0,l.jsxs)("li",{children:["Policies",(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/generalprivacypolicy.txt",className:"target",children:"Privacy Policy"})})})]}),(0,l.jsxs)("li",{id:"copyright",className:"hidden",children:["Copyright",(0,l.jsx)("ul",{id:"copyright-content"})]}),(0,l.jsxs)("li",{children:["RSS",(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"target",href:r.fw+"/rss.xml",children:"Subscribe"})})})]})]})}),(0,l.jsx)("div",{id:"footer-dock-spacer",className:"w-full"})]})}},2547:function(e){"use strict";e.exports=function(){if(document.getElementById("footer-dock-spacer")){let e=window.scrollX+document.getElementById("dock").getBoundingClientRect().top;document.getElementById("footer-dock-spacer").style.height=window.innerHeight-e+10+"px"}}},1491:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return w},default:function(){return b}});var l=s(5893),i=s(7294),a=s(1664),n=s.n(a),r=s(8440),c=s(6335),d=s(61),o=s(3331),h=s(5506),x=s(9727),f=s.n(x),m=s(2618),u=s.n(m),p=s(6302),g=s(5395),j=s(3346),w=!0;function b(e){let{timestamps:t,dockElements:s,keywords:a}=e;(0,i.useEffect)(()=>{f()(),u()(),(0,g.Z)(),window.addEventListener("resize",(0,g.Z)()),s.map(e=>{(0,p.Z)(e[0].id)}),console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.","color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf","color:auto;font-size:1rem; font-family:monospace;"),s.map(e=>{(0,p.Z)(e[0].id)}),console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.","color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf","color:auto;font-size:1rem; font-family:monospace;")},[s]),t.map(e=>{e.date=new Date(e.date)});let x=[];t.forEach(e=>{x.includes(e.date.getFullYear())||x.push(e.date.getFullYear())});let m=(0,l.jsx)("div",{className:"hidden md:flex mt-10 flex-col",children:x.map(e=>(0,l.jsx)(n(),{href:"#"+e,className:"text-title target",children:e},e))}),w={};t.forEach(e=>{if(w[e.date.getFullYear()]||(w[e.date.getFullYear()]={}),!e.showMonth){w[e.date.getFullYear()]["0"]||(w[e.date.getFullYear()]["0"]=[]),w[e.date.getFullYear()]["0"].push(e);return}if(w[e.date.getFullYear()][e.date.getMonth()+1]||(w[e.date.getFullYear()][e.date.getMonth()+1]={}),e.showMonth&&!e.showDay){w[e.date.getFullYear()][e.date.getMonth()+1]["0"]||(w[e.date.getFullYear()][e.date.getMonth()+1]["0"]=[]),w[e.date.getFullYear()][e.date.getMonth()+1]["0"].push(e);return}w[e.date.getFullYear()][e.date.getMonth()+1][e.date.getDate()]||(w[e.date.getFullYear()][e.date.getMonth()+1][e.date.getDate()]=[]),w[e.date.getFullYear()][e.date.getMonth()+1][e.date.getDate()].push(e)});let b=(0,l.jsxs)("article",{id:"timeline",className:"flex flex-nowrap flex-row items-start justify-center bg-white",children:[m,(0,l.jsx)("div",{className:"sticky mt-10 hidden md:flex",style:{backgroundImage:"url('bg.jpeg')",top:"50px",left:"0px",width:"1rem",height:"calc(100vh)",marginBottom:"40px"},children:(0,l.jsx)("div",{className:"sticky blur-dark",style:{width:"1rem",height:"100"}})}),(0,l.jsx)("div",{children:Object.keys(w).map(e=>(0,l.jsxs)("div",{className:"m-10 section",id:e,children:[(0,l.jsx)("div",{className:"h-px mb-10"}),(0,l.jsx)("div",{className:"text-title selectable",children:e}),w[e]["0"]?w[e]["0"].map(e=>(0,l.jsx)("div",{className:"text selectable",dangerouslySetInnerHTML:{__html:e.name}},e.id)):null,Object.keys(w[e]).map(t=>{if("0"!=t)return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-subtitle selectable",style:{paddingTop:"0"},children:j.e7[t-1]}),Object.keys(w[e][t]).map(s=>"0"==s?w[e][t][s].map(e=>(0,l.jsx)("div",{className:"text selectable",dangerouslySetInnerHTML:{__html:e.name}},e.id)):(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-subsubtitle selectable",children:j.e7[t-1]+" "+s}),w[e][t][s].map(e=>(0,l.jsx)("div",{className:"text selectable",dangerouslySetInnerHTML:{__html:e.name}},e.id))]},s))]},t);w[e][t].map(e=>(0,l.jsx)("div",{className:"text selectable",dangerouslySetInnerHTML:{__html:e.name}},e.id))}),(0,l.jsx)("div",{className:"h-px mt-10"})]},e))})]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Z,{title:"Timeline",description:"Important dates and events in my career.",keywords:a}),(0,l.jsx)(r.Z,{}),(0,l.jsxs)("main",{children:[(0,l.jsx)("center",{className:"w-screen bg-cover",style:{paddingTop:"150px",paddingBottom:"75px",backgroundImage:"url('bg.jpeg')"},children:(0,l.jsx)("div",{className:"w-max",children:(0,l.jsx)("h1",{className:"text-white text-7xl font-bold text-left font-interBold",style:{paddingTop:"0vh",textShadow:"6px 6px 12px rgba(0, 0, 0, .5)"},children:"Timeline"})})}),b]}),(0,l.jsx)(c.Z,{elements:s}),(0,l.jsx)(d.Z,{}),(0,l.jsx)(o.Z,{})]})}}},function(e){e.O(0,[209,936,774,888,179],function(){return e(e.s=6055)}),_N_E=e.O()}]);