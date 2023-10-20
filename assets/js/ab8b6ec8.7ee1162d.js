"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[240],{3905:(t,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>o});var l=n(7294);function e(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,l)}return n}function p(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){e(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function i(t,a){if(null==t)return{};var n,l,e=function(t,a){if(null==t)return{};var n,l,e={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(e[n]=t[n]);return e}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var m=l.createContext({}),d=function(t){var a=l.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):p(p({},a),t)),n},k=function(t){var a=d(t.components);return l.createElement(m.Provider,{value:a},t.children)},u="mdxType",N={inlineCode:"code",wrapper:function(t){var a=t.children;return l.createElement(l.Fragment,{},a)}},g=l.forwardRef((function(t,a){var n=t.components,e=t.mdxType,r=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),u=d(n),g=e,o=u["".concat(m,".").concat(g)]||u[g]||N[g]||r;return n?l.createElement(o,p(p({ref:a},k),{},{components:n})):l.createElement(o,p({ref:a},k))}));function o(t,a){var n=arguments,e=a&&a.mdxType;if("string"==typeof t||e){var r=n.length,p=new Array(r);p[0]=g;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i[u]="string"==typeof t?t:e,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4787:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=n(7462),e=(n(7294),n(3905));const r={},p="Setup",i={unversionedId:"FW/setup",id:"FW/setup",title:"Setup",description:"Hardware",source:"@site/docs/FW/setup.md",sourceDirName:"FW",slug:"/FW/setup",permalink:"/docs/FW/setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FW/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Protocol",permalink:"/docs/FW/protocol"},next:{title:"Depth_Camera_D435i",permalink:"/docs/HW/Depth_Camera_D435i/"}},m={},d=[{value:"Hardware",id:"hardware",level:2},{value:"Dev Env",id:"dev-env",level:2},{value:"ESP32_M Pin Wiring",id:"esp32_m-pin-wiring",level:2},{value:"ESP32_S Pin Wiring",id:"esp32_s-pin-wiring",level:2}],k={toc:d},u="wrapper";function N(t){let{components:a,...n}=t;return(0,e.kt)(u,(0,l.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"setup"},"Setup"),(0,e.kt)("h2",{id:"hardware"},"Hardware"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},(0,e.kt)("a",{parentName:"p",href:"https://smartstore.naver.com/bneware/products/6729229592"},"ESP32-S3-WROOM-1 \uac1c\ubc1c\ubcf4\ub4dc"),"  "),(0,e.kt)("ol",{parentName:"li"},(0,e.kt)("li",{parentName:"ol"},"N16R8 : FLASH 16MB, PSRAM 8MB  "))),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},(0,e.kt)("a",{parentName:"p",href:"https://www.devicemart.co.kr/goods/view?no=1327402"},"MQ-7 \uc77c\uc0b0\ud654\ud0c4\uc18c \uac00\uc2a4 \uc13c\uc11c \ubaa8\ub4c8"),"  "))),(0,e.kt)("h2",{id:"dev-env"},"Dev Env"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Arduino IDE"),(0,e.kt)("li",{parentName:"ol"},"Arduino Library",(0,e.kt)("ol",{parentName:"li"},(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("a",{parentName:"li",href:"https://github.com/likhogub/AX-12A-servo-library/tree/master"},"AX-12A")),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("a",{parentName:"li",href:"https://github.com/miguel5612/MQSensorsLib"},"MQSensorsLib")),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("a",{parentName:"li",href:"https://github.com/Bodmer/TFT_eSPI.git"},"TFT_eSPI"))))),(0,e.kt)("h2",{id:"esp32_m-pin-wiring"},"ESP32_M Pin Wiring"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null},"Dev Board"),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"3.3V"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"3.3V"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"TXD0"),(0,e.kt)("td",{parentName:"tr",align:null},"UART0 TX"),(0,e.kt)("td",{parentName:"tr",align:null},"Opi TX (USB-C)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"RST(EN)"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"RXD0"),(0,e.kt)("td",{parentName:"tr",align:null},"UART0 RX"),(0,e.kt)("td",{parentName:"tr",align:null},"Opi RX (USB-C)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO4"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO1"),(0,e.kt)("td",{parentName:"tr",align:null},"UART1 TX"),(0,e.kt)("td",{parentName:"tr",align:null},"Neck TX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO5"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO2"),(0,e.kt)("td",{parentName:"tr",align:null},"UART1 RX"),(0,e.kt)("td",{parentName:"tr",align:null},"Neck RX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO6"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO42"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO7"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO41"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO15"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO40"),(0,e.kt)("td",{parentName:"tr",align:null},"UART3 TX"),(0,e.kt)("td",{parentName:"tr",align:null},"ESP_S TX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\ud130\uce58 \uc13c\uc11c"),(0,e.kt)("td",{parentName:"tr",align:null},"ADC"),(0,e.kt)("td",{parentName:"tr",align:null},"IO16"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO39"),(0,e.kt)("td",{parentName:"tr",align:null},"UART3 RX"),(0,e.kt)("td",{parentName:"tr",align:null},"ESP_S RX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\uac00\uc2a4 \uc13c\uc11c"),(0,e.kt)("td",{parentName:"tr",align:null},"ADC"),(0,e.kt)("td",{parentName:"tr",align:null},"IO17"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO38"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO18"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO37"),(0,e.kt)("td",{parentName:"tr",align:null},"PSRAM"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO8"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO36"),(0,e.kt)("td",{parentName:"tr",align:null},"PSRAM"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO3"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO35"),(0,e.kt)("td",{parentName:"tr",align:null},"PSRAM"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO46"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO0"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO9"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO45"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"L \ub208"),(0,e.kt)("td",{parentName:"tr",align:null},"CS"),(0,e.kt)("td",{parentName:"tr",align:null},"IO10"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO48"),(0,e.kt)("td",{parentName:"tr",align:null},"\uceec\ub7ecLED"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\ub208"),(0,e.kt)("td",{parentName:"tr",align:null},"RST"),(0,e.kt)("td",{parentName:"tr",align:null},"IO11"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO47"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"R \ub208"),(0,e.kt)("td",{parentName:"tr",align:null},"CS"),(0,e.kt)("td",{parentName:"tr",align:null},"IO12"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO21"),(0,e.kt)("td",{parentName:"tr",align:null},"DC"),(0,e.kt)("td",{parentName:"tr",align:null},"\ub208")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\ub208"),(0,e.kt)("td",{parentName:"tr",align:null},"DIN"),(0,e.kt)("td",{parentName:"tr",align:null},"IO13"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO20"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\ub208"),(0,e.kt)("td",{parentName:"tr",align:null},"CLK"),(0,e.kt)("td",{parentName:"tr",align:null},"IO14"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO19"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"VIN(5V)"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})))),(0,e.kt)("h2",{id:"esp32_s-pin-wiring"},"ESP32_S Pin Wiring"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null},"Dev Board"),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}),(0,e.kt)("th",{parentName:"tr",align:null}))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"3.3V"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"3.3V"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"TXD0"),(0,e.kt)("td",{parentName:"tr",align:null},"UART0 TX"),(0,e.kt)("td",{parentName:"tr",align:null},"USB-C")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"RST(EN)"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"RXD0"),(0,e.kt)("td",{parentName:"tr",align:null},"UART0 RX"),(0,e.kt)("td",{parentName:"tr",align:null},"USB-C")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO4"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO1"),(0,e.kt)("td",{parentName:"tr",align:null},"UART1 TX"),(0,e.kt)("td",{parentName:"tr",align:null},"Ultrasonic 1 TX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO5"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO2"),(0,e.kt)("td",{parentName:"tr",align:null},"UART1 RX"),(0,e.kt)("td",{parentName:"tr",align:null},"Ultrasonic 1 RX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ESP32_M"),(0,e.kt)("td",{parentName:"tr",align:null},"UART1"),(0,e.kt)("td",{parentName:"tr",align:null},"IO6"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO42"),(0,e.kt)("td",{parentName:"tr",align:null},"UART2 TX"),(0,e.kt)("td",{parentName:"tr",align:null},"Ultrasonic 2 TX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ESP32_M"),(0,e.kt)("td",{parentName:"tr",align:null},"UART1"),(0,e.kt)("td",{parentName:"tr",align:null},"IO7"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO41"),(0,e.kt)("td",{parentName:"tr",align:null},"UART2 RX"),(0,e.kt)("td",{parentName:"tr",align:null},"Ultrasonic 2 RX")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO15"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO40"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO16"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO39"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO17"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO38"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO18"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO37"),(0,e.kt)("td",{parentName:"tr",align:null},"PSRAM"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO8"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO36"),(0,e.kt)("td",{parentName:"tr",align:null},"PSRAM"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO3"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO35"),(0,e.kt)("td",{parentName:"tr",align:null},"PSRAM"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO46"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO0"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO9"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO45"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO10"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO48"),(0,e.kt)("td",{parentName:"tr",align:null},"\uceec\ub7ecLED"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"LCD"),(0,e.kt)("td",{parentName:"tr",align:null},"I2C1"),(0,e.kt)("td",{parentName:"tr",align:null},"IO11"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO47"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"LCD"),(0,e.kt)("td",{parentName:"tr",align:null},"I2C1"),(0,e.kt)("td",{parentName:"tr",align:null},"IO12"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO21"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Current Sensor"),(0,e.kt)("td",{parentName:"tr",align:null},"I2C"),(0,e.kt)("td",{parentName:"tr",align:null},"IO13"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO20"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Current Sensor"),(0,e.kt)("td",{parentName:"tr",align:null},"I2C"),(0,e.kt)("td",{parentName:"tr",align:null},"IO14"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"IO19"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"VIN(5V)"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null},"GND"),(0,e.kt)("td",{parentName:"tr",align:null}),(0,e.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);