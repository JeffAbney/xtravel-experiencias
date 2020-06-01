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
  excursionsFromCancun,
  excursionsFromMerida,
} from '../../constants/destinos';
import excursionOrigins from '../../constants/origins';

registerLocale("es", es);

const unfilteredAllPlaces = [
  'Aeropuerto Cancún',
  'Aeropuerto Mérida',
  ...excursionsFromCancun,
  ...excursionsFromMerida,
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
  const watchOrigen = watch('origen');
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
  }, [watchOrigen, watchDestino, watchNumeroPasajeros])

  const onSubmit = async (data) => {
    const allFields = {
      ...data, fechaIda, fechaVuelta, horaIda, horaVuelta, tipoDeViaje: 'excursión'
    };
    console.log('data -', allFields);
    setResultados(allFields);
    setReservationData(allFields);
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
    setHoraIda(hora);
  }

  function setFechasIdaYVuelta(fecha) {
    setFechaIda(fecha);
  }

  function showDestinations(origen) {
    if (origen === 'Merida') {
      return excursionsFromMerida.map(
        (destino) => <option key={destino} value={destino}>{destino}</option>,
      );
    }
    return excursionsFromCancun.map(
      (destino) => <option key={destino} value={destino}>{destino}</option>,
    );
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
        this.setCustomValidity(texts[language]['index-v']);
      }
    });
  }
  // End Custom Validator for Places --------------------------------------------------


  return (
    <div className="react-app">
      <div className="booking-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className="transport-details-container">
              <div>
                <div className="transport-fields">
                  <div className="field-container">
                    <label id="index-2" name="label-origen" htmlFor="origen">
                      {texts[language]['index-2']}
                      <div className="custom-select-wrapper">
                        <input autoComplete="off" placeholder={texts[language]['index-12']} list="origin" aria-labelledby="label-origen" className="custom-arrow detail-input" name="origen" ref={register({ required: true })} />

                        <datalist id="origin">
                          {excursionOrigins.map((origen) => <option key={`origen-${origen}`} value={origen}>{origen}</option>)}
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
                      {texts[language]['index-4']}:
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
                      {texts[language]['index-5']}:
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
              </div>
              <div className={"field-container"}>
                <input className="detail-submit mobile-submit" type="submit" value="Buscar" />
                <div className="error-container" />
              </div>
            </div>

          </div>
        </form>
      </div>
      <div className="results-container">
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
      <div style={{ height: 200, width: '100%' }}></div>
    </div>
  );
};

export default Home;
