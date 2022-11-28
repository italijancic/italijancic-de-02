import fs from 'fs'

export class ProductManager {

  constructor(path) {
    this.products = []
    this.path = path
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {

    // Validate required args
    // NOTE: fix type validation
    if ( !this.#validateFields(title, description, price, thumbnail, code, stock) )
      return

    // Read from file
    this.#readProducts()

    // Validate product code not repeat
    if (this.products.find((product) => product.code === code)) {
      console.log('Product code already exist')
      return
    }

    const product = {
      id: this.#getMaxId() + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    this.products.push(product)

    // Write on file
    fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf-8')
  }

  getProducts = () => {
    this.#readProducts()
    return this.products
  }

  getproductById = (productId) => {
    this.#readProducts()
    const foundedProduct = this.products.find((product) => product.id === productId)
    if (foundedProduct)
      return foundedProduct
    else
      console.log('Not found')
  }

  updateProduct = (productId, updatedProduct) => {
    this.#readProducts
    // Find index of product
    const foundedIndex = this.products.findIndex((product) => product.id === productId)
    // If product id exist
    if (foundedIndex != undefined) {
      // Update data
      const updatedProducts = this.products.map((product, index) => {
        if (index === foundedIndex) {
          return updatedProduct
        } else {
          return product
        }
      })
      this.products = updatedProducts
      // Write on file
      fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf-8')

    } else {
      console.log('Bad or missing porduct id')
    }
  }

  deleteProduct = (productId) => {
    this.#readProducts
    this.products = this.products.filter( (product) => product.id !== productId)
    // Write on file
    fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf-8')
  }

  #getMaxId = () => {
    let maxId = 0
    this.products.map((event) => {
      if (event.id > maxId) maxId = event.id
    })
    return maxId
  }

  #readProducts = () => {
    if (fs.existsSync(this.path)) {
      const products = JSON.parse(fs.readFileSync(this.path, 'utf-8'))
      this.products = products
    } else {
      this.products = []
    }
  }

  #validateFields = (title, description, price, thumbnail, code, stock) => {

    if( !title || !isNaN(title)) {
      console.log('Bad or missing title. Must be a string')
      return false
    }

    if( !description || !isNaN(description)) {
      console.log('Bad or missing description. Must be a string')
      return false
    }

    if( !price || isNaN(price) || price < 0) {
      console.log(`Bad or missing price. Must be a number grather than zero. price = ${price}`)
      return false
    }

    if( !thumbnail || !isNaN(thumbnail)) {
      console.log('Bad or missing thumbnail. Must be a string')
      return false
    }

    if( !code || !isNaN(code)) {
      console.log('Bad or missing code. Must be a string')
      return false
    }

    if( !stock || isNaN(stock) || stock < 0) {
      console.log(`Bad or missing stock. Must be a number grather than zero. stock = ${stock}`)
      return false
    }

    return true

  }

}
// End class


// // Testing proccess

// // Class instace creation
// const productManager = new ProductManager('./products.json')
// console.log(productManager.getProducts())

// // Test addProduct() method
// productManager.addProduct('producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abcd123', 25)
// console.log(productManager.getProducts())

// // Test update
// let product = productManager.getproductById(1)
// product.title = 'new title'
// console.log(product)
// productManager.updateProduct(1, product)
// console.log(productManager.getProducts())