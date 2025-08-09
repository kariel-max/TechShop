import { type Request, Router, type Response } from "express";
import { ensureAuthenticated } from "./shared/middleware";
import { authController } from "./modules/auth/controllers";
import { userController } from "./modules/users/controllers";
import { productController } from "./modules/products/controllers";
import { orderController } from "./modules/orders/controllers";
import { cartController } from "./modules/carts/controllers/carts";
import { cartItemController } from "./modules/carts/controllers/cartItems";
import { autDto } from "./modules/auth/dtos";

const router = Router();

router.get("/", (_req: Request, res: Response) => {res.send("Óla, DEV!");});

  // Boas praticas evitar de usar verbos na url
  router.post("/api/signIn", autDto.signInValidation, authController.signInAuthController);
  router.post("/api/signUp", autDto.signUpValidation, authController.signUpAuthController);
  router.get("/api/verify", ensureAuthenticated, authController.verifyRouter)

  router.get('/api/user/:id', ensureAuthenticated, userController.getUserController)
  router.put('/api/user/:id', ensureAuthenticated, userController.updateUserController)
  router.delete('/api/user/:id', ensureAuthenticated, userController.deleteUserController)

  router.get('/api/products', ensureAuthenticated, productController.getAllProductController)
  router.get('/api/product/:id', ensureAuthenticated, productController.getProductController)
  router.post('/api/products', ensureAuthenticated, productController.createProductController)
  router.put('/api/product/:id', ensureAuthenticated, productController.updateProductController)
  router.delete('/api/product/:id', ensureAuthenticated, productController.deleteProductController)
  
  router.get('/api/orders', ensureAuthenticated, orderController.getAllOrderController)
  router.get('/api/order/:id', ensureAuthenticated, orderController.getOrderController)
  router.post('/api/orders', ensureAuthenticated, orderController.createOrderController)
  router.put('/api/order/:id', ensureAuthenticated, orderController.updateOrderController)
  router.delete('/api/order/:id', ensureAuthenticated, orderController.deleteOrderController)
  
  router.get('/api/carts', ensureAuthenticated, cartController.getAllCartController)
  router.get('/api/cart/:id', ensureAuthenticated, cartController.getCartController)
  router.post('/api/carts', ensureAuthenticated, cartController.createCartController)
  router.put('/api/cart/:id', ensureAuthenticated, cartController.updateCartController)
  router.delete('/api/cart/:id', ensureAuthenticated, cartController.updateCartController)

  router.post('/api/cart/items', ensureAuthenticated, cartItemController.addCartItemController)
  router.delete('/api/cart/item/:id', ensureAuthenticated, cartItemController.removeCartItemController)
  
export { router };
