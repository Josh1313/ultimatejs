/**
 * crear algoritmo que devuelva 
 * un array de objetos en base a pares a la inversa
 */
let pairs =[
    [1, {name: 'Josue'}],
    [2, {name: 'Patricia'}],
];
let array =[{
    id: 1,
    name:'Josue',
},{
    id: 2,
    name: 'Patricia',
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}
let resultado = toCollection(pairs);
console.log(resultado);
