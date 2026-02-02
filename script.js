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
    ans === "yes"
      ? "That made me smile, not gonna lie 😊"
      : "That’s okay. I still liked making this.";
}

}
function quiz() {
  const replies = [
    "That suits you.",
    "I kind of expected that 🙂",
    "That’s very you."
  ];
  document.getElementById("quizReply").innerText =
    replies[Math.floor(Math.random() * replies.length)];
}
}

function secret() {
  document.getElementById("secretText").innerText =
    "Thanks for being you.";
}
