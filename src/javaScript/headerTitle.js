$(document).ready(function() {
    var typingText = $(".header__bottom__content--title");
    var textContent = typingText.text();
    typingText.text(""); // Xóa nội dung gốc để thêm các ký tự từ JavaScript
    var index = 0;
    var isTyping = true;
    var intervalId;
  
    function typeIn() {
      intervalId = setInterval(function() {
        if (isTyping) {
          typingText.text(typingText.text() + textContent[index]);
          index++;
          if (index === textContent.length) {
            isTyping = false;
            clearInterval(intervalId);
            setTimeout(typeOut, 1000); // Dừng 1 giây trước khi bắt đầu xóa chữ
          }
        }
      }, 50);
    }
  
    function typeOut() {
      intervalId = setInterval(function() {
        if (!isTyping) {
          typingText.text(typingText.text().slice(0, -1));
          if (typingText.text().length === 0) {
            isTyping = true;
            index = 0;
            clearInterval(intervalId);
            setTimeout(typeIn, 1000); // Dừng 1 giây trước khi bắt đầu hiển thị lại
          }
        }
      }, 50);
    }
  
    typeIn(); // Bắt đầu hiển thị văn bản
  });
  
  