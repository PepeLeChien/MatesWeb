function calcularPromedio(arr){
    const sumSalaries = arr.reduce( (a,b) => a + b );
    const average = sumSalaries / arr.length;
    return average
}

function calcularMedianaListas(arr) {
    const arrSalaries = arr.map(function(object){
        return object.sueldo;
    })
    const ascendSalaries = arrSalaries.sort( (a,b) => a - b );
    
    const middlePosition = parseInt(ascendSalaries.length / 2);
    let median;
    if (ascendSalaries.lenght % 2 === 0) {
        median = ascendSalaries[middlePosition]
    } else {
        let firstMedian = ascendSalaries[middlePosition - 1];
        let secondMedian = ascendSalaries[middlePosition];
        median = calcularPromedio([firstMedian,secondMedian]);
    }
    return median;
}

function calcularPromedioListas(arr) {
    const arrSalaries = arr.map( (object) => object.sueldo);
    const average = calcularPromedio(arrSalaries);
    return average;
}

