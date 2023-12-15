import Express from "express";
import { crearRecursoTuristico, buscarRecurso, buscarRecursoCategoria, buscarTodosRecursos,actualizarRecurso, borrarRecurso } from "../Controladores/RecursoTuristicoController.js";


const router = Express.Router();

router.post('/crear', crearRecursoTuristico)

router.get('/buscar/:recursoID', buscarRecurso)

router.get('/buscar/categoria/:categoria', buscarRecursoCategoria)

router.get('/buscarTodos', buscarTodosRecursos)

router.put('/actualizar/:recursoID', actualizarRecurso)

router.delete('/borrar/:recursoID', borrarRecurso)
/*
router.get('/buscar/:comentarioID', (request, response)=>{
    console.log(`Se he solicitado la busqueda del COMENTARIO: ${request.params.comentarioID}`) 
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se he solicitado la busqueda del COMENTARIO: ${request.params.comentarioID}`})
})


router.get('/buscarTodos', (request, response)=>{
    console.log(`Se ha solicitado la busqueda de todos los comentarios`)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se ha solicitado la busqueda de todos los comentarios`})
})

router.put('/actualizar/:comentarioID', (request, response)=>{
    console.log(`Se ha solicitado la actualizacion general del COMENTARIO con el ID: ${request.params.comentarioID}`)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se ha solicitado la actualizacion general del COMENTARIO con el ID: ${request.params.comentarioID}`})
})

router.patch('/actualizar/:ComentarioID/atributo/:nombreAtributo/nuevoValor/:valorAtributo', (request, response)=>{
    console.log(`Se he solicitado una actualizacion especifica del Comentario con el ID: ${request.params.ComentarioID} atributo ${request.params.nombreAtributo} con el nuevo valor de ${request.params.valorAtributo}`)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se he solicitado una actualizacion especifica del Comentario con el ID: ${request.params.ComentarioID} atributo ${request.params.nombreAtributo} con el nuevo valor de ${request.params.valorAtributo}`})
})

router.delete('/borrar/:ComentarioID', (request, response)=>{
    console.log(`Se ha eliminado al COMENTARIO con el ID: ${request.params.ComentarioID}`)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:`Se ha eliminado al COMENTARIO con el ID: ${request.params.ComentarioID}`})
})*/


export default router
