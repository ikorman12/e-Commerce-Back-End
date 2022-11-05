// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete:'CASCADE'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'driver_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });
Product.addProject(Tag, { through: { role: 'product_id' }});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });
Tag.addProject(Product, { through: { role: 'tag_id' }});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
