import { Router, type Response } from "express";
import { usuariosControllers } from "../controllers";
import { ensureAuthenticated } from "../shared/middleware";
import { yupValidatioControllers } from "../controllers/yupValidation";
import { produtoControllers } from "../controllers/produtos";
import { carrinhoControllers } from "../controllers/carrinho";
import { pedidosControllers } from "../controllers/pedidos";


const router = Router();

router.get('/', (_, res: Response)=> {
    res.send('Óla, DEV!');
});

router.post("/api/verificarToken", ensureAuthenticated, usuariosControllers.verificar)

router.post("/api/signIn",usuariosControllers.signInValidation,usuariosControllers.signIn)
router.post("/api/signUp",usuariosControllers.signUpValidation, usuariosControllers.signUp)

router.get("/api/perfil/infoUser/editar/:id",ensureAuthenticated ,yupValidatioControllers.getParamsById, usuariosControllers.getUser)
router.put("/api/perfil/infoUser/update/:id",ensureAuthenticated ,usuariosControllers.atualizarValidetion, usuariosControllers.atualizarUser)


router.delete("/api/perfil/delete/:id",ensureAuthenticated,usuariosControllers.deleteValidation,usuariosControllers.deleteByUser)

router.get("/api/produtos", produtoControllers.AllProdutos)
router.post("/api/createProduto", yupValidatioControllers.produtosListBody, produtoControllers.createProdutos);

router.get("/api/pedidos", pedidosControllers.getAll)
router.post("/api/:carrinhoId/pedidos", pedidosControllers.addProdutoPedido)
router.post("/api/:userId/carrinho", carrinhoControllers.createCarrinho)

export { router }