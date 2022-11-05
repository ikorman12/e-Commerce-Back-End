const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tagData = await Tag.findAll({ include:[{model: Product}]
    });
    return res.json(tagData);
  }catch(err){
    res.status(404).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
try {
  const tagData = await Tag.findByPk(req.params.id,{
    include:[{model:Product}]
  });
  if (!userData) {
    res.status(404).json({ message: 'No category with this id!' });
    return;
  }
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!catData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData= await Tag.delete(req.body, {
      where: {
        id:req.body.id,
      },
      individualHooks:true
    });
    if (!tagData[0]){
      res.status(404).json({msg: `Error ${tagData} doesnt match anything in the database please try again`});
      return;
    }
      res.status(200).json(`${tagData} successfully deleted from database`);
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
