const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
class Category extends Product {}

router.get('/', async (req, res) => {
  try{
    const catData = await Category.findAll();
    returnres.json(catData);
  }catch(err){
    res.status(404).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
    try {
      const catData = await Category.create(req.body);
      res.status(200).json(catData);
    } catch (err) {
      res.status(400).json(err);
    }
});

  // update a category by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const catData = await Category.update(req.body, {
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
  // delete a category by its `id` value
    try{
    const catData= await Category.delete(req.body, {
      where: {
        id:req.params.id,
      }, 
      individualHooks:true;
    });
    if (!catData[0]){
      res.status(404).json({msg: `Error ${catData} doesnt match anything in the database please try again`});
      return;
    }
      res.status(200).json(catData);
  } catch(err){
    res.status(500).json(err);
  }
});



module.exports = Category;
