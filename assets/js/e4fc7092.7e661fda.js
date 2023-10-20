"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[119],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(n),g=r,c=k["".concat(u,".").concat(g)]||k[g]||d[g]||l;return n?a.createElement(c,p(p({ref:e},m),{},{components:n})):a.createElement(c,p({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6571:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},p="Protocol",i={unversionedId:"FW/protocol",id:"FW/protocol",title:"Protocol",description:"\ubaa8\ub4e0 \ud328\ud0b7 \ub370\uc774\ud130\ub294 char \ud0c0\uc785",source:"@site/docs/FW/protocol.md",sourceDirName:"FW",slug:"/FW/protocol",permalink:"/docs/FW/protocol",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FW/protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Setup",permalink:"/docs/FW/setup"}},u={},o=[{value:"Orange Pi -&gt; ESP32",id:"orange-pi---esp32",level:2},{value:"ESP32 -&gt; Orange Pi",id:"esp32---orange-pi",level:2},{value:"ESP32_SUB -&gt; ESP32",id:"esp32_sub---esp32",level:2}],m={toc:o},k="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocol"},"Protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\ubaa8\ub4e0 \ud328\ud0b7 \ub370\uc774\ud130\ub294 char \ud0c0\uc785")),(0,r.kt)("h2",{id:"orange-pi---esp32"},"Orange Pi -> ESP32"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SOF"),(0,r.kt)("th",{parentName:"tr",align:null},"P_ID"),(0,r.kt)("th",{parentName:"tr",align:null},"DATA"),(0,r.kt)("th",{parentName:"tr",align:null},"EOF"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc815\uc0c1 \ub370\uc774\ud130 \ubc94\uc704"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc8fc\uae30"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"("),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"R,P,Z,Y"),(0,r.kt)("td",{parentName:"tr",align:null},")"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubaa9 \uc81c\uc5b4"),(0,r.kt)("td",{parentName:"tr",align:null},"R = -5.000 ~ 5.000 ",(0,r.kt)("br",null)," P = -5.000 ~ 5.000 ",(0,r.kt)("br",null)," Z = 60 ~ 100 ",(0,r.kt)("br",null)," Y = -5.000 ~ 5.000"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubbf8\uc815")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"("),(0,r.kt)("td",{parentName:"tr",align:null},"E"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac10\uc815 \ucf54\ub4dc"),(0,r.kt)("td",{parentName:"tr",align:null},")"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac10\uc815 \uc0c1\ud0dc"),(0,r.kt)("td",{parentName:"tr",align:null},'"0" : NULL ',(0,r.kt)("br",null),' "1" : close ',(0,r.kt)("br",null),' "2" : moving ',(0,r.kt)("br",null),' "3" : wink ',(0,r.kt)("br",null),' "4" : angry ',(0,r.kt)("br",null),' "5" : sad ',(0,r.kt)("br",null),' "6" : daily'),(0,r.kt)("td",{parentName:"tr",align:null},"\ubbf8\uc815")))),(0,r.kt)("p",null,"/"),(0,r.kt)("h2",{id:"esp32---orange-pi"},"ESP32 -> Orange Pi"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SOF"),(0,r.kt)("th",{parentName:"tr",align:null},"P_ID"),(0,r.kt)("th",{parentName:"tr",align:null},"DATA"),(0,r.kt)("th",{parentName:"tr",align:null},"EOF"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc815\uc0c1 \ub370\uc774\ud130 \ubc94\uc704"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc8fc\uae30"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc4f0\ub2f4"),(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc4f0\ub2f4 \uac10\uc9c0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 : touch ",(0,r.kt)("br",null)," 0 : no touch"),(0,r.kt)("td",{parentName:"tr",align:null},"Event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"ppm"),(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"CO\ub18d\ub3c4"),(0,r.kt)("td",{parentName:"tr",align:null},"20~2000"),(0,r.kt)("td",{parentName:"tr",align:null},"1\ucd08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"mm"),(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"\uce21\uc815\uac70\ub9ac"),(0,r.kt)("td",{parentName:"tr",align:null},"30~4500"),(0,r.kt)("td",{parentName:"tr",align:null},"100ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc794\ub7c9, \ub0a8\uc740 \uc2dc\uac04"),(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc30\ud130\ub9ac \uc0c1\ud0dc"),(0,r.kt)("td",{parentName:"tr",align:null},'"90%, 1h 20m"'),(0,r.kt)("td",{parentName:"tr",align:null},"1\ucd08")))),(0,r.kt)("h2",{id:"esp32_sub---esp32"},"ESP32_SUB -> ESP32"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud655\uc778 \ud544\uc694")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SOF"),(0,r.kt)("th",{parentName:"tr",align:null},"P_ID"),(0,r.kt)("th",{parentName:"tr",align:null},"DATA"),(0,r.kt)("th",{parentName:"tr",align:null},"EOF"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc815\uc0c1 \ub370\uc774\ud130 \ubc94\uc704"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc8fc\uae30"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);