import { Model, DataTypes } from "sequelize";
import sequelize from '../../../database/sequelize';
import {ICarrinho} from "../../carts/entities/cart.entities";
import {IOrder} from "../../orders/entities/order.entitie";

export class IUsuario extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare senha: string;
};

IUsuario.init({
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
    modelName:'IUsuario',
});

IUsuario.hasMany(ICarrinho, {foreignKey: 'user_id'})
IUsuario.hasMany(IOrder, {foreignKey: 'user_id'})

export default IUsuario;