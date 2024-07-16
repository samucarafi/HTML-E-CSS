const botao = document.getElementById ("botao")
const janela = document.getElementById ("janela")
const fechar = document.getElementById ("fechar")
const horario = document.getElementById("horário")
const menu = document.getElementById("menu")
let buttonCarrinho =[ ...document.getElementsByClassName("carrinho")]
let xCarrinho=[...document.getElementsByClassName("xcarrinho")]
let setas=[...document.getElementsByClassName("setas")]
const setaUp=[...document.getElementsByClassName("up")]
const setaDown=[...document.getElementsByClassName("down")]
const prodCarrinho = document.getElementById("produtos")
let cart =[]
let quant=[]

var data = new Date()
var hora = data.getHours()

botao.addEventListener("click", ()=> {
janela.style.display="flex"
})
janela.addEventListener("click", (event)=>{
    if (event.target===janela||event.target=== fechar) {
janela.style.display="none"}
})

if ( hora < 17 || hora >23 ){
    horario.style.background='#ff0000'
}
