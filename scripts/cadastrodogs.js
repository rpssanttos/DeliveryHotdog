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

    if(nome === undefined || nome === null || nome ===''){
        document.getElementById('erro-nome').classList.remove('fade')
        setTimeout(() =>{
            document.getElementById('erro-nome').classList.add('fade') 
        },1000)
        return
    } 
    
    if(email === undefined || email === null || email ===''){
        document.getElementById('erro-email').classList.remove('fade')
        setTimeout(() =>{
            document.getElementById('erro-email').classList.add('fade') 
        },1000)
        return
    }


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

    document.getElementById('sucesso').classList.remove('fade')
    setTimeout(() =>{
        document.getElementById('sucesso').classList.add('fade') 
    },1000)
    limpaFormulario()

}

function limpaFormulario() {
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('telefone').value = ''
    document.getElementById('cep').value = ''
    document.getElementById('numero').value = ''
    document.getElementById('dog-tradicional').checked = false
    document.getElementById('dog-duplo').checked = false
    document.getElementById('dog-linguica').checked = false


}