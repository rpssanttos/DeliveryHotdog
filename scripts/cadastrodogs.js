var clientes = []

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
clientes.push(cliente)
console.log(clientes)
}