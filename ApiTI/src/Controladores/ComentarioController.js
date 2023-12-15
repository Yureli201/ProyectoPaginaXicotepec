import Comentario from "../MODELOS/comentario.js"

const guardarNuevoComentario = async (request, response)=>{
    const {mensaje, usuarioID, recursoTuristicoID} = request.body

    console.log(`Se esta intentando crear un nuevo comentario. Con los siguientes datos:
        Usuario: ${usuarioID}
        Mensaje: ${mensaje}
        Lugar: ${recursoTuristicoID}
    `);
    await Comentario.create(request.body)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se esta intentando crear un nuevo comentario`})
}

const buscarComentarioId = async (request, response)=>{
    const idComentario = request.params.comentarioID
    console.log(`Se he solicitado la busqueda del COMENTARIO: ${idComentario}`) 
    const comentarioBuscado = await Comentario.findByPk(idComentario)  //SQL: SELECT * FROM usuario WHERE id = 'idEnviado'

    if(comentarioBuscado){
        response.json(comentarioBuscado);
        }
    else{
        response.json({
            status:"Usuario NO encontrado",
            mensaje:`El usuario con ID: ${idComentario}, no ha sido encontrado`
        })
    }

    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se he solicitado la busqueda del COMENTARIO: ${request.params.comentarioID}`})
}

const buscarComentarioRecurso = async(request, response)=>{
    const recurso = request.params.recurso
    console.log(`Se he solicitado la busqueda de los comentarios del recurso ${recurso}`)
    const comentariosBuscados = await Comentario.findAll({where: {recursoTuristicoID: recurso}})  //SQL: SELECT * FROM usuario WHERE id = 'idEnviado'
    if(comentariosBuscados){
    response.json(comentariosBuscados);
    }
    else{
    response.json({
        status:"Comentarios NO encontrados",
        mensaje:`Actualmente no hay comentarios creados en el recurso ${recurso}`
    })
    }
}

const buscarComentarios = async (request, response)=>{
    console.log(`Se ha solicitado la busqueda de todos los comentarios`)
    const comentariosBuscados = await Comentario.findAll()

    if(comentariosBuscados){
        response.json(comentariosBuscados);
        }
        else{
        response.json({
            status:"Comentarios NO encontrados",
            mensaje:`Actualmente no hay ningun comentario registrado`
        })
        }
}

const actualizarComentario = async (request, response)=>{
    const idComentario = request.params.comentarioID
    console.log(`Se ha solicitado la actualizacion general del COMENTARIO`)
    const {mensaje, usuarioID, recursoTuristicoID} = request.body
    const comentarioModificado = await Comentario.findByPk(idComentario)

    if(comentarioModificado){
        console.log("Comentario antes de ser modificado");
        console.log(comentarioModificado);
        comentarioModificado.mensaje=mensaje
        comentarioModificado.usuarioID=usuarioID
        comentarioModificado.recursoTuristicoID=recursoTuristicoID

        comentarioModificado.save()
        console.log("Usuario despues de ser modificado")
        console.log(comentarioModificado);
        response.json(comentarioModificado);
        
    }
    else{
        response.json({
            status:"Comentario NO encontrado",
            mensaje:`El comentario que deseas modificar no existe`
        })
        }
}

const borrarComentario = async (request, response)=>{
    const idComentario = request.params.ComentarioID
    console.log(`Se ha eliminado al COMENTARIO con el ID: ${idComentario}`)
    const comentarioBuscado = await Comentario.findByPk(idComentario)

    if(comentarioBuscado){
        Comentario.destroy({where:{id:idComentario}});
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se ha eliminado al COMENTARIO con el ID: ${idComentario}`})
    }
    else{
        response.json({
            status:"Comentario NO encontrado",
            mensaje:`El comentario que deseas eliminar no existe`
        })
        }
}


export {guardarNuevoComentario, buscarComentarioId, buscarComentarioRecurso, buscarComentarios, actualizarComentario, borrarComentario}


