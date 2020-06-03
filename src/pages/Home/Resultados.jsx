import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes, {
  number,
  shape,
  string,
} from 'prop-types';
import { LanguageContext } from '../../components/LanguageContext';
import texts from '../../constants/texts'
import car from '../../utils/getCar';
import car6 from '../../assets/images/Suburban.png';
import dot from '../../assets/icons/Oval.png';
import line from '../../assets/icons/Line.png';
import person from '../../assets/icons/passengers.png';
import {
  pricesFromCancunYPuertoMorelos,
  pricesFromPlayaDelCarmen,
  pricesFromPuertoAventurasAkumalTulum,
  pricesFromMerida
} from '../../constants/precios';
import imgCelestun from '../../assets/images/Celestun.png';
import imgChichen from '../../assets/images/chichen.png';
import imgColoradas from '../../assets/images/Coloradas.png';
import imgIzamal from '../../assets/images/Izamal.png';
import imgProgreso from '../../assets/images/progreso.png';
import imgSisal from '../../assets/images/Sisal.png';
import imgTulumXelha from '../../assets/images/Tulum-Xelha.png';
import imgTulum from '../../assets/images/Tulum.png';
import imgUxmal from '../../assets/images/Uxmal.png';
import imgValladolid from '../../assets/images/Valladolid.png';
import imgXcaret from '../../assets/images/Xcaret.jpg';

require('dotenv').config();

const Resultados = (props) => {
  const { reservation, pasajeros, id, setVehicle, setPrice } = props;
  const {
    origen,
    destino,
  } = reservation;
  const history = useHistory();
  const { language, setLanguage } = useContext(LanguageContext);

  function goToForm() {
    setVehicle(car(pasajeros));
    setPrice(price);
    history.push('/infoDeReserva');
  }

  const destinoImage = (function getImage() {
    if (destino === 'Celestun') {
      return imgCelestun;
    }
    if (destino === 'Chichen Itza') {
      return imgChichen;
    }
    if (destino === 'Coloradas') {
      return imgColoradas;
    }
    if (destino === 'Izamal') {
      return imgIzamal;
    }
    if (destino === 'Progreso') {
      return imgProgreso;
    }
    if (destino === 'Sisal') {
      return imgSisal;
    }
    if (destino === 'Tulum Y Xelha') {
      return imgTulumXelha;
    }
    if (destino === 'Tulum') {
      return imgTulum;
    }
    if (destino === 'Uxmal') {
      return imgUxmal;
    }
    if (destino === 'Valladolid') {
      return imgValladolid;
    }
    if (destino === 'Xcaret') {
      return imgXcaret;
    }
  }());

  const excursion = (function getPrice() {
    if (origen === 'Cancun' || origen === 'Puerto Morelos') {
      return pricesFromCancunYPuertoMorelos;
    }
    if (origen === 'Playa Del Carmen') {
      return pricesFromPlayaDelCarmen;
    }
    if (
      origen === 'Puerto Aventuras' ||
      origen === 'Akumal' ||
      origin === 'Tulum'
    ) {
      return pricesFromPuertoAventurasAkumalTulum;
    }
    if (origen === 'Merida') {
      return pricesFromMerida;
    } else {
      console.log('origen', origen);
    }
  }());

  const price = excursion[destino].precios[pasajeros];
  const duration = excursion[destino].duración;

  return (
    <div className="results-box" id={id}>
      <h1
        className="results-header"
      >
        {destino}
      </h1>
      <div className="results-image-container">
        <div className="result-backdrop" style={{ backgroundImage: `url(${destinoImage})` }} />
        <img src={car(pasajeros)} className="results-image" alt="car" />
      </div>
      <div className="results-price-container">
        <h2>$ {price.toLocaleString()}<small> MXN</small> </h2>
        <button className="reserve-submit" onClick={goToForm}>{texts[language]['resultados-5']}</button>
      </div>
      <div style={{ width: '100%', backgroundColor: '#000', paddingBottom: 1, marginTop: 25, marginBottom: 15 }} />
      <p className="result-detail">{pasajeros} {texts[language]['resultados-4']}</p>
      <p className="result-detail">{texts[language]['resultados-6a']} {duration} {texts[language]['resultados-6b']}</p>
    </div >
  );
};

Resultados.propTypes = {
  pasajeros: number.isRequired,
  reservation: shape({
    origen: string.isRequired,
    destino: string.isRequired,
    numeroPasajeros: string.isRequired,
    fechaIda: PropTypes.instanceOf(Date).isRequired,
    fechaVuelta: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default Resultados;
