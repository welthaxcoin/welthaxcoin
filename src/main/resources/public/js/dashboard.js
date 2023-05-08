let isMenuOpen;

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "toggle-menu") {
    toggleMenu(e.target, "#menu-items");
  } else if (targetId == "invest") {
    selectInvestmentPlan();
  } else if (targetId == "withdraw") {
    selectMenuItem("menu-items", "withdrawal-modal")
  } else if (targetId == "withdrawal-history") {
  } else if (targetId == "refer-a-friend") {
    selectMenuItem("menu-items", "refer-modal")
  } else if (targetId == "profile") {
  }
  else if(e.target.classList.contains("invest")) {
    selectMenuItem("investment-plan-modal", "wallet-modal")
  }
});

function toggleMenu(menuIcon, target) {
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
        targets: target,
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
      targets: target,
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

function selectMenuItem(prev, target) {
  anime
    .timeline({
      easing: "easeOutSine",
      begin: function (anim) {
        document.getElementById(target).style.display = "block";
        console.log(document.getElementById(target))
      },
      complete: function (anim) {
        document.getElementById(prev).style.display = "none";
      },
    })
    .add({
      targets: `#${prev}`,
      opacity: [1, 0],
      translateY: [0, 20],
      duration: 200,
    })
    .add({
      targets: `#${target}`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 300,
    });
}

function selectInvestmentPlan() {
  anime
    .timeline({
      easing: "easeOutSine",
      begin: function (anim) {
        openCarousel();
      },
      complete: function (anim) {
        document.getElementById("menu-items").style.display = "none";
      },
    })
    .add({
      targets: "#menu-items",
      opacity: [1, 0],
      translateY: [0, 20],
      duration: 200,
    })
    .add({
      targets: "#investment-plan-modal",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 300,
    });
}

function openCarousel() {
  document.getElementById("investment-plan-modal").style.display = "block";
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    numVisible: 2,
    noWrap: true,
    dist: -100,
    shift: 80,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    modifyCoinList();
  }, 5000);
  var selectElems = document.querySelectorAll("select");
  var selInstances = M.FormSelect.init(selectElems);
});

function modifyCoinList() {
  let iframes = document.getElementsByTagName("iframe");
  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i].title == "coin_list") {
    }
  }
}

// document.getElementById("toggle-menu").click();
