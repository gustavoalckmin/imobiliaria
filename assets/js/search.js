document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    if (!searchBtn || !searchInput) return;

    searchBtn.addEventListener("click", () => {

        // Se ainda não estiver aberto → abre
        if (!searchInput.classList.contains("active")) {
            searchInput.classList.add("active");
            searchInput.focus();
            return;
        }

        // Se já estiver aberto
        const termo = searchInput.value.trim().toLowerCase();

        // Se tiver texto → pesquisar
        if (termo !== "") {
            localStorage.setItem("busca", termo);
            window.location.href = "/pages/imoveis.html";
        } else {
            // Se estiver vazio → fechar
            searchInput.classList.remove("active");
        }

    });

});

