/*Sintaxis y Variables: hacer trabajo colaborativo.. git y github.. buen uso de commits. si se animan usen ramas

Ejercicio Calculadora simple

Crear un archivo JavaScript con buenas practicas. (calculadora.js) y definir tres variables: 
numero1, numero2, y operación. (recibiran la informacion por prompt)

implementar la lógica para realizar la operación aritmética según el valor de la variable operacion. 
Por ejemplo, si operacion es "suma", deben sumar numero1 y numero2. 
(oeraciones a utilizar, suma, resta, multiplicacion, division, resto, exponenciación )

Asegúrate de que se realice la conversión de tipo si es necesario (por ejemplo, de string a número). //ParseInt 

-No usar funciones, sino condicionales*/

//----Version Carlos----
var numeroUno = parseInt(prompt("Ingrese Primer Numero:"))
var numeroDos = parseInt(prompt("Ingrese Segundo Numero:"))
var operacion = parseInt(prompt("Ingrese la operacion a realizar:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Resto(Modulo)\n6. Exponenciacion"))
 
const Calculadora = (operacion,numeroUno,numeroDos) => {
    switch (operacion) {
        case 1:
            console.log(numeroUno + numeroDos);
        break;
        case 2:
            console.log(numeroUno - numeroDos);
        break;
        case 3:
            console.log(numeroUno * numeroDos);
        break;
        case 4:
            console.log(numeroUno / numeroDos);
        break;
        case 5:
            console.log(numeroUno % numeroDos);
        break;
        case 6:
            console.log(numeroUno ** numeroDos);
        break;
    }
}
 
Calculadora(operacion, numeroUno, numeroDos)

// --Version Emiliano --
let numeroUno = Number(prompt("Ingrese Primer Numero:"))
let numeroDos = Number(prompt("Ingrese Segundo Numero:"))
let operacion = prompt("Ingrese la operación a realizar")
 
//suma, resta, multiplicacion, division, resto(modulo), exponenciacion

if(numeroUno === NaN  || numeroDos === NaN)
if(operacion === "suma"){
    console.log(numeroUno + numeroDos)
} else if(operacion === "resta"){
    console.log(numeroUno - numeroDos)
} else if(operacion === "multiplicacion"){
    console.log(numeroUno * numeroDos)
} else if(operacion === "division"){
    console.log(numeroUno / numeroDos)
} else if(operacion === "resto"){
    console.log(numeroUno % numeroDos)
} else if(operacion === "exponeeciacion"){
    console.log(numeroUno + numeroDos)
} else {
    console.log("error en los datos")
}