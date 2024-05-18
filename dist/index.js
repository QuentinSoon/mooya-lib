"use strict";var we=Object.create;var E=Object.defineProperty,ue=Object.defineProperties,fe=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertyNames,O=Object.getOwnPropertySymbols,ge=Object.getPrototypeOf,ur=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var kr=(r,e,t)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))ur.call(e,t)&&kr(r,t,e[t]);if(O)for(var t of O(e))Pr.call(e,t)&&kr(r,t,e[t]);return r},I=(r,e)=>ue(r,he(e));var l=(r,e)=>{var t={};for(var o in r)ur.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&O)for(var o of O(r))e.indexOf(o)<0&&Pr.call(r,o)&&(t[o]=r[o]);return t};var ye=(r,e)=>{for(var t in e)E(r,t,{get:e[t],enumerable:!0})},Mr=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of xe(e))!ur.call(r,n)&&n!==t&&E(r,n,{get:()=>e[n],enumerable:!(o=fe(e,n))||o.enumerable});return r};var Cr=(r,e,t)=>(t=r!=null?we(ge(r)):{},Mr(e||!r||!r.__esModule?E(t,"default",{value:r,enumerable:!0}):t,r)),ke=r=>Mr(E({},"__esModule",{value:!0}),r);var Me={};ye(Me,{Avatar:()=>g,Button:()=>Y,Card:()=>W,CardContent:()=>V,Checkbox:()=>G,Dropdown:()=>J,DropdownContent:()=>_,DropdownItem:()=>j,DropdownSeparator:()=>rr,DropdownTrigger:()=>er,Input:()=>or,Kbd:()=>nr,Menu:()=>T,MenuItem:()=>z,MenuSeparator:()=>D,Modal:()=>sr,Navbar:()=>lr,NavbarCenter:()=>dr,NavbarLeft:()=>cr,NavbarRight:()=>mr,Overlay:()=>b,Popover:()=>M,PopoverContent:()=>L,PopoverTrigger:()=>C,User:()=>vr});module.exports=ke(Me);var R=require("framer-motion"),X=require("react");var B=require("react"),Lr=r=>{let[e,t]=(0,B.useState)(null);return(0,B.useEffect)(()=>{let o=new Image;o.src=r||"",o.onload=()=>t(o)},[r]),{image:e}};var Tr=Cr(require("clsx")),zr=require("tailwind-merge");function a(...r){return(0,zr.twMerge)((0,Tr.default)(r))}var S=require("react/jsx-runtime"),g=(0,X.forwardRef)(({src:r,size:e="md",rounded:t="full",color:o="foreground"},n)=>{let{image:i}=Lr(r),p=(0,X.useMemo)(()=>i?(0,S.jsx)(R.motion.img,{src:i.src,className:"avatar-image",alt:"avatar",initial:{opacity:0},animate:{opacity:1,transition:{duration:.125,ease:"easeInOut"}},exit:{opacity:0}}):null,[r,i]);return(0,S.jsx)("div",{className:a("avatar",`avatar-size-${e}`,`avatar-rounded-${t}`,`avatar-color-${o}`),children:(0,S.jsx)(R.AnimatePresence,{children:p})})});g.displayName="Avatar";var Ar=Cr(require("lottie-react")),Er=require("react");var Dr={nm:"Comp 1",ddd:0,h:1e3,w:1e3,meta:{g:"LottieFiles AE 1.0.0"},layers:[{ty:4,nm:"Shape Layer 2",sr:1,st:0,op:900.000036657751,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-200.252,-2.513,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[60,60,100],t:22.451},{o:{x:.333,y:0},i:{x:.667,y:1},s:[80,80,100],t:33.678},{o:{x:.167,y:0},i:{x:.833,y:1},s:[50,50,100],t:46.774},{s:[60,60,100],t:58.0000023623884}],ix:6},sk:{a:0,k:0},p:{a:0,k:[742.261,500,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 2",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[686.973,686.973],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.9961,.5216,.2549],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[27.099,27.099],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-200.252,-2.513],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:2,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[686.973,686.973],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.9961,.5216,.2549],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[27.099,27.099],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-200.252,-2.513],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:1},{ty:4,nm:"Shape Layer 3",sr:1,st:0,op:900.000036657751,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-200.252,-2.513,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[60,60,100],t:11.226},{o:{x:.333,y:0},i:{x:.667,y:1},s:[80,80,100],t:22.451},{o:{x:.167,y:0},i:{x:.833,y:1},s:[50,50,100],t:35.549},{s:[60,60,100],t:46.7737519051339}],ix:6},sk:{a:0,k:0},p:{a:0,k:[502.261,500,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 2",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[686.973,686.973],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.9961,.5216,.2549],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[27.099,27.099],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-200.252,-2.513],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:2,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[686.973,686.973],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.9961,.5216,.2549],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[27.099,27.099],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-200.252,-2.513],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:2},{ty:4,nm:"Shape Layer 1",sr:1,st:0,op:900.000036657751,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[-200.252,-2.513,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[60,60,100],t:0},{o:{x:.333,y:0},i:{x:.667,y:1},s:[80,80,100],t:11.226},{o:{x:.167,y:0},i:{x:.833,y:1},s:[50,50,100],t:24.323},{s:[60,60,100],t:35.5487514479303}],ix:6},sk:{a:0,k:0},p:{a:0,k:[262.261,500,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 2",ix:1,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[686.973,686.973],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.9961,.5216,.2549],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[27.099,27.099],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-200.252,-2.513],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Ellipse 1",ix:2,cix:2,np:3,it:[{ty:"el",bm:0,hd:!1,mn:"ADBE Vector Shape - Ellipse",nm:"Ellipse Path 1",d:1,p:{a:0,k:[0,0],ix:3},s:{a:0,k:[686.973,686.973],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:1,lj:1,ml:4,o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},c:{a:0,k:[.9961,.5216,.2549],ix:3}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[27.099,27.099],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[-200.252,-2.513],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:3}],v:"4.8.0",fr:29.9700012207031,op:58.0000023623884,ip:0,assets:[]};var w=require("react/jsx-runtime"),Y=(0,Er.forwardRef)((U,wr)=>{var A=U,{variant:r="solid",size:e="md",rounded:t,color:o="basic",loading:n=!1,fullWidth:i=!1,startContent:p,endContent:c,contentFullWidth:s=!1,children:d,className:x}=A,br=l(A,["variant","size","rounded","color","loading","fullWidth","startContent","endContent","contentFullWidth","children","className"]);return(0,w.jsxs)("button",I(m({ref:wr,className:a("button",`button-variant-${r}`,`button-size-${e}`,`button-color-${o}`,t&&`button-rounded-${t}`,{"button-loading":n},{"button-fullWidth":i},{"button-contentFullWidth":s},x)},br),{children:[n&&(0,w.jsx)(Ar.default,{animationData:Dr,className:"button-lottie"}),p||(0,w.jsx)("span",{}),d&&(0,w.jsx)("span",{className:a("button-content"),children:d}),c||(0,w.jsx)("span",{})]}))});Y.displayName="Button";var Hr=require("react");var Nr=require("react/jsx-runtime"),W=(0,Hr.forwardRef)(({children:r,className:e},t)=>(0,Nr.jsx)("div",{className:a("card",e),children:r}));W.displayName="Card";var Ur=require("react");var Or=require("react/jsx-runtime"),V=(0,Ur.forwardRef)(({children:r},e)=>(0,Or.jsx)("div",{children:r}));V.displayName="CardContent";var y=require("framer-motion"),K=require("react");var v=require("react/jsx-runtime"),G=(0,K.forwardRef)((s,c)=>{var d=s,{size:r="md",color:e="basic",rounded:t,checked:o,defaultChecked:n,className:i}=d,p=l(d,["size","color","rounded","checked","defaultChecked","className"]);var A;let[x,br]=(0,K.useState)(n!=null?n:!1),wr=be=>{br(be.target.checked)},U=o!=null?o:x;return(0,v.jsxs)("label",{className:"wrapper",children:[(0,v.jsx)("input",{ref:c,hidden:!0,type:"checkbox",checked:U,onChange:(A=p.onChange)!=null?A:wr}),(0,v.jsx)(y.AnimatePresence,{children:(0,v.jsx)(y.motion.span,{className:a("checkbox",`checkbox-size-${r}`,`checkbox-color-${e}`,t&&`checkbox-rounded-${t}`),children:(0,v.jsx)(y.motion.svg,{className:a("checkbox-svg",i),animate:U?"checked":"unchecked",initial:!0,variants:{checked:{opacity:1,scale:1,transition:{duration:.2}},unchecked:{opacity:0,scale:.6,transition:{duration:.2}}},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 26 26",strokeWidth:"3.5",children:(0,v.jsx)(y.motion.path,{animate:U?"checked":"unchecked",variants:{checked:{pathLength:1,opacity:1,transition:{duration:.15,delay:.2}},unchecked:{pathLength:0,opacity:0,transition:{duration:.1}}},strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12.75l6 6 9-10"})})})})]})});G.displayName="Checkbox";var Kr=require("react");var Sr=require("framer-motion"),P=require("react");var Ir=require("framer-motion"),Br=require("react");var u=require("react/jsx-runtime"),b=(0,Br.forwardRef)((c,p)=>{var s=c,{children:r,open:e,setOpen:t,backdrop:o="blur",placement:n="bottom"}=s,i=l(s,["children","open","setOpen","backdrop","placement"]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"bumper",children:r}),(0,u.jsx)(Ir.motion.div,{className:a("overlay",`overlay-${o}`),onClick:()=>t(!1),initial:"inactive",animate:"active",exit:"inactive",variants:{active:{opacity:1,transition:{duration:.2,ease:"easeOut"}},inactive:{opacity:0,transition:{duration:.15}}}})]})});b.displayName="Overlay";var k=require("react/jsx-runtime"),M=(0,P.forwardRef)((i,n)=>{var p=i,{backdrop:r="blur",placement:e="bottom",children:t}=p,o=l(p,["backdrop","placement","children"]);let[c,s]=P.Children.toArray(t),[d,x]=(0,P.useState)(!1);return(0,k.jsx)(F.Provider,{value:{open:d,setOpen:x,placement:e,backdrop:r},children:(0,k.jsxs)("div",{className:a("popover"),children:[c,(0,k.jsx)(Sr.AnimatePresence,{children:d&&(0,k.jsx)(b,{open:d,setOpen:x,backdrop:r,placement:e,children:s})})]})})});M.displayName="Popover";var $=require("react");var Rr=require("react/jsx-runtime"),C=(0,$.forwardRef)(({children:r},e)=>{let t=f();if(!r)throw new Error("PopoverTrigger must have a child");if($.Children.count(r)!==1)throw new Error("PopoverTrigger must have exactly one child");if(typeof r!="object")throw new Error("PopoverTrigger must be an object");return(0,Rr.jsx)("span",{onClick:()=>{var o;return(o=t==null?void 0:t.setOpen)==null?void 0:o.call(t,!t.open)},children:r})});C.displayName="PopoverTrigger";var Yr=require("framer-motion"),Wr=require("react");var Vr=require("react/jsx-runtime"),L=(0,Wr.forwardRef)(({children:r,className:e},t)=>{var n,i,p;let o=f();return(0,Vr.jsx)(Yr.motion.div,{variants:{active:m({opacity:1,transition:{duration:.2,ease:"easeOut"},zoom:1},Xr[(n=o.placement)!=null?n:"bottom"]),inactive:m({opacity:0,transition:{duration:.15},zoom:.4},Xr[(i=o.placement)!=null?i:"bottom"])},initial:"inactive",animate:"active",exit:"inactive",className:a(`popover-content overlay-${(p=o.placement)!=null?p:"button"}`,"popover-defaultContent",e!=null?e:"popover-defaultContent"),children:r})});L.displayName="PopoverContent";var Xr={center:{transformOrigin:"center center"},top:{transformOrigin:"bottom center"},right:{transformOrigin:"left center"},left:{transformOrigin:"right center"},bottom:{transformOrigin:"top center"},"top-right":{transformOrigin:"bottom right"},"top-left":{transformOrigin:"bottom left"},"right-top":{transformOrigin:"left top"},"right-bottom":{transformOrigin:"left bottom"},"left-top":{transformOrigin:"right top"},"left-bottom":{transformOrigin:"right bottom"},"bottom-right":{transformOrigin:"top right"},"bottom-left":{transformOrigin:"top left"}};var q=require("react"),F=(0,q.createContext)({}),f=()=>{let r=(0,q.useContext)(F);if(!r)throw new Error("usePopoverContext need to be use in PopoverContextProvider");return r};var Gr=require("react/jsx-runtime"),J=(0,Kr.forwardRef)((c,p)=>{var s=c,{backdrop:r="blur",placement:e="bottom",children:t,open:o,setOpen:n}=s,i=l(s,["backdrop","placement","children","open","setOpen"]);return(0,Gr.jsx)(M,{placement:e,backdrop:r,open:o,setOpen:n,children:t})});J.displayName="Dropdown";var Zr=require("react");var Fr=require("react");var Q=require("react"),fr=(0,Q.createContext)({}),Z=()=>{let r=(0,Q.useContext)(fr);if(!r)throw new Error("useMenuContext need to be use in PopoverContextProvider");return r};var hr=require("react/jsx-runtime"),T=(0,Fr.forwardRef)(({variant:r="flat",size:e="md",color:t="basic",children:o},n)=>(0,hr.jsx)(fr.Provider,{value:{variant:r,size:e,color:t},children:(0,hr.jsx)("ul",{ref:n,className:a("menu"),children:o})}));T.displayName="Menu";var $r=require("react");var qr=require("react/jsx-runtime"),z=(0,$r.forwardRef)((p,i)=>{var c=p,{variant:r,color:e,children:t,className:o}=c,n=l(c,["variant","color","children","className"]);let s=Z();return(0,qr.jsx)("li",I(m({ref:i,className:a("menu-item",`menu-item-variant-${r!=null?r:s.variant}`,`menu-item-size-${s.size}`,`menu-item-color-${e!=null?e:s.color}`,o)},n),{children:t}))});z.displayName="MenuItem";var Jr=require("react");var Qr=require("react/jsx-runtime"),D=(0,Jr.forwardRef)(({children:r,className:e},t)=>{let o=Z();return(0,Qr.jsx)("li",{className:a("menu-separator",e)})});D.displayName="MenuSeparator";var xr=require("react/jsx-runtime"),_=(0,Zr.forwardRef)(({variant:r="flat",size:e="sm",color:t="basic",children:o,className:n},i)=>(0,xr.jsx)(L,{className:a(n!=null?n:"dropdown-defaultContent"),children:(0,xr.jsx)(T,{variant:r,size:e,color:t,children:o})}));_.displayName="DropdownContent";var _r=require("react");var jr=require("react/jsx-runtime"),j=(0,_r.forwardRef)((p,i)=>{var c=p,{children:r,variant:e,color:t,className:o}=c,n=l(c,["children","variant","color","className"]);let s=f();if(!s)throw new Error("DropdownItem should be used inside a DropdownContent");return(0,jr.jsx)(z,{variant:e,color:t,className:o,onClick:d=>{s.setOpen&&s.setOpen(!1),n.onClick&&n.onClick(d)},children:r})});j.displayName="DropdownItem";var re=require("react");var ee=require("react/jsx-runtime"),rr=(0,re.forwardRef)(({children:r,className:e},t)=>(0,ee.jsx)(D,{className:e}));rr.displayName="DropdownItem";var te=require("react");var oe=require("react/jsx-runtime"),er=(0,te.forwardRef)(({children:r},e)=>(0,oe.jsx)(C,{children:r}));er.displayName="DropdownTrigger";var tr=require("react");var H=require("react/jsx-runtime"),or=(0,tr.forwardRef)((i,n)=>{var p=i,{variant:r="default",placeholder:e,id:t}=p,o=l(p,["variant","placeholder","id"]);let c=(0,tr.useRef)(null);return(0,H.jsxs)("label",{htmlFor:t,className:a("wrapper",`wrapper-variant-${r}`),children:[(0,H.jsx)("input",{id:t,className:a("wrapper-input"),placeholder:e,ref:c}),(0,H.jsx)("span",{className:a("wrapper-content"),children:e})]})});or.displayName="Input";var ar=require("react");var N=require("react/jsx-runtime"),nr=(0,ar.forwardRef)(({children:r,keys:e},t)=>{let o=typeof e=="string"?[e]:Array.isArray(e)?e:[],n=(0,ar.useMemo)(()=>o.map(i=>(0,N.jsx)("abbr",{className:"kbd-abbr",title:yr[i],children:gr[i]},i)),[o]);return(0,N.jsxs)("div",{className:"kbd",children:[n,(0,N.jsx)("span",{children:r})]})});nr.displayName="Kbd";var gr={command:"\u2318",shift:"\u21E7",ctrl:"\u2303",option:"\u2325",enter:"\u21B5",delete:"\u232B",escape:"\u238B",tab:"\u21E5",capslock:"\u21EA",up:"\u2191",right:"\u2192",down:"\u2193",left:"\u2190",pageup:"\u21DE",pagedown:"\u21DF",home:"\u2196",end:"\u2198",help:"?",space:"\u2423"},yr={command:"Command",shift:"Shift",ctrl:"Control",option:"Option",enter:"Enter",delete:"Delete",escape:"Escape",tab:"Tab",capslock:"Caps Lock",up:"Up",right:"Right",down:"Down",left:"Left",pageup:"Page Up",pagedown:"Page Down",home:"Home",end:"End",help:"Help",space:"Space"};var pr=require("framer-motion"),ae=require("react");var ir=require("react/jsx-runtime"),sr=(0,ae.forwardRef)((s,c)=>{var d=s,{open:r=!1,setOpen:e=()=>{},backdrop:t,placement:o,children:n,className:i}=d,p=l(d,["open","setOpen","backdrop","placement","children","className"]);return(0,ir.jsx)(pr.AnimatePresence,{children:r&&(0,ir.jsx)(b,{open:r,setOpen:e,backdrop:t,placement:o,children:(0,ir.jsx)(pr.motion.div,{variants:{active:{opacity:1,transition:{duration:.2,ease:"easeOut"},zoom:1},inactive:{opacity:0,transition:{duration:.15},zoom:.4}},initial:"inactive",animate:"active",exit:"inactive",className:a("modal",i),children:n})})})});sr.displayName="Modal";var ne=require("react");var ie=require("react/jsx-runtime"),lr=(0,ne.forwardRef)(({children:r,className:e},t)=>(0,ie.jsx)("div",{className:a("navbar",e),children:r}));lr.displayName="Navbar";var pe=require("react");var se=require("react/jsx-runtime"),cr=(0,pe.forwardRef)(({children:r,className:e},t)=>(0,se.jsx)("div",{className:a("navbar-left",e),children:r}));cr.displayName="NavbarLeft";var le=require("react");var ce=require("react/jsx-runtime"),dr=(0,le.forwardRef)(({children:r,className:e},t)=>(0,ce.jsx)("div",{className:a("navbar-center",e),children:r}));dr.displayName="NavbarCenter";var de=require("react");var me=require("react/jsx-runtime"),mr=(0,de.forwardRef)(({children:r,className:e},t)=>(0,me.jsx)("div",{className:a("navbar-right",e),children:r}));mr.displayName="NavbarRight";var ve=require("react");var h=require("react/jsx-runtime"),vr=(0,ve.forwardRef)(({avatarProps:r,name:e,description:t,size:o="md"},n)=>{var i;return(0,h.jsxs)("div",{className:a("user",`user-size-${o}`),children:[(0,h.jsx)(g,m({size:(i=r==null?void 0:r.size)!=null?i:o},r)),(0,h.jsxs)("div",{className:a("user-wrapper"),children:[(0,h.jsx)("div",{className:a("name"),children:e}),(0,h.jsx)("div",{className:a("description"),children:t})]})]})});vr.displayName="User";0&&(module.exports={Avatar,Button,Card,CardContent,Checkbox,Dropdown,DropdownContent,DropdownItem,DropdownSeparator,DropdownTrigger,Input,Kbd,Menu,MenuItem,MenuSeparator,Modal,Navbar,NavbarCenter,NavbarLeft,NavbarRight,Overlay,Popover,PopoverContent,PopoverTrigger,User});