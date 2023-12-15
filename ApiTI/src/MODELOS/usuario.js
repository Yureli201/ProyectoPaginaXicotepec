import { DataTypes } from "sequelize";
import conexionBD from "../config/bd.js";

const Usuario = conexionBD.define("usuario", {
    nombreCompleto:{
    type: DataTypes.STRING, //ORM ->VARCHAR()
    allowNull : false
    },
    correoElectronico:{
        type: DataTypes.STRING, //ORM ->VARCHAR()
        allowNull : false,
        unique : true
    },
    password:{
        type: DataTypes.STRING, //ORM ->VARCHAR()
        allowNull : false
    },

    fechaDeNacimiento:{
        type: DataTypes.DATEONLY, //ORM ->VARCHAR()
        allowNull : false
    },
    genero:{
        type: DataTypes.ENUM("M","F", "N/B"), //ORM ->VARCHAR()
        allowNull : false,
        defaultValue:"N/B"
        },
    lugarProcedencia:{
        type: DataTypes.STRING
    }
})

export default Usuario;