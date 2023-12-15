import express from 'express'
import cors from 'cors';
import generalRoutes from './routes/generalRoutes.js'
import usuarios from './routes/usuarios.js'
import comentarios from './routes/comentarios.js'
import recursosTuristicos from './routes/recursosTuristicos.js'
import conexionBD from './config/bd.js'
import Usuario from './MODELOS/usuario.js'
import Comentario from './MODELOS/comentario.js'
import RecursoTuristico from './MODELOS/recursoturistico.js'


const port= 3000
const apiServe = express()
apiServe.use(cors()); 
apiServe.use(express.json()) //Esta configuracion permite al API utilizar JSON como mecanismo de comunicacion entre los datos que recibe y los que envia


apiServe.use("/", generalRoutes)
apiServe.use("/usuarios", usuarios)
apiServe.use("/comentarios", comentarios)
apiServe.use("/recurso", recursosTuristicos)

try {
    console.log("INTENTANDO CONECTAR A LA BASE DE DATOS...")
    await conexionBD.authenticate();
    console.log("CONEXION A LA BASE DE DATOS EXITOSA...!")
    console.log("SINCRONIZANDO LOS MODELOS LÓGICOS DE LA API CON LAS TABLAS FISICAS DE LA BD...")
    conexionBD.sync()
    console.log("LA BASE DE DATOS SE HA SINCRONIZADO Y ESTA LISTA PARA OPERAR LOS DATOS...!")
} catch (error) {
    console.log("HA OCURRIDO UN ERROR CON LA CONEXION A LA BD")
}

apiServe.listen(port, ()=> {
    console.log("La API ha sido iniciada"),
    console.log(`La API se encuentra escuchando en el puerto: ${port}`)
})
