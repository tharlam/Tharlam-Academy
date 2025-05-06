// Toggle mobile nav
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

// See More toggle
function toggleSeeMore() {
  const extra = document.getElementById("extra-courses");
  const button = document.querySelector("button");
  if (extra.style.display === "none") {
    extra.style.display = "grid";
    button.textContent = "See Less";
  } else {
    extra.style.display = "none";
    button.textContent = "See More";
  }
}

// Scroll fade-in and fade-out
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElems.forEach(el => observer.observe(el));
});

