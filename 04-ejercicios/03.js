/**
 * indice validar que no sea menor a cero y que el elemento 
 * exista en ele array
 * utilizaremos if || pra que la la funtion no se tan larga
 */

function getbyIdx(arr, idx){
    if (idx < 0  || arr.lenght <= idx){
        return ' Elemento no existe'
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2],-3);
console.log(resultado)