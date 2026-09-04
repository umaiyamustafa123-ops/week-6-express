let products = [
  { id: 1, name: "Laptop", price: 120000 },
  { id: 2, name: "Mobile Phone", price: 60000 },
  { id: 3, name: "Headphones", price: 8000 }
];

exports.getProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
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

  const product = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price
  };

  products.push(product);

  res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (req.body.name !== undefined) product.name = req.body.name;
  if (req.body.price !== undefined) product.price = req.body.price;

  res.status(200).json(product);
};

exports.deleteProduct = (req, res) => {
  const index = products.findIndex(
    p => p.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products.splice(index, 1)[0];

  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct
  });
};