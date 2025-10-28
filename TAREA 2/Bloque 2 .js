//Contar caracteres de varias frases publicitarias
//ENT: ingresar arreglo de frases
//PROC: recorrer el arreglo y contar los caracteres de cada frase
//SAL: mostrar la cantidad de caracteres de cada frase
function ContarCaracterFrase(){
    let frases = ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
    for(let c=0 ; c<frases.length; c++){
        fraseorig = frases[c]
        let contador = 0
        for(let i=0; i<fraseorig.length; i++){
            contador++
        }
    console.log('"'+fraseorig+ '" → '+ contador + " caracteres")
}
}

//Contar apariciones de una vocal en cada título
//ENT: ingresar arreglo de titulos
//PROC: recorrer el arreglo y contar las apariciones de la vocal en cada titulo
//SAL: mostrar la cantidad de apariciones de la vocal en cada titulo
function ContarVocalTitulo(){
    let Titulos = ["Programación avanzada", "Desarrollo web","Análisis de datos"]
    for(let c=0; c < Titulos.length; c++){
        tituloorig = Titulos[c]
        let contador=0
        let vocal = "a"
        for(let i=0; i<tituloorig.length;i++){
            if(tituloorig[i]===vocal){
                contador++
            }
        }
        console.log('"'+ tituloorig +'" → '+contador+ ' veces');
    }
}

//Invertir los nombres de varios productos
//ENT: ingresar arreglo de nombres de productos
//PROC: recorrer el arreglo y invertir cada nombre de producto
//SAL: mostrar el nombre original y el invertido de cada producto
function InvertirVariosNombres() {
    let productos = ["Laptop", "Celular", "Tablet"];
    for (let c = 0; c < productos.length; c++) {
        let productoorig = productos[c];
        let invertido = "";
        for (let i = productoorig.length - 1; i >= 0; i--) {
            invertido = invertido +productoorig[i];
        }
        console.log('"'+ productoorig +'" → "'+invertido+'"');
    }
}

//Comparar longitudes de nombres de ciudades
//ENT: ingresar arreglo de nombres de ciudades
//PROC: recorrer el arreglo y comparar las longitudes de los nombres
//SAL: mostrar la ciudad con más letras
function CompararLongitudCiudades(){
    let ciudades = ["Milagro", "Guayaquil","Quito","Cuenca"]
    let ciudadmayor = ciudades[0]
    for(let c=1; c<ciudades.length; c++){
        if(ciudades[c].length>ciudadmayor.length){
            ciudadmayor=ciudades[c]
        }
    }
    console.log("La ciudad con mas letras es "+ ciudadmayor)
}

//Obtener iniciales de varios cargos profesionales
//ENT: ingresar arreglo de cargos
//PROC: recorrer el arreglo y obtener las iniciales de cada cargo
//SAL: mostrar el cargo original y sus iniciales
function InicialesVariosCargos(){
    let cargo = ["Director General Academico", "Jefe De Laboratorio", "Asistente Administrativa"]
    for(let c=0; c<cargo.length; c++){
        let cargoorig = cargo[c]
        let iniciales = ""
        if(iniciales[0] !== ""){
            iniciales=iniciales+cargoorig[0]
        }
        for(let i=1; i<cargoorig.length; i++){
            if(cargoorig[i-1]=== " " && cargoorig[i] !== " "){
                iniciales=iniciales + "." + cargoorig[i]
            }
        }
        console.log('"'+ cargoorig +'" → "'+iniciales+'"')
    }
}
debugger
//ContarCaracterFrase()
//ContarVocalTitulo()
//InvertirVariosNombres()
//CompararLongitudCiudades()
InicialesVariosCargos()