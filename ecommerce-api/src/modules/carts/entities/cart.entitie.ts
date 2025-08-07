import { DataTypes, Model } from "sequelize";
import sequelize from "../../../database/sequelize";

export class Carrinho extends Model {
    declare id: number;
    declare user_id: number;
}

Carrinho.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, { 
    sequelize,
    modelName: "Carrinho",
    timestamps: true
})