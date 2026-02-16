// BASE DE DADOS DOS IMÓVEIS
const imoveis = {
    casa: {
        titulo: "Casa Moderna",
        preco: "R$ 750.000",
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        descricao: "Linda casa moderna com acabamento de alto padrão, área gourmet e piscina.",
        imagens: [
            "../assets/img/casa1.jpg",
            "../assets/img/casa2.jpg",
            "../assets/img/casa3.jpg"
        ]
    },

    apartamento: {
        titulo: "Apartamento de Luxo",
        preco: "R$ 520.000",
        quartos: 2,
        banheiros: 2,
        vagas: 1,
        descricao: "Apartamento sofisticado em bairro nobre.",
        imagens: [
            "../assets/img/apto1.jpg",
            "../assets/img/apto3.jpg",
            "../assets/img/apto2.png",
            "../assets/img/apto4.jpg"
            
            
        ]
    },

    terreno: {
        titulo: "Terreno Amplo",
        preco: "R$ 300.000",
        quartos: "-",
        banheiros: "-",
        vagas: "-",
        descricao: "Terreno de 500m² em localização privilegiada.",
        imagens: [
            "../assets/img/terreno1.jpg"
        ]
    }
};

// PEGA O ID DA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imovel = imoveis[id];

// PREENCHE A PÁGINA
document.getElementById("titulo").textContent = imovel.titulo;
document.getElementById("preco").textContent = imovel.preco;
document.getElementById("quartos").textContent = imovel.quartos;
document.getElementById("banheiros").textContent = imovel.banheiros;
document.getElementById("vagas").textContent = imovel.vagas;
document.getElementById("descricao").textContent = imovel.descricao;

// CARROSSEL
let index = 0;
const imagem = document.getElementById("imagem-carrossel");
imagem.src = imovel.imagens[0];

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % imovel.imagens.length;
    imagem.src = imovel.imagens[index];
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + imovel.imagens.length) % imovel.imagens.length;
    imagem.src = imovel.imagens[index];
});

