//Exercício 07
console.log('\nExercício 07\n');

let nota = 55;

if(nota > 100 || nota < 0){
    console.log('ERRO');
} else if(nota >= 90){
    console.log('A');
} else if(nota >= 80){
    console.log('B');
} else if(nota >= 70){
    console.log('C');
} else if(nota >= 60){
    console.log('D');
} else if(nota >= 50){
    console.log('E');
} else {
    console.log('F');
} 


//Exercício 08
console.log('\nExercício 08\n');

const a = 51;
const b = 41;
const c = 21;

if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}


//Exercício 09
console.log('\nExercício 09\n');

if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    console.log(true);
} else {
    console.log(false);
}



//Exercício 10
console.log('\nExercício 10\n');

const custo = 1;
const venda = 3;
let custoTotal = 0
let lucro = 0;

if(custo <= 0 || venda <= 0){
    console.log('Erro, valor inválido');
} else {
    custoTotal = custo + (custo * 20)/100;
    lucro = (venda - custoTotal) * 1000;
    console.log('Lucro: ' + lucro);
}


//Exercício 11
console.log('\nExercício 11\n');


let salarioBruto = 3000.00;
let inss = 0;
let impostoRenda = 0;
let salarioBase = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94){
    inss = 8/100 * (salarioBruto);
} else if (salarioBruto <= 2594.92){
    inss = 9/100 * (salarioBruto);
} else if (salarioBruto <= 5189.82){
    inss = 11/100 * (salarioBruto);
} else if (salarioBruto > 5189.82 ){
    inss = 570.88;
}

salarioBase = salarioBruto - inss;

if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    impostoRenda = 7.5/100 * (salarioBase);
    impostoRenda = impostoRenda - 142.80;
} else if (salarioBase <= 3751.05){
    impostoRenda = 15/100 * (salarioBase);
    impostoRenda = impostoRenda - 354.80;
} else if (salarioBase <= 4664.68){
    impostoRenda = 22.5/100 * (salarioBase);
    impostoRenda = impostoRenda - 636.13;
} else if (salarioBruto > 4664.68){
    impostoRenda = 27.5/100 * (salarioBase);
    impostoRenda = impostoRenda - 869.36;
}

salarioBase = salarioBase - impostoRenda;

console.log('Resultado: ' + salarioBase);
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
