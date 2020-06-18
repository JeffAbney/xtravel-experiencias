import texts from '../constants/texts';
import ImageBeautyExperience from '../assets/images/EXP_BeautyExperience.png';

function correctCase(unformattedPlaceArr) {
  const formattedPlaceArr = []
  unformattedPlaceArr.forEach((place) => formattedPlaceArr.push(place.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())))
  return formattedPlaceArr;
}

export default function getExperiences(language) {
  const text = texts[language].experiences;
  const experiences = [
    {
      title: text.BeautyExperience.title,
      city: "Cancún",
      state: "Quintana Roo",
      description: text.BeautyExperience.description,
      image: ImageBeautyExperience,
      price: 2999,
      longDescription: text.BeautyExperience.longDescription,
      timeLength: 'Variable',
      numberOfPeople: undefined,
      languages: text.BeautyExperience.languages,
      upSells: [],
    },
  ];
  return experiences;
};
