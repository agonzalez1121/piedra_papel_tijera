const mostrarEleccionComputadora = document.getElementById('eleccion-Computadora');
const mostrarEleccionUsuario = document.getElementById('eleccion-Usuario');
const mostrarResultado = document.getElementById('respuesta');
const posiblesRespuestas = document.querySelectorAll('button');

let eleccionComputadora;
let eleccionUsuario;
let numeroRandom;
let opcion;

const pa = 'piedra';
const pl = 'papel';
const tj = 'tijeras';

posiblesRespuestas.forEach(respuesta => respuesta.addEventListener('click', (evento)=>{
            eleccionUsuario = evento.target.id ;
            mostrarEleccionUsuario.innerHTML = eleccionUsuario;
            generarEleccionComputadora();
            generarRespuesta();
        }

    )   
)

function generarEleccionComputadora() {
    numeroRandom = Math.floor(Math.random()*3);
    console.log(numeroRandom);
    
    switch (numeroRandom) {
        case 0:
            eleccionComputadora = pa;
            break;
        case 1:
            eleccionComputadora= pl ;
            break;
        case 2:
            eleccionComputadora = tj;
            break;
            
    }
    mostrarEleccionComputadora.innerHTML = eleccionComputadora;
}
 
function generarRespuesta(){
    if (eleccionComputadora === eleccionUsuario) {
        opcion = 'Empate';
    } 
    if(eleccionComputadora == pa && eleccionUsuario == pl){
        opcion = 'El usuario';
    }
    if(eleccionComputadora == pa && eleccionUsuario == tj){
        opcion = 'La computadora';
    } 
    if(eleccionComputadora == pl && eleccionUsuario == pa){
        opcion = 'La computadora';
    }
    if(eleccionComputadora == pl && eleccionUsuario == tj){
        opcion = 'El usuario';
    }
    if(eleccionComputadora == tj && eleccionUsuario == pa){
        opcion = 'El usuario ';
    }
    if(eleccionComputadora == tj && eleccionUsuario == pl){
        opcion = 'La computadora';

    }
    mostrarResultado.innerHTML = opcion;
    
}



