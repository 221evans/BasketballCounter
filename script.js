
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;


function addOneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function addOneGuest() {
  guestScore ++;
  guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function resetHome() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
}

function resetGuest() {
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
}