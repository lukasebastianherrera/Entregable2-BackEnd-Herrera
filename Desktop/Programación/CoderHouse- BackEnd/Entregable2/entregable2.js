class ProductManager {
    
    constructor() {
        this.products = [];
        this.IdActual = 1;
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Falta rellenar un dato");
            return;
        }
        if (this.products.some((product) => product.code === code)) {
            console.log("Error: El campo code se repite");
            return;
        }
    const producto = {
        id: this.IdActual++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    }
    this.products.push(producto);
    }
    

    getProductById(id){
        const product = this.products.find((product) => product.id === id);
        
        if (!product){
            console.log(`Producto con el id: ${id} no fue encontrado`);
            return;
        }
    return product; 
    }
}

const productManager = new ProductManager();
const products = productManager.getProducts();
    console.log(products)
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
const nuevosProductos = productManager.getProducts(); 
    console.log(nuevosProductos)
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
const productoID = productManager.getProductById(2);
console.log(productoID)
console.log("funciona node")