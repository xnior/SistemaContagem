let numeroAlunos = 5;

for (let index = 0; index < numeroAlunos; index++) {
    console.log(index);
    
    if (index == 0) {
        console.log("ZERO");
    } else if (index%2 == 0) {
        console.log("PAR");
    }else{
        console.log("IMPAR");
    }

}
