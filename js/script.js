// // manejando datos de tipo "texto"
// // alert('Yo tengo 30 años')
// // console.log(4 / 4)

// // manejando números
// // alert(123)

// // Para crear una cajita (variable) no puedes iniciar con
// // caracteres especiales, puedes iniciar con guión bajo, con texto, pero no
// // con número y no puede tener espacios tu nombre de la variable
// // let es para crear una cajita (variable) que cambia su valor con el tiempo
// let examen1 = 20
// let examen2 = 17
// let examen3 = 13
// let examen4 = 19
// console.log((examen1 + examen2 + examen3 + examen4) / 4)

// // const crea una cajita que no cambia nunca el valor que tiene dentro
// const PI = 3.1416
// console.log(PI)
// // console.log(salarioMinimo)

// let edadMinima = 18
// let miEdad = 18

// // si...
// if (miEdad > edadMinima) { // esto ocurre si la condición es verdad
//     console.log("Puedes ingresar")
// }
// // sino si
// else if (miEdad == 18) {
//     console.log("Tienes exactamente 18, espera un añito más")
// }
// // sino
// else {
//     console.log("No eres mayor de edad")
// }

// // -------------------------------------------------------
// let termineEscuela = false
// let edadPersona = 19

// if (termineEscuela == true || edadPersona >= 18) {
//     console.log("Puedes ingresar a la discoteca")
// }

// // --------------------- switch (segun)
// let pedido = "pizza"

// switch (pedido) {
//     // if(pedido == "pizza") { console.log("He pedido pizza") }
//     case "pizza": console.log("He pedido pizza")
//     // if(pedido == "tacos")
//     case "tacos": console.log("He pedido tacos")
//     // if(pedido == "sushi")
//     case "sushi": console.log("He pedido sushi")
//     default: console.log("Lo siento, lo que pides no está en el menú")
// }

// // ----------------
// let fruta // undefined por omisión (nos hemos olvidado de asignarle un valor)
// console.log(fruta)

// let hola = null
// console.log(hola)

// // console.log(avion)

// // ------------------------------------------
// for (let plato = 10; plato > 0; plato--) {
//     console.log("He repartido el plato número " + plato)
// }

// // Usando for me gustaría ver los números pares hasta el 10
// for (let i = 0; i <= 10; i += 2) {
//     console.log("El numero es:" + i)
// }

// // se necesita obtener los números que sean divisibles entre 5
// for (let i = 1; i <= 50; i++) {
//     if (!(i % 5 == 0)) {
//         console.log(i)
//     }
// }

// // -------------------------------
// let hambre = true
// let piezas = 0

// while (hambre) {
//     piezas++
//     console.log("comí la pieza numero " + piezas)

//     if (piezas == 4) {
//         hambre = false // ya estoy lleno
//     }
// }

// // ---------------
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }

// // 

// let intentos = 2
// do {
//     intentos++
//     console.log("Este es mi " + intentos + " intento probando el plato")
// } while (intentos < 1)


// // Operador Ternario
// let edad = 30

// if (edad > 18) {
//     console.log("Eres mayor de edad")
// } else {
//     console.log("Eres menor de edad")
// }

// edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")
// // edad > 18 ? if : else


// //------------------------------- clase viernes pasado

// function areaTriangulo(base, altura) {
//     console.log((base * altura) / 2)
// }

// areaTriangulo(10, 5)
// areaTriangulo(20, 100)
// areaTriangulo(5, 7)
// areaTriangulo(13, 4)
// areaTriangulo(9, 25)

// function verificarIngreso(edad) {
//     if (edad >= 18) {
//         console.log("Puedes ingresar")
//     } else {
//         console.log("No Puedes ingresar, eres menor aún")
//     }
// }

// verificarIngreso(21)
// verificarIngreso(19)
// verificarIngreso(16)
// verificarIngreso(13)

// function calcularPrecio(precioBase, descuento) {
//     const precioFinal = precioBase - (precioBase * descuento / 100)
//     const ahorro = precioBase - precioFinal

//     console.log("El precio final es:" + precioFinal)
//     console.log("El ahorro es:" + ahorro)
// }

// calcularPrecio(120, 10)

// function calculadoraBasica(num1, num2, operador) {
//     if (operador == '+') console.log(num1 + num2)
//     else if (operador == '-') console.log(num1 - num2)
//     else if (operador == '*') console.log(num1 * num2)
//     else if (operador == '/') {
//         if (num2 == 0) {
//             console.log("No puedes dividir entre 0")
//         } else {
//             console.log(num1 / num2)
//         }
//     }
//     else {
//         console.log("Operación invalida")
//     }
// }

// calculadoraBasica(20, 0, '/')

// -------------------------------------
let nombre = "Ana"
// convierte el texto a mayúsculas
console.log(nombre.toUpperCase())

let frase = "HOY PERÚ GANA"
// coloca en minúsculas 
console.log(frase.toLowerCase())

// limpiamos / eliminamos los espacios en los externos
let frase2 = " esta es una frase "
console.log(frase2.trim())

// verificar si existe una palabra
// dentro del string
let frase3 = "Bienvenidos a Javascript"
console.log(frase3.includes("Java"))

let fraseParaOlvidarla = 'Una ves recibí un consejo que decía "Para olvidarla..." que fue de mi amigo'

// slice para sacar una portción del texto
console.log(fraseParaOlvidarla.slice(0, 10))

// necesito reemplazar un texto con otro
console.log(fraseParaOlvidarla.replace("olvidarla", "conquistarla"))

// split - Separa una cadena de texto y lo convierte
// en un arreglo mediante un "delimitador"
// split busca en el texto donde esté el caracter que
// tú le indiques, por cada vez que lo encuentre
// creará un item dentro de tu cajita que es tu arreglo
let csv = "Ana,Luis,Carlos,Pepe"
console.log(csv.split(","))

// me gustaría saber si un texto inicia o termina
// con cierta palabra o frase
let frase4 = "Hay 28 alumnos presentes"
console.log(frase4.startsWith("Hay"))
console.log(frase4.endsWith("presentes"))


// textos - string
// numeros - number
// true / false - boolean

// ---------------------- NUMEROS
let precio = 15.123879

// redondera los decimales
console.log(precio.toFixed(3))

// convertir un numero a texto
console.log("15.123879")

let pozoGanador = 1000000
console.log(pozoGanador.toLocaleString())

// verificar si algo No es un numero
console.log(Number.isNaN("25"))
// NaN - Not a Number

// --------------------------
// Arreglo / Array
let frutas = ["fresa", 123, "lima", "mandarina", "limon"]

// agregando un item (ultimo)
frutas.push("maracuyá")
console.log(frutas)

// agregando un item (primero)
frutas.unshift("cereza")
console.log(frutas)
// fresa, naranja, mandarina, limon,

// eliminando frutas (ultimo)
frutas.pop()
console.log(frutas)

// eliminando frutas (primero)
frutas.shift()
console.log(frutas)

// revertir un arreglo
frutas.reverse()
console.log(frutas)

// convertir un arreglo a string
// juntando cada item con algún caracter
console.log(frutas.join(','))

// console.log(frutas[(frutas.length / 2).toFixed(0) - 1])

const nombres = ["pepe", "ana", "juan", "maria"]


for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase())
}

console.log("---------------------")

nombres.forEach((nombre) => {
    if (nombre == "ana") {
        console.log(nombre.toUpperCase())
    }
})

nombres = 123
