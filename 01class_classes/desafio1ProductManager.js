
class Product {
    constructor({code, title, description, price, thumbnail = '', stock = 0 })
     {
        this.id = notNull(id,'id')
        this.code = notNull(code,'code')
        this.title = notNull(title,'title')
        this.description = notNull(description,'description')
        this.price = notNull(price,'price')
        this.thumbnail = notNull(thumbnail,'thumbnail')
        this.stock = notNull(stock)
    }

    asPOJO(){
        return {
            id: this.id,
            code: this.code,
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            stock: this.stock,
        }
    }

}


function notNull(valor, variable){
    if ( !valor ) throw new Error(`null value ${variable}`)
    return  valor 
}


let id = 0
function generarId(){
    return id++
}

class ProductManager{
    #products
    constructor(){
        this.#products = []
    }

    addProduct(datosProduct){
        if (this.#products.find(product => product.code === datosProduct.code))
            throw new Error(`Ya existe un producto con el codigo ${datosProduct.code}`)
        datosProduct.id = generarId()
        const product = new Product(datosProduct)
        this.#products.push(product)
        return product
    }

    getProducts(){
        return [...this.#products]
    }

    getProductById(id){
        const product = this.#products.find(product => product.id === id)
        if (product) 
            return product
        else 
            throw new Error('Not found')
    }
}









// // TESTING:
// const pm = new ProductManager()
// console.log({products: pm.getProducts()})

// const datosProduct0 = {
//     title: "producto prueba",
//     description:"Este es un producto prueba",
//     price:200,
//     thumbnail:"Sin imagen",
//     code:"abc13",
//     stock:25
// }

// const datosProduct1 = {
//     title: "producto prueba 2",
//     description:"Este es un producto prueba",
//     price:200,
//     thumbnail:"Sin imagen",
//     code:"abc13-2",
//     stock:25
// }

// pm.addProduct(datosProduct0)

// pm.addProduct(datosProduct1)

// console.log({products: pm.getProducts()})


// // console.log(pm.getProductById(4))
// console.log(pm.getProductById(2))

