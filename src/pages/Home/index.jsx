/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import { isSameDay, startOfToday, endOfDay } from 'date-fns'
import es from "date-fns/locale/es";
import subDays from "date-fns/subDays";
import texts from '../../constants/texts';
import { LanguageContext } from '../../components/LanguageContext';

import Resultados from './Resultados';
import 'react-datepicker/dist/react-datepicker.css';
import dropDownArrow from '../../assets/icons/dropdown_arrow.png';
import checkSpace from '../../assets/icons/check_Space.png';
import checkMark from '../../assets/icons/Checkmark.png';
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
  hotelesTulum
} from '../../constants/destinos';

registerLocale("es", es);

const unfilteredAllPlaces = [
  'Aeropuerto Cancún',
  'Aeropuerto Mérida',
  ...fromAeropuertoCancun,
  ...fromAeropuertoMerida,
];

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
const allPlaces = unfilteredAllPlaces.filter(onlyUnique);

const Home = (props) => {
  const { setPrice, setReservationData, vehicle, setVehicle } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const { language, setLanguage } = useContext(LanguageContext);
  const [resultados, setResultados] = useState(null);
  const [fechaIda, setFechaIda] = useState(new Date());
  const [horaIda, setHoraIda] = useState(new Date());
  const [fechaVuelta, setFechaVuelta] = useState(new Date());
  const [horaVuelta, setHoraVuelta] = useState(new Date());
  const [tipoDeViaje, setTipoDeViaje] = useState('sencillo');
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const watchOrigen = watch('origen', 'Aeropuerto Cancún');
  const watchDestino = watch('destino');
  const watchNumeroPasajeros = watch('numeroPasajeros', '1');

  function calculateMinTime(date) {
    return isSameDay(date, new Date()) ? new Date() : startOfToday()
  }
  const [minTime, setMinTime] = useState(calculateMinTime(new Date()));

  useEffect(function scrollToresults() {
    const results = document.getElementById("resultados");
    if (results) {
      document.getElementById("resultados").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [resultados])

  useEffect(function resetResults() {
    setResultados(null)
  }, [watchOrigen, watchDestino, watchNumeroPasajeros, tipoDeViaje])

  const onSubmit = async (data) => {
    const allFields = {
      ...data, fechaIda, fechaVuelta, tipoDeViaje, horaIda, horaVuelta
    };
    console.log('data -', allFields);
    if (tipoDeViaje === 'redondo' && fechaIda.getTime() === fechaVuelta.getTime() && horaIda.getTime() >= horaVuelta.getTime()) {
      console.log('Escoge una hora de vuelta después de la ida.');
      setResultados(null);
      setTimeError(true);
    } else if (tipoDeViaje === 'redondo' && fechaIda.getTime() > fechaVuelta.getTime()) {
      console.log('Escoge una fecha de vuelta después de la ida.');
      setResultados(null);
      setDateError(true);
    } else {
      setDateError(false);
      setTimeError(false);
      setResultados(allFields);
      setReservationData(allFields);
    }
  };

  function handleChangeFechaIda(fecha) {
    if (fecha.toLocaleDateString() > fechaVuelta.toLocaleDateString()) {
      setFechasIdaYVuelta(fecha)
    } else {
      setFechaIda(fecha)
    }
    setMinTime(calculateMinTime(fecha));
    setHoraIda(fecha);
  }

  function handleChangeHoraIda(hora) {
    if (fechaIda.toLocaleDateString() === fechaVuelta.toLocaleDateString()) {
      setHoraIda(hora);
      setHoraVuelta(hora);
    } else {
      setHoraIda(hora);
    }
  }

  function setFechasIdaYVuelta(fecha) {
    setFechaIda(fecha);
    setFechaVuelta(fecha);
  }

  function showDestinations(origen) {
    const destinos = [];
    if (origen === 'Aeropuerto Cancún') {
      return fromAeropuertoCancun.map(
        (destino) => <option key={destino} value={destino}>{destino}</option>,
      );
    } if (origen === 'Aeropuerto Mérida') {
      return fromAeropuertoMerida.map(
        (destino) => <option key={destino} value={destino}>{destino}</option>,
      );
    } if (fromAeropuertoCancun.includes(origen.toString())) {
      destinos.push('Aeropuerto Cancún');
    } if (fromAeropuertoMerida.includes(origen.toString())) {
      destinos.push('Aeropuerto Mérida');
    }
    return destinos.map((destino) => <option key={destino} value={destino}>{destino}</option>);
  }
  // Start Custom Validator for Places --------------------------------------------------
  // Find all inputs on the DOM which are bound to a datalist via their list attribute.
  var inputs = document.querySelectorAll('input[list]');
  for (var i = 0; i < inputs.length; i++) {
    // When the value of the input changes...
    inputs[i].addEventListener('change', function () {
      var optionFound = false,
        datalist = this.list;
      // Determine whether an option exists with the current value of the input.
      for (var j = 0; j < datalist.options.length; j++) {
        if (this.value == datalist.options[j].value) {
          optionFound = true;
          break;
        }
      }
      // use the setCustomValidity function of the Validation API
      // to provide an user feedback if the value does not exist in the datalist
      if (optionFound) {
        this.setCustomValidity('');
      } else {
        this.setCustomValidity('Please select a valid value.');
      }
    });
  }
  // End Custom Validator for Places --------------------------------------------------


  return (
    <div className="react-app">
      <div className="booking-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 15, paddingBottom: 15 }}>
              <div className="radio-button-container">
                <div
                  tabIndex="0"
                  role="radio"
                  aria-checked={tipoDeViaje === 'sencillo'}
                  aria-labelledby="solo-ida"
                  style={{
                    position: 'relative',
                    height: 28,
                    width: 28,
                    display: 'flex',
                    marginRight: 15,
                    textAlign: 'baseline',
                  }}
                  onClick={() => setTipoDeViaje('sencillo')}
                  onKeyDown={() => setTipoDeViaje('sencillo')}
                >
                  <img src={checkSpace} className="image-centered" style={{ width: '100%' }} alt="" />
                  {
                    tipoDeViaje === 'sencillo'
                      ? (
                        <img
                          src={checkMark}
                          style={{
                            position: 'absolute', bottom: 6, left: 6, height: 15, width: 15,
                          }}
                          alt=""
                        />
                      )
                      : null
                  }
                </div>
                <p id='index-0' name="solo-ida">{texts[language]['index-0']}</p>
              </div>
              <div className="radio-button-container">
                <div
                  tabIndex="0"
                  role="radio"
                  aria-checked={tipoDeViaje === 'redondo'}
                  aria-labelledby="redondo"
                  style={{
                    position: 'relative',
                    height: 28,
                    width: 28,
                    display: 'flex',
                    marginRight: 15,
                    textAlign: 'baseline',
                  }}
                  onClick={() => setTipoDeViaje('redondo')}
                  onKeyDown={() => setTipoDeViaje('redondo')}
                >
                  <img src={checkSpace} className="image-centered" style={{ width: '100%' }} alt="" />
                  {
                    tipoDeViaje === 'redondo'
                      ? (
                        <img
                          src={checkMark}
                          style={{
                            position: 'absolute', bottom: 6, left: 6, height: 15, width: 15,
                          }}
                          alt=""
                        />
                      )
                      : null
                  }
                </div>
                <p id="index-1">{texts[language]['index-1']}</p>
              </div>
            </div>

            <div className="transport-details-container">
              <div>
                {tipoDeViaje === 'sencillo' ? null : <p>Detalles de ida</p>}
                <div className="transport-fields">
                  <div className="field-container">
                    <label id="index-2" name="label-origen" htmlFor="origen">
                      {texts[language]['index-2']}
                      <div className="custom-select-wrapper">
                        <input autoComplete="off" placeholder={texts[language]['index-12']} list="origin" aria-labelledby="label-origen" className="custom-arrow detail-input" name="origen" ref={register({ required: true })} />

                        <datalist id="origin">
                          {allPlaces.map((origen) => <option key={`origen-${origen}`} value={origen}>{origen}</option>)}
                        </datalist>
                      </div>
                    </label>
                    <div className="error-container">{errors.origen && texts[language]['index-14']}</div>
                  </div>

                  <div className="field-container">
                    <label htmlFor="destino">
                      {texts[language]['index-3']}
                      <div className="custom-select-wrapper">
                        <input autoComplete="off" placeholder={texts[language]['index-13']} list="destino" className="custom-arrow detail-input" name="destino" ref={register({ required: true })} />
                        <datalist id="destino">
                          {showDestinations(watchOrigen)}
                        </datalist>
                      </div>
                    </label>
                    <div className="error-container">{errors.destino && texts[language]['index-14']}</div>
                  </div>

                  <div className="field-container">
                    <label htmlFor="fecha-ida">
                      {texts[language]['index-4']} {tipoDeViaje === 'redondo' ? texts[language]['index-4a'] : null}:
                    <div className="custom-select-wrapper">
                        <DatePicker
                          id="date-picker-ida"
                          name="fecha-ida"
                          selected={fechaIda}
                          onChange={(fecha) => handleChangeFechaIda(fecha)}
                          minDate={subDays(new Date(), 0)}
                          ref={register}
                          popperPlacement="bottom-end"
                          popperModifiers={{
                            flip: {
                              behavior: ["bottom"] // don't allow it to flip to be above
                            },
                            preventOverflow: {
                              enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                            },
                            hide: {
                              enabled: false // turn off since needs preventOverflow to be enabled
                            }
                          }}
                          dateFormat="d MMMM, yyyy"
                          locale={language}
                        />
                        <img className="arrow" src={dropDownArrow} alt="" />
                      </div>
                    </label>
                    <div className="error-container" />

                  </div>

                  <div className="field-container small-field">
                    <label htmlFor="hora-ida">
                      {texts[language]['index-5']}  {tipoDeViaje === 'redondo' ? texts[language]['index-5a'] : null}:
                    <div className="custom-select-wrapper">
                        <DatePicker
                          id="time-picker-ida"
                          name="hora-ida"
                          minTime={minTime}
                          maxTime={endOfDay(new Date())}
                          timeIntervals={15}
                          selected={horaIda}
                          onChange={(hora) => handleChangeHoraIda(hora)}
                          ref={register}
                          popperPlacement="bottom-end"
                          popperModifiers={{
                            flip: {
                              behavior: ["bottom"] // don't allow it to flip to be above
                            },
                            preventOverflow: {
                              enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                            },
                            hide: {
                              enabled: false // turn off since needs preventOverflow to be enabled
                            }
                          }}
                          locale={language}
                          showTimeSelect
                          showTimeSelectOnly
                          dateFormat="h:mm aa"
                          timeCaption={texts[language]['index-6']}
                        />
                        <img className="arrow" src={dropDownArrow} alt="" />
                      </div>
                    </label>
                    <div className="error-container" />
                  </div>

                  <div className="field-container small-field">
                    <label htmlFor="numeroPasajeros">
                      {texts[language]['index-7']}
                      <div className="custom-select-wrapper">
                        <select className="custom-arrow detail-input" name="numeroPasajeros" ref={register}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                        </select>
                        <img className="arrow" src={dropDownArrow} alt="" />
                      </div>
                    </label>
                    <div className="error-container" />
                  </div>


                </div>
                {tipoDeViaje === 'redondo' ? <p>{texts[language]['index-8']}</p> : null}
                {
                  tipoDeViaje === 'redondo'
                    ? (
                      <div style={{ display: 'flex' }}>
                        <div className="field-container">
                          <label htmlFor="fecha-vuelta">
                            {texts[language]['index-9']}
                            <div className="custom-select-wrapper">
                              <DatePicker
                                id="date-picker-vuelta"
                                name="fecha-vuelta"
                                selected={fechaIda.toLocaleDateString() > fechaVuelta.toLocaleDateString() ? fechaIda : fechaVuelta}
                                onChange={(fecha) => setFechaVuelta(fecha)}
                                minDate={subDays(fechaIda, 0)}
                                ref={register}
                                popperPlacement="bottom-end"
                                popperModifiers={{
                                  flip: {
                                    behavior: ["bottom"] // don't allow it to flip to be above
                                  },
                                  preventOverflow: {
                                    enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                  },
                                  hide: {
                                    enabled: false // turn off since needs preventOverflow to be enabled
                                  }
                                }}
                                dateFormat="d MMMM, yyyy"
                                locale={language}
                              />
                              <img className="arrow" src={dropDownArrow} alt="" />
                            </div>
                          </label>
                          <div className="error-container">
                            {dateError ? <p>{texts[language]['index-10']}</p> : null}
                          </div>
                        </div>
                        <div className="field-container small-field">
                          <label htmlFor="hora-ida">
                            {texts[language]['index-11']}
                            <div className="custom-select-wrapper small-select-wrapper">
                              <DatePicker
                                id="time-picker-vuelta"
                                name="hora-vuelta"
                                selected={horaVuelta}
                                onChange={(hora) => setHoraVuelta(hora)}
                                ref={register}
                                minTime={
                                  fechaVuelta.toLocaleDateString() === fechaIda.toLocaleDateString()
                                    ? horaIda
                                    : undefined
                                }
                                maxTime={fechaVuelta.toLocaleDateString() === fechaIda.toLocaleDateString()
                                  ? endOfDay(new Date())
                                  : undefined
                                }
                                popperPlacement="bottom-end"
                                popperModifiers={{
                                  flip: {
                                    behavior: ["bottom"] // don't allow it to flip to be above
                                  },
                                  preventOverflow: {
                                    enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                  },
                                  hide: {
                                    enabled: false // turn off since needs preventOverflow to be enabled
                                  }
                                }}
                                locale={language}
                                showTimeSelect
                                showTimeSelectOnly
                                dateFormat="h:mm aa"
                                timeIntervals={15}
                                timeCaption={texts[language]['index-6']}
                              />
                              <img className="arrow" src={dropDownArrow} alt="" />
                            </div>
                          </label>
                          <div className="error-container">
                            {timeError ? <p>{texts[language]['index-10']}</p> : null}
                          </div>
                        </div>
                      </div>
                    )
                    : null
                }
              </div>
              <div className={tipoDeViaje === 'sencillo' ? "field-container" : 'field-container top-margin-60'}>
                <input className="detail-submit mobile-submit" type="submit" value="Buscar" />
                <div className="error-container" />
              </div>
            </div>

          </div>
        </form>
      </div>
      {
        resultados && watchNumeroPasajeros < 10
          ? <Resultados id="resultados" pasajeros={9} reservation={resultados} setVehicle={setVehicle} setPrice={setPrice} />
          : null
      }
      {
        resultados
          ? <Resultados pasajeros={14} reservation={resultados} setVehicle={setVehicle} setPrice={setPrice} />
          : null
      }
      {
        resultados && watchNumeroPasajeros < 7
          ? <Resultados pasajeros={6} reservation={resultados} setVehicle={setVehicle} setPrice={setPrice} />
          : null
      }
    </div>
  );
};

export default Home;
