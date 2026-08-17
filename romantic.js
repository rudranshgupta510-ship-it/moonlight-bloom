const screens = {
  start: document.getElementById("startScreen"),
  intro: document.getElementById("introScreen"),
  question: document.getElementById("questionScreen"),
  yes: document.getElementById("yesScreen"),
  no: document.getElementById("noScreen")
};

const music = document.getElementById("music");


function showScreen(name) {

  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");
}


/* START */

document
  .getElementById("startBtn")
  .addEventListener("click", () => {

    music.volume = 0.35;

    music.play().catch(() => {
      console.log("Music could not autoplay.");
    });

    showScreen("intro");
  });


/* CONTINUE */

document
  .getElementById("continueBtn")
  .addEventListener("click", () => {

    showScreen("question");

  });


/* YES */

document
  .getElementById("yesBtn")
  .addEventListener("click", () => {

    showScreen("yes");

    createHeartBurst();

  });


/* NO */

document
  .getElementById("noBtn")
  .addEventListener("click", () => {

    showScreen("no");

  });


/* HEART ANIMATION */

function createHeartBurst() {

  const container =
    document.getElementById("heartContainer");

  // First big burst
  for (let i = 0; i < 35; i++) {
    createHeart(container, true);
  }

  // Continue creating hearts
  const interval = setInterval(() => {

    if (!screens.yes.classList.contains("active")) {

      clearInterval(interval);

      return;
    }

    createHeart(container, false);

  }, 300);
}


function createHeart(container, burst) {

  const heart =
    document.createElement("span");

  heart.className = "floating-heart";

  heart.textContent =
    Math.random() > .5 ? "♥" : "♡";

  heart.style.left =
    `${Math.random() * 100}vw`;

  heart.style.setProperty(
    "--drift",
    `${(Math.random() - .5) * 250}px`
  );

  heart.style.fontSize =
    `${14 + Math.random() * 24}px`;

  heart.style.animationDuration =
    `${burst
      ? 2 + Math.random() * 2
      : 3 + Math.random() * 3}s`;

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}


/* KEYBOARD */

document.addEventListener("keydown", event => {

  if (event.key !== "Enter") return;

  if (screens.start.classList.contains("active")) {

    document.getElementById("startBtn").click();

  } else if (
    screens.intro.classList.contains("active")
  ) {

    document.getElementById("continueBtn").click();

  }

});
