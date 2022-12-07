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
        indice = toString(prompt('Ingrese la cantidad de caracteres para la nueva cadena'));
        recortarCadena(cadena, indice);
        break;
    case 3:
        cadena = prompt(`Ejercicio 3: DE UNA A VARIAS CADENAS
                        Ingrese una cadena (+2 caracteres) a utilizar`);
        separador = prompt('Ingrese el caracter separador');
        arregloSubCadenas("Hola que tal", separador);
        break;
    case 4:
        cadena = prompt(`Ejercicio 4: REPETIDOR DE CADENAS
                        Ingrese una cadena a utilizar`);
        nrep = yoString(prompt('Ingresa el numero de repeticiones que habra'));
        repetirCadena(cadena, nrep);
        break;
    default:
        console.log("Ingrese una de las opciones validas del menu");
        break;
}
