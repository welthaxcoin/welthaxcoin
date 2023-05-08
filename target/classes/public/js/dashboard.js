let isMenuOpen;

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "toggle-menu") {
    toggleMenu(e.target);
  }
});

function toggleMenu(menuIcon) {
  if (!isMenuOpen) {
    // anime()
    document.getElementById("menu").style.display = "flex";
    menuIcon.classList.toggle("change");
    isMenuOpen = true;
    return;
  }
  document.getElementById("menu").style.display = "none";
  menuIcon.classList.toggle("change");
  isMenuOpen = false;
}

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {numVisible: 2, noWrap: true, dist: -100, shift: 0})
})

