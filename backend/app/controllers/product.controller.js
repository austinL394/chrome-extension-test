const db = require("../models");
const Product = db.products;

// Create and Save a new Product
exports.create = async (req, res) => {
  try {
    // Validate request
    if (!req.body.name || !req.body.image) {
      return res.status(400).send({ message: "Content cannot be empty!" });
    }

    // Check if product already exists
    const existingProduct = await Product.findOne({
      where: { name: req.body.name },
    });
    if (existingProduct) {
      return res.status(400).send({ message: "Product already exists" });
    }

    // Create a new product
    const product = await Product.create({
      name: req.body.name,
      image: req.body.image,
    });

    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the product.",
    });
  }
};

// Retrieve all Products from the database
exports.findAll = async (req, res) => {
  try {
    const products = await Product.findAll({ order: [["createdAt", "DESC"]] });
    res.send(products);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving products.",
    });
  }
};
