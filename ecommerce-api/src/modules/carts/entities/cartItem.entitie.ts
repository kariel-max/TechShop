import sequelize from '../../../database/sequelize';
import { DataTypes, Model } from 'sequelize';
import { Carrinho } from './cart.entitie';
import { Produto } from '../../products/entities/product.entitie';

export class CartItem extends Model {
    declare cart_id: number;
    declare product_id: number;
    declare quantity: number;
};

CartItem.init({
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Carrinho,
            key: "id"
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: "id"
        }
    },
    quantity: DataTypes.INTEGER
},{
    sequelize,
    tableName: 'produto_carrinho',
    modelName: 'produto_carrinho'
})