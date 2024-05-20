document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");
  
    function fadeIn(section) {
      var sectionPosition = section.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (sectionPosition < windowHeight) {
        section.classList.add("active");
      }
    }
  
    function handleScroll() {
      sections.forEach(function(section) {
        fadeIn(section);
      });
    }
  
    handleScroll(); // Kích hoạt hiệu ứng cho tất cả các phần tử section khi trang được tải
  
    // Kích hoạt hiệu ứng khi cuộn trang
    window.addEventListener("scroll", function() {
      handleScroll();
    });
  });
  