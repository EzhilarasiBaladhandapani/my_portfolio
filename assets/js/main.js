// Animated job titles for Home section
const jobTitles = [
  "Software Engineer",
  "Front-End Developer",
  "Full Stack Developer"
];
let jobIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 90;
const pause = 1200;

function typeJobTitle() {
  const el = document.getElementById("animated-job");
  if (!el) return;
  const current = jobTitles[jobIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      jobIndex = (jobIndex + 1) % jobTitles.length;
      setTimeout(typeJobTitle, 400);
    } else {
      setTimeout(typeJobTitle, speed / 2);
    }
  } else {
    el.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeJobTitle, pause);
    } else {
      setTimeout(typeJobTitle, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeJobTitle);
