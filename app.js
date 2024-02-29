//PROYECTO:
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    /*
    console.log (typeof(numeroDeUsuario));
    console.log (numeroDeUsuario);
    console.log (typeof(numeroSecreto));
    console.log (numeroSecreto);
    console.log (numeroDeUsuario === numeroSecreto);
    */
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`);
        //Reiniciar juego:
            document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto el numero secreto

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');            
        }
        else{
            asignarTextoElemento('p','el numero secreto es mayor');            
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value= '';


}

function GenerarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log("numero generado: "+numeroGenerado);
    console.log("lista de numero generado: "+listaNumerosSorteados);
    //Si ya sortamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }
    else{
        //Si el numero generado esta incluido en la lista hacemos una operacion, si no hacemos otra.
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto(); 
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }       
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero entre el 1 y el 10`);
    numeroSecreto=GenerarNumeroSecreto();
    intentos = 1; 
}


//
  //
    //
      //
        //FUNCION PARA REINICIAR JUEGO:
      //
    //
  //
//
function reiniciarJuego(){
    //impiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de intentos
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el numero de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');  
}

condicionesIniciales();





