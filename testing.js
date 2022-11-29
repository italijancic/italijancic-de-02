import { ProductManager } from './productManager.js'

// Testing proccess
// ----------------

// Class instace creation
const productManager = new ProductManager('./products.json')
console.log(productManager.getProducts())

// Test addProduct() method
productManager.addProduct('producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abcd123', 25)
console.log(productManager.getProducts())

// Test product code validation on addMethod()
productManager.addProduct('producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abcd123', 25)

// Test validation of required fields
// Empty or bad type title
productManager.addProduct(33,'Este es un producto de prueba 2', 300, 'Sin imagen 2', 'KDMVN78JKDSN', 765)
// Undefined description
productManager.addProduct('priducto de prueba 2', undefined, 300, 'Sin imagen 2', 'KDMVN78JKDSN', 765)
// Undefined or bad type price
productManager.addProduct('priducto de prueba 2', 'Este es un producto de prueba 2', -300, 'Sin imagen 2', 'KDMVN78JKDSN', 765)
// Undefined or bad type thumbnail
productManager.addProduct('priducto de prueba 2', 'Este es un producto de prueba 2', 300, undefined, 'KDMVN78JKDSN', 765)
// Undefined or bad type product code
productManager.addProduct('priducto de prueba 2', 'Este es un producto de prueba 2', 300, 'Sin imagen 2', undefined, 765)
// Undefined or bad type stock
productManager.addProduct('priducto de prueba 2', 'Este es un producto de prueba 2', 300, 'Sin imagen 2', 'KDMVN78JKDSN', 'hola')

// Test getProductById() method
console.log(productManager.getproductById(1))
productManager.getproductById(10)

console.log(productManager.getProducts())

// Test update
let product = productManager.getproductById(1)
product.title = 'new title'
productManager.updateProduct(1, product)
console.log(productManager.getProducts())

// Test delete method
productManager.addProduct('To delete', 'Product to test delete method', 224, 'Sin imagen', 'LMKN68JN65', 24)
console.log(productManager.getProducts())
productManager.deleteProduct(2)
console.log(productManager.getProducts())

// End testing
// -----------