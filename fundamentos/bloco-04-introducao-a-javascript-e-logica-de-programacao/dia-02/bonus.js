let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log('\nOrdem crescente: ' + numbers);

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log('\nOrdem decrescente: ' + numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let segundoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    
    if(index ===  numbers.length - 1){
        segundoArray.push(numbers[index] * 2);
    } else {
        let aux = (index + 1);
        segundoArray.push(numbers[aux] * numbers[index]);
    }
  }

console.log('\nNumbers original: ' + numbers);
console.log('\nSegundo Array: ' + segundoArray);

