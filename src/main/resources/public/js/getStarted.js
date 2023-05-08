let emailParam = new URLSearchParams(window.location.search).get("email");
let statusParam = new URLSearchParams(window.location.search).get("status");
let userEmail = new URLSearchParams(window.location.search).get("useremail");
let hasReferral = new URLSearchParams(window.location.search).has("referral");
let hasVerificationCode = new URLSearchParams(window.location.search).has(
  "verification-code"
);
let verificationCode = new URLSearchParams(window.location.search).get(
  "verification-code"
);

let signUpCard = document.getElementById("sign-up-card");
let signInPromptCard = document.getElementById("sign-in-prompt-card");
let signInDesc = document.getElementById("sign-in-desc");
let signUpDesc = document.getElementById("sign-up-desc");
let signInFormDesc = document.getElementById("sign-in-form-desc");
let signUpFormDesc = document.getElementById("sign-up-form-desc");

let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let referral = document.getElementById("referral");

let email2 = document.getElementById("email-2");
let password2 = document.getElementById("password-2");

let firstCard = document.getElementById("first");
let secondCard = document.getElementById("second");

let signUpBtn = document.getElementById("sign-up");
let signInBtn = document.getElementById("sign-in");

let validated;
let verified;
let signedIn;
let resend;

let countdown;

if (emailParam != null) {
  email2.value = emailParam;
  switchCards(
    signUpCard,
    signInPromptCard,
    signInDesc,
    signUpDesc,
    signUpFormDesc,
    signInFormDesc
  );
}
if (hasVerificationCode) {
  verify();
}
if (statusParam == "signin") {
  switchCards(
    signUpCard,
    signInPromptCard,
    signInDesc,
    signUpDesc,
    signUpFormDesc,
    signInFormDesc
  );
} else if (statusParam == "verify") {
  changeCard(firstCard, secondCard);
  startTimer();
}

if (hasReferral) {
  referral.value = new URLSearchParams(window.location.search).get("referral");
}

document.body.addEventListener("input", function (e) {
  if (
    fullName.value != "" &&
    email.value != "" &&
    password.value != "" &&
    password.value == confirmPassword.value
  ) {
    validated = true;
    signUpBtn.classList.replace(
      "background-accent-inactive",
      "background-accent"
    );
  } else {
    validated = false;
    signUpBtn.classList.replace(
      "background-accent",
      "background-accent-inactive"
    );
  }

  if (email2.value != "" && password2.value != "") {
    signedIn = true;
    signInBtn.classList.replace(
      "background-accent-inactive",
      "background-accent"
    );
  } else {
    signedIn = false;
    signInBtn.classList.replace(
      "background-accent",
      "background-accent-inactive"
    );
  }
});

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "sign-in-prompt" || targetId == "sign-in-prompt-mobile") {
    switchCards(
      signUpCard,
      signInPromptCard,
      signInDesc,
      signUpDesc,
      signUpFormDesc,
      signInFormDesc
    );
  } else if (
    targetId == "sign-up-prompt" ||
    targetId == "sign-up-prompt-mobile"
  ) {
    switchCards2(
      signInPromptCard,
      signUpCard,
      signUpDesc,
      signInDesc,
      signInFormDesc,
      signUpFormDesc
    );
  } else if (targetId == "sign-up") {
    if (validated) {
      e.target.classList.remove("background-accent");
      e.target.innerHTML =
        "<span class='fa fa-spinner fa-spin text-accent text-xl'></span>";
      signUp();
    }
  } else if (targetId == "verify") {
    if (verified) {
      e.target.classList.remove("background-accent");
      e.target.innerHTML =
        "<span class='fa fa-spinner fa-spin text-accent text-xl'></span>";
      verify();
    }
  } else if (targetId == "sign-in") {
    if (signedIn) {
      e.target.classList.remove("background-accent");
      e.target.innerHTML =
        "<span class='fa fa-spinner fa-spin text-accent text-xl'></span>";
      signIn(email2.value.toLowerCase(), password2.value, e.target);
    }
  } else if (targetId == "back-to-sign-in") {
    document.location.replace(`get-started.html?email=${email.value}`);
  } else if (targetId == "resend") {
    if (resend) {
      resendVerificationCode();
    }
  }
});

function verify() {
  let verificationXhr = new XMLHttpRequest();
  verificationXhr.open(
    "GET",
    `http://127.0.0.1/verify/${verificationCode}`,
    true
  );
  verificationXhr.send();

  verificationXhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      changeCard(firstCard, third);
      let response = JSON.parse(this.response);
      if (response) {
        changeCard(second, third);
      } else {
        document.getElementById("wrong-verification").style.display = "block";
        document.getElementById("correct-verification").style.display = "none";
        document
          .getElementById("back-to-sign-in")
          .classList.add("background-accent-inactive");
        document.getElementById("verify").innerHTML = "Verify";
        verified = false;
      }
    }
  };
}

function resendVerificationCode() {
  let resendXhr = new XMLHttpRequest();
  resendXhr.open("GET", `http://127.0.0.1/user/${userEmail}/resend`, true);
  //   resendXhr.send();

  resendXhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let response = JSON.parse(this.response);
      document
        .getElementById("resend-container")
        .classList.replace("background-accent", "background-grey");
      startTimer();
    }
  };
}

function startTimer() {
  let timer = document.getElementById("timer");
  countdown = 60;
  timer.textContent = 60 + "s";
  timer.style.display = "block";
  resend = false;
  let interval = setInterval(function () {
    if (countdown > 1) {
      countdown--;
    } else {
      document
        .getElementById("resend-container")
        .classList.replace("background-grey", "background-accent");
      timer.style.display = "none";
      resend = true;
      clearInterval(interval);
    }
    timer.textContent = countdown + "s";
  }, 1000);
}

function signUp() {
  let referralValue = {};
  if (referral.value != "") {
    referralValue = { referralId: referral.value };
  } else {
    referralValue = null;
  }

  let payLoad = {
    fullName: fullName.value,
    email: email.value.toLowerCase(),
    password: password.value,
    referral: referralValue,
    date: moment(),
  };
  payLoad = JSON.stringify(payLoad);
  let signUpXhr = new XMLHttpRequest();
  signUpXhr.open("POST", "http://127.0.0.1/user", true);
  signUpXhr.setRequestHeader("Content-type", "application/json");
  signUpXhr.send(payLoad);

  signUpXhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      if (response.email != null) {
        changeCard(firstCard, secondCard);
        startTimer();
        userEmail = response.email;
      } else if (response.email == null && response.referral != null) {
        wrongReferral();
      } else {
        alreadyRegistered();
      }
    }
  };
}

function wrongReferral() {
  document.getElementById("wrong-referral").style.display = "block";
  signUpBtn.classList.add("background-accent-inactive");
  signUpBtn.innerHTML = "SIGN UP";
  validated = false;
}

function alreadyRegistered() {
  document.getElementById("already-registered").style.display = "block";
  signUpBtn.classList.add("background-accent-inactive");
  signUpBtn.innerHTML = "SIGN UP";
  validated = false;
}

function signIn(email, password) {
  let signInXhr = new XMLHttpRequest();
  signInXhr.open(
    "GET",
    `http://127.0.0.1/signin/email/${email}/password/${password}`
  );
  signInXhr.send();
  signInXhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let response = JSON.parse(this.response);
      if (response.email != null) {
        if (response.role == "USER") {
          if (response.accountNonLocked == true) {
            if (response.active == false) {
              location.replace(
                `/get-started.html?status=verify&useremail=${response.email}`
              );
            } else {
              location.replace(`./dashboard.html?email=${response.email}`);
            }
          }
        } else {
          location.replace(`./admin.html?email=${response.email}`);
        }
      } else {
        incorrectPassword();
      }
    }
  };
}

function incorrectPassword() {
  signInBtn.classList.add("background-accent");
  signInBtn.innerHTML = "Sign In";
  document.getElementById("incorrect-password").style.display = "block";
}

function changeCard(fadeOut, fadeIn) {
  anime
    .timeline({
      easing: "easeOutSine",
      duration: 300,
    })
    .add({
      targets: fadeOut,
      opacity: [1, 0],
      complete: function (anim) {
        fadeOut.style.display = "none";
      },
    })
    .add(
      {
        begin: function (anim) {
          fadeIn.style.display = "block";
        },
        targets: fadeIn,
        opacity: [0, 1],
      },
      "-=100"
    );
}

function switchCards(
  firstCard,
  secondCard,
  firstDesc,
  secondDesc,
  firstFormDesc,
  secondFormDesc
) {
  firstCard.classList.add("card-form-animate");
  secondCard.classList.add("card-prompt-animate");
  firstDesc.classList.add("sign-in-desc-animate");
  secondDesc.classList.add("sign-up-desc-animate");
  firstFormDesc.classList.add("sign-up-form-desc-animate");
  secondFormDesc.classList.add("sign-in-form-desc-animate");
  setTimeout(function () {
    firstCard.classList.remove("card-form-animate-2");
    secondCard.classList.remove("card-prompt-animate-2");
    firstDesc.classList.remove("sign-in-desc-animate-2");
    secondDesc.classList.remove("sign-up-desc-animate-2");
    firstFormDesc.classList.remove("sign-up-form-desc-animate-2");
    secondFormDesc.classList.remove("sign-in-form-desc-animate-2");
  }, 300);
}

function switchCards2(
  secondCard,
  firstCard,
  secondDesc,
  firstDesc,
  secondFormDesc,
  firstFormDesc
) {
  firstCard.classList.add("card-form-animate-2");
  secondCard.classList.add("card-prompt-animate-2");
  firstDesc.classList.add("sign-in-desc-animate-2");
  secondDesc.classList.add("sign-up-desc-animate-2");
  firstFormDesc.classList.add("sign-up-form-desc-animate-2");
  secondFormDesc.classList.add("sign-in-form-desc-animate-2");

  setTimeout(function () {
    firstCard.classList.remove("card-form-animate");
    secondCard.classList.remove("card-prompt-animate");
    firstDesc.classList.remove("sign-in-desc-animate");
    secondDesc.classList.remove("sign-up-desc-animate");
    firstFormDesc.classList.remove("sign-up-form-desc-animate");
    secondFormDesc.classList.remove("sign-in-form-desc-animate");
  }, 300);
}
