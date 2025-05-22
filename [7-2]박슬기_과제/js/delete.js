const deleteBtn = document.querySelector(".deleteBtn");

deleteBtn.addEventListener("click", () => {
  // 삭제완료 알림창 띄우고 main으로 이동하기
  alert("삭제 완료!");
  location.href = "main.html";
});
