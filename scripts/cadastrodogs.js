let clientes = JSON.parse(localStorage.getItem("clientes"))
if (clientes == null){
    clientes = []
}

const indice = location.search.split('=')[1]

const formEdicao = indice !== undefined

if (formEdicao ){
    preencheFormulario(indice)
}
function preencheFormulario(indice){
    console.log('Preenchendo formulario do cliente:'+ indice)
    let cliente = clientes[indice]
    console.log('Cliente:' + cliente.nome)
    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('telefone').value = cliente.telefone
    document.getElementById('cep').value = cliente.cep
    document.getElementById('numero').value = cliente.numero
    document.getElementById('dog-tradicional').checked = cliente.dog_tradicional
    document.getElementById('dog-duplo').checked = cliente.dog_duplo
    document.getElementById('dog-linguica').checked = cliente.dog_linguica
    
}


function salvarCliente() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cep = document.getElementById('cep').value
    let numero = document.getElementById('numero').value
    let dog_tradicional = document.getElementById('dog-tradicional').checked
    let dog_duplo = document.getElementById('dog-duplo').checked
    let dog_linguica = document.getElementById('dog-linguica').checked

    let cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        cep: cep,
        numero: numero,
        dog_tradicional: dog_tradicional,
        dog_duplo: dog_duplo,
        dog_linguica: dog_linguica,
    }

        if(formEdicao){
            clientes[indice] = cliente

        } 
        else{
            clientes.push(cliente)
            
        }

    localStorage.setItem("clientes", JSON.stringify(clientes))
}