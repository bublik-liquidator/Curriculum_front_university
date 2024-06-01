import{$ as P2,$a as D2,Aa as k,Ba as h,Ca as K2,Cb as t1,Da as Z2,G as K,Ha as T1,Hb as o1,Hc as F3,Ia as _1,Ic as D3,Ja as F1,Jb as A,K as z2,Ka as c1,Kc as B3,L as d2,La as j,Lc as R3,Ma as F2,Mc as I3,N as X2,Na as g2,Nc as E3,Oa as a1,P as F,Pa as D,Q as M2,Qa as e1,R as Q2,Ra as M3,Rb as l1,S as I,Sa as D1,T as E,Ta as i1,U as O,Z as u3,_a as C3,a as A2,aa as T2,ab as L2,ba as H,bb as g3,ca as b,cb as L3,d as n6,da as C2,db as x3,e as r6,ea as P,eb as b3,fb as n1,g as u2,gb as S3,ha as C,i as h3,ia as v2,ib as N3,ja as v,jb as r1,k as U,ka as A1,la as r2,mc as B1,na as _2,nb as w3,nc as k3,oa as P1,oc as Z,pa as Y2,pc as f1,qa as J2,qc as A3,ra as V,rc as x2,sa as u,ta as g,tc as P3,ua as W,uc as T3,va as G,vc as _3,xa as Y,xb as y3,ya as d3,z as V3,zb as s1}from"./chunk-3IDQFMH7.js";var U3=n6((R1,I1)=>{"use strict";(function(c,a){typeof define=="function"&&define.amd?define([],a):typeof R1<"u"?a():(a(),c.FileSaver={})})(R1,function(){"use strict";function c(t,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function a(t,o,f){var l=new XMLHttpRequest;l.open("GET",t),l.responseType="blob",l.onload=function(){s(l.response,o,f)},l.onerror=function(){console.error("could not download file")},l.send()}function n(t){var o=new XMLHttpRequest;o.open("HEAD",t,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function e(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,o,f){var l=i.URL||i.webkitURL,m=document.createElement("a");o=o||t.name||"download",m.download=o,m.rel="noopener",typeof t=="string"?(m.href=t,m.origin===location.origin?e(m):n(m.href)?a(t,o,f):e(m,m.target="_blank")):(m.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(m.href)},4e4),setTimeout(function(){e(m)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,f){if(o=o||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(c(t,f),o);else if(n(t))a(t,o,f);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){e(l)})}}:function(t,o,f,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof t=="string")return a(t,o,f);var m=t.type==="application/octet-stream",d=/constructor/i.test(i.HTMLElement)||i.safari,M=/CriOS\/[\d]+/.test(navigator.userAgent);if((M||m&&d||r)&&typeof FileReader<"u"){var N=new FileReader;N.onloadend=function(){var T=N.result;T=M?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=T:location=T,l=null},N.readAsDataURL(t)}else{var y=i.URL||i.webkitURL,B=y.createObjectURL(t);l?l.location=B:location.href=B,l=null,setTimeout(function(){y.revokeObjectURL(B)},4e4)}});i.saveAs=s.saveAs=s,typeof I1<"u"&&(I1.exports=s)})});var O3=(()=>{let a=class a{constructor(e){this.http=e}getUsersForCurriculas(e=1,i=Number.MAX_SAFE_INTEGER){let r={page:e.toString(),limit:i.toString()};return this.http.post(`${A.serverUrl}/user/get-users`,r)}searchUsers(e,i,r){let s={search:e,limit:r.toString(),page:i.toString()};return this.http.post(`${A.serverUrl}/user/search-users`,s)}getUsersForUserComponent(e=1,i=10){let r={page:e.toString(),limit:i.toString()};return this.http.post(`${A.serverUrl}/user/get-users`,r)}getUserById(e){return this.http.get(`${A.serverUrl}/user/get-user/${e}`)}updateUserById(e,i){return this.http.put(`${A.serverUrl}/user/update-user/${e}`,i)}createUser(e){return this.http.post(`${A.serverUrl}/user/create-user`,e)}deleteUser(e){return this.http.delete(`${A.serverUrl}/user/delete-user/${e}`)}};a.\u0275fac=function(i){return new(i||a)(X2(r1))},a.\u0275prov=z2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var q3=r6(U3());var m1=(()=>{let a=class a{constructor(e){this.http=e}getExpiringCurriculums(e=1,i=10){let r=new N3().set("page",e.toString()).set("limit",i.toString());return this.http.get(`${A.serverUrl}/curriculum/get-expiring-curriculums`,{params:r})}saveCurriculumAsWordToClient(e){this.http.post(`${A.serverUrl}/curriculum/save-curriculum-asWord-to-client/${e}`,{id:e},{responseType:"blob",observe:"response"}).subscribe(i=>{let s=(i.headers.get("content-disposition")||"").split(";")[1]?.split("=")[1]||`file${e}.docx`;i.body&&(0,q3.default)(i.body,s)})}getCurriculumById(e){return this.http.get(`${A.serverUrl}/curriculum/get-curriculum/${e}`)}updateCurriculumById(e,i){return this.http.put(`${A.serverUrl}/curriculum/update-curriculum-info/${e}`,i)}updateFileById(e,i){let r=new FormData;return r.append("file",i),this.http.put(`${A.serverUrl}/curriculum/update-curriculum/${e}`,r)}createCurriculum(e,i){let r=new FormData;return r.append("curriculum",JSON.stringify(e)),r.append("file",i,i.name),this.http.post(`${A.serverUrl}/curriculum/create-curriculum`,r)}deleteCurriculum(e){return this.http.delete(`${A.serverUrl}/curriculum/delete-curriculum/${e}`)}getCurriculums(e=1,i=10){let r={page:e.toString(),limit:i.toString()},s=`${A.serverUrl}/curriculum/get-curriculums`;return console.log("HTTP Request:","POST",s,r),this.http.post(s,r)}searchCurriculums(e="",i=1,r=10){let s={search:e,limit:r,page:i};return console.log(s),this.http.post(`${A.serverUrl}/curriculum/search-curriculums`,s)}};a.\u0275fac=function(i){return new(i||a)(X2(r1))},a.\u0275prov=z2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var t6=["nzType","avatar"];function o6(c,a){if(c&1&&(V(0,"div",5),g(1,"nz-skeleton-element",6),u()),c&2){let n=h(2);H(),v("nzSize",n.avatar.size||"default")("nzShape",n.avatar.shape||"circle")}}function l6(c,a){if(c&1&&g(0,"h3",7),c&2){let n=h(2);A1("width",n.toCSSUnit(n.title.width))}}function f6(c,a){if(c&1&&g(0,"li"),c&2){let n=a.index,e=h(3);A1("width",e.toCSSUnit(e.widthList[n]))}}function m6(c,a){if(c&1&&(V(0,"ul",8),C(1,f6,1,2,"li",9),u()),c&2){let n=h(2);H(),v("ngForOf",n.rowsList)}}function z6(c,a){if(c&1&&(W(0),C(1,o6,2,2,"div",1),V(2,"div",2),C(3,l6,1,2,"h3",3)(4,m6,2,1,"ul",4),u(),G()),c&2){let n=h();H(),v("ngIf",!!n.nzAvatar),H(2),v("ngIf",!!n.nzTitle),H(),v("ngIf",!!n.nzParagraph)}}function v6(c,a){c&1&&(W(0),Z2(1),G())}var p6=["*"],H6=(()=>{let a=class a{constructor(){this.nzActive=!1,this.nzBlock=!1}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=Q2({type:a,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(i,r){i&2&&r2("ant-skeleton-active",r.nzActive)("ant-skeleton-block",r.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"},standalone:!0});let c=a;return U([Z()],c.prototype,"nzBlock",void 0),c})();var h6=(()=>{let a=class a{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(e){if(e.nzSize&&typeof this.nzSize=="number"){let i=`${this.nzSize}px`;this.styleMap={width:i,height:i,"line-height":i}}else this.styleMap={}}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=F({type:a,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},standalone:!0,features:[I,D],attrs:t6,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(i,r){i&1&&g(0,"span",0),i&2&&(r2("ant-skeleton-avatar-square",r.nzShape==="square")("ant-skeleton-avatar-circle",r.nzShape==="circle")("ant-skeleton-avatar-lg",r.nzSize==="large")("ant-skeleton-avatar-sm",r.nzSize==="small"),v("ngStyle",r.styleMap))},dependencies:[b3],encapsulation:2,changeDetection:0});let c=a;return c})();var W3=(()=>{let a=class a{constructor(e){this.cdr=e,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[]}toCSSUnit(e=""){return k3(e)}getTitleProps(){let e=!!this.nzAvatar,i=!!this.nzParagraph,r="";return!e&&i?r="38%":e&&i&&(r="50%"),A2({width:r},this.getProps(this.nzTitle))}getAvatarProps(){let e=this.nzTitle&&!this.nzParagraph?"square":"circle";return A2({shape:e,size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){let e=!!this.nzAvatar,i=!!this.nzTitle,r={};return(!e||!i)&&(r.width="61%"),!e&&i?r.rows=3:r.rows=2,A2(A2({},r),this.getProps(this.nzParagraph))}getProps(e){return e&&typeof e=="object"?e:{}}getWidthList(){let{width:e,rows:i}=this.paragraph,r=[];return e&&Array.isArray(e)?r=e:e&&!Array.isArray(e)&&(r=[],r[i-1]=e),r}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(e){(e.nzTitle||e.nzAvatar||e.nzParagraph)&&this.updateProps()}};a.\u0275fac=function(i){return new(i||a)(b(C2))},a.\u0275cmp=F({type:a,selectors:[["nz-skeleton"]],hostAttrs:[1,"ant-skeleton"],hostVars:6,hostBindings:function(i,r){i&2&&r2("ant-skeleton-with-avatar",!!r.nzAvatar)("ant-skeleton-active",r.nzActive)("ant-skeleton-round",!!r.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],standalone:!0,features:[I,D],ngContentSelectors:p6,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(i,r){i&1&&(K2(),C(0,z6,5,3,"ng-container",0)(1,v6,2,0,"ng-container",0)),i&2&&(v("ngIf",r.nzLoading),H(),v("ngIf",!r.nzLoading))},dependencies:[H6,h6,L2,D2],encapsulation:2,changeDetection:0});let c=a;return c})(),G3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=M2({type:a}),a.\u0275inj=d2({});let c=a;return c})();function j3(c,a){var n=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),n.push.apply(n,e)}return n}function z(c){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?j3(Object(n),!0).forEach(function(e){w(c,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(n)):j3(Object(n)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(n,e))})}return c}function L1(c){"@babel/helpers - typeof";return L1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L1(c)}function u6(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function $3(c,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function d6(c,a,n){return a&&$3(c.prototype,a),n&&$3(c,n),Object.defineProperty(c,"prototype",{writable:!1}),c}function w(c,a,n){return a in c?Object.defineProperty(c,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):c[a]=n,c}function a3(c,a){return C6(c)||L6(c,a)||u4(c,a)||b6()}function G2(c){return M6(c)||g6(c)||u4(c)||x6()}function M6(c){if(Array.isArray(c))return W1(c)}function C6(c){if(Array.isArray(c))return c}function g6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function L6(c,a){var n=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(n!=null){var e=[],i=!0,r=!1,s,t;try{for(n=n.call(c);!(i=(s=n.next()).done)&&(e.push(s.value),!(a&&e.length===a));i=!0);}catch(o){r=!0,t=o}finally{try{!i&&n.return!=null&&n.return()}finally{if(r)throw t}}return e}}function u4(c,a){if(c){if(typeof c=="string")return W1(c,a);var n=Object.prototype.toString.call(c).slice(8,-1);if(n==="Object"&&c.constructor&&(n=c.constructor.name),n==="Map"||n==="Set")return Array.from(c);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W1(c,a)}}function W1(c,a){(a==null||a>c.length)&&(a=c.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=c[n];return e}function x6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var X3=function(){},e3={},d4={},M4=null,C4={mark:X3,measure:X3};try{typeof window<"u"&&(e3=window),typeof document<"u"&&(d4=document),typeof MutationObserver<"u"&&(M4=MutationObserver),typeof performance<"u"&&(C4=performance)}catch{}var S6=e3.navigator||{},Q3=S6.userAgent,Y3=Q3===void 0?"":Q3,t2=e3,x=d4,J3=M4,z1=C4,h5=!!t2.document,i2=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",g4=~Y3.indexOf("MSIE")||~Y3.indexOf("Trident/"),v1,p1,H1,h1,V1,c2="___FONT_AWESOME___",G1=16,L4="fa",x4="svg-inline--fa",h2="data-fa-i2svg",j1="data-fa-pseudo-element",N6="data-fa-pseudo-element-pending",i3="data-prefix",n3="data-icon",K3="fontawesome-i2svg",w6="async",y6=["HTML","HEAD","STYLE","SCRIPT"],b4=function(){try{return!0}catch{return!1}}(),L="classic",S="sharp",r3=[L,S];function j2(c){return new Proxy(c,{get:function(n,e){return e in n?n[e]:n[L]}})}var E2=j2((v1={},w(v1,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(v1,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),v1)),O2=j2((p1={},w(p1,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(p1,S,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),p1)),U2=j2((H1={},w(H1,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(H1,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),H1)),k6=j2((h1={},w(h1,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(h1,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),h1)),A6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,S4="fa-layers-text",P6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,T6=j2((V1={},w(V1,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(V1,S,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),V1)),N4=[1,2,3,4,5,6,7,8,9,10],_6=N4.concat([11,12,13,14,15,16,17,18,19,20]),F6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q2=new Set;Object.keys(O2[L]).map(q2.add.bind(q2));Object.keys(O2[S]).map(q2.add.bind(q2));var D6=[].concat(r3,G2(q2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(N4.map(function(c){return"".concat(c,"x")})).concat(_6.map(function(c){return"w-".concat(c)})),R2=t2.FontAwesomeConfig||{};function B6(c){var a=x.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function R6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}x&&typeof x.querySelector=="function"&&(Z3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Z3.forEach(function(c){var a=a3(c,2),n=a[0],e=a[1],i=R6(B6(n));i!=null&&(R2[e]=i)}));var Z3,w4={styleDefault:"solid",familyDefault:"classic",cssPrefix:L4,replacementClass:x4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R2.familyPrefix&&(R2.cssPrefix=R2.familyPrefix);var y2=z(z({},w4),R2);y2.autoReplaceSvg||(y2.observeMutations=!1);var p={};Object.keys(w4).forEach(function(c){Object.defineProperty(p,c,{enumerable:!0,set:function(n){y2[c]=n,I2.forEach(function(e){return e(p)})},get:function(){return y2[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(a){y2.cssPrefix=a,I2.forEach(function(n){return n(p)})},get:function(){return y2.cssPrefix}});t2.FontAwesomeConfig=p;var I2=[];function I6(c){return I2.push(c),function(){I2.splice(I2.indexOf(c),1)}}var s2=G1,J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E6(c){if(!(!c||!i2)){var a=x.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var n=x.head.childNodes,e=null,i=n.length-1;i>-1;i--){var r=n[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=r)}return x.head.insertBefore(a,e),c}}var O6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W2(){for(var c=12,a="";c-- >0;)a+=O6[Math.random()*62|0];return a}function k2(c){for(var a=[],n=(c||[]).length>>>0;n--;)a[n]=c[n];return a}function s3(c){return c.classList?k2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function y4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function U6(c){return Object.keys(c||{}).reduce(function(a,n){return a+"".concat(n,'="').concat(y4(c[n]),'" ')},"").trim()}function S1(c){return Object.keys(c||{}).reduce(function(a,n){return a+"".concat(n,": ").concat(c[n].trim(),";")},"")}function t3(c){return c.size!==J.size||c.x!==J.x||c.y!==J.y||c.rotate!==J.rotate||c.flipX||c.flipY}function q6(c){var a=c.transform,n=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(t)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:o,path:f}}function W6(c){var a=c.transform,n=c.width,e=n===void 0?G1:n,i=c.height,r=i===void 0?G1:i,s=c.startCentered,t=s===void 0?!1:s,o="";return t&&g4?o+="translate(".concat(a.x/s2-e/2,"em, ").concat(a.y/s2-r/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/s2,"em), calc(-50% + ").concat(a.y/s2,"em)) "):o+="translate(".concat(a.x/s2,"em, ").concat(a.y/s2,"em) "),o+="scale(".concat(a.size/s2*(a.flipX?-1:1),", ").concat(a.size/s2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var G6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function k4(){var c=L4,a=x4,n=p.cssPrefix,e=p.replacementClass,i=G6;if(n!==c||e!==a){var r=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");i=i.replace(r,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(t,".".concat(e))}return i}var c4=!1;function E1(){p.autoAddCss&&!c4&&(E6(k4()),c4=!0)}var j6={mixout:function(){return{dom:{css:k4,insertCss:E1}}},hooks:function(){return{beforeDOMElementCreation:function(){E1()},beforeI2svg:function(){E1()}}}},a2=t2||{};a2[c2]||(a2[c2]={});a2[c2].styles||(a2[c2].styles={});a2[c2].hooks||(a2[c2].hooks={});a2[c2].shims||(a2[c2].shims=[]);var X=a2[c2],A4=[],$6=function c(){x.removeEventListener("DOMContentLoaded",c),x1=1,A4.map(function(a){return a()})},x1=!1;i2&&(x1=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),x1||x.addEventListener("DOMContentLoaded",$6));function X6(c){i2&&(x1?setTimeout(c,0):A4.push(c))}function $2(c){var a=c.tag,n=c.attributes,e=n===void 0?{}:n,i=c.children,r=i===void 0?[]:i;return typeof c=="string"?y4(c):"<".concat(a," ").concat(U6(e),">").concat(r.map($2).join(""),"</").concat(a,">")}function a4(c,a,n){if(c&&c[a]&&c[a][n])return{prefix:a,iconName:n,icon:c[a][n]}}var Q6=function(a,n){return function(e,i,r,s){return a.call(n,e,i,r,s)}},O1=function(a,n,e,i){var r=Object.keys(a),s=r.length,t=i!==void 0?Q6(n,i):n,o,f,l;for(e===void 0?(o=1,l=a[r[0]]):(o=0,l=e);o<s;o++)f=r[o],l=t(l,a[f],f,a);return l};function Y6(c){for(var a=[],n=0,e=c.length;n<e;){var i=c.charCodeAt(n++);if(i>=55296&&i<=56319&&n<e){var r=c.charCodeAt(n++);(r&64512)==56320?a.push(((i&1023)<<10)+(r&1023)+65536):(a.push(i),n--)}else a.push(i)}return a}function $1(c){var a=Y6(c);return a.length===1?a[0].toString(16):null}function J6(c,a){var n=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&n>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function e4(c){return Object.keys(c).reduce(function(a,n){var e=c[n],i=!!e.icon;return i?a[e.iconName]=e.icon:a[n]=e,a},{})}function X1(c,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.skipHooks,i=e===void 0?!1:e,r=e4(a);typeof X.hooks.addPack=="function"&&!i?X.hooks.addPack(c,e4(a)):X.styles[c]=z(z({},X.styles[c]||{}),r),c==="fas"&&X1("fa",a)}var u1,d1,M1,S2=X.styles,K6=X.shims,Z6=(u1={},w(u1,L,Object.values(U2[L])),w(u1,S,Object.values(U2[S])),u1),o3=null,P4={},T4={},_4={},F4={},D4={},c0=(d1={},w(d1,L,Object.keys(E2[L])),w(d1,S,Object.keys(E2[S])),d1);function a0(c){return~D6.indexOf(c)}function e0(c,a){var n=a.split("-"),e=n[0],i=n.slice(1).join("-");return e===c&&i!==""&&!a0(i)?i:null}var B4=function(){var a=function(r){return O1(S2,function(s,t,o){return s[o]=O1(t,r,{}),s},{})};P4=a(function(i,r,s){if(r[3]&&(i[r[3]]=s),r[2]){var t=r[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){i[o.toString(16)]=s})}return i}),T4=a(function(i,r,s){if(i[s]=s,r[2]){var t=r[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){i[o]=s})}return i}),D4=a(function(i,r,s){var t=r[2];return i[s]=s,t.forEach(function(o){i[o]=s}),i});var n="far"in S2||p.autoFetchSvg,e=O1(K6,function(i,r){var s=r[0],t=r[1],o=r[2];return t==="far"&&!n&&(t="fas"),typeof s=="string"&&(i.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:t,iconName:o}),i},{names:{},unicodes:{}});_4=e.names,F4=e.unicodes,o3=N1(p.styleDefault,{family:p.familyDefault})};I6(function(c){o3=N1(c.styleDefault,{family:p.familyDefault})});B4();function l3(c,a){return(P4[c]||{})[a]}function i0(c,a){return(T4[c]||{})[a]}function H2(c,a){return(D4[c]||{})[a]}function R4(c){return _4[c]||{prefix:null,iconName:null}}function n0(c){var a=F4[c],n=l3("fas",c);return a||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function o2(){return o3}var f3=function(){return{prefix:null,iconName:null,rest:[]}};function N1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.family,e=n===void 0?L:n,i=E2[e][c],r=O2[e][c]||O2[e][i],s=c in X.styles?c:null;return r||s||null}var i4=(M1={},w(M1,L,Object.keys(U2[L])),w(M1,S,Object.keys(U2[S])),M1);function w1(c){var a,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,i=e===void 0?!1:e,r=(a={},w(a,L,"".concat(p.cssPrefix,"-").concat(L)),w(a,S,"".concat(p.cssPrefix,"-").concat(S)),a),s=null,t=L;(c.includes(r[L])||c.some(function(f){return i4[L].includes(f)}))&&(t=L),(c.includes(r[S])||c.some(function(f){return i4[S].includes(f)}))&&(t=S);var o=c.reduce(function(f,l){var m=e0(p.cssPrefix,l);if(S2[l]?(l=Z6[t].includes(l)?k6[t][l]:l,s=l,f.prefix=l):c0[t].indexOf(l)>-1?(s=l,f.prefix=N1(l,{family:t})):m?f.iconName=m:l!==p.replacementClass&&l!==r[L]&&l!==r[S]&&f.rest.push(l),!i&&f.prefix&&f.iconName){var d=s==="fa"?R4(f.iconName):{},M=H2(f.prefix,f.iconName);d.prefix&&(s=null),f.iconName=d.iconName||M||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!S2.far&&S2.fas&&!p.autoFetchSvg&&(f.prefix="fas")}return f},f3());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===S&&(S2.fass||p.autoFetchSvg)&&(o.prefix="fass",o.iconName=H2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=o2()||"fas"),o}var r0=function(){function c(){u6(this,c),this.definitions={}}return d6(c,[{key:"add",value:function(){for(var n=this,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){n.definitions[t]=z(z({},n.definitions[t]||{}),s[t]),X1(t,s[t]);var o=U2[L][t];o&&X1(o,s[t]),B4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(r){var s=i[r],t=s.prefix,o=s.iconName,f=s.icon,l=f[2];n[t]||(n[t]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[t][m]=f)}),n[t][o]=f}),n}}]),c}(),n4=[],N2={},w2={},s0=Object.keys(w2);function t0(c,a){var n=a.mixoutsTo;return n4=c,N2={},Object.keys(w2).forEach(function(e){s0.indexOf(e)===-1&&delete w2[e]}),n4.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),L1(i[s])==="object"&&Object.keys(i[s]).forEach(function(t){n[s]||(n[s]={}),n[s][t]=i[s][t]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(s){N2[s]||(N2[s]=[]),N2[s].push(r[s])})}e.provides&&e.provides(w2)}),n}function Q1(c,a){for(var n=arguments.length,e=new Array(n>2?n-2:0),i=2;i<n;i++)e[i-2]=arguments[i];var r=N2[c]||[];return r.forEach(function(s){a=s.apply(null,[a].concat(e))}),a}function V2(c){for(var a=arguments.length,n=new Array(a>1?a-1:0),e=1;e<a;e++)n[e-1]=arguments[e];var i=N2[c]||[];i.forEach(function(r){r.apply(null,n)})}function e2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return w2[c]?w2[c].apply(null,a):void 0}function Y1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,n=c.prefix||o2();if(a)return a=H2(n,a)||a,a4(I4.definitions,n,a)||a4(X.styles,n,a)}var I4=new r0,o0=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,V2("noAuto")},l0={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i2?(V2("beforeI2svg",a),e2("pseudoElements2svg",a),e2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,X6(function(){m0({autoReplaceSvgRoot:n}),V2("watch",a)})}},f0={icon:function(a){if(a===null)return null;if(L1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:H2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var n=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=N1(a[0]);return{prefix:e,iconName:H2(e,n)||n}}if(typeof a=="string"&&(a.indexOf("".concat(p.cssPrefix,"-"))>-1||a.match(A6))){var i=w1(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||o2(),iconName:H2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var r=o2();return{prefix:r,iconName:H2(r,a)||a}}}},$={noAuto:o0,config:p,dom:l0,parse:f0,library:I4,findIconDefinition:Y1,toHtml:$2},m0=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot,e=n===void 0?x:n;(Object.keys(X.styles).length>0||p.autoFetchSvg)&&i2&&p.autoReplaceSvg&&$.dom.i2svg({node:e})};function y1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return $2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(i2){var e=x.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function z0(c){var a=c.children,n=c.main,e=c.mask,i=c.attributes,r=c.styles,s=c.transform;if(t3(s)&&n.found&&!e.found){var t=n.width,o=n.height,f={x:t/o/2,y:.5};i.style=S1(z(z({},r),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function v0(c){var a=c.prefix,n=c.iconName,e=c.children,i=c.attributes,r=c.symbol,s=r===!0?"".concat(a,"-").concat(p.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:s}),children:e}]}]}function m3(c){var a=c.icons,n=a.main,e=a.mask,i=c.prefix,r=c.iconName,s=c.transform,t=c.symbol,o=c.title,f=c.maskId,l=c.titleId,m=c.extra,d=c.watchable,M=d===void 0?!1:d,N=e.found?e:n,y=N.width,B=N.height,T=i==="fak",_=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(function(n2){return m.classes.indexOf(n2)===-1}).filter(function(n2){return n2!==""||!!n2}).concat(m.classes).join(" "),R={children:[],attributes:z(z({},m.attributes),{},{"data-prefix":i,"data-icon":r,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(B)})},Q=T&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/B*16*.0625,"em")}:{};M&&(R.attributes[h2]=""),o&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(l||W2())},children:[o]}),delete R.attributes.title);var q=z(z({},R),{},{prefix:i,iconName:r,main:n,mask:e,maskId:f,transform:s,symbol:t,styles:z(z({},Q),m.styles)}),f2=e.found&&n.found?e2("generateAbstractMask",q)||{children:[],attributes:{}}:e2("generateAbstractIcon",q)||{children:[],attributes:{}},m2=f2.children,k1=f2.attributes;return q.children=m2,q.attributes=k1,t?v0(q):z0(q)}function r4(c){var a=c.content,n=c.width,e=c.height,i=c.transform,r=c.title,s=c.extra,t=c.watchable,o=t===void 0?!1:t,f=z(z(z({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(f[h2]="");var l=z({},s.styles);t3(i)&&(l.transform=W6({transform:i,startCentered:!0,width:n,height:e}),l["-webkit-transform"]=l.transform);var m=S1(l);m.length>0&&(f.style=m);var d=[];return d.push({tag:"span",attributes:f,children:[a]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function p0(c){var a=c.content,n=c.title,e=c.extra,i=z(z(z({},e.attributes),n?{title:n}:{}),{},{class:e.classes.join(" ")}),r=S1(e.styles);r.length>0&&(i.style=r);var s=[];return s.push({tag:"span",attributes:i,children:[a]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var U1=X.styles;function J1(c){var a=c[0],n=c[1],e=c.slice(4),i=a3(e,1),r=i[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:a,height:n,icon:s}}var H0={found:!1,width:512,height:512};function h0(c,a){!b4&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function K1(c,a){var n=a;return a==="fa"&&p.styleDefault!==null&&(a=o2()),new Promise(function(e,i){var r={found:!1,width:512,height:512,icon:e2("missingIconAbstract")||{}};if(n==="fa"){var s=R4(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&U1[a]&&U1[a][c]){var t=U1[a][c];return e(J1(t))}h0(c,a),e(z(z({},H0),{},{icon:p.showMissingIcons&&c?e2("missingIconAbstract")||{}:{}}))})}var s4=function(){},Z1=p.measurePerformance&&z1&&z1.mark&&z1.measure?z1:{mark:s4,measure:s4},B2='FA "6.5.2"',V0=function(a){return Z1.mark("".concat(B2," ").concat(a," begins")),function(){return E4(a)}},E4=function(a){Z1.mark("".concat(B2," ").concat(a," ends")),Z1.measure("".concat(B2," ").concat(a),"".concat(B2," ").concat(a," begins"),"".concat(B2," ").concat(a," ends"))},z3={begin:V0,end:E4},C1=function(){};function t4(c){var a=c.getAttribute?c.getAttribute(h2):null;return typeof a=="string"}function u0(c){var a=c.getAttribute?c.getAttribute(i3):null,n=c.getAttribute?c.getAttribute(n3):null;return a&&n}function d0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function M0(){if(p.autoReplaceSvg===!0)return g1.replace;var c=g1[p.autoReplaceSvg];return c||g1.replace}function C0(c){return x.createElementNS("http://www.w3.org/2000/svg",c)}function g0(c){return x.createElement(c)}function O4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.ceFn,e=n===void 0?c.tag==="svg"?C0:g0:n;if(typeof c=="string")return x.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){i.setAttribute(s,c.attributes[s])});var r=c.children||[];return r.forEach(function(s){i.appendChild(O4(s,{ceFn:e}))}),i}function L0(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var g1={replace:function(a){var n=a[0];if(n.parentNode)if(a[1].forEach(function(i){n.parentNode.insertBefore(O4(i),n)}),n.getAttribute(h2)===null&&p.keepOriginalSource){var e=x.createComment(L0(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(a){var n=a[0],e=a[1];if(~s3(n).indexOf(p.replacementClass))return g1.replace(a);var i=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var r=e[0].attributes.class.split(" ").reduce(function(t,o){return o===p.replacementClass||o.match(i)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var s=e.map(function(t){return $2(t)}).join(`
`);n.setAttribute(h2,""),n.innerHTML=s}};function o4(c){c()}function U4(c,a){var n=typeof a=="function"?a:C1;if(c.length===0)n();else{var e=o4;p.mutateApproach===w6&&(e=t2.requestAnimationFrame||o4),e(function(){var i=M0(),r=z3.begin("mutate");c.map(i),r(),n()})}}var v3=!1;function q4(){v3=!0}function c3(){v3=!1}var b1=null;function l4(c){if(J3&&p.observeMutations){var a=c.treeCallback,n=a===void 0?C1:a,e=c.nodeCallback,i=e===void 0?C1:e,r=c.pseudoElementsCallback,s=r===void 0?C1:r,t=c.observeMutationsRoot,o=t===void 0?x:t;b1=new J3(function(f){if(!v3){var l=o2();k2(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!t4(m.addedNodes[0])&&(p.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&t4(m.target)&&~F6.indexOf(m.attributeName))if(m.attributeName==="class"&&u0(m.target)){var d=w1(s3(m.target)),M=d.prefix,N=d.iconName;m.target.setAttribute(i3,M||l),N&&m.target.setAttribute(n3,N)}else d0(m.target)&&i(m.target)})}}),i2&&b1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function x0(){b1&&b1.disconnect()}function b0(c){var a=c.getAttribute("style"),n=[];return a&&(n=a.split(";").reduce(function(e,i){var r=i.split(":"),s=r[0],t=r.slice(1);return s&&t.length>0&&(e[s]=t.join(":").trim()),e},{})),n}function S0(c){var a=c.getAttribute("data-prefix"),n=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=w1(s3(c));return i.prefix||(i.prefix=o2()),a&&n&&(i.prefix=a,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=i0(i.prefix,c.innerText)||l3(i.prefix,$1(c.innerText))),!i.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function N0(c){var a=k2(c.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),n=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return p.autoA11y&&(n?a["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(e||W2()):(a["aria-hidden"]="true",a.focusable="false")),a}function w0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=S0(c),e=n.iconName,i=n.prefix,r=n.rest,s=N0(c),t=Q1("parseNodeAttributes",{},c),o=a.styleParser?b0(c):[];return z({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:J,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},t)}var y0=X.styles;function W4(c){var a=p.autoReplaceSvg==="nest"?f4(c,{styleParser:!1}):f4(c);return~a.extra.classes.indexOf(S4)?e2("generateLayersText",c,a):e2("generateSvgReplacementMutation",c,a)}var l2=new Set;r3.map(function(c){l2.add("fa-".concat(c))});Object.keys(E2[L]).map(l2.add.bind(l2));Object.keys(E2[S]).map(l2.add.bind(l2));l2=G2(l2);function m4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!i2)return Promise.resolve();var n=x.documentElement.classList,e=function(m){return n.add("".concat(K3,"-").concat(m))},i=function(m){return n.remove("".concat(K3,"-").concat(m))},r=p.autoFetchSvg?l2:r3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(y0));r.includes("fa")||r.push("fa");var s=[".".concat(S4,":not([").concat(h2,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(h2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=k2(c.querySelectorAll(s))}catch{}if(t.length>0)e("pending"),i("complete");else return Promise.resolve();var o=z3.begin("onTree"),f=t.reduce(function(l,m){try{var d=W4(m);d&&l.push(d)}catch(M){b4||M.name==="MissingIcon"&&console.error(M)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(d){U4(d,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),o(),l()})}).catch(function(d){o(),m(d)})})}function k0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W4(c).then(function(n){n&&U4([n],a)})}function A0(c){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Y1(a||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Y1(i||{})),c(e,z(z({},n),{},{mask:i}))}}var P0=function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,i=e===void 0?J:e,r=n.symbol,s=r===void 0?!1:r,t=n.mask,o=t===void 0?null:t,f=n.maskId,l=f===void 0?null:f,m=n.title,d=m===void 0?null:m,M=n.titleId,N=M===void 0?null:M,y=n.classes,B=y===void 0?[]:y,T=n.attributes,_=T===void 0?{}:T,R=n.styles,Q=R===void 0?{}:R;if(a){var q=a.prefix,f2=a.iconName,m2=a.icon;return y1(z({type:"icon"},a),function(){return V2("beforeDOMElementCreation",{iconDefinition:a,params:n}),p.autoA11y&&(d?_["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(N||W2()):(_["aria-hidden"]="true",_.focusable="false")),m3({icons:{main:J1(m2),mask:o?J1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:f2,transform:z(z({},J),i),symbol:s,title:d,maskId:l,titleId:N,extra:{attributes:_,styles:Q,classes:B}})})}},T0={mixout:function(){return{icon:A0(P0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=m4,n.nodeCallback=k0,n}}},provides:function(a){a.i2svg=function(n){var e=n.node,i=e===void 0?x:e,r=n.callback,s=r===void 0?function(){}:r;return m4(i,s)},a.generateSvgReplacementMutation=function(n,e){var i=e.iconName,r=e.title,s=e.titleId,t=e.prefix,o=e.transform,f=e.symbol,l=e.mask,m=e.maskId,d=e.extra;return new Promise(function(M,N){Promise.all([K1(i,t),l.iconName?K1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var B=a3(y,2),T=B[0],_=B[1];M([n,m3({icons:{main:T,mask:_},prefix:t,iconName:i,transform:o,symbol:f,maskId:m,title:r,titleId:s,extra:d,watchable:!0})])}).catch(N)})},a.generateAbstractIcon=function(n){var e=n.children,i=n.attributes,r=n.main,s=n.transform,t=n.styles,o=S1(t);o.length>0&&(i.style=o);var f;return t3(s)&&(f=e2("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),e.push(f||r.icon),{children:e,attributes:i}}}},_0={mixout:function(){return{layer:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,r=i===void 0?[]:i;return y1({type:"layer"},function(){V2("beforeDOMElementCreation",{assembler:n,params:e});var s=[];return n(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(G2(r)).join(" ")},children:s}]})}}}},F0={mixout:function(){return{counter:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,r=i===void 0?null:i,s=e.classes,t=s===void 0?[]:s,o=e.attributes,f=o===void 0?{}:o,l=e.styles,m=l===void 0?{}:l;return y1({type:"counter",content:n},function(){return V2("beforeDOMElementCreation",{content:n,params:e}),p0({content:n.toString(),title:r,extra:{attributes:f,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(G2(t))}})})}}}},D0={mixout:function(){return{text:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,r=i===void 0?J:i,s=e.title,t=s===void 0?null:s,o=e.classes,f=o===void 0?[]:o,l=e.attributes,m=l===void 0?{}:l,d=e.styles,M=d===void 0?{}:d;return y1({type:"text",content:n},function(){return V2("beforeDOMElementCreation",{content:n,params:e}),r4({content:n,transform:z(z({},J),r),title:t,extra:{attributes:m,styles:M,classes:["".concat(p.cssPrefix,"-layers-text")].concat(G2(f))}})})}}},provides:function(a){a.generateLayersText=function(n,e){var i=e.title,r=e.transform,s=e.extra,t=null,o=null;if(g4){var f=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();t=l.width/f,o=l.height/f}return p.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,r4({content:n.innerHTML,width:t,height:o,transform:r,title:i,extra:s,watchable:!0})])}}},B0=new RegExp('"',"ug"),z4=[1105920,1112319];function R0(c){var a=c.replace(B0,""),n=J6(a,0),e=n>=z4[0]&&n<=z4[1],i=a.length===2?a[0]===a[1]:!1;return{value:$1(i?a[0]:a),isSecondary:e||i}}function v4(c,a){var n="".concat(N6).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(n)!==null)return e();var r=k2(c.children),s=r.filter(function(m2){return m2.getAttribute(j1)===a})[0],t=t2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(P6),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(s&&!o)return c.removeChild(s),e();if(o&&l!=="none"&&l!==""){var m=t.getPropertyValue("content"),d=~["Sharp"].indexOf(o[2])?S:L,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?O2[d][o[2].toLowerCase()]:T6[d][f],N=R0(m),y=N.value,B=N.isSecondary,T=o[0].startsWith("FontAwesome"),_=l3(M,y),R=_;if(T){var Q=n0(y);Q.iconName&&Q.prefix&&(_=Q.iconName,M=Q.prefix)}if(_&&!B&&(!s||s.getAttribute(i3)!==M||s.getAttribute(n3)!==R)){c.setAttribute(n,R),s&&c.removeChild(s);var q=w0(),f2=q.extra;f2.attributes[j1]=a,K1(_,M).then(function(m2){var k1=m3(z(z({},q),{},{icons:{main:m2,mask:f3()},prefix:M,iconName:R,extra:f2,watchable:!0})),n2=x.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(n2,c.firstChild):c.appendChild(n2),n2.outerHTML=k1.map(function(i6){return $2(i6)}).join(`
`),c.removeAttribute(n),e()}).catch(i)}else e()}else e()})}function I0(c){return Promise.all([v4(c,"::before"),v4(c,"::after")])}function E0(c){return c.parentNode!==document.head&&!~y6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(j1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function p4(c){if(i2)return new Promise(function(a,n){var e=k2(c.querySelectorAll("*")).filter(E0).map(I0),i=z3.begin("searchPseudoElements");q4(),Promise.all(e).then(function(){i(),c3(),a()}).catch(function(){i(),c3(),n()})})}var O0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=p4,n}}},provides:function(a){a.pseudoElements2svg=function(n){var e=n.node,i=e===void 0?x:e;p.searchPseudoElements&&p4(i)}}},H4=!1,U0={mixout:function(){return{dom:{unwatch:function(){q4(),H4=!0}}}},hooks:function(){return{bootstrap:function(){l4(Q1("mutationObserverCallbacks",{}))},noAuto:function(){x0()},watch:function(n){var e=n.observeMutationsRoot;H4?c3():l4(Q1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},h4=function(a){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var r=i.toLowerCase().split("-"),s=r[0],t=r.slice(1).join("-");if(s&&t==="h")return e.flipX=!0,e;if(s&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(s){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},n)},q0={mixout:function(){return{parse:{transform:function(n){return h4(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,e){var i=e.getAttribute("data-fa-transform");return i&&(n.transform=h4(i)),n}}},provides:function(a){a.generateAbstractTransformGrouping=function(n){var e=n.main,i=n.transform,r=n.containerWidth,s=n.iconWidth,t={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(o," ").concat(f," ").concat(l)},d={transform:"translate(".concat(s/2*-1," -256)")},M={outer:t,inner:m,path:d};return{tag:"g",attributes:z({},M.outer),children:[{tag:"g",attributes:z({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:z(z({},e.icon.attributes),M.path)}]}]}}}},q1={x:0,y:0,width:"100%",height:"100%"};function V4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function W0(c){return c.tag==="g"?c.children:[c]}var G0={hooks:function(){return{parseNodeAttributes:function(n,e){var i=e.getAttribute("data-fa-mask"),r=i?w1(i.split(" ").map(function(s){return s.trim()})):f3();return r.prefix||(r.prefix=o2()),n.mask=r,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides:function(a){a.generateAbstractMask=function(n){var e=n.children,i=n.attributes,r=n.main,s=n.mask,t=n.maskId,o=n.transform,f=r.width,l=r.icon,m=s.width,d=s.icon,M=q6({transform:o,containerWidth:m,iconWidth:f}),N={tag:"rect",attributes:z(z({},q1),{},{fill:"white"})},y=l.children?{children:l.children.map(V4)}:{},B={tag:"g",attributes:z({},M.inner),children:[V4(z({tag:l.tag,attributes:z(z({},l.attributes),M.path)},y))]},T={tag:"g",attributes:z({},M.outer),children:[B]},_="mask-".concat(t||W2()),R="clip-".concat(t||W2()),Q={tag:"mask",attributes:z(z({},q1),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,T]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:W0(d)},Q]};return e.push(q,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(_,")")},q1)}),{children:e,attributes:i}}}},j0={provides:function(a){var n=!1;t2.matchMedia&&(n=t2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=z(z({},r),{},{attributeName:"opacity"}),t={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||t.children.push({tag:"animate",attributes:z(z({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},$0={hooks:function(){return{parseNodeAttributes:function(n,e){var i=e.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return n.symbol=r,n}}}},X0=[j6,T0,_0,F0,D0,O0,U0,q0,G0,j0,$0];t0(X0,{mixoutsTo:$});var V5=$.noAuto,u5=$.config,d5=$.library,M5=$.dom,G4=$.parse,C5=$.findIconDefinition,g5=$.toHtml,j4=$.icon,L5=$.layer,Q0=$.text,Y0=$.counter;var J0=["*"],K0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Z0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},c8=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(n=>a[n]?n:null).filter(n=>n)},a8=c=>c.prefix!==void 0&&c.iconName!==void 0,e8=(c,a)=>a8(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},i8=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=z2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),n8=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...e){for(let i of e){let r=Object.keys(i).map(s=>i[s]);this.addIcons(...r)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=z2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),r8=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=Q2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[I]});let c=a;return c})(),s8=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(b(T2),b(P2))},a.\u0275cmp=F({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[I,D],ngContentSelectors:J0,decls:1,vars:0,template:function(i,r){i&1&&(K2(),Z2(0))},encapsulation:2});let c=a;return c})(),$4=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,r,s,t){this.sanitizer=e,this.config=i,this.iconLibrary=r,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){Z0();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(i);if(r!=null){let s=this.buildParams();this.renderIcon(r,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=e8(e,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(K0(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?G4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...c8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let r=j4(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(b(w3),b(i8),b(n8),b(r8,8),b(s8,8))},a.\u0275cmp=F({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(d3("innerHTML",r.renderedIconHTML,u3),v2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[I,D],decls:0,vars:0,template:function(i,r){},encapsulation:2});let c=a;return c})();var X4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=M2({type:a}),a.\u0275inj=d2({});let c=a;return c})();var o8={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},Q4=o8;var l8={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Y4=l8;var m8=["nz-pagination-item",""];function z8(c,a){if(c&1&&(V(0,"a"),j(1),u()),c&2){let n=h().page;H(),F2(n)}}function v8(c,a){c&1&&g(0,"span",9)}function p8(c,a){c&1&&g(0,"span",10)}function H8(c,a){if(c&1&&(V(0,"button",6),W(1,2),C(2,v8,1,0,"span",7)(3,p8,1,0,"span",8),G(),u()),c&2){let n=h(2);v("disabled",n.disabled),H(),v("ngSwitch",n.direction),H(),v("ngSwitchCase","rtl")}}function h8(c,a){c&1&&g(0,"span",10)}function V8(c,a){c&1&&g(0,"span",9)}function u8(c,a){if(c&1&&(V(0,"button",6),W(1,2),C(2,h8,1,0,"span",11)(3,V8,1,0,"span",12),G(),u()),c&2){let n=h(2);v("disabled",n.disabled),H(),v("ngSwitch",n.direction),H(),v("ngSwitchCase","rtl")}}function d8(c,a){c&1&&g(0,"span",20)}function M8(c,a){c&1&&g(0,"span",21)}function C8(c,a){if(c&1&&(W(0,2),C(1,d8,1,0,"span",18)(2,M8,1,0,"span",19),G()),c&2){let n=h(4);v("ngSwitch",n.direction),H(),v("ngSwitchCase","rtl")}}function g8(c,a){c&1&&g(0,"span",21)}function L8(c,a){c&1&&g(0,"span",20)}function x8(c,a){if(c&1&&(W(0,2),C(1,g8,1,0,"span",22)(2,L8,1,0,"span",23),G()),c&2){let n=h(4);v("ngSwitch",n.direction),H(),v("ngSwitchCase","rtl")}}function b8(c,a){if(c&1&&(V(0,"div",15),W(1,2),C(2,C8,3,2,"ng-container",16)(3,x8,3,2,"ng-container",16),G(),V(4,"span",17),j(5,"\u2022\u2022\u2022"),u()()),c&2){let n=h(2).$implicit;H(),v("ngSwitch",n),H(),v("ngSwitchCase","prev_5"),H(),v("ngSwitchCase","next_5")}}function S8(c,a){if(c&1&&(W(0),V(1,"a",13),C(2,b8,6,3,"div",14),u(),G()),c&2){let n=h().$implicit;H(),v("ngSwitch",n)}}function N8(c,a){if(c&1&&(W(0,2),C(1,z8,2,1,"a",3)(2,H8,4,3,"button",4)(3,u8,4,3,"button",4)(4,S8,3,1,"ng-container",5),G()),c&2){let n=a.$implicit;v("ngSwitch",n),H(),v("ngSwitchCase","page"),H(),v("ngSwitchCase","prev"),H(),v("ngSwitchCase","next")}}function w8(c,a){}var y8=(c,a)=>({$implicit:c,page:a}),k8=["nz-pagination-options",""];function A8(c,a){if(c&1&&g(0,"nz-option",4),c&2){let n=a.$implicit;v("nzLabel",n.label)("nzValue",n.value)}}function P8(c,a){if(c&1){let n=Y();V(0,"nz-select",2),k("ngModelChange",function(i){E(n);let r=h();return O(r.onPageSizeChange(i))}),C(1,A8,1,2,"nz-option",3),u()}if(c&2){let n=h();v("nzDisabled",n.disabled)("nzSize",n.nzSize)("ngModel",n.pageSize),H(),v("ngForOf",n.listOfPageSizeOption)("ngForTrackBy",n.trackByOption)}}function T8(c,a){if(c&1){let n=Y();V(0,"div",5),j(1),V(2,"input",6),k("keydown.enter",function(i){E(n);let r=h();return O(r.jumpToPageViaInput(i))}),u(),j(3),u()}if(c&2){let n=h();H(),g2(" ",n.locale.jump_to," "),H(),v("disabled",n.disabled),H(),g2(" ",n.locale.page," ")}}var J4=["containerTemplate"];function _8(c,a){}var F8=(c,a)=>({$implicit:c,range:a});function D8(c,a){if(c&1&&(V(0,"li",4),C(1,_8,0,0,"ng-template",5),u()),c&2){let n=h(2);H(),v("ngTemplateOutlet",n.showTotal)("ngTemplateOutletContext",D1(2,F8,n.total,n.ranges))}}function B8(c,a){if(c&1){let n=Y();V(0,"li",6),k("gotoIndex",function(i){E(n);let r=h(2);return O(r.jumpPage(i))})("diffIndex",function(i){E(n);let r=h(2);return O(r.jumpDiff(i))}),u()}if(c&2){let n=a.$implicit,e=h(2);v("locale",e.locale)("type",n.type)("index",n.index)("disabled",!!n.disabled)("itemRender",e.itemRender)("active",e.pageIndex===n.index)("direction",e.dir)}}function R8(c,a){if(c&1){let n=Y();V(0,"li",7),k("pageIndexChange",function(i){E(n);let r=h(2);return O(r.onPageIndexChange(i))})("pageSizeChange",function(i){E(n);let r=h(2);return O(r.onPageSizeChange(i))}),u()}if(c&2){let n=h(2);v("total",n.total)("locale",n.locale)("disabled",n.disabled)("nzSize",n.nzSize)("showSizeChanger",n.showSizeChanger)("showQuickJumper",n.showQuickJumper)("pageIndex",n.pageIndex)("pageSize",n.pageSize)("pageSizeOptions",n.pageSizeOptions)}}function I8(c,a){if(c&1&&(V(0,"ul"),C(1,D8,2,5,"li",1)(2,B8,1,7,"li",2)(3,R8,1,9,"li",3),u()),c&2){let n=h();H(),v("ngIf",n.showTotal),H(),v("ngForOf",n.listOfPageItem)("ngForTrackBy",n.trackByPageItem),H(),v("ngIf",n.showQuickJumper||n.showSizeChanger)}}function E8(c,a){if(c&1){let n=Y();V(0,"ul")(1,"li",1),k("click",function(){E(n);let i=h();return O(i.prePage())}),u(),V(2,"li",2)(3,"input",3),k("keydown.enter",function(i){E(n);let r=h();return O(r.jumpToPageViaInput(i))}),u(),V(4,"span",4),j(5,"/"),u(),j(6),u(),V(7,"li",5),k("click",function(){E(n);let i=h();return O(i.nextPage())}),u()()}if(c&2){let n=h();H(),v("disabled",n.isFirstIndex)("direction",n.dir)("itemRender",n.itemRender),v2("title",n.locale.prev_page),H(),v2("title",n.pageIndex+"/"+n.lastIndex),H(),v("disabled",n.disabled)("value",n.pageIndex),H(3),g2(" ",n.lastIndex," "),H(),v("disabled",n.isLastIndex)("direction",n.dir)("itemRender",n.itemRender),v2("title",n.locale==null?null:n.locale.next_page)}}function O8(c,a){}function U8(c,a){if(c&1&&(W(0),C(1,O8,0,0,"ng-template",6),G()),c&2){h(2);let n=c1(2);H(),v("ngTemplateOutlet",n.template)}}function q8(c,a){if(c&1&&(W(0),C(1,U8,2,1,"ng-container",5),G()),c&2){let n=h(),e=c1(4);H(),v("ngIf",n.nzSimple)("ngIfElse",e.template)}}var p3=(()=>{let a=class a{constructor(){this.active=!1,this.index=null,this.disabled=!1,this.direction="ltr",this.type=null,this.itemRender=null,this.diffIndex=new P,this.gotoIndex=new P,this.title=null}clickItem(){this.disabled||(this.type==="page"?this.gotoIndex.emit(this.index):this.diffIndex.emit({next:1,prev:-1,prev_5:-5,next_5:5}[this.type]))}ngOnChanges(e){let{locale:i,index:r,type:s}=e;(i||r||s)&&(this.title={page:`${this.index}`,next:this.locale?.next_page,prev:this.locale?.prev_page,prev_5:this.locale?.prev_5,next_5:this.locale?.next_5}[this.type])}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=F({type:a,selectors:[["li","nz-pagination-item",""]],hostVars:19,hostBindings:function(i,r){i&1&&k("click",function(){return r.clickItem()}),i&2&&(v2("title",r.title),r2("ant-pagination-prev",r.type==="prev")("ant-pagination-next",r.type==="next")("ant-pagination-item",r.type==="page")("ant-pagination-jump-prev",r.type==="prev_5")("ant-pagination-jump-prev-custom-icon",r.type==="prev_5")("ant-pagination-jump-next",r.type==="next_5")("ant-pagination-jump-next-custom-icon",r.type==="next_5")("ant-pagination-disabled",r.disabled)("ant-pagination-item-active",r.active))},inputs:{active:"active",locale:"locale",index:"index",disabled:"disabled",direction:"direction",type:"type",itemRender:"itemRender"},outputs:{diffIndex:"diffIndex",gotoIndex:"gotoIndex"},standalone:!0,features:[I,D],attrs:m8,decls:3,vars:5,consts:[["renderItemTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngSwitch"],[4,"ngSwitchCase"],["type","button","class","ant-pagination-item-link",3,"disabled",4,"ngSwitchCase"],[4,"ngSwitchDefault"],["type","button",1,"ant-pagination-item-link",3,"disabled"],["nz-icon","","nzType","right",4,"ngSwitchCase"],["nz-icon","","nzType","left",4,"ngSwitchDefault"],["nz-icon","","nzType","right"],["nz-icon","","nzType","left"],["nz-icon","","nzType","left",4,"ngSwitchCase"],["nz-icon","","nzType","right",4,"ngSwitchDefault"],[1,"ant-pagination-item-link",3,"ngSwitch"],["class","ant-pagination-item-container",4,"ngSwitchDefault"],[1,"ant-pagination-item-container"],[3,"ngSwitch",4,"ngSwitchCase"],[1,"ant-pagination-item-ellipsis"],["nz-icon","","nzType","double-right","class","ant-pagination-item-link-icon",4,"ngSwitchCase"],["nz-icon","","nzType","double-left","class","ant-pagination-item-link-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","double-right",1,"ant-pagination-item-link-icon"],["nz-icon","","nzType","double-left",1,"ant-pagination-item-link-icon"],["nz-icon","","nzType","double-left","class","ant-pagination-item-link-icon",4,"ngSwitchCase"],["nz-icon","","nzType","double-right","class","ant-pagination-item-link-icon",4,"ngSwitchDefault"]],template:function(i,r){if(i&1&&C(0,N8,5,4,"ng-template",null,0,i1)(2,w8,0,0,"ng-template",1),i&2){let s=c1(1);H(2),v("ngTemplateOutlet",r.itemRender||s)("ngTemplateOutletContext",D1(2,y8,r.type,r.index))}},dependencies:[g3,L3,D3,F3,x3,n1],encapsulation:2,changeDetection:0});let c=a;return c})(),K4=(()=>{let a=class a{constructor(){this.nzSize="default",this.disabled=!1,this.showSizeChanger=!1,this.showQuickJumper=!1,this.total=0,this.pageIndex=1,this.pageSize=10,this.pageSizeOptions=[],this.pageIndexChange=new P,this.pageSizeChange=new P,this.listOfPageSizeOption=[]}onPageSizeChange(e){this.pageSize!==e&&this.pageSizeChange.next(e)}jumpToPageViaInput(e){let i=e.target,r=Math.floor(B1(i.value,this.pageIndex));this.pageIndexChange.next(r),i.value=""}trackByOption(e,i){return i.value}ngOnChanges(e){let{pageSize:i,pageSizeOptions:r,locale:s}=e;(i||r||s)&&(this.listOfPageSizeOption=[...new Set([...this.pageSizeOptions,this.pageSize])].map(t=>({value:t,label:`${t} ${this.locale.items_per_page}`})))}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=F({type:a,selectors:[["li","nz-pagination-options",""]],hostAttrs:[1,"ant-pagination-options"],inputs:{nzSize:"nzSize",disabled:"disabled",showSizeChanger:"showSizeChanger",showQuickJumper:"showQuickJumper",locale:"locale",total:"total",pageIndex:"pageIndex",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions"},outputs:{pageIndexChange:"pageIndexChange",pageSizeChange:"pageSizeChange"},standalone:!0,features:[I,D],attrs:k8,decls:2,vars:2,consts:[["class","ant-pagination-options-size-changer",3,"nzDisabled","nzSize","ngModel","ngModelChange",4,"ngIf"],["class","ant-pagination-options-quick-jumper",4,"ngIf"],[1,"ant-pagination-options-size-changer",3,"nzDisabled","nzSize","ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf","ngForTrackBy"],[3,"nzLabel","nzValue"],[1,"ant-pagination-options-quick-jumper"],[3,"disabled","keydown.enter"]],template:function(i,r){i&1&&C(0,P8,2,5,"nz-select",0)(1,T8,4,3,"div",1),i&2&&(v("ngIf",r.showSizeChanger),H(),v("ngIf",r.showQuickJumper))},dependencies:[E3,R3,I3,L2,o1,s1,t1,D2],encapsulation:2,changeDetection:0});let c=a;return c})(),Z4=(()=>{let a=class a{constructor(e,i,r,s){this.cdr=e,this.renderer=i,this.elementRef=r,this.directionality=s,this.nzSize="default",this.itemRender=null,this.showTotal=null,this.disabled=!1,this.showSizeChanger=!1,this.showQuickJumper=!1,this.total=0,this.pageIndex=1,this.pageSize=10,this.pageSizeOptions=[10,20,30,40],this.pageIndexChange=new P,this.pageSizeChange=new P,this.ranges=[0,0],this.listOfPageItem=[],this.dir="ltr",this.destroy$=new u2,i.removeChild(i.parentNode(r.nativeElement),r.nativeElement)}ngOnInit(){this.directionality.change?.pipe(K(this.destroy$)).subscribe(e=>{this.dir=e,this.updateRtlStyle(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.updateRtlStyle()}updateRtlStyle(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-pagination-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-pagination-rtl")}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}jumpPage(e){this.onPageIndexChange(e)}jumpDiff(e){this.jumpPage(this.pageIndex+e)}trackByPageItem(e,i){return`${i.type}-${i.index}`}onPageIndexChange(e){this.pageIndexChange.next(e)}onPageSizeChange(e){this.pageSizeChange.next(e)}getLastIndex(e,i){return Math.ceil(e/i)}buildIndexes(){let e=this.getLastIndex(this.total,this.pageSize);this.listOfPageItem=this.getListOfPageItem(this.pageIndex,e)}getListOfPageItem(e,i){let r=t=>{let o={type:"prev",disabled:e===1},f={type:"next",disabled:e===i};return[o,...t,f]},s=(t,o)=>{let f=[];for(let l=t;l<=o;l++)f.push({index:l,type:"page"});return f};return i<=9?r(s(1,i)):r(((o,f)=>{let l=[],m={type:"prev_5"},d={type:"next_5"},M=s(1,1),N=s(i,i);if(o<5)l=[...s(2,o===4?6:5),d];else if(o<f-3)l=[m,...s(o-2,o+2),d];else{let y=o===f-3?f-5:f-4;l=[m,...s(y,f-1)]}return[...M,...l,...N]})(e,i))}ngOnChanges(e){let{pageIndex:i,pageSize:r,total:s}=e;(i||r||s)&&(this.ranges=[(this.pageIndex-1)*this.pageSize+1,Math.min(this.pageIndex*this.pageSize,this.total)],this.buildIndexes())}};a.\u0275fac=function(i){return new(i||a)(b(C2),b(T2),b(P2),b(l1,8))},a.\u0275cmp=F({type:a,selectors:[["nz-pagination-default"]],viewQuery:function(i,r){if(i&1&&T1(J4,7),i&2){let s;_1(s=F1())&&(r.template=s.first)}},inputs:{nzSize:"nzSize",itemRender:"itemRender",showTotal:"showTotal",disabled:"disabled",locale:"locale",showSizeChanger:"showSizeChanger",showQuickJumper:"showQuickJumper",total:"total",pageIndex:"pageIndex",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions"},outputs:{pageIndexChange:"pageIndexChange",pageSizeChange:"pageSizeChange"},standalone:!0,features:[I,D],decls:2,vars:0,consts:[["containerTemplate",""],["class","ant-pagination-total-text",4,"ngIf"],["nz-pagination-item","",3,"locale","type","index","disabled","itemRender","active","direction","gotoIndex","diffIndex",4,"ngFor","ngForOf","ngForTrackBy"],["nz-pagination-options","",3,"total","locale","disabled","nzSize","showSizeChanger","showQuickJumper","pageIndex","pageSize","pageSizeOptions","pageIndexChange","pageSizeChange",4,"ngIf"],[1,"ant-pagination-total-text"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-pagination-item","",3,"locale","type","index","disabled","itemRender","active","direction","gotoIndex","diffIndex"],["nz-pagination-options","",3,"total","locale","disabled","nzSize","showSizeChanger","showQuickJumper","pageIndex","pageSize","pageSizeOptions","pageIndexChange","pageSizeChange"]],template:function(i,r){i&1&&C(0,I8,4,4,"ng-template",null,0,i1)},dependencies:[n1,D2,L2,p3,K4],encapsulation:2,changeDetection:0});let c=a;return c})(),c6=(()=>{let a=class a{constructor(e,i,r,s){this.cdr=e,this.renderer=i,this.elementRef=r,this.directionality=s,this.itemRender=null,this.disabled=!1,this.total=0,this.pageIndex=1,this.pageSize=10,this.pageIndexChange=new P,this.lastIndex=0,this.isFirstIndex=!1,this.isLastIndex=!1,this.dir="ltr",this.destroy$=new u2,i.removeChild(i.parentNode(r.nativeElement),r.nativeElement)}ngOnInit(){this.directionality.change?.pipe(K(this.destroy$)).subscribe(e=>{this.dir=e,this.updateRtlStyle(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.updateRtlStyle()}updateRtlStyle(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-pagination-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-pagination-rtl")}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}jumpToPageViaInput(e){let i=e.target,r=B1(i.value,this.pageIndex);this.onPageIndexChange(r),i.value=`${this.pageIndex}`}prePage(){this.onPageIndexChange(this.pageIndex-1)}nextPage(){this.onPageIndexChange(this.pageIndex+1)}onPageIndexChange(e){this.pageIndexChange.next(e)}updateBindingValue(){this.lastIndex=Math.ceil(this.total/this.pageSize),this.isFirstIndex=this.pageIndex===1,this.isLastIndex=this.pageIndex===this.lastIndex}ngOnChanges(e){let{pageIndex:i,total:r,pageSize:s}=e;(i||r||s)&&this.updateBindingValue()}};a.\u0275fac=function(i){return new(i||a)(b(C2),b(T2),b(P2),b(l1,8))},a.\u0275cmp=F({type:a,selectors:[["nz-pagination-simple"]],viewQuery:function(i,r){if(i&1&&T1(J4,7),i&2){let s;_1(s=F1())&&(r.template=s.first)}},inputs:{itemRender:"itemRender",disabled:"disabled",locale:"locale",total:"total",pageIndex:"pageIndex",pageSize:"pageSize"},outputs:{pageIndexChange:"pageIndexChange"},standalone:!0,features:[I,D],decls:2,vars:0,consts:[["containerTemplate",""],["nz-pagination-item","","type","prev",3,"disabled","direction","itemRender","click"],[1,"ant-pagination-simple-pager"],["size","3",3,"disabled","value","keydown.enter"],[1,"ant-pagination-slash"],["nz-pagination-item","","type","next",3,"disabled","direction","itemRender","click"]],template:function(i,r){i&1&&C(0,E8,8,12,"ng-template",null,0,i1)},dependencies:[p3],encapsulation:2,changeDetection:0});let c=a;return c})(),W8="pagination",H3=(()=>{let a=class a{validatePageIndex(e,i){return e>i?i:e<1?1:e}onPageIndexChange(e){let i=this.getLastIndex(this.nzTotal,this.nzPageSize),r=this.validatePageIndex(e,i);r!==this.nzPageIndex&&!this.nzDisabled&&(this.nzPageIndex=r,this.nzPageIndexChange.emit(this.nzPageIndex))}onPageSizeChange(e){this.nzPageSize=e,this.nzPageSizeChange.emit(e);let i=this.getLastIndex(this.nzTotal,this.nzPageSize);this.nzPageIndex>i&&this.onPageIndexChange(i)}onTotalChange(e){let i=this.getLastIndex(e,this.nzPageSize);this.nzPageIndex>i&&Promise.resolve().then(()=>{this.onPageIndexChange(i),this.cdr.markForCheck()})}getLastIndex(e,i){return Math.ceil(e/i)}constructor(e,i,r,s,t){this.i18n=e,this.cdr=i,this.breakpointService=r,this.nzConfigService=s,this.directionality=t,this._nzModuleName=W8,this.nzPageSizeChange=new P,this.nzPageIndexChange=new P,this.nzShowTotal=null,this.nzItemRender=null,this.nzSize="default",this.nzPageSizeOptions=[10,20,30,40],this.nzShowSizeChanger=!1,this.nzShowQuickJumper=!1,this.nzSimple=!1,this.nzDisabled=!1,this.nzResponsive=!1,this.nzHideOnSinglePage=!1,this.nzTotal=0,this.nzPageIndex=1,this.nzPageSize=10,this.showPagination=!0,this.size="default",this.dir="ltr",this.destroy$=new u2,this.total$=new h3(1)}ngOnInit(){this.i18n.localeChange.pipe(K(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Pagination"),this.cdr.markForCheck()}),this.total$.pipe(K(this.destroy$)).subscribe(e=>{this.onTotalChange(e)}),this.breakpointService.subscribe(T3).pipe(K(this.destroy$)).subscribe(e=>{this.nzResponsive&&(this.size=e===P3.xs?"small":"default",this.cdr.markForCheck())}),this.directionality.change?.pipe(K(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngOnChanges(e){let{nzHideOnSinglePage:i,nzTotal:r,nzPageSize:s,nzSize:t}=e;r&&this.total$.next(this.nzTotal),(i||r||s)&&(this.showPagination=this.nzHideOnSinglePage&&this.nzTotal>this.nzPageSize||this.nzTotal>0&&!this.nzHideOnSinglePage),t&&(this.size=t.currentValue)}};a.\u0275fac=function(i){return new(i||a)(b(B3),b(C2),b(_3),b(A3),b(l1,8))},a.\u0275cmp=F({type:a,selectors:[["nz-pagination"]],hostAttrs:[1,"ant-pagination"],hostVars:8,hostBindings:function(i,r){i&2&&r2("ant-pagination-simple",r.nzSimple)("ant-pagination-disabled",r.nzDisabled)("mini",!r.nzSimple&&r.size==="small")("ant-pagination-rtl",r.dir==="rtl")},inputs:{nzShowTotal:"nzShowTotal",nzItemRender:"nzItemRender",nzSize:"nzSize",nzPageSizeOptions:"nzPageSizeOptions",nzShowSizeChanger:"nzShowSizeChanger",nzShowQuickJumper:"nzShowQuickJumper",nzSimple:"nzSimple",nzDisabled:"nzDisabled",nzResponsive:"nzResponsive",nzHideOnSinglePage:"nzHideOnSinglePage",nzTotal:"nzTotal",nzPageIndex:"nzPageIndex",nzPageSize:"nzPageSize"},outputs:{nzPageSizeChange:"nzPageSizeChange",nzPageIndexChange:"nzPageIndexChange"},exportAs:["nzPagination"],standalone:!0,features:[I,D],decls:5,vars:18,consts:[[4,"ngIf"],[3,"disabled","itemRender","locale","pageSize","total","pageIndex","pageIndexChange"],["simplePagination",""],[3,"nzSize","itemRender","showTotal","disabled","locale","showSizeChanger","showQuickJumper","total","pageIndex","pageSize","pageSizeOptions","pageIndexChange","pageSizeChange"],["defaultPagination",""],[4,"ngIf","ngIfElse"],[3,"ngTemplateOutlet"]],template:function(i,r){i&1&&(C(0,q8,2,2,"ng-container",0),V(1,"nz-pagination-simple",1,2),k("pageIndexChange",function(t){return r.onPageIndexChange(t)}),u(),V(3,"nz-pagination-default",3,4),k("pageIndexChange",function(t){return r.onPageIndexChange(t)})("pageSizeChange",function(t){return r.onPageSizeChange(t)}),u()),i&2&&(v("ngIf",r.showPagination),H(),v("disabled",r.nzDisabled)("itemRender",r.nzItemRender)("locale",r.locale)("pageSize",r.nzPageSize)("total",r.nzTotal)("pageIndex",r.nzPageIndex),H(2),v("nzSize",r.size)("itemRender",r.nzItemRender)("showTotal",r.nzShowTotal)("disabled",r.nzDisabled)("locale",r.locale)("showSizeChanger",r.nzShowSizeChanger)("showQuickJumper",r.nzShowQuickJumper)("total",r.nzTotal)("pageIndex",r.nzPageIndex)("pageSize",r.nzPageSize)("pageSizeOptions",r.nzPageSizeOptions))},dependencies:[L2,n1,c6,Z4],encapsulation:2,changeDetection:0});let c=a;return U([x2()],c.prototype,"nzSize",void 0),U([x2()],c.prototype,"nzPageSizeOptions",void 0),U([x2(),Z()],c.prototype,"nzShowSizeChanger",void 0),U([x2(),Z()],c.prototype,"nzShowQuickJumper",void 0),U([x2(),Z()],c.prototype,"nzSimple",void 0),U([Z()],c.prototype,"nzDisabled",void 0),U([Z()],c.prototype,"nzResponsive",void 0),U([Z()],c.prototype,"nzHideOnSinglePage",void 0),U([f1()],c.prototype,"nzTotal",void 0),U([f1()],c.prototype,"nzPageIndex",void 0),U([f1()],c.prototype,"nzPageSize",void 0),c})(),a6=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=M2({type:a}),a.\u0275inj=d2({imports:[H3,c6,K4,p3,Z4]});let c=a;return c})();function j8(c,a){if(c&1&&(V(0,"th",4),j(1),u()),c&2){let n=a.$implicit;H(),F2(n)}}function $8(c,a){if(c&1&&(Y2(0,j8,2,1,"th",2,P1),V(2,"th",4),j(3,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),u()),c&2){let n=h(2);J2(n.fields)}}var e6=()=>({rows:1});function X8(c,a){c&1&&(V(0,"th",5)(1,"div",6),g(2,"nz-skeleton",7),u()()),c&2&&(H(2),v("nzActive",!0)("nzParagraph",e1(2,e6)))}var Q8=(c,a)=>a.id;function Y8(c,a){if(c&1){let n=Y();V(0,"a",15),k("click",function(){E(n);let i=h().$implicit,r=h().$implicit;return O(r[i].download())}),j(1),u()}if(c&2){let n=h().$implicit,e=h().$implicit;H(),F2(e[n].display)}}function J8(c,a){if(c&1&&j(0),c&2){let n=h().$implicit,e=h().$implicit;g2(" ",e[n]," ")}}var K8=()=>({"table-content":!0});function Z8(c,a){if(c&1&&(V(0,"td",14),C(1,Y8,2,1,"a")(2,J8,1,1),u()),c&2){let n=a.$implicit,e=h().$implicit;v("ngClass",e1(2,K8)),H(),_2(1,n&&(e[n]!=null&&e[n].display)?1:2)}}var c5=c=>({"expiring-soon":c});function a5(c,a){if(c&1){let n=Y();V(0,"tr",8)(1,"td")(2,"label"),g(3,"input",9),u()(),Y2(4,Z8,3,3,"td",14,P1),V(6,"td",10)(7,"button",11),k("click",function(){let r=E(n).$implicit,s=h(3);return O(s.onDelete(r.id))}),g(8,"fa-icon",12),u(),V(9,"button",13),k("click",function(){let r=E(n).$implicit,s=h(3);return O(s.onEdit(r.id))}),g(10,"fa-icon",12),u()()()}if(c&2){let n=a.$implicit,e=h(3);v("ngClass",M3(4,c5,n["\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"]?e.isExpiringSoon(n["\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"]):!1)),H(3),v("value",n.id),H(),J2(e.fields),H(4),v("icon",e.faTrashAlt),H(2),v("icon",e.faEdit)}}function e5(c,a){if(c&1&&Y2(0,a5,11,6,"tr",16,Q8),c&2){let n=h(2);J2(n.data)}}function i5(c,a){c&1&&(V(0,"tr",17)(1,"td",5),g(2,"nz-skeleton",7),u()()),c&2&&(H(2),v("nzActive",!0)("nzParagraph",e1(2,e6)))}function n5(c,a){if(c&1){let n=Y();V(0,"table")(1,"thead")(2,"tr",1),g(3,"th"),C(4,$8,4,0,"th",2)(5,X8,3,3),u()(),V(6,"tbody"),C(7,e5,2,0)(8,i5,3,3),u()(),g(9,"br"),V(10,"nz-pagination",3),k("nzPageIndexChange",function(i){E(n);let r=h();return O(r.pageChange.emit(i))}),u()}if(c&2){let n=h();H(4),_2(4,n.dataLoaded?4:5),H(3),_2(7,n.dataLoaded?7:8),H(3),v("nzPageIndex",n.pageIndex)("nzTotal",n.totalCount)}}function r5(c,a){c&1&&(V(0,"div",18)(1,"p"),j(2,"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),u()())}var z7=(()=>{let a=class a{constructor(){this.dataLoaded=!1,this.faTrashAlt=Q4,this.faEdit=Y4,this.data=[],this.delete=new P,this.downloadCallback=new P,this.pageChange=new P,this.edit=new P}ngOnChanges(e){e.data&&this.extractUserNames()}ngOnInit(){this.extractUserNames()}extractUserNames(){setTimeout(()=>{this.data.length>0&&(this.fields=Object.keys(this.data[0]).filter(e=>e!=="id"&&e!=="filePath"),this.dataLoaded=!0)},500)}isExpiringSoon(e){let[i,r,s]=e.split("."),t=`${s}-${r}-${i}`,o=new Date(t),f=new Date;return Math.ceil((o.getTime()-f.getTime())/(1e3*60*60*24))<=30}onDelete(e){this.delete.emit(e)}onEdit(e){this.edit.emit(e)}onDownload(e){this.downloadCallback.emit(e)}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=F({type:a,selectors:[["tablec"]],inputs:{data:"data",totalCount:"totalCount",pageIndex:"pageIndex"},outputs:{delete:"delete",downloadCallback:"downloadCallback",pageChange:"pageChange",edit:"edit"},standalone:!0,features:[a1([m1]),I,D],decls:3,vars:1,consts:[[1,"tablic"],[1,"row-container"],["class","fields"],[3,"nzPageIndex","nzTotal","nzPageIndexChange"],[1,"fields"],["colspan","100%"],[1,"skeleton-container"],[3,"nzActive","nzParagraph"],[1,"table-row",3,"ngClass"],["type","checkbox",3,"value"],[1,"actions"],[1,"delete-button",3,"click"],[3,"icon"],[1,"edit-button",3,"click"],[3,"ngClass"],[3,"click"],["class","table-row",3,"ngClass"],[1,"table-row"],[1,"info"]],template:function(i,r){i&1&&(V(0,"div",0),C(1,n5,11,4)(2,r5,3,0),u()),i&2&&(H(),_2(1,r.data.length>0?1:2))},dependencies:[S3,C3,G3,W3,X4,$4,a6,H3],styles:['.row-container[_ngcontent-%COMP%]{background-color:var(--Colors-gray-50, #f8fafc);height:55px}.fields[_ngcontent-%COMP%]{color:var(--Colors-gray-500, #64748b);font:800 16px/167% Inter,-apple-system,Roboto,Helvetica,sans-serif;height:35px}.two-factor-label[_ngcontent-%COMP%]{color:var(--Colors-gray-500, #64748b);font:800 16px/167% Inter,-apple-system,Roboto,Helvetica,sans-serif}.table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child){padding-left:16px;padding-right:16px}.table-row[_ngcontent-%COMP%]{align-items:center;border-bottom:2px solid black;background-color:var(--Colors-white, #fff);height:5px}.table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{text-align:center}input[type=checkbox i][_ngcontent-%COMP%]{border-radius:4px;border:1px solid #cbd5e1;background-color:#fff;display:flex;width:16px;height:16px;flex-direction:column;position:relative;padding-left:4px}.skeleton-container[_ngcontent-%COMP%]{height:20px;overflow:hidden}.checkbox-container[_ngcontent-%COMP%]:checked + .checkbox-label[_ngcontent-%COMP%]{background-color:var(--Colors-gray-300, #cbd5e1)}.checkbox-container[_ngcontent-%COMP%]:checked + .checkbox-label[_ngcontent-%COMP%]:after{content:"";position:absolute;width:6px;height:9px;border:solid var(--Colors-white, #fff);border-width:0 2px 2px 0;transform:rotate(45deg)}.id[_ngcontent-%COMP%]{color:var(--Colors-primary-500, #0ea5e9)!important;margin:auto 0;font:800 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif;text-align:center}.tablic[_ngcontent-%COMP%]{padding-top:20px;min-height:800px}.table-content[_ngcontent-%COMP%]{color:var(--Colors-gray-500, #64748b);margin:auto 0;font:400 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif;padding-top:8px;padding-bottom:8px;text-align:center}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:first-child{border-top-left-radius:8px}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]:last-child{border-top-right-radius:8px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child{border-bottom-left-radius:8px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:8px}table[_ngcontent-%COMP%]{border-radius:8px;background:var(--Colors-white, #fff);box-shadow:0 1px 2px -1px #0000001a,0 1px 3px #0000001a;width:100%;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-left:none;border-right:none;border-bottom:1px solid rgba(0,0,0,.1019607843)}tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:none}.actions[_ngcontent-%COMP%]{text-align:center}.delete-button[_ngcontent-%COMP%]{color:var(--Colors-white, #fff);white-space:nowrap;border-radius:4px;box-shadow:0 1px 2px -1px #0000001a,0 1px 3px #0000001a;background-color:#e90e0eab;align-self:stretch;justify-content:center;padding:6px 16px;font:800 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif;border:none;cursor:pointer;margin:0 16px 0 auto}.delete-button[_ngcontent-%COMP%]:hover{background-color:#e90e0e}.edit-button[_ngcontent-%COMP%]{color:var(--Colors-white, #fff);white-space:nowrap;border-radius:4px;box-shadow:0 1px 2px -1px #0000001a,0 1px 3px #0000001a;background-color:#0ea4e9bd;align-self:stretch;justify-content:center;padding:6px 16px;font:800 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif;border:none;cursor:pointer;margin:0 16px 0 auto}.edit-button[_ngcontent-%COMP%]:hover{background-color:#0ea5e9}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{width:20%}nz-pagination[_ngcontent-%COMP%]{border-radius:50px}  .ant-pagination-item{border-radius:8px}  .ant-pagination-disabled .ant-pagination-item-link,   .ant-pagination-disabled:focus-visible .ant-pagination-item-link,   .ant-pagination-disabled:hover .ant-pagination-item-link,   .ant-pagination-next .ant-pagination-item-link,   .ant-pagination-prev .ant-pagination-item-link,   .ant-pagination-item-link{border-radius:8px}.info[_ngcontent-%COMP%]{color:var(--Colors-gray-600, #475569);font:400 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif}.expiring-soon[_ngcontent-%COMP%]{background-color:#ff000023}']});let c=a;return c})();var L7=(()=>{let a=class a{constructor(){this.destroySubject=new u2,this.searchEvent=new P}ngOnInit(){this.destroySubject.pipe(V3(500),K(this.destroySubject)).subscribe(()=>{this.onInput()})}onInput(){this.searchText=this.searchText.split(" ").filter(Boolean).join(" "),this.searchEvent.emit(this.searchText)}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=F({type:a,selectors:[["search"]],outputs:{searchEvent:"searchEvent"},standalone:!0,features:[a1([m1,O3]),D],decls:3,vars:1,consts:[[1,"search"],["loading","lazy","src","../../../assets/images/search_icon.svg"],["type","text","placeholder","\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A",3,"ngModel","ngModelChange"]],template:function(i,r){i&1&&(V(0,"div",0),g(1,"img",1),V(2,"input",2),k("ngModelChange",function(t){return r.searchText=t})("ngModelChange",function(){return r.onInput()}),u()()),i&2&&(H(2),v("ngModel",r.searchText))},dependencies:[o1,y3,s1,t1],styles:[".search[_ngcontent-%COMP%]{border-radius:50px;background-color:#fcfeff;display:flex;gap:10px;padding:4px 8px;width:30vw;min-width:300px}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--Colors-gray-400, #94a3b8);align-self:center;flex-grow:1;white-space:nowrap;font:400 16px/143% Inter,-apple-system,Roboto,Helvetica,sans-serif;border:none;background:transparent;outline:none;padding:5px 20px 5px 0}"]});let c=a;return c})();export{O3 as a,U3 as b,m1 as c,z7 as d,L7 as e};
