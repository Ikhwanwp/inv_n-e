//countdown
var countDownDate = new Date("Jun 30, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// Music
// const audio = document.getElementById("myAudio");
// const playButton = document.getElementById("playButton");
// const isAutoplayAllowed = audio.canPlayType("audio/mpeg"); // Check if audio can be played

// playButton.addEventListener("click", () => {
//   if (isAutoplayAllowed) {
//     audio.muted = true; // Mute the audio initially
//     audio.play(); // Start playback
//     audio.muted = false; // Unmute after a short delay (optional)
//   } else {
//     alert("This browser may not allow autoplay. Click the button to play manually.");
//   }
// });

// // Optional: Handle potential autoplay restrictions in modern browsers
// audio.addEventListener("canplaythrough", () => {
//   // If autoplay is allowed, uncomment the following line:
//   audio.muted = true;
//   audio.play();
// });

const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const isAutoplayAllowed = audio.canPlayType("audio/mpeg"); // Check if audio can be played

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    // playButton.textContent = "Jeda";
  } else {
    audio.pause();
    // playButton.textContent = "Putar";
  }
});

// Optional: Handle potential autoplay restrictions in modern browsers
audio.addEventListener("canplaythrough", () => {
  // If autoplay is allowed, uncomment the following line:
  audio.muted = true;
  audio.play();
});
