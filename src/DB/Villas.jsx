import Img1 from "./../../public/img/rostroMujer1.jpg";
import Img2 from "./../../public/img/woman4.jpg";
import Img3 from "./../../public/img/man13.jpg";
import ImgCamarero from "./../../public/marcas/camarero.png";
import ImgSBG from "./../../public/marcas/sbgPuntaCana.jpg";
import ImgONNO from "./../../public/marcas/onnoBar.jpg";
import ImgCaesar from "./../../public/marcas/onnoBar.jpg";
import ImgMcDonal from "./../../public/marcas/mcDonald.jpg";
import ImgBurguerKing from "./../../public/marcas/burgerKing.png";
import ImgDomino from "./../../public/marcas/dominosPizza.png";
import ImgAgora from "./../../public/marcas/agoraMall.jpg";
import ImgBlueMall from "./../../public/marcas/blueMall.jpg";
import ImgPlayaMacao from "./../../public/marcas/playa.jpg";
import ImgSmartFit from "./../../public/marcas/smartFit.jpg";

import ImgPeriquera from "./../../public/icon/periquera.png";
import ImgTostadora from "./../../public/icon/tostadora.png";
import ImgArrocera from "./../../public/icon/arrocera.png";
import ImgComedor from "./../../public/icon/comedor.png";
import ImgLavanderia from "./../../public/icon/lavanderia.png";
import ImgTumbona from "./../../public/icon/tumbona.png";
import {
  IconoAireAcon,
  IconoBalcon,
  IconoBBQ,
  IconoBlackOut,
  IconoBotiquin,
  IconoCafetera,
  IconoCalendario,
  IconoCama,
  IconoCarro,
  IconoCCTV,
  IconoCloset,
  IconoCobija,
  IconoCocina,
  IconoCuchara,
  IconoCupHot,
  IconoCupWine,
  IconoDesk,
  IconoDoorClose,
  IconoDucha,
  IconoEsq,
  IconoEstufa,
  IconoExtintor,
  IconoFlower,
  IconoGel,
  IconoGrid,
  IconoHorno,
  IconoHumo,
  IconoHumo2,
  IconoJabon,
  IconoJacucci,
  IconoKey,
  IconoLicuadora,
  IconoLlaves,
  IconoMaletas,
  IconoMicroWave,
  IconoNevera,
  IconoOlla,
  IconoPercha,
  IconoPiscina,
  IconoPlancha,
  IconoProductClean,
  IconoSecadora,
  IconoSecadoraPelo,
  IconoShampoo,
  IconoSinEscalera,
  IconoSnow,
  IconoSonido,
  IconoSpray,
  IconoTaza,
  IconoTelevision,
  IconoToilet,
  IconoWashMachine,
  IconoWifi,
} from "../components/ConjuntoIconos";
import RostroMujer3 from "./../../public/img/woman4.jpg";
import RostroHombre12 from "./../../public/img/man12.jpg";
import RostroHombre13 from "./../../public/img/man13.jpg";
import EEUU from "./../../public/img/estados-unidos.png";
import Francia from "./../../public/img/francia.png";
import Australia from "./../../public/img/australia.png";
import ImgCama from "./../../public/icon/cama.png";
import ImgHabitacion from "./../../public/icon/habitacion.png";
import ImgPeople from "./../../public/icon/people.png";
import ImgDucha from "./../../public/icon/ducha.png";

export const Villas = [
  {
    // id: "",
    url: "villa-koi-punta-cana-firebase",
    titulo: "Villa Koi Punta Cana",
    imagenDestacada: "",
    fotos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjEzMDE3NDA5MjQ3Mjg5MQ%3D%3D/original/3513a864-90ce-457b-a8eb-6f7c9faa9548.jpeg?im_w=1200&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjEzMDE3NDA5MjQ3Mjg5MQ%3D%3D/original/629d535f-22f5-45d7-8f62-e6a9e846acf5.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1156130174092472891/original/b60754b4-01b9-4215-a0f1-841290e9ebae.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1156130174092472891/original/0b4854e6-28a2-4c43-9089-98d3717fa9b8.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjEzMDE3NDA5MjQ3Mjg5MQ%3D%3D/original/4fdbed20-b049-4254-9bed-e23f21aa8ad2.jpeg?im_w=720&im_format=avif",
    ],
    subTitulo: "Villa de lujo en Punta Cana: La escapada que necesitas.",
    resennia: [
      {
        puntuacion: 5,
        review: "Excelenete y acogedor lugar, lo recomiendo al 100%.",
        nombreUsuario: "Emily Wilson",
        urlFotoPerfil: Img1,
      },
      {
        puntuacion: 5,
        review: "Excelenete y acogedor lugar, lo recomiendo al 100%.",
        nombreUsuario: "Emily Wilson",
        urlFotoPerfil: Img2,
      },
      {
        puntuacion: 5,
        review: "Excelenete y acogedor lugar, lo recomiendo al 100%.",
        nombreUsuario: "Emily Wilson",
        urlFotoPerfil: Img3,
      },
    ],

    principal: [
      {
        texto: "6 Huespedes",
        icono: ImgPeople,
      },
      {
        texto: "3 habitaciones",
        icono: ImgHabitacion,
      },
      {
        texto: "3 Camas",
        icono: ImgCama,
      },
      {
        texto: "2 baños",
        icono: ImgDucha,
      },
    ],

    lugaresCercanos: {
      restaurantes: [
        {
          nombre: "Restaurante Pepito",
          distanciaKM: 3,
          mntsDistancia: 2,
          logo: ImgCamarero,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          nombre: "SBG Punta Cana",
          distanciaKM: 2,
          mntsDistancia: 2,
          logo: ImgSBG,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          nombre: "Onno Bar",
          distanciaKM: 4,
          mntsDistancia: 1,
          logo: ImgONNO,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
      ],
      comidaRapida: [
        {
          nombre: "Little Caesars",
          distanciaKM: 2,
          mntsDistancia: 3,
          logo: ImgCaesar,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          nombre: "Mc Donald",
          distanciaKM: 4,
          mntsDistancia: 2,
          logo: ImgMcDonal,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          nombre: "Burger King",
          distanciaKM: 2,
          mntsDistancia: 1,
          logo: ImgBurguerKing,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          nombre: "Dominos Pizza",
          distanciaKM: 3,
          mntsDistancia: 5,
          logo: ImgDomino,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
      ],
      centroComerciales: [
        {
          nombre: "Agora Mall",
          distanciaKM: 4,
          mntsDistancia: 6,
          logo: ImgAgora,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
        {
          nombre: "Blue Mall",
          distanciaKM: 2,
          mntsDistancia: 4,
          logo: ImgBlueMall,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
      ],
      recreativo: [
        {
          nombre: "Playa Macao",
          distanciaKM: 2,
          mntsDistancia: 7,
          logo: ImgPlayaMacao,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
      ],
      generales: [
        {
          nombre: "Smart Fit",
          distanciaKM: 3,
          mntsDistancia: 4,
          logo: ImgSmartFit,
          comoLlegar:
            'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8614.150442262177!2d-68.39845291191739!3d18.595124112232828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi%2C%20JJ25%2B7J%2C%20Punta%20Cana%2023000!3m2!1d18.598703399999998!2d-68.3916095!4m5!1s0x8ea8937028fd0159%3A0xcf58bd088f85ae20!2sAsadero%20Do%C3%B1a%20Pula!3m2!1d18.593884!2d-68.3888183!5e0!3m2!1ses-419!2sdo!4v1735994958499!5m2!1ses-419!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
        },
      ],
    },
    amenidades: [
      {
        categoria: "Baño",
        icono: IconoSecadoraPelo,
        texto: "Secadora de pelo",
      },
      {
        categoria: "Baño",
        icono: IconoProductClean,
        texto: "Productos de limpieza",
      },
      {
        categoria: "Baño",
        icono: IconoShampoo,
        texto: "Shampoo",
      },
      {
        categoria: "Baño",
        icono: IconoShampoo,
        texto: "Acondicionador",
      },
      {
        categoria: "Baño",
        icono: IconoJabon,
        texto: "Jabón corporal",
      },
      {
        categoria: "Baño",
        icono: IconoToilet,
        texto: "Bidé",
      },

      {
        categoria: "Baño",
        icono: IconoDucha,
        texto: "Regadera exterior",
      },
      {
        categoria: "Baño",
        icono: IconoJacucci,
        texto: "Agua caliente",
        resumida: true,
      },
      {
        categoria: "Baño",
        icono: IconoGel,
        texto: "Gel para baño",
      },
      // -----hab
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoWashMachine,
        texto: "Lavadora De pago",
        resumida: true,
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoPercha,
        texto: "Ganchos",
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoSecadora,
        texto: "Secadora",
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoCama,
        texto: "Ropa de cama",
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoCobija,
        texto: "Almohadas y cobijas adicionales",
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoBlackOut,
        texto: "Persianas o cortinas opacas",
        resumida: true,
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoPlancha,
        texto: "Plancha",
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoPercha,
        texto: "Tendedero para ropa",
      },
      {
        categoria: "Habitacion y lavanderia",
        icono: IconoCloset,
        texto: "Espacio para guardar ropa",
      },
      // Entretenimiento
      {
        categoria: "Entretenimiento",
        icono: IconoTelevision,
        resumida: true,
        texto:
          'Televisión HD con pantalla de 175" y Netflix, Video de Amazon Prime, Apple TV, Disney+, Hulu',
      },
      {
        categoria: "Entretenimiento",
        icono: IconoSonido,
        resumida: true,
        texto: "Sistema de sonido",
      },
      // Para la familia
      {
        categoria: "Para la familia",
        iconoImg: true,
        icono: ImgPeriquera,
        texto: "Periquera",
      },
      {
        categoria: "Para la familia",
        icono: IconoCuchara,
        texto: "Platos y cubiertos para niños",
      },
      {
        categoria: "Para la familia",
        icono: IconoGrid,
        texto: "Seguros para ventanas",
      },
      {
        categoria: "Para la familia",
        icono: IconoEsq,
        texto: "Protectores para esquinas de mesa",
      },
      // calefaccion y refrigeracion
      {
        categoria: "Climatizacion",
        icono: IconoSnow,
        resumida: true,
        texto: "Sistema de aire acondicionado sin conductos tipo split",
      },
      // Seguridad
      {
        categoria: "Seguridad",
        icono: IconoCCTV,
        resumida: true,
        texto: "Cámaras de seguridad exteriores en la propiedad",
      },
      {
        categoria: "Seguridad",
        icono: IconoHumo,
        texto: "Detector de humo",
      },
      {
        categoria: "Seguridad",
        icono: IconoHumo2,
        texto: "Detector de monóxido de carbono",
      },
      {
        categoria: "Seguridad",
        icono: IconoExtintor,
        texto: "Extintor de incendios",
      },
      {
        categoria: "Seguridad",
        icono: IconoBotiquin,
        texto: "Botiquín",
      },
      // Internet y oficina
      {
        categoria: "Internet y oficina",
        icono: IconoWifi,

        texto: "Wifi",
      },
      {
        categoria: "Internet y oficina",
        icono: IconoDesk,
        resumida: true,
        texto: "Area para trabajar",
      },
      // Cocina y comedor
      {
        categoria: "Cocina y comedor",
        icono: IconoCocina,
        texto: "Cocina",
        resumida: true,
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoNevera,
        texto: "Refrigerador",
        resumida: true,
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoMicroWave,
        texto: "Microondas",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoCocina,
        texto: "Artículos básicos de cocina",
        subTitulo: "Ollas y sartenes, aceite, sal y pimienta",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoOlla,
        texto: "Platos y cubiertos",
        subTitulo: "Platos hondos, palillos chinos, platos, tazas, etc.",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoNevera,
        texto: "Mini refrigerador",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoNevera,
        texto: "Congelador",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoEstufa,
        texto: "Estufa",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoHorno,
        texto: "Horno",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoCupHot,
        texto: "Jarra eléctrica para el agua caliente",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoCafetera,
        texto: "Cafetera",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoCupWine,
        texto: "Copas de vino",
      },
      {
        categoria: "Cocina y comedor",
        icono: ImgTostadora,
        iconoImg: true,
        texto: "Tostadora",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoLicuadora,
        texto: "Licuadora",
      },
      {
        categoria: "Cocina y comedor",

        iconoImg: true,
        icono: ImgArrocera,
        texto: "Arrocera",
      },
      {
        categoria: "Cocina y comedor",
        icono: ImgComedor,
        iconoImg: true,
        texto: "Mesa de comedor",
      },
      {
        categoria: "Cocina y comedor",
        icono: IconoTaza,
        texto: "Café",
      },
      // Info sobre ubicacion
      {
        categoria: "Sobre ubicacion",
        icono: IconoDoorClose,
        texto: "Entrada privada",
        subTitulo: "Entrada por otra calle o edificio",
      },
      {
        categoria: "Sobre ubicacion",
        icono: ImgLavanderia,
        iconoImg: true,
        texto: "Lavandería cercana",
      },
      // Exterior
      {
        categoria: "Exterior",
        icono: IconoBalcon,
        texto: "Terraza o balcón",
        resumida: true,
      },

      {
        categoria: "Exterior",
        icono: IconoFlower,
        texto: "Jardín privado, Con valla en todo el perímetro",
        subTitulo:
          "Un espacio abierto en la propiedad generalmente cubierto de pasto",
      },
      {
        categoria: "Exterior",
        icono: IconoBBQ,
        texto: "Asador",
        resumida: true,
      },
      {
        categoria: "Exterior",
        icono: ImgTumbona,
        iconoImg: true,
        texto: "Camastros",
      },
      // Estacionamiento e instalaciones
      {
        categoria: "Estacionamiento e instalaciones",
        icono: IconoCarro,
        texto:
          "Estacionamiento techado gratuito en las instalaciones: 2 espacios",
      },
      {
        categoria: "Estacionamiento e instalaciones",
        icono: IconoPiscina,
        resumida: true,
        texto: "Alberca exterior privada: disponible todo el año, climatizada",
      },
      {
        categoria: "Estacionamiento e instalaciones",
        icono: IconoSinEscalera,
        texto: "Alojamiento de un solo piso",
        subTitulo: "Alojamiento sin escaleras",
      },
      // Servicios
      {
        categoria: "Servicios",
        icono: IconoMaletas,
        texto: "Se permite dejar el equipaje",
        subTitulo:
          "Opción de llegar pronto o salir tarde para la comodidad de los huéspedes",
      },
      {
        categoria: "Servicios",
        icono: IconoCalendario,
        texto: "Disponible para estancias largas",
        resumida: true,
        subTitulo: "Permite estancias de 28 días o más",
      },
      {
        categoria: "Servicios",
        icono: IconoLlaves,
        texto: "Llegada autónoma",
      },
      {
        categoria: "Servicios",
        icono: IconoKey,
        texto: "Teclado",
        subTitulo:
          "Entra al alojamiento de manera independiente gracias a un código en la puerta",
      },
      {
        categoria: "Servicios",
        icono: IconoSpray,
        texto:
          "Servicio de limpieza disponible, de 11:00 a.m. a 3:00 p.m., todos los días: disponible por un costo adicional",
      },
    ],
    textoCopyDescription: {
      tituloPrincipal: "Acerca del espacio",
      parrafos: [
        {
          titulo: "",
          texto:
            "Descubre la elegancia y confort de nuestra villa en el exclusivo residencial Westside, ubicada en el corazón de Punta Cana. Este lugar privado te ofrece una piscina climatizada , rodeada de un entorno sereno y sofisticado. A solo minutos de los principales lugares de interés, tendrás a tu alcance playas paradisíacas, restaurantes de alta cocina, y actividades recreativas. Vive una experiencia de lujo y tranquilidad en nuestra villa, el refugio perfecto para unas vacaciones inolvidables.",
          textoResumido:
            "Descubre la elegancia y confort de nuestra villa en el exclusivo residencial Westside, ubicada en el corazón de Punta Cana. Este lugar privado te ofrece una piscina climatizada , rodeada de un entorno sereno y sofisticado...",
        },
        {
          titulo: "El alojamiento",
          texto:
            "Esta elegante casa cuenta con 3 dormitorios, cada uno con una cómoda cama tamaño queen, con capacidad para un total de 6 huéspedes. Disfruta de dos baños completos, una zona de lavandería, un comedor, un rincón de desayuno y una cocina totalmente equipada. Además, el estacionamiento cubierto para dos autos y el espacioso patio privado con piscina de agua caliente garantizan la máxima comodidad durante tu estancia.",
        },
        {
          titulo: "Acceso para huéspedes",
          texto:
            "Los huéspedes tendrán acceso total a todas las áreas de la casa, incluida la piscina privada y el patio. Además, Westside Residences ofrece seguridad las 24 horas para tu tranquilidad y comodidad durante tu estadía.",
        },
        {
          titulo: "Otros aspectos destacables",
          texto:
            "Esta propiedad está diseñada para el máximo confort y lujo. Disfruta de servicios como aire acondicionado en todas partes, domótica para mayor comodidad, cortinas eléctricas y un sistema de filtración de agua para tu estado y bienestar.",
        },
      ],
    },
    location:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3781.442600111002!2d-68.390401!3d18.599152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea893000c75cd5f%3A0xfd2f3e6f26b2ffb0!2sVilla%20Koi!5e0!3m2!1ses!2sdo!4v1735950696181!5m2!1ses!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',

    resennias: [
      {
        nombre: "Emily Wilson",
        imgPerson: RostroMujer3,
        imgBandera: Australia,
        puntuacion: 5,
        texto: "Excelenete y acogedor lugar, lo recomiendo al 100%.",
      },
      {
        nombre: "Michael Johnson",
        imgPerson: RostroHombre12,
        imgBandera: Francia,
        puntuacion: 5,
        texto: "Simplemente facinante..",
      },
      {
        nombre: "David Jones",
        imgPerson: RostroHombre13,
        imgBandera: EEUU,
        puntuacion: 5,
        texto:
          "Marilloso lugar en Punta Cana, ubicado en una zona perfecta dentro de Punta Cana",
      },
    ],
    calificacion: 5,
    anfitrion: {
      nombre: "Kostia Kindelan",
      urlFotoPerfil:
        "https://a0.muscache.com/im/pictures/user/a177079f-9e70-4575-b089-b39a82ea87a2.jpg?im_w=240&im_format=avif",
      textoBienvenida:
        " ¡Hola y bienvenido! Estoy encantado de ser tu anfitrión durante tu estancia aquí. Me llamo Kostia y es un placer asegurarme de que tu tiempo con nosotros sea nada menos que excepcional.",
      profesion: "Empresario",
      edad: "+45 años",
      pasaTiempo: "Superacion",
      idiomas: ["Español", "Ingles", "Frances"],
      nacionalidad: "Cubano",
      residencia: "Punta Cana",
      estudioEn: "Cuba",
      filosofiaDeVida:
        "Valoro la honestidad y la transparencia es base en mis relaciones personales y profesionales.",
    },
  },
];
