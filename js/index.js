const botaoalterartema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoalterartema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        ImagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");
    } else {
        ImagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
    }
})