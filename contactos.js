let misAmigos = ['Martin Arrieta','German Forero','Diego Florez', 'Jafet Rodriguez']

function agregarContactos(contacto) {
    misContactos.push(contacto)
}


function suprimir(contacto){
    let nuevaLista = misAmigos.filter((persona) => persona !== contacto )
    misAmigos = nuevaLista;
}


function mostrarAmigos(){
    misAmigos.sort()
    misAmigos.forEach((contacto) => console.log(contacto)); 
}
