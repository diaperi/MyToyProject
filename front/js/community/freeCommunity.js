function autoResizeTextarea() {
    const textarea = document.getElementById("fWriteReplyInput");
    textarea.style.height = "30px"; // 높이를 자동으로 조절하도록 초기화
    textarea.style.height = textarea.scrollHeight + "px"; // 스크롤 높이로 설정
}


$(document).ready(function() {
    $(".fHeartNum").click(function() {
        var fMainContainer = $(this).closest(".fMainContainer"); // 클릭한 fHeartNum의 최상위 fMainContainer를 찾습니다.
        fMainContainer.find(".fHeartNum").toggle(); // fHeartNum 숨기기 또는 보이기
        fMainContainer.find(".fHeartNumClose").toggle(); // fHeartNumClose 숨기기 또는 보이기
        fMainContainer.find(".fReplyBox").toggle(); // fReplyBox 숨기기 또는 보이기
      });
    
      $(".fHeartNumClose").click(function() {
        var fMainContainer = $(this).closest(".fMainContainer"); // 클릭한 fHeartNumClose의 최상위 fMainContainer를 찾습니다.
        fMainContainer.find(".fHeartNum").toggle(); // fHeartNum 숨기기 또는 보이기
        fMainContainer.find(".fHeartNumClose").toggle(); // fHeartNumClose 숨기기 또는 보이기
        fMainContainer.find(".fReplyBox").hide(); // fReplyBox 숨기기
      });



    document.addEventListener("DOMContentLoaded", function() {
        var scrollingImage = document.querySelector(".scrolling-image");
        
        window.addEventListener("scroll", function() {
          var scrollPosition = window.scrollY;
          scrollingImage.style.top = scrollPosition + "px";
        });
      });
});
