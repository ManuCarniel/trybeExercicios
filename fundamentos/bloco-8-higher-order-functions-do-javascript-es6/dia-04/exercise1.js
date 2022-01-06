const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
        return arrays.reduce((acc, curr) => { 
            console.log(`é o acumulador ${acc}`);
            console.log(`é o valor atual ${curr}`);
            return acc.concat(curr);
        });
  }

  console.log(flatten());