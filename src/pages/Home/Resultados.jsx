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
import car6 from '../../assets/images/Suburban.jpg';
import car9 from '../../assets/images/car9.png';
import car14 from '../../assets/images/car14.png';
import dot from '../../assets/icons/Oval.png';
import line from '../../assets/icons/Line.png';
import person from '../../assets/icons/passengers.png';
import {
  fromAeropuertoCancun,
  fromAeropuertoMerida,
  hotelesCancun,
  hotelesPuertoJuarez,
  hotelesPlayaMujeres,
  hotelesPuertoMorelos,
  hotelesPlayaDelCarmen,
  hotelesPuertoAventuras,
  hotelesAkumal,
  hotelesTulum,
  hotelesMeridaAeropuerto,
  hotelesMeridaAlrededores,
  hotelesMeridaCentro,
  hotelesMeridaColonias,
  hotelesMeridaPeriferia,
  hotelesMeridaSegundoCuadro,
} from '../../constants/destinos';
import { fromCancun, fromMerida } from '../../constants/precios';

require('dotenv').config();

const Resultados = (props) => {
  const { reservation, pasajeros, id, setVehicle, setPrice } = props;
  const {
    origen,
    destino,
    numeroPasajeros,
    fechaIda,
    fechaVuelta,
    tipoDeViaje,
  } = reservation;
  const history = useHistory();
  const { language, setLanguage } = useContext(LanguageContext);

  function goToForm() {
    setVehicle(car(pasajeros));
    setPrice(tipoDeViaje === 'sencillo' ? price : (price * 2));
    history.push('/infoDeReserva');
  }

  const price = (function getPrice() {
    if (origen === 'Aeropuerto Cancún' || destino === 'Aeropuerto Cancún') {
      if (hotelesCancun.includes(destino) || hotelesCancun.includes(origen)) {
        return fromCancun["Zona Hotelera Cancun"][pasajeros];
      }
      if (hotelesPuertoJuarez.includes(destino) || hotelesPuertoJuarez.includes(origen)) {
        return fromCancun["Puerto Juarez"][pasajeros];
      }
      if (hotelesPlayaMujeres.includes(destino) || hotelesPlayaMujeres.includes(origen)) {
        return fromCancun["Playa Mujeres"][pasajeros];
      }
      if (hotelesPuertoMorelos.includes(destino) || hotelesPuertoMorelos.includes(origen)) {
        return fromCancun["Puerto Morelos"][pasajeros];
      }
      if (hotelesPlayaDelCarmen.includes(destino) || hotelesPlayaDelCarmen.includes(origen)) {
        return fromCancun["Playa Del Carmen"][pasajeros];
      }
      if (hotelesPuertoAventuras.includes(destino) || hotelesPuertoAventuras.includes(origen)) {
        return fromCancun["Puerto Aventuras"][pasajeros];
      }
      if (hotelesAkumal.includes(destino) || hotelesAkumal.includes(origen)) {
        return fromCancun["Akumal"][pasajeros];
      }
      if (hotelesTulum.includes(destino) || hotelesTulum.includes(origen)) {
        return fromCancun["Zona Hotelera De Tulum"][pasajeros];
      }
      if (origen === 'Aeropuerto Cancún') {
        return fromCancun[destino][pasajeros];
      }
      return fromCancun[origen][pasajeros];
    }
    if (origen === 'Aeropuerto Mérida' || destino === 'Aeropuerto Mérida') {
      if (hotelesMeridaAeropuerto.includes(destino) || hotelesMeridaAeropuerto.includes(origen)) {
        return fromMerida["Merida Zona Aeropuerto"][pasajeros];
      }
      if (hotelesMeridaCentro.includes(destino) || hotelesMeridaCentro.includes(origen)) {
        return fromMerida["Merida Zona Centro"][pasajeros];
      }
      if (hotelesMeridaSegundoCuadro.includes(destino) || hotelesMeridaSegundoCuadro.includes(origen)) {
        return fromMerida["Merida Zona Segundo Cuadro"][pasajeros];
      }
      if (hotelesMeridaColonias.includes(destino) || hotelesMeridaColonias.includes(origen)) {
        return fromMerida["Merida Zona Colonias"][pasajeros];
      }
      if (hotelesMeridaPeriferia.includes(destino) || hotelesMeridaPeriferia.includes(origen)) {
        return fromMerida["Merida Zona Periferia"][pasajeros];
      }
      if (hotelesMeridaAlrededores.includes(destino) || hotelesMeridaAlrededores.includes(origen)) {
        return fromMerida["Merida Zona Alrededores"][pasajeros];
      }
      if (origen === 'Aeropuerto Mérida') {
        return fromMerida[destino][pasajeros];
      }
      return fromMerida[origen][pasajeros];
    }
    return 9999.99;
  }());

  return (
    <div className="results-box" id={id}>
      <h1
        className="results-header"
        style={tipoDeViaje === 'sencillo' ? { marginLeft: -108 } : { marginLeft: -85 }}>
        {tipoDeViaje === 'sencillo' ? texts[language]['resultados-0'] : texts[language]['resultados-1']}
      </h1>
      <div className="results-image-container">
        <img style={car(pasajeros) === car6 ? { width: '80%' } : null} src={car(pasajeros)} className="results-image" alt="car" />
      </div>

      <div className="results-details">


        {/* Start Grid */}
        {/* Desde row */}
        <div className="trip-grid">
          <div style={{ display: 'flex', alignItems: 'center', height: 20 }}>
            <div className="dot-container">
              <img style={{ height: '75%' }} src={dot} alt="" className="dot" />
            </div>
          </div>
          <div className="trip-grid-text-line"><p><strong>{texts[language]['index-2']} </strong>{origen}</p></div>

          {/* Connection line row */}
          <div className="line-container">
            <img src={line} alt="" className="transport-line" className="transport-line" />
          </div>
          <div />
          {/*  Hasta Row */}
          <div style={{ display: 'flex', alignItems: 'center', height: 20 }}>
            <div className="dot-container">
              <img style={{ height: '75%' }} src={dot} alt="" className="dot" />
            </div>
          </div>
          <div className="trip-grid-text-line"><p><strong>{texts[language]['index-3']}</strong>{destino}</p></div>

          {/* Connection line row */}
          {tipoDeViaje === 'redondo'
            ? (
              <div className="line-container">
                <img src={line} alt="" className="transport-line" />
              </div>
            )
            : null}
          {tipoDeViaje === 'redondo'
            ? <div />
            : null
          }
          {/*  Regreso Row */}
          {tipoDeViaje === 'redondo'
            ? (
              <div style={{ display: 'flex', alignItems: 'center', height: 20 }}>
                <div className="dot-container">
                  <img style={{ height: '75%' }} src={dot} alt="" className="dot" />
                </div>
              </div>
            ) : null
          }
          {tipoDeViaje === 'redondo'
            ? (
              <div className="trip-grid-text-line"><p><strong>{texts[language]['resultados-2']} </strong>{origen}</p></div>
            )
            : null
          }

          {/* Cupo Máximo Row */}
          <div className={tipoDeViaje === 'sencillo' ? 'big-top' : 'small-top'}>
            <img src={person} alt="" className="dot person" />
          </div>
          <div
            className={tipoDeViaje === 'sencillo' ? 'big-top' : 'small-top'}
            style={tipoDeViaje === 'sencillo'
              ? { display: 'flex', alignItems: 'center' }
              : { display: 'flex', alignItems: 'center' }}
          >
            <p className="cupo-maximo-text"><strong>{texts[language]['resultados-3']}</strong>{` ${pasajeros} ${texts[language]['resultados-4']}`}</p>
          </div>
        </div>

      </div >
      <div className="results-price-container">
        <h1>{tipoDeViaje === 'sencillo' ? `$${price.toLocaleString()}` : `$${(price * 2).toLocaleString()}`} <small> MXN</small> </h1>
        <button className="reserve-submit" onClick={goToForm}>{texts[language]['resultados-5']}</button>
      </div>
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
    tipoDeViaje: string.isRequired,
  }).isRequired,
};

export default Resultados;
