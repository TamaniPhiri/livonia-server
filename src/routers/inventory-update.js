const express = require('express');
const router = express.Router();
const { updateProductQuantities } = require('../controller/inventory-update');

// Your route for updating product quantities
router.post('/inventory/update', async (req, res) => {
  const { products } = req.body;
  const result = await updateProductQuantities(products);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;
