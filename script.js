let current = 0;
const screens = document.querySelectorAll(".screen");

function next() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
}

function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "eve") {   // CHANGE PASSWORD HERE if you want
    next();
  } else {
    document.getElementById("error").innerText = "Try again 🙂";
  }
}

function hangout(ans) {
  document.getElementById("hangoutReply").innerText =
    ans === "yes" ? "That sounds nice 🙂" : "That’s okay.";
}

function quiz() {
  document.getElementById("quizReply").innerText = "Good choice.";
}

function secret() {
  document.getElementById("secretText").innerText =
    "Thanks for being you.";
}
