import Express from "express";
import {guardarNuevoComentario, buscarComentarioId, buscarComentarioRecurso, buscarComentarios, actualizarComentario, borrarComentario} from "../Controladores/ComentarioController.js"


const router= Express.Router();

router.post('/crearC', guardarNuevoComentario)

router.get('/buscar/:comentarioID',buscarComentarioId)

router.get('/buscar/recurso/:recurso',buscarComentarioRecurso)

router.get('/buscarTodos', buscarComentarios)

router.put('/actualizar/:comentarioID', actualizarComentario)

/*router.patch('/actualizar/:ComentarioID/atributo/:nombreAtributo/nuevoValor/:valorAtributo', (request, response)=>{
    console.log(`Se he solicitado una actualizacion especifica del Comentario con el ID: ${request.params.ComentarioID} atributo ${request.params.nombreAtributo} con el nuevo valor de ${request.params.valorAtributo}`)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se he solicitado una actualizacion especifica del Comentario con el ID: ${request.params.ComentarioID} atributo ${request.params.nombreAtributo} con el nuevo valor de ${request.params.valorAtributo}`})
})*/

router.delete('/borrar/:ComentarioID', borrarComentario)


export default router
