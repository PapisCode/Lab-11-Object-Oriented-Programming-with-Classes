const Product = require('./Product');

// Subclass: PerishableProduct
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

// Override toString to include expiration date
toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
 }
}

module.exports = PerishableProduct;