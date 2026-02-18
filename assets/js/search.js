const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

// Função para executar a pesquisa
function executarPesquisa() {
    const termo = searchInput.value.trim();
    if (termo !== "") {
        let caminho = "";

        // Detecta se estamos dentro da pasta 'pages'
        if (window.location.pathname.includes("/pages/")) {
            caminho = "imoveis.html";
        } else {
            caminho = "pages/imoveis.html";
        }

        window.location.href = caminho + "?busca=" + encodeURIComponent(termo);
    }
}

// Clique no botão
searchBtn.addEventListener("click", function () {
    searchInput.classList.toggle("active");

    if (searchInput.classList.contains("active")) {
        searchInput.focus();
    } else {
        executarPesquisa();
    }
});

// Pressionar Enter
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        executarPesquisa();
    }
});
