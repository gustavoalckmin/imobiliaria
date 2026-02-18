document.addEventListener("DOMContentLoaded", function () {

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
            imagem: "../assets/img/praia1.jpg",
            descricao: "4 quartos • 3 banheiros • 2 vagas"
        },
        {
            id: "aptocentro",
            titulo: "Apartamento no Centro",
            preco: "R$ 450.000",
            imagem: "../assets/img/aptocentro1.jpg",
            descricao: "2 quartos • 1 banheiro • 1 vaga"
        },
        {
            id: "sitio",
            titulo: "Sítio Aconchegante",
            preco: "R$ 1.200.000",
            imagem: "../assets/img/sitio1.jpg",
            descricao: "5 quartos • Piscina • Área verde"
        },
         {
            id: "cobertura",
            titulo: "Cobertura de Luxo",
            preco: "R$ 1.500.000",
            imagem: "../assets/img/cobertura1.jpg",
            descricao: "3 suítes • Piscina • Vista privilegiada"
        },
         {
            id: "chacara",
            titulo: "Chácara com lago",
            preco: "R$ 980.000",
            imagem: "../assets/img/chacara1.jpeg",
            descricao: "4 quartos • Área de lazer e convivência • Piscina natural"
        },
        {
            id: "kitnet",
            titulo: "Kitnet Compacta",
            preco: "R$ 220.000",
            imagem: "../assets/img/kitnet1.jpg",
            descricao: "1 quarto • Ideal para estudantes"
        }
    ];

    const lista = document.getElementById("lista");

    // GERAR CARDS
    lista.innerHTML = "";

    imoveis.forEach(imovel => {
        lista.innerHTML += `
            <div class="card">
                <img src="${imovel.imagem}" alt="${imovel.titulo}">
                <div class="card-info">
                    <h3>${imovel.titulo}</h3>
                    <p>${imovel.descricao}</p>
                    <span class="preco">${imovel.preco}</span>
                    <a href="detalhe.html?id=${imovel.id}" class="botao-card">
                        Ver Detalhes
                    </a>
                </div>
            </div>
        `;
    });

    // FILTRO PELA URL
    const params = new URLSearchParams(window.location.search);
    const termo = params.get("busca");

    if (termo) {
        filtrarImoveis(termo.toLowerCase());
    }

    function filtrarImoveis(termo) {
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const titulo = card.querySelector("h3").textContent.toLowerCase();

            if (!titulo.includes(termo)) {
                card.style.display = "none";
            }
        });
    }

});

