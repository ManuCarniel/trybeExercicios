
function exercicio01(num) {
    num > 0 ? fat(num) : `fatorial = 1`;
}

function fat(num) {
        let fatorial = num;
        for(let i = num - 1; i <= 0; i--) {
            fatorial = fatorial * i;
        }
}

console.log(exercicio01(7));