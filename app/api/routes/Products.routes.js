
const express = require("express");

const router = express.Router();



const { getAllProducts, getProductsById, postProduct } = require("../controllers/Products.controller");


 router.post("/post", postProduct);
 router.get("/", getAllProducts);
 router.get("/:productId", getProductsById);

module.exports = router;