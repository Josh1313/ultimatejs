/**
 * crear algoritmo que devuelva cantidad 
 * de numeros 
 *  positivos y negativos
 */
// let array = [ 2, 5, 7, 15, -5, -9, -100];

// function cuantosPositivos (arr){

// }

// let resultado = cuantosPositivos (array);
// console.log(resultado);
let array = [ 2, 5, 7, 15, -5, -9, -100];

function cuantosPositivos (arr){
    let cantidad = 0;
    for(elemento of arr){
        if (elemento > 0 ) {// cambia de menor a mayor para que veas cambios en console
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = cuantosPositivos (array);
console.log(resultado);