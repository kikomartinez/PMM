function diceGame(){
    let number = window.prompt("Escriba un número entero del 1 al 12: ");
    while(parseInt(Number(number)) != number || number > 12 || number < 1){
        alert("¡Número erróneo!");
        number = window.prompt("Escriba un número entero del 1 al 12: ");
    }

    let randomNumber = getRandomInt(1, 13);

    if (number == randomNumber){
        alert("¡Felicidades, has acertado el número!");
    }
    else{
        alert("¡Has fallado, vuélvelo a intentar!");
    }
}

//mínimo incluido máximo excluido
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


diceGame();

