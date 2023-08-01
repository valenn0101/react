import { getSaludo } from "../../base/02-template-string";

describe("Probando los string", () => {
  test("Probando metodo getSaludo", () => {
    const nombre = "Valentin";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("Deberia devolver Candelaria", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Candelaria");
  });
});
