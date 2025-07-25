import { DataTypes, Model } from 'sequelize';
import sequelize from "../Sequelize/sequelize";

export class IProduto extends Model {
    public id?: number;
    public name?: string;
    public preco?: number;
    public estoque?: number;
    public discount?: string | null;
    public rating?: number | null;
    public categoria?: string;
    public descricao?: string | null;
    public loja?: string;
    public tipo?: string;
    public image?: string;
    public precoOriginal?: string | null;
    public createdAt?: Date;
    public updatedAt?: Date;
}

IProduto.init({
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
    tableName: 'IProdutos',
    timestamps: true,
});
