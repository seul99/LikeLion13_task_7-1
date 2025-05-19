const date = new Date();

const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const today = year + "." + month + "." + day;

const contentDate = document.getElementsByClassName("date")[0];
contentDate.textContent = `${today}`;

document.querySelector(".writeBtn").addEventListener("click", () => {
  const title = document.querySelector(".title").value;
  const textarea = document.querySelector(".textarea").value;
  console.log("제목 : ", title);
  console.log("날짜 : ", today);
  console.log("내용 : ", textarea);
});
