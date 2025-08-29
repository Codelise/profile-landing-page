document.addEventListener("DOMContentLoaded", () => {
  const h1Text = "Hi, I'm Aeryun";
  const pText =
    "I’m a 3rd-year BSIT student passionate about building web apps that solve real-world problems. \nI love working with HTML, CSS, JavaScript, and React, and I enjoy bringing ideas to life through clean and user-friendly projects.";

  const h1El = document.getElementById("typewriter-h1");
  const pEl = document.getElementById("typewriter-p");

  function typeEffect(element, text, speed, callback) {
    let i = 0;
    const interval = setInterval(() => {
      // Handle line breaks
      let char = text[i] === "\n" ? "<br>" : text[i];

      // Add typed characters + cursor
      element.innerHTML =
        text.substring(0, i + 1).replace(/\n/g, "<br>") +
        "<span class='cursor'>|</span>";

      i++;
      if (i === text.length) {
        clearInterval(interval);
        // Remove cursor after typing finishes
        element.innerHTML = text.replace(/\n/g, "<br>");
        if (callback) setTimeout(callback, 500);
      }
    }, speed);
  }

  // Run typewriter on h1 then p
  typeEffect(h1El, h1Text, 100, () => {
    typeEffect(pEl, pText, 40);
  });

  document.querySelector(".hero-text").style.animationPlayState = "running";
  document.querySelector(".hero-img").style.animationPlayState = "running";
  document.querySelector(".projectsBtn").style.animationPlayState = "running";
});
