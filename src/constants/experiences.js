import ImageBeautyExperience from '../assets/images/EXP_BeautyExperience.png';
import BEImage0 from '../assets/images/ExpBE_0.jpg';
import BEImage1 from '../assets/images/ExpBE_1.jpg';
import BEImage2 from '../assets/images/ExpBE_2.jpg';
import BEImage3 from '../assets/images/ExpBE_3.jpg';
import BEImage4 from '../assets/images/ExpBE_4.jpg';
import maniImage from '../assets/images/Manicure.png';
import maniGeliImage from '../assets/images/Manicure_Gelish.png';
import pediImage from '../assets/images/pedicure.png';
import pediGeliImage from '../assets/images/Pedicure_Gelish.png';
import geliImage from '../assets/images/Gelish.png';
import unasImage from '../assets/images/Unas.png';

const experiencesByOrigin = {
  "Cancun": {
    "BeautyExperience": {
      "es": {
        "title": "Beauty Experience",
        "description": "Peinado, Maquillaje, Bebidas. Incluye traslado.",
        "longDescription": "Esta experiencia te dará la oportunidad de tener todos esos servicios que requieres para verte espectacular en ese evento tan esperado. Contamos con todos los servicios necesarios de la mano con un equipo experto y con la seguridad que usaremos productos de la más alta calidad para que tu solo te procupes por divertirte en esa fecha especial.",
        "languages": "Inglés/Español",
        "image": ImageBeautyExperience,
        "price": 2999,
        "timeLength": 'Variable',
        "numberOfPeople": "A elegir",
        "upSellText": "Complementa tu Beauty Experience con alguno de nuestros servicios adicionales de belleza.",
        "upSells": [
          {
            "title": "Manicure Clásico",
            "price": 660,
            "image": maniImage,
          },
          {
            "title": "Manicure + Gelish",
            "price": 1100,
            "image": maniGeliImage,
          },
          {
            "title": "Pedicure Clásico",
            "price": 750,
            "image": pediImage,
          },
          {
            "title": "Pedicure + Gelish",
            "price": 1200,
            "image": pediGeliImage,
          },
          {
            "title": "Servicio Gelish",
            "price": 450,
            "image": geliImage,
          },
          {
            "title": "Uñas Acrílicas Clásicas",
            "price": 1290,
            "image": unasImage,
          },
        ],
        "city": "Cancún",
        "state": "Quintana Roo",
        "headerImages": [BEImage0, BEImage1, BEImage2, BEImage3, BEImage4],
        "offDays": [0],
      },
      "en": {
        "title": "Beauty Experience",
        "description": "Hair, Makeup, Drinks. Includes transportation to and from.",
        "longDescription": "This experience will give you the opportunity to receive all the pampering that you need to look spectacular for your big event. We have all the necessary services on hand with an expert team and the confidence that the highest quality products bring with them so that you only have to worry about having fun on that special day.",
        "languages": "English/Spanish",
        "image": ImageBeautyExperience,
        "price": 2999,
        "timeLength": 'Variable',
        "numberOfPeople": "As needed",
        "upSellText": "Complete your Beauty Experience with some of our aditional beauty services.",
        "upSells": [
          {
            "title": "Classic Manicure",
            "price": 660,
            "image": BEImage0,
          },
          {
            "title": "Manicure + Gelish",
            "price": 1100,
            "image": BEImage0,
          },
          {
            "title": "Classic Pedicure",
            "price": 750,
            "image": BEImage0,
          },
          {
            "title": "Pedicure + Gelish",
            "price": 1200,
            "image": BEImage0,
          },
          {
            "title": "Gelish Srvice",
            "price": 450,
            "image": BEImage0,
          },
          {
            "title": "Classic Acrylic Nails",
            "price": 1290,
            "image": BEImage0,
          },
        ],
        "city": "Cancún",
        "state": "Quintana Roo",
        "headerImages": [BEImage0, BEImage1, BEImage2, BEImage3, BEImage4],
        "offDays": [0],
      }
    }
  },
  "Playa Del Carmen": {
  }
};

export { experiencesByOrigin };