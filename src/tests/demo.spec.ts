describe("Pruebas para strings", () => {
  test("Deben ser iguales los string", () => {
    const mensaje1 = "Hello world";

    const mensaje2 = "Hello world";

    expect(mensaje1).toBe(mensaje2);
  });

  test("Deberian ser diferente los string", () => {
    const mensaje1 = "Hello world";
    const mensaje2 = "Hello world!";
    expect(mensaje1).not.toBe(mensaje2);
  });
});
