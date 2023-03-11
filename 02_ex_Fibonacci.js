//Altere o numero abaixo
const Numero = 13;
// Altere o valor acima

let FibonacciObj = [0, 1, 1];
let found = false;


// Função para gerar os numberos de fibo
function generateContentFibonacciNumber(num){

    for(let i = 2; i <= num; i++){
        FibonacciObj.push(FibonacciObj[i- 1] + FibonacciObj[i])
    }
}


// Função para verificar o numero
function verifyContentFibonacciNumber(num){

    generateContentFibonacciNumber(num)

    for(let currentFibo of FibonacciObj){

        if(+num === currentFibo){
            console.log(`✅ O numero ${num} foi encontrado na sequência de Fibonacci`)
            found = true
            break;
        }
    }

        if(found === false){
            console.log(`🚨 O numero ${num} NÂO foi encontrado na sequência de Fibonacci`)
        }

}


verifyContentFibonacciNumber(Numero)