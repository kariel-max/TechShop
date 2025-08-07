import { Model, DataTypes } from "sequelize";
import sequelize from '../../../database/sequelize';

export class Usuario extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare senha: string;
};

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true
    },
    number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true,
    },


},{
    sequelize,
    modelName:'Usuario',
});