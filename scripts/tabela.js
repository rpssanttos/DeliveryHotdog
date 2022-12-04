const urlApi = "http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/hotdog/clientes/"

fetch(urlApi).then(function (resposta) {
    console.log('Sucesso!', resposta)
    return resposta.json()
})
    .then(function (clientes) {
        console.log(clientes)

        let tabela = document.getElementById('tabela-clientes')

        clientes.forEach(function (cliente, indice) {
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

            var imgEditar = document.createElement('img')
            imgEditar.src = "./imagens/editar.png"
            imgEditar.style.width = '25px'
            acoes.appendChild(imgEditar)

            img.addEventListener('click', () => apagar(cliente.id))
            imgEditar.addEventListener('click', () => editar(cliente.id))
        })
    })
    .catch(function (erro) {
        console.warn('Algo deu errado', erro)
    });

function editar(id) {
    window.location.href = './cadastro.html?id=' + id
}

function apagar(id) {
    fetch(urlApi + id,{method: 'Delete'}) 
    .then(function(resposta){
        console.log('Apagado com sucesso', resposta)
        document.location.reload()
    })
}
