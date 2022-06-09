// carne - 400g por pessoa + de 6 horas -650
// cerveja - 1200ml por pessoa + 6 horas - 2000
// refrigerante/agua - 1000 ml por pessoa + 6 horas - 1500


// criança vale por 0,5


let $adult = document.querySelector('#Adultos');

let $child = document.getElementById(Crianças);

let $duration = document.getElementById(Duração);

function food(){

    if ($duration >= 6){
        $quantityFood = $adult * 400 + $child * (400 * 0.5);
        return($quantityFood)
    }

    else{
        $quantityFood = $adult * 650 + $child * (650 * 0.5);
        return($quantityFood)
    }

}

function drinks(){

    if ($duration >= 6){
        $quantityDrink = ($adult * 1000) + $child * (1000 * 0.5);
        return($quantityDrink)
    }

    else{
        $quantityDrink = $adult * 1500 + $child * (1500 * 0.5);
        return($quantityDrink)
    }

}

function drinksCerveja(){

    if ($duration >= 6){
        $quantityCerveja = $adult * 1200;
        return($quantityCerveja)
    }

    else{
        $quantityCerveja = $adult * 2000;
        return($quantityCerveja)
    }

}

/*function foodChild(){

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
*/
