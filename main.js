function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let count = 0;

while (count < listaDeTeclas.length) {
  const tecla = listaDeTeclas[count];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  listaDeTeclas[count].onclick = function () {
    tocaSom(idAudio);
  };
  count = count + 1;
  console.log(count);
}
