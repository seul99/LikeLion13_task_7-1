const postUrl = new URLSearchParams(window.location.search);
const postId = parseInt(postUrl.get("postId"));

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    const letter = data.find((item) => item.postId === postId);

    if (letter) {
      document.getElementById("title").textContent = letter.title;
      document.getElementById("contentDate").textContent = letter.date;
      document.getElementById("content").textContent = letter.content;
    }
  });
