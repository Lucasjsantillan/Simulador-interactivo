alert("¡BIENVENIDOS A CURRY II! La tienda de relojes numero 1 en el mundo. ")
let totalCompra = 0
let seguirComprando = true
alert("A continuacion le mostraremos un listado de las mejores marcas de relojes en el mundo y precios SIN impuestos incluidos, ingrese el codigo del articulo que desea comprar.")
let productoSeleccionado = parseInt(prompt("Precio SIN Impuestos incluidos 1-Rolex = Costo Total $45000, 2-Patek Philippe = Costo Total $40000, 3-Richard Mille = Costo Total $50000, 4-Breguet = Costo Total $10000"))
let producto = []
let carrito = []
const rolex = {
    nombre: 'Rolex',
    precio: 45000
}
producto.push(rolex)
const patekphilippe = {
    nombre: 'Patek Philippe',
    precio: 40000
}
producto.push(patekphilippe)
const richardmille = {
    nombre: 'Richard Mille',
    precio: 50000
}
producto.push(richardmille)
const breguet = {
    nombre: 'Breguet',
    precio: 10000
}
producto.push(breguet)

while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        carrito.push(producto[0])
    } else if (productoSeleccionado === 2) {
        carrito.push(producto[1])
    } else if (productoSeleccionado === 3) {
        carrito.push(producto[2])
    } else if (productoSeleccionado === 4) {
        carrito.push(producto[3])
    } else {
        productoSeleccionado = parseInt(prompt("SELECCIONE EL CODIGO CORRECTO: Precio SIN Impuestos incluidos 1-Rolex = Costo Total $45000, 2-Patek Philippe = Costo Total $40000, 3-Richard Mille = Costo Total $50000, 4-Breguet = Costo Total $10000"))
        continue
    }
    let decision = parseInt(prompt("Desea seguir comprando articulos? 1-SI 2-NO"))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt("Precio SIN Impuestos incluidos 1-Rolex = Costo Total $45000, 2-Patek Philippe = Costo Total $40000, 3-Richard Mille = Costo Total $50000, 4-Breguet = Costo Total $10000"))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

for (const elemento of carrito) {
    totalCompra = totalCompra + elemento.precio
}

function calcularDescuento(valor) {
    let descuento = 10
    let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
    return valor
}
function calcularValorCuota(valor) {
    let valorCuota = 0
    valorCuota = totalCompra / valor
    return valorCuota
}
function calcularImpuestos(valor) {
    let impuestos = valor * (22 / 100)
    return valor + impuestos
}
alert("Total de compra de relojes SIN IMPUESTOS ES DE " + '$' + totalCompra)
let modoPago = parseInt(prompt("QUE FORMA DE PAGO DESEA? 1-AL CONTADO tiene un descuento del 10%, 2-TARJETA DE CREDITO"))
if (modoPago === 1) {
    let valorDescuento = calcularDescuento(totalCompra)
    alert("El total con descuentos incluidos es de " + '$' + valorDescuento)
    totalCompra = valorDescuento
} else if (modoPago === 2) {
    let cantidadCuotas = parseInt(prompt("En cuantas cuotas desea hacer el pago?, El maximo de cuotas es de 6"))
    if (cantidadCuotas > 0 && cantidadCuotas <= 6) {
        let totalCuota = calcularValorCuota(cantidadCuotas)
        alert("El pago se realizara en " + cantidadCuotas + " cuotas de " + '$' + totalCuota + " Sin impuestos incluidos")
    }
}
let totalFinal = calcularImpuestos(totalCompra)
alert("El total de la compra con impuestos incluidos es de " + '$' + totalFinal)
alert(" Gracias por su compra en ¡CURRY II! La tienda de relojes numero 1 en el mundo. ")
