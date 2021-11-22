function exercicio01() {
    console.log('\nExercício 01\n');

    let n = 5;
    let starts = n > 1;
    let linha = [];


    if (starts === true){
        for (let i = 0; i <= n; i += 1){
            console.log(linha + ' ');
            for (let index = 0; index < n; index += 1){
                linha[index] = '*';
            }
        }
    }
}



function exercicio02() {

    let linha = [];
    let n = 5;
    let starts = n > 1;

    console.log('\nExercício 02\n');

    if (starts === true){
        for (let i = 0; i < n; i += 1){
            linha.push('*');
            console.log('' + linha)
        }
    }
}

let linha = [];

function exercicio03(){

    let n = 5;
    let starts = n > 1;

    console.log('\nExercício 03');

    if (starts === true){
        for (let i = n; i >= 0; i -= 1){
            for (let i = 0; i <= n; i += 1){
            linha.push('*');
            }
            remove(i);
            console.log(linha);
        }
    }
}

function remove(x){
    for (let i = 0; i <= x; i++){
        linha.shift();
    }
}


//exercicio01();
//exercicio02();
exercicio03();

