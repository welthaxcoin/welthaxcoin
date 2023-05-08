let isMenuOpen;
let carousel;
let collapsible;

document.addEventListener("DOMContentLoaded", function () {
  carousel = document.querySelectorAll(".carousel");
  collapsible = document.querySelectorAll(".collapsible");

  M.Carousel.init(carousel, {
    numVisible: 2,
    noWrap: true,
    dist: -100,
    shift: 0,
  });

  M.Collapsible.init(collapsible, { accordion: false });
});

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "toggle-menu") {
    toggleMenu(e.target);
  } else if (
    e.target.classList.contains("nav-dropdown-icon") ||
    e.target.classList.contains("collapsible-header")
  ) {
    e.target.textContent = "expand_less";
  }
});

function toggleMenu(menuIcon) {
  if (!isMenuOpen) {
    anime
      .timeline({
        easing: "easeOutSine",
        begin: function (anim) {
          document.getElementById("menu").style.display = "flex";
          menuIcon.classList.toggle("change");
        },
        complete: function (anim) {
          isMenuOpen = true;
        },
      })
      .add({
        targets: "#menu",
        opacity: [0, 1],
        duration: 300,
        easing: "cubicBezier(0.895, 0.03, 0.685, 0.22)",
      })
      .add({
        targets: "#menu-items",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 300,
      });
    return;
  }
  anime
    .timeline({
      easing: "easeOutSine",
      begin: function (anim) {
        menuIcon.classList.toggle("change");
      },
      complete: function (anim) {
        document.getElementById("menu").style.display = "none";
        isMenuOpen = false;
      },
    })
    .add({
      targets: "#menu-items",
      opacity: [1, 0],
      translateY: [0, 20],
      duration: 200,
    })
    .add({
      targets: "#menu",
      opacity: [1, 0],
      duration: 200,
      easing: "cubicBezier(0.895, 0.03, 0.685, 0.22)",
    });
}
