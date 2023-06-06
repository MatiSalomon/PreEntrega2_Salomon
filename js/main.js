const productos = [
    {nombreProducto: "gaseosa", precio: 200},
    {nombreProducto: "harina", precio: 100},
    {nombreProducto: "yogurt", precio: 150},
    {nombreProducto: "leche", precio: 135},
    {nombreProducto: "cerveza", precio: 240},
    {nombreProducto: "galletitas", precio: 120},
];

let carrito = [];

const mostrarProductos = () => {
    let prod = '';
    for (let i = 0 ; i < productos.length ; i++) {
        prod += productos[i].nombreProducto +" "+"$"+ productos[i].precio + '\n';
    }
    return prod;
}


let seleccionProducto = prompt("Buenas! Desea llevar algun producto?");

while(seleccionProducto !="si" && seleccionProducto != "no"){
    alert("Por favor ingresar si o no");
    seleccionProducto = prompt("Buenas! Desea comprar algun producto?")
}


while(seleccionProducto === "si"){
    let producto = prompt("Elige los productos para tu carrito"+"\n"+mostrarProductos());
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

}



    if(seleccionProducto === "no"){
        let compras = '';
        for (let i = 0 ; i < carrito.length ; i++) {
            compras += carrito[i].unidad +" unidades de "+ carrito[i].producto +" = "+ " $"+ carrito[i].unidad*carrito[i].precio + '\n';
        }
        alert(compras);
    }



const total = carrito.reduce((acu, el) => acu + el.precio * el.unidad, 0);
alert("El precio total es: $"+ total);
alert("Gracias por su compra!")