//FUNCION donde se le pasen por parametro  todas las notas de un alumno en un arreglo y la cantidad de notas y retorne el promedio

function calcularPromedio(notas) {
  let resultado = 0;
  let promedio = 0;
  for (let index = 0; index < notas.length; index++) {
    resultado = resultado + notas[index];
  }
  promedio = resultado / notas.length;
  return promedio;
}

//INTERACCION c usuario

alert("Bienvenido al simulador");
let notas = [];
//el prompt devuelve un string

let nota = prompt("Ingrese su nota. Para terminar ingrese '-'.");
while (nota != "-") {
  let notaInt = parseInt(nota);
  if (isNaN(notaInt) || notaInt > 10 || notaInt < 0) {
    alert("nota invalida");
  } else {
    notas.push(notaInt);
  }
  nota = prompt("ingrese su nota"); // vuelve a pedir otra nota p volver a entrar al while
}

alert("el promedio de notas es: " + calcularPromedio(notas));
