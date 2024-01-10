// short-circuit

// saber cuales son los operadore que son falsos
/**
 * false
 * 0
 * null
 * undefined
 * nan
 */
let nombre = 'Yo puedo';
let username = nombre || 'anonimo';
console.log(username);

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();