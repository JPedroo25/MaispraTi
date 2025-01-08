const prompt = require('prompt-sync')()

    let num1 = Number(prompt("Insira o primeiro valor: "))
    let num2 = Number(prompt('Insira o segundo valor: '))
    
    let operation = prompt('Informe a operação desejada (+, -, /, *): ')
    
    let result = 0

if(operation === '+') {
    result = num1 + num2
    console.log(result)

    let add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))
    while((add === 'Y') || (add === 'y')) {

        let addedNumber = Number(prompt('Insira o valor que queira adicionar: '))
        let addedOperation = String(prompt('Informe a operação desejada (+, -, /, *): '))

        if(addedOperation === '+') {
            result += addedNumber
            console.log(result)
        } else if(addedOperation === '-') {
            result -= addedNumber
            console.log(result)
        } else if(addedOperation === '/') {
            if(addedNumber !== 0){
                result /= addedNumber
                console.log(result)
            } else {
                console.log("Cálculo inválido.")
            }
        } else if(addedOperation === '*') {
            result *= addedNumber
            console.log(result)
        } else {
            console.log("Calculo inválido.")
        }

        add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))

        if((add === 'N') || (add === 'n')) {
            break
        }
    }

}else if(operation === '-'){
    result = num1 - num2
    console.log(result)

    let add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))
    while((add === 'Y') || (add === 'y')) {

        let addedNumber = Number(prompt('Insira o valor que queira adicionar: '))
        let addedOperation = String(prompt('Informe a operação desejada (+, -, /, *): '))

        if(addedOperation === '+') {
            result += addedNumber
            console.log(result)
        } else if(addedOperation === '-') {
            result -= addedNumber
            console.log(result)
        } else if(addedOperation === '/') {
            if(addedNumber !== 0){
                result /= addedNumber
                console.log(result)
            } else {
                console.log("Cálculo inválido.")
            }
        } else if(addedOperation === '*') {
            result *= addedNumber
            console.log(result)
        } else {
            console.log("Calculo inválido.")
        }

        add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))

        if((add === 'N') || (add === 'n')) {
            break
        }
    }

}else if(operation === '*'){
    result = num1 * num2
    console.log(result)

    let add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))
    while((add === 'Y') || (add === 'y')) {

        let addedNumber = Number(prompt('Insira o valor que queira adicionar: '))
        let addedOperation = String(prompt('Informe a operação desejada (+, -, /, *): '))

        if(addedOperation === '+') {
            result += addedNumber
            console.log(result)
        } else if(addedOperation === '-') {
            result -= addedNumber
            console.log(result)
        } else if(addedOperation === '/') {
            if(addedNumber !== 0){
                result /= addedNumber
                console.log(result)
            } else {
                console.log("Cálculo inválido.")
            }
        } else if(addedOperation === '*') {
            result *= addedNumber
            console.log(result)
        } else {
            console.log("Calculo inválido.")
        }

        add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))

        if((add === 'N') || (add === 'n')) {
            break
        }
    }

}else if(operation === '/'){
    if(num1 && num2 !== 0){
        result = num1 / num2
        console.log(result)

        let add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))
    while((add === 'Y') || (add === 'y')) {

        let addedNumber = Number(prompt('Insira o valor que queira adicionar: '))
        let addedOperation = String(prompt('Informe a operação desejada (+, -, /, *): '))

        if(addedOperation === '+') {
            result += addedNumber
            console.log(result)
        } else if(addedOperation === '-') {
            result -= addedNumber
            console.log(result)
        } else if(addedOperation === '/') {
            if(addedNumber !== 0){
                result /= addedNumber
                console.log(result)
            } else {
                console.log("Cálculo inválido.")
            }
            
        } else if(addedOperation === '*') {
            result *= addedNumber
            console.log(result)
        } else {
            console.log("Calculo inválido.")
        }

        add = String(prompt("Você quer adicionar mais um número? [Y/N]: "))

        if((add === 'N') || (add === 'n')) {
            break
        }
    }

    } else {
        console.log("Cálculo inválido.")
    }

}else {
    console.log('Calculo inválido')
}