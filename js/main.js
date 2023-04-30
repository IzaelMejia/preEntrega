class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}
const productos = []
const agregarProducto = ()=>{
    let nuevoId = prompt("Ingresa el id del producto")
    let nuevoNombre = prompt("Ingresa el nombre del producto")
    let nuevoPrecio = Number(prompt("Ingresa el precio del producto"))
    let nuevoStock = Number(prompt("Ingresa el stock del producto"))

    let nuevoProducto = new Producto(nuevoId, nuevoNombre, nuevoPrecio, nuevoStock)
    productos.push(nuevoProducto)
}
let condicionalBucle = true
function iniciarPrograma(){
    while(condicionalBucle){
        let pregunta = confirm("¿Desea agregar un producto?")
        if(pregunta){
            agregarProducto()
            console.log(productos)
        }
        condicionalBucle = confirm("¿Desea agregar más productos?")
    }
    let existeProducto= prompt("Ingresa el nombre del producto a ver si se encuentra")
    if(nombre =! productos.includes(existeProducto)){
        alert("Si contamos con el producto")
    }else{
        alert("No se encuentra")
    }
}

iniciarPrograma()

