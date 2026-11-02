const panel = document.getElementById("panel");
const textneg = document.getElementById("text-1");
const texthoyr = document.getElementById("text-2");
const textgurav = document.getElementById("text-3");
const last = document.getElementById("last");
const best = document.getElementById("best");

let startTime = 0;
let timer;
let state = "ready";
let bestTime = null;
const changeColor = (color) => {
  panel.classList.remove("bg-[#27272A]", "bg-[#4d0218]", "bg-[#d9f999]");
  panel.classList.add(color);
};
const changeTextColor = (textcolor) => {
  textneg.classList.remove("text-[#F4F4F5]", "text-black");
  textneg.classList.add(textcolor);
  texthoyr.classList.remove("text-[#F4F4F5]", "text-black");
  texthoyr.classList.add(textcolor);
  textgurav.classList.remove("text-[#F4F4F5]", "text-black");
  textgurav.classList.add(textcolor);
};

const startGame = () => {
  state = "waiting";
  changeColor("bg-[#4d0218]");
  changeTextColor("text-[#F4F4F5]");
  textneg.textContent = "...";
  texthoyr.textContent = "Wait for green";
  textgurav.textContent = "Not yet. Stay ready. ";
  const delay = Math.random() * 3000 + 2000;
  timer = setTimeout(() => {
    state = "go";
    changeColor("bg-[#d9f999]");
    changeTextColor("text-black");
    textneg.textContent = "!";
    texthoyr.textContent = "Click now!";
    textgurav.textContent = "Go, go, go";
    startTime = Date.now();
  }, delay);
};

const handleClick = () => {
  if (state === "ready" || state === "early" || state === "result") {
    startGame();
  } else if (state === "waiting") {
    clearTimeout(timer);
    state = "early";
    changeColor("bg-[#27272A]");
    changeTextColor("text-[#F4F4F5]");
    textneg.textContent = "↻";
    texthoyr.textContent = "Too soon!";
    textgurav.textContent = "Click to try again";
  } else if (state === "go") {
    const reaction = Date.now() - startTime;
    state = "result";
    changeColor("bg-[#27272A]");
    changeTextColor("text-[#F4F4F5]");
    textneg.textContent = "✓";
    texthoyr.textContent = reaction + "ms";
    textgurav.textContent = "Click to play again";
    last.textContent = reaction + "ms";
    if (bestTime === null || reaction < bestTime) {
      bestTime = reaction;
      best.textContent = reaction + "ms";
    }
  }
};
