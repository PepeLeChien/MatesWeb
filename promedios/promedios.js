let originalListArr = [];
let visualList = document.getElementById("result-list");


function añadirNumero() {
    const numberInput = Number(document.getElementById("number-input").value);
    originalListArr.push(numberInput);
    visualList.innerHTML = originalListArr;
}
function eliminarNumero() {
    originalListArr.pop();
    if (originalListArr.length == 0) {
        visualList.innerHTML = "*Ningún número introducido*";  
    } else {
        visualList.innerHTML = originalListArr;
    }
}


function calcularPromedio (lista) {
    // let sumaLista = 0;
    // for (let i = 0 ; i < lista.length ; i++) {
    //     sumaLista += lista[i]; 
    // }
    const visualAverage = document.getElementById("result-average");
    const sumaLista = lista.reduce( function (valorAcumulado = 0, nuevoElemento ) {
        return valorAcumulado + nuevoElemento;
    }); 

    const promedioLista = (sumaLista / lista.length).toFixed(2);
    visualAverage.innerHTML = `Promedio: ${promedioLista}`;
    return promedioLista;
}

// [2,4,6,8].reduce(function(valorAnterior, valorActual){
//    return valorAnterior + valorActual;
// });
// return = 20;


function calcularMediana (arr) {
    let visualMedian = document.getElementById("result-median");
    let array = arr.sort((a,b) => a - b);
    let mediana;
    let mitadLista = parseInt(array.length / 2); 
    if (array.length % 2 === 0){
        elemento1 = array[mitadLista - 1];
        elemento2 = array[mitadLista];
        mediana = calcularPromedio([elemento1,elemento2]); 
    } else {
        mediana = array[mitadLista];
    }
    visualMedian.innerHTML = `Mediana: ${mediana}`;
}


function calcularModa (arr) {
    let objetcsArr = {};
    arr.map(function(element){
        if (objetcsArr[element]) {
            objetcsArr[element] += 1;
        } else {
            objetcsArr[element] = 1;
        }
    })
    
    let countedNumbers = Object.entries(objetcsArr).sort((a,b) => a[1]-b[1]);
    let mCN = []; //mCN = mostCountedNumbers
    
    countedNumbers.map(function (elemento) {
        if (elemento[1] === countedNumbers[countedNumbers.length - 1][1]) {
            mCN.push(elemento[0])        
        }
    })
    
    return mCN;
}
