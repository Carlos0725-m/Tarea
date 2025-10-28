//Promedio de calificaciones mayores a 70 
//ENT: leer n cantidad, leer calificacion, sumar calificaciones, contador = 0
//PROC: recorrer n veces, sacar el promedio, validar si calificacion >=70, sumar y contar
//SAL: mostrar promedio de calificaciones >=70
function PromedioMayorCalificaciones(){
    let n = parseInt(prompt("Ingrese la cantidad de calificaciones: "))
    let suma = 0, contador = 0, calificacion = 0
    for(let c = 0; c < n; c++){
        calificacion = parseFloat(prompt("Ingrese la calificación "+ (c+1) + ": "))
        if(calificacion>=70){
        suma = suma + calificacion
        contador++
    }
}
    let promedio = suma/contador
    console.log("El promedio de notas >= 70 es: " + promedio)
}

//Contar cuántos números negativos se ingresan
//ENT: leer n cantidad, leer numero, contardor=0
//PROC: recorrer n veces, validar si numero <0, contar
//SAL: mostrar la cantidad de numeros negativos
function ContarNumerosNegativos(){
    let n = parseInt(prompt("Ingrese cuantos números desea ingresar: "))
    let contador = 0, numero = 0
    for(let c = 0; c < n; c++){
        numero = parseFloat(prompt("Ingrese el número: "))
        if(numero < 0){
            contador++
        }
    }
    console.log("La cantidad de números negativos es: " + contador)
}
//Promedio de edades mayores y menores de edad
//ENT: leer n cantidad, leer edad, sumar edades, contadores=0
//PROC: recorrer n veces, validar si edad >=18 o <18, sumar y contar
//SAL: mostrar el promedio de mayores y menores de edad
function PromedioMayorMenoredad(){
    let n = parseInt(prompt("Ingrese numero de personas: "))   
    let edad= 0, sumamayor = 0, sumamenor = 0, contadormayor = 0, contadormenor = 0, promediomayor = 0, promediomenor = 0
    for(let c = 0; c < n; c++){
        edad = parseFloat(prompt("Ingrese la edad: "))
        if(edad>=18){
        sumamayor = sumamayor + edad
        contadormayor++
    }else if(edad<18){
        sumamenor = sumamenor + edad
        contadormenor++
    }
} promediomayor = sumamayor/contadormayor
  promediomenor = sumamenor/contadormenor
    console.log("El promedio de mayores de edad: " + promediomayor)
    console.log("El promedio de menores de edad: " + promediomenor)
}

//Mostrar la tabla de multiplicar de un número
//ENT: leer numero, contador de 1 a 10
//PROC: multiplicar numero por contador
//SAL: mostrar la tabla de multiplicar
function TablaMultiplicar(){
    let numero = parseInt(prompt("Ingrese un número : "))
    for(let c = 1; c <= 10; c++){
        multiplicacion = numero * c
        console.log(numero + " x " + c + " = " + multiplicacion)
    }
}

//Promedio de números pares e impares
//ENT: leer n cantidad, leer numero, sumar numeros, contadores=0
//PROC: recorrer n veces, validar si numero es par o impar, sumar y contar
//SAL: mostrar el promedio de numeros pares e impares
function PromedioParesImpares(){
    let n = parseInt(prompt("Ingrese la cantidad de números: "))   
    let numero = 0,sumapares = 0, sumaimpares = 0, contadorpares = 0, contadorimpares = 0, promediopares = 0, promedioimpares = 0
    for(let i = 0; i < n; i++){
        numero = parseInt(prompt("Ingrese un número: "))
        if(numero % 2 === 0){
            sumapares += numero
            contadorpares++
        }else{
            sumaimpares += numero
            contadorimpares++
        }
        promediopares = sumapares / contadorpares
        promedioimpares = sumaimpares / contadorimpares
    }
    console.log("El promedio de números pares es: " + promediopares)
    console.log("El promedio de números impares es: " + promedioimpares)
}

debugger
//PromedioMayorCalificaciones()
//ContarNumerosNegativos()
//PromedioMayorMenoredad()
//TablaMultiplicar()
PromedioParesImpares()
