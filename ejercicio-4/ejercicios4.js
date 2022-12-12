//9

numeroAleatorio = () =>{
    do{
        var num = Math.round(Math.random()*1000);
    }while(num<=500 || num>=601);
    
    console.info(`El numero aleatorio es ${num}`)
};

//10

buscaCapicuas = (numero = 0) => {

    if(typeof numero !== 'number'){
        console.warn(`${numero} no es un numero`);
    }else{
        let newArreglo = numero.toString().split("");
        if (newArreglo.length % 2 !== 0) newArreglo.splice(newArreglo.length % 2 + 1, 1);
        let valor = false;
    
        for (let i = 0; i < (newArreglo.length / 2); i++) {
            if(newArreglo[i] === newArreglo[newArreglo.length - 1 - i]){
                valor= true;
            }else{
                valor = false;
                break;
            }
        };
    
        console.info(valor);
    }

};

//11

factorial = (numero) => {
    if (typeof numero !== 'number') {
        console.warn(`${numero} no es un numero`);
    } else {
        let factorial = 1;
        for(i = numero; i>1;i--){
            factorial *= i;
        }
        console.info(`La factorial de ${numero} es ${factorial}`)
    }
};


//Main
let key = true;

do {
    
    let opcion = parseInt(prompt(`BIENVENIDO AL MENU
    Ingrese el numero del ejercicio que desee evaluar:
        1.) NUMERO ALEATORIO
        2.) BUSCADOR DE CAPICUAS
        3.) NUMERO FACTORIAL
        4.) SALIR`));

    switch (opcion) {
        case 1:
            numeroAleatorio();
            break;
        case 2:
            let numero1 = parseInt(prompt(`Ejercicio 10: BUSCADOR DE CAPICUAS
            Ingrese un numero  a evaluar`));
            buscaCapicuas(numero1);
            break;
        case 3:
            let numero2 = parseInt(prompt(`Ejercicio 11: NUMERO FACTORIAL
            Ingrese un numero  a evaluar`));
            factorial(numero2);
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