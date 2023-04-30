

// const divContenedor = document.getElementById("divContenedorDom")
// divContenedor.innerHTML = `<p> Esto es un párrafo </p>`

// divContenedor.innerHTML = `<div>
//                                 <br><br>
//                                 <h2>Promociones</h2>
//                                 <p>¿Buscas renovar tu guardarropa? Aprovecha nuestras promociones en ropa de temporada, con descuentos de hasta un 50% en las últimas tendencias en moda para hombres y mujeres.</p>
//                                 <p>¡No te pierdas nuestras increíbles promociones de temporada! Tenemos ofertas que no podrás resistir en una amplia variedad de productos y servicios.</p>
//                             </div>`

// tituloPrincipal.className = "titulo" //acceder al nombre de la contante y con classname insertar un esltilo


class Producto {
    constructor(nombre,precio){ //clase para pedirle unos nombres y precios
        this.nombre=nombre      
        this.precio=precio
    }

}
            //Productos
const sueter1 = new Producto ("Sueter Gris",700)
const sueter2 = new Producto ("Suteres Polo",2999)
const sueter3 = new Producto ("Sueteres Mujer",1599)

const arrayProductos= [sueter1,sueter2,sueter3]

const contenedorProductos= document.getElementById("divContenedorDom")
                    //recorrido con un foreach
arrayProductos.forEach(producto=>{
    const div=document.createElement("div") //crear div
    div.innerHTML=`<br>
                    <p>Nombre del producto: ${producto.nombre}</p> 
                    <p>Precio del producto:${producto.precio}</p>
                    
                    <button>Agregar al carrito</button>`
                    contenedorProductos.appendChild(div)
})