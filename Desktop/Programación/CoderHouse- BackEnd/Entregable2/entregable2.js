const fs = require("fs");

class ProductManager {
    
    constructor(path) {
        this.path = path; 
        if(fs.existsSync(path)){
            try{
                let products = fs.readFileSync(path, "utf-8");
                this.products = JSON.parse(products);
            } catch(error) {
                this.products = [];
            }
        } else {
            this.products = []
        }
        this.IdActual = 1;
    }
    async saveFile(data){
        try{
            await fs.promises.writeFile(this.path, JSON.stringify(data, null, "\t"))
            return true; 
        } catch(error){
            console.log(error)
            return false;
        }
    }
    getProducts(){
        console.log(this.products)
        return this.products || [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Falta rellenar un dato");
        }
        if (this.products.some((product) => product.code === code)) {
            console.log("Error: El campo code se repite");
        }
        if (this.products.length === 0) {
            products.id = 1; 
        } else {
            products.id = this.products[this.products.length - 1].id + 1;  
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
    this.saveFile(this.products);
    }
    

    getProductById(id){
        const product = this.products.find((product) => product.id === id);
        
        if (!product){
            console.log(`Producto con el id: ${id} no fue encontrado`);
            return;
        }
    return product; 
    }
    updateProduct(id){

    }
}

const productManager = new ProductManager("./Productos.json");
const products = productManager.getProducts();
    console.log(products)
productManager.addProduct("producto prueba1", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
