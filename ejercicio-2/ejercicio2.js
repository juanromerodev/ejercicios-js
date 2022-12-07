//1
const contadorCadena = (cadena="") => {
    (!cadena)
    ? console.warn(`No se ha ingresado ningun valor`)
    :(typeof cadena !== 'string')
        ? console.warn(`${cadena} no es un String`) 
        : console.info(`La cadena tiene ${cadena.length} caracteres`)
}

//2
const recortarCadena = (cadena = "", indice = undefined) => {
    (typeof cadena !== 'string')
    ? console.warn(`${cadena} no es un String`)
    :(typeof indice !== 'number')
        ? console.warn(`${indice} no es un numero`)
        : (!cadena || !indice)
            ? console.warn('Los valores de uno o mas campos no han sido declarados') 
            : console.infp(cadena.slice(0,indice))
}

//3
const arregloSubCadenas = (cadena = "", caracter = "") => {
    (typeof cadena !== 'string')
    ? console.warn(`${cadena} no es un String`)
    :(typeof caracter !== 'string') 
        ? console.warn(`${caracter} no es un String`)
        :(cadena.length === 1)
            ? console.warn(`${cadena} debe tener de dos a mas caracteres`)
            :(!cadena || !caracter)
                ? console.warn('Los valores de uno o mas campos no han sido declarados') 
                : console.info(cadena.split(caracter))
}

//4
const repetirCadena = (cadena = "", n = 0) =>{
    (typeof cadena !== 'string')
    ? console.warn(`${cadena} no es un String`)
    : (typeof n !== 'number')
        ? console.warn(`${n} no es un numero`)
        :(!cadena || !n)
            ? console.warn('Los valores de uno o mas campos no han sido declarados') 
            : console.log((cadena+" ").repeat(n))
}


//Main

let key = true;

do {
        
    let opcion = parseInt(prompt(`BIENVENIDO AL MENU
    Ingrese el numero del ejercicio que desee evaluar:
        1.) CONTADOR DE CARACTERES
        2.) CORTADOR DE CADENAS
        3.) DE UNA A VARIAS CADENAS
        4.) REPETIDOR DE CADENAS
        5.) SALIR`));

    switch (opcion) {
        case 1:
            cadena = prompt(`Ejercicio 1: CONTADOR DE CARACTERES
                            Ingrese una cadena a evaluar`);
            contadorCadena(cadena);
            break;
        case 2:
            cadena = prompt(`Ejercicio 2: CORTADOR DE CADENA
                            Ingrese una cadena a utilizar`);
            indice = parseInt(prompt('Ingrese la cantidad de caracteres para la nueva cadena'));
            recortarCadena(cadena, indice);
            break;
        case 3:
            cadena = prompt(`Ejercicio 3: DE UNA A VARIAS CADENAS
                            Ingrese una cadena (+2 caracteres) a utilizar`);
            separador = prompt('Ingrese el caracter separador');
            arregloSubCadenas(cadena, separador);
            break;
        case 4:
            cadena = prompt(`Ejercicio 4: REPETIDOR DE CADENAS
                            Ingrese una cadena a utilizar`);
            nrep = parseInt(prompt('Ingresa el numero de repeticiones que habra'));
            repetirCadena(cadena, nrep);
            break;
        case 5:
            key = false;
            break;
        default:
            alert("Ingrese una de las opciones validas del menu");
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
