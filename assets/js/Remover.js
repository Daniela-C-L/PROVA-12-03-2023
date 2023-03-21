let vendas = document.querySelectorAll('.vendas')

let tabela = document.querySelector('#tabela-vendas')

tabela.addEventListener('dblclick', function (event) {
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
})