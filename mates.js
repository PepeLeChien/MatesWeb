function calcularPerimetroCuadrado() {
    const lado = document.getElementById("input-cuadrado").value;
    const perimetro = lado * 4;
    const resultado = document.getElementById("figures__square--result");
    resultado.innerHTML = `El perímetro del cuadrado es ${perimetro}`;
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("input-cuadrado").value;
    const area = lado * lado;
    const resultado = document.getElementById("figures__square--result");
    resultado.innerHTML = `El área del cuadrado es ${area} u^2`;
}

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("input-triangulo-lado1").value);
    const lado2 = Number(document.getElementById("input-triangulo-lado2").value);
    const base = Number(document.getElementById("input-triangulo-base").value);
    const perimetro = lado1 + lado2 + base;
    const resultado = document.getElementById("figures__triangle--result");
    resultado.innerHTML = `El perímetro del triángulo es ${perimetro}`;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("input-triangulo-base").value;
    const altura = document.getElementById("input-triangulo-altura").value;
    const area = (base * altura) / 2;
    const resultado = document.getElementById("figures__triangle--result");
    resultado.innerHTML = `El área del triángulo es ${area} u^2`;
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("input-circulo").value;
    const diametro = radio * 2;
    const perimetro = (diametro * Math.PI).toFixed(2);
    const resultado = document.getElementById("figures__circle--result");
    resultado.innerHTML = `El perímetro del circulo es ${perimetro}`;
}

function calcularAreaCirculo() {
    const radio = document.getElementById("input-circulo").value;
    const area = ((radio * radio) * Math.PI).toFixed(2);
    const resultado = document.getElementById("figures__circle--result");
    resultado.innerHTML = `El área del circulo es ${area} u^2`;
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
