// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var primero= array[0];
  return primero;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var a= array[array.length-1];
  return a;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  nuevo=[];
  for(i=0; i<array.length; i++){
    val=array[i]+1;
    nuevo.push(val);
  }
  return nuevo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase=palabras.join(" ");
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (cont=0; cont<array.length; cont++){
    if (array[cont]== elemento){
      return true;
      break;
    }

  }
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  sum=0;
  for(cont=0; cont< numeros.length; cont++){
    sum=sum+ numeros[cont];
  }
return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  res=0;
  for(i=0; i< resultadosTest.length; i++){
    res=res+resultadosTest[i];
  }
  return res/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  max=0;
  for (i=0;i< numeros.length;i++){
    if(max < numeros[i]){
        max=numeros[i]      
    }
  }
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //REVISAR
  
  res=1;
  for(i=0 ; i<arguments.length; i++){
    res=arguments[i]*res;
  }
  if(arguments.length < 1){
    res=0;
  }
  return res;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cont=0;
  for (i=0;i< arreglo.length; i++){
    if(arreglo[i]> 18){
      cont++;
    }
  }
return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  switch (numeroDeDia){
    case 1:
      return "Es fin de semana";
      break;
    case 2:
      return "Es dia Laboral";
      break;
    case 3:
      return "Es dia Laboral";
    case 4:
      return "Es dia Laboral";
    case 5:
      return "Es dia Laboral";
    case 6:
      return "Es fin de semana";
      break;
    case 7:
      return "Es fin de semana";
      break;
    default:
      return "ERROR..."
  }   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  numero=n.toString();
  if(numero.charAt(0)=="9"){
    return true;
  }
  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  inicio= false;  
  for(i=0; i<arreglo.length; i++){
    for(j=i+1;j< arreglo.length;j++){
      if(arreglo[i] === arreglo[j]){
        inicio=true;
      }
    }
  }
  
return inicio;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  //return 
  var nuevo = [];
  for(i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevo.push(array[i]);
    }
  }
  
  if(nuevo.length <3){
    return "No se encontraron los meses pedidos";
    }
  else{
    return nuevo;
  }
  
        
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevo=[];
  for (i=0; i< array.length; i++){
    if (array[i] > 100){
      nuevo.push(array[i]);
    }
  }
  return nuevo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevo=[];
 //res=0;
  cont=0;
  for(i=0; i< 10; i++){
    numero=numero+2;
    cont++;
    if (cont === numero){
      //return "Se interrumpió la ejecución";
      break;
    }
    else{
      nuevo.push(numero);
    }  
  }
  if(cont <10){
    return "Se interrumpió la ejecución";
  }
  else{
    return nuevo;
  }
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arreglo=[];
  var cont=0;
  for(i=0; i<10; i++){
    cont++;
    if(cont ===5){
      //numero=numero+0;
      continue;
    }
    else{
      numero=numero+2;
      arreglo.push(numero);
    }
    
  }
  return arreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
