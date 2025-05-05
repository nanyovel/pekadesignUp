export const PropsSchema = {
  url: "",
  titulo: "",
  subTitulo: "",

  areas: [
    {
      area: "",
      fotos: [
        {
          url: "",
          texto: "",
          resumida: false,
        },
      ],
    },
  ],

  principales: {
    huespedes: {
      qty: "",
    },
    habitaciones: {
      qty: "",
    },
    camas: {
      qty: "",
    },
    bannios: {
      qty: "",
    },
  },

  amenidades: [
    {
      categoria: "",
      code: "",
      icono: "",
      texto: "",
      resumido: false,
    },
  ],
  textoCopy: {
    tituloPrincipal: "",
    copyResumido: "",
    parrafos: [
      {
        titulo: "",
        texto: "",
      },
    ],
  },
  lugaresCercano: [
    {
      tipo: "",
      lugares: [
        {
          nombre: "",
          distanciaKM: "",
          mntsDistancia: "",
          logo: "",
          comoLlegar: "",
        },
      ],
    },
  ],
  location: "",
  calificacionPromedio: "",
  anfitrion: {
    userId: "",
    textoBienvenida: "",
    profesion: "",
    pasaTiempo: "",
    idiomas: [],
    residencia: "",
    estudioEn: "",
    filosofiaDeVida: "",
  },
};
