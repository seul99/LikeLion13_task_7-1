const letter = document.getElementById("letter");

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const letterTitle = document.createElement("div");
      letterTitle.className = "letter";
      letterTitle.textContent = item.title;

      letterTitle.addEventListener("click", () => {
        location.href = `read.html?postId=${item.postId}`;
      });
      letter.appendChild(letterTitle);
    });

    // LocalStorage에서 작성한 글 가져오기
    const savedPostsStr = localStorage.getItem("posts");

    if (savedPostsStr !== null) {
      const savedPosts = JSON.parse(savedPostsStr);

      for (let i = 0; i < savedPosts.length; i++) {
        const item = savedPosts[i];

        const letterTitle = document.createElement("div");
        letterTitle.className = "letter";
        letterTitle.textContent = item.title;

        letterTitle.addEventListener("click", () => {
          location.href = `read.html?postId=${item.postId}`;
        });

        letter.appendChild(letterTitle);
      }
    }
  });
