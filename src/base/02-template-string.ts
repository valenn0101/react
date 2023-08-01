const nombre = "Valentin";
const apellido = "Veron";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

export function getSaludo(nombre = "Candelaria") {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}  `);
