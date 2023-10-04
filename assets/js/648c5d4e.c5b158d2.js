"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[997],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=m(n),k=r,s=d["".concat(o,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(s,p(p({ref:e},u),{},{components:n})):a.createElement(s,p({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2121:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},p="Info",i={unversionedId:"ROS2/package/opi_esp_bridge/info",id:"ROS2/package/opi_esp_bridge/info",title:"Info",description:"node : opiespcomm",source:"@site/docs/ROS2/package/opi_esp_bridge/info.md",sourceDirName:"ROS2/package/opi_esp_bridge",slug:"/ROS2/package/opi_esp_bridge/info",permalink:"/docs/ROS2/package/opi_esp_bridge/info",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ROS2/package/opi_esp_bridge/info.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Info",permalink:"/docs/ROS2/package/control/arm_control_node/info"},next:{title:"setup",permalink:"/docs/ROS2/package/opi_esp_bridge/setup"}},o={},m=[{value:"node : opi_esp_comm",id:"node--opi_esp_comm",level:2},{value:"description",id:"description",level:3},{value:"command",id:"command",level:3},{value:"topic list",id:"topic-list",level:3}],u={toc:m},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"info"},"Info"),(0,r.kt)("h2",{id:"node--opi_esp_comm"},"node : opi_esp_comm"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uba85\ub839 \uc218\uc2e0 : \uac10\uc815 \uc0c1\ud0dc, \ubaa9 \uc81c\uc5b4")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc0c1\ud0dc \uc804\uc1a1 : \ud130\uce58, \uac70\ub9ac, \ubc30\ud130\ub9ac, CO\ub18d\ub3c4"))),(0,r.kt)("h3",{id:"command"},"command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ros2 run opi_esp opi_esp_comm\n")),(0,r.kt)("h3",{id:"topic-list"},"topic list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/bat, /touch, /co_ppm, /distance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"esp32->orange pi \ud328\ud0b7 \uc218\uc2e0 \uc774\ud6c4 \ubc14\ub85c pub \ub428"))),(0,r.kt)("li",{parentName:"ul"},"/bat, /co_ppm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hz\ub294 esp32\uc5d0\uc11c \uacb0\uc815\ub428"))),(0,r.kt)("li",{parentName:"ul"},"/touch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud130\uce58 \uc0c1\ud0dc \ubcc0\ud654 \uc2dc\uc5d0\ub9cc pub \ub428"))),(0,r.kt)("li",{parentName:"ul"},"/emo",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac10\uc815 \uc0c1\ud0dc \ucd94\uac00 \uc2dc\uc5d0 \ud45c\uc815 \ub514\uc790\uc778, esp32 fw, opi_esp_comm node \uc5f0\ub3d9 \ud544\uc694")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"pub/sub"),(0,r.kt)("th",{parentName:"tr",align:null},"msg type"),(0,r.kt)("th",{parentName:"tr",align:null},"msg structure"),(0,r.kt)("th",{parentName:"tr",align:null},"hz"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/bat"),(0,r.kt)("td",{parentName:"tr",align:null},"pub"),(0,r.kt)("td",{parentName:"tr",align:null},"example_interfaces/msg/String"),(0,r.kt)("td",{parentName:"tr",align:null},'data = "90%, 1h 20m"'),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc30\ud130\ub9ac \uc794\ub7c9, \ub0a8\uc740 \uc2dc\uac04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/touch"),(0,r.kt)("td",{parentName:"tr",align:null},"pub"),(0,r.kt)("td",{parentName:"tr",align:null},"example_interfaces/msg/Bool"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 0 or 1 ",(0,r.kt)("br",null)," 1 : touch ",(0,r.kt)("br",null)," 0 : no touch"),(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud130\uce58 \uc0c1\ud0dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/co_ppm"),(0,r.kt)("td",{parentName:"tr",align:null},"pub"),(0,r.kt)("td",{parentName:"tr",align:null},"example_interfaces/msg/Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 20 ~ 2000"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"CO \ub18d\ub3c4(ppm)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/distance"),(0,r.kt)("td",{parentName:"tr",align:null},"pub"),(0,r.kt)("td",{parentName:"tr",align:null},"example_interfaces/msg/Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 30 ~ 4500"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd08\uc74c\ud30c \uc13c\uc11c \uce21\uc815 \uac70\ub9ac(mm)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/emo"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"example_interfaces/msg/String"),(0,r.kt)("td",{parentName:"tr",align:null},'data = "0" ~ "6" ',(0,r.kt)("br",null),' "0" : NULL ',(0,r.kt)("br",null),' "1" : close ',(0,r.kt)("br",null),' "2" : moving ',(0,r.kt)("br",null),' "3" : wink ',(0,r.kt)("br",null),' "4" : angry ',(0,r.kt)("br",null),' "5" : sad ',(0,r.kt)("br",null),' "6" : daily'),(0,r.kt)("td",{parentName:"tr",align:null},"\ubbf8\uc815"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac10\uc815 \uc0c1\ud0dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/neck_rpy"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"geometry_msgs/msg/Vector3"),(0,r.kt)("td",{parentName:"tr",align:null},"x = -5 ~ 5 ",(0,r.kt)("br",null)," y = -5 ~ 5 ",(0,r.kt)("br",null)," z = -5 ~ 5"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubbf8\uc815"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubaa9 \ud50c\ub7ab\ud3fc r,p,y  \ud68c\uc804 \uac01\ub3c4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/neck_z"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/UInt16"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 60 ~ 100"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubbf8\uc815"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubaa9 \ud50c\ub7ab\ud3fc z \uc704\uc544\ub798(\uc9c1\uc120) \uc6c0\uc9c1\uc784")))))}c.isMDXComponent=!0}}]);