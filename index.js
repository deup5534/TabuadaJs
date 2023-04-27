alert("Descubra a tabuada de qualquer número!")

let tabu = parseFloat(prompt("Número:"))
let ada = parseFloat(0)

while (ada <= 10){
    tabuada = tabu * ada;
    alert(`${tabu} x ${ada} = ${tabuada}`);
    ada+=1;
}
