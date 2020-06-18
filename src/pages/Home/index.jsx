/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import { isSameDay, startOfToday, endOfDay } from 'date-fns'
import es from "date-fns/locale/es";
import addDays from "date-fns/addDays";
import texts from '../../constants/texts';
import { LanguageContext } from '../../components/LanguageContext';
import ResultCard from './ResultCard';
import 'react-datepicker/dist/react-datepicker.css';
import dropDownArrow from '../../assets/icons/dropdown_arrow.png';
import checkSpace from '../../assets/icons/check_Space.png';
import checkMark from '../../assets/icons/Checkmark.png';
import getExperiences from '../../utils/getExperiences';
import excursionOrigins from '../../constants/origins';
import UpsellWindow from '../../components/UpsellWindow';
import inputListValueValidator from '../../utils/inputListValueValidator';

registerLocale("es", es);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const Home = (props) => {
  const { price, setPrice, reservationData, setReservationData, vehicle, setVehicle } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const { language, setLanguage } = useContext(LanguageContext);
  const [upsell, setUpsell] = useState(false);
  const [resultados, setResultados] = useState(null);
  const [fechaIda, setFechaIda] = useState(addDays(new Date(), 2));
  const watchOrigen = watch('origen');
  const experiences = getExperiences(language);

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
  }, [watchOrigen])

  const onSubmit = async (data) => {
    const allFields = {
      ...data, fechaIda, fechaVuelta, horaIda, horaVuelta, tipoDeViaje: 'excursión'
    };
    console.log('data -', allFields);
    setResultados(allFields);
    setReservationData(allFields);
  };

  function handleChangeFechaIda(fecha) {
    setMinTime(calculateMinTime(fecha));
    setHoraIda(fecha);
  }

  // function showDestinations(origen) {
  //   if (origen === 'Merida') {
  //     return excursionsFromMerida.map(
  //       (destino) => <option key={destino} value={destino}>{destino}</option>,
  //     );
  //   }
  //   return excursionsFromCancun.map(
  //     (destino) => <option key={destino} value={destino}>{destino}</option>,
  //   );
  // }

  inputListValueValidator(texts[language]['index-v']);
  console.log('experiences - ', experiences);
  return (
    <div className="react-app">
      <div className="background-container">
        <form className="skinny-search-box" onSubmit={handleSubmit(onSubmit)}>
          <div className="transport-details-container">

            <div className="field-container">
              <div className="custom-select-wrapper">
                <input autoComplete="off" placeholder={texts[language]['index-0']} list="origin" aria-labelledby="label-origen" className="custom-arrow detail-input" name="origen" ref={register({ required: true })} />
                <img className="arrow" src={dropDownArrow} alt="" />
                <datalist id="origin">
                  {excursionOrigins.map((origen) => <option key={`origen-${origen}`} value={origen}>{origen}</option>)}
                </datalist>
              </div>
              {/* <div className="error-container">{errors.origen && texts[language]['index-14']}</div> */}
            </div>

            <div className="field-container">
              <div className="custom-select-wrapper">
                <DatePicker
                  id="date-picker-ida"
                  name="fecha-ida"
                  selected={fechaIda}
                  onChange={(fecha) => handleChangeFechaIda(fecha)}
                  minDate={addDays(new Date(), 2)}
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
                  placeholder="Fecha"
                />
                <img className="arrow" src={dropDownArrow} alt="" />
              </div>
              {/* <div className="error-container" /> */}
            </div>

            <div className="field-container">
              <div className="custom-select-wrapper">
                <input className="detail-submit mobile-submit" type="submit" value="Buscar" />
                {/* <div className="error-container" /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="results-container">
        <div className="header-container">
          <h1>{texts[language]['results-header']}</h1>
        </div>
        <div className="results-card-container">
          <ResultCard id="result" experience={experiences[0]} setUpsell={setUpsell} setPrice={setPrice} language={language} />
          <ResultCard id="result" experience={experiences[0]} setUpsell={setUpsell} setPrice={setPrice} language={language} />
          <ResultCard id="result" experience={experiences[0]} setUpsell={setUpsell} setPrice={setPrice} language={language} />
          <ResultCard id="result" experience={experiences[0]} setUpsell={setUpsell} setPrice={setPrice} language={language} />

        </div>
      </div>
      {
        upsell
          ? (
            <div style={{ zIndex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <UpsellWindow reservationData={reservationData} setReservationData={setReservationData} price={price} setPrice={setPrice} setUpsell={setUpsell} />
            </div>
          )
          : null
      }
    </div >
  );
};

export default Home;
