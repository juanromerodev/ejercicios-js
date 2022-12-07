
function busqueda( numeroInsertado, numBuscado, pos , arreglo, cadenaSuma){

    //Sumamos al numero ingresado con los otros numeros del arreglo y verificamos 
    for (let x = pos + 1; x < arreglo.length; x++) {

        //Creamos variable que tome el valor sgte a analizar
        let num2 = arreglo[x];
        //Creamos variable que sume el valor insertado con num2
        let num3 = numeroInsertado + num2;
        //Actualizamos la cadena
        let cadenaSumaNueva = `${cadenaSuma} + ${num2}`;

        //Si encuentra, manda a imprimir la suma coincidente
        if (num3 == numBuscado){
            console.log(`${cadenaSumaNueva} = ${numBuscado}`);
        }else{
            //Si no Mandamos a analizar los numeros a una nueva rama menor, realizando una recursividad del metodo
            busqueda(num3,numBuscado,x,arreglo,cadenaSumaNueva)
        }
        

    }
}


//Creamos el arreglo donde se desea almacenar el ejercicio
let arregloBusqueda = [4,6,10,20, 30];

//Realizamos la validacion del codigo
do {
    let numero = parseInt(prompt("Ingresa el numero a buscar"));

    if(numero != null && typeof numero === 'number'){
        console.log(`El numero ${numero} coincide con las sgtes. sumas: `);

        //Realizamos la busqueda por cada valor de la variable
        for (let i = 0; i < arregloBusqueda.length; i++) {
            const a = arregloBusqueda[i];
            
            //Invocamos al metodo de busqueda
            busqueda(a,numero,i,arregloBusqueda,a);
        }
        
    }else{
        alert("No ha ingresado un valor correcto");
    } 
} while (numero = null);

