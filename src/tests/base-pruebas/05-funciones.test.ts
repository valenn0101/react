import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en funciones", () => {
  test("debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("Debe retornar el usuario activo", () => {
    const nombre = "Valentin";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
