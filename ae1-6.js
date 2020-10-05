function getInteger(){
    let result = window.prompt("Escriba un número entero:");
    return result;
}

function oddOrEven(number){
    if(number % 2 == 0){
        console.log(number + " es par");
    }
    else{
        console.log(number + " es impar");
    }
}

let result = getInteger();
oddOrEven(result);