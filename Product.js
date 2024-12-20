// Product class
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

// Calculate total value of the product in stock
getTotalValue() {
    return this.price * this.quantity;
 }

 // String representation of the product
 toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
 }

 // Method to apply the discount to any array of products
 static applyDiscount(products, discount) {
    products.forEach(product => {
        product.price -= product.price * discount;
        });
    }
}

module.exports = Product;