const imagens = [
    "../assets/img/casa1.jpg",
    "../assets/img/casa2.jpg",
    "../assets/img/casa3.jpg"
];

let index = 0;

const imagem = document.getElementById("imagem-carrossel");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

function trocarImagem(novoIndex) {
    imagem.classList.add("fade");

    setTimeout(() => {
        imagem.src = imagens[novoIndex];
        imagem.classList.remove("fade");
    }, 300);
}

btnNext.addEventListener("click", () => {
    index++;
    if (index >= imagens.length) {
        index = 0;
    }
    trocarImagem(index);
});

btnPrev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = imagens.length - 1;
    }
    trocarImagem(index);
});
