function calcularPromedio (lista) {
    // let sumaLista = 0;
    // for (let i = 0 ; i < lista.length ; i++) {
    //     sumaLista += lista[i]; 
    // }
    const sumaLista = lista.reduce( function (valorAcumulado = 0, nuevoElemento ) {
        return valorAcumulado + nuevoElemento;
    }); 

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// [2,4,6,8].reduce(function(valorAnterior, valorActual){
//    return valorAnterior + valorActual;
// });
// return = 20;



