var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  effect: 'slide', // Chỉ hiển thị 1 slide tại một thời điểm  
  autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  speed: 800 // Tốc độ chuyển đổi giữa các slide (800ms)
});
