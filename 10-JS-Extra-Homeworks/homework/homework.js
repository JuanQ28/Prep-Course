// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var nuevoarray=[];

  for (let clave in objeto)
  {

   nuevoarray.push ([clave, objeto[clave]]);
    
  }

  return nuevoarray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var array = string.split('');
  
  array.sort(); //Este comando ordena el array alfabeticamente, lo mismo con los números (De menor a mayor)

  var nuevoobjeto={};
  var contador=0;
  var caracteractual=array[0];

  //el for of, a diferencia del for in, no devuelve índices, 
  //sino que devuelve lo almacenado en cada índice.

  for(var valor of array)
  {
    if(caracteractual===valor){
      contador++;
    }

    else {
      caracteractual=valor;
      contador=1;
    }

    nuevoobjeto[caracteractual]=contador;

  }

return nuevoobjeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí


  var minus='';
  var plus='';

  for(var valor in s){
    
    if(s[valor]===s[valor].toUpperCase()){
      plus += s[valor];
    }

    else {
      minus += s[valor];
    }

  }

  
  return plus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

var temporal='';
var final='';
var arreglo=str.split(' ');


for (var i=0; i< arreglo.length; i++)
{
  temporal=arreglo[i];

  for(var j=temporal.length; j>=0; j--)
  {
    final += temporal.charAt(j);
  }

if(i<(arreglo.length-1)){
  final +=' ';
}

}

return final;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

var numeroreversa= numero.toString().split('').reverse().join('');

if(numero.toString()===numeroreversa){
  return 'Es capicua';
}
else{
  return 'No es capicua';
}


  /*código maluco
var numerostring= numero.toString();
var inverso='';

for (var i=numerostring.length-1; i>=0; i--){
  inverso += numerostring[i];
}

if(numerostring===inverso){
  return 'Es capicua';
}

else{
  return 'No es capicua';
}
*/
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

let nuevacadena= cadena.split('').filter(function(elemento){
return elemento !== 'a' && elemento !== 'b' && elemento !== 'c';
})

return nuevacadena.join('');

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

let nuevoarray= arr.sort(function(a,b){
  return a.length - b.length;
})  

return nuevoarray;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

let nuevoarr=[];

for (let i=0; i<arreglo1.length; i++){

  for (let j=0; j<arreglo2.length; j++){
       
    if(arreglo1[i]===arreglo2[j]){
      nuevoarr.push(arreglo2[j]);
    }
  
  }  

}

return nuevoarr;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

