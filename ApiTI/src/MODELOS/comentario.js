import { DataTypes } from "sequelize";
import Usuario from "./usuario.js";
import RecursoTuristico from "./recursoturistico.js";
import conexionBD from "../config/bd.js";

const Comentario = conexionBD.define("comentario", {
        mensaje: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        usuarioID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuario,
                key: 'id',  
            },
        },
        recursoTuristicoID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: RecursoTuristico,
                key: 'id',  
            },
        },
    });
    
    Comentario.belongsTo(Usuario, { foreignKey: 'usuarioID' });
    Comentario.belongsTo(RecursoTuristico, { foreignKey: 'recursoTuristicoID' });
    
    export default Comentario;
    