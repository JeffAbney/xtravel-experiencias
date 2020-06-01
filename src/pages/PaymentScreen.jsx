import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import texts from '../constants/texts'
import { LanguageContext } from '../components/LanguageContext';
import DetallesDeCompra from '../components/DetallesDeCompra';
import PaymentForm from '../components/PaymentForm';
import { useContext } from 'react';

const PaymentScreen = (props) => {
  const { reservationData, vehicle, price, setPayment_Method } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const { language } = useContext(LanguageContext);

  function goToThankYou() {
    setIsLoading(false);
    history.push('/thankYou');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text='Cargando...'
    >
      <div className="payment-screen">
        <DetallesDeCompra reservationData={reservationData} vehicle={vehicle} price={price} />
        <div className='payment-form-container'>
          <p><strong>{texts[language]['payscreen-0']}</strong></p>
          <PaymentForm reservationData={reservationData} goToThankYou={goToThankYou} price={price} setIsLoading={setIsLoading} setPayment_Method={setPayment_Method} />
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default PaymentScreen;