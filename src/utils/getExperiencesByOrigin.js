import { experiencesByOrigin } from '../constants/experiences';

export default function getExperiencesByOrigin(language, origin) {
  const experiencesWithLanguage = {};
  Object.keys(experiencesByOrigin[origin]).forEach(experienceKey => {
    console.log(experiencesByOrigin[origin][experienceKey][language]);
    experiencesWithLanguage[experienceKey] = experiencesByOrigin[origin][experienceKey][language];
  });
  console.log('get exp by origin - ', JSON.stringify(experiencesWithLanguage));
  return experiencesWithLanguage;
};