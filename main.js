function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (count = 0; count < listaDeTeclas.length; count++) {
  const tecla = listaDeTeclas[count];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code == "Space" || evento.code == "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
