function javascript1() {
    let num1 = Number(prompt("Ingrese un número: "))
    let num2 = Number(prompt("Ingrese otro número: "))
    alert(num1 + num2)
}

function javascript2() {
    let num1 = Number(prompt("Ingrese un número: "))
    let num2 = Number(prompt("Ingrese otro número: "))
    alert(num1 * num2)
}

function javascript3() {
    let num1 = Number(prompt("Ingrese un número: "))
    alert("Los grados que ha elegido: " + num1)
    alert("Los grados en Fahrenheit: " + (num1 * 1.8) + 32)
    alert("Los grados en Kelvin: " + (num1 + 273.15))
}

function javascript4() {
    let num1 = Number(prompt("Dime el valor del lado de un cuadrado: "))
    alert("El área del cuadrado es: " + num1 * num1)
}

function javascript5() {
    let num1 = Number(prompt("Dime el valor del radio de un círculo: "))
    alert("El área del círculo es: " + Math.PI * num1 * num1)
}

function javascript6() {
    let num1 = Number(prompt("Dime el precio del pantalón: "))
    let num2 = Number(prompt("Dime el porcentaje de descuento: "))
    let num3 = num1 * num2 / 100
    let precio_Final = num1 - num3
    alert("La cantidad que has ahorrado es: " + num3)
    alert("La cantidad final que has pagado es: " + precio_Final)
}

function javascript7() {
    let precio_Gasolina = Number(prompt("Dime cuanto has gastado en gasolina: "))
    let precio_Hotel = Number(prompt("Dime cuanto has gastado en hotel: "))
    let precio_Restaurante = Number(prompt("Dime cuanto has gastado en restaurante: "))
    let precio_Final = precio_Gasolina + precio_Hotel + precio_Restaurante
    let precio_Gasolina_Final = precio_Gasolina / precio_Final * 100
    let precio_Hotel_Final = precio_Hotel / precio_Final * 100
    let precio_Restaurante_Final = precio_Restaurante / precio_Final * 100
    alert("El porcentaje que has gastado en gasolina es de: " + precio_Gasolina_Final.toFixed(2) + "%")
    alert("El porcentaje que has gastado en Hotel es de: " + precio_Hotel_Final.toFixed(2) + "%")
    alert("El porcentaje que has gastado en restaurante es de: " + precio_Restaurante_Final.toFixed(2) + "%")
    // .toFixed(2) es para que solo muestre dos decimales sólo
}

function javascript8() {
    let num1 = Number(prompt("Dime un número: "))
    if (num1 === 0) {
        alert("El número es nulo")
    } else {
        alert("El número no es nulo")
    }
}

function javascript9() {
    let num1 = Number(prompt("Dime un número: "))
    if (num1 > 0) {
        alert("El número es positivo")
    } else {
        alert("El número no es positivo")
    }
}

function javascript10() {
    let num1 = Number(prompt("Dime un número: "))
    let num2 = Number(prompt("Dime otro número: "))
    let sum_num = num1 + num2

    if (sum_num > 0) {
        alert("El número es positivo")
    } else {
        alert("El número no es positivo")
    }
}

function javascript11() {
    let num1 = Number(prompt("Dime un número: "))
    let num2 = Number(prompt("Dime otro número: "))
    let total = num1 + num2
    if (total > 10 && total > ((total * 2) > 50)) {
        alert("Este sí")
    } else {
        alert("Este no")
    }
}

function javascript12() {
    let edad = Number(prompt("Dime tu edad: "))
    if (edad >= 25 && edad <= 45) {
        alert("Nos vale")
    } else {
        alert("No nos vale")
    }
}

function javascript13() {
    let num1 = Number(prompt("Dime un número: "))
    let num2 = Number(prompt("Dime otro número: "))

    let num1_user = Number(prompt("Dime la suma de los dos números: "))
    let num2_user = Number(prompt("Dime la resta de los dos números: "))

    if (num1_user === num1 + num2 && num2_user === num1 - num2) {
        alert("Muy bien")
    } else {
        alert("Así no")
    }
}

function javascript14() {
    let num_mes = Number(prompt("Dime un número del 1 al 12: "))
    if (num_mes >= 1 && num_mes <= 12) {
        alert("Correcto")
    } else {
        alert("No correcto")
    }
}

function javascript15() {
    let a = Number(prompt("Dime un número: "))
    let b = Number(prompt("Dime otro número: "))
    let c = Number(prompt("Dime otro número: "))
    let x = Number(prompt("Dime el valor de x: "))

    if (a || b || c < 0) {
        alert("No tiene solución real")
    } else {
        alert("El número es: " + a * (x ** 2) + b * x + c)
    }
}

function javascript16() {
    let num1 = Number(prompt("Dime un número: "))
    let num2 = Number(prompt("Dime otro número: "))

    if (num2 <= 0) {
        alert("No se puede dividir por cero")
    } else {
        alert("El cociente de la división es: " + num1 / num2)
        alert("El resto de la división es: " + num1 % num2)
    }
}

function javascript17() {
    let num1 = Number(prompt("Dime un número: "))
    let num2 = Number(prompt("Dime otro número: "))

    if (num1 === 0) {
        alert("1")
    } else {
        alert(num1 ** num2)
    }
}

function javascript18() {

    let a = Number(prompt("Introduce el primer número:"));
    let b = Number(prompt("Introduce el segundo número:"));
    let c = Number(prompt("Introduce el tercer número:"));

    let temporal;

    if (a > b) {
        temporal = a;
        a = b;
        b = temporal;
    }

    if (b > c) {
        temporal = b;
        b = c;
        c = temporal;
    }

    if (a > b) {
        temporal = a;
        a = b;
        b = temporal;
    }

    console.log("Números ordenados de forma creciente:");
    console.log(a, b, c);
}

function javascript19() {
    let base1 = Number(prompt("Introduce la base del primer triángulo:"));
    let altura1 = Number(prompt("Introduce la altura del primer triángulo:"));

    let base2 = Number(prompt("Introduce la base del segundo triángulo:"));
    let altura2 = Number(prompt("Introduce la altura del segundo triángulo:"));

    let base3 = Number(prompt("Introduce la base del tercer triángulo:"));
    let altura3 = Number(prompt("Introduce la altura del tercer triángulo:"));

    let area1 = (base1 * altura1) / 2;
    let area2 = (base2 * altura2) / 2;
    let area3 = (base3 * altura3) / 2;

    if (area1 >= area2 && area1 >= area3) {
        alert("Triángulo con mayor superficie:");
        alert("Base: " + base1);
        alert("Altura: " + altura1);
        alert("Área: " + area1);
    } else if (area2 >= area1 && area2 >= area3) {
        alert("Triángulo con mayor superficie:");
        alert("Base: " + base2);
        alert("Altura: " + altura2);
        alert("Área: " + area2);
    } else {
        alert("Triángulo con mayor superficie: ");
        alert("Base: " + base3);
        alert("Altura: " + altura3);
        alert("Área: " + area3);
    }
}