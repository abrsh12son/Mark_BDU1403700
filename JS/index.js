const expriance = document.querySelector(".Exprience");
const education = document.querySelector(".Education");
const hobbies = document.querySelector(".Hobbies");
const btnsOpenContent = document.querySelectorAll(".tab-titles");
const openContent = function (node) {
  if (node === 0) {
    expriance.classList.remove("hidden");
    education.classList.add("hidden");
    hobbies.classList.add("hidden");
  } else if (node === 1) {
    education.classList.remove("hidden");
    expriance.classList.add("hidden");
    hobbies.classList.add("hidden");
  } else if (node === 2) {
    hobbies.classList.remove("hidden");
    expriance.classList.add("hidden");
    education.classList.add("hidden");
  }
};

for (let i = 0; i < btnsOpenContent.length; i++) {
  btnsOpenContent[i].addEventListener("click", openContent(i));
}
