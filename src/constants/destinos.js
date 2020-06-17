function correctCase(unformattedPlaceArr) {
  const formattedPlaceArr = []
  unformattedPlaceArr.forEach((place) => formattedPlaceArr.push(place.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())))
  return formattedPlaceArr;
}

const experiencesFromCancun = [
  "Salón de Belleza",
  "Tour en Moto",
  "Viaje de Snorkel",
];

// const fromAeropuertoCancun = correctCase(fromAeropuertoCancunNotFormatted);


const excursionsFromMerida = [
  "Celestun",
  "Progreso",
  "Sisal",
  "Valladolid",
  "Chichen Itza",
  "Uxmal",
  "Coloradas",
  "Izamal",
]
// const fromAeropuertoMerida = correctCase(fromAeropuertoMeridaNotFormatted);

export {
  experiencesFromCancun,
  excursionsFromMerida
};
