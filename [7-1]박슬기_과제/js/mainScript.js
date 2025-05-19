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
  });
