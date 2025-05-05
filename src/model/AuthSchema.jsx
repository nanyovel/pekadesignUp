export const UserSchema = {
  // Estado del usuario:
  // 0-Activo
  // 1-Inactivo temporalmente
  // 2-Penalizado
  estadoDoc: "",
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  correo: "",
  telefono: "",
  nacionalidad: {
    pais: "",
    siglas: "",
  },
  createAt: "",
  urlFotoPerfil: "",
  privilegios: [],
  genero: "",
  redesSociales: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
  textoBiografia: "",
};
