export interface recurso {
    id?:number,
    nombreRecurso:string,
    imagen:File,
    descripcion:string,
    calificacion:number,
    categoria:string,
    telefono?: number | undefined,
    direccion?:string,
    correo?:string,
    redesSociales?:string
}

export interface comentario{
    id?:string,
    mensaje:string,
    recursoTuristicoID:string,
    usuarioID:string,
}

export interface usuario{
    id?:string,
    nombreCompleto:string,
    correoElectronico:string,
    password:string,
    fechaDeNacimiento:string,
    genero:string,
    lugarProcedencia:string,
}