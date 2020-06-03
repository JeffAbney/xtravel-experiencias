import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const ThankYou = (props) => {
  const { language, payment_Method } = props;
  const history = useHistory();
  const [here, setHere] = useState('');

  useEffect(function scrollToThankYou() {
    const thankYou = document.getElementsByClassName("thank-you-background")[0];
    if (thankYou) {
      thankYou.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  })

  function handleClick() {
    history.push('/');
  }

  const imageId = (function getThankYouImageId() {
    if (language === 'es' && payment_Method === 'card') {
      return 'paid-image-es'
    }
    if (language === 'es' && payment_Method === 'oxxo_cash') {
      return 'oxxo-image-es'
    }
    if (language === 'en' && payment_Method === 'card') {
      return 'paid-image-en'
    }
    if (language === 'en' && payment_Method === 'oxxo_cash') {
      return 'oxxo-image-en'
    }
  }())

  return (
    <div id="thank-you" style={{ width: '100vw', height: '100vh' }}>
      <div className="thank-you-background" id={imageId}>
        <button className="dark-button" style={{ maxWidth: '30%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '35%' }} onClick={handleClick}>¡OK!</button>
      </div>
    </div>
  );
}

export default ThankYou;
