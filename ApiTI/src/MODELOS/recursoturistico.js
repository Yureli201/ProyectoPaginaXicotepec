import { DataTypes } from "sequelize";
import conexionBD from "../config/bd.js";

const RecursoTuristico = conexionBD.define("recursoTuristico", {
    nombreRecurso:{
        type: DataTypes.STRING, //ORM ->VARCHAR()
        allowNull : false,
        unique : true
    },
    imagen:{
        type: DataTypes.STRING, //ORM ->VARCHAR()
        allowNull : false,
        unique : true
    },
    descripcion: {
        type: DataTypes.TEXT('long'),  // Especifica una longitud, por ejemplo, 'long'
        allowNull: false
    },
    calificacion:{
        type: DataTypes.FLOAT,
        validate: {
            min: 0,
            max: 5,
        },
    },
    categoria:{
        type: DataTypes.ENUM("Gastronomia","Hotel","Restaurante","Lugar Turistico","Festividad")
    
    },
    telefono:{
        type: DataTypes.NUMBER
    },
    direccion:{
        type: DataTypes.STRING, //ORM ->VARCHAR()
    },
    correo:{
        type: DataTypes.STRING
    },
    redesSociales:{
        type: DataTypes.STRING
    }

})

export default RecursoTuristico