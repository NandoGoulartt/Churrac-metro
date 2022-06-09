// carne - 400g por pessoa + de 6 horas -650
// cerveja - 1200ml por pessoa + 6 horas - 2000
// refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500


// criança vale por 0,5
let $adult = document.querySelector('#Adultos');

let $child = document.getElementById(Crianças);

let $duration = document.getElementById(Duração);

function foodAdult(){

    if ($duration >= 6){
        $quantityFood = $adult * 400;
        return($quantityFood)
    }

    else{
        $quantityFood = $adult * 650;
        return($quantityFood)
    }

}

function drinksAdult(){

    if ($duration >= 6){
        $quantityDrinkAdult = ($adult * 1000);
        return($quantityDrinkAdult)
    }

    else{
        $quantityDrinkAdult = $adult * 1500;
        return($quantityDrinkAdult)
    }

}

function drinksAdultCerveja(){

    if ($duration >= 6){
        $quantityCervejaAdult = ($adult * 1200);
        return($quantityCervejaAdult)
    }

    else{
        $quantityCervejaAdult = $adult * 2000;
        return($quantityCervejaAdult)
    }

}

function foodChild(){

    if ($duration >= 6){
        $quantityFoodChild = $child * 200
        return($quantityFoodChild)
    }

    else{
        $quantityFoodChild = $child * 325
        return($quantityFoodChild)
    }

}

function drinksChild(){

    if ($duration >= 6){
        $quantityDrinkChild = $child * 500
        return($quantityDrinkChild)
    }

    else{
        $quantityDrinkChild = $child * 750
        return($quantityDrinkChild)
    }

}

function textAnswerF(){
    
}

