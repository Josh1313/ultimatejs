// personaje de tv
let nombre = "Tanjiro";
let anime  = "Demon Slayer";
let edad = 16;

let personaje ={
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};//creacion de objeto literal, como un diccionario en python 
console.log(personaje);
console.log(personaje.anime);//accediendo ala posicision d eun objeto on punto y el objeto
console.log(personaje['nombre']);//accediendo de otra manera

personaje.edad = 13; // cambiando valor de la propiedad

delete personaje.anime;// borrando propiedad valor usando delete

console.log(personaje);
//tipo referencia