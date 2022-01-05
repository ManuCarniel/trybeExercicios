// EXERCÍCIO 01
const newEmployees = () => {
    const employees = {
      id1: registerEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: registerEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: registerEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const registerEmployees = (newEmp) => ({
    Nome: `${newEmp}`,
    Email: `${newEmp.split(' ').join('_')}@trybe.com`, // https://raccoon.ninja/pt/dev-pt/substituindo-todos-os-espacos-de-uma-string-por-underscore-_-javascript/
});

console.log(newEmployees());


// EXERCÍCIO 02

const lotWinner = (num) => {
    if (test(num)) {
        return `Parabéns você ganhou`
    } 
    return `Tente novamente`
}

const test = (num) => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(`${randomNumber} foi o número sorteado`);
    console.log(`${num} é o seu número`);
    if (randomNumber === num) {
        return true
    }
} 

console.log(lotWinner(3));


// EXERCÍCIO 03

const counter = (x, y) => {
    if (y === 'N.A') {
        return 0;
    } else if (x === y) {
        return 1;
    } else {
        return 0.5;
    }
}

const portuguesTest = (rightAnswers, answers, counter) => {
   let total = 0; 
   for ( let i = 0; i < rightAnswers.length; i += 1) {
       total += counter(rightAnswers[i], answers[i]);
   }
   console.log(`A pontuação final foi: ${total}`);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'C'];

portuguesTest(RIGHT_ANSWERS, STUDENT_ANSWERS, counter);