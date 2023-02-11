let toggleBtn = document.querySelector(".toggleBtn");
let container = document.querySelector(".container");

toggleBtn.addEventListener("click", function () {
  container.classList.toggle("active");
});

