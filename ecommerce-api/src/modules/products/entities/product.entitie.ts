import { DataTypes, Model } from 'sequelize';
import sequelize from "../../../database/sequelize";

export class Produto extends Model {
    declare id: number;
    declare name: string;
    declare preco: number;
    declare estoque: number;
    declare discount: string | null;
    declare rating: number | null;
    declare categoria: string;
    declare descricao: string | null;
    declare loja: string;
    declare tipo?: string;
    declare image: string;
    declare precoOriginal: string | null;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Produto.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    discount: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    loja: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precoOriginal: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    tableName: 'Produtos',
    timestamps: true,
});

