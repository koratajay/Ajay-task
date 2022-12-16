$(".menu-icon").click(function () {
  $(".menu-icon").toggleClass("open-menu");
  $(".menu-section").toggleClass("close-menu");
});
$(".menu-section li").click(function () {
  $(".menu-section").removeClass("close-menu");
  $(".menu-icon").removeClass("open-menu");
});



var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  
});
