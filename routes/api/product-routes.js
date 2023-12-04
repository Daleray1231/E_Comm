const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({ include: [{ model: Category }, { model: Tag, through: ProductTag }] });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, { include: [{ model: Category }, { model: Tag, through: ProductTag }] });
    if (!productData) res.status(404).json({ message: 'No product found with that id!' });
    else res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => req.body.tagIds.length ? ProductTag.bulkCreate(req.body.tagIds.map(tag_id => ({ product_id: product.id, tag_id }))) : res.status(200).json(product))
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => res.status(400).json(err));
});

// update product
router.put('/:id', (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then(() => req.body.tagIds ? ProductTag.findAll({ where: { product_id: req.params.id } }) : res.json({ message: 'No tags to update' }))
    .then((productTags) => req.body.tagIds && productTags ? Promise.all([ProductTag.destroy({ where: { id: productTags.map(({ id }) => id).filter(id => !req.body.tagIds.includes(id)) } }), ProductTag.bulkCreate(req.body.tagIds.filter(tag_id => !productTags.map(({ tag_id }) => tag_id).includes(tag_id)).map(tag_id => ({ product_id: req.params.id, tag_id })))]) : null)
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const productData = await Product.destroy({ where: { id: req.params.id } });
    if (!productData) res.status(404).json({ message: 'No product found with that id!' });
    else {
      await ProductTag.destroy({ where: { product_id: req.params.id } });
      res.status(200).json(productData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
