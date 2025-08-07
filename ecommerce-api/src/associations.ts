import { Produto } from './modules/products/entities/product.entitie';
import { Order } from './modules/orders/entities/order.entitie';
import { Carrinho } from './modules/carts/entities/cart.entitie';
import { Usuario } from './modules/users/entities/user.entitie';
import { OrderProduct } from './modules/orders/entities/orderProduct.entities';
import { CartItem } from './modules/carts/entities/cartItem.entitie';

// Defina os relacionamentos aqui
//cart 
Carrinho.belongsTo(Usuario, {foreignKey: 'user_id'})
Carrinho.belongsToMany(Produto, {
  through: CartItem,
  foreignKey: 'cart_id',
  otherKey: 'product_id',
  as: 'produtos'
});
//orders
Order.belongsTo(Usuario, {foreignKey: 'user_id'})
Order.belongsToMany(Produto, {through: OrderProduct})
//products
Produto.belongsToMany(Order, {through: OrderProduct})
Produto.belongsToMany(Carrinho, {
  through: CartItem,
  foreignKey: 'product_id',
  otherKey: 'cart_id',
  as: 'carrinhos'
});
//users
Usuario.hasMany(Carrinho, { foreignKey: 'user_id', as: 'carrinhos' });
Usuario.hasMany(Order, { foreignKey: 'user_id', as: 'orders' });