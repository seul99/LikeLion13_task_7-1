// 퀴리스트링으로 보낸 postId 가져오기
const postUrl = new URLSearchParams(window.location.search);
const postId = parseInt(postUrl.get("postId"));

// write 에서 작성한 내용을 localStorage에서 찾아보기
const savedPost = localStorage.getItem("posts");

let found = false;

// 저장된 내용이 있으면 json.parse 를 통해 json 형식으로 변경하기
if (savedPost !== null) {
  const savedPost = JSON.parse(savedPost);

  // data.json에서 가져온것처럼 postId 비교해서 내용 출력하기
  for (let i = 0; i < savedPost.length; i++) {
    const post = savedPost[i];
    if (post.postId === postId) {
      document.getElementById("title").textContent = post.title;
      document.getElementById("contentDate").textContent = post.date;
      document.getElementById("content").textContent = post.content;
      found = true;
      break;
    }
  }
}

// localStorage에 없으면 data.json에서 찾아보기
if (!found) {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const post = data[i];
        if (post.postId === postId) {
          document.getElementById("title").textContent = post.title;
          document.getElementById("contentDate").textContent = post.date;
          document.getElementById("content").textContent = post.content;
          found = true;
          break;
        }
      }
    });
}
