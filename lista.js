let numeroAlunos = 5;

for (let index = 0; index < numeroAlunos; index++) {
    console.log(index);
    
    if (index == 0) {
        console.log("ZERO");
    } else if (index%2 == 0) {
        console.log("EVEN");
    }else if (index%2 == 1) {
        console.log("ODD");
    }

}
