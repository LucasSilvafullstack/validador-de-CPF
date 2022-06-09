let $conferirCPF = document.querySelector('#conferirNumero')
let $check = document.querySelector('.check')
let resposta = document.querySelector('.resposta')


$conferirCPF.addEventListener('keypress', function (evt) {
    let val = evt.target.value
    if (evt.key !== 'backspace' && val.length == 11 && evt.keyCode !== 13) {
        evt.preventDefault()
    }
});

// função copiada e modificada
document.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        conferirDados()

    }
})
$check.addEventListener('click', conferirDados)

function conferirDados() {
    validador_1 = validador_2 = false
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


    if (+conferirCPF_1[9] === check) {
        validador_1 = true

        conferirDados_2()
        $conferirCPF.value = ''
    } else {
        conferirDados_2()
        $conferirCPF.value = ''
    }

}

function conferirDados_2() {

    let conferirCPF_2 = $conferirCPF.value.split('')
    let soma = 0
    let multi = 0
    let cont = 0

    for (let i = 11; i > 1; i--) {
        multi = conferirCPF_2[cont] * i
        soma += multi
        console.log(soma, multi, cont, i, conferirCPF_2[cont])
        cont++

    }
    let check_2 = (soma * 10) % 11
    if (+conferirCPF_2[10] === check_2) {
        validador_2 = true
        console.log(check_2)
    }
    if (validador_1 && validador_2 === true) {
        resposta.innerHTML = '<p>CPF válido!</p>'
    }
    else {
        resposta.innerHTML = '<p>CPF inválido!</p>'
    }
}



