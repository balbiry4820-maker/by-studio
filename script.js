// ==========================
// Mobile Menu Toggle
// ==========================
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ==========================
// Scroll Reveal Animation
// ==========================
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ==========================
// Loader
// ==========================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1500);
  }
});

// ==========================
// Scroll Progress Bar
// ==========================
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");

  if (!progressBar) return;

  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = progress + "%";
});

// ==========================
// Back To Top Button
// ==========================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================
// Counter Animation
// ==========================
const counters = document.querySelectorAll(".counter");

const startCounters = () => {
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);

    if (isNaN(target)) return;

    let count = 0;
    const increment = Math.ceil(target / 60);

    function update() {
      count += increment;

      if (count >= target) {
        counter.innerText = target;
      } else {
        counter.innerText = count;
        requestAnimationFrame(update);
      }
    }

    update();
  });
};

window.addEventListener("load", startCounters);