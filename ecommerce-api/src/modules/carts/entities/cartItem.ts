import sequelize from '../../../database/sequelize';
import { DataTypes, Model } from 'sequelize';

export class CartItem extends Model {
    declare cart_id: number;
    declare product_id: number;
    declare quantity: number;
};

CartItem.init({
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
},{
    sequelize,
    tableName: 'produto_order'
})