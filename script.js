let $conferirCPF = document.querySelector('#conferirNumero')
let $check = document.querySelector('.check')
let resposta = document.querySelector('.resposta')

let click = false
// função copiada e modificada
document.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        if(click === false){
            conferirDados()
            click = true
        }
    }
})
$check.addEventListener('click', conferirDados)

function conferirDados() {

    let conferirCPF_1 = $conferirCPF.value.split('')
    let soma = 0
    let multi = 0
    let cont = 0

    for (let i = 10; i > 1; i--) {
        multi = conferirCPF_1[cont] * i
        soma += multi

        console.log(soma, multi, cont, i, conferirCPF_1[cont])
        cont++
    }

    let check = (soma * 10) % 11
    console.log(check)

    $conferirCPF.value = ''
    if (+conferirCPF_1[9] === check) {

        $check.removeEventListener('click', conferirDados)

        resposta.innerHTML = '<p>Primeira etapa concluida, agora digite seu cpf mais uma vez</p>'

        liberar = true
    }

}
// let contar = 0
// document.addEventListener("keydown", event => {
//     if (event.keyCode === 13) {
//         if(liberar === true && contar != 0){
//             conferirDados_2()
//         }
//         contar++
//     }
// })
// $check.addEventListener('click', () => {
//     if(liberar === true && contar != 0){
//         conferirDados_2()
//     }
// contar++
// })

// function conferirDados_2() {

//     let conferirCPF_2 = $conferirCPF.value.split('')
//     let soma = 0
//     let multi = 0
//     let cont = 0

//     for (let i = 11; i > 1; i++) {
//         multi = conferirCPF_2[cont] * i
//         soma += multi
//         cont++

//     }
//     let check_2 = (soma * 10) % 11
//     console.log(check_2)
// }

