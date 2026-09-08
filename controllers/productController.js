let products = [
  { id: 1, name: "Laptop", price: 120000 },
  { id: 2, name: "Mobile Phone", price: 60000 },
  { id: 3, name: "Headphones", price: 8000 }
];

const isValidId = (id) => {
  return /^\d+$/.test(id) && Number(id) > 0;
};

const isValidPrice = (price) => {
  return typeof price === "number" && Number.isFinite(price) && price > 0;
};

exports.getProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProductById = (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid product ID"
    });
  }

  const product = products.find(
    p => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({
      message: "Name and price are required"
    });
  }

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      message: "Name must be a non-empty string"
    });
  }

  if (!isValidPrice(price)) {
    return res.status(400).json({
      message: "Price must be a positive number"
    });
  }

  const product = {
    id: products.length
      ? Math.max(...products.map(p => p.id)) + 1
      : 1,
    name: name.trim(),
    price
  };

  products.push(product);

  res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid product ID"
    });
  }

  const product = products.find(
    p => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price } = req.body;

  if (name !== undefined) {
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        message: "Name must be a non-empty string"
      });
    }

    product.name = name.trim();
  }

  if (price !== undefined) {
    if (!isValidPrice(price)) {
      return res.status(400).json({
        message: "Price must be a positive number"
      });
    }

    product.price = price;
  }

  res.status(200).json(product);
};

exports.deleteProduct = (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({
      message: "Invalid product ID"
    });
  }

  const index = products.findIndex(
    p => p.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const deletedProduct = products.splice(index, 1)[0];

  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct
  });
};