
/* 
Se trata de una calculadora de carbohidratos.Se le presenta al usuario las alternativas que tiene (Alimento, gramos de carbohidratos y unidad de medida):

    1. Gel Roctane Gu: 21 gr carbohidratos por unidad
    2. Nutremax: 60 gr carbohidratos por litro
    3. Dátiles: 5 gr por unidad
    4. Membrillitos: 20 gr por unidad

Por cada hora se debe consumir entre 70 y 90 gr de carbohidratos.

El usuario debería elegir los alimentos, hasta llegar a 70 gr mínimo, donde debería avisarle, y máximo 90 gr, avisándole que ya llegó al máximo.

*/

alert("Bienvenido/a a mi calculadora de alimentación para carreras de trail.\n\nPara cada hora de carrera se estima una necesidad de reposición de 70 a 90 gramos de carbohidratos.");
alert("El siguiente listado muestra alimentos y los gramos de carbohidratos por unidad de medida.\n\nA medida que vayas seleccionándolos, se acumulan hasta llegar a un rango entre 70gr y 90gr de carbohidratos.");

const alimento1 = "Gel Roctane Gu"
const carbohidratos1 = 21

const alimento2 = "Nutremax"
const carbohidratos2 = 60

const alimento3 = "Dátil"
const carbohidratos3 = 5

const alimento4 = "Membrillito"
const carbohidratos4 = 20

let totalCarbohidratos = 0

function sumarCarbos(eleccion, total) {
    if (eleccion === 1) {
        total += carbohidratos1
    } else if (eleccion === 2) {
        total += carbohidratos2
    } else if (eleccion === 3) {
        total += carbohidratos3
    } else if (eleccion === 4) {
        total += carbohidratos4
    } else {
        alert("Opción no válida. Intenta nuevamente.")
    }
    return total
}

while (totalCarbohidratos < 70) {
    let eleccion = parseInt(prompt("Elige un alimento:\n1. Gel Roctane Gu: 21 gr por unidad\n2. Nutremax: 60 gr por litro\n3. Dátil: 5 gr por unidad\n4. Membrillito: 20 gr por unidad\n\nTotal carbohidratos actuales: " + totalCarbohidratos))

    totalCarbohidratos = sumarCarbos(eleccion, totalCarbohidratos)

    if (totalCarbohidratos >= 70 && totalCarbohidratos <= 90) {
        alert("¡Has alcanzado el rango deseado de carbohidratos! Total: " + totalCarbohidratos + " gr")
        break
    } else if (totalCarbohidratos > 90) {
        alert("Has excedido el máximo de carbohidratos sugeridos. Total: " + totalCarbohidratos + " gr")
        break
    }
}