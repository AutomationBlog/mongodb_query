// Find all the information about each products
db.product.find();
// Find the product price which are between 400 to 800
db.product.find({ product_price: { $lte: 800, $gte: 400 } });
// Find the product price which are not between 400 to 600
db.product.find({ product_price: { $not: { $lte: 600, $gte: 400 } } });
// List the four product which are greater than 500 in price
db.product.find({ product_price: { $gt: 500 } }).limit(4);
// Find the product name and product material of each products
db.product.find({}, { product_name: 1, product_material: 1 });
// Find the product with a row id of 10
db.product.find({ id: 10 });
// Find only the product name and product material
db.product.find({}, { product_name: 1, product_material: 1, _id: 0 });
// Find all products which contain the value of soft in product material
db.product.find({ product_material: /soft/i });
// Find products which contain product color indigo  and product price 492.00
db.product.find({ product_color: "indigo", product_price: 492.0 });
// Delete the products which product price value are 28
db.product.deleteOne({ product_price: 28 });
