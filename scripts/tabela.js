let clientes = JSON.parse(localStorage.getItem("clientes"))
let tabela = document.getElementById('tabela-clientes')

clientes.forEach(function (cliente , indice){
   let linha = tabela.insertRow()
   let nome = linha.insertCell(0)
   nome.innerHTML = cliente.nome
   let email = linha.insertCell(1)
   email.innerHTML = cliente.email

   var img = document.createElement('img')
   img.src = "./imagens/lixeira.jpg";
   img.style.width = '15px'
   let acoes = linha.insertCell(2)
   acoes.appendChild(img)
   img.addEventListener('click',()=>apagar(indice))
})

function apagar(indice){
    clientes.splice(indice,1)
    localStorage.setItem("clientes", JSON.stringify(clientes))
    document.location.reload()
}
