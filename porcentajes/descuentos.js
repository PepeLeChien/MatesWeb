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

function calcularCupon() {
    const precioOriginal = document.getElementById("coup-price--input").value;
    const cupon = document.getElementById("coup-discount--input").value;
    
    const cuponValido = function (coupons) {
        return coupons.name === cupon;
    }
    const cuponUsuario = coupons.find(cuponValido);
    const resultado = document.getElementById("coup-price--result");


    if (!cuponUsuario) {
        resultado.innerHTML = `No existe el cupón: "${cupon}"`;
    } else {
        const porcentajeDescuento = cuponUsuario.discount;
        const precioDescuento = ((100 - porcentajeDescuento) * precioOriginal) / 100;
        resultado.innerHTML = `El precio del producto con el cupón "${cupon}" es $${precioDescuento}`;
    }
}

const coupons = [
    {
        name: "hostinger",
        discount: 15,
    },
    {
        name: "nemensio",
        discount: 20,
    },
    {
        name: "zapacosta",
        discount: 30,
    }
]

