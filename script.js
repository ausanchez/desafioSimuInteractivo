//Simulador para convertir de grados Fahrenheit a Celsius
/* 
let fahrenheit

function convertirACelsius (fahrenheit) {
    return  (fahrenheit - 32) * 5 / 9
}
let conversion = convertirACelsius


do {
    fahrenheit = parseFloat(prompt("Ingrese un valor"))
} while (isNaN(fahrenheit))


alert(`${fahrenheit}°F equivalen a ${convertirACelsius(fahrenheit)}°C`)
 */


/****************************************
DESAFIO COMPLEMENTARIO: INCORPORAR ARRAYS
******************************************/

class Tenistas {
    constructor (nombre, nacionalidad, ranking, grandSlams, triunfos, derrotas) {
        this.nombre = nombre
        this.nacionalidad = nacionalidad
        this.ranking = ranking
        this.grandSlams = grandSlams
        this.triunfos = derrotas
    }
}

const tenista1 = new Tenistas("Medvedev", "Rusia", 1, 1, 249, 109)
const tenista2 = new Tenistas("Nadal", "España", 4, 22, 1058, 202)
const tenista3 = new Tenistas("Federer", "Suiza", 97, 20, 1251, 275)
const tenista4 = new Tenistas("Schwartzman", "Argentina", 15, 0, 230, 180)
const tenista5 = new Tenistas("Kyrgios", "Australia", 40, 0, 184, 109)
const tenista6 = new Tenistas("Djokovich", "Serbia", 3, 20, 1005, 204)


const tenistas = [tenista1, tenista2, tenista3, tenista4, tenista5]

console.table(tenistas)

tenistas.splice(2,3)

console.table(tenistas)

tenistas.push(tenista6)

console.table(tenistas)

