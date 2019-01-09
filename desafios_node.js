const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
        .filter(chines)
        .filter(femea)
        .reduce(menorSalario))
})

const chines = funcionario => funcionario.pais == 'China'
const femea = funcionario => funcionario.genero == 'F'
const menorSalario = (funcionario1, funcionario2) => {
    return funcionario1.salario < funcionario2.salario ? funcionario1 : funcionario2
}
