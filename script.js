let savedDate = localStorage.getItem("arrivalDate");

const dateSection = document.getElementById("dateSection");
const countdownSection = document.getElementById("countdownSection");

if (savedDate) {
  dateSection.classList.add("hidden");
  countdownSection.classList.remove("hidden");
  startCountdown(savedDate);
}

function saveDate() {
  const date = document.getElementById("dateInput").value;
  if (!date) return alert("Pick a date");
  localStorage.setItem("arrivalDate", date);
  location.reload();
}

function startCountdown(date) {
  setInterval(() => {
    const target = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return;

    document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor((diff/(1000*60*60))%24);
    document.getElementById("minutes").innerText = Math.floor((diff/(1000*60))%60);
    document.getElementById("seconds").innerText = Math.floor((diff/1000)%60);
  },1000);
}

/* Admin */
function openAdmin() {
  document.getElementById("adminPanel").classList.remove("hidden");
}

function unlockAdmin() {
  if (document.getElementById("adminPass").value === "1802") {
    document.getElementById("adminControls").classList.remove("hidden");
  } else {
    alert("Wrong passcode");
  }
}

function resetDate() {
  localStorage.removeItem("arrivalDate");
  location.reload();
}

function changeBlur(val) {
  document.querySelector(".overlay").style.backdropFilter = `blur(${val}px)`;
}
