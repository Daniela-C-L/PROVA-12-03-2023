let botaoAdicionar = document.querySelector('#adicionar-venda')
//EVENTOS DO BOTÃO
botaoAdicionar.addEventListener('click', function (evento){
    evento.preventDefault()

    let form = document.querySelector('#adicionar')

    let vendas = valoresDoForm(form)
    
    // console.log(vendas)

   
        adicionaVendaNaTabela(vendas)

//     if(erros.length > 0){
       

//         return  adicionaVendaNaTabela
        
//     }
    
    
//  let MensagemDeErro = document.querySelector('#mensagens-erro')
//     MensagemDeErro.innerHTML = ''
   
    

})

function validar(){
    let nome = adicionar.nome;

    if(nome.value == ""){
        
       alert("Nome não informado")
  
    }
}

//VALIDAÇÃO DE CAMPOS VAZIOS
// function validaCadastro(vendas){
//     let erros = []

//     if(vendas.nome.length == 0 && vendas.produto.length == 0 && vendas.data.length == 0 && vendas.valor.length == 0 && vendas.status.length == 0){
//         erros.push('Nenhum campo pode estar vazio, por favor complete todos os espaços corretamente')
//     }    
//     return erros
// }



//ADICIONANDO VALORES A NOVAS LINHAS NA TABELA

function adicionaVendaNaTabela(vendas){
    let vendasTr = montarTr(vendas)
    let tabela = document.querySelector('#tabela-vendas')

    tabela.appendChild(vendasTr)
}

function montarTr(vendas){
    let vendasTr = document.createElement('tr')
    vendasTr.classList.add('vendas')

    vendasTr.appendChild(montarTd(vendas.nome,'info-nome'))
    vendasTr.appendChild(montarTd(vendas.produto,'info-produto'))
    vendasTr.appendChild(montarTd(vendas.data,'info-data'))
    vendasTr.appendChild(montarTd(vendas.valor,'info-valor'))
    vendasTr.appendChild(montarTd(vendas.status,'info-status'))

    return vendasTr
}
//---------------------------------------------------------------

function montarTd(dado, classe){
    //criando um elemento td
    let td = document.createElement('td')
    td.textContent = dado
    //classList define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

//PEGANDO VALORES DO FORMULARIO

function valoresDoForm(form) {
    let vendas = {
        nome: form.nome.value,
        produto: form.produto.value,
        data: form.data.value,
        valor: form.valor.value,
        status: form.status.value,
        
    }
    return vendas
}