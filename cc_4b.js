const products = [
    { sku: "A-100", name: "Pizza", category: "fastFood", price: 5.00, inventory: 20 },
    { sku: "B-200", name: "Laptop", category: "electronics", price: 600.00, inventory: 5 },
    { sku: "C-300", name: "Shirt", category: "apparel", price: 10.00, inventory: 10 },
    { sku: "D-400", name: "Bleach", category: "household", price: 5.00, inventory: 15 },
    { sku: "E-500", name: "Pizza", category: "groceries", price: 5.00, inventory: 20 },
];

for (let products of products) {
    let discount;
    switch (product.category) {
        case "electronics":
            discount = .2
            break;
        case "groceries":
        case "household":
            discount = .1
            break
        default:
                discount = 0;
                break;
    }
 // Place the promoPrice integration here
}