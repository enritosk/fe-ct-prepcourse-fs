/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   function devolverString(string) {
      return string;
    }
    
    const texto = "Hola, soy un string.";
    const resultado = devolverString(texto);
    console.log(resultado);
   


// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   
   function suma(x, y) {
      return x + y;
    }
    
    const resultado = suma(5, 3);
    console.log(resultado);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:

   function resta(x, y) {
      return x - y;
    }
    
    const resultado = resta(5, 3);
    console.log(resultado);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   function divide(x, y) {
      if (y === 0) {
        return "No es posible dividir por cero.";
      }
      return x / y;
    }
    
    const resultado = divide(10, 2);
    console.log(resultado);
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   function multiplica(x, y) {
      return x * y;
    }
    
    const resultado = multiplica(5, 3);
    console.log(resultado);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:function obtenerResto(x, y) {
  return x % y;
}

const resultado = obtenerResto(10, 3);
console.log(resultado)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
