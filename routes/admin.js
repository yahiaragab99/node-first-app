const path = require("path");

const { check } = require("express-validator");
const express = require("express");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  [
    check("title").isString().isLength({ min: 3 }).trim(),
    check("imageUrl").isURL().trim(),
    check("price").isFloat().trim(),
    check("description").isString().isLength({ min: 5, max: 400 }),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    check("title").isString().isLength({ min: 3 }).trim(),
    check("imageUrl").isURL().trim(),
    check("price").isFloat().trim(),
    check("description").isString().isLength({ min: 5, max: 400 }),
  ],
  isAuth,
  adminController.postEditProduct
);

router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
