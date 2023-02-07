let misAmigos = []

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    let contacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: {
            ciudad:ciudad,
            direccion: direccion
        }
    } 
    misAmigos.push(contacto);    
}

function actualizarContacto(id, nuevoNombres, nuevoApellidos, nuevoTelefono, nuevaCiudad, nuevaDireccion) {
    for (let i = 0; i < misAmigos.length; i++) {
        if (misAmigos[i].id === id) {
           misAmigos[i] = {
                id,
                nombres: nuevoNombres, 
                apellidos: nuevoApellidos,
                telefono : nuevoTelefono,
                ubicaciones: {
                    ciudad:  nuevaCiudad,
                    direccion: nuevaDireccion
                }
           } 
        }
    }
}

function eliminarContacto(id){
    let nuevaLista = misAmigos.filter((persona) => persona.id !== id  )
    misAmigos = nuevaLista;
}


function mostrarAmigos(){
    misAmigos.forEach((contacto) => console.log(contacto)); 
}


agregarContacto(0,"Erika","perez","3103965967","monteria","los cordobas")
agregarContacto(1,"jasmin","yerena","3103964578","Antioquia","Turbo")
agregarContacto(2,"Marcela","perez","3103965967","monteria","los cordobas")
eliminarContacto(1)
mostrarAmigos()
actualizarContacto(2,"Marcela","Benitez","3103965967","monteria","las florez")
mostrarAmigos()