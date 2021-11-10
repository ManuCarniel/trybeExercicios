//Exercício 01
let a = 5;
let b = 25;

let adicao = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

console.log('\nExercício 01\n')
console.log('Adição: ' + adicao);
console.log('Subtração: ' + subtracao);
console.log('Divisão: ' + divisao);
console.log('Multiplicação: ' + multiplicacao);
console.log('Módulo: ' + modulo);

//Exercício 02
console.log('\nExercício 02\n')
if(a > b){
    console.log('O maior número é: ' + a);
} else {
    console.log('O maior número é: ' + b);
}

//Exercício 03
console.log('\nExercício 03\n')

let c = 7569;

if(a > b && a > c){
    console.log('O maior número é: ' + a);
} else if(b > a && b > c){
    console.log('O maior número é: ' + b);
} else {
    console.log('O maior número é: ' + c);
}


//Exercício 04
console.log('\nExercício 04\n')

const FIX = 100;

if(FIX === 0){
    console.log('zero');
} else if(FIX > 0){
    console.log('positive');
} else {
    console.log('negative');
}


//Exercício 05
console.log('\nExercício 05\n');

const FIX2 = 15;
const FIX3 = 65;
let triangulo;

if(FIX > 0 && FIX2 > 0 && FIX3 > 0){
    if(FIX + FIX2 + FIX3 === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('ERRO');
}


//Exercício 06
console.log('\nExercício 06\n');

let chessPiece = 'cavalo';

switch (chessPiece.toLocaleLowerCase()){
    case 'peão':
        console.log('Peão: só se movimenta para frente, pode andar 2 casas em sua primeira jogada, nas demais jogadas apenas 1 casa');
        break;
    case 'torre':
        console.log('Torre: pode andar quantas casas quiser, tanto na horizontal quanto na vertical, não pode se movimentar na diagonal');
        break;
    case 'cavalo':
        console.log('Cavalo: se movimenta em formato de L apenas, para qualquer lado possível, pode pular outras peças para chegar ao seu destino');
        break;
    case 'bispo':
        console.log('Bispo: se movimenta em ambas as diagonais apenas, anda quantas casas quiser, há dois bispos para cada jogador, um está na diagonal de quadrados pretos e outro na diagonal de quadrados brancos');
        break;
    case 'rainha':
        console.log('Rainha/Dama: pode se movimentar em qualquer direção (horizontal, vertical, diagonal) e quantas casas quiser');
        break;
    case 'rei':
        console.log('Rei: se movimenta em qualquer direção (horizontal, vertical, diagonal), anda apenas 1 casa por vez');
        break;
    default: 
        console.log('Essa peça não pertence ao Xadrez');
        break    
}

