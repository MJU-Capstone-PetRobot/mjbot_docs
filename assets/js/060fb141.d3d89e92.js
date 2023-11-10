"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[965],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=u(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1612:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},i="Info",o={unversionedId:"ROS2/package/voice/info",id:"ROS2/package/voice/info",title:"Info",description:"node : voice",source:"@site/docs/ROS2/package/voice/info.md",sourceDirName:"ROS2/package/voice",slug:"/ROS2/package/voice/info",permalink:"/docs/ROS2/package/voice/info",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ROS2/package/voice/info.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/ROS2/package/vision/setup"},next:{title:"setup",permalink:"/docs/ROS2/package/voice/setup"}},p={},u=[{value:"node : voice",id:"node--voice",level:2},{value:"description",id:"description",level:3},{value:"command",id:"command",level:3},{value:"topic list",id:"topic-list",level:3}],m={toc:u},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"info"},"Info"),(0,r.kt)("h2",{id:"node--voice"},"node : voice"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uba85\ub839 \uc218\uc2e0 : \ub099\uc0c1 \uc758\uc2ec, CO\ub18d\ub3c4, \ubc30\ud130\ub9ac, \ud130\uce58")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc0c1\ud0dc \uc804\uc1a1 : \uac10\uc815 \uc0c1\ud0dc, \ubaa9 \uc81c\uc5b4, \ud314 \uc81c\uc5b4"))),(0,r.kt)("h3",{id:"command"},"command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ros2 run mjbot_voice mjbot_voice.py\n")),(0,r.kt)("h3",{id:"topic-list"},"topic list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/bat, /co_ppm"),(0,r.kt)("li",{parentName:"ul"},"/touch"),(0,r.kt)("li",{parentName:"ul"},"/emo"),(0,r.kt)("li",{parentName:"ul"},"/owner_fall"),(0,r.kt)("li",{parentName:"ul"},"/bat_percent"),(0,r.kt)("li",{parentName:"ul"},"/bat_time")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"pub/sub"),(0,r.kt)("th",{parentName:"tr",align:null},"msg type"),(0,r.kt)("th",{parentName:"tr",align:null},"msg structure"),(0,r.kt)("th",{parentName:"tr",align:null},"hz"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/bat"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/String"),(0,r.kt)("td",{parentName:"tr",align:null},'data = "90%, 1h 20m"'),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc30\ud130\ub9ac \uc794\ub7c9, \ub0a8\uc740 \uc2dc\uac04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/touch"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/Bool"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 0 or 1 ",(0,r.kt)("br",null)," 1 : touch ",(0,r.kt)("br",null)," 0 : no touch"),(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud130\uce58 \uc0c1\ud0dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/co_ppm"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 20 ~ 2000"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"CO \ub18d\ub3c4(ppm)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/owner_fall"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/Bool"),(0,r.kt)("td",{parentName:"tr",align:null},"data = 0 or 1 ",(0,r.kt)("br",null)," 1 : fall ",(0,r.kt)("br",null)," 0 : usual"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub099\uc0c1 \uc758\uc2ec \ubc1c\uc0dd \uc2dc"),(0,r.kt)("td",{parentName:"tr",align:null},"\ub099\uc0c1 \uc758\uc2ec \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/emo"),(0,r.kt)("td",{parentName:"tr",align:null},"pub"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/String"),(0,r.kt)("td",{parentName:"tr",align:null},'data = "NULL" ~ "mic_waiting" ',(0,r.kt)("br",null),' "NULL" : NULL ',(0,r.kt)("br",null),' "close" : close ',(0,r.kt)("br",null),' "moving" : \ub2f9\ud669 ',(0,r.kt)("br",null),' "wink" : \uc719\ud06c ',(0,r.kt)("br",null),' "angry" :  \ubd84\ub178 ',(0,r.kt)("br",null),' "sad" : \uc2ac\ud514 ',(0,r.kt)("br",null),' "daily" : \ud3c9\uc18c ',(0,r.kt)("br",null),' "mic_wating" : \uc74c\uc131 \uae30\ub2e4\ub9bc'),(0,r.kt)("td",{parentName:"tr",align:null},"\ubbf8\uc815"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac10\uc815 \uc0c1\ud0dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/bat_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/String"),(0,r.kt)("td",{parentName:"tr",align:null},'msg.data = "0.00" ~ "100.00"'),(0,r.kt)("td",{parentName:"tr",align:null},"0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc30\ud130\ub9ac \uc794\ub7c9 (%)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/bat_time"),(0,r.kt)("td",{parentName:"tr",align:null},"std_msgs/msg/String"),(0,r.kt)("td",{parentName:"tr",align:null},'msg.data = "0h 0m" ~ "99h 99m"'),(0,r.kt)("td",{parentName:"tr",align:null},"0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc30\ud130\ub9ac \uc9c0\uc18d \uc2dc\uac04"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);