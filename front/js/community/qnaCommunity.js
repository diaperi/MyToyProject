function autoResizeTextarea() {
    const textarea = document.getElementById("qWriteReplyInput");
    textarea.style.height = "auto"; // 높이를 자동으로 조절하도록 초기화
    textarea.style.height = textarea.scrollHeight + "px"; // 스크롤 높이로 설정
}