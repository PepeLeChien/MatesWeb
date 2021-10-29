function calcularPromedio(arr){
    const sumSalaries = arr.reduce( (a = 0 ,b) => a + b );
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
    if (ascendSalaries.length % 2 === 0) {
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

function calcularPromedioTop10(arr) {
    const arrSalaries = arr.map( (object) => object.sueldo);
    const ascendSalaries = arrSalaries.sort( (a,b) => a - b );
    
    const spliceStart = Math.round( ( ascendSalaries.length * 90 ) / 100 );
    const spliceCuts = ascendSalaries.length - spliceStart;
    const arrTop10 = ascendSalaries.splice(spliceStart, spliceCuts);

    const top10Average = calcularPromedio(arrTop10);
    return top10Average;
}

function isPoor(salary) {
    return salary <= 1000;
}

function diferenciaPorcentualPobres(arr) {
    const arrSalaries = arr.map( (object) => object.sueldo);

    const arrPoors = arrSalaries.filter(function(elemento){
        return isPoor(elemento);
    });
    const arrNoPoors = arrSalaries.filter(function(elemento){
        return !isPoor(elemento);
    });

    const averagePoors = Math.round(calcularPromedio(arrPoors));
    const averageNoPoors = Math.round(calcularPromedio(arrNoPoors));

    const noPoorPercentage = ( (averageNoPoors * 100) / averagePoors ).toFixed(2);
    const percentualDifference = Math.round(noPoorPercentage - 100);

    console.log(`En promedio una persona no pobre gana ${percentualDifference}% más de lo que gana un pobre`);
    return percentualDifference;
}
