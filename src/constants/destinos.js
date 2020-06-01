function correctCase(unformattedPlaceArr) {
  const formattedPlaceArr = []
  unformattedPlaceArr.forEach((place) => formattedPlaceArr.push(place.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())))
  return formattedPlaceArr;
}

const excursionsFromCancun = [
  "Tulum Y Xelha",
  "Tulum",
  "Xcaret",
  "Chichen Itza",
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
  excursionsFromCancun,
  excursionsFromMerida
};
