/**
 * crear algoritmo que tome un array 
 * de objetos y devuelva un array de pares 
 */
 let array =[{
    id:1,
    name:'Josue',
    edad: 38,
 },{
    id:2,
    name:'Patricia',
    edad: 43,
 },{
    id:3,
    name:'david',
    edad: 8,
 },{
    id:4,
    name:'paul',
    eda: 14,
 }];
 let pares =[
    [1, { id: 1, name: 'Josue', edad: 38}],
    [2, { id: 2, name: 'Patricia', edad: 43}],
    [3, { id: 3, name: 'David', edad: 8}],
    [4, { id: 4, name: 'Paul', edad: 14}],
 ];

 function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento]
    }
    return pairs;
 }

 let resultado = toPairs(array);
 console.log(resultado)