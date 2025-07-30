import { DataTypes, Model} from "sequelize"
import sequelize from "../../../database/sequelize";

export class OrderProduct extends Model {
    declare order_id: number;
    declare product_id: number;
    declare quantity: number;
}

OrderProduct.init({
    order_id: DataTypes.INTEGER,
    products: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
},{
    sequelize,
    tableName: "produto_order"
})