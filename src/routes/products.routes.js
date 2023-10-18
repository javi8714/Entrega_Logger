<<<<<<< HEAD

import { Router } from "express"; 
import { productSDao } from "../dao/managers/index.js";
import { ProductsController } from "../controllers/products.controller.js";

const routerA = Router()
=======
import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller.js';
>>>>>>> 9d6a1de343ea33f571e6185afc424915f59f33b7

routerA.get('/', ProductsController.getProducts)

<<<<<<< HEAD
routerA.get("/:pid", ProductsController.getProductID);

routerA.post("/", ProductsController.createProduct);

routerA.put("/:pid", ProductsController.updateProduct);

routerA.delete("/:pid", ProductsController.deleteProduct);

export {routerA as productsRouter}
=======
router.get('/', ProductsController.getProducts)

router.get("/:pid", ProductsController.getProductID);

router.post("/", ProductsController.createProduct);

router.put("/:pid", ProductsController.updateProduct);

router.delete("/:pid", ProductsController.deleteProduct);

export {router as productsRouter}
>>>>>>> 9d6a1de343ea33f571e6185afc424915f59f33b7
