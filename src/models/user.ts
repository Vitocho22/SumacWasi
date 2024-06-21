export class User {
  dni: string;
  password: string;
  rol: string;

  constructor(dni: string, password: string, rol: string
  ) {
      this.dni = dni,
      this.password = password,
      this.rol = rol
  }

}
