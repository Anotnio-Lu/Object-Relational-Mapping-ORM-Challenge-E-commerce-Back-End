const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const readerData = await Tag.findAll({
      // include: [{ model: Product }, { model: ProductTag }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const Data = await Tag.findByPk(req.params.id);
    if (!Data) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    res.json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
