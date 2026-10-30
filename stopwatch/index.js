const startButton = document.getElementById("start-button")
const pauseButton = document.getElementById("pause-button")
const resetButton = document.getElementById("reset-button")
const state = document.getElementById("state")
const displayHours = document.getElementById("hours")
const displayMinutes = document.getElementById("minutes")
const displaySeconds = document.getElementById("seconds")

let intervalId;
let startTime = 0;
const formatTime = (startTime) => {
    const seconds = Math.floor(startTime % 60).toString().padStart(2, "0");
    const minutes = Math.floor((startTime % 3600) /60).toString().padStart(2, "0");
    const hours =Math.floor(startTime /3600).toString().padStart(2, "0");
    
    displayHours.textContent = hours;
    displayMinutes.textContent = minutes;
    displaySeconds.textContent = seconds;

};
const startTimer = () => {
  intervalId = setInterval(() => {
    startTime ++;
    formatTime(startTime);
  },1000)

    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    state.textContent = "Running";

}

const pauseTimer = () => {
    clearInterval(intervalId);


    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
    state.textContent = "Paused";
    startButton.textContent = "Resume";

}

const resetTimer = () => {
    clearInterval(intervalId);
    startTime = 0;
    formatTime(startTime);

    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    state.textContent = "Ready";
    startButton.textContent = "Start";

}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
pauseButton.addEventListener("click", pauseTimer);

