//creamos clase producto
class Producto{ 
    constructor(id,nombre,precio,img){
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.img=img
        this.cantidad=1
    }
}

//creamos objetos
const collar1 = new Producto (1,"Collar de Corazón", 499,"../img/accesorios/collar1.webp")
const collar2= new Producto (2,"Collar con Flor", 999,"../img/accesorios/collar2.webp")
const collar3= new Producto (3,"Collar de Estrella", 599,"../img/accesorios/collar3.webp")
const bolso1= new Producto (4,"Bolso Palemeras", 699,"../img/accesorios/bolso1.webp")
const bolso2= new Producto (5,"Boloso de mano variado ", 1799,"../img/accesorios/bolso2.webp")
const bolso3= new Producto (6,"Bolso de mano café", 999,"../img/accesorios/bolso3.webp")

//crear array con catalogo de productos
const productos= [collar1,collar2,collar3,bolso1,bolso2,bolso3]

let carrito=[] //array vacio del carrito 

//implementar localStorage en array vacio
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"))
}


//DOM para mostrar los productos
const contenedorProductos = document.getElementById("contenedorProductos")

const mostrarProductos= ()=>{
    productos.forEach( producto=>{ //cremaos card para los productos
        const card = document.createElement("div")
        card.classList.add("col-xl-4","col-md-6", "col-xs-12") //columas de grillas creadas
        card.innerHTML=`
                <div class="card" style="width: 28rem;">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.img}">
                <div class="card-body">
                    <h5 class="card-title">$${producto.precio}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                </div>
                </div>        
        `
        //invocamos appendChild
        contenedorProductos.appendChild(card)
        const boton = document.getElementById(`boton${producto.id}`) //que generela funcion asociada con el id 
        boton.addEventListener("click", ()=>{
         //funcion agregar al carrito
         
         agregarAlCarrito(producto.id)
        })
    })

}

mostrarProductos()

const agregarAlCarrito = (id)=>{ //recibe como parametro id
    const productoEnCarrito= carrito.find(producto => producto.id === id)
    if(productoEnCarrito){ //si esta el id
        productoEnCarrito.cantidad++
        
    }else{ //si no encontro producto en carrito va hacer push
        const producto = productos.find(producto => producto.id === id)
        carrito.push(producto)
        
        
    }
    //Trabajamos con LocalSorage
    localStorage.setItem("carrito",JSON.stringify(carrito))
    calcularTotal()
}

const contenedorCarrito=document.getElementById("contenedorCarrito")
const verCarrito=document.getElementById("verCarrito")


verCarrito.addEventListener("click",()=>{
    mostrarCarrito()
})

//funcion para mostrar carrito
const mostrarCarrito= ()=> {
    
    contenedorCarrito.innerHTML=""  //evitamos que se repita img
    //iterar sobre carrito compras para mostrar productos 
    carrito.forEach(producto => { //creo card 
        const card = document.createElement("div")
        card.classList.add("col-xl-3","col-md-6", "col-xs-12")
        card.innerHTML=`
        <div class="card" style="width: 28rem;">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.img}">
                <div class="card-body">
                    <h5 class="card-title">$${producto.precio}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p>Cantidad:${producto.cantidad}</p>
                    <button class="btn colorBoton" id="eliminar${producto.id}" >Eliminar Producto</button>
                </div>
            </div>  `
            //invocamos appendChild
            contenedorCarrito.appendChild(card) 
        //Eliminar productos del carrito
        const boton= document.getElementById(`eliminar${producto.id}`)
        boton.addEventListener("click",()=>{
            eliminarDelCarrito(producto.id)
        })
    })
    //funcion calcular total del carrito de compras
    calcularTotal()
}



const eliminarDelCarrito = (id)=>{
    const producto=carrito.find(producto=> producto.id === id)
    const indice=carrito.indexOf(producto)
    carrito.splice(indice,1) //busca indice y arranca en 1
    mostrarCarrito()
    localStorage.setItem("carrito",JSON.stringify(carrito))
   
}

//funcion que elimine todos los productos
//vaciamos todo el carrito de compras
const vaciarCarrito= document.getElementById("vaciarCarrito")
vaciarCarrito.addEventListener("click",()=>{
    Swal.fire({
        title: 'Estas seguro de borrarlo?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Su archivo ha sido eliminado.',
            'success'
          )
        }
        eliminarTodoElCarrito()
      })
}) 

//Funcion eliminar todo de un producto
const eliminarTodoElCarrito= ()=>{
    carrito=[]
    mostrarCarrito()
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

//mostrar mensaje con el total de la compra
const total = document.getElementById("total")


//funcion para calcular el total
const calcularTotal= ()=>{
let totalCompra=0
carrito.forEach(producto =>{
    totalCompra+=producto.precio *producto.cantidad
})
    total.innerHTML=`Total:${totalCompra}`
}
