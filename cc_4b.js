const products = [
    { sku: "A-100", name: "Pizza", category: "fastFood", price: 5.00, inventory: 20 },
    { sku: "B-200", name: "Laptop", category: "electronics", price: 600.00, inventory: 5 },
    { sku: "C-300", name: "Shirt", category: "apparel", price: 10.00, inventory: 10 },
    { sku: "D-400", name: "Bleach", category: "household", price: 5.00, inventory: 15 },
    { sku: "E-500", name: "Onion", category: "groceries", price: 1.00, inventory: 30 },
];

for (let products of products) {
    let discount;
    switch (product.category) {
        case "electronics":
            discount = .2
            break;
        case "fastFood":
            discount = .3
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
    let promoPrice = product.price * (1-discount)
    product.promoPrice = promoPrice
}
    const customers = [
        {
            id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085,
            cart: [{ sku: "A-100", qty:1 }, { sku: "G-300", qty: 3}] },
            id: 2, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085,
            cart: [{ sku: "B-200", qty:1 }, { sku: "G-300", qty: 3}] },
            id: 3, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085,
            cart: [{ sku: "C-300", qty:1 }, { sku: "G-300", qty: 3}] },
            id: 4, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085,
            cart: [{ sku: "D-400", qty:1 }, { sku: "G-300", qty: 3}] },
        }
    ]