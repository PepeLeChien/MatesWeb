function calcularPerimetroCuadrado() {
    const lado = document.getElementById("input-square").value;
    const perimetro = lado * 4;
    const resultado = document.getElementById("result-square");
    resultado.innerHTML = `El perímetro es ${perimetro}u`;
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("input-square").value;
    const area = lado * lado;
    const resultado = document.getElementById("result-square");
    resultado.innerHTML = `El área es ${area} u^2`;
}

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("input-triangle-1").value);
    const lado2 = Number(document.getElementById("input-triangle-2").value);
    const base = Number(document.getElementById("input-triangle-base").value);
    const perimetro = lado1 + lado2 + base;
    const resultado = document.getElementById("result-triangle");
    resultado.innerHTML = `El perímetro es ${perimetro}`;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("input-triangle-base").value;
    const altura = document.getElementById("input-triangle-height").value;
    const area = (base * altura) / 2;
    const resultado = document.getElementById("result-triangle");
    resultado.innerHTML = `El área es ${area} u^2`;
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("input-circle").value;
    const diametro = radio * 2;
    const perimetro = (diametro * Math.PI).toFixed(2);
    const resultado = document.getElementById("result-circle");
    resultado.innerHTML = `El perímetro es ${perimetro} u`;
}

function calcularAreaCirculo() {
    const radio = document.getElementById("input-circle").value;
    const area = ((radio * radio) * Math.PI).toFixed(2);
    const resultado = document.getElementById("result-circle");
    resultado.innerHTML = `El área es ${area} u^2`;
}

function calcularAlturaIsosceles(lado1,lado2,lado3) {
    if (lado1 == lado2 && lado1 !== lado3) {
        const a = lado1;
        const b = lado3;
        const altura = (Math.sqrt((a*a) - ((b*b)/4))).toFixed(2);
        return altura;
    } else if (lado1 == lado3 && lado1 !== lado2) {
        const a = lado1;
        const b = lado2;
        const altura = (Math.sqrt((a*a) - ((b*b)/4))).toFixed(2);
        return altura;
    } else if (lado2 == lado3 && lado2 !== lado1) {
        const a = lado2;
        const b = lado1;
        const altura = (Math.sqrt((a*a) - ((b*b)/4))).toFixed(2);
        return altura;
    } else {
        alert("No es un triángulo Isosceles");
    }
}
