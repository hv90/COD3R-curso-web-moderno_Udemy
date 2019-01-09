//exercicio 1 - forEach
//implementar aqui a função forEach2

//tentativa1
// function forEach2(aprovados){
//     for(let aprovado in aprovados){
//         console.log(aprovado)
//     }
// }

//tentativa2
Array.prototype.forEach2 = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i],i,this)
    }
}


//-----------------------------------

const aprovados = ['nome1', 'nome2', 'nome3', 'nome4']

aprovados.forEach2(function(nome, indice){
    //solucao
    //console.log(`${indice + 1}) ${nome}`)
})
//--------------------------------------------------------------
//exercicio 2 - map

const carrinhos = [
    '{"nome": "prod1", "preco": 1.00}',
    '{"nome": "prod2", "preco": 1.20}',
    '{"nome": "prod3", "preco": 1.30}',
    '{"nome": "prod4", "preco": 1.40}',
]

//retornar um array só com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

//solucao
//console.log(carrinhos.map(paraObjeto).map(apenasPreco))
//-----------------------------------------------------------------

//exercicio 3 - map
//implementar o map2 - versao personalizada de map

//tentativa 1
// Array.prototype.map2 = function(callback){
//     for(let i = 0; i<this.length; i++){
//         callback(this[i], i)
//     }
// }

Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}
//solucao
//console.log(carrinhos.map2(paraObjeto).map2(apenasPreco))

//filter
//console.log(carrinhos.map2(paraObjeto).filter(p => {return p.preco === 1}))

//exercicio 4 - filter
//implementar filter2 - versao personalizada de filter
Array.prototype.filter2 = function (callback){
    const newArray = []
    for(let i = 0; i<this.length;i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
//solucao
//console.log(carrinhos.map2(paraObjeto).filter2(p => {return p.preco === 1}))

//exercicio 5 - reduce

const gt1_1 = (resultado, preco) => resultado > 0 &&  preco > 0
const lt1_2 = (resultado, preco) => resultado < 1.2 || preco < 1.2

//resposta
// console.log(carrinhos.map(paraObjeto).map(a => a.preco).reduce(gt1_1))
// console.log(carrinhos.map(paraObjeto).map(a => a.preco).reduce(lt1_2))

//exercicio 6 - reduce
//implementar reduce 2 - a versao personalizada de reduce

Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i<this.length; i++){
        console.log(acumulador)
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))