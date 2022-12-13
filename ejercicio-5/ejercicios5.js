numeroPrimo = (num) =>{
    let llave;

    if(num === 0 || num === 1 || num===4){
        llave = false
    } 

    for(i = 2; i<num/2;i++){
        if(num%i === 0){
            llave = false
        }
    }
    
    if (llave === true) {
        console.info(`${num} es un numero primo`);
    } else {
        console.info(`${num} no es un numero primo`);
    }
}

// 13) 
numeroParOImpar = (num) =>{
    if (typeof num !== 'number') {
        console.warn(`${num} no es un numero`);
    } else {
        if(num%2 === 0){
            console.info("par");
        }else{
            console.info("impar");
        }
    }
}

// 14) 
conversorGrados = (num,tipo)=>{
    (!tipo || !num)
    ? console.warn(`No se ingresaron los valores correctos en los campos`)
    :(typeof tipo !== 'string')
        ? console.warn(`${tipo} no es un String`)
        :(typeof num !== 'number')
            ? console.warn(`${num} no es un numero`)
            :(tipo === "C")
                ?console.log(`${(num*9/5)+32} C°`)
                :(tipo === "F") 
                    ? console.log(`${(num-32)*5/9} F°`)
                    : console.warn(`No ha ingresado un valor correcto`);
}


//Main
let key = true;

do {
    
    let opcion = parseInt(prompt(`BIENVENIDO AL MENU
    Ingrese el numero del ejercicio que desee evaluar:
        1.) BUSCADOR DE PRIMOS
        2.) PAR O IMPAR
        3.) CONVERSOR DE GRADOS
        4.) SALIR`));

    switch (opcion) {
        case 1:
            let numero1 = parseInt(prompt(`Ejercicio 12: BUSCADOR DE PRIMOS
            Ingrese un numero  a evaluar`));
            numeroPrimo(numero1);
            break;
        case 2:
            let numero2 = parseInt(prompt(`Ejercicio 13: PAR O IMPAR
            Ingrese un numero  a evaluar`));
            numeroParOImpar(numero2);
            break;
        case 3:
            let numero3 = parseInt(prompt(`Ejercicio 14: CONVERSOR DE GRADOS
            Ingrese un numero  a evaluar`));

            let tipo = prompt("Ingrese el tipo de grados a los que desee cambiar");

            conversorGrados(numero3,tipo);
            break;
        case 4:
            key = false;
            break;   
        default:
            console.log("Ingrese una de las opciones validas del menu");
            break;
    }

    if(key === true && (opcion>0 && opcion<4)){
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
