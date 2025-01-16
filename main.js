function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (count = 0; count < listaDeTeclas.length; count++) {
  const tecla = listaDeTeclas[count];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  listaDeTeclas[count].onclick = function () {
    tocaSom(idAudio);
  };
}
