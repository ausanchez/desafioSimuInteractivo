//Simulador para convertir de grados Fahrenheit a Celsius

let fahrenheit

function convertirACelsius (fahrenheit) {
    return  (fahrenheit - 32) * 5 / 9
}
let conversion = convertirACelsius


do {
    fahrenheit = parseFloat(prompt("Ingrese un valor"))
} while (isNaN(fahrenheit))


alert(`${fahrenheit}°F equivalen a ${convertirACelsius(fahrenheit)}°C`)
