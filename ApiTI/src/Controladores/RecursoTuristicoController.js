import { request } from "express";
import RecursoTuristico from "../MODELOS/recursoturistico.js";
import Comentario from "../MODELOS/comentario.js";


const crearRecursoTuristico= async (request, response)=>{
    const {nombreRecurso, imagen, descripcion,calificacion,categoria,linkMapa,telefono,direccion,correo,redesSociales} = request.body //desestructuracion de objetos

    console.log(`Se esta intentando crear un nuevo usuario con los siguientes datos: 
                    NOMBRE: ${nombreRecurso}
                    IMAGEN : ${imagen}
                    DESCRIPCIÓN: ${descripcion}
                    CALIFICACIÓN: ${calificacion}
                    CATEGORIA: ${categoria}
                    TELEFONO: ${telefono}
                    LINK GOOGLE MAPS: ${linkMapa}
                    DIRECCIÓN: ${direccion}
                    CORREO: ${correo}
                    REDES SOCIALES: ${redesSociales}`);

    await RecursoTuristico.create(request.body)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:"Se esta intentando Crear un nuevo USUARIO"})
}

const buscarRecurso = async(request, response) =>{
    const id= request.params.recursoID
    const recursoBuscado = await RecursoTuristico.findByPk(id)

    if(recursoBuscado){
        response.json(recursoBuscado)
    }
    else{
        response.json({
            status:"Recurso NO encontrado",
            mensaje:`El recurso con ID: ${id}, no ha sido encontrado`
        })
    }
}

const buscarRecursoCategoria = async(request, response)=>{
    const categoria = request.params.categoria
    console.log(`Se he solicitado la busqueda de los recursos de la categoria ${categoria}`)
    const recursosBuscados = await RecursoTuristico.findAll({where: {categoria: categoria}})  //SQL: SELECT * FROM usuario WHERE id = 'idEnviado'
    if(recursosBuscados){
    response.json(recursosBuscados);
    }
    else{
    response.json({
        status:"Recursos no encontrados",
        mensaje:`Los decursos de la categoria ${categoria} no han sido encontrados`
    })
    }
}

const buscarTodosRecursos = async(_request, response) =>{
    const recursosBuscados = await RecursoTuristico.findAll()
    if(recursosBuscados){
    response.json(recursosBuscados)
    }
    else{
        response.json({
            status:"Recursos NO encontrados",
            mensaje:`Actualmente no hay ningun recurso registrado`
        })
    }
}

const actualizarRecurso = async(request, response) =>{
    const id= request.params.recursoID
    const {nombreRecurso, imagen, descripcion,calificacion,categoria,linkMapa,telefono,direccion,correo,redesSociales} = request.body //desestructuracion de objetos
    const recursoModificado = await RecursoTuristico.findByPk(id)

    if(recursoModificado){
    console.log("Recurso antes de ser modificado")
    console.log(recursoModificado)
        recursoModificado.nombreRecurso = nombreRecurso
        recursoModificado.imagen =imagen
        recursoModificado.descripcion = descripcion
        recursoModificado.calificacion = calificacion
        recursoModificado.categoria = categoria
        recursoModificado.telefono = telefono
        recursoModificado.direccion = direccion
        recursoModificado.correo = correo
        recursoModificado.redesSociales = redesSociales

        recursoModificado.save()

        console.log("Usuario despues de ser modificado")
        console.log(recursoModificado)
        response.json(recursoModificado)
    }
    else{
        response.json({
            status:"Recurso NO encontrado",
            mensaje:`El recurso que quiere modificar no existe`
        })
    }
}

const borrarRecurso = async(request, response) =>{
    const id= request.params.recursoID
    const recursoBuscado = await RecursoTuristico.findByPk(id)

    if(recursoBuscado){
        RecursoTuristico.destroy({where:{id:id}})
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se ha eliminado al RECURSO con el ID: ${id}`})
    }
    else{
        response.json({
            status:"Recurso NO encontrado",
            mensaje:`El recurso que deseas eliminar no existe`
        })
        }


}

export {crearRecursoTuristico, buscarRecurso,buscarRecursoCategoria, buscarTodosRecursos,actualizarRecurso, borrarRecurso}