const Product = require ('./Product');
const PerishableProduct = require ('./PerishableProduct');
const Store = require ('./Store');

//Create Products
const product1 = new Product('Laptop', 800, 5);
const product2 = new Product('Monitor', 450, 5);
const product3 = new Product('Mouse', 100, 10);
const product4 = new Product('Storage Device', 85, 10);
const product5 = new Product('Chair', 500, 6);

//Create Perishable Products
const perishable1 = new PerishableProduct('Milk', 2.0, 15, '2024-12-31');
const perishable2 = new PerishableProduct('Cheese', 7.5, 15, '2025-01-31');
const perishable3 = new PerishableProduct('Yogurt', 3.0, 12, '2025-01-31');
const perishable4 = new PerishableProduct('Banana', 4.0, 12, '2024-12-28');

//Create Store with products
const store = new Store();
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);
store.addProduct(perishable1);
store.addProduct(perishable2);
store.addProduct(perishable3);
store.addProduct(perishable4);

//Print total inventory value before discount
console.log('Total Inventory Value (Before Discount): $', store.getInventoryValue().toFixed(2));

//Application of 15% discount
Product.applyDiscount(store.inventory, 0.15);

//Print total inventory value after discount
console.log('Total Inventory Value (After Discount): $', store.getInventoryValue().toFixed(2));

//Find and print details of a specific product (by name)
const productName = 'Milk';
const foundProduct = store.findProductByName(productName);
if (foundProduct) {
    console.log(`Details of Product "${productName}":`, foundProduct.toString());
} else {
    console.log(`Product "${productName}" not found in inventory.`);
}