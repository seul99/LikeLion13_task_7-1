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
  // console.log("제목 : ", title);
  // console.log("날짜 : ", today);
  // console.log("내용 : ", textarea);

  // json 배열로 저장하기
  const newPost = {
    postId: Date.now(),
    title: title,
    date: today,
    content: textarea,
  };

  let posts = localStorage.getItem("posts");
  posts = posts ? JSON.parse(posts) : [];
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));

  location.href = "main.html";
});
