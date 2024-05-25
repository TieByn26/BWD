var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, // Cho phép lặp lại slide
    speed: 800 // Tốc độ chuyển đổi giữa các slide (800ms)
  });