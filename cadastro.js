document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("cadastroCliente")
    const resultado = document.getElementById("resultado")

    formulario.addEventListener("submit", function (event) {
        event.preventDefault()

        const nome = document.getElementById("nome").value
        const cpf = document.getElementById("cpf").value
        const email = document.getElementById("email").value


        const planos = document.getElementById("planos").value
        const pagamentos = document.getElementById("pagamentos").value


        resultado.innerHTML = `
            <h3> Dados Recebidos</h3>
            <p> <strong> Nome: </strong> ${nome} </p>
            <p> <strong> CPF: </strong> ${cpf} </p>
            <p> <strong> E-mail: </strong> ${email} </p>
            <p> <strong> plano: </strong> ${planos} </p>
            <p> <strong> pagamneto: </strong> ${pagamentos}</p>
            
        `
    })

    formulario.addEventListener("reset", function (event) {
        resultado.innerHTML = ``
    })
})//aqui estamos vendo se todo o conteudo da pagina foi carregado, preventfalut pegar os valores padroes, em


