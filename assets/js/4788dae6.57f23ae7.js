"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,u=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(i,".").concat(d)]||c[d]||m[d]||u;return n?r.createElement(b,l(l({ref:e},s),{},{components:n})):r.createElement(b,l({ref:e},s))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var u=n.length,l=new Array(u);l[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<u;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3856:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const u={},l="Ubuntu",o={unversionedId:"Ubuntu/README",id:"Ubuntu/README",title:"Ubuntu",description:"Ubuntu 22.04.2 LTS",source:"@site/docs/Ubuntu/README.md",sourceDirName:"Ubuntu",slug:"/Ubuntu/",permalink:"/docs/Ubuntu/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Ubuntu/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docs",permalink:"/docs/"}},i={},p=[{value:"Ubuntu 22.04.2 LTS",id:"ubuntu-22042-lts",level:2},{value:"Install Ubuntu",id:"install-ubuntu",level:2},{value:"On desktop",id:"on-desktop",level:3},{value:"On RPI4",id:"on-rpi4",level:3}],s={toc:p},c="wrapper";function m(t){let{components:e,...u}=t;return(0,a.kt)(c,(0,r.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ubuntu"},"Ubuntu"),(0,a.kt)("h2",{id:"ubuntu-22042-lts"},"Ubuntu 22.04.2 LTS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/desktop"},"Download Ubuntu Desktop"))),(0,a.kt)("h2",{id:"install-ubuntu"},"Install Ubuntu"),(0,a.kt)("h3",{id:"on-desktop"},"On desktop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview"},"How to run an Ubuntu Desktop virtual machine using VirtualBox 7"),"  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Skip Unattended Installation (\uc790\ub3d9\uc124\uce58 \uc2a4\ud0b5)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"skip",src:n(8896).Z,width:"787",height:"403"}),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc790\ub3d9\uc124\uce58 \uc120\ud0dd \uc2dc \uc124\uce58 \ud6c4 \ud130\ubbf8\ub110\uc774 \uc5f4\ub9ac\uc9c0 \uc54a\ub294 \ubc84\uadf8 \ubc1c\uc0dd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://velog.io/@jaehyung-eun/Virtual-Box-Ubuntu-%EC%84%A4%EC%B9%98#terminal-%EC%95%88%EC%97%B4%EB%A6%AC%EB%8A%94-%EB%AC%B8%EC%A0%9C"},"Terminal \uc548\uc5f4\ub9ac\ub294 \ubb38\uc81c")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/install-ubuntu-desktop#4-boot-from-usb-flash-drive"},"Install Ubuntu destop")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\ud6c4 \uc218\ub3d9 \uc124\uce58 \uc9c4\ud589"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open terminal and Type command"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt update")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt upgrade"),"   ")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"terminal",src:n(5052).Z,width:"802",height:"671"})))),(0,a.kt)("h3",{id:"on-rpi4"},"On RPI4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/how-to-install-ubuntu-desktop-on-raspberry-pi-4#1-overview"},"How to install Ubuntu Desktop on Raspberry Pi 4"))))}m.isMDXComponent=!0},8896:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Skip Unattended Installation-faea12efa444d5779af02ac0476022fe.png"},5052:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ubuntu 22.04 terminal open-338bf60c98560a4dff807f0aae71efba.png"}}]);