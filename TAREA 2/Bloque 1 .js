//Contar caracteres de una frase publicitaria
//ENT: leer frase, contar caracteres
//PROC: recorrer la frase y contar los caracteres
//SAL: mostrar la cantidad de caracteres
function ContarCaracteres(){
    let frase = prompt("Ingrese una frase:")
    let contador = 0
    for(let i=0; i<frase.length; i++){
        contador++
    }
    console.log("La frase tiene "+ contador + " caracteres.")
}

//Contar apariciones de una vocal en un título
//ENT: leer titulo, leer vocal, contador=0
//PROC: recorrer el titulo y contar las apariciones de la vocal
//SAL: mostrar la cantidad de apariciones de la vocal
function ContarVocal(){
    let titulo = "Programación avanzada"
    let vocal = "a"  
    let contador = 0
    for(let c=0; c < titulo.length; c++){
        if(titulo[c]===vocal){
           contador++
        }
    }
    console.log("La vocal " + vocal + " aparece " + contador + " veces")
}

//Invertir el nombre de un producto
//ENT: leer nombre del producto
//PROC: recorrer el nombre del producto de atrás hacia adelante
//SAL: mostrar el nombre invertido
function InvertirNombreProduct(){
    let producto = prompt("Ingrese el nombre del producto:")
    let aux=""
    for(let c=producto.length-1; c>=0;c--){
        aux=aux + producto[c]
    }
    console.log(aux)
}

//Comparar nombres de ciudades por su longitud
//ENT: leer nombre de dos ciudades
//PROC: comparar la longitud de los nombres
//SAL: mostrar la ciudad con más letras
function CompararLongitudCiudad(){
    let ciudad1 = prompt("Ingrese el nombre de la primera ciudad:")
    let ciudad2 = prompt("Ingrese el nombre de la segunda ciudad:")
    if(ciudad1.length>ciudad2.length){
        console.log("La palabra " + ciudad1 + " tiene mas letras")
    }else if(ciudad2.length>ciudad1.length){
        console.log("La palabra " + ciudad2 + " tiene mas letras")
    }else{
        console.log("Ambas ciudades tiene las misma cantidad de letras")
    }
}

//Obtener iniciales de un cargo profesional
//ENT: leer nombre del cargo
//PROC: recorrer el nombre del cargo y obtener las iniciales
//SAL: mostrar las iniciales del cargo
function InicialesCargo(){
    let cargo = prompt("Ingrese el cargo:")
    let iniciales=""
    if(iniciales[0] !== ""){
        iniciales=iniciales+cargo[0]
    }
    for(let c=1; c<cargo.length; c++){
        if(cargo[c-1]=== " " && cargo[c] !== " "){
            iniciales=iniciales + "." + cargo[c]
        }
    }
    console.log(iniciales)
}
debugger
//ContarCaracteres()
//ContarVocal() 
//InvertirNombreProduct()
//CompararLongitudCiudad()
InicialesCargo()