var reflink = document.querySelectorAll('.refclass');
var getheader = document.getElementById('header');
window.onscroll = function() {scrollFunction()};
var h = 50;//window.innerHeight/4;
function scrollFunction() {
if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
     getheader.classList.add("_untop");
     document.getElementById('nav').classList.add("nav-hide");} 
else {getheader.classList.remove("_untop");
     document.getElementById('nav').classList.remove("nav-hide");}
};
window.onload = function(){for (var i = 0; i < reflink.length; i++) {
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
}};
function onSubmit(token){document.getElementById("form").submit();}
