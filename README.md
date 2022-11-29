# 🚀 2do desafio entregable
Author: Ivan Talijancic

# 📦 Contenido del repositorio
En este repositorio se entrega el código correspondiente a la resolución del 2do desafón entregable del curso de BackEnd de coderhouse.

## 📋 Consignas
- Realizar una clase *"ProductManager"* la cuál permitirá trabajar con múltiples productos. Esta clase debe poder agregar, consultar, modificar y eliminar un producto, manejando persistencia de archivos (basado en entregable 1)

### ✅ Aspectos a incluir
- La clase debe contar con una variable `this.path`, el cuál se iniciará desde su constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
- Debe guarar objetos con el siguiente formato:
    - **id:** Se debe incrementar automáticamente, no enviarse desde el cuerpo.
    - **title:** Nombre de producto.
    - **description:** Descripción del producto.
    - **price:** Precio
    - **thumbnail:** ruta de imágen
    - **code:** Código identificador
    - **stock:** Número de piezas disponibles
- Debe tener un método `addProducto({newProduct})`, el cuál debe recibir un objeto con el formato previamente específicado, asignarle un `id` autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
- Debe terner un método `getProducts()`, el cuál debe leer el archivo de productos y devolver todos los porductos en formato de arreglo.
- Debe tener un método `getProductsById(productId)` el cuál debe recibir un `id` y tras leer el archivo, debe buscar el producto especificado y devolverlo en formato `objeto {}`.
- Debe tener un método `updateProduct({product})`, el cuál debe recibir el `id` del producto a actualizar, así como también el campo a actualizar (puede ser el objeto completo como en una DB) y debe actualizar el producto que tenga ese id en el archivo. **NO DEBE BORRARSE SU ID**
- Debe tener un método `deleteProduct(productId)`, el cual debe recibir un `id` y debe eliminar el producto que tenga ese `id` en el archivo.

### 🧪 Proceso de Testing
- Se creará una instancia de la clase `ProductManager`.
- Se llamará `getProducts()` recién creada la instancia, debe devolver un arreglo vacío []
 -Se llamará al método `addProduct({newProduct})` con los campos:
    - title: “producto prueba”
    - description:”Este es un producto prueba”
    - price:200,
    - thumbnail:”Sin imagen”
    - code:”abc123”,
    - stock:25
- El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
- Se llamará el método `getProducts()` nuevamente, esta vez debe aparecer el producto recién agregado
- Se llamará al método `getProductById(productId)` y se corroborará que devuelva el producto con el `id` especificado, en caso de no existir, debe arrojar un error.
- Se llamará al método `updateProduct({product})` y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
- Se llamará al método `deleteProduct(productId)`, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
