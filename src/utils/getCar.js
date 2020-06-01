import car6 from '../assets/images/Suburban.png';
import car9 from '../assets/images/car9.png';
import car14 from '../assets/images/car14.png';

const car = (pasajeros) => {
  if (pasajeros === 6) {
    return car6;
  }
  if (pasajeros === 9) {
    return car9;
  }
  return car14;
};

export default car;