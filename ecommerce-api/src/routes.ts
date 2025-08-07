import { type Request, Router, type Response } from "express";
import { ensureAuthenticated } from "./shared/middleware";
import { authController } from "./modules/auth/controllers";
import { userController } from "./modules/users/controllers";
import { productController } from "./modules/products/controllers";
import { orderController } from "./modules/orders/controllers";
import { cartController } from "./modules/carts/controllers/carts";
import { cartItemController } from "./modules/carts/controllers/cartItems";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Óla, DEV!");

  // Boas praticas evitar de usar verbos na url
  router.post("/api/signIn", authController.signInAuthController);
  router.post("/api/signUp", authController.signUpAuthController);

  router.get('/api/user/:id', ensureAuthenticated, userController.getUserController)
  router.put('/api/user/:id', ensureAuthenticated, userController.updateUserController)
  router.delete('/api/user/:id', userController.deleteUserController)

  router.get('/api/products', productController.getAllProductController)
  router.get('/api/product/:id', productController.getProductController)
  router.post('/api/products', productController.createProductController)
  router.put('/api/product/:id', productController.updateProductController)
  router.delete('/api/product/:id', productController.deleteProductController)
  
  router.get('/api/orders', orderController.getAllOrderController)
  router.get('/api/order/:id', orderController.getOrderController)
  router.post('/api/orders', orderController.createOrderController)
  router.put('/api/order/:id', orderController.updateOrderController)
  router.delete('/api/order/:id', orderController.deleteOrderController)
  
  router.get('/api/carts', cartController.getAllCartController)
  router.get('/api/cart/:id', cartController.getCartController)
  router.post('/api/carts', cartController.createCartController)
  router.put('/api/cart/:id', cartController.updateCartController)
  router.delete('/api/cart/:id', cartController.updateCartController)

  router.post('/api/cart/items', cartItemController.addCartItemController)
  router.delete('/api/cart/item/:id', cartItemController.removeCartItemController)
  
});
export { router };
