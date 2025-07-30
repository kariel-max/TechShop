import { type Request, Router, type Response } from "express";
import { ensureAuthenticated } from "./shared/middleware";
import { authController } from "./modules/auth/controllers";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Óla, DEV!");

  // Boas praticas evitar de usar verbos na url
  router.get("/api/signIn", authController.signInAuthController);
  router.post("/api/signUp", authController.signUpAuthController);

  router.get('/api/users/:id')
  router.put('/api/users/:id')
  router.delete('/api/users/:id')

  router.get('/api/products/')
  router.get('/api/products/:id')
  router.post('/api/products/')
  router.put('/api/products/:id')
  router.delete('/api/products/:id')

  router.get('/api/orders/')
  router.get('/api/orders/:id')
  router.post('/api/orders/')
  router.put('/api/orders/:id')
  router.delete('/api/orders/:id')

  router.get('/api/carts/')
  router.get('/api/carts/:id')
  router.post('/api/carts/')
  router.put('/api/carts/:id')
  router.delete('/api/carts/:id')
});
export { router };
