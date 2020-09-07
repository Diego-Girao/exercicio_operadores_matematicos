describe('TESTES MÓDULO GEOMETRIA',()=>{

    it('Quando eu executar a função calcularPerimetroRetangulo e passo os parametros l1,l2,l3 e l4 o resultado será o Perimetro',()=>{

        const moduloGeometria = require ('./geometria');
        expect(moduloGeometria.calcularPerimetroRetangulo(2,4,6,8)).toBe(20);
    })
    
        it('Quando eu executar a função calcularPerimetroQuadrado e passo o parametro l o resultado será o Perimetro do Quadrado',()=>{

        const moduloGeometria = require ('./geometria');
        expect(moduloGeometria.calcularPerimetroQuadrado(8)).toBe(32);
    
    })

    it('Quando eu executar a função calcularAreaQuadrado e passo o parametro l o resultado será a área do quadrado',()=>{

        const moduloGeometria = require ('./geometria');
        expect(moduloGeometria.calcularAreaQuadrado(10)).toBe(100);
    })

})