
const backToTopButton = document.getElementById('backToTopButton');
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 575) {

    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});


function linkedin() {
    window.open("https://www.linkedin.com/in/asvithasivabalan2105")
}
function twitter() {
    window.open("https://github.com/Ahtivsa21")
}
function instagram() {
    window.open("https://instagram.com")
}

function link() {
    window.open("https://custom-link.com")
}

function github() {
  window.open("https://github.com/Ahtivsa21")
}
