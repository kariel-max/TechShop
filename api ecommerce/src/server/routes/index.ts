import { Router, Response } from "express";
import { usuariosControllers } from "../controllers";
import { ensureAuthenticated } from "../shared/middleware";
import { yupValidatioControllers } from "../controllers/yupValidation";
import { produtoControllers } from "../controllers/produtos";


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

router.post("/api/addProduto", yupValidatioControllers.produtosListBody, produtoControllers.createProdutos);
router.get("/api/categorias", produtoControllers.getCategorias )
router.get("/api/categorias/especificacoes/:name", produtoControllers.getEspecificacoes )

export { router }