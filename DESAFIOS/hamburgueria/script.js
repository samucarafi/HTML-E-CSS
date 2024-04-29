const botao = document.getElementById ("botao")
const janela = document.getElementById ("janela")
botao.addEventListener("click", function() {
janela.style.display="flex"
})
janela.addEventListener("click", function(event){
    if (event.target===janela) {
        
    
janela.style.display="none"}
})