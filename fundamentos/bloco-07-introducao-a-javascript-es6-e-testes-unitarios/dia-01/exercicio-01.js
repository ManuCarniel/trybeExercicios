function exercicio01() {
    const testingScope = (escopo) => {
        if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
        console.log(ifScope);
        } else {
        const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
        }
        // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
    }

    testingScope(true);
}
exercicio01();

function exercicio02() {
    let oddsAndEvens = [13, 3, 4, 10, 7, 2];
    console.log(oddsAndEvens);

    oddsAndEvens.sort((a, b) => {
        return a - b;
    });

    console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 
}
exercicio02();
