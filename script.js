let panelChnage = document.querySelectorAll(".panel");

for (let i = 0; i < panelChnage.length; i++) {
  panelChnage[i].addEventListener("click", function () {
    removeClases();
    panelChnage[i].classList.add("active");
  });
}
function removeClases() {
  for (let i = 0; i < panelChnage.length; i++) {
    panelChnage[i].classList.remove("active");
  }
}
