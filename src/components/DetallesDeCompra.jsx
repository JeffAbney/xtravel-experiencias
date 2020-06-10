import React, { useContext } from 'react';
import texts from '../constants/texts';
import { LanguageContext } from '../components/LanguageContext';

const DetallesDeCompra = (props) => {
  const { reservationData, vehicle, price } = props;
  const { tipoDeViaje, fechaIda, fechaVuelta, origen, destino, numeroPasajeros } = reservationData;
  const { language } = useContext(LanguageContext);

  return (
    <div className="reservation-details-container">
      <h1>{texts[language]['details-0']}</h1>
      <div className="purchase-details-box">
        <img src={vehicle} className="results-image" alt="car" />
        <h2><strong>
          {(function writeTripType() {
            if (tipoDeViaje === 'sencillo') {
              return texts[language]['details-1a']
            } if (tipoDeViaje === 'redondo') {
              return texts[language]['details-1b']
            } if (tipoDeViaje === 'excursión') {
              return texts[language]['details-1c']
            }
          }())}
        </strong></h2>
        <h3><strong>{texts[language]['details-2']}</strong></h3>
        <p>{origen}</p>
        <h3><strong>{texts[language]['details-3']}</strong></h3>
        <p>{destino}</p>
        <h3><strong>{texts[language]['details-4']}</strong></h3>
        <p>{fechaIda.toLocaleDateString()}</p>
        <h3><strong>{texts[language]['details-6']}</strong></h3>
        <p>{numeroPasajeros > 1 ? `${numeroPasajeros} ${texts[language]['details-7a']}` : texts[language]['details-7b']}</p>
        <div className="row" style={{ justifyContent: 'space-between', marginTop: 5 }}>
          <h3><strong>{texts[language]['details-8']}</strong></h3>
          <p style={{ fontSize: '2.1rem' }}><strong>${price.toLocaleString()}</strong><small> MXN</small></p>
        </div>

      </div>
    </div >
  )
}

export default DetallesDeCompra;