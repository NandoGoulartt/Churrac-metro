// carne - 400g por pessoa + de 6 horas -650
// cerveja - 1200ml por pessoa + 6 horas - 2000
// refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500


// criança vale por 0,5

let inputAdultI = document.getElementById("Adultos");
let inputChildI = document.getElementById("Crianças");
let inputDurationI = document.getElementById("Duracao");


function textAnswerF() {
   
    let inputAdult = inputAdultI.value;
    let inputChild = inputChildI.value;
    let inputDuration = inputDurationI.value;
   
    if (inputDuration <= 6) {
        quantityFood = inputAdult * 400 + inputChild * (400 * 0.5);
        quantityDrink = (inputAdult * 1000) + inputChild * (1000 * 0.5);
        quantityCerveja = inputAdult * 1200;


    }

    else {
        quantityFood = inputAdult * 650 + inputChild * (650 * 0.5);
        quantityDrink = inputAdult * 1500 + inputChild * (1500 * 0.5);
        quantityCerveja = inputAdult * 2000;

    }


    document.getElementById('textAnswerFood').innerHTML = "Quantidade de carne: " + quantityFood + "g";
    document.getElementById('textAnswerDrink').innerHTML = "Quantidade de bebidas: " + quantityDrink + "ml";
    document.getElementById('textAnswerBeer').innerHTML = "Quantidade de cerveja: " + quantityCerveja + "ml";
}