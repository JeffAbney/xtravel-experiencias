import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import texts from '../constants/texts';
import { LanguageContext } from '../components/LanguageContext';
import makePurchase from '../utils/makePurchase';
import paymentFieldsList from '../constants/paymentFieldsList';

const PaymentForm = (props) => {
  const { reservationData, ScrollToTop, goToThankYou, price, setIsLoading, setPayment_Method } = props;
  const { tipoDeViaje } = reservationData;
  const { language } = useContext(LanguageContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const watchPaymentMethod = watch('paymentMethod', 'card');
  const watchCardName = watch('cardName', '');
  const watchCardNumber = watch('cardNumber', '');
  const watchCVC = watch('CVC', '');
  const watchExpirationMonth = watch('expirationMonth', '');
  const watchExpirationYear = watch('expirationYear', '');
  const watchPhone = watch('phone', '');
  const watchEmail = watch('email', '');
  const watchClientName = watch('clientName', '');


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.conekta.io/js/latest/conekta.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
      console.log(errors);
      document.getElementById("card-form").scrollIntoView({ behavior: "smooth" });
    }
  }, [errors]);

  const fullReservationData = {
    ...reservationData,
    paymentMethod: watchPaymentMethod,
    cardName: watchCardName,
    phone: watchPhone,
    email: watchEmail,
    cardNumber: watchCardNumber,
    expirationMonth: watchExpirationMonth,
    expirationYear: watchExpirationYear,
    CVC: watchCVC,
    price: price,
    clientName: watchClientName,
    language,
  }

  const onSubmit = () => {
    setIsLoading(true);
    setPayment_Method(watchPaymentMethod);
    makePurchase(fullReservationData, goToThankYou);
  }

  return (
    <form id="card-form" onSubmit={handleSubmit(onSubmit)}>
      <span className="card-errors">
        {Object.keys(errors).length === 0 && errors.constructor === Object
          ? null
          : (
            <ul>
              {Object.keys(errors).map((error) => <li key={`error-${error}`}>{texts[language]['payform-0']}{paymentFieldsList[error][language]}</li>)}
            </ul>
          )
        }
      </span>
      <div>
        <div>
          <h1 className="payment-form-section-title">{texts[language]['payform-1']}</h1>
          <div className="row" style={{ marginBottom: 12 }}>
            <input type="radio" name="paymentMethod" value="card" ref={register({ required: true })} defaultChecked={true} />
            <label htmlFor="paymentMethod">{texts[language]['payform-2']}</label>
          </div>
          <div className="row" style={{ marginBottom: 18 }}>
            <input type="radio" name="paymentMethod" value="oxxo_cash" ref={register({ required: true })} defaultChecked={false} />
            <label htmlFor="Oxxo">{texts[language]['payform-3']}</label>
          </div>
        </div>
      </div>

      {watchPaymentMethod === 'card' ?
        (
          <div className="payment-form-section">
            <h1 className="payment-form-section-title">{texts[language]['payform-4']}</h1>
            <label className="half">
              <h2 className="payment-form-field-title">{texts[language]['payform-5']}</h2>
              <input type="text" size="20" name="cardName" ref={register({ required: true })} />
            </label>

            <label className="half">
              <h2 className="payment-form-field-title">{texts[language]['payform-6']}</h2>
              <input type="text" size="20" maxLength="16" name="cardNumber" ref={register({ required: true })} />
            </label>

            <label className="half">
              <h2 className="payment-form-field-title">{texts[language]['payform-7']}</h2>
              <input type="text" size="4" name="CVC" maxLength="3" ref={register({ required: true })} />
            </label>

            <label className="half">
              <h2 className="payment-form-field-title">{texts[language]['payform-8']}</h2>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input className="tiny-input" type="text" size="2" maxLength="2" name="expirationMonth" placeholder="(MM)" ref={register({ required: true })} />
                <h1 className="date-divider" style={{ width: 'auto' }}>/</h1>
                <input className="small-input" type="text" size="4" maxLength="4" name="expirationYear" placeholder={texts[language]['payform-9']} ref={register({ required: true })} />
              </div>
            </label>

          </div>
        )
        : null
      }

      <div className="payment-form-section">
        <h1 className="payment-form-section-title">{texts[language]['payform-10']}</h1>

        <label>
          <h2 className="payment-form-field-title">{texts[language]['payform-11']}</h2>
          <input type="text" size="60" name="clientName" placeholder={texts[language]['payform-12']} ref={register({ required: true })} />
        </label>
      </div>

      <div className="payment-form-section">
        <h1 className="payment-form-section-title">{texts[language]['payform-22']}</h1>

        <label>
          <h2 className="payment-form-field-title">{texts[language]['payform-23']}</h2>
          <input type="text" size="20" name="phone" ref={register({ required: true })} />
        </label>

        <label>
          <h2 className="payment-form-field-title">{texts[language]['payform-24']}</h2>
          <input type="text" size="20" name="email" ref={register({ required: true })} />
        </label>
      </div>

      <div className="payment-form-section">
        <h1 className="payment-form-section-title">{texts[language]['payform-25']}</h1>
        <label>
          <h2 className="payment-form-field-title">{texts[language]['payform-26']}</h2>
          <textarea rows="10" cols="100" type="text" name="Notes" ref={register()} />
        </label>
      </div>

      <div className="row" style={{ alignItems: 'center', marginTop: 10 }}>
        <input type="checkbox" name="terms" ref={register({ required: true })} defaultChecked={false} />
        <label style={{ marginLeft: 8 }} htmlFor="paymentMethod">{texts[language]['payform-27']}</label>
      </div>

      <button className="reserve-submit" type="submit">{texts[language]['payform-28']}</button>
    </form >
  )
}

export default PaymentForm;