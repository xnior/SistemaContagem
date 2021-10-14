let numeroAlunos = 5;

let listaAlunos = ["José", "Maria", "Antônio", "Marcos", "Joaquim", "Jonas"]

let contador = 0;

while (contador < listaAlunos.length) {
   
    if (contador == 0) {
        console.log(contador + ": ZERO"); // Concatenação
    } else if (contador%2 == 0) {
        console.log(`${contador}: PAR`); //Interpolação
    }else{
        console.log(`${contador}: IMPAR`); //Interpolação
    }

    contador++;

}

// for (let index = 0; index < numeroAlunos; index++) {
//     // console.log(index);

    // if (index == 0) {
    //     console.log(index + ": ZERO"); // Concatenação
    // } else if (index%2 == 0) {
    //     console.log(`${index}: PAR`); //Interpolação
    // }else{
    //     console.log(`${index}: IMPAR`); //Interpolação
    // }

// }

