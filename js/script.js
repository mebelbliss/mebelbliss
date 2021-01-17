var reflink = document.querySelectorAll('.refclass');
var getbody = document.getElementById("body");
var getmain = document.getElementById("main");
var getheader = document.getElementById('header');
var getcbform = document.getElementById('callbackform');
var getform = document.getElementById('form');
var getspam = document.querySelectorAll('.spam');
window.onscroll = function() {scrollFunction()};
var h = 50;//window.innerHeight/4;
function scrollFunction() {
if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
     getheader.classList.add("_untop");
     document.getElementById('nav').classList.add("nav-hide");
     document.getElementById('second-slide').classList.add("opacity-100");
     
} 
else {getheader.classList.remove("_untop");
     document.getElementById('nav').classList.remove("nav-hide");
     document.getElementById('second-slide').classList.remove("opacity-100");
}
};
window.onload = function(){
for (var i = 0; i < reflink.length; i++) {
  reflink[i].value = document.referrer;

   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(69462745, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
};
if(document.querySelectorAll('.g-recaptcha').length > 0){
     grecaptcha.execute();
};
if(document.querySelectorAll('#callback-form').length > 0){
     document.getElementById('callback-form').addEventListener('change', function () {
          if ( this.checked ) {history.pushState(null, null);
            window.onpopstate = function(event) {
                if (document.getElementById('callback-form').checked = true) {
                  menu_unchk();
                  document.getElementById('callback-form').checked = false;
                }
                window.onpopstate = null;
            };
            menu_chk();} 
          else {
               menu_unchk();
          }
        });  
}

document.querySelector('#menu__toggle').addEventListener('change', function () {
     if ( this.checked ) {history.pushState(null, null);
       window.onpopstate = function(event) {
           if (document.querySelector('#menu__toggle').checked = true) {
             menu_unchk();
             document.querySelector('#menu__toggle').checked = false;
           }
           window.onpopstate = null;
       };
       menu_chk();
       getmain.classList.add('dark-filter');
     } 
     else {
          menu_unchk();
          getmain.classList.remove('dark-filter');
     }
   });
};
function menu_chk(){
bodyLock();
}
function menu_unchk(){
     getbody.classList.remove("overflow-hidden");
     getbody.style.paddingRight = '0px';
}
function bodyLock() {
     const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
     getbody.style.paddingRight = lockPaddingValue;
     getbody.classList.add('overflow-hidden');
     
}
function onSubmit(token){document.getElementById("form").submit();}

(function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
const blazyclass = document.querySelectorAll('.b-lazy');
if(blazyclass.length > 0){(function() {var bLazy = new Blazy();})();}
function enablebtn(token) {
     for (var i = 0; i < getspam.length; i++) {
       getspam[i].value = 'Не спамер';
     }
};
function Fullform(){
     getform.classList.add('send');
     setTimeout(() => {getform.reset();
     getform.classList.remove('send');
     }, 6000)
 }
 function CallBackform(){
     getcbform.classList.add('send');
     setTimeout(() => {
     getcbform.reset();
     getcbform.classList.remove('send');
     document.getElementById('callback-form').checked = false;
     }, 6000);
     

 }
