const botao = document.getElementById ("botao")
const janela = document.getElementById ("janela")
const fechar = document.getElementById ("fechar")
const horario = document.getElementById("horário")
const menu = document.getElementById("menu")
const prodCarrinho = document.getElementById("produtos")
let cart =[]

var data = new Date()
var hora = data.getHours()

botao.addEventListener("click", function() {
janela.style.display="flex"
})
janela.addEventListener("click", function(event){
    if (event.target===janela||event.target=== fechar) {
janela.style.display="none"}
})

if ( hora < 17 || hora >23 ){
    horario.style.background='#ff0000'
}

menu.addEventListener("click", function(event){
    
    let parentButton=event.target.closest(".carrinho")//seleciona a classe e todos parentes dentro dela(button e icone)
    if(parentButton){
        const name= parentButton.getAttribute('data-name')
        const price= parseFloat(parentButton.getAttribute('data-price'))
        addToCard(name, price)

    }
 })

function addToCard(name, price){
    const existingItem = cart.find(item=>item.name === name)
    if(existingItem){
        existingItem.qtd +=1
    }else{
        cart.push({
        name,
        price,
        qtd: 1,
        })
    }
    updateCartModal()
}

function updateCartModal(){
    prodCarrinho.innerHTML=""
    let total = 0

    

}