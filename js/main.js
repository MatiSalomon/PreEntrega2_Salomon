const productos = [
    {nombreProducto: "gaseosa", precio: 200},
    {nombreProducto: "harina", precio: 100},
    {nombreProducto: "yogurt", precio: 150},
    {nombreProducto: "leche", precio: 135},
    {nombreProducto: "cerveza", precio: 240},
    {nombreProducto: "galletitas", precio: 120},
];

let carrito = [];

let seleccionProducto = prompt("Buenas! Desea llevar algun producto?");

while(seleccionProducto !="si" && seleccionProducto != "no"){
    alert("Por favor ingresar si o no");
    seleccionProducto = prompt("Buenas! Desea llevar algun producto?")
}

if(seleccionProducto === "si"){
    alert("Te dejo los productos que tenemos disponibles")
    let todosProductos = productos.map((producto) => producto.nombreProducto +" " + "$"+ producto.precio + "\n" );
    alert(todosProductos.join("-"));
} else if(seleccionProducto === "no"){
alert("Gracias por visitarnos! vuelva pronto");
}

while(seleccionProducto != "no"){
    let producto = prompt("Elige los porductos para tu carrito");
    let precio = 0;

    if( producto === "harina" || producto === "gaseosa" || producto === "yogurt" || producto === "leche" || producto === "cerveza"||producto === "galletitas"){
        switch(producto){
            case "harina":
            precio = 100;
                break;
            case "gaseosa":
            precio = 200
                break;
            case "yogurt":
            precio = 150;
                break;    
            case "leche":
            precio = 135;
                break;
            case "cerveza":
            precio = 240;
                break;
            case "galletitas":
            precio = 120;
            break;  
            default :
                break;
        }
      let unidad = parseInt(prompt("¿Cuantas unidades vas a llevar?"));
      carrito.push({producto, unidad, precio});
       
    } 
    seleccionProducto = prompt("¿Queres seguir agregando productos al carrito?");
    let salida ="";
    if(seleccionProducto === "no"){
        alert("Gracias por la compra!");
        carrito.forEach(carritoFinal =>{
            salida+="Producto: "+ carritoFinal.producto + " - "+ "Unidades: " + carritoFinal.unidad +" - "+ "Precio total: $" +(carritoFinal.unidad* carritoFinal.precio)+"\n";
        })
        alert(salida);
    }


}
const total = carrito.reduce((acu, el) => acu + el.precio * el.unidad, 0);
alert("El precio total es: $"+ total);