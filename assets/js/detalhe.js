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
    },

    casapraia: {
        titulo: "Casa na Praia",
        preco: "R$ 980.000",
        quartos: "4",
        banheiros: "3",
        vagas: "2",
        descricao: "Casa incrível na praia com piscina e vista para o mar.",
        imagens: [
            "../assets/img/praia1.jpg",
            "../assets/img/praia2.jpg",
            "../assets/img/praia3.jpg",
            "../assets/img/praia4.jpg",
            "../assets/img/praia5.jpg"
        ]
    },

    aptocentro: {
        titulo: "Apartamento no Centro",
        preco: "R$ 450.000",
        quartos: "2",
        banheiros: "1",
        vagas: "1",
        descricao: "Apartamento localizado no centro da cidade, próximo a tudo.",
        imagens: [
            "../assets/img/aptocentro1.jpg",
            "../assets/img/aptocentro2.jpg",
            "../assets/img/aptocentro3.jpg"
        ]
    },

    sitio: {
        titulo: "Sítio Aconchegante",
        preco: "R$ 1.200.000",
        quartos: "5",
        banheiros: "3",
        vagas: "4",
        descricao: "Sítio com ampla área verde, piscina e espaço gourmet.",
        imagens: [
            "../assets/img/sitio1.jpg",
            "../assets/img/sitio2.jpg",
            "../assets/img/sitio3.jpg",
            "../assets/img/sitio4.jpg",
            "../assets/img/sitio5.jpg",
            "../assets/img/sitio6.jpg"
        ]
    },

    cobertura: {
        titulo: "Cobertura de Luxo",
        preco: "R$ 1.500.000",
        quartos: "3",
        banheiros: "3",
        vagas: "2",
        descricao: "Cobertura com vista panorâmica e área gourmet exclusiva.",
        imagens: [
            "../assets/img/cobertura1.jpg",
            "../assets/img/cobertura2.jpg",
            "../assets/img/cobertura3.jpg"
        ]
    },

    chacara: {
        titulo: "Chácara com Lago",
        preco: "R$ 850.000",
        quartos: "4",
        banheiros: "2",
        vagas: "3",
        descricao: "Chácara com lago natural e grande área verde.",
        imagens: [
            "../assets/img/chacara1.jpeg",
            "../assets/img/chacara2.jpg",
            "../assets/img/chacara3.jpg",
            "../assets/img/chacara4.jpg",
            "../assets/img/chacara5.jpg",
            "../assets/img/chacara6.jpg"
        ]
    },

    kitnet: {
        titulo: "Kitnet Compacta",
        preco: "R$ 220.000",
        quartos: "1",
        banheiros: "1",
        vagas: "0",
        descricao: "Ideal para estudantes ou investimento.",
        imagens: [
            "../assets/img/kitnet1.jpg",
            "../assets/img/kitnet2.jpg"
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

