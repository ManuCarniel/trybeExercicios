let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

console.log('\nExercício 01\n');

for(let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
    soma = soma + numbers[i];
}

console.log('\nExercício 02\n');
console.log('Soma total: ' + soma);

soma = soma/numbers.length;

console.log('\nExercício 03\n');
console.log('Média Aritmética: ' + soma);

console.log('\nExercício 04\n');
if(soma > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
 
let index = 0;

for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > index) {
        index = numbers[i];
    }
}

console.log('\nExercício 05\n');
console.log('O maior valor é: ' + index);

soma = 0;

for(i = 0; i < numbers.length; i += 1){
    if(numbers[i]%2 != 0){
        soma += 1;
    }
}

console.log('\nExercício 06\n');
if(soma > 0){
    console.log('Há ' + soma + ' números ímpares no array');
} else {
    console.log('Não há números ímpares no array');
} 

for(i = 0; i < numbers.length; i += 1){
    if(numbers[i] < index){
        index = numbers[i];
    }
}

console.log('\nExercício 07\n');
console.log('O menor número é: ' + index);

let novoArray = [];

for(i = 1; i <= 25; i += 1){
    novoArray.push(i);
}

console.log('\nExercício 08\n');
for(i = 0; i < 25; i += 1){
    console.log(novoArray[i]);
}

console.log('\nExercício 09\n');
for(i = 0; i < 25; i += 1){
    console.log(novoArray[i]/2);
}