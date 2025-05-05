export const formatoCorreo = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
};

// Truncar un parrafo a una cantidad X de lineas con css
// display: -webkit-box;
// -webkit-line-clamp: 3; /* Número de líneas antes de cortar */
// -webkit-box-orient: vertical;
// overflow: hidden;
// text-overflow: ellipsis;
export const generarSlug = (texto) => {
  return texto
    .toLowerCase() // Convierte todo a minúsculas
    .replace(/á|à|ä|â/g, "a") // Reemplaza acentos
    .replace(/é|è|ë|ê/g, "e")
    .replace(/í|ì|ï|î/g, "i")
    .replace(/ó|ò|ö|ô/g, "o")
    .replace(/ú|ù|ü|û/g, "u")
    .replace(/ñ/g, "n") // Reemplaza la ñ por n
    .replace(/[^a-z0-9\s-]/g, "") // Elimina caracteres especiales
    .trim() // Elimina espacios en los extremos
    .replace(/\s+/g, "-") // Reemplaza espacios por guiones
    .replace(/-+/g, "-"); // Evita múltiples guiones seguidos
};
