import { Router } from "express"; 
import { CartManagerMongo } from "../dao/managers/cartManagerMongo.js";
import { ProductManagerMongo } from "../dao/managers/productManagerMongo.js";
import { productSDao } from "../dao/index.js";
import { cartService } from "../controllers/cart.controller.js";


const router = Router();

router.post("/", cartService.createCart);


// Traigo todos los carritos
router.get("/", async (req, res) => {
    try {
        let limit = Number(req.query.limit);
        if (!limit) {
            let result = await cartCreated.getAll();
            res.send(result);
        } else {
            let result = await cartCreated.getAll();
            res.send(result.slice(0, limit));
        }
    } catch (error) {
        res.json({ status: "error", message: error.message });
    }
});

// Traigo carrito segun ID
router.get('/:cid', async (req, res) => {
    try {
        let cid = req.params.cid;
        let result = await cartCreated.getCartById(cid);
        res.send(result);
    } catch (error) {
        res.json({ status: "error", message: error.message });
    }

});

router.post("/:cid/product/:pid", async (req, res) => {
    try {
        let cid = req.params.cid;
        let pid = req.params.pid;
        let cart = await cartService.getCartById(cid);
        let prods = cart.products;
        let isProdInCart = cart.products.find((p) => p.id == pid)
        if (isProdInCart) {
            let index = prods.findIndex((p) => p.id == pid);
            cart.products[ index ].quantity++;
            cartService.saveCart();
            res.json({ status: 'success', data: cart });
        } else {
            const newProd = {
                id: pid,
                quantity: 1
            }
            cart.products.push(newProd);
            cartService.saveCart()
            res.json({ status: 'success', data: cart });
        }
    } catch (error) {
        console.error(error.message);
        res.json({ status: "error", message: error.message });
    }
});

router.put('/:cid', async (req, res) => {
    try {
        let cid = req.params.cid;
        let cart = req.body;
        let result = await cartCreated.updateCart(cid, cart);
        result.id = cid;
        res.send(result);
    } catch (error) {
        res.json({ status: "error", message: error.message });
    }
});


export {router as cartsRouter}