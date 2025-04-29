/*
1 - Imprimindo Números Pares
Descrição: Crie uma função que receba um número inteiro N e imprima todos os números pares de 0 até N. Entrada: imprimePares(10) Saída: 0 2 4 6 8 10
*/

function imprimePares(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i); // imprime os números pares
        }
    }
}
//Função para imprimir os números pares
imprimePares(10);

/*
2 - Soma dos Números de um Array
Descrição: Crie uma função que receba um array de números e retorne a soma de todos os elementos.
Entrada: somaArray([1, 2, 3, 4, 5]) Saída: 15
*/

function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}
//Função para somar os números de um array
console.log(somaArray([1, 2, 3, 4, 5]));

/*
3 - Identificando os Números Primos
Descrição: Crie uma função que receba um número inteiro e retorne true se for primo e false caso contrário. Entrada: ePrimo(7), ePrimo(10) Saída: true, false
*/

function ePrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
//Função para identificar números primos
console.log(ePrimo(7));
console.log(ePrimo(10));

/*
4 - FizzBuzz
Descrição: Crie uma função que imprima números de 1 a 50, substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz". Entrada: fizzBuzz() Saída:
*/

function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
//Função para imprimir o FizzBuzz
fizzBuzz();

/*
6 - Contador de Vogais
Descrição: Crie uma função que receba uma string e retorne a quantidade de vogais nela.
Entrada: contaVogais("Node.js é incrível") Saída: 7
*/

function contaVogais(string) {
    let vogais = "aeiouáéíóúàèìòùãõâêîôûAEIOUÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛ";
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            contador++;
        }
    }
    return contador;
}
//Função para contar as vogais de uma string
console.log(contaVogais("Node.js é incrível"));

/*
7 - Tabuada de um Número
Descrição: Crie uma função que receba um número e imprima a sua tabuada de 1 a 10. Entrada: tabuada(5) Saída:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

*/
function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
}
//Função para imprimir a tabuada de um número
tabuada(5);

/*
7 - Inverter String
Descrição: Crie uma função que receba uma string e retorne a mesma string invertida. Entrada: inverteString("hello") Saída: "olleh"
*/

function inverteString(string) {
    return string.split("").reverse().join("");
}
//Função para inverter uma string
console.log(inverteString("hello"));

/*
8 - Encontre o Maior Número
Descrição: Crie uma função que receba um array de números e retorne o maior número presente nele. Entrada: maiorNumero([3, 10, 6, 2]) Saída: 10
*/

function maiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
//Função para encontrar o maior número de um array
console.log(maiorNumero([3, 10, 6, 2]));

/*
9 - Palíndromo
Descrição: Crie uma função que receba uma string e retorne true se ela for um palíndromo e false caso contrário. Entrada: ePalindromo("Ame a ema"), ePalindromo("Olá mundo") Saída: true, false
*/

function ePalindromo(string) {
    string = string.toLowerCase();

    let stringLimpa = "";
    for (let char of string) {
        if (char >= 'a' && char <= 'z') {
            stringLimpa += char;
        }
    }

    return stringLimpa === stringLimpa.split("").reverse().join("");
}

//Função para verificar se uma string é um palíndromo
console.log(ePalindromo("Ame a ema"));
console.log(ePalindromo("Olá mundo"));

/*
10 - Média de Notas
Descrição: Crie uma função que receba um array de notas e retorne se a média é "Aprovado" (≥7) ou "Reprovado" (<7). Entrada: calculaMedia([8, 7, 6]), calculaMedia([5, 6, 4]) Saída: "Aprovado - Média: 7.0", "Reprovado - Média: 5.0"
*/

function calculaMedia(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    let media = soma / array.length;
    if (media >= 7) {
        return "Aprovado - Média: " + media.toFixed(1);
    } else {
        return "Reprovado - Média: " + media.toFixed(1);
    }
}
//Função para calcular a média de notas
console.log(calculaMedia([8, 7, 6]));
console.log(calculaMedia([5, 6, 4]));