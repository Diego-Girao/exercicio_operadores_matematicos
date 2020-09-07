function calcularIdadeMais20(nome,idade){
    let resultadoIdadeMais20 = 19 + 20;
    return nome + ' hoje você tem ' + idade + ' anos e daqui a 20 anos você terá ' + resultadoIdadeMais20;
}

function calcularMedia(media1,media2,media3){
    let soma = media1 + media2 + media3;
    let resultadoMedia = soma / 3
    return 'A média das notas ' + media1 + ', ' + media2 + ' e ' + media3 + ' é ' + resultadoMedia;
}

function calcularValorDoDesconto(valorProduto,desconto){
    let totalDeDesconto = (valorProduto * desconto) / 100;
    return totalDeDesconto; 
}

function calcularPrecoComDesconto(valorProduto,desconto){
    let valorPrecoComDesconto = (valorProduto * desconto) / 100;
    let totalPrecoComDesconto = valorProduto - valorPrecoComDesconto;
    return totalPrecoComDesconto;
}

module.exports = {
    calcularIdadeMais20,
    calcularMedia,
    calcularValorDoDesconto,
    calcularPrecoComDesconto
}