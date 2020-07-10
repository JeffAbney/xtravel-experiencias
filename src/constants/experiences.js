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
import TravelerTableMain from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/TravelerTableMain.jpg'
import TTImage0 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos1.jpg';
import TTImage1 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos5.jpg';
import TTImage2 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos6.jpg';
import TTImage3 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos8.jpg';
import TTImage4 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos15.jpg';
import TTImage5 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos21.jpg';
import TTImage6 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos26.jpg';
import TTImage7 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/alimentos41.jpg';
import TTImage8 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/aroma2.jpg';
import TTImage9 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/cocktail1.jpg';
import TTImage10 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/cocktail3.jpg';
import TTImage11 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/cocktail5.jpg';
import TTImage12 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/experiencia6.jpg';
import TTImage13 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/experiencia13.jpg';
import TTImage14 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/location4.jpg';
import TTImage15 from '../assets/images/Fotos The Traveler Table/Fotos_The_Traveler_Table/location14.jpg';
import { faShuttleVan, faUserTie, faCocktail, faServer, faWineBottle, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import TTRivieraPDF from '../assets/pdfs/Traveler_PickUp_Riviera.pdf';
import TTCancunPDF from '../assets/pdfs/Traveler_PickUp_Cancun.pdf';
import TTMenuEn from '../assets/pdfs/ENG-Traveler_menu.pdf';
import TTMenuEs from '../assets/pdfs/Esp-Traveler_menu.pdf';
import TacoMain from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR_principal.jpg'
import Taco0 from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR1.jpg'
import Taco1 from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR4.jpg'
import Taco2 from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR5.jpg'
import Taco3 from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR6.jpg'
import Taco4 from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR7.jpg'
import Taco5 from '../assets/images/Fotos_Taco_Tour/THE_TACO_TOUR11.jpg'
import TacoPickup from '../assets/pdfs/The_Taco_Tour_PickUp.pdf';
import TacoMenuEn from '../assets/pdfs/ENG-THE-TACO-TOUR-Menu.pdf';
import TacoMenuEs from '../assets/pdfs/ESP-THE-TACO-TOUR-Menu.pdf';

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
        "availableDays": "Lunes a Sábado",
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
            "image": maniImage,
          },
          {
            "title": "Manicure + Gelish",
            "price": 1100,
            "image": maniGeliImage,
          },
          {
            "title": "Classic Pedicure",
            "price": 750,
            "image": pediImage,
          },
          {
            "title": "Pedicure + Gelish",
            "price": 1200,
            "image": pediGeliImage,
          },
          {
            "title": "Gelish Srvice",
            "price": 450,
            "image": geliImage,
          },
          {
            "title": "Classic Acrylic Nails",
            "price": 1290,
            "image": unasImage,
          },
        ],
        "city": "Cancún",
        "state": "Quintana Roo",
        "headerImages": [BEImage0, BEImage1, BEImage2, BEImage3, BEImage4],
        "offDays": [0],
        "availableDays": "Lunes a Sábado",
      }
    },
    "TheTravelerTable ": {
      "es": {
        "title": "The Traveler Table ",
        "description": "Disfruta esta mezcla de gastronomía y ¡mucha diversión!",
        "longDescription": `Olvídate de todo lo que has conocido acerca de salir a cenar… Permítenos transportar a tus papilas gustativas a un viaje en el tiempo en donde te mostraremos, a través de la magia de los sabores, técnicas gastronómicas desde el imperio Maya hasta nuestros días.
        
        Conoce y degusta las influencias de España, África y Medio Oriente, con un delicioso maridaje de vino, mezcal y tequila, mientras compartes esta fascinante cena de 5 tiempos con otros viajeros de todo el mundo.
        
        ¡Maravillosamente divertido, interactivo y delicioso! Estás invitado a vivir una experiencia gastronómica colectiva única como ninguna otra en nuestro exclusivo club de playa a las afueras de Playa del Carmen.
        
        Disfruta esta mezcla de gastronomía, narración de historias, participación activa, interacción social y, lo más importante, ¡mucha diversión!        
        `,
        "suggestions": [
          "Calzado cómodo para beach club.",
          "Ropa casual.",
          "Sueter ligero (en invierno)",
          "Dinero para souvenir.",
        ],
        "restrictions": [
          "Edad mínima 18 años",
          "Háganos saber de antemano cualquier necesidades dietética especial y/o alergia para contemplarlos y poder preparar plato(s) de reemplazo, siempre y cuando nos sea posible."
        ],
        "languages": "Inglés",
        "image": TravelerTableMain,
        "price": 3211,
        "timeLength": '3 horas más transportación',
        "numberOfPeople": "A elegir",
        "city": "Riviera Maya / Cancún",
        "state": undefined,
        "headerImages": [TTImage0, TTImage1, TTImage2, TTImage3, TTImage4, TTImage5, TTImage6, TTImage7, TTImage8, TTImage9, TTImage10, TTImage11, TTImage12, TTImage13, TTImage14, TTImage15],
        "offDays": [0, 5, 6],
        "availableDays": "Lunes a Jueves",
        "aditionalInfo": "Pregunta por la opción de Grupos Privados, disponibles en cualquier fecha.",
        "includes": [
          { "icon": faShuttleVan, "text": "Transporte con A/C" },
          { "icon": faUserTie, "text": "Guía" },
          { "icon": 'icon-mojito', "text": "Clase de coctelería" },
          { "icon": 'icon-restaurant', "text": "Cena de 5 tiempos con 9 platillos" },
          { "icon": 'icon-wine-glass', "text": "Maridaje de 5 vinos boutique, degustación de tequila y mezcal." },
        ],
        "downloadables": [
          {
            title: "Riviera Maya",
            description: "Descarga el pdf para verificar el horario de Pick Up en tu hotel.",
            iconTitle: "Salida",
            file: TTRivieraPDF,
            icon: faShuttleVan
          },
          {
            title: "Cancún",
            description: "Descarga el pdf para verificar el horario de Pick Up en tu hotel.",
            iconTitle: "Salida",
            file: TTCancunPDF,
            icon: faShuttleVan
          },
          {
            title: undefined,
            description: "Descarga el pdf para ver el menú",
            iconTitle: "Menu",
            file: TTMenuEs,
            icon: 'icon-restaurant'
          }
        ]
      },
      "en": {
        "title": "The Traveler Table",
        "description": "Enjoy this blend of gastronomy, storytelling, hands-on participation, social interaction and most importantly - fun!",
        "longDescription": `Forget everything you know about going out to dinner... Let us take your taste buds on a journey through time, showcasing flavors and techniques from the Mayan empire to the present day. Learn and taste the influences of Spain, Africa and the Middle East, with deliciously paired wines, mezcals and tequilas, whilst sharing this 5-course meal with travelers from all over the world.                                                                                                                                                                 
        Outstandingly fun, interactive and delicious!
        Set in our exclusive beach club outside Playa del Carmen, you are invited to live a unique communal dining experience like no other. Enjoy this blend of gastronomy, storytelling, hands-on participation, social interaction and most importantly - fun!
        
        Enjoy this blend of gastronomy, storytelling, hands-on participation, social interaction and most importantly - fun!
        `,
        "suggestions": [
          "Comfortable shoes for the beach club.",
          "Casual attire.",
          "Light sweater (in winter)",
          "Money for souvenirs. ",
        ],
        "restrictions": [
          "Minimum age of 18 years",
          "Let us know of any special dietary need or allergy in order to take them into account and prepare dishes that conform to your needs, whenever it is possible."
        ],
        "languages": "English",
        "image": TravelerTableMain,
        "price": 3211,
        "timeLength": '3 hours plus transportation',
        "numberOfPeople": "As needed",
        "city": "Riviera Maya / Cancún",
        "state": undefined,
        "headerImages": [TTImage0, TTImage1, TTImage2, TTImage3, TTImage4, TTImage5, TTImage6, TTImage7, TTImage8, TTImage9, TTImage10, TTImage11, TTImage12, TTImage13, TTImage14, TTImage15],
        "offDays": [0, 5, 6],
        "availableDays": "Monday to Thursday",
        "aditionalInfo": "Ask about the Private Group Option, available on any date.",
        "includes": [
          { "icon": faShuttleVan, "text": "Transportation with A/C" },
          { "icon": faUserTie, "text": "Guide" },
          { "icon": 'icon-mojito', "text": "Mixology class" },
          { "icon": 'icon-restaurant', "text": "5 course dinner with 9 dishes" },
          { "icon": 'icon-wine-glass', "text": "Wine pairing with 5 botique wines, tequila and mezcal tasting." },
        ],
        "downloadables": [
          {
            title: "Riviera Maya",
            description: "Download the pdf to verify the pick up schedule for your hotel.",
            iconTitle: "Departure",
            file: TTRivieraPDF,
            icon: faShuttleVan
          },
          {
            title: "Cancún",
            description: "Download the pdf to verify the pick up schedule for your hotel.",
            iconTitle: "Departure",
            file: TTCancunPDF,
            icon: faShuttleVan
          },
          {
            title: undefined,
            description: "Download the pdf to see the menu.",
            iconTitle: "Menu",
            file: TTMenuEn,
            icon: 'icon-restaurant'
          }
        ]
      }
    },

  },
  "Riviera Maya": {
    "TheTravelerTable ": {
      "es": {
        "title": "The Traveler Table ",
        "description": "Disfruta esta mezcla de gastronomía y ¡mucha diversión!",
        "longDescription": `Olvídate de todo lo que has conocido acerca de salir a cenar… Permítenos transportar a tus papilas gustativas a un viaje en el tiempo en donde te mostraremos, a través de la magia de los sabores, técnicas gastronómicas desde el imperio Maya hasta nuestros días.
        
        Conoce y degusta las influencias de España, África y Medio Oriente, con un delicioso maridaje de vino, mezcal y tequila, mientras compartes esta fascinante cena de 5 tiempos con otros viajeros de todo el mundo.
        
        ¡Maravillosamente divertido, interactivo y delicioso! Estás invitado a vivir una experiencia gastronómica colectiva única como ninguna otra en nuestro exclusivo club de playa a las afueras de Playa del Carmen.
        
        Disfruta esta mezcla de gastronomía, narración de historias, participación activa, interacción social y, lo más importante, ¡mucha diversión!        
        `,
        "suggestions": [
          "Calzado cómodo para beach club.",
          "Ropa casual.",
          "Sueter ligero (en invierno)",
          "Dinero para souvenir.",
        ],
        "restrictions": [
          "Edad mínima 18 años",
          "Háganos saber de antemano cualquier necesidades dietética especial y/o alergia para contemplarlos y poder preparar plato(s) de reemplazo, siempre y cuando nos sea posible."
        ],
        "languages": "Inglés",
        "image": TravelerTableMain,
        "price": 3211,
        "timeLength": '3 horas más transportación',
        "numberOfPeople": "A elegir",
        "city": "Riviera Maya / Cancún",
        "state": undefined,
        "headerImages": [TTImage0, TTImage1, TTImage2, TTImage3, TTImage4, TTImage5, TTImage6, TTImage7, TTImage8, TTImage9, TTImage10, TTImage11, TTImage12, TTImage13, TTImage14, TTImage15],
        "offDays": [0, 5, 6],
        "availableDays": "Lunes a Jueves",
        "aditionalInfo": "Pregunta por la opción de Grupos Privados, disponibles en cualquier fecha.",
        "includes": [
          { "icon": faShuttleVan, "text": "Transporte con A/C" },
          { "icon": faUserTie, "text": "Guía" },
          { "icon": 'icon-mojito', "text": "Clase de coctelería" },
          { "icon": 'icon-restaurant', "text": "Cena de 5 tiempos con 9 platillos" },
          { "icon": 'icon-wine-glass', "text": "Maridaje de 5 vinos boutique, degustación de tequila y mezcal." },
        ],
        "downloadables": [
          {
            title: "Riviera Maya",
            description: "Descarga el pdf para verificar el horario de Pick Up en tu hotel.",
            iconTitle: "Salida",
            file: TTRivieraPDF,
            icon: faShuttleVan
          },
          {
            title: "Cancún",
            description: "Descarga el pdf para verificar el horario de Pick Up en tu hotel.",
            iconTitle: "Salida",
            file: TTCancunPDF,
            icon: faShuttleVan
          },
          {
            title: undefined,
            description: "Descarga el pdf para ver el menú",
            iconTitle: "Menu",
            file: TTMenuEs,
            icon: 'icon-restaurant'
          }
        ]
      },
      "en": {
        "title": "The Traveler Table",
        "description": "Enjoy this blend of gastronomy, storytelling, hands-on participation, social interaction and most importantly - fun!",
        "longDescription": `Forget everything you know about going out to dinner... Let us take your taste buds on a journey through time, showcasing flavors and techniques from the Mayan empire to the present day. Learn and taste the influences of Spain, Africa and the Middle East, with deliciously paired wines, mezcals and tequilas, whilst sharing this 5-course meal with travelers from all over the world.                                                                                                                                                                 
        Outstandingly fun, interactive and delicious!
        Set in our exclusive beach club outside Playa del Carmen, you are invited to live a unique communal dining experience like no other. Enjoy this blend of gastronomy, storytelling, hands-on participation, social interaction and most importantly - fun!
        
        Enjoy this blend of gastronomy, storytelling, hands-on participation, social interaction and most importantly - fun!
        `,
        "suggestions": [
          "Comfortable shoes for the beach club.",
          "Casual attire.",
          "Light sweater (in winter)",
          "Money for souvenirs. ",
        ],
        "restrictions": [
          "Minimum age of 18 years",
          "Let us know of any special dietary need or allergy in order to take them into account and prepare dishes that conform to your needs, whenever it is possible."
        ],
        "languages": "English",
        "image": TravelerTableMain,
        "price": 3211,
        "timeLength": '3 hours plus transportation',
        "numberOfPeople": "As needed",
        "city": "Riviera Maya / Cancún",
        "state": undefined,
        "headerImages": [TTImage0, TTImage1, TTImage2, TTImage3, TTImage4, TTImage5, TTImage6, TTImage7, TTImage8, TTImage9, TTImage10, TTImage11, TTImage12, TTImage13, TTImage14, TTImage15],
        "offDays": [0, 5, 6],
        "availableDays": "Monday to Thursday",
        "aditionalInfo": "Ask about the Private Group Option, available on any date.",
        "includes": [
          { "icon": faShuttleVan, "text": "Transportation with A/C" },
          { "icon": faUserTie, "text": "Guide" },
          { "icon": 'icon-mojito', "text": "Mixology class" },
          { "icon": 'icon-restaurant', "text": "5 course dinner with 9 dishes" },
          { "icon": 'icon-wine-glass', "text": "Wine pairing with 5 botique wines, tequila and mezcal tasting." },
        ],
        "downloadables": [
          {
            title: "Riviera Maya",
            description: "Download the pdf to verify the pick up schedule for your hotel.",
            iconTitle: "Departure",
            file: TTRivieraPDF,
            icon: faShuttleVan
          },
          {
            title: "Cancún",
            description: "Download the pdf to verify the pick up schedule for your hotel.",
            iconTitle: "Departure",
            file: TTCancunPDF,
            icon: faShuttleVan
          },
          {
            title: undefined,
            description: "Download the pdf to see the menu.",
            iconTitle: "Menu",
            file: TTMenuEn,
            icon: 'icon-restaurant'
          }
        ]
      }
    },
    "TheTacoTour ": {
      "es": {
        "title": "The Taco Tour ",
        "description": "Una aventura para probar una gran variedad de tacos.",
        "longDescription": `Ven a paladear cientos de años de historia y sabores mexicanos en esta aventura de tacos. Deambula por las calles de este paraíso y disfruta de una variedad de productos de la mejor calidad que se derretirán en tu boca.Cada uno preparado de manera tradicional, con su receta original, llenos de sabor e historia.Prepara tú mismo una tortilla tradicional “hecha a mano” y una salsa típica; esto, acompañado con la bebida alcohólica más antigua de México: Pulque. Termina este“festival de tacos” con un pecaminoso postre sorpresa. Y luego, una hora de tiempo libre para explorar y comprar a manos llenas en la famosa Quinta Avenida.`,
        "suggestions": [
          "Recomendamos usar calzado cómodo.",
          "Dinero para souvenir.",
        ],
        "restrictions": [
          "Edad mínima 8 años.",
          "El tour es totalmente a base de carne, con pocas opciones vegetarianas.",
          "Dos de las paradas son productos de carne de cerdo."
        ],
        "languages": "Inglés/Español",
        "image": TacoMain,
        "price": 2287,
        "priceChild": 2056,
        "timeLength": '4 horas',
        "numberOfPeople": "A elegir",
        "city": "Riviera Maya",
        "state": undefined,
        "headerImages": [Taco0, Taco1, Taco2, Taco3, Taco4, Taco5],
        "offDays": [],
        "availableDays": "Todos los días",
        "aditionalInfo": undefined,
        "includes": [
          { "icon": faShuttleVan, "text": "Transporte" },
          { "icon": faUserTie, "text": "Guía" },
          { "icon": faWineGlassAlt, "text": "Bebidas alcohólicas" },
          { "icon": 'icon-restaurant', "text": "Tacos" },
        ],
        "downloadables": [
          {
            title: undefined,
            description: "Descarga el pdf para verificar el horario de Pick Up en tu hotel.",
            iconTitle: "Salida",
            file: TacoPickup,
            icon: faShuttleVan
          },
          {
            title: undefined,
            description: "Descarga el pdf para ver el menú",
            iconTitle: "Menu",
            file: TacoMenuEs,
            icon: 'icon-restaurant',
          },
        ]
      },
      "en": {
        "title": "The Taco Tour ",
        "description": "Come eat your way on a multi stop taco adventure.",
        "longDescription": `Come eat your way through hundreds of years of Mexican history and flavors on this hands on multistop taco adventure. Meander around the backroads of this travelers paradise, eating a variety of the highest quality melt in your mouth meats on offer. Each made in its traditional way, with its original recipe, dripping with both flavor and history. Try your hand at making a traditional handmade tortilla, and an ancient salsa, then washit down with Mexico’s oldest alcoholic drink, Pulque. Finish this taco fest with a decadent dessert 
        surprise, then an hour set free exploring and shopping to your hearts content on the famous 5th Avenue.`,
        "suggestions": [
          "Comfortable clothing for walking.",
          "Money for souvenirs.",
        ],
        "restrictions": [
          "Minimum age 8 years old",
          "The tour is entirely meat based, with little to no vegetarian options.",
          "Two of the stops are pork based products."
        ],
        "languages": "English/Spanish",
        "image": TacoMain,
        "price": 2287,
        "priceChild": 2056,
        "timeLength": '4 hours',
        "numberOfPeople": "As needed",
        "city": "Riviera Maya",
        "state": undefined,
        "headerImages": [Taco0, Taco1, Taco2, Taco3, Taco4, Taco5],
        "offDays": [],
        "availableDays": "Everyday",
        "aditionalInfo": undefined,
        "includes": [
          { "icon": faShuttleVan, "text": "Transportation" },
          { "icon": faUserTie, "text": "Guide" },
          { "icon": faWineGlassAlt, "text": "Alcoholoic drinks" },
          { "icon": 'icon-restaurant', "text": "Tacos" },
        ],
        "downloadables": [
          {
            title: undefined,
            description: "Download the pdf to verify the pick up schedule for your hotel.",
            iconTitle: "Departure",
            file: TacoPickup,
            icon: faShuttleVan
          },
          {
            title: undefined,
            description: "Download the pdf to see the menu",
            iconTitle: "Menu",
            file: TacoMenuEn,
            icon: 'icon-restaurant',
          },
        ]
      },
    }
  }
};

export { experiencesByOrigin };