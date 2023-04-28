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

for (let counter = 0; counter < keyList.length; counter++) {
  const keyboardKey = keyList[counter];
  const instrument = keyboardKey.classList[1];
  const idAudio = `#som_${instrument}`;

  keyboardKey.onclick = function () {
    playKeySound(idAudio);
  };

  keyboardKey.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      keyboardKey.classList.add("ativa");
    }
  };

  keyboardKey.onkeyup = function () {
    keyboardKey.classList.remove("ativa");
  };
}
