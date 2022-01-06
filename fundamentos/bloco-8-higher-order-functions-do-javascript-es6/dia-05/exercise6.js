const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([nome, marca, ano]) => ({ nome, marca, ano });
const cars = [[...palio], [...shelbyCobra], [...chiron]];
cars.forEach((car) => console.log(toObject(car)));
