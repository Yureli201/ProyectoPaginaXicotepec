import dotenv from 'dotenv' //importar la libreria que nos dara acceso a las credenciales para la conexion de la base de datos

import { Sequelize } from 'sequelize' //importar la libreria de ORM que nos servira de intermediario para la manipulacion de los datos de la bd

dotenv.config({path: '.env'}) //Definimos la ruta de archivo donde se encuentren almacenados los valores de las credenciales de la conexion de la bd

const conexionBD = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USUARIO, process.env.BD_PASSWORD,
    {
        host: process.env.BD_DOMINIO,
        port: process.env.BD_PUERTO,
        dialect: "mysql"
    });     

export default conexionBD;
