const startScreen = document.getElementById("startScreen");
const introScreen = document.getElementById("introScreen");
const questionScreen = document.getElementById("questionScreen");
const yesScreen = document.getElementById("yesScreen");
const noScreen = document.getElementById("noScreen");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const whyBtn = document.getElementById("whyBtn");
const loveModal = document.getElementById("loveModal");
const closeBtn = document.getElementById("closeBtn");

const music = document.getElementById("music");
const loveMusic = document.getElementById("loveMusic");


function showScreen(screen) {

  document.querySelectorAll(".screen").forEach(item => {
    item.classList.remove("active");
  });

  screen.classList.add("active");
}


/* START */

startBtn.addEventListener("click", () => {

  music.volume = 0.4;

  music.play().catch(() => {
    console.log("Music playback needs user interaction.");
  });

  showScreen(introScreen);
});


/* CONTINUE */

continueBtn.addEventListener("click", () => {

  showScreen(questionScreen);

});


/* YES */

yesBtn.addEventListener("click", () => {

  // Keep the first song playing.
  showScreen(yesScreen);

});


/* NO */

noBtn.addEventListener("click", () => {

  showScreen(noScreen);

});


/* WHY DO I LIKE YOU? */

whyBtn.addEventListener("click", () => {

  // Stop the first song.
  music.pause();

  music.currentTime = 0;

  // Start the second song.
  loveMusic.volume = 0.45;

  loveMusic.currentTime = 0;

  loveMusic.play().catch(() => {
    console.log("Second song needs user interaction.");
  });

  // Open popup.
  loveModal.classList.add("show");

});


/* CLOSE POPUP */

closeBtn.addEventListener("click", () => {

  loveModal.classList.remove("show");

});


/* CLICK OUTSIDE POPUP */

loveModal.addEventListener("click", event => {

  if (event.target === loveModal) {

    loveModal.classList.remove("show");

  }

});


/* ESCAPE KEY */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    loveModal.classList.remove("show");

  }

});
