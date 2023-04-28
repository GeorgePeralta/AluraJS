function playKeySound(audioSelector) {
  const element = document.querySelector(audioSelector);
  element.currentTime = 0;

  if (element && element.localName === "audio") {
    element.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido!");
  }
}

const keyList = document.querySelectorAll(".tecla");

for (const keyboardKey of keyList) {
  const instrument = keyboardKey.classList[1];
  const idAudio = `#som_${instrument}`;

  keyboardKey.onclick = function () {
    playKeySound(idAudio);
  };

  keyboardKey.addEventListener("keydown", handleKeyPress);
  keyboardKey.addEventListener("keyup", handleKeyRelease);
}

function handleKeyPress(event) {
  if (event.code === "Enter" || event.code === "Space") {
    keyboardKey.classList.add("ativa");
  }
}

function handleKeyRelease() {
  keyboardKey.classList.remove("ativa");
}
