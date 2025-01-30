document.addEventListener("DOMContentLoaded", function() {
    const botaoModoEscuro = document.getElementById("modoEscuro");
    const botaoAltoContraste = document.getElementById("altoContraste");
    const botaoAumentarFonte = document.getElementById("aumentarFonte");
    const botaoDiminuirFonte = document.getElementById("diminuirFonte");
    const body = document.body;

    botaoModoEscuro.addEventListener("click", function() {
        body.classList.toggle("modo-escuro");
    });

    botaoAltoContraste.addEventListener("click", function() {
        body.classList.toggle("alto-contraste");
    });

    botaoAumentarFonte.addEventListener("click", function() {
        body.classList.remove("fonte-menor");
        body.classList.add("fonte-maior");
    });

    botaoDiminuirFonte.addEventListener("click", function() {
        body.classList.remove("fonte-maior");
        body.classList.add("fonte-menor");
    });
});
