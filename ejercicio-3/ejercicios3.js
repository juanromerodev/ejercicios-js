// 5
invertirCadena = (cadena="") => {
    (typeof cadena !== 'string')
    ? console.warn(`${cadena} no es un String`)
    : (!cadena)
        ? console.warn("No se han introducido valores")
        : console.info(cadena.split("").reverse().join(""))
}

// 6
contadorPalabra = (cadena, nombre) => {
    (typeof cadena !== 'string')
    ? console.warn(`${cadena} no es un String`)
    : (typeof nombre !== 'string')
        ? console.warn(`${nombre} no es un String`)
        :(!cadena || !nombre)
            ? console.warn("no se han introducido valores")
            : console.info(cadena.match(new RegExp(nombre,"ig")).length)
}

// 7 
function buscaPalindromos (cadena = ""){
    if (typeof cadena !== 'string') console.warn(`${cadena} no es un String`);
    if (cadena.length === 1) console.warn(`${cadena} debe tener de dos a mas caracteres`);

    //Convertimos la cadena en un arreglo de caracteres
    arreglo = cadena.toLowerCase().split("");
    //Acortamos el arreglo si es par
    if (arreglo.length % 2 !== 0) newArreglo.splice(arreglo.length % 2 + 1, 1);
    //Creamos una llave
    key = false;
    //Evaluamos la similitud de caracteres extremos
    for (let i = 0; i < (arreglo.length / 2); i++) {
        if(arreglo[i] === arreglo[arreglo.length - 1 - i]){
            key= true;
        }else{ //Si encuentra una exactitud se rompe el ciclo de evaluacion
            key = false;
            break;
        }
    }
    
    //En base a la veracidad de la llave, diremos si la cadena es o no un palindromo
    if(key === true){
        console.log(`${cadena} es un palindromo`);
    }else{
        console.log(`${cadena} no es un palindromo`);
    }
}

// 8 

function eliminaPatrones(patron = "", texto = ""){

    console.info(texto.replace(new RegExp(patron,"ig"),""))
}



//Main
let key = true;

do {
    
    let opcion = parseInt(prompt(`BIENVENIDO AL MENU
    Ingrese el numero del ejercicio que desee evaluar:
        1.) INVERTIR UNA CADENA
        2.) CONTADOR DE PALABRAS
        3.) BUSCADOR DE PALINDROMOS
        4.) ELIMINACION DE PATRONES
        5.) SALIR`));

    switch (opcion) {
        case 1:
            let cadena1 = prompt(`Ejercicio 5: INVERTIR UNA CADENA
                            Ingrese una cadena a utilizar`).toString();
            invertirCadena(cadena1);
            break;
        case 2:
            let cadena2 = prompt(`Ejercicio 6: CONTADOR DE PALABRAS
                            Ingrese una cadena a utilizar`);
            let palabra = prompt('Ingrese la palabra a evaluar').toString();
            contadorPalabra(cadena2, palabra);
            break;
        case 3:
            let cadena3 = prompt(`Ejercicio 7: BUSCADOR DE PALINDROMOS
                            Ingrese una cadena (+2 caracteres) a evaluar`).toString();
            buscaPalindromos(cadena3);
            break;
        case 4:
            //Creamos una llave
            let key1 = true;
            //Creamos un cadena que vaya coleccionando los datos insertados
            var conjuntoCadenas = "";

            do {
                //Realizamos el input
                let cadena = prompt(`Ejercicio 8: ELIMINACION DE PATRONES
                Ingrese la cadena a utilizar:`).toString();
                
                //Ingresamos la cadena del input en la cadena mayor
                if(conjuntoCadenas.length<1){
                    conjuntoCadenas = cadena;
                }else{
                    conjuntoCadenas = conjuntoCadenas + " , " + cadena;
                }
                
                //Decimos si se desea insertar mas cadenas
                let caracter = prompt(`Cadenas insertadas: ${conjuntoCadenas}
                ¿Desea añadir mas cadenas?
                Ingrese S (Si)| N (No)`).toUpperCase().charAt(0);

                if(caracter === 'S') key1 = true;
                if(caracter === 'N') key1 = false;
            } while (key1 === true);
            
            //Ingresamos el patron
            let patron = prompt('Ingrese el patron comun que desee eliminar').toString();

            //Procesamos el metodo
            eliminaPatrones(patron, conjuntoCadenas)
            
            break;
        case 5:
            key = false;
            break;    
        default:
            console.log("Ingrese una de las opciones validas del menu");
            break;
    }

    if(key === true && (opcion>0 && opcion<5)){
        cadena = prompt(`¿Desea salir del programa?
        Ingrese S (Si)| N (No)`).toUpperCase().charAt(0);

        if(cadena === 'S'){
            key = false;
        } else if (cadena === 'N'){

        }else{
            console.log("Valor no valido. Se procede a regresar al menu");
        }
    }

    if (key === false){
        alert("Gracias por revisar el programa :D");
    }

} while (key === true);