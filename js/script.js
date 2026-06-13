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



// ---------------
let nombres2 = ["Carlos", "Ana", "Luis"]
// sort se utiliza para ordenar un arreglo
console.log(nombres2.sort())

let numeros = [3, 5, 7, 1, 0, 6]
console.log(numeros.sort())

// every - todos los elementos deben de cumplir
// la condición que se establece

/*
for(let i = 0; i < precios.length; i++)  {
    if(precios[i] >= 200) {
        "true"
    } else {
        "false"
    }
}
*/
let precios = [100, 95, 120, 300]
console.log(precios.every((precio) => precio >= 200)) // &&

let algunoCumple = precios.some((p) => p >= 200)

if (algunoCumple) {
    console.log("Alguno cumple")
} else {
    console.log("Ninguno cumple")
}

// -----------------------------
let ciudadesPeru = ["San Isidro", "Lince", "Miraflores", "San Miguel", "Barranco"]

// Eliminar
ciudadesPeru.splice(1, 2)

console.log(ciudadesPeru)

// Editar / Reemplazar
ciudadesPeru.splice(1, 1, "Surco")
console.log(ciudadesPeru)

ciudadesPeru.splice(2, 1, "Ate")
console.log(ciudadesPeru)

// Agregar elementos
ciudadesPeru.splice(3, 0, "Magdalena del mar", "Lince", "Miraflores")
console.log(ciudadesPeru)

// EXTRA
ciudadesPeru.splice(1, 1, [1, 2, 3], "Lurin")
console.log("--------------------")
console.log(ciudadesPeru)

// cómo encontrar elementos?
const edades3 = [5, 21, 19, 13, 15, 10]
// me crea un arreglo con todos los elementos
// que cumplan la condición
console.log(edades3.filter((edad) => edad >= 16))
// me da la 1era coincidencia con la condición
console.log(edades3.find((edad) => edad >= 16))

// ----------
// usamos map para transformar cada elemento
// nos crea un nuevo arreglo del mismo
// NO MODIFICA EL ORIGINAL
let precios2 = [100, 95, 120, 300]
console.log(precios2.map((p) => p * 0.9))

// -----------------
const producto = {
    color: "negro",
    nombre: "Teclado",
    precio: [1, 2, 3, 4, 5],
    modelo: "XL"
}

const { modelo } = producto

console.log(modelo)

// ---------------------------
const pacientes = [
    { nombre: "Ana", edad: 72, seguro: true, turno: 8, especialidad: "cardiologia" },
    { nombre: "Luis", edad: 45, seguro: true, turno: 3, especialidad: "emergencias" },
    { nombre: "Carlos", edad: 65, seguro: false, turno: 12, especialidad: "cardiologia" },
    { nombre: "Maria", edad: 80, seguro: true, turno: 1, especialidad: "traumatologia" },
    { nombre: "Pedro", edad: 40, seguro: false, turno: 7, especialidad: "neurologia" },
    { nombre: "Luis", edad: 10, seguro: false, turno: 20, especialidad: "emergencias" },
    { nombre: "Jorge", edad: 30, seguro: false, turno: 2, especialidad: "cardiologia" }
]

// 1. Se necesita ver los pacientes
// que no tienen seguro
const sinSeguro = pacientes.filter((p) => p.seguro != false)

// 2. Se neceistan los pacientes que tengan seguro
// y además sean menor de 70 años

// 3. Mostrar en consola un mensaje si es que hay algún paciente menor de edad
// entrando por "emergencias"

// 4. Se necesita saber quien es el paciente con el turno más alto

const persona = {
    nombre: "", edad: 10, apellido: ""
}

const paciente2 = {
    ...persona
}

// 1 --------------------------------------------------

// 1. Strings
// Una biblioteca recibe los títulos de libros mal escritos al ser registrados
// Se busca formatear el título para que se limpien los espacios externos y devuelva cada
// palabra con mayúscula

// Crea una función que reciba un texto y limpie los espacios exterior del texto y coloque
// cada palabra en mayúscula la inicial
const titulo = " el señor de los anillos "
// El Señor De Los Anillos

// Solucion 1
let palabras = titulo.trim().split(" ");
let resultado = "";

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (palabra.length > 0) {
        resultado += palabra.slice(0, 1).toUpperCase() + palabra.slice(1) + " ";
    }
}

console.log(resultado.trim());

// Solución 2
function formatearLibro(titulo) {
    const resultado = titulo.trim().split(" ").map((palabra) => palabra.slice(0, 1).toUpperCase() + palabra.slice(1)).join(" ")
    console.log(resultado)
}

const libro1 = " el señor de los anillos "
formatearLibro(libro1)

const libro2 = " fenomenología de la ansiedad "
formatearLibro(libro2)

// Ejercicio 2
// 2. Objetos + Arreglos
// El hospital tiene un arreglo de medicamentos por nombre, precio y disponibilidad.
// Crea una función que devuelva, en un solo arreglo, los nombres de los medicamentos que cuestan
// menos de 50 soles y están disponibles en la farmacia.
const medicamentos = [
    { nombre: "Paracetamol", precio: 14, disponible: true },
    { nombre: "Amoxicilina", precio: 60, disponible: true },
    { nombre: "Ibuprofeno", precio: 25, disponible: false },
    { nombre: "Loratadina", precio: 30, disponible: true }
]

// ["Paracetamol", "Loratadina"]
// Solución 1 - forEach
let nuevoArray = []

function devulve(arreglo) {
    arreglo.forEach((medicamento) => {
        if (medicamento.precio < 50 && medicamento.disponible == true) {
            nuevoArray.push(medicamento.nombre)
        }
    })

    console.log(nuevoArray)
}

devulve(medicamentos)

// Solución 2 - con métodos (filter + map)
const verdadesPrecio = medicamentos.filter((v) => v.disponible === true && v.precio < 50).map((v) => v.nombre)

// Ejercicio 3
// 3. Arreglos
// Una tienda tiene un arreglo con los precios de los productos.
// Hay una nueva promoción, todo lo que cuesta más de 100 soles tiene un 10% de descuento.
// Crea una función que devuelva un nuevo arreglo solo con los precios de esos productos,
// ya con el descuento aplicado.
const preciosTienda = [50, 120, 80, 200, 95, 150]
// [108, 180, 135]

// Solución 1
function promocion(precios) {
    return precios.filter(precio => precio > 100).map(precio => precio - (precio * 0.10));
}

// Solución 2
const nuevoArray2 = []
function precioNuevo(p) {
    p.forEach((precio) => {
        if (precio > 100) {
            nuevoArray2.push(precio * 0.9)
        }
    })
    console.log(nuevoArray2)
}

precioNuevo(preciosTienda)

// Ejercicio 4
// Un aeropuerto registra los vuelos del día. Cada vuelo tiene la siguiente forma:
const vuelos = [
    { codigo: "lh-204", destino: "  frankfurt ", pasajeros: ["Juan", "María"], precioBase: 850, estado: "confirmado", retrasoMin: 0 },
    { codigo: "AA-118", destino: "NEW YORK", pasajeros: ["Juan", "María"], precioBase: 620, estado: "cancelado", retrasoMin: 45 },
    { codigo: "ib-305", destino: "madrid", pasajeros: ["Juan", "María"], precioBase: 700, estado: "confirmado", retrasoMin: 0 },
    { codigo: "LA-512", destino: " Santiago", pasajeros: ["Juan", "María"], precioBase: 300, estado: "confirmado", retrasoMin: 20 },
    { codigo: "KL-661", destino: "boGoTa", pasajeros: ["Juan", "María"], precioBase: 900, estado: "confirmado", retrasoMin: 0 },
]

// DOM

// Obteniendo un elemento por su Id
console.log(document.getElementById("cajita").textContent)
console.log(document.querySelector("a"))

// Obteniendo un elemento por su clase
// Crea un Arreglo de tipo HTMLCollection que contiene
// todos los elementos que tengan esa clase mencionada
console.log(document.getElementsByClassName('ejemplo'))

// Si usamos querySelector para obtener por clase
// query selector es similar a un find
// traerá la primera coincidencia
console.log(document.querySelector("div").textContent)
console.log(document.querySelectorAll(".ejemplo"))

// ----------------
document.getElementById("cajita").style.color = "rgb(133, 228, 133)"
document.getElementById("cajita").style.backgroundColor = "crimson"