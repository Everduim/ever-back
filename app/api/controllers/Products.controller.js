// const products = require("../models/Products.model.js");

// const HTTPSTATUSCODE = require("../../utils/httpStatusCode.js");


// const postProduct = async (req, res, next) =>{
//   try {
//     const products = new products();
//     products.product = req.body.country;
//     products.image = req.body.image;
//     products.info = req.body.info;
//     products.price = req.body.price;
//     await products.save();
//     res.json(products);
//   } catch (error) {
    
//   }
// }
// const getAllProducts = async (req, res, next) => {
//   try {
//     const products = await products.find();
//     console.log(products);
//     return res.json({
//       status: 200,
//       message: HTTPSTATUSCODE[200],
//       data: { products: products },
//     });
    
//   } catch (err) {
//     return next(err);
//   }
// };


// const getProductsById = async (req, res, next) => {
//   try {
//     const { productsId } = req.params;
//     const productsById = await products.findById(productsId);
//     return res.json({
//       status: 200,
//       message: HTTPSTATUSCODE[200],
//       data: { products: productsById }
//     });
//   } catch (err) {
//     return next(err);
//   }
// };


// module.exports = {
//   getAllProducts,
//   getProductsById,
//   postProduct
// }

const Products = require("../models/Products.model.js");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode.js");

const postProduct = async (req, res, next) => {
  try {
    const product = new Products();
    product.product = req.body.country;
    product.image = req.body.image;
    product.info = req.body.info;
    product.price = req.body.price;
    await product.save();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find();
    console.log(products);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { products: products },
    });
  } catch (err) {
    next(err);
  }
};

const getProductsById = async (req, res, next) => {
  try {
    const { productsId } = req.params;
    const productById = await Products.findById(productsId);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { product: productById },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  postProduct,
};
