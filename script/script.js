// carne - 400g por pessoa + de 6 horas -650
// cerveja - 1200ml por pessoa + 6 horas - 2000
// refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500


// criança vale por 0,5

let inputAdultI = document.getElementById("Adultos");
let inputChildI = document.getElementById("Crianças");
let inputDurationI = document.getElementById("Duracao");
let inputAdultBeerI = document.getElementById("AdultosBeer");


function textAnswerF() {

    let inputAdult = inputAdultI.value;
    let inputChild = inputChildI.value;
    let inputDuration = inputDurationI.value;
    let inputAdultBeer = inputAdultBeerI.value;
    
    if (inputAdult >= inputAdultBeer) {
        if (inputDuration <= 6) {
            quantityFood = inputAdult * 400 + inputChild * (400 * 0.5);
            quantityDrink = (inputAdult * 1000) + inputChild * (1000 * 0.5);
            quantityCerveja = inputAdultBeer * 1200;


        }

        else {
            quantityFood = inputAdult * 650 + inputChild * (650 * 0.5);
            quantityDrink = inputAdult * 1500 + inputChild * (1500 * 0.5);
            quantityCerveja = Math.floor((inputAdultBeer * 2000) / 350);

        }

        
        document.getElementById('containerRes').style.background = "white";
        document.getElementById('containerRes').style.border = "1px solid #00000045";
        document.getElementById('textAnswerFood').innerHTML = "Quantidade de carne: " + quantityFood + "g.";
        document.getElementById('textAnswerDrink').innerHTML = "Quantidade de bebidas: " + quantityDrink + "ml.";
        document.getElementById('textAnswerBeer').innerHTML = "Quantidade de cerveja: " + quantityCerveja + " Latas.";
        document.getElementById('textAnswerError').style.display= "none";
        document.getElementById('textAnswertC').style.display= "";
        
    }
    else{
        document.getElementById('textAnswerError').innerHTML = "Quantidades de adultos que bebem superior a quantidade de adultos presentes no local. Por favor, confira as informações";
        document.getElementById('textAnswerError').style.color="red";
        document.getElementById('textAnswerError').style.background = "white";
        document.getElementById('textAnswerError').style.border = "1px solid #00000045";
        document.getElementById('textAnswerError').style.padding = "5px";
        document.getElementById('textAnswerError').style.display= "";
        document.getElementById('textAnswertC').style.display= "none";
    }
}