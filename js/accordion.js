const bloques = document.querySelectorAll('.bloque');
const contenidos = document.querySelectorAll('.contenido');
const iconQuestion = document.querySelectorAll('.icon_question');


bloques.forEach((bloque, i) => {
    bloques[i].addEventListener('click', () => {
        contenidos.forEach((contenido, i) => {
            contenidos[i].classList.remove("activo");
            iconQuestion[i].setAttribute("src", "assets/icon-plus.svg")
        });
        iconQuestion[i].setAttribute("src", "assets/icon-minus.svg")
        contenidos[i].classList.add("activo");

    })
});