var elNavOpenBtn = document.querySelector(".js-nav-open");
var elSiteHeader = document.querySelector(".site-header");

elNavOpenBtn.addEventListener("click" , function() {
   elSiteHeader.classList.toggle("site-nav-open");
   
   elNavOpenBtn.classList.toggle("js-btn-open");
})