import React, { useContext } from 'react';
import texts from '../constants/texts';
import { LanguageContext } from '../components/LanguageContext';
import { experiencesByOrigin } from '../constants/experiences';

const DetallesDeCompra = (props) => {
  const { reservationData, vehicle, price } = props;
  const { experience, fechaIda, origen, numberOfPeople } = reservationData;
  const { language } = useContext(LanguageContext);
  console.log('detalles reservationData', reservationData);

  return (
    <div className="reservation-details-container">
      <h1>{texts[language]['details-0']}</h1>
      <div className="purchase-details-box">
        <div className="detail-logistics">
          <img src={vehicle} className="results-image" alt="car" />
          <h2 id="trip-type"><strong>
            {texts[language]['details-1']}
          </strong></h2>
          <h3 id="origin"><strong>{texts[language]['details-2']}</strong></h3>
          <p>{origen}</p>
          <h3><strong>{texts[language]['details-3']}</strong></h3>
          <p>{experience.title}</p>
          <h3><strong>{texts[language]['details-4']}</strong></h3>
          <p>{fechaIda.toLocaleDateString()}</p>
          <h3><strong>{texts[language]['details-6']}</strong></h3>
          <p>{numberOfPeople > 1 ? `${numberOfPeople} ${texts[language]['details-7a']}` : texts[language]['details-7b']}</p>
        </div>

        <div className="detail-price-calculator">
          <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="row price-calculation">
              <p>{experience.title}</p>
              <p style={{ width: 40, marginLeft: 10 }}> X {numberOfPeople}</p>
            </div>
            <div className="row price-calculation-product">
              <p>${(experience.price * numberOfPeople).toLocaleString('en-US')}</p>
            </div>
          </div>

          {reservationData.upSells
            ? Object.values(experience.upSells).map((item) => {
              let product = reservationData.upSells[item.title];
              if (product && product.quantity > 0) {
                return (
                  <div className="row" key={item.title} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="row price-calculation">
                      <p>{item.title}</p>
                      <p style={{ width: 40, marginLeft: 10 }}> X {product.quantity}</p>
                    </div>
                    <div className="row price-calculation-product">
                      <p>${(product.price * product.quantity).toLocaleString('en-US')}</p>
                    </div>
                  </div>
                )
              }
            })
            : null
          }
        </div>
        <div className="row" style={{ justifyContent: 'space-between', marginTop: 5 }}>
          <h3><strong>{texts[language]['details-8']}</strong></h3>
          <p style={{ fontSize: '2.1rem' }}><strong>${price.toLocaleString('en-US')}</strong><small> MXN</small></p>
        </div>
      </div>
    </div>
  )
}

export default DetallesDeCompra;