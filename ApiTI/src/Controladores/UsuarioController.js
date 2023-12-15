import Usuario from "../MODELOS/usuario.js";

const guardarNuevoUsuario = async(request, response)=>{
    const {nombreCompleto, correoElectronico,password,fechaDeNacimiento,genero,lugarProcedencia} = request.body //desestructuracion de objetos

    console.log(`Se esta intentando crear un nuevo usuario con los siguientes datos: 
                    NOMBRE: ${nombreCompleto}
                    CORREO ELECTRONICO: ${correoElectronico}
                    CONTRASEÑA: ${password}
                    FECHA DE NACIMIENTO: ${fechaDeNacimiento}
                    GENERO: ${genero}
                    PROCEDENCIA: ${lugarProcedencia}`);

    await Usuario.create(request.body)
    response.json({
        status:"Solicitud Recibida", 
        mensaje:"Se esta intentando Crear un nuevo USUARIO"})
}

const buscarUsuarioID = async(request, response)=>{
    const id = request.params.usuarioID
    console.log(`Se he solicitado la busqueda del USUARIO con ID: ${id}`)
    const usuarioBuscado = await Usuario.findByPk(id)  //SQL: SELECT * FROM usuario WHERE id = 'idEnviado'
    if(usuarioBuscado){
    response.json(usuarioBuscado);
    }
    else{
    response.json({
        status:"Usuario NO encontrado",
        mensaje:`El usuario con ID: ${id}, no ha sido encontrado`
    })
    }
}

const buscarUsuarioEmail = async(request, response)=>{
    const email = request.params.usuarioEmail
    console.log(`Se he solicitado la busqueda del USUARIO con Email: ${email}`)
    const usuarioBuscado = await Usuario.findOne({where: {correoElectronico: email}})  //SQL: SELECT * FROM usuario WHERE id = 'idEnviado'
    if(usuarioBuscado){
    response.json(usuarioBuscado);
    }
    else{
    response.json({
        status:"Usuario NO encontrado",
        mensaje:`El usuario con Email: ${email}, no ha sido encontrado`
    })
    }
}

const buscarTodos = async(request, response)=>{
    console.log("Se ha solicitado la busqueda de todos los usuarios existentes")
    const usuariosBuscados = await Usuario.findAll()

        if(usuariosBuscados){
    response.json(usuariosBuscados);
    }
    else{
    response.json({
        status:"Usuarios NO encontrados",
        mensaje:`Actualmente no hay ningun usuario registrado`
    })
    }
}

const actualizarUsuarioCompleto = async(request, response)=>{
    const id=request.params.usuarioID
    console.log(`Se ha solicitado la actualizacion general del USUARIO`)
    const {nombreCompleto, correoElectronico,password,fechaDeNacimiento,genero,lugarProcedencia, fechaUltimaVisita} = request.body //desestructuracion de objetos
    const UsuarioModificado = await Usuario.findByPk(id)
    if(UsuarioModificado){
        console.log("Usuario antes de ser modificado");
        console.log(UsuarioModificado);
        UsuarioModificado.nombreCompleto=nombreCompleto
        UsuarioModificado.correoElectronico=correoElectronico
        UsuarioModificado.password=password
        UsuarioModificado.fechaDeNacimiento=fechaDeNacimiento
        UsuarioModificado.genero=genero
        UsuarioModificado.lugarProcedencia=lugarProcedencia

        UsuarioModificado.save()
        console.log("Usuario despues de ser modificado")
        console.log(UsuarioModificado);
        response.json(UsuarioModificado);
        
        }
        else{
        response.json({
            status:"Usuario NO encontrado",
            mensaje:`El usuario que deseas modificar no existe`
        })
        }
}

const actualizarUsuarioDatoEspecifico = async (request, response) => {
    const usuarioID = request.params.usuarioID;
    const atributo = request.params.nombreAtributo;
    const valorAtributo = request.params.valorAtributo;

    console.log(`Se ha solicitado una actualización específica del USUARIO: ${usuarioID} del atributo ${atributo} con el nuevo valor de ${valorAtributo}`);

    const usuarioModificado = await Usuario.findByPk(usuarioID);

    if (usuarioModificado) {
        console.log("Usuario antes de ser modificado:");
        console.log(usuarioModificado);

        switch (atributo) {
            case 'nombreCompleto':
                usuarioModificado.nombreCompleto = valorAtributo;
                break;
            case 'correoElectronico':
                usuarioModificado.correoElectronico = valorAtributo;
                break;
            case 'password':
                usuarioModificado.password = valorAtributo;
                break;
            case 'fechaDeNacimiento':
                usuarioModificado.fechaDeNacimiento = valorAtributo;
                break;
            case 'genero':
                usuarioModificado.genero = valorAtributo;
                break;
            case 'lugarProcedencia':
                usuarioModificado.lugarProcedencia = valorAtributo;
                break;
            case 'fechaUltimaVisita':
                usuarioModificado.fechaUltimaVisita = valorAtributo;
                break;
            default:
                return response.json({
                    status: "Error de la actualización parcial",
                    mensaje: `El campo que deseas modificar no es parte de los datos del Usuario`
                });
        }

        await usuarioModificado.save();

        console.log("Usuario después de ser modificado:");
        console.log(usuarioModificado);

        response.json(usuarioModificado);
    } else {
        response.json({
            status: "Usuario NO encontrado",
            mensaje: `El usuario que deseas modificar no existe`
        });
    }
}


const borrarUsuario = async(request, response)=>{
    const id = request.params.usuarioID
    console.log(`Se ha eliminado al USUARIO con el ID: ${id}`)
    const usuarioBuscado = await Usuario.findByPk(id)  //SQL: SELECT * FROM usuario WHERE id = 'idEnviado'
    if(usuarioBuscado){
        Usuario.destroy({
            where: {
                id: id
            }
        });
        response.json({
            status:"Solicitud Recibida", 
            mensaje:`Se ha eliminado al USUARIO con el ID: ${id}`})
    }
    else{
        response.json({
            status:"Usuario NO encontrado",
            mensaje:`El usuario con ID: ${id}, no ha sido encontrado`
        })
    }
    
}

export {guardarNuevoUsuario, buscarUsuarioID, buscarUsuarioEmail, buscarTodos, actualizarUsuarioCompleto, actualizarUsuarioDatoEspecifico, borrarUsuario}