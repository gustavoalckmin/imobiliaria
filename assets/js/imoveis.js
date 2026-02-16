const imoveis = [
    {
        id: "casa",
        titulo: "Casa Moderna",
        preco: "R$ 750.000",
        imagem: "../assets/img/casa1.jpg",
        descricao: "3 quartos • 2 banheiros • 2 vagas"
    },
    {
        id: "apartamento",
        titulo: "Apartamento de Luxo",
        preco: "R$ 520.000",
        imagem: "../assets/img/apto1.jpg",
        descricao: "2 quartos • 1 suíte • 1 vaga"
    },
    {
        id: "terreno",
        titulo: "Terreno Amplo",
        preco: "R$ 300.000",
        imagem: "../assets/img/terreno1.jpg",
        descricao: "500m² • Bairro nobre"
    },
    {
        id: "casapraia",
        titulo: "Casa na Praia",
        preco: "R$ 980.000",
        imagem: "../assets/img/casa2.jpg",
        descricao: "4 quartos • 3 banheiros • 2 vagas"
    },
    {
        id: "aptocentro",
        titulo: "Apartamento Centro",
        preco: "R$ 450.000",
        imagem: "../assets/img/apto2.jpg",
        descricao: "2 quartos • 1 banheiro • 1 vaga"
    },
    {
        id: "sitio",
        titulo: "Sítio Aconchegante",
        preco: "R$ 1.200.000",
        imagem: "../assets/img/sitio1.jpg",
        descricao: "5 quartos • Piscina • Área verde"
    }
];


const grid = document.querySelector(".grid-imoveis");

imoveis.forEach(imovel => {
    grid.innerHTML += `
        <div class="card">
            <img src="${imovel.imagem}" alt="${imovel.titulo}">
            <div class="card-info">
                <h3>${imovel.titulo}</h3>
                <p>${imovel.info}</p>
                <span class="preco">${imovel.preco}</span>
                <a href="detalhe.html?id=${imovel.id}" class="botao-card">
                    Ver Detalhes
                </a>
            </div>
        </div>
    `;
});

