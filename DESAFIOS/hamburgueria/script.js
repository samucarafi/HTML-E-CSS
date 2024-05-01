const botao = document.getElementById ("botao")
const janela = document.getElementById ("janela")
const fechar = document.getElementById ("fechar")
botao.addEventListener("click", function() {
janela.style.display="flex"
})
janela.addEventListener("click", function(event){
    if (event.target===janela||event.target=== fechar) {
janela.style.display="none"}
})