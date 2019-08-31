const menu = document.getElementById("menu");

let isOpen = false;
function toggleMenu() {
  if (isOpen) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }

  isOpen = !isOpen;
}
