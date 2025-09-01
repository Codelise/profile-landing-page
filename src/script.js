document.addEventListener("DOMContentLoaded", () => {
  const h1Text = "Hi, I'm Aeryun";
  const pText =
    "I’m a 3rd-year BSIT student passionate about building web apps that solve real-world problems. \nI love working with HTML, CSS, JavaScript, and React, and I enjoy bringing ideas to life through clean and user-friendly projects.";

  const h1El = document.getElementById("typewriter-h1");
  const pEl = document.getElementById("typewriter-p");

  function typeEffect(element, text, speed, callback) {
    // parameters/arguments for this function
    let i = 0; // the letter from the type effect starts to index 0
    const interval = setInterval(() => {
      // this handle line breaks
      let char = text[i] === "\n" ? "<br>" : text[i];

      // this adds a cursor effect on each typed letter
      element.innerHTML =
        text.substring(0, i + 1).replace(/\n/g, "<br>") +
        "<span class='cursor'>|</span>"; // new added element

      i++; // increments the i
      if (i === text.length) {
        clearInterval(interval);
        // this remove cursor after typing finishes
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

  // this will run when the webpage loads
  const modal = document.getElementById("greeting-modal"); // gets the id from modal div
  const closeBtn = document.getElementById("close-modal"); // gets the close modal id
  const exploreBtn = document.getElementById("explore-btn"); // gets the explore-btn id from the button element

  modal.style.display = "flex"; // it will show the modal into a flex position

  // This arrow function will execute when you CLICK the X button to close the modal
  closeBtn.onclick = () => {
    modal.style.display = "none"; // it will close the modal
  };

  // This will close the modal then proceeds you to About section of my page
  exploreBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Similarly to X button but this will execute if you click outside the modal
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none"; // closes the modal
    }
  };

  // This arrow function is for scroll reveal about my BIO section
  window.addEventListener("scroll", () => {
    const bio = document.querySelector(".bio-container"); // gets the element with bio-container class
    const bioPosition = bio.getBoundingClientRect().top; // the distance from the top of the viewport to the top of bio-container
    const screenPosition = window.innerHeight / 1.2; // the position threshold (slightly above bottom of screen)

    // If the bio-container's top is within the visible screen threshold
    if (bioPosition < screenPosition) {
      bio.classList.add("show"); // Add the "show" class (triggers fade-in / slide-up animation in CSS)
    }
  });

  // This arrow function is for my SKILLS section
  window.addEventListener("scroll", () => {
    const skills = document.querySelector(".skills"); // gets the skills class from div element
    const skillsPosition = skills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (skillsPosition < screenPosition) {
      skills.classList.add("show");
    }
  });

  // This Block of code is for showing my project one by one with animation
  // get all project items with data-animate
  const projects = document.querySelectorAll(".project[data-animate]");

  // watch when items enter or leave the screen
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // find the position (order) of this project
        const index = [...projects].indexOf(entry.target);

        if (entry.isIntersecting) {
          // when project shows on screen -> add "show" with delay
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); // delay each item by 200ms
        } else {
          // when project leaves screen -> remove "show"
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  ); // 0.2 = trigger when 20% is visible

  // observe all projects
  projects.forEach((p) => observer.observe(p));
});
