function calcularPerimetroRetangulo (l1,l2,l3,l4){
    let perimetro = l1 + l2 + l3 + l4;
    return perimetro; 
}

function calcularPerimetroQuadrado (l){
    let perimetroDoQuadrado = l * 4;
    return perimetroDoQuadrado;
}

function calcularAreaQuadrado(l){
    let areaDoQuadrado = l * l;
    return areaDoQuadrado;
}



module.exports = {
    calcularPerimetroRetangulo,
    calcularPerimetroQuadrado,
    calcularAreaQuadrado
}