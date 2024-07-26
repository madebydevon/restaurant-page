"use strict";(self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[]).push([[511],{208:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(601),i=t.n(r),o=t(314),s=t.n(o)()(i());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap&family=Bebas+Neue&display=swap);"]),s.push([n.id,":root {\n    --step--2: clamp(0.6944rem, 0.6577rem + 0.1836vw, 0.8rem);\n    --step--1: clamp(0.8111rem, 0.7754rem + 0.2899vw, 1rem);\n    --step-0: clamp(1rem, 0.913rem + 0.4348vw, 1.25rem);\n    --step-1: clamp(1.2rem, 1.0739rem + 0.6304vw, 1.5625rem);\n    --step-2: clamp(1.44rem, 1.2615rem + 0.8924vw, 1.9531rem);\n    --step-3: clamp(1.728rem, 1.4799rem + 1.2407vw, 2.4414rem);\n    --step-4: clamp(2.0736rem, 1.7334rem + 1.7011vw, 3.0518rem);\n    --step-5: clamp(2.4883rem, 2.027rem + 2.3067vw, 3.8147rem);\n\n    --space-3xs: clamp(0.25rem, 0.2283rem + 0.1087vw, 0.3125rem);\n    --space-2xs: clamp(0.5rem, 0.4565rem + 0.2174vw, 0.625rem);\n    --space-xs: clamp(0.75rem, 0.6848rem + 0.3261vw, 0.9375rem);\n    --space-s: clamp(1rem, 0.913rem + 0.4348vw, 1.25rem);\n    --space-m: clamp(1.5rem, 1.3696rem + 0.6522vw, 1.875rem);\n    --space-l: clamp(2rem, 1.8261rem + 0.8696vw, 2.5rem);\n    --space-xl: clamp(3rem, 2.7391rem + 1.3043vw, 3.75rem);\n    --space-2xl: clamp(4rem, 3.6522rem + 1.7391vw, 5rem);\n    --space-3xl: clamp(6rem, 5.4783rem + 2.6087vw, 7.5rem);\n  \n    /* One-up pairs */\n    --space-3xs-2xs: clamp(0.25rem, 0.1196rem + 0.6522vw, 0.625rem);\n    --space-2xs-xs: clamp(0.5rem, 0.3478rem + 0.7609vw, 0.9375rem);\n    --space-xs-s: clamp(0.75rem, 0.5761rem + 0.8696vw, 1.25rem);\n    --space-s-m: clamp(1rem, 0.6957rem + 1.5217vw, 1.875rem);\n    --space-m-l: clamp(1.5rem, 1.1522rem + 1.7391vw, 2.5rem);\n    --space-l-xl: clamp(2rem, 1.3913rem + 3.0435vw, 3.75rem);\n    --space-xl-2xl: clamp(3rem, 2.3043rem + 3.4783vw, 5rem);\n    --space-2xl-3xl: clamp(4rem, 2.7826rem + 6.087vw, 7.5rem);\n  \n    /* Custom pairs */\n    --space-s-l: clamp(1rem, 0.4783rem + 2.6087vw, 2.5rem);\n}\n\n/* START OF CSS RESET */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style-type: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nfieldset {\n  border: 0;\n  width: 0;\n}\n\n/* END OF CSS RESET */\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(44, 44, 44);\n    font-family: 'Poppins', 'Inter', system-ui, sans-serif;\n    color: white;\n}\n\nul {\n    list-style-type: none;\n}\n\nheader {\n    background-color: rgb(41, 41, 41);\n    margin: auto;\n    margin-top: 0;\n    max-width: max-content;\n    border: 1px solid rgb(80, 80, 80);\n    border-radius: 0 0 28px 28px;\n    -webkit-border-radius: 0 0 28px 28px;\n    -moz-border-radius: 0 0 28px 28px;\n    -ms-border-radius: 0 0 28px 28px;\n    -o-border-radius: 0 0 28px 28px;\n}\n\nheader > h1 {\n    font-size: var(--step-4);\n    font-family: 'Bebas Neue', Times, serif;\n    padding-top: 1.2rem;\n    text-align: center;\n}\n\nheader > nav {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\nnav > button {\n    padding: 1rem 1.2rem;\n    color: white;\n    background: transparent;\n    border: 2px solid transparent;\n    transition: color 250ms cubic-bezier(0.16, 1, 0.3, 1) 0s, text-decoration 500ms cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -webkit-transition: color 250ms cubic-bezier(0.16, 1, 0.3, 1) 0s, text-decoration 500ms cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -moz-transition: color 250ms cubic-bezier(0.16, 1, 0.3, 1) 0s, text-decoration 500ms cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -ms-transition: color 250ms cubic-bezier(0.16, 1, 0.3, 1) 0s, text-decoration 500ms cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -o-transition: color 250ms cubic-bezier(0.16, 1, 0.3, 1) 0s, text-decoration 500ms cubic-bezier(0.16, 1, 0.3, 1) 0s;\n}\n\nnav > button:hover, nav > button:active, nav > button:focus {\n    color: rgb(187, 187, 187);\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n/* START OF HOMEPAGE CONTENT */\n\n.homepage-image {\n    object-fit: cover;\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100%;\n    opacity: 40%;\n}\n\n.homepage-content > p:nth-of-type(1) {\n    color: rgb(210, 210, 210);\n    text-transform: uppercase;\n    margin-bottom: 0rem;\n}\n\n.homepage-content > p:nth-of-type(2) {\n    margin: 0 var(--space-xs);\n    text-wrap: balance;\n    text-align: center;\n    margin-bottom: 2rem;\n    max-width: 100vw;\n}\n\n.homepage-content > h2 {\n    font-size: var(--step-3);\n    text-align: center;\n}\n\n.homepage-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10rem auto;\n    max-width: 80vw;\n    height: 48vh;\n}\n\n.homepage-content > button {\n    font-size: var(--step--1);\n    text-transform: uppercase;\n    padding: 0.6rem 1.2rem;\n    color: rgb(255, 255, 255);\n    background-color: transparent;\n    border: 1px solid grey;\n    font-weight: 800;\n    border-radius: 8px;\n    -webkit-border-radius: 8px;\n    -moz-border-radius: 8px;\n    -ms-border-radius: 8px;\n    -o-border-radius: 8px;\n    transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, font-size 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, border 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -webkit-transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, font-size 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, border 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -moz-transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, font-size 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, border 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -ms-transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, font-size 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, border 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;\n    -o-transition: padding 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, font-size 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, letter-spacing 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s, border 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s;\n}\n\n.homepage-content > button:hover, .homepage-content > button:active, .homepage-content > button:focus {\n    letter-spacing: 0.2rem;\n    padding: 0.6rem 1.4rem;\n    font-size: var(--step-0);\n    cursor: pointer;\n    border: 1px solid white;\n}\n\n.homepage-content > h2 {\n    font-size: var(--step-3);\n    text-transform: uppercase;\n    transition: letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -webkit-transition: letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -moz-transition: letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -ms-transition: letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -o-transition: letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n}\n\n.homepage-content > h2:hover, .homepage-content > h2:active, .homepage-content > h2:focus {\n    letter-spacing: 0.2rem;\n}\n\n/* END OF HOMEPAGE STYLING */\n/* START OF MENU STYLING */\n\n.menu-content {\n    text-align: center;\n    width: clamp(22rem, 27.5vw, 30vw);\n    margin: 2rem auto auto auto;\n    border: 2px solid white;\n    border-radius: 8px;\n    -webkit-border-radius: 8px;\n    -moz-border-radius: 8px;\n    -ms-border-radius: 8px;\n    -o-border-radius: 8px;\n}\n\n.menu-content > h2 {\n    font-size: var(--step-3);\n    text-transform: uppercase;\n    margin-top: 2.5rem;\n    margin-bottom: 5rem\n}\n\n.food-section {\n    margin-bottom: 20vh;\n}\n\n.drink-section {\n    margin-bottom: 10vh;\n}\n\n\n.food-information, .drink-information {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n} \n\n.food-information p:nth-of-type(1), .drink-information p:nth-of-type(1) {\n    font-style: italic;\n    font-size: var(--step-0);\n}\n\n.prices {\n    font-weight: 700;\n}\n\n/* END OF MENU STYLING */\n/* START OF ABOUT STYLING */\n\n.about-image {\n    object-fit: cover;\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100%;\n    opacity: 75%;\n    border-radius: 8px;\n}\n\n.about-container {\n    height: 35vh;\n    margin: 15vh auto;\n    \n}\n\n.page-title {\n    font-size: var(--step-3);\n    text-transform: uppercase;\n    text-align: center;\n    transition: font-size 0.4s cubic-bezier(0.16,1,0.3,1) 0s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -webkit-transition: font-size 0.4s cubic-bezier(0.16,1,0.3,1) 0s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -moz-transition: font-size 0.4s cubic-bezier(0.16,1,0.3,1) 0s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -ms-transition: font-size 0.4s cubic-bezier(0.16,1,0.3,1) 0s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n    -o-transition: font-size 0.4s cubic-bezier(0.16,1,0.3,1) 0s, letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1) 0s;\n}\n\n.page-title:hover, .page-title:active, .page-title:focus {\n    font-size: var(--step-4);\n    letter-spacing: 5px;\n}\n\n.about-container p {\n    font-size: var(--step--1);\n    max-width: clamp(60%, 55%, 50%);\n    margin: 0 auto;\n    color: rgb(236, 233, 233);\n}\n\n.quote-container {\n    background-color: rgb(255, 255, 255);\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    border-radius: 8px;\n    -webkit-border-radius: 8px;\n    -moz-border-radius: 8px;\n    -ms-border-radius: 8px;\n    -o-border-radius: 8px;\n}\n\n.quote-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 80%;\n    margin: 3rem auto;\n}\n\n.quote-content > p:nth-of-type(1) {\n    font-size: var(--step-0);\n    margin-bottom: var(--space-l);\n    font-weight: 700;\n    font-style: italic;\n    transition: font-size 0.8s cubic-bezier(0.16,1,0.3,1) 0s;\n    -webkit-transition: font-size 0.8s cubic-bezier(0.16,1,0.3,1) 0s;\n    -moz-transition: font-size 0.8s cubic-bezier(0.16,1,0.3,1) 0s;\n    -ms-transition: font-size 0.8s cubic-bezier(0.16,1,0.3,1) 0s;\n    -o-transition: font-size 0.8s cubic-bezier(0.16,1,0.3,1) 0s;\n}\n\n.quote-content > p:nth-of-type(1):hover,\n.quote-content > p:nth-of-type(1):focus,\n.quote-content > p:nth-of-type(1):active {\n    font-size: var(--step-1);\n}\n\n.quote-container p {\n    color: black;\n}\n\n.image-wrapper > img {\n    object-fit: cover;\n    width: 95%;\n    height: 100%;\n}\n\n/* END OF ABOUT STYLING */\n/* START OF RESERVATIONS STYLING */\n/* END OF RESERVATIONS STYLING */\n\nfooter {\n    margin-top: auto;\n    text-align: center;\n}\n\n.copyright {\n    font-size: var(--step--1);\n    color: rgb(214, 198, 198);\n    font-family: 'Inter', system-ui, sans-serif;\n}",""]);const a=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var p=0;p<n.length;p++){var m=[].concat(n[p]);r&&s[m[0]]||(void 0!==o&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=o),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),i&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=i):m[4]="".concat(i)),e.push(m))}},e}},601:n=>{n.exports=function(n){return n[1]}},511:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r=t(72),i=t.n(r),o=t(825),s=t.n(o),a=t(659),c=t.n(a),p=t(56),m=t.n(p),u=t(540),l=t.n(u),d=t(113),b=t.n(d),f=t(208),g={};g.styleTagTransform=b(),g.setAttributes=m(),g.insert=c().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=l(),i()(f.A,g);const h=f.A&&f.A.locals?f.A.locals:void 0},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},s=[],a=0;a<n.length;a++){var c=n[a],p=r.base?c[0]+r.base:c[0],m=o[p]||0,u="".concat(p," ").concat(m);o[p]=m+1;var l=t(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var b=i(d,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:b,references:1})}s.push(u)}return s}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var a=t(o[s]);e[a].references--}for(var c=r(n,i),p=0;p<o.length;p++){var m=t(o[p]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);