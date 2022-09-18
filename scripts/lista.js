let clientes = JSON.parse(localStorage.getItem("clientes"))
let lista = document.getElementById('lista-clientes')
for(let cliente of clientes){
    let item = document.createElement('li')
    let texto = cliente.nome + '-' + cliente.email
    let textoitem = document.createTextNode (texto)
    item.appendChild(textoitem)
    lista.appendChild(item) 
    


}