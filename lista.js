let numeroAlunos = 5;

for (let index = 0; index < numeroAlunos; index++) {
    // console.log(index);
    
    if (index == 0) {
        console.log(index + " ZERO");
    } else if (index%2 == 0) {
        console.log(index + " PAR");
    }else{
        console.log(index + " IMPAR");
    }

}
