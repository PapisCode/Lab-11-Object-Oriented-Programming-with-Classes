//Store class
class Store {
    constructor() {
        this.inventory = [];
    }

// Add a product to the inventory
addProduct(product) {
    this.inventory.push(product);
}

// Remove a product from the inventory
removeProduct(product) {
    const index = this.inventory.indexOf(product);
    if (index === -1) {
        console.log('Product not found in inventory.');
    } else {
        this.inventory.splice(index, 1);
        console.log(`Product "${product.name}" has been removed from the inventory`);
    }
}