// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioDescuento = 100 - descuento;
// const precioDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioDescuento
// });

function calcularPrecio () {
    const porcentajeDescuento = document.getElementById("discount--input").value;
    const precioOriginal = document.getElementById("price--input").value;

    const precioDescuento = ((100 - porcentajeDescuento) * precioOriginal) / 100;
    const resultado = document.getElementById("price--result");
    resultado.innerHTML = `El precio del producto con ${porcentajeDescuento}% de descuento es $${precioDescuento}`; 
}
