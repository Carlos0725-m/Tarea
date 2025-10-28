//promedio de calificaciones mayores a 70 version con arreglo y funcion
//ENT: ingresar arreglo de calificaciones
//PROC: recorrer el arreglo, sumar y contar las calificaciones mayores o iguales a 70
//SAL: mostrar el promedio de las calificaciones mayores o iguales a 70
function promedioMayorA70() {
    let calificaciones = [65, 80, 90, 50,75];
    let suma = 0;
    let contador = 0;
    for ( let c = 0; c < calificaciones.length; c++) {
        if (calificaciones[c] >= 70) {
            suma = suma + calificaciones[c];
            contador++;
        }
    }
    let promedio = suma / contador;
    console.log("El promedio de calificaciones >= 70 es: " + promedio);
}

//contar numeros negativos en una lista version con arreglo
//ENT: ingresar arreglo de numeros
//PROC: recorrer el arreglo y contar los numeros negativos
//SAL: mostrar la cantidad de numeros negativos
function contarNegativos() {
    let numeros = [3, -5, 0, 7, -1, -8];
    let contador = 0;
    for (let c=0 ; c < numeros.length; c++) {
        if (numeros[c] < 0) {
            contador++;
        }
    }
    console.log("Cantidad de numeros negativos: " + contador);
}

//promedio de edades mayores vs menores de 18 version con arreglo
//ENT: ingresar arreglo de edades
//PROC: recorrer el arreglo y separar mayores y menores de 18, sumar y contar cada uno
//SAL: mostrar el promedio de mayores y menores de 18
function promedioEdades() {
    let edades = [17, 20, 35, 15, 18];
    let sumaMayores = 0;
    let sumaMenores = 0;
    let contadorMayores = 0;
    let contadorMenores = 0;
    for (let c=0; c < edades.length; c++) {
        if (edades[c] >= 18) {
            sumaMayores = sumaMayores + edades[c];
            contadorMayores++;
        } else {
            sumaMenores = sumaMenores + edades[c];
            contadorMenores++;
        }
    }
    let promedioMayores = sumaMayores / contadorMayores;
    let promedioMenores = sumaMenores / contadorMenores;
    console.log("Promedio de mayores de edad: " + promedioMayores);
    console.log("Promedio de menores de edad: " + promedioMenores);
}

//mostar tablas de multiplicar de varios numeris version con arreglo
//ENT: ingresar arreglo de numeros
//PROC: recorrer el arreglo y mostrar la tabla de multiplicar de cada numero
//SAL: mostrar la tabla de multiplicar de cada numero
function mostrarTablasMultiplicar() {
    let numeros = [3, 5];
    for (let c = 0; c < numeros.length; c++) {
        console.log("Tabla del " + numeros[c] + ":");
        for (let i = 1; i <= 10; i++) {
            let resultado = numeros[c] * i;
            console.log(numeros[c] + " x " + i + " = " + resultado);
        }
    }
}

//promedio de numeros pares e impares version con arreglo
//ENT: ingresar arreglo de numeros
//PROC: recorrer el arreglo y separar pares e impares, sumar y contar cada uno
//SAL: mostrar el promedio de pares e impares
function promedioParesImpares() {
    let numeros = [2, 5, 8, 9, 4, 7];
    let sumaPares = 0, sumaImpares = 0;
    let contadorPares = 0, contadorImpares = 0;
    for (let c = 0; c < numeros.length; c++) {
        if (numeros[c] % 2 === 0) {
            sumaPares = sumaPares + numeros[c];
            contadorPares++;
        } else {
            sumaImpares = sumaImpares + numeros[c];
            contadorImpares++;
        }
    }
    let promedioPares = sumaPares / contadorPares;
    let promedioImpares = sumaImpares / contadorImpares;
    console.log("Promedio de pares: " + promedioPares);
    console.log("Promedio de impares: " + promedioImpares);
}
debugger
//promedioMAyorA70()
//contarNegativos()
//promedioEdades()
//mostrarTablasMultiplicar()
promedioParesImpares()