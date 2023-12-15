import Express from 'express';
import {guardarNuevoUsuario, buscarUsuarioID, buscarUsuarioEmail, buscarTodos, actualizarUsuarioCompleto, borrarUsuario, actualizarUsuarioDatoEspecifico} from '../Controladores/UsuarioController.js';

const router= Express.Router();

router.post('/crear', guardarNuevoUsuario)

router.get('/buscar/:usuarioID', buscarUsuarioID)

router.get('/buscar/email/:usuarioEmail', buscarUsuarioEmail)

router.get('/buscarTodos', buscarTodos)

router.put('/actualizar/:usuarioID', actualizarUsuarioCompleto)

router.patch('/actualizar/:usuarioID/atributo/:nombreAtributo/nuevoValor/:valorAtributo', actualizarUsuarioDatoEspecifico)

router.delete('/borrar/:usuarioID', borrarUsuario)

export default router

